# CLAUDE.md

## What this is

AETHER//09: an independent, **unranked** research site for web3 / crypto casinos. 60 catalog entries, 4 page templates, plain-English guides. Static HTML + CSS, no build step, no backend, no analytics, no ads, no affiliate links. Redesign (Phases 1 to 6) is done; remaining work is Phase 7 QA and content decisions.

## Non-negotiable rules (in priority order)

1. **No scores, stars, rankings, "top", "best", "featured", "recommended" in anything we write.** Verification status replaces ratings: Checked / Stated / Unverified / Unknown. The only allowed hits are the two exact negation sentences on `/methodology/` (VISUAL_DESIGN.md decision 14). **Owner-approved exception:** `/audit/` is an opinion piece with the author's own scores out of 10, labelled as opinion on the page and mentioned on `/methodology/`; scores stay out of the directory, catalog, Home, Compare and review pages.
2. **Never invent facts.** Licences, bonuses, custody, KYC, dates, authors, schedules, contact routes, funding: only what a source you actually read says. Missing = `Unknown`. Do not "fix" catalog text, counts or links on your own; catalog accuracy is the owner's decision. Report discrepancies instead.
3. **Status meaning:** Checked = confirmed on an official regulator register page. Stated = taken from the casino's own pages. Unverified = written without a recorded source. Unknown = no data, or looked and did not find it (never means "none").
4. **18+ and money disclosure on every page**, above the fold: banner text `18+ only. Gambling involves risk of loss. No affiliate relationships exist at time of writing.` + link to `/disclosure/`; footer keeps the 18+ line and helplines (1-800-GAMBLER, GamCare, BeGambleAware). New pages include both from the start.
5. **Affiliate links:** none exist. If one is ever added: label it as an affiliate link next to the link, `rel="sponsored noopener noreferrer"`, update the banner, disclosure page and methodology, and never let it affect order or wording. No ad slots.
6. **No casino UI** (slot motion, chips, dice, gold, neon) and none of the retired look (dark/purple/glass/gradient). Editorial layer only. Animation is allowed as described under Design system rules (owner-approved).

## Structure (what actually exists)

```
index.html              Home / directory (JS builds cards from data/catalog.js; static list baked for no-JS)
compare/index.html      Compare 2 or 3 entries, ?casinos=slug,slug, unranked, order picked
review/{slug}/index.html  60 baked review pages (no JS needed). slug = catalog id without b1-/b2-NN-
methodology/ glossary/ guides/ disclosure/   Text pages (disclosure has #safer-gambling)
audit/                  Opinion piece (owner-supplied article, author's scores, sources not checked by this site)
data/catalog.js         window.web3CasinosCatalog: ALL catalog data
tokens.css styles.css   Design tokens and components. Only CSS files.
site.js                 Menu toggle only
DESIGN_BRIEF.md IA_PROPOSAL.md DESIGN_SYSTEM.md WIREFRAMES.md VISUAL_DESIGN.md   Phase documents (reference; decisions are final)
mocks/                  Phase 5 reference mocks (not part of the site)
review-site-notes.md    Research notes, not part of the site
.claude/agents/         architect, editor, researcher, coder (they cannot call each other; the main session relays)
```

Pages use **relative paths** (`../../styles.css`) and directory URLs (`review/stake/`), so the site works from any host sub-path. Home keeps `id="casino-directory-30"` for old links. There is no regulation guide and no link to one; do not add either unless asked.

## Design system rules

