# CLAUDE.md

## What this project is

AETHER//09: an independent, unranked research and review website for web3 / crypto casinos. It combines ten plain-English knowledge hubs (regulation, provably fair, payments, smart contracts, responsible play, security, scams, AI, market data, glossary) with a searchable directory of 60 casino entries. The directory is deliberately unranked: no scores, no star ratings, no leaderboard.

## How it is built (what actually exists)

This is a **single static HTML page with no build step and no backend**. There is no package.json, framework, bundler, database, or CMS. The folder is a git repository (GitHub: shotgunsmiley/web3-casino-reviews); work happens on a development branch and reaches `main` through a pull request.

- **Markup and styling:** Tailwind CSS via the CDN script (`https://cdn.tailwindcss.com`), configured inline in a `tailwind.config` block in `<head>` (custom colors `void`, `obsidian`, `prism`, `cyber`, `emeraldNeon`; fonts Inter, Plus Jakarta Sans, JetBrains Mono). A `<style>` block adds custom classes: `.liquid-glass`, `.glass-card`, `.plain-english`, `.editorial-gradient`, `.reveal-up`, `.arch-filter-btn`, `.nav-link`, `.view-toggle-btn`, `.pill-row`, scrollbar styles, focus-visible rings, a 16px body-copy rule, 44px tap targets, the compact-list view rules and `prefers-reduced-motion` rules.
- **Fonts:** Google Fonts, loaded in `<head>`.
- **Behavior:** one inline `<script>` at the bottom of `<body>`, wrapped in `DOMContentLoaded`, plain vanilla JavaScript with no libraries.
- **Pages:** there is only one page, `index.html`. Sections are reached by anchor links (`#hub-02-provably-fair`, `#casino-directory-30`, and so on), not separate files.

## File structure

```
/ (repo root)
├── index.html             THE SITE. All markup, styles, data and scripts live here.
├── CLAUDE.md              This file.
├── review-site-notes.md   Research notes on other review sites and premium templates. Not part of the site.
└── .claude/agents/        architect.md and editor.md, the review/edit subagents used for upgrade loops.
```

Only `index.html` is the product. Treat everything else as notes or tooling and do not edit it as part of site work. (Older backups, screenshots and scratch tools mentioned in earlier versions of this file are not in the repo.)

### Inside index.html (top to bottom)

| Section (anchor id) | What it is |
|---|---|
| `#overview` | Hero: headline, buttons, 3D prism canvas (`#hero-canvas`), 18+ line, four-stat card badged "UNVERIFIED ESTIMATES" |
| `#hub-directory` | Index grid linking to the ten guides (with category filter pills) |
| `#casino-directory-30` | The casino directory: title, one two-column notice box (unranked notice, what the directory is, unverified status, links and money / 18+), collapsible "Key Considerations" box, sticky controls (search on its own row, batch select, live count, Reset, Cards / Compact list switch, category pills), results grid (`#casino-directory-grid`). The id still says "30" for historical reasons; do not rename it, nav links depend on it. |
| `#hub-02-provably-fair` | Pillar 02 with a live SHA-256 roll verifier (Web Crypto); contains `#interactive-labs` |
| (inside the same flow) | Pillars 03 to 09: `#hub-03-payments`, `#hub-04-smart-contracts`, `#hub-05-responsible`, `#hub-06-security`, `#hub-07-scams`, `#hub-08-ai`, `#hub-09-market-data` |
| `#glossary-archive` | Pillar 10: searchable glossary, timeline, report card |
| Modals | `#platform-review-modal` (casino detail, with related entries and an 18+ line), `#report-modal` (executive summary). Both are `role="dialog"` with focus handling. |
| `<footer>` | Disclaimer, 18+ line with helpline links, and links to every section |
| `#back-to-top` | Floating button shown after scrolling |

**Missing section:** there is no `#hub-01-regulation` section in the current file. The "01 Regulation" card in `#hub-directory` and the footer link point to it and go nowhere, and the regulation filter script (`.reg-btn`, `.reg-card`) finds no elements and does nothing. The owner has chosen to hold off on this; do not invent regulation content to fill it, and do not "fix" the links unless asked.

### Inside the script

- `categoryMeta`: the six directory categories (key, title, subtitle).
- `web3CasinosCatalog`: the array of all 60 casino entries (see below).
- `renderCasinoDirectory()`: filters the catalog by search text, category and batch, then builds the card HTML. Each category shows 6 entries until "Show all" is clicked (`expandedCats`, `CARDS_PER_CATEGORY`); while a search, category filter or batch is active it shows every match. It also sets the live count label (it can read "Showing 34 of 60" because of the 6-per-category cap).
- `openPlatformModal()`: fills the detail modal from one catalog entry and lists other entries in the same category (catalog order, labelled unranked).
- `closeModal()` plus a Tab trap and Escape handler: modal focus handling and scroll lock.
- Other blocks: mobile menu, scroll-spy nav highlighting, back-to-top, card hover glow, scroll reveal, hero prism canvas (still when reduced motion is on), hub filter, SHA-256 verifier, hygiene checklist, market-data chart (`chartDatasets`), glossary search.

