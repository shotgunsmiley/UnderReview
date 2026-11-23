#!/usr/bin/env node
/* SEO generator (maintenance script, not part of the site).
 * Reads config.js (baseUrl) and data/catalog.js (brand names), then writes, idempotently:
 *   - one <!-- seo:start --> ... <!-- seo:end --> block per page (title, description,
 *     canonical, Open Graph, favicon, JSON-LD: WebSite on home, BreadcrumbList inside)
 *   - sitemap.xml and robots.txt
 * Run after changing baseUrl in config.js or after changing a catalog name:
 *   node tools/seo.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(root, f), 'utf8');
const sandbox = { window: {} };
vm.runInNewContext(read('config.js'), sandbox);
vm.runInNewContext(read('data/catalog.js'), sandbox);

const base = sandbox.window.URConfig.baseUrl.replace(/\/$/, '');
const catalog = sandbox.window.web3CasinosCatalog;
const TODAY = '2026-11-23';
const SITE = 'UnderReview';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const home = {
  file: 'index.html', url: base + '/', crumbs: [],
  title: 'Crypto Casino Directory: Compare Bitcoin and Lightning Casinos | ' + SITE,
  desc: 'Compare crypto casinos in one unranked directory. See licence, custody, KYC and sources for each entry, with a status on every field. 18+ only, always.',
  ld: 'website'
};
const inner = [
  { file: 'compare/index.html', section: 'Compare', title: 'Compare Crypto Casinos Side by Side | ' + SITE,
    desc: 'Compare two or three crypto casinos side by side on licence, custody, KYC and verification status. Entries are unranked and show their sources. 18+ only.' },
  { file: 'methodology/index.html', section: 'How we review', title: 'How We Review Crypto Casinos | ' + SITE,
    desc: 'How UnderReview checks each crypto casino entry, what Checked, Stated, Unverified and Unknown mean, and how entries are kept unranked. 18+ only, always.' },
  { file: 'glossary/index.html', section: 'Glossary', title: 'Crypto Casino Glossary: Plain-English Terms | ' + SITE,
    desc: 'Plain-English glossary of crypto casino terms, including custody, KYC, licence, provably fair and Lightning, explained for new players. 18+ only, always.' },
  { file: 'guides/index.html', section: 'Guides', title: 'Crypto Casino Guides in Plain English | ' + SITE,
    desc: 'Plain-English guides to crypto casinos: how custody, KYC, licences and withdrawals work in practice, and how to check a claim before you play. 18+ only.' },
  { file: 'guides/learning-path/index.html', section: 'Learning path', parent: ['Guides', 'guides/'], title: 'Crypto Casino Learning Path for Beginners | ' + SITE,
    desc: 'A step-by-step learning path for crypto casinos: the basics, how to check a licence, custody and KYC, then how to compare entries side by side. 18+ only.' },
  { file: 'disclosure/index.html', section: 'Disclosure and safer gambling', title: 'Disclosure and Safer Gambling | ' + SITE,
    desc: 'How UnderReview is funded and kept free of ads, what affiliate links would mean if added, and where to get free, confidential safer-gambling help. 18+ only.' },
  { file: 'audit/index.html', section: 'The Glass Vault and the Company Safe', title: 'The Glass Vault and the Company Safe (Opinion) | ' + SITE,
    desc: 'An opinion piece on crypto casino custody and company structure, labelled clearly as opinion, with sources this site has not checked. 18+ only, always.' }
];

// Review pages: one per catalog entry. Title and description use only the catalog name and
// variant label, never catalog claims (licence, custody, KYC text is not repeated in metadata).
const DESC_SENTENCES = [
  ' Each field shows a status: Checked, Stated, Unverified or Unknown.',
  ' Entries are unranked.',
  ' Sources are listed on the page.',
  ' 18+ only.',
  ' Gambling involves risk of loss.',
  ' Check your local law before you play.'
];
// Every subset of the sentences (fixed order), added after the entry's own name line.
const descCandidates = (n) => {
  const head = n + ' is an unranked crypto casino entry in the UnderReview directory.';
  const out = [];
  for (let m = 0; m < (1 << DESC_SENTENCES.length); m++) {
    let t = head;
    DESC_SENTENCES.forEach((x, i) => { if (m & (1 << i)) t += x; });
    if (t.length >= 150 && t.length <= 160) out.push(t);
  }
  return out;
};
const reviews = catalog.map((e) => {
  const display = e.name + (e.descriptor ? ' (' + e.descriptor + ')' : '');
  return {
    file: 'review/' + e.slug + '/index.html', slug: e.slug, display,
    title: display + ' Crypto Casino Review | ' + SITE,
    descs: descCandidates(display), section: null
  };
});

const pages = [];
pages.push(Object.assign({}, home, { canon: home.url, name: SITE }));
inner.forEach((p) => pages.push(Object.assign({}, p, { canon: base + '/' + p.file.replace(/index\.html$/, '') })));
reviews.forEach((r) => pages.push(Object.assign({}, r, { canon: base + '/review/' + r.slug + '/' })));

const errors = [];
const seenTitles = new Set();
const chosenDesc = {};
for (const p of pages) {
  if (seenTitles.has(p.title)) errors.push('duplicate title: ' + p.title);
  seenTitles.add(p.title);
  if (p.descs) {
    const ok = p.descs.find((d) => d.length >= 150 && d.length <= 160);
    if (!ok) errors.push('no description in 150-160 chars for ' + p.file + ': ' + p.descs.map((d) => d.length).join(','));
    p.desc = ok || p.descs[0];
  } else if (p.desc.length < 150 || p.desc.length > 160) {
    errors.push('description length ' + p.desc.length + ' for ' + p.file);
  }
  if (/\b(best|top|featured|recommended|rank(ed|ing)?|score[sd]?|stars?)\b/i.test(p.title + ' ' + p.desc) && p.file !== 'audit/index.html') {
    errors.push('banned word in metadata for ' + p.file);
  }
  chosenDesc[p.file] = p.desc;
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const seoBlock = (p) => {
  const depth = p.file.split('/').length - 1;
  const rel = '../'.repeat(depth);
  let ld;
  if (p.ld === 'website') {
    ld = { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE, url: base + '/',
      description: p.desc, inLanguage: 'en', dateModified: TODAY };
  } else {
    const items = [{ '@type': 'ListItem', position: 1, name: SITE, item: base + '/' }];
    if (p.parent) items.push({ '@type': 'ListItem', position: 2, name: p.parent[0], item: base + '/' + p.parent[1] });
    items.push({ '@type': 'ListItem', position: items.length + 1, name: p.display || p.section, item: p.canon });
    ld = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
  }
  const json = JSON.stringify(ld).replace(/</g, '\\u003c');
  return [
    '<!-- seo:start -->',
    '<title>' + esc(p.title) + '</title>',
    '<meta name="description" content="' + esc(p.desc) + '">',
    '<link rel="canonical" href="' + esc(p.canon) + '">',
    '<meta property="og:type" content="website">',
    '<meta property="og:site_name" content="' + SITE + '">',
    '<meta property="og:title" content="' + esc(p.title) + '">',
    '<meta property="og:description" content="' + esc(p.desc) + '">',
    '<meta property="og:url" content="' + esc(p.canon) + '">',
    '<meta name="twitter:card" content="summary">',
    '<link rel="icon" href="' + rel + 'favicon.svg" type="image/svg+xml">',
    '<script type="application/ld+json">' + json + '</script>',
    '<!-- seo:end -->'
  ].join('\n') + '\n';
};

for (const p of pages) {
  const file = path.join(root, p.file);
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<!-- seo:start -->[\s\S]*?<!-- seo:end -->\n/, '');
  const matches = html.match(/<title>[^<]*<\/title>\n/g) || [];
  if (matches.length !== 1) throw new Error('expected one <title> line in ' + p.file);
  html = html.replace(/<title>[^<]*<\/title>\n/, () => seoBlock(p));
  fs.writeFileSync(file, html);
}

const urls = pages.map((p) => p.canon);
fs.writeFileSync(path.join(root, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => '  <url><loc>' + esc(u) + '</loc><lastmod>' + TODAY + '</lastmod></url>').join('\n') +
  '\n</urlset>\n');
fs.writeFileSync(path.join(root, 'robots.txt'),
  'User-agent: *\nAllow: /\n\nSitemap: ' + base + '/sitemap.xml\n');
console.log('pages: ' + pages.length + ', sitemap urls: ' + urls.length);
