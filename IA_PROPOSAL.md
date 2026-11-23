# Phase 2 — IA Proposal (revised)

**Status: Approved by the human, 2026-11-23. Final edge-case resolutions applied (O8–O10, guide claim cuts, glossary note). O11(a) resolved (Pillar 03 cut). One follow-up, O11(b) (duplicate descriptor wording, Section 10), is open and does not block Phase 3.**

---

## 1. Decisions made (human-approved)

| # | Decision |
|---|---|
| D1 | Status definitions are the brief's Section 2 wording, unchanged: **Checked** = we checked the regulator's register. **Stated** = taken from the casino's own pages (a source is recorded). **Unverified** = we have text but no source is recorded. **Unknown** = no text (blank), or text that only says the item was looked for and not found (decided for Vbet's custody, O6). |
| D2 | Badge mapping: key in `checked` gives Checked. Key in `stated` gives Stated. Value present but in neither list gives Unverified. Value absent or blank gives Unknown. This is the current `fieldStatus()` logic, except Unknown now shows as a visible tag. One exception, decided by the human (O6): a value that only says the item was looked for and not found is treated as Unknown. Today that is Vbet's `custody` only. |
| D3 | The 50% rule stays. A dimension where Unknown is more than 50% of the 60 entries goes into the collapsible details. Unverified values may appear in At a Glance, but only with the Unverified badge. |
| D4 | Static HTML (Option A). Review pages work with JavaScript off, and their facts are written directly into `/review/{slug}/index.html`. |
| D5 | `/data/catalog.js` is used only by Home (search, filter, sort) and by the compare tray and compare page. Review pages do not load it. |
| D6 | Every review page has a compact per-field status row above the fold. |
| D7 | All 60 review pages are built. The 56 unsourced pages use the exact text "Last verified: not recorded yet" and "No sources recorded yet." |
| D8 | The 9 duplicate-brand entries (#20–#24 and #27–#30) keep their own pages. Each gets a warning banner linking to its primary page. The #20 pairing is confirmed by the human (O1). |
| D9 | Cut: Pillars 08 and 09, the glossary timeline, the hero stats, the SHA-256 verifier, the checklist ticks, the batch filter, the 6-per-category cap, the Cards/Compact toggle and the floating back-to-top button. |
| D10 | The guides are combined into `/guides/`. Only Pillar 05's helpline information moves to `/disclosure/`; its other text is cut (D20). |
| D11 | The "01 Regulation" card and footer link are removed entirely: no placeholder line, no nav mention. |
| D12 | Old anchors (`/#hub-…`, `/#faq`, `/#how-we-review`) stay dead for now. Redirects are a possible Phase 6 item. |
| D13 | Slug = catalog id minus its batch prefix. Files go at `/review/{slug}/index.html`. |
| D14 | No `/404.html` in v1. |
| D15 | Not published anywhere: "Who reviews", a policy-change log, "counted on" dates, "Last changed" dates, bylines. The only date shown is "Last verified: {date}". |
| D16 | Public text uses plain language, with no internal workflow or role names. |
| D17 | No scores, stars, ranks, "best for" labels, featured slots or ad slots. No Editorial note in v1. |
| D18 | The 50% rule is published on `/methodology/` as a trust signal, in wording that matches how the rule actually works (5.4 and O9). "Sortable" means the Home sort plus the opt-in column sort on Compare, with alphabetical as the default (Section 8). |
| D19 | The glossary adds "provably fair" and "house edge". The template holds 8 terms. Writing the definitions is a Phase 6 content addition (Section 9). |
| D20 | Unsourced guide content is cut: Pillar 03 entirely (its table and its intro, O11a), the Pillar 04 "guarantees solvency" wording, the Dexsport non-custodial claim in Key Considerations, and all Pillar 05 text except the helpline information. Other unsourced claims in the carried-over guide text are cut or reworded under the rules in 5.5. |
| D21 | Vbet's `custody` value ("…no custody wording found…") is a not-found note. Its badge is Unknown and its sub-label is "Unknown (not found)". The word "Unverified" is stripped from its raw text, so the text stays factual and the badge does the work (O10). |
| D22 | Catalog edit approved: the whole "(Entry #N …)" parenthetical and every "— … Focus" phrase are stripped from public names. The entry number may stay as a hidden data attribute if JS needs it. "Catalog batch" is not shown publicly. The 8 duplicate pages that share a brand name get a short descriptor on cards, the banner and Compare, and in the page title (4.5, O8). |

---

## 2. Sitemap

```
/                     Home / directory          index.html
├── review/
│   └── {slug}/       Review page x 60          review/{slug}/index.html
├── compare/          Comparison                compare/index.html
├── methodology/      How we review + FAQ       methodology/index.html
├── glossary/         Glossary                  glossary/index.html
├── guides/           Combined guides           guides/index.html
├── disclosure/       Money + safer gambling    disclosure/index.html
└── data/catalog.js   Catalog data (not a page; Home + Compare only)
```

That is 66 HTML pages: 6 site pages plus 60 reviews. There is no `/about/` (no owner, author, funding or contact information exists) and no `/404.html`.

### 2.1 Page list

| URL | Template | Decision served | Filled from |
|---|---|---|---|
| `/` | Home | Which casinos are worth opening a review for? | `catalog.js` (JS on); baked static link list (JS off) |
| `/review/{slug}/` | Review | Is this casino legitimate and worth my deposit? | Baked HTML copied from one catalog entry |
| `/compare/` | Compare | Which of these should I shortlist? | `catalog.js` |
| `/methodology/` | Text | Can I trust what you show me? | Current `#how-we-review` and `#faq` text |
| `/glossary/` | Text + search | What does this term mean before I act? | The 6 current terms plus 2 new ones (D19) |
| `/disclosure/` | Text | What's the catch, and am I playing safely? | "Links & money" text, Pillar 05 helpline information only (D20) |
| `/guides/` | Text | Background reading for the review decision (not a Section 2 type) | Pillars 02, 04, 06, 07, Key Considerations |

### 2.2 Slug rule

- Remove a leading `b1-` or `b2-NN-` from the catalog id:
  - `b1-stake` becomes `stake`
  - `b1-bcgame` becomes `bcgame`
  - `b2-28-cloudbet-turnover` becomes `cloudbet-turnover`
- All 60 slugs are unique. Close pairs stay distinct: `betpanda`/`betpandaio`, `mbit`/`mbit-mrs`, `duel`/`duelbits`, `casinocrypto`/`cryptocasino`.
- Slugs that start with a digit (`1win`, `2up`, `7bit`) are fine.
- A slug never changes once published.
- No URL contains a batch-prefixed id.

### 2.3 Duplicate-brand mapping

Derived from the catalog:
- Six of the summaries say "also in Initial 30".
- #21 and #22 use the same brand name as an Initial 30 entry.
- #20 differs by a ".io" suffix. CLAUDE.md lists it as a repeat, and the human confirmed the pairing (O1).

| # | Duplicate slug | Repeats brand | Primary slug | Basis |
|---|---|---|---|---|
| 20 | `betpandaio` | BetPanda | `betpanda` | Confirmed by the human (O1) |
| 21 | `mbit-mrs` | mBit Casino | `mbit` | Same name |
| 22 | `betplay-8k` | Betplay.io | `betplay` | Same name |
| 23 | `bcgame-bcd` | BC.Game | `bcgame` | "also in Initial 30" |
| 24 | `wildio-vip` | Wild.io | `wildio` | "also in Initial 30" |
| 27 | `roobet-promos` | Roobet | `roobet` | "also in Initial 30" |
| 28 | `cloudbet-turnover` | Cloudbet | `cloudbet` | "also in Initial 30" |
| 29 | `vave-kyc` | Vave | `vave` | "also in Initial 30" |
| 30 | `coinpoker-anjouan` | CoinPoker | `coinpoker` | "also in Initial 30" |

**Banner, on the 9 duplicate pages only:**

> "This entry ({descriptor}) covers a brand that also has a page here: {primary name}. Details may differ or conflict; see the {primary name} review too."

On #20, which has no descriptor, the text starts "This entry covers a brand…".

It is followed by the link "Read the review: {primary name}". The banner is navigation, not a score, rank or preference.

**Known contradictions, flagged and not fixed:**
- `bcgame-bcd` vs `bcgame`
- `cloudbet-turnover` ("Curaçao License (Since 2013)") vs `cloudbet`

The catalog text on these pages is shown as written.

### 2.4 Removed from v1

| Item | Status |
|---|---|
| `#hub-01-regulation`, the "01 Regulation" card and its footer link | **Removed from v1. Content not written; owner on hold.** No URL, link or placeholder. |
| `#report-modal` and "Flagship Report" card | Cut (Decision log 12) |
| Hero canvas, 3D toggle, four estimate stats, "10 permanent guides" | Cut |
| Pillar 08 AI; Pillar 09 market data and chart | Cut |
| Glossary timeline | Cut |
| SHA-256 verifier ("VERIFIED DICE ROLL") and "Labs" nav item | Cut |
| Checklist ticks and "0 / 5 Completed" | Cut. The text becomes a plain list in `/guides/`. |
| `#hub-directory` grid and its pills | Cut. Replaced by the `/guides/` "On this page" list. |
| Batch filter and badge, 6-per-category cap, Cards/Compact toggle | Cut |
| Floating back-to-top button | Cut. A footer "Back to top" link replaces it. |
| Pillar 03 (Blockchain & Payment Infrastructure): intro and comparison table | Cut entirely (D20, O11a). No "Payment rails" section on `/guides/`. |
| Pillar 04 "guarantees solvency" wording | Cut (D20) |
| Key Considerations claim naming Dexsport as non-custodial | Cut (D20) |
| Pillar 05 text other than the helpline information | Cut (D20) |
| "Catalog batch" line in All fields | Cut (D22) |
| News/blog | Deferred |

**Old anchors.** They stay dead (D12). The Home directory section keeps `id="casino-directory-30"`, so old `/#casino-directory-30` links still land.

---

## 3. Navigation

**Header (every page)**
- The brand links to `/`.
- Links, in order: Directory, Compare, How we review, Glossary, Guides.
- At 320px: the brand plus one "Menu" control with a 44px target. With JS off, Menu is a plain link down to the footer nav.
- The header is one row. If it is sticky at all, only that one row sticks.

**Disclosure banner (every page, under the header)**
- Text: "18+ only. Gambling involves risk of loss. No affiliate relationships exist at time of writing."
- Link: "Disclosure & safer gambling", to `/disclosure/`.
- Nothing else goes in the banner.

**Footer (every page)**
- The not-advice disclaimer.
- The 18+ line (21+ where local law requires).
- Helplines: 1-800-GAMBLER (ncpgambling.org), GamCare, BeGambleAware.
- "Safer gambling guide", linking to `/disclosure/#safer-gambling`.
- The 6 site pages and "Back to top".
- No regulation link and no links to cut sections.

**Contextual links**
- "Read the review: {name}" on cards.
- "Compare {name} with other entries" on reviews, linking to `/compare/?casinos={slug}`.
- A breadcrumb on reviews, placed below the At a Glance panel.
- "On this page" lists on `/methodology/`, `/guides/` and `/disclosure/`.
- Glossary links, only where the term exists.

**Link rule.** Every link goes to something that exists.

**Helpline rule.** Only Pillar 05's helpline information (including Gamban) moves to `/disclosure/#safer-gambling`. Its other text is cut (D20). The footer keeps its helplines.

---

## 4. Shared rules

### 4.1 Badges and claim wording

| Data state | Badge | Sub-label shown with the value |
|---|---|---|
| Key in `checked` | Checked | "On the regulator's register · see Sources" |
| Key in `stated` | Stated | "From the casino's own page · see Sources" |
| Value present, in neither list | Unverified | "Claim · no source recorded" |
| Value absent or blank | Unknown | The value reads "Unknown (not yet checked)" |
| Value only says the item was not found (today: Vbet `custody`) | Unknown | "Unknown (not found)" |

- A value never appears without its badge.
- On review pages and the compare page, every Unverified value carries the "Claim · no source recorded" sub-label, so unsourced text is never presented as fact.
- Home cards may show the badge alone, to save space.
- Public definitions are the existing site wording:
  - Unverified: "written without a recorded source. Treat it as a lead to check, not a fact."
  - Unknown: "we have no data, or we looked and did not find it. It never means 'none' or 'no limit'."
  - Stated: "taken from the casino's own terms or help pages. The source is linked."
- The Checked wording must become register-only (Section 9).

**Vbet's custody field.** Its catalog value is a not-found note, not a claim, so its badge is **Unknown** with the sub-label **"Unknown (not found)"** (D21). This is the one exception to the mapping in D2. Phase 6 strips the word "Unverified" and the wrapping parentheses from the raw text, so it reads "No custody wording found in the terms read". The badge and sub-label do the status work and the text stays factual (O10, catalog edit approved by the human; Section 9).

### 4.2 Entry-level status line (live-site wording kept)

| Entries | Status line |
|---|---|
| Stake, Cloudbet, Vbet (have `checked`) | "Partly checked · last verified {date}" |
| BC.Game (`stated` only) | "Casino-stated only · sources read {date}" |
| The other 56 | "Unverified · no check date recorded" |

- The line describes source coverage. It is not a grade, and entries are never sorted by it.
- The live card's "Status:" prefix is dropped, because the line sits under a "Field status" heading.

### 4.3 Catalog notes

`summary`, `techStack`, `strengths` and `tradeoffs` are never in `checked` or `stated`. They appear as one block with this label:

> "Catalog notes · Unverified: written without a recorded source."

This applies to all 60 entries, including the 4 sourced ones.

### 4.4 Templates

There are four templates: Home, Review, Compare and Text page. Every page shows the disclosure banner and the 18+ line above the fold.

### 4.5 Display names (D22)

- Public names drop the whole "(Entry #N …)" parenthetical, including any descriptor inside it (for example "— 8,000+ Games & Lightning" and "— Instant Crypto Focus"), and every "— … Focus" phrase outside it. Examples: "Qzino (Entry #1)" shows as "Qzino"; "BC.Game — BCD Token Focus (Entry #23)" shows as "BC.Game"; "mBit Casino (Entry #21 — Instant Crypto Focus)" shows as "mBit Casino".
- The entry number may be kept as a hidden data attribute where JS needs it. It is not shown.
- Slugs do not change (they come from the id, 2.2).
- **Sort rule:** A–Z by display name, then by slug when two names are equal.
- **Descriptors for duplicate pages (O8, approved).** 8 of the 9 duplicate pages end up with the same display name as their primary (#20 differs from its primary by ".io"). To tell them apart, each of the 8 gets a short descriptor, built from the focus phrase already in its catalog name. The descriptor appears:
  - on Home cards, as "{name} · {descriptor}";
  - in the duplicate banner (2.3);
  - on Compare, in the column name, as "{name} · {descriptor}";
  - in "Other entries in this category" links, in the same form;
  - in the page `<title>` tag, in parentheses: "{name} ({descriptor})", so search engines do not index 8 identical titles.
  - It does **not** appear in the page heading (H1), which stays the brand name only.
  - Pages without a descriptor use "{name}" as the title.

| Duplicate | Descriptor (catalog wording; figures removed) | Title tag |
|---|---|---|
| `betpandaio` | none (name already differs by ".io") | BetPanda.io |
| `mbit-mrs` | instant crypto focus | mBit Casino (instant crypto focus) |
| `betplay-8k` | games and Lightning | Betplay.io (games and Lightning) |
| `bcgame-bcd` | BCD token focus | BC.Game (BCD token focus) |
| `wildio-vip` | VIP match focus | Wild.io (VIP match focus) |
| `roobet-promos` | promotions focus | Roobet (promotions focus) |
| `cloudbet-turnover` | no turnover focus | Cloudbet (no turnover focus) |
| `vave-kyc` | risk-based KYC focus | Vave (risk-based KYC focus) |
| `coinpoker-anjouan` | Anjouan licence and hybrid focus | CoinPoker (Anjouan licence and hybrid focus) |

The descriptor wording is taken from the catalog, with the unsourced "8,000+" figure dropped. Three descriptors repeat unsourced catalog claims: "no turnover" (Cloudbet), "Anjouan licence" (CoinPoker) and "games and Lightning" (Betplay.io). Phase 6 shows the final descriptor text to the human for confirmation (O11b).

---

## 5. Templates

### 5.1 Home / directory (`/`)

**Decision served:** "Which casinos are worth opening a review for?"

| # | Block | Filled from |
|---|---|---|
| 1 | Header | Fixed |
| 2 | Disclosure banner | Fixed |
| 3 | H1 and short intro: unranked; not a recommendation, safety rating or legality check; mostly unverified; plain reference links only; "How we review" link. No hard-coded count. | Directory notice text |
| 4 | Controls (JS only): search, category filter, sort (A–Z default, Z–A), "Showing N of {total}", Reset | Total computed from the catalog |
| 5 | Category groups with title, subtitle and a jump list | `categoryMeta` |
| 6 | Cards | `catalog.js` |
| 7 | Compare bar (JS only): "{n} of 3 selected", "Go to comparison" (to `/compare/?casinos=…`), Clear, live region | — |
| 8 | Footer | Fixed |

**Order**
- Groups: A–Z by category title (High-Volume…, Lightning…, Non-Custodial…, Sportsbook…, Tokenomics…, VIP…).
- Entries: A–Z by `name` within each group, case-insensitive, digits first.
- Z–A reverses the entries; group order stays fixed.
- Why A–Z by title: the order is visibly mechanical. The `categoryMeta` order and the catalog order are arbitrary and could read as priority.

**Card contents**
- The name as "Read the review: {name}", with the descriptor on the 8 duplicates ("{name} · {descriptor}", 4.5).
- Category.
- The promoted fields (today Licence, KYC, Custody), each with value and badge.
- `summary`, with the catalog-notes label.
- The status line.
- "Last verified: {date | not recorded yet}".
- A Compare checkbox.

**Badges today**

| Entries | Licence | KYC | Custody |
|---|---|---|---|
| 56 entries | Unverified | Unverified | Unverified |
| Stake, Cloudbet | Checked | Stated | Unverified |
| Vbet | Checked | Stated | Unknown (not found) |
| BC.Game | Stated | Stated | Unverified |

**Above the fold (320/375):** the banner, the H1, and the first intro lines with the methodology link.

**Links out:** the 60 reviews, `/compare/`, `/methodology/`, `/disclosure/`, and category anchors.

**Without JS**
- A baked static list of all 60 review links (names), grouped and ordered as above.
- Controls and the compare bar render only when JS runs.
- When JS runs, the cards replace the static list.

**Degrades when data is missing**
- Cards show only the promoted fields (Section 6).
- With no promoted fields, a card shows name, category, summary, status line, Last verified and links. It never shows empty or invented rows.

### 5.2 Review (`/review/{slug}/`)

**Decision served:** "Is this casino legitimate and worth my deposit?"

**Data source.** Baked static HTML. No `catalog.js`, no JS needed. The page carries an HTML comment naming its catalog id, for the sync check (Section 7f).

**Blocks, top to bottom**

1. Header.
2. Disclosure banner.
3. H1 `{name}`.
4. "Last verified: {lastVerified}". For the 56 entries this reads exactly **"Last verified: not recorded yet"**.
5. **Field status row** (D6).
   - Heading: "Field status", with a "Review methodology" link (44px target).
   - Fields are grouped under their badge, in the order Checked, Stated, Unverified, Unknown. Empty groups are left out.
   - Within each group, fields follow `REVIEW_FIELDS` order and use short labels: Operator, Licence, Licence no., Custody, Coins, KYC, Withdrawals, Bonus terms, Restricted countries, Safer-gambling tools, Support.
   - No counts such as "3 of 11".
   - Example, the 56 pages: "Unverified: Licence, Custody, KYC" and "Unknown: Operator, Licence no., Coins, Withdrawals, Bonus terms, Restricted countries, Safer-gambling tools, Support".
   - Example, Stake: "Checked: Licence, Licence no.", "Stated: Operator, KYC, Withdrawals, Restricted countries, Support", "Unverified: Custody", "Unknown: Coins, Bonus terms, Safer-gambling tools".
6. Entry status line (4.2).
7. Duplicate-brand banner (the 9 duplicate pages only).
8. **At a Glance panel**
   - One row per promoted field: label, value, badge and sub-label (4.1).
   - `licenseNumber`, where present, is a sub-line of Licence with its own badge.
   - Then "Not yet sourced: {names of the target dimensions not shown}".
   - Then "{n} more fields have sources: see All fields", where that applies. The number is computed.
9. Breadcrumb: Directory › {archLabel}.
10. **All fields** (`<details>`, works without JS)
    - The 11 `REVIEW_FIELDS` in order, each with badge and sub-label.
    - Then "Provably fair: Unknown (not yet checked)", "Audit link: Unknown (not yet checked)", and "Withdrawal time: Unknown (not yet checked); see Withdrawal & turnover rules".
    - Then the placeholder from 6(d).
11. **Sources.** Inline.
    - One item per label.
    - Links only for http(s) URLs, with `rel="noopener noreferrer"`. These are not affiliate links.
    - The 56 entries read exactly **"No sources recorded yet."**
12. Catalog notes (4.3).
13. "Other entries in this category (A–Z, unranked)": every other review with the same `archKey`.
14. "Compare {name} with other entries".
15. Footer with the 18+ line and helplines.

**Above the fold: estimate for Phase 4 to prove**

At 320×568, about 470–500px is usable once browser UI is counted. At 375×667 it is about 560–600px.

| Block | Estimate at 320px |
|---|---|
| Header, one row, 44px Menu | ~56 |
| Banner: 3 lines at 16/24px, 44px link line, padding | ~132 |
| H1: 1–2 lines (3 for long duplicate names) | ~72 (up to ~104) |
| "Last verified" line | ~32 |
| Status heading and methodology link (44px) | ~44 |
| Status groups: about 4 lines on the 56 pages, about 6 on sourced pages | ~96 (up to ~144) |
| Gaps (8px unit) | ~24 |
| **Total** | **~456–480 on the 56 pages with a 1–2 line H1.** About 504 on sourced pages with a 2-line H1, and up to about 536 on sourced pages with a 3-line H1. |

This is tight at 320×568 and fits at 375×667. The 4 sourced pages and the long-named duplicate pages may not fit the usable height at 320×568. That is for Phase 4 to prove. For the 56-page case to work, Phase 4 must hold all of these:
- No hero image.
- A single-row header.
- The banner text exactly as written.
- No extra copy above the status row.
- The breadcrumb, the status line and the duplicate banner kept below the status row.

If the last group spills below the fold, the first groups and the methodology link still land above it. A shorter fallback ("Unknown: all other fields", with a link to All fields) is a Phase 4 option and needs human approval.

**Links out:** the Home category anchor, `/methodology/`, `/disclosure/`, `/compare/?casinos={slug}`, related reviews, the primary review (on duplicates), external Sources, glossary terms.

**Modal behaviours replaced**

| Modal behaviour | Becomes |
|---|---|
| Focus trap, Escape, close button, focus restore | Normal navigation and the Back button |
| Scroll lock | Gone |
| `data-close-modal` jump links | Plain links |
| Related-entry buttons | Links to `/review/{slug}/` |
| "View details" button | "Read the review: {name}" link |
| Sources and related entries | Inline blocks |

**Degrades when data is missing (the 56 pages)**
- "Last verified: not recorded yet".
- Status row: Unverified for Licence, Custody and KYC; Unknown for the other 8.
- Status line: "Unverified · no check date recorded".
- Panel: three Unverified rows, each with "Claim · no source recorded", plus the not-yet-sourced line.
- Sources: "No sources recorded yet."

**Empty-state rules (so it looks intentional, not broken)**
- Every slot has a value or a visible badge. No blank boxes and no "—".
- The empty Sources block keeps the same heading and spacing as a filled one.
- The Unknown group is a normal labelled group, not an error style.
- No copy apologises, promises dates, or implies a check is scheduled.

### 5.3 Compare (`/compare/`)

**Decision served:** "Which of these should I shortlist?"

**URL:** `/compare/?casinos=stake,bcgame`. Review slugs, in pick order, at most 3.

**Data source:** `catalog.js`, matched with the slug rule.

**Blocks, top to bottom**
1. Header and banner.
2. H1 "Compare entries", plus one sentence: unranked, in the order picked, no winner, and "Unknown" means no data, not "none". Methodology link.
3. Picker: "Add an entry" (A–Z, max 3) and "Back to the directory".
4. Opt-in "Sort columns A–Z" and "Back to the order picked". Pick order is the default.
5. Rows (field first, entries in pick order):
   - Name (linked, with the descriptor on the 8 duplicates, 4.5) with Remove.
   - Category, status line, Last verified.
   - Promoted fields with badges and sub-labels.
   - A collapsed "More fields": the other `REVIEW_FIELDS`, the 3 no-field dimensions as Unknown, and the 6(d) placeholder.
   - Sources: "{n} recorded, see the review" or "No sources recorded yet."
6. Footer.

**Badges:** every cell, with Unknown visible. Nothing is highlighted and there is no winner.

**Above the fold:** banner, H1 and the methodology link. Primary rows must be readable at 375px without sideways scrolling; the layout is Phase 4 input only.

**Without JS:**
- Shows the H1, the explanation, "The comparison needs JavaScript. Each review page has the full facts without it," and a "Browse all reviews in the directory" link to the Home static list. No table.
- **Acceptable:** every fact is reachable without JS on the review pages. A single link avoids a third copy of the 60 names that could drift.

**Degrades when data is missing**
- 0–1 valid slugs: instructions and picker, no empty table.
- An unknown slug shows "Entry not found: {slug}" (escaped) and is skipped.
- Repeated slugs are ignored.
- More than 3 slugs: the first 3 are used, with a notice.

### 5.4 Text pages

**/methodology/** ("Can I trust what you show me?"). Blocks, in order:
1. Banner.
2. H1 "How we review" (page title "Review methodology").
3. On this page.
4. What each entry can show (the existing "So what" lines).
5. The four status definitions (4.1), with example badges.
6. Entry status lines (4.2).
7. "Which fields appear first": the 50% rule, published in public language with no dates or roles (D18). Proposed text: "A field appears in the At a Glance panel only when at least half of the entries have some text for it. Other fields are listed under All fields. Every value carries a badge that says whether it was checked on a regulator's register, stated on the casino's own page, or has no recorded source." **The rule counts text, not sources** (O9). A wording that says "sourced" would be untrue today, because License, KYC and Custody pass the rule while most values have no recorded source.
8. The existing "Re-check schedule: not yet set."
9. What unranked means: A–Z order, and compare in the order picked.
10. Links and money, short, linking to `/disclosure/`.
11. The existing corrections line ("not set up yet").
12. Common questions: the 6 FAQ items.
13. Footer.

There is no "Who reviews", no policy log and no "counted on" date.

**/glossary/**
- The template holds 8 terms, A–Z, each with its own anchor: the 6 existing ones (GGR, SHA-256, Nonce, Liquidity Pool, KYC/AML & ZK-KYC, RTP) plus "House edge" and "Provably fair" (D19). The two new definitions are a Phase 6 content addition (Section 9).
- Search works with JS only; the full list shows without it.
- When nothing matches: "No term matches '{query}'".

**/disclosure/**
- Banner, then H1 "Disclosure & safer gambling".
- First line: "No affiliate relationships exist at time of writing."
- Then what Sources links are, that there are no ads, and the existing wording on any future affiliate link.
- `#safer-gambling`: the 18+ (21+) line and the helpline list (1-800-GAMBLER/ncpgambling, GamCare, BeGambleAware, Gamban). Nothing else from Pillar 05 is carried over (D20).
- Not advice; check your local law.
- No "Last changed" date.

**/guides/**
- Banner, H1 and "On this page".
- Sections:
  - Before you read a review (Key Considerations, reduced under 5.5).
  - Provably fair explained (Pillar 02, reduced under 5.5).
  - Smart-contract casinos (Pillar 04, reduced under 5.5).
  - Wallet security (Pillar 06, as a plain list, reduced under 5.5).
  - Scam patterns (Pillar 07, reduced under 5.5).
- **Pillar 03 is cut entirely** (D20, O11a). Its table has a "Plain-English Verdict" column header and a "Best balance…" cell, and its speeds and fees are unsourced. Its intro ("multi-day clearinghouses", "high chargeback fees", "settle in seconds for fractions of a cent") is made only of unsourced claims, so nothing factual remains to keep.
- The carried-over text is reduced to facts under the rules in 5.5.
- Carried figures get an "Unverified estimate" label.
- Cut sections are left out of the page and of the jump list.

### 5.5 Guide text carry-over rules (human decision: cut unsourced claims, keep facts)

**Rule.** The carried-over text in Key Considerations and Pillars 02, 04, 06 and 07 keeps general explanations, advice and risk statements. It cuts specific numbers, named businesses, and absolutes or comparatives ("most", "almost universally", "never", "no company can"), because none has a source. Phase 6 applies these cuts word for word and does not add new factual claims. The scan was done on the text in `index.html`; Phase 2 does not edit it.

| Section | Cut or reworded | Kept |
|---|---|---|
| Key Considerations, item 01 | Cut "Most other platforms use…". Keep only the definition of non-custodial versus custodial. | Definition |
| Key Considerations, item 02 | Cut the whole body: "Most Web3 casinos operate under Curaçao or Anjouan licenses…lighter regulatory oversight…than…MGA or UKGC". Replace with a pointer to the FAQ answer on checking a licence on a register (existing text). | Heading, pointer |
| Key Considerations, item 03 | Drop "almost universally allow"; say terms "may allow" identity and source-of-funds checks. | Hedged caution |
| Pillar 02 | Cut "(including your browser right below)" in step 3, because the verifier is cut. Cut the interactive lab. | Three-step explanation |
| Pillar 04 | Cut "open-source" and "shared liquidity pool" from the intro. Cut Step B ("guarantees solvency") and Step C ("in the same block—no manual approval"). Cut the label "CRITICAL RISK AUDIT". | Step A, the three risks |
| Pillar 06 | Cut "Most player losses…come from phishing links…rather than blockchain hacks". Cut "Click items below to track your safety setup". Cut "Easy password recovery and familiar UX". Cut "No company can freeze your unbet funds, and payouts settle directly to your address". | Five checklist tips (as plain list), custodial risks, "no helpdesk undo button" |
| Pillar 07 intro | Cut "exact same" and "most common". Say "four recurring patterns to watch for". | Four patterns |
| Pillar 07, 01 | Cut "Genuine licenses open an official regulator certificate page matching the exact domain". Point to the FAQ answer on checking a licence on a register instead. | The fake-seal pattern |
| Pillar 07, 02 | Cut "Legitimate casinos never require you to deposit extra money". Say "be wary of any request to deposit extra money before a withdrawal". | The pattern |
| Pillar 07, 03 | Cut "1%–3%" and "Fixed daily yields are paid from new deposits until the pool collapses". | "Guaranteed daily returns" pattern; "No betting algorithm eliminates variance" |
| Pillar 07, 04 | Cut "Claiming a legitimate bonus never requires…". Say "be wary of any prompt to sign a token-transfer permission to claim a bonus". | The pattern |

**Pillar 03 (O11a, resolved).** The same rule was applied to Pillar 03's intro. Every claim in it is unsourced ("multi-day clearinghouses", "high chargeback fees", "settle in seconds for fractions of a cent"), and nothing factual remains once they are cut. Pillar 03 is therefore cut from `/guides/` entirely, with no replacement text.

---

## 6. How the UI degrades when data is missing

### (a) The measure

- **Unknown(D)** = the number of entries where the field is absent, not a string, or blank after trimming (the `fieldValue()` test), plus any value that only says the item was looked for and not found (D21; today Vbet's `custody`).
- A dimension with no field counts as 60 Unknown.
- D is primary when Unknown is 30 of 60 or fewer, and secondary otherwise.
- The rule is the same for all 11 fields.

**How it was counted**
- 60 `id:` lines.
- `license`, `kyc` and `custody` are non-empty on all 60.
- The optional keys and the `checked`/`stated` arrays were read directly:
  - Stake, Cloudbet and Vbet have `checked: ['license','licenseNumber']`.
  - BC.Game has `stated` only.
  - None of the four lists `custody`. Vbet's `custody` is a not-found note and counts as Unknown (D21); the other 59 are Unverified.

**Target dimensions (today, under the D2 mapping)**

| Dimension | Field | Checked | Stated | Unverified | Unknown | Result |
|---|---|---|---|---|---|---|
| License | `license` | 3 | 1 | 56 | 0 | **Pass, shown** |
| KYC policy | `kyc` | 0 | 4 | 56 | 0 | **Pass, shown** |
| Provably fair | none | – | – | – | 60 | Fail, details only |
| Audit link | none | – | – | – | 60 | Fail, details only |
| Withdrawal time | none (`withdrawals` holds rules) | – | – | – | 60 | Fail, details only |

**Other fields**

| Field | Checked | Stated | Unverified | Unknown | Result |
|---|---|---|---|---|---|
| custody | 0 | 0 | 59 | 1 (Vbet) | **Pass, shown** |
| operator | 0 | 4 | 0 | 56 | Fail |
| licenseNumber | 3 | 1 | 0 | 56 | Fail (shown as a Licence sub-line where present) |
| support | 0 | 4 | 0 | 56 | Fail |
| withdrawals | 0 | 3 | 0 | 57 | Fail |
| restrictedCountries | 0 | 2 | 0 | 58 | Fail |
| rgTools | 0 | 2 | 0 | 58 | Fail |
| coins | 0 | 1 | 0 | 59 | Fail |
| bonusTerms | 0 | 0 | 0 | 60 | Fail |

- The Section 9 backlog item (re-classifying the 56 entries) is not done or presumed here. If the human ever re-classifies unsourced claims as Unknown, License, KYC and Custody would fail the 50% rule and move into the collapsible details. That is the "No target dimension shown" scenario below.
- Seven `techStack` values mention "provably fair" or "audit". They are unsourced free text, so they are never counted or promoted.

### (b) What each surface shows

No dimension is ever counted ("N of 5"). A blank value in a primary row still shows Unknown.

| Scenario | At a Glance | Compare | Home card |
|---|---|---|---|
| **License, KYC and Custody shown (today)** | Three rows; "Not yet sourced: Provably fair · Audit link · Withdrawal time" | Those rows primary, the rest in More fields | Licence, KYC, Custody |
| **License and KYC shown** | Two rows; the line lists the other three | Same shape | Licence, KYC |
| **License only shown** | One row; the line lists four | Same shape | Licence |
| **No target dimension shown** | Any passing non-target field; the line lists all five; the panel is never hidden; the status row still names every field | Category, status, Last verified primary; the rest in More fields | Name, category, summary, status line, links |
| **All five target dimensions shown** | Five rows | Five primary rows | Up to five rows (Phase 4 may cap the card) |

### (c) Re-evaluation

- Whenever the directory data changes, Unknown is counted again for each field.
- A field moves into the panel when Unknown falls to 50% or less. It moves out when Unknown rises above 50%.
- On this project, any such change needs the human's approval.
- New dimensions (provably fair, audit link, withdrawal time) need a data field before they can be counted.

### (d) "Help us source this" placeholder

- The text is: "Not yet sourced. A way to send sources or corrections has not been set up yet."
- It is plain text, with no link, button or email.
- It sits in All fields and in the compare page's More fields.
- It becomes a link only after a real route exists.

---

## 7. Explicit decisions a–f

**a. Guides (approved).**
- 02: text kept.
- 03: cut entirely (intro and table, O11a).
- 04: kept, reduced under 5.5.
- 06: kept as a plain list.
- 07: kept.
- 05: only the helpline information moves to `/disclosure/#safer-gambling`; the rest is cut.
- 08 and 09: cut.

**b. FAQ.** Merged into `/methodology/` as "Common questions".

**c. Modal to page.** See the table in 5.2.

**d. `#hub-directory`.** Cut. The "01 Regulation" card and footer link are removed entirely.

**e. `#report-modal`.** Cut.

**f. Catalog.**
- Review facts are baked into each review page.
- `/data/catalog.js` holds the existing array verbatim, for Home and Compare only.

**Sync check (manual; there is no build step).** The baked pages can drift from `catalog.js`, and nothing automated catches it. To guard against it:
- Any change to catalog text must touch every copy:
  - `catalog.js`.
  - The entry's review page: status row, panel, All fields, Sources, status line, Last verified.
  - Home's static list, if the name or category changes.
  - Related lists on pages in the same category, if the name or category changes.
  - Duplicate banners, if a primary's name changes.
- For each changed entry, the coder reports a checklist: catalog id, slug, each field compared value by value between the page and `catalog.js`, the badge under D2, Last verified, and the number of sources.
- The human spot-checks before approving.
- A new entry also needs a new page and updates to every list above.

---

## 8. Sortable

Section 6 "sortable" is met by the Home sort (A–Z / Z–A) plus the opt-in "Sort columns A–Z" on `/compare/`. Pick order stays the default. **This interpretation of brief Section 6 was confirmed by the human (O2, D18).**

---

## 9. Brief and site text that must change in Phase 6

These are listed only; no file is edited. The brief's Section 2 definitions stay unchanged.

**DESIGN_BRIEF.md**
1. Section 9 header "Phase 1 approved, Phase 2 not yet started" is out of date.
2. Section 9 "Pattern note" (dated policy changes) conflicts with D15. Mark it as not for v1.

**index.html text to carry over (line numbers as read)**

3. Line 1255: the methodology says "Checked: confirmed on an independent primary source, such as the regulator's register." This is broader than register-only; it becomes register-only.
4. Lines 1263 and 1284 (methodology and FAQ): "listed in catalog order" becomes A–Z.
5. Line 1427: the modal's "More in this category (unranked, catalog order)" becomes "(A–Z, unranked)".
6. Line 1294: the FAQ's "Try it in the provably fair lab" points at the cut lab. Link `/guides/#provably-fair` instead.
7. Line 1304: the FAQ's "We only fill in a field from a source we have actually read." This is untrue for the 56 entries' Unverified text and needs rewording.
8. Line 451: the neutrality notice names "#23–#30". The duplicates are #20–#24 and #27–#30 (not #25 or #26), and they now carry banners. Reword the notice so it does not imply #25 and #26 are repeats.
9. Line 2576: `fieldStatus()` returns an empty tag for Unknown. It must render "Unknown".
10. Line 2786: the card status line drops the "Status:" prefix.
11. The modal and compare text "Not recorded yet" becomes "Last verified: not recorded yet" and "No sources recorded yet."
12. 18+ links pointing to `#hub-05-responsible` go to `/disclosure/#safer-gambling`.

13. Glossary: write definitions for "House edge" and "Provably fair" from existing site text only (FAQ and Pillar 02 wording), with no new factual claims. Phase 6 content addition (D19). The human approves the final text before it ships.
14. Catalog edit approved (D22): strip "(Entry #N)" and "— … Focus" from public names in `catalog.js` and the baked pages. The entry number may stay as a hidden data attribute. Needs the sync check in 7f.
15. Vbet's `custody` text: strip "Unverified" and the wrapping parentheses so it reads "No custody wording found in the terms read" (D21, O10). The badge shows Unknown with the sub-label "Unknown (not found)". Catalog edit approved by the human; needs the sync check in 7f.
16. Remove Pillar 03 entirely (its intro and its table, including the "Pillar 03 // Settlement & Liquidity Rails" heading block), the "guarantees solvency" wording, the Dexsport claim in Key Considerations, and all Pillar 05 text except the helpline information (D20). Apply the further guide cuts in 5.5 word for word.
17a. Page titles: append the descriptor in parentheses on the 8 duplicate pages (4.5, O8).
17. Remove the "Catalog batch" line from every public view (D22).

**CLAUDE.md (human-owned; listed only)**

18. The build description, the file structure and "How to add a new casino review" describe the single-page site. They need updating for the review pages, `catalog.js` and the sync check.

---

## 10. Open items

**Resolved by the human (2026-11-23):**
- O1 BetPanda pairing confirmed.
- O2 sortable confirmed.
- O3 and O9: the 50% rule is published with the "have some text" wording in 5.4.
- O4 glossary terms added.
- O5 unsourced guide content cut, and extended to other unsourced claims in Pillars 02, 04, 06 and 07 and Key Considerations (5.5).
- O6 and O10: Vbet custody is Unknown; "Unverified" is stripped from its raw text (4.1).
- O7 catalog names stripped, no "Catalog batch".
- O8: descriptors on cards, banner and Compare, and in page titles (4.5).
- O11(a): Pillar 03's intro had only unsourced claims, so Pillar 03 is cut from `/guides/` entirely (5.5).

**Still open (does not block Phase 3):**
- **O11(b).** Three duplicate descriptors repeat unsourced catalog claims ("no turnover", "Anjouan licence", "games and Lightning"). Confirm or replace the descriptor wording in Phase 6.

## 11. Coverage checklist

| Section 2 page type | Where |
|---|---|
| Home / directory | `/` (5.1) |
| Casino review + At a Glance | `/review/{slug}/` x 60 (5.2) |
| Comparison (unranked, pick order) | `/compare/` (5.3) |
| Methodology | `/methodology/` (5.4) |
| Glossary | `/glossary/` (5.4) |
| Disclosure + responsible gambling | `/disclosure/` (5.4) |
| News/blog | Deferred |

| Section 6 above-the-fold item (review page) | Met by (works without JS) |
|---|---|
| Per-field status | Field status row |
| Methodology link | Field status heading |
| Last-verified date | "Last verified" line (exact wording for the 56) |
| Money disclosure | Disclosure banner |
| 18+ notice | Banner; footer with helplines |
| Comparison readable at 375px, unranked, sortable | 5.3; Section 8 (O2) |
| No score, star or rank | Section 4; the status line is never sorted on |

---

## 12. Changes from the previous version

1. Badge mapping is back to the `fieldStatus()` logic, with Unknown now visible. The 56 entries show Unverified.
2. The brief's Section 2 definitions are kept unchanged.
3. The dimension table is re-run: License 3/1/56/0, KYC 0/4/56/0, Custody 0/0/60/0 (Checked/Stated/Unverified/Unknown). Added the one-line re-classification consequence.
4. The live-site status lines are kept; only the "Status:" prefix is dropped.
5. Static review pages with baked facts. `catalog.js` is for Home and Compare only, with a manual sync check. The old JS-off open question is removed.
6. Added the per-field status row above the fold.
7. The ~360px estimate is replaced with ~456–480px (up to ~510), labelled for Phase 4 to prove. Breadcrumb, status line and duplicate banner move below the status row.
8. JS-off behaviour is specified for Home (static list) and Compare (instructions plus a directory link).
9. All 60 pages are built, with the exact empty-state wording and empty-state rules.
10. Added the duplicate mapping table and banner. The two contradictions are flagged.
11. Related entries are A–Z, and groups are A–Z by category title.
12. Compare URL is `?casinos={slug}`, for example `stake,bcgame`. Scenarios are named by the dimensions shown.
13. Removed from public specs: Who reviews, the policy log, "counted on", "Last changed", internal roles, `/404.html`, and the regulation card and link.
14. Cuts are recorded as human-approved. Pillar 03 wording fixed: "Plain-English Verdict" is the column header and "Best balance…" is a cell.
15. "Sortable" is flagged as an interpretation. Compare layout details are Phase 4 input only.
16. Open items are cut to 7 (O1–O7).
17. After the editor re-check: Section 9 item 8 corrected to #20–#24 and #27–#30; "no field yet" replaced with plain wording in All fields; Vbet custody sub-label left to the human (O6); duplicate banner reworded to avoid reading as a preference; height table upper bound corrected; #20 pairing marked pending (O1); methodology 50% block marked pending O3.

18. Human decisions O1–O7 applied (D18–D22): BetPanda pairing, sortable, published 50% rule (accurate wording, O9), glossary terms, unsourced guide content cut, Vbet custody Unknown, catalog names stripped and no "Catalog batch". New follow-ups O8 (duplicate display names) and O9 (50% wording).

19. Final edge-case resolutions: Vbet custody text edit (O10), duplicate descriptors and title tags (O8), the 50% wording confirmed (O9), guide claim cuts in 5.5, and the glossary note. New follow-up O11.

20. O11(a) resolved: the 5.5 cut rules were applied to Pillar 03. Nothing factual remained, so Pillar 03 is cut from `/guides/` entirely and the "Payment rails" section is gone. O11(b) (duplicate descriptor wording) stays open for Phase 6.

Phase 2 — IA Proposal (approved). Phase 3 (Design System) has not started.