## Where the casino data lives

All casino data is the JavaScript array `web3CasinosCatalog` inside `index.html`. There is no external JSON, CSV or database. Each entry is one object with these fields, all strings:

```js
{
  id: 'b2-31-example',        // unique; 'b1-name' for batch 1, 'b2-NN-name' for batch 2
  name: 'Example Casino',
  batch: 'batch-2',           // 'batch-1' or 'batch-2' (matches the <select> options)
  batchLabel: 'Additional 30 (#31)',
  archKey: 'game-libraries',  // MUST be a key of categoryMeta
  archLabel: 'High-Volume & Multi-Provider Game Libraries', // matches categoryMeta title
  custody: '…',               // who holds funds
  license: '…',               // licensing / oversight
  kyc: '…',                   // verification triggers
  techStack: '…',             // payments and tech
  summary: '…',               // shown on the card and in the modal
  strengths: '…',             // modal
  tradeoffs: '…'              // modal
}
```

Valid `archKey` values: `tokenomics-yield`, `lightning-instant`, `sportsbook-hybrid`, `game-libraries`, `vip-feature-editions`, `non-custodial-web3`.

The existing entries carry **no source links, no verification dates, and no affiliate URLs**. Their licence, KYC and feature claims were written without citations. Every card and the modal say "Unverified · no check date recorded". Do not treat any existing claim as verified, and do not repeat one as fact in new copy without checking it.

## How to add a new casino review

1. Find `web3CasinosCatalog` in `index.html` and add one object at the end of the array, matching the style of the entries around it (single quotes, two-space indentation steps, trailing comma handling as in neighbors).
2. Fill every field above. Pick the `archKey` that best fits how the casino works, and copy the matching `archLabel` exactly.
3. Use a unique `id` following the existing pattern. For a new casino choose `batch-2` with the next number, unless told otherwise.
4. For any fact you cannot confirm from a source you actually read, write `unverified` in that field (for example `license: 'Unverified'`). Never guess.
5. Update the hard-coded entry counts. The number 60 appears in: the directory eyebrow text ("60 Entries Across Clear Categories"), the directory intro sentence, the `Batch: All 60 Entries` option, the initial text of `#casino-count-label`, the search box wording if it mentions a count, the "All Categories (60)" filter pill, an HTML comment above the directory and a JS comment. Search the file for `60` to find them. The "Directory" nav label has no count.
6. Card tags are derived by `shortCustody()` and `shortLicense()` where present. Licence names outside Malta, Curaçao, Anjouan, USA or Decentralized display as "Offshore" on the card; the modal still shows the full text.
7. Do not add a new category or batch option unless asked. If one is needed, a category requires a `categoryMeta` entry and a filter button (`data-arch-filter`), and a batch requires a new `<option>` in `#casino-cohort-select`.
8. Check that the page still works: no duplicate element ids, no console errors, the new card appears, its modal opens (focus moves in, Esc closes it), and search and filters still find it.

## Rules

1. **Never invent facts, ratings, bonuses or licenses.** Only state what you have verified from a source you actually read. If data is missing, mark it `unverified`. Do not add star ratings, scores, rankings, "top pick" badges or featured/promoted slots; the directory is unranked by design.
2. **Affiliate links must be labeled as affiliate links.** There are currently no outbound casino links, and the directory notice box says so. If any are added, label each one clearly as an affiliate link next to the link, add `rel="sponsored noopener noreferrer"`, update that notice, and keep affiliate status from influencing order or wording of reviews.
3. **Every page shows an 18+ / responsible gambling notice.** Every page, including any page added in the future, must show it visibly, not only in a hub section. Current state: it appears in the hero, the directory notice box, the casino detail modal, the Pillar 05 badge and the footer (with helpline links). Keep the helpline links in Pillar 05 and the footer intact, and include the notice on any new page from the start.
4. **Keep the existing design and code style.** Do not rebuild or restructure things unless asked. Keep the single-file, Tailwind-CDN, vanilla-JS approach. Reuse existing classes and patterns (`glass-card`, `plain-english`, `font-mono` labels, `reveal-up`) instead of introducing new ones. Make the smallest change that does the job. Keep accessibility: 16px body copy, visible focus, 44px tap targets, reduced-motion support, works at 320px wide.
5. When changing code, send the whole updated `index.html` back to the user rather than snippets. They work from a phone and cannot apply partial edits.

## Known open issues (do not "fix" without being asked)

- `#hub-01-regulation` does not exist (see above). The owner chose to hold off.
- Nine catalog entries repeat brands that already appear elsewhere (#20 to #22, and the feature-focus entries #23, #24, #27 to #30), so the 60 entries cover about 51 distinct brands.
- Licence, KYC and feature claims across the catalog are unsourced.
- Market-data figures in the hero and Pillar 09 (68%, $114B, the 2024 to 2030 series) are unsourced estimates and are labelled as such.
- There is no methodology page, named authors, "last checked" dates, corrections/contact route or funding statement, because none of that information exists yet. Do not invent it; see `review-site-notes.md` for what other review sites publish.