- Only existing tokens and classes. No hex, no inline `style`, no `<style>`, no new classes or tokens without a written proposal the owner approves (the Phase 3 amendments are the precedent: exact CSS, no literals).
- Dark default, OS-light fallback. Two system font families. Accent colour only on "Go to comparison" and "Compare {name} with other entries".
- 16px body, visible focus, 44px targets, reduced motion, works at 320px, no horizontal scroll.
- Badge states are never dimmed or hidden to make a page look better; the yellow volume is the true state of the data.
- JS is limited to: the `js` class hook in `<head>`, `site.js`, Home/Compare inline scripts, glossary search. No libraries. Animation is allowed (see the animation rule below), CSS only.
- **Animation is allowed (owner-approved), including looping, CSS only.** Take ideas from motionsites.dev, not its code (its prompts are paid). Rules: durations, delays, distances and sizes come from tokens in `tokens.css`; colours only from existing tokens (no hex); existing classes or pseudo-elements, no new classes without a proposal; all of it switched off by the existing `prefers-reduced-motion` block; nothing may hide, dim or cover badges, text or the 18+ banner, or cause layout shift (animate `opacity` and `transform` only); no flashing faster than 3 times per second; no libraries, no new JS. Current animations: hover/focus transitions, staggered page entrance, the 8-bit pixel suits/dice background that falls like dealt cards (`body::before/::after`), and a card lift-and-tilt on hover. Open item: WCAG 2.2.2 pause control for looping motion over 5 seconds (needs the owner's decision on a control and JS).

## Catalog data

Each entry in `data/catalog.js` has: `id, slug, name` (public name, no "Entry #N"), `entryNo` (hidden), `batch, batchLabel, archKey, archLabel, custody, license, kyc, techStack, summary, strengths, tradeoffs`; optional `descriptor`/`primary` (9 duplicate-brand entries), `custodyNotFound`; and, only for entries checked against sources actually read: `operator, licenseNumber, coins, withdrawals, bonusTerms, restrictedCountries, rgTools, support, checked[], stated[], sources[{label,url}], lastVerified`. Only a regulator register page makes a field `checked`; casino pages are `stated`. Source labels carry the snapshot date. Valid `archKey`: `tokenomics-yield, lightning-instant, sportsbook-hybrid, game-libraries, vip-feature-editions, non-custodial-web3`.

Four entries are sourced (Stake, BC.Game, Cloudbet, Vbet, read 2026-11-22). Everything else is unsourced and shows Unverified/Unknown. Known open items for the owner: three duplicate descriptors (O11b), unsourced catalog summaries that mention third-party rankings, Vbet `techStack` "Unverified (...)" text, sister entries that may contradict checked ones, Stake and Cloudbet showing "Assessment in progress" on the Curaçao register at read time.

## Changing the catalog = sync check (no build step, nothing automated)

Review pages are baked from the catalog, so any change to an entry must touch every copy, and you report a checklist (id, slug, each field page vs `catalog.js`, badge, Last verified, source count):
`data/catalog.js` → that entry's `review/{slug}/index.html` (field status, At a Glance, All fields, Sources, status line, Last verified) → Home static list if name or category changed → "Other entries" lists on same-category reviews → duplicate banners if a primary's name changed → Compare needs nothing (reads `catalog.js`).

New casino: add the object (unverified fields stay `unverified`/absent), create its review page by copying a same-status page, update every list above, and update counts. Search for `60` (Home copy, titles, methodology, disclosure). Do not add a category without a `categoryMeta`-equivalent update on Home and every review breadcrumb.

## How to work here

- **Smallest change that does the job.** Reuse the existing pattern; check how a sibling page does it first.
- Send changes as whole files when the owner works from a phone; otherwise commit to the dev branch and say what changed. Open a PR only when asked.
- **Verify before claiming done:** serve the folder (`python3 -m http.server`), load affected pages at 320 and 1280, dark and light: no horizontal overflow, no console errors, every internal link and `#anchor` resolves, no duplicate ids, one `h1`. For copy changes scan for the banned words in rule 1.
- Report measured numbers, not estimates. Report deviations and anything not checked.
- Subagents: architect plans, editor reviews against the phase documents, researcher looks up facts with sources, coder applies approved edits. Each only reads what it needs; give them file paths, not pasted content.

## Phase 7 (QA), next

Fold at 320×568 for Stake (499 vs the old 480 estimate; criterion is now "H1, first line of every group and status line visible, nothing clipped"), real-device fonts, forced-colors and 200% zoom (badge border styles), keyboard and screen-reader pass, Lighthouse LCP < 2.5s and CLS < 0.1 locally, contrast script from DESIGN_SYSTEM.md section 4, content-word scan allow-list.
