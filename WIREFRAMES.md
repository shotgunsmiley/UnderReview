# Phase 4: Wireframes (WIREFRAMES.md)

**Status:** Final draft. Human decisions applied (Phase 4 gate, 2026-11-23); editor re-check complete (approve with changes; the editor's edits are applied). Awaiting the human's approval of Phase 4. Phase 5 has not started.

**Inputs read:**
- `/home/user/web3-casino-reviews/DESIGN_BRIEF.md`
- `/home/user/web3-casino-reviews/IA_PROPOSAL.md` (approved)
- `/home/user/web3-casino-reviews/DESIGN_SYSTEM.md` (approved Phase 3)
- `/home/user/web3-casino-reviews/index.html`, for catalog arrays and existing copy only: the `checked`/`stated` arrays of the 4 sourced entries (lines 1625, 1653–1654, 1711–1712, 1980–1981); the Stake, Rollbit and Cloudbet values (1636–1712); the `licenseNumber` and long `kyc` values (1616, 1622, 1649, 1701, 1707, 1969, 1975); `categoryMeta` titles (1565–1586); footer copy (1465–1467); compare copy (560); the max-3 message (2619).

**Source tags:**
- **(IA)**: IA_PROPOSAL.md.
- **(DS)**: DESIGN_SYSTEM.md.
- **(AM-Gn)**: a Phase 3 amendment listed in section 11.
- **(J)**: my judgment. Where it is copy, it still needs approval (section 14).
- **(GAP)**: something Phase 3 lacks.
- **(IAC)**: an IA conflict or ambiguity.
- **(O11b)**: duplicate descriptor text, provisional until IA O11(b) is closed in Phase 6.

Copy in "quotes" is IA, DS-approved or existing-site copy unless it is tagged (J).

---

## 1. Decisions applied (human, final)

The human approved every recommendation in the first draft's sections 6 and 10 ("accept all"). They are recorded here and applied throughout.

| # | Decision | Where applied |
|---|---|---|
| Q1 | Home H1 is "Casino directory". | 4.1, 8.6 |
| Q2 | Home intro is the 234-character draft below. It must stay at 7 lines or fewer at 320. Phase 7 measures it; the fold is reported as a range (8.6). Draft: "An unranked directory, grouped by category and listed A–Z. It is not a recommendation, safety rating or legality check. Most details were written without a recorded source. Sources links are plain reference links, not affiliate links." | 4.1 |
| Q3 | The Field status heading and the "Review methodology" link share one flex-wrap row (AM-G2). | 5, 8.1 |
| Q4 | Review top-stack spacing (AM-G1), stated exactly: `main` padding-block-start is `--space-2` (16px). Between H1, "Last verified", the Field status row and the group `<p>` lines the gap is 0, except one `--space-1` (8px) between "Last verified" and the Field status row. Any extra 8px between those four stacked blocks makes Stake and Cloudbet spill (473 becomes 481 or more). The Stake/Cloudbet margin is 7px, which is zero slack in practice, so Phase 7 must measure it. | 5, 8.1, 11 |
| Q5 | Do NOT adopt the "Unknown: all other fields" fallback. Every Unknown field is named in the Field status row. | 5, 8.1 |
| Q6 | Compare stacks below 40em (Option A). The maximum of 3 entries is kept. Options B and C are rejected. | 6, 8.2 |
| Q7 | The Compare `thead` is NOT sticky at any width in v1 (AM-G5). The cost and the deferred alternative are in 8.3. | 6, 8.3 |
| Q8 | The Home compare bar is static, after the controls, and rendered at n=0. | 4, 8.4 |
| Q9 | The Home max-3 message reuses "You can compare up to 3. Untick one first." | 4, 9 |
| Q10 | Compare copy: (a) the intro is ONE sentence, "Entries are unranked, in the order you picked them, with no winner; Unknown means we have no data or did not find it, not that the answer is 'none'.", followed by the "How we review" link. (b) The select's first option is "Choose an entry". (c) "Add". (d) "Entries, in the order picked". (e) "Only the first 3 entries are shown." (f) "Tick the "Compare" box on 2 or 3 directory cards, or add entries here." (g) "You can compare up to 3. Remove one first." | 6 |
| Q11 | Home's JS-off static list shows "{name} · {descriptor}" on the 8 duplicates. The descriptor text is provisional (O11b). | 4 |
| Q12 / I2 | Glance-field order everywhere (cards, At a Glance, Compare) is REVIEW_FIELDS order: **Licence, Custody, KYC**. This is a clarification of IA 5.1, which literally says "Licence, KYC, Custody". It does not change which fields are promoted. | 4, 5, 6 |
| Q13 | The review-page CTA carries the descriptor on the 8 duplicates only: "Compare {name} · {descriptor} with other entries". This puts the descriptor into the primary CTA label, the only `.button-primary` on the page. The descriptor text is provisional until O11(b) is closed. | 5 |
| Q14 | Catalog notes: h2 "Catalog notes", then the exact IA label line, then four items labelled "Summary", "Payments and tech", "Strengths", "Trade-offs". | 5 |
| Q15 | Labels and ids: glossary H1 "Glossary"; guides H1 "Guides"; disclosure h2 "Safer gambling"; methodology h2s are the IA block names; footer labels are the header labels plus "Disclosure & safer gambling"; jump nav `aria-label` "Categories"; category anchors are the `archKey`; guide ids as in 7.2. | 3, 4, 7 |
| Q16 | Review pages and `/disclosure/` have no `aria-current` item in the header nav. | 3 |
| Q17 | ARIA strings: "Main" (header nav); "Remove {name}" (Remove buttons, whose visible text is "Remove"). | 3, 6 |
| Q18 | The Compare Sources cell reads "{n} recorded, see the review". "see the review" is the link to `/review/{slug}/#sources`, with `aria-label` "see the review: {name}". The visible text stays IA-exact. | 6 |
| Q19 | The brand text is "UnderReview". | 3 |
| Q20 | Adopt the `html.js` hook (AM-G7), including the catalog.js failure rule in 11. | 3, 4, 6, 11 |
| I9 | In All fields, "Withdrawal & turnover rules" links to the Withdrawals row inside All fields (`#field-withdrawals`). | 5 |
| G8 | Approved: `inline-size: 100%` on `.control-text` and `.control-select` (AM-G8). | 4, 6, 11 |
| G9 | Approved: At a Glance stays stacked at all widths. There is no 3-column grid at 40em, so DS §5's provisional note is superseded and no CSS is added. | 5 |
| G3 | Decided under the human's delegation ("use your best judgment", 2026-11-23): approve the list reset `.list-plain` with `role="list"` (AM-G3). One rule, no visual choice, and it makes the Home static list, Compare entry list, Sources and Other entries consistent. | 11 |
| G8b | Decided under delegation: approve the controls cap `max-inline-size: var(--measure)` (AM-G8b). A full-width search box across 1168px is hard to use, and 640px matches the existing line length. | 11 |
| G11 | Decided under delegation: cap the review page column at `--measure` (AM-G11). Without it, long catalog values such as Stake's withdrawals text run to about 150 characters per line at 64em. The column is left-aligned inside `.wrap`, with no centring and no side panel (Phase 5 may decide what the empty space beside it does). Home and Compare stay full width. It has no effect below about 672px, so no fold arithmetic changes. | 5, 11 |
| Entry row | Decided under delegation: the stacked Compare entry list uses a small `.entry-row` flex row (AM-G12): the name link, then the Remove button, on one line when they fit, wrapping under a long name. No right alignment. The earlier drawing with Remove right-aligned is replaced. | 6, 11 |
| `:target` ring | Decided under delegation: extend the `:target` ring beyond `.prose` to the elements that anchors land on (AM-G13), and deliberately not to `main` or the Home directory wrapper, so arriving from a skip link or an old `/#casino-directory-30` link does not outline a whole page region. | 5, 11 |
| Print | Decided under delegation: no print styles in v1. Printing uses the screen styles. Revisit after launch. | 2 |
| Anchor | Decided under delegation: the old anchor `#casino-directory-30` goes on a `div` that wraps the directory (controls, compare bar, jump list, groups and cards, or the static list), not on the H1. IA 2.4 says "the Home directory section keeps the id". Landing there shows the controls and the list straight away, which is what "Back to the directory" links need, and the H1 stays a plain heading. It is a `div`, not a `section`, because it has no heading of its own. | 4 |

**Choices made in this revision under the editor's instructions (recorded, not new human decisions)**
- **Sort label (editor fix 7).** Both Compare variants are rendered through CSS (AM-G4), so each variant carries its own sort button. At 40em and wider the label is the IA-exact "Sort columns A–Z". Below 40em the label is "Sort entries A–Z" (J, new copy). Both toggle to the IA-exact "Back to the order picked". This adds one new string and keeps the IA label wherever columns exist. The alternative, one "Sort A–Z" label at all widths, would also add one string and would change IA wording, so it was not chosen.
- **Banner flow (editor note 16).** The banner text and its link share one inline flow inside one `<p>`. The result is 88px at 40em and 64px at 64em. A separate link block would take 112px at 40em. See 3.2 F3.
- **No print styles in v1 (J, editor note 20).** There are no `@media print` rules. Printing uses the screen styles. Decided under delegation (section 1, Print).
- **Long catalog values (editor fix 13).** Catalog values are shown in full, with no truncation and no line clamping. Catalog text is editorial truth, and DS forbids the literal a clamp would need anyway. See 8.8.

---

## 2. Conventions, assumptions, measurement method

**ASCII legend**
- `[Checked]` `[Stated]` `[Unverified]` `[Unknown]`: `.badge[data-status]`
- `[[ Text ]]`: `.button-primary` (only the 2 CTAs, DS 1.4)
- `[ Text ]`: `.button-secondary`
- `>Text`: `a.link-standalone` (44px target)
- `_text_`: inline link inside a sentence (exempt from the 44px minimum)
- `( ) Compare`: `.checkbox-label` + `.control-checkbox`
- `[______]`: `.control-text`
- `[ ...  v ]`: `.control-select`
- `====`: header 1px rule
- `####`: `.disclosure` 2px rules
- `|...|` inside the page: `.card`, `.glance-panel` or `.notice`
- `{x}`: data placeholder. No catalog values are invented. Real values are quoted only where index.html has them, with line numbers.
- `(prov. O11b)`: provisional descriptor text.

**Scale.** At 320px, 1 ASCII character is about 8px (40 characters). At 375px, 1 character is also about 8px (47 characters). Desktop drawings are compressed and not to scale. The left column is the y offset in px.

**Usable fold heights (assumed)**
- 320×568: **480px** is the design target (568 − 24 status bar − 64 browser bar). iOS Safari at first load, with top and bottom bars, gives 568 − 20 − 44 − 44 = **460px**. It is reported as a stress case.
- 375×667: **580px** is the target. Safari stress case: 667 − 20 − 44 − 44 = **559px**.

**Glyph-width estimates.** These are system-ui (SF/Roboto) estimates, not measurements:
- 16px regular: about 7.4px per character including spaces. 288px holds about 39 characters and 343px about 46.
- 16px semibold: about 7.9px. 20px semibold: about 10.6px. 25px semibold: about 13.3px.
- Mono at 16px: about 9.6px per character.
- Badges (12.8px semibold, +0.02em tracking, 16px inline padding, 6px of borders): Checked about 74px, Stated about 61px, Unverified about 84–90px, Unknown about 78px.
- "Remove" button: about 60 + 32 + 4 = 95px.
- Treat every line count as ±1 line (±24px) until Phase 7 measures with real fonts. Section 8.1 separates the robust results from the fragile ones.

**Widths below 40em.** H1 is 25/32 (`--text-xl`/`--leading-xl`), and the banner link is block-level on its own 44px line (DS 2.1, `display: flex`). Both 320 and 375 are below 40em (640px). 360 is used only in the Compare analysis.

---

## 3. Shared frame (all 4 templates)

### 3.1 Wireframes

```
320px (content 288 = 320 − 2×16 --gutter)
  y
  0 [Skip to main content]  <- clipped until focused; when focused it is in flow at y0 and adds 44px
  0 +--------------------------------------+
    |>UnderReview                 [ Menu ] |  header row 44 (--tap-min)
 44 +======================================+  1px --border-1
 45 |######################################|  2px --border-2
    | 18+ only. Gambling involves risk of  |  24   one <p>: text, then the link
    | loss. No affiliate relationships     |  24   (94 chars, about 696px; 2 lines
    | exist at time of writing.            |  24    hold only about 576px, so 3 lines)
    |>Disclosure & safer gambling          |  44   link is display:flex below 40em
181 |######################################|  2+8+72+44+8+2 = 136
    | <main id="main">  ...template...     |
    +--------------------------------------+
    | footer (3.3)                         |

Menu open (JS on, below 64em): .site-nav.is-open is a second header row, in flow (not an overlay)
  0 |>UnderReview                 [ Menu ] |  <button aria-expanded="true">
 44 |>Directory                            |  44 each, 5 x 44 = 220
    |>Compare                              |  current page: aria-current="page",
    |>How we review                        |  3px underline (--nav-current-thickness)
    |>Glossary                             |
    |>Guides                               |
264 +======================================+  the banner follows; the page is pushed down, nothing is covered

375px: same structure. The banner text is 3 lines (343 x 2 = 686 < 696), so the banner is 136.
       It is 2 lines (112) only if the average glyph is about 7.0px or less including
       word-wrap losses. That is unlikely, so every 375 figure below assumes 136.

40em to 64em (640–1023): same header with Menu. Banner: the text is 2 lines; the link is
       inline-flex and sits on line 2 after the text (about 88 + 200 = 288 of 608px), and
       its 44px line box sets line 2's height: 2+8+24+44+8+2 = 88.

>= 64em (1024+, content max 75rem = 1200 including gutters, 1168 content)
+------------------------------------------------------------------------------------------------+
|>UnderReview               >Directory  >Compare  >How we review  >Glossary  >Guides              |  44
+================================================================================================+  1
|################################################################################################|
| 18+ only. Gambling involves risk of loss. No affiliate relationships exist at time of writing.  |
| >Disclosure & safer gambling   (inline, same line when it fits: about 696+8+200 = 904 of 1168)  |
|################################################################################################|  2+8+44+8+2 = 64
```

### 3.2 Annotations, shared frame

**F1. Skip link**
- Component: `a.skip-link.button-secondary`, copy "Skip to main content" (DS H1, accepted), targeting `main#main`. Static.
- It is the first tab stop. When focused it is in flow and pushes the page down by 44px. That happens only on keyboard focus and does not affect the fold or CLS.

**F2. Header** (IA 3, DS 2.9)
- Markup: `header#top.site-header > .wrap`, containing `a.brand.link-standalone` "UnderReview" (Q19) and the Menu control.
- Menu is two baked elements toggled by AM-G7 (J). Because both are baked, no DOM swap happens and there is no layout shift:
  - `a.menu-toggle.button-secondary.no-js href="#footer-nav"` "Menu", shown when `html.js` is absent;
  - `button.menu-toggle.button-secondary.js-only aria-expanded="false" aria-controls="site-nav"` "Menu", shown when `html.js` is present. It is the same size as the link.
- The button toggles `.is-open`, with no animation. Focus stays on the button. Escape closes the open Menu and returns focus to the Menu button (section 9).
- 64em and wider: `.menu-toggle` is hidden and the nav is inline, with or without JS.
- Active page: `aria-current="page"` on the header nav link only, shown with the 3px underline and no colour change. Review pages and `/disclosure/` have no current item (Q16); on reviews the breadcrumb shows location.
- Not sticky (DS).
- Landmark: banner. The nav is `<nav id="site-nav" aria-label="Main">` (Q17).
- Tap targets: every item is 44px.

**F3. Disclosure banner** (IA 3, DS 2.7)
- Markup: `section.disclosure[aria-label="Disclosure"] > .wrap > p`. The `<p>` holds the exact text, then a space, then `a.link-standalone` "Disclosure & safer gambling" to `/disclosure/`. Static and identical on all 66 pages. Region landmark.
- **One inline flow (decided, editor note 16):**
  - Below 40em, DS sets the link to `display: flex`, so it becomes a block-level box and takes its own 44px line: 136px.
  - At 40em and wider it is `inline-flex` and follows the text on line 2: 88px.
  - At 64em and wider the text and the link fit on one line: 64px.
  - A separate block for the link would give 112px at 40em, so it is not used.
- Height: 136 at 320 and at 375; 88 at 40em; 64 at 64em and wider. 375 is 112 only in the unlikely 2-line case.
- Missing-data state: none (the copy is fixed).

**F4. main and page stack** (AM-G1)
- `main#main` has padding-block `--space-2` (16) at the start and `--space-4` (32) at the end.
- Direct children of `main` are separated by `--space-2`. On Home this puts 16px around the full-bleed compare bar.
- Inside `.wrap.page-stack`:
  - siblings are 16px apart by default;
  - a `section` gets 32px above it;
  - the element right after the H1 gets 0;
  - an element with `.stack-tight` gets 8px (`--space-1`).
- On review pages the Field status section and the status line carry `.stack-tight`. Nothing inside the Field status section adds margin: the group `<p>` lines keep the DS base `margin: 0`.

**F5. Footer.** See 3.3.

### 3.3 Footer (every template)

```
320px                                   copy source
+--------------------------------------+
| Informational & educational resource |  existing footer disclaimer (index.html 1465)
| only—not legal, financial, or        |
| gambling advice. Always verify local |
| laws in your jurisdiction and play   |
| responsibly.                         |
| 18+ only (21+ where local law        |  existing 18+ line (index.html 1467)
| requires). Gambling involves risk of |
| loss. Free, confidential help:       |
|>1-800-GAMBLER (US)                   |  existing hrefs reused (DS 2.9)
|>GamCare                              |
|>BeGambleAware                        |
|>Safer gambling guide                 |  -> /disclosure/#safer-gambling
| nav#footer-nav [aria-label=Footer]   |
|>Directory                            |  6 site pages (labels per Q15)
|>Compare                              |
|>How we review                        |
|>Glossary                             |
|>Guides                               |
|>Disclosure & safer gambling          |
|>Back to top                          |  -> #top
+--------------------------------------+
```

- Single column at every width (J). No footer grid class exists, and none is needed.
- `footer.site-footer`: contentinfo landmark. All links are `.link-standalone`, 44px each. Static.

---

## 4. Template 1: Home `/`

### 4.1 Wireframes

```
320px, JS ON (html.js set)                     y
  0 |>UnderReview                 [ Menu ] |  header 45
 45 |######################################|
    | 18+ only. Gambling involves risk of  |
    | loss. No affiliate relationships     |
    | exist at time of writing.            |
    |>Disclosure & safer gambling          |
181 |######################################|  banner 136
    |                                      |  main padding 16
197 | Casino directory                     |  H1 32 (1 line: 16 chars x 13.3 = 213 of 288);
    |                                      |  plain h1; the old anchor is on the directory wrapper (4.2 H2)
229 | An unranked directory, grouped by    |  .page-intro, gap 0 after H1
    | category and listed A–Z. It is not a |  intro 7 x 24 = 168 (Q2; 8 lines = 192)
    | recommendation, safety rating or     |
    | legality check. Most details were    |
    | written without a recorded source.   |
    | Sources links are plain reference    |
    | links, not affiliate links.          |
397 |>How we review                        |  44, own <p> inside .page-intro, gap 0
441 |                                      |  16
457 | Search entries                       |  control label 24 (457–481)
480 - - - - FOLD 320x568 (480): the label straddles it (457–481) - - - -
481 |                                      |  8
489 | [__________________________________] |  44 input (inline-size 100%, AM-G8)
533 |                                      |  16
549 | Category                             |  24
581 | [ All categories                 v ] |  44 (after 8)
625 |                                      |  16
641 | Sort                                 |  24
673 | [ A–Z                            v ] |  44 (after 8)
717 |                                      |  16
733 | Showing {total} of {total}           |  24, p.control-count[role=status], baked
    |                                      |  empty with min-block-size 24 (AM-G1)
757 |                                      |  8
765 | [ Reset ]                            |  44   controls block 457–809 = 352
809 |                                      |  16 (main > * + *)
825 +--------------------------------------+  compare bar (full-bleed, static, Q8)
    | 0 of 3 selected                      |  p.compare-count[aria-live=polite]
    | [[ Go to comparison ]]  [ Clear ]    |  2+8+24+16+44+8 = 102
927 +--------------------------------------+
943 | nav[aria-label=Categories]           |  jump list, A–Z by title, 6 links
    |>Large game libraries                 |  (1 line each)
    |>Lightning and fast payouts           |
    |>Wallet-connect platforms             |
    |>Sports betting and casino            |
    |>Token-based platforms                |
    |>Promotions and special features      |
    |                                      |  32 (section)
    | Large game libraries                 |  h2 id="game-libraries" (Q15), .stack-1
    | {categoryMeta subtitle}              |  .text-muted
    | +----------------------------------+ |  ul.card-grid, 1 column; cards in 4.3
    | | card                             | |
    | +----------------------------------+ |
    | ... next card, next group ...        |
    | footer                               |

375px, JS ON (banner 136, content 343)
  0 header 45 | 45 banner 136 | 181 +16 | 197 H1 32 | 229 intro 6 x 24 = 144 (7 possible)
  373 >How we review 44 | 417 +16
  433 "Search entries" 24 | 465 input 44 → 509 | 525 "Category" 24 | 557 select 44 → 601
580 - - - - FOLD 375x667 (580): the Category select (557–601) is cut - - - -
  compare bar at 375: count + Go fit on row 1 (111+16+162 = 289 <= 343); Clear wraps:
  2+8+44+16+44+8 = 122

>= 64em (1200 container, card grid 3 columns; drawing compressed)
+------------------------------------------------------------------------------------------------+
| header (inline nav, "Directory" aria-current) / banner 64                                       |
| Casino directory                                                          (H1 31.25/40)         |
| An unranked directory, grouped by category and listed A–Z. It is not a recommendation,          |
| safety rating or legality check. Most details were written without a recorded source.           |  .page-intro p at
| Sources links are plain reference links, not affiliate links.                                   |  --measure (640)
| >How we review                                                                                  |
| Search entries                                                                                  |  controls stacked at
| [____________________________________________________]                                          |  every width; width
| Category                                                                                        |  100% of .controls
| [ All categories                                   v ]                                          |  (see G8b, 11)
| Sort                                                                                            |
| [ A–Z                                              v ]                                          |
| Showing {total} of {total}                                                                      |
| [ Reset ]                                                                                       |
+------------------------------------------------------------------------------------------------+
| 0 of 3 selected   [[ Go to comparison ]]  [ Clear ]                       (compare bar, 62)     |
+------------------------------------------------------------------------------------------------+
| Categories: >High-Volume…  >Lightning…  >Non-Custodial…  >Sportsbook…  >Tokenomics…  >VIP…      |
| Large game libraries                                                     |
| {subtitle}                                                                                      |
| +--------------------------+  +--------------------------+  +--------------------------+        |
| | card (multi-line values; | | card                     |  | card                     |        |
| | heights differ, 8.8)     | |                          |  |                          |        |
| +--------------------------+  +--------------------------+  +--------------------------+        |
```

**JS OFF, or catalog.js failed (html.js absent): 320**
```
229 intro ... / 397 >How we review / 441 +16
457 | nav[aria-label=Categories] (6 links) |  controls and compare bar hidden (.js-only)
    | Large game libraries                 |  h2 + subtitle (baked)
    | {subtitle}                           |
    | >{name}                              |  ul.list-plain (AM-G3), one .link-standalone
    | >{name}                              |  per line, A–Z by name, then slug
    | >mBit Casino · instant crypto focus  |  duplicates carry the descriptor (Q11)
    |    (prov. O11b)                      |
    | ... 60 links in 6 groups ...         |
    | footer                               |
```

### 4.2 Annotations, Home

**H1. Header and banner** (IA 5.1 blocks 1–2). See F2 and F3.

**H2. H1 and intro** (IA block 3; static)
- H1 "Casino directory" (Q1). The intro is the Q2 draft. No count appears anywhere in it (IA).
- Markup: a plain `h1`. Then `div.page-intro` holding the intro `<p>` and a second `<p>` with `a.link-standalone` "How we review" to `/methodology/`. Both have 0 gap (AM-G1), and the intro `<p>` is limited to `--measure`.
- Fold budget: see 8.6. The robust result is that the banner, the H1 and the intro start are above the fold. The link ends at 441–465 depending on 7 or 8 intro lines.
- Heading: h1. JS has no effect on this block.
- Directory wrapper: `div#casino-directory-30` wraps everything between the intro and the footer (controls, compare bar, jump list, category groups and cards, or the baked static list). It is a `div` because it has no heading of its own, and it receives no `:target` ring (AM-G13). Old `/#casino-directory-30` links and "Back to the directory" land there.

**H3. Controls** (IA block 4; data from catalog.js; JS only)
- Components (labels per DS H2, accepted):
  - `label.control-label` "Search entries" + `input.control-text[type=search]`
  - "Category" + `select.control-select` ("All categories", then the 6 titles A–Z)
  - "Sort" + `select` ("A–Z", "Z–A")
  - `p.control-count[role=status]`
  - `[ Reset ]` (`.button-secondary`)
- The whole block is baked as `div.controls.js-only` (AM-G7), so it occupies its space from first paint and no shift occurs above the cards.
- **Count (editor note 17).** The baked `p.control-count` stays empty until JS fills it with "Showing {total} of {total}", where total is computed. `min-block-size: var(--leading-base)` (AM-G1) reserves its 24px line, so filling it shifts nothing. No literal 60 appears in markup or drawings.
- Zero results: "Showing 0 of {total}" plus Reset, with no sentence (DS H3). All groups and their jump links are hidden, so no jump link points at a hidden group (IA link rule; J).
- Controls stack at all widths. With AM-G8 each control fills its container. The optional G8b caps `.controls` at `--measure` (section 11).
- Behaviour after each action: section 9.

**H4. Compare bar** (IA block 7; JS only; Q8)
- Components: `section.compare-bar.js-only` holding `p.compare-count[aria-live=polite]` (baked text "0 of 3 selected"), `[[ Go to comparison ]]` and `[ Clear ]`.
- "Go to comparison" links to `/compare/?casinos={slugs in pick order}`, or to `/compare/` at n=0.
- Static, directly after the controls, full-bleed between the two `.wrap` blocks of `main`. It is in the DOM from first paint, so the live region exists before its first change (DS 2.9).
- States:
  - n=0: "0 of 3 selected". Go goes to `/compare/`, which handles 0–1 entries. Clear has no effect.
  - n=1 to 3: "{n} of 3 selected".
  - A 4th tick is refused: the checkbox reverts and the live region reads "You can compare up to 3. Untick one first." (Q9). The count text returns on the next selection change (section 9).
- Clear stays visible at n=0, so pressing it never removes the focused element (J).
- Selection lives in page memory only (J). On load, JS reads the checkboxes' state (the browser may restore it on Back) and sets the count to match, so the two never disagree.
- Height: 102 at 320, 122 at 375, 62 at 40em and wider (8.4).

**H5. Jump list and groups** (IA block 5; data from `categoryMeta`, baked)
- `nav[aria-label="Categories"]` holds 6 `.link-standalone` links to `#{archKey}` (Q15). Group order is A–Z by title (IA).
- Each group is `<section class="stack-1" aria-labelledby>` with an h2 title, a `.text-muted` subtitle and two lists:
  - the baked static `ul.list-plain.no-js`;
  - an empty `ul.card-grid.js-only` that JS fills.
- When the Category filter is active, only that group and its jump link show.

**H6. Cards** (IA block 6; data from catalog.js; DS 2.5). See 4.3.
- Grid columns: 1 column at 320–623px, 2 at 624–927px, 3 at 928px and wider. A 4th never fits (8.7).
- Cards in one grid row stretch to the row height (grid default). Phase 5 must not treat the extra height of sourced cards as emphasis (8.8).

**H7. Footer.** See 3.3.

### 4.3 Card states (320; card content 288 − 2×16 padding − 2×1 border = 254, about 34 characters per line)

Values are shown in full, with no truncation or clamping (8.8). The drawings use real catalog text where index.html has it.

```
(a) Sourced: Stake (index.html 1636–1660)     (b) Unsourced: Rollbit (index.html 1663–1675)
+------------------------------------+         +------------------------------------+
|>Read the review: Stake             | h3 44   |>Read the review: Rollbit           |
| Large game libraries               | muted   | Token-based platforms              |
|                                    |         | Licence                            |
| Licence                            | dt      | Curaçao Gaming Oversight           |
| Curaçao Gaming Authority (register | dd      | [Unverified]                       |
| status: Assessment in progress)    |         | Custody                            |
| [Checked]                          | badge   | Custodial Trading & Casino Account |
| Custody                            | alone   | [Unverified]                       |
| Custodial Vault & Multi-Crypto     | (IA 4.1)| KYC                                |
| Wallet [Unverified]                |         | Tiered / AML Risk Verification     |
| KYC                                |         | [Unverified]                       |
| Terms: KYC documents can be        |         | Catalog notes · Unverified: written|
| requested at any time; service,    |         | without a recorded source.         |
| payments or withdrawals can be     |         | Pairs casino games with a crypto   |
| restricted until identity is       |         | futures trading desk and executes  |
| verified [Stated]                  |         | public token buybacks.             |
| Catalog notes · Unverified: written|         | Unverified · no check date recorded|
| without a recorded source.         |         | Last verified: not recorded yet    |
| Major crypto-native incumbent      |         | ( ) Compare                        |
| featuring proprietary "Stake       |         +------------------------------------+
| Originals" and built-in provably   |         about 17 text lines + 2 x 44 targets
| fair verification.                 |
| Partly checked · last verified     | status line
| 2026-11-22                         |
| Last verified: 2026-11-22          | <time class="data">
| ( ) Compare                        | aria-label "Compare Stake"
+------------------------------------+
about 24 text lines + 2 x 44 targets: roughly 150–200px taller than (b) at 320.
Cloudbet's KYC alone (index.html 1701, 223 chars) is about 7 lines + badge; Vbet's
(1969, about 330 chars) about 10 lines + badge.

(c) Duplicate-brand card (unsourced; descriptor provisional, O11b)
+------------------------------------+
|>Read the review: mBit Casino ·     |  51 chars x 10.6 = about 541px / 254 = 3 lines = 84 (drawn compressed to 2 lines)
| instant crypto focus (prov. O11b)  |
| {archLabel}                        |
| Licence                            |
| {license value, 1–3 lines}         |
| [Unverified]                       |
| Custody                            |
| {custody value, 1–3 lines}         |
| [Unverified]                       |
| KYC                                |
| {kyc value, 1–3 lines}             |
| [Unverified]                       |
| Catalog notes · Unverified: written|
| without a recorded source.         |
| {summary, 2–4 lines}               |
| Unverified · no check date recorded|
| Last verified: not recorded yet    |
| ( ) Compare                        |  aria-label "Compare mBit Casino · instant crypto focus"
+------------------------------------+

(d) No glance fields (IA 6(b) future scenario; does not occur today)
+------------------------------------+
|>Read the review: {name}            |
| {archLabel}                        |
| Catalog notes · Unverified: written|
| without a recorded source.         |
| {summary}                          |
| Unverified · no check date recorded|
| Last verified: not recorded yet    |
| ( ) Compare                        |
+------------------------------------+
(no empty rows, no "—", no placeholder rows)
```

**Card annotations**
- Data: catalog.js. Card children are spaced by the DS `.card` gap (`--space-1`).
- Tab stops per card: 2 (the heading link, then the checkbox).
- Headings: card h3 under the group h2.
- Every card uses identical styling. Hover changes the border colour only.
- Field order: **Licence, Custody, KYC** (Q12, REVIEW_FIELDS order; a clarification of IA 5.1).
- The Vbet card shows Custody as its not-found value text, then `[Unknown]` (DS 2.2).

---

## 5. Template 2: Review `/review/{slug}/`

### 5.1 Wireframes

```
320px: the 56 unsourced pages, example Rollbit (index.html 1663–1675). The 9 duplicates
are unsourced too and share this top stack.
  y
  0 | header                               |  45
 45 | banner                               |  136
181 |                                      |  16 (main padding-block-start)
197 | Rollbit                              |  H1 32 (gap 0 below)
229 | Last verified: not recorded yet      |  24
253 |                                      |  8 (--space-1: the only gap in the stack)
261 | Field status     >Review methodology |  44, one row (AM-G2): 127+16+133 = 276 of 288
305 | [Unverified]: Licence, Custody, KYC  |  30 (gap 0)
335 | [Unknown]: Operator, Licence no.,    |  30
365 | Coins, Withdrawals, Bonus terms,     |  24
389 | Restricted countries, Safer-gambling |  24
413 | tools, Support                       |  24  (4 lines central; a 5th is possible, 8.1)
437 |                                      |  8 (.stack-tight)
445 | Unverified · no check date recorded  |  24 status line, .text-muted (445–469)
460 - - - Safari stress fold (460): groups fit on paper only (23px); status line cut - - -
469 |                                      |
480 - - - FOLD 320x568 (480): fits on paper only (43px); 11 to spare after the status line
501 | +----------------------------------+ |  .glance-panel (32 above, section)
    | | At a Glance                      | |  h2.heading-compact 28
    | |----------------------------------| |  .glance-row
    | | Licence                          | |  dt
    | | Curaçao Gaming Oversight         | |  dd value
    | | [Unverified] Claim · no source   | |  badge + .badge-sublabel, wrapping
    | | recorded                         | |
    | |----------------------------------| |
    | | Custody                          | |
    | | Custodial Trading & Casino       | |
    | | Account [Unverified] Claim · no  | |
    | | source recorded                  | |
    | |----------------------------------| |
    | | KYC                              | |
    | | Tiered / AML Risk Verification   | |
    | | [Unverified] Claim · no source   | |
    | | recorded                         | |
    | | Not yet sourced: Provably fair · | |  .text-muted
    | | Audit link · Withdrawal time     | |  (no "{n} more" line: nothing sourced)
    | +----------------------------------+ |
    |>Directory › >Token-based platforms   |  nav.breadcrumb (16 above)
    | ▸ All fields                         |  <details id="all-fields">, summary 44
    |                                      |  32
    | Sources                              |  h2 id="sources", section.stack-1
    | No sources recorded yet.             |  exact; same heading and spacing as filled
    |                                      |  32
    | Catalog notes                        |  h2 (Q14), section.stack-1
    | Catalog notes · Unverified: written  |  exact label, .text-muted
    | without a recorded source.           |
    | Summary                              |  4 labelled items (Q14), dl
    | Pairs casino games with a crypto     |
    | futures trading desk and executes    |
    | public token buybacks.               |
    | Payments and tech / {techStack}      |
    | Strengths / {strengths}              |
    | Trade-offs / {tradeoffs}             |
    |                                      |  32
    | Other entries in this category       |  h2 exact, section.stack-1
    | (A–Z, unranked)                      |
    |>{name}                               |  ul.list-plain (AM-G3), A–Z
    |>{name} · {descriptor} (prov. O11b)   |  duplicates only
    |                                      |  16
    |[[ Compare Rollbit with other       ]]|  .button-primary: 34 chars x 7.9 = 269 > 252,
    |[[ entries                          ]]|  2 lines: 48 + 4 border = 52 (padding-block 0)
    | footer                               |

All fields open:
    | ▾ All fields                         |  summary on --color-raised
    | Operator                             |  id="field-operator"
    | [Unknown] Unknown (not yet checked)  |  absent value: the sub-label fills the slot (DS 2.2)
    | Licence                              |
    | Curaçao Gaming Oversight             |
    | [Unverified] Claim · no source       |
    | recorded                             |
    | ... all 11 REVIEW_FIELDS in order,   |  each row id="field-{key}" (J);
    |     Withdrawals is id="field-        |  Withdrawals is id="field-withdrawals"
    |     withdrawals" ...                 |
    | Provably fair: Unknown (not yet      |  IA exact
    | checked)                             |
    | Audit link: Unknown (not yet checked)|
    | Withdrawal time: Unknown (not yet    |
    | checked); see _Withdrawal & turnover |  inline link -> #field-withdrawals (I9);
    | rules_                               |  same open <details>, no JS needed
    | Not yet sourced. A way to send       |  6(d), plain text
    | sources or corrections has not been  |
    | set up yet.                          |
```

```
320px: Stake (sourced). Top stack identical to y=305.
305 | [Checked]: Licence, Licence no.      |  30
335 | [Stated]: Operator, KYC, Withdrawals,|  30
365 | Restricted countries, Support        |  24
389 | [Unverified]: Custody                |  30
419 | [Unknown]: Coins, Bonus terms,       |  30  first line of every group above 460
449 | Safer-gambling tools                 |  24  <- Safari 460 cuts this line
473 |                                      |
480 - - - FOLD 320x568 (480): fits on paper only (7px); spills 21 if the heading row
          wraps or the font is 7px wider - - -
481 | Partly checked · last verified       |  status line (8 above), 2 lines
    | 2026-11-22                           |
    | +----------------------------------+ |  .glance-panel (content 254)
    | | At a Glance                      | |
    | |----------------------------------| |
    | | Licence                          | |  dt
    | | Curaçao Gaming Authority         | |  dd value (index.html 1642)
    | | (register status: Assessment in  | |
    | | progress) [Checked] On the       | |  badge + sub-label flow inline
    | | regulator's register · see       | |
    | | Sources                          | |
    | |   | Licence no.                  | |  .glance-subline (content 254−16−1 = 237;
    | |   | OGL/2024/1451/0918.          | |   mono about 24 chars/line; index.html 1649)
    | |   | Curaçao Gaming Authority     | |
    | |   | register page: holder        | |
    | |   | Medium Rare N.V., type       | |
    | |   | B2C, status "Assessment      | |
    | |   | in progress", issued 9       | |
    | |   | Jun 2025, approved           | |
    | |   | domain stake.com only.       | |
    | |   | Company, number and          | |
    | |   | domain match the             | |
    | |   | casino's claim.              | |  about 11 mono lines = 264px
    | |   | [Checked] On the regulator's | |
    | |   | register · see Sources       | |
    | |----------------------------------| |
    | | Custody                          | |
    | | Custodial Vault & Multi-Crypto   | |
    | | Wallet [Unverified] Claim · no   | |
    | | source recorded                  | |
    | |----------------------------------| |
    | | KYC                              | |
    | | Terms: KYC documents can be      | |
    | | requested at any time; service,  | |
    | | payments or withdrawals can be   | |
    | | restricted until identity is     | |
    | | verified [Stated] From the       | |
    | | casino's own page · see Sources  | |
    | | Not yet sourced: Provably fair · | |
    | | Audit link · Withdrawal time     | |
    | | 4 more fields have sources: see  | |  n computed: Operator, Withdrawals,
    | | _All fields_                     | |  Restricted countries, Support. The link
    | +----------------------------------+ |  lands on the CLOSED <details>; the user
    |   (panel about 900px tall at 320)    |  must activate the summary (no JS on reviews)
    | ... breadcrumb, All fields ...       |
    | Sources                              |
    |>Curaçao Gaming Authority register:   |  one item per source, rel="noopener noreferrer",
    | Stake licence page (page snapshot    |  label text as recorded (index.html 1656)
    | 2026-11-20)                          |
    |>{label} (page snapshot {date})       |
```

```
320px: Duplicate page, example wildio-vip. The top stack and fold equal the 56 pages
(437; status line 445–469).
445 | Unverified · no check date recorded  |
480 - - - FOLD - - - - -
485 | +--------------------------------------  .notice (16 above; 3px strong inline-start edge)
    | | This entry (VIP match focus) covers |  exact IA 2.3 text; descriptor provisional
    | | a brand that also has a page here: |  (O11b); about 5 lines
    | | Wild.io. Details may differ or     |
    | | conflict; see the Wild.io review   |
    | | too.                               |
    | |>Read the review: Wild.io           |  .link-standalone, not accent
    | +--------------------------------------
    | At a Glance ...                      |
    ...
    |[[ Compare Wild.io · VIP match focus]]|  Q13: descriptor in the CTA (8 duplicates);
    |[[ with other entries               ]]|  2 lines = 52; up to 3 lines (76) for the
                                               longest provisional descriptor
  #20 betpandaio (no descriptor): "This entry covers a brand that also has a page here: BetPanda. ..."
```

```
375px: 56 pages (content 343, about 46 chars per line; banner 136)
  0 header 45 | 45 banner 136 | 197 H1 | 229 LV | 261 Field status row 44 (276 of 343) | 305
305 | [Unverified]: Licence, Custody, KYC             |  30
335 | [Unknown]: Operator, Licence no., Coins,        |  30
365 | Withdrawals, Bonus terms, Restricted            |  24
389 | countries, Safer-gambling tools, Support        |  24
413   status line 421–445, At a Glance begins at 477 ...
580 - - - - FOLD 375x667 (580): fits, 167 spare - - - -
```

```
>= 64em review (single column in .wrap; drawing compressed; review column capped at `--measure`, AM-G11)
+------------------------------------------------------------------------------------------------+
| header / banner 64                                                                              |
| Stake                                                                     H1 31.25/40           |
| Last verified: 2026-11-22                                                                       |
| Field status                    >Review methodology                                             |
| [Checked]: Licence, Licence no.                                                                 |
| [Stated]: Operator, KYC, Withdrawals, Restricted countries, Support                             |
| [Unverified]: Custody                                                                           |
| [Unknown]: Coins, Bonus terms, Safer-gambling tools                                             |
| Partly checked · last verified 2026-11-22                                                       |
| +--- At a Glance (rows stacked at all widths, G9) -------------------------------------------+ |
| | Licence                                                                                    | |
| | Curaçao Gaming Authority (register status: Assessment in progress) [Checked] On the        | |
| | regulator's register · see Sources                                                         | |
| |   | Licence no.                                                                            | |
| |   | OGL/2024/1451/0918. Curaçao Gaming Authority register page: holder Medium Rare N.V.,  | |
| |   | type B2C, status "Assessment in progress", issued 9 Jun 2025, approved domain ...     | |
| | ...                                                                                        | |
| +--------------------------------------------------------------------------------------------+ |
| >Directory › >{archLabel}  /  ▸ All fields  /  Sources  /  Catalog notes  /  Other entries ...  |
| [[ Compare Stake with other entries ]]                                                          |
| footer                                                                                          |
```

### 5.2 Annotations, Review (IA 5.2 block numbers)

Data: baked static HTML (D4). No page-specific JS is used or needed. The only JS-dependent difference is the shared Menu control (button with JS, link without), and the review facts are identical either way. Every value is shown in full (8.8).

| # | Block | Component and markup | Missing-data state | Tab stop |
|---|---|---|---|---|
| 1–2 | Header, banner | F2, F3 | — | skip, brand, Menu, banner link |
| 3 | H1 `{name}` | h1 (25/32 below 40em, 31.25/40 at 40em and wider). The brand only, also on duplicates (IA 4.5). | — | — |
| 4 | Last verified | `p` with `<time class="data">`. "Last verified: not recorded yet" stays sans on the 56 pages. Gap 0 after the H1. | exact IA text | — |
| 5 | Field status | `section.stack-tight[aria-labelledby]` (8px above). Inside: `div.heading-row` (AM-G2) holding `h2.heading-compact` "Field status" and `a.link-standalone` "Review methodology" to `/methodology/`. Then one `<p>` per group: badge, then ": ", then the labels, with no sub-label (DS H4). 0 gap between all of these. | Empty groups are omitted. The Unknown group is a normal group. Every Unknown field is named (Q5). | "Review methodology" |
| 6 | Status line | `p.text-muted.stack-tight` (IA 4.2 wording) | "Unverified · no check date recorded" | — |
| 7 | Duplicate banner | `.notice` with the exact IA 2.3 text (descriptor provisional, O11b), then `.link-standalone` "Read the review: {primary}" | 9 pages only | primary link |
| 8 | At a Glance | `section.glance-panel` + `dl` of `.glance-row`; `.glance-subline` for Licence no.; the two `.text-muted` lines (DS 2.4). Rows stacked at all widths (G9). | 56 pages: 3 Unverified rows and the not-yet-sourced line, with no "{n} more" line | "see All fields" (sourced pages only). It lands on the closed `<details>`, which needs a click. |
| 9 | Breadcrumb | `nav.breadcrumb[aria-label=Breadcrumb] ol`, links to `/` and `/#{archKey}` | — | 2 links |
| 10 | All fields | `<details id="all-fields">` / `<summary>` "All fields" (44). Rows `id="field-{key}"` (J). Works without JS. | Unknown rows render with the badge and "Unknown (not yet checked)" | summary; the "Withdrawal & turnover rules" inline link (I9) |
| 11 | Sources | `section.stack-1` with h2 "Sources" (`id="sources"`) and a `ul.list-plain`. Links only for http(s) URLs. | "No sources recorded yet." | each source link |
| 12 | Catalog notes | `section.stack-1`: h2, the exact label, 4 items (Q14) | always present (all 60) | — |
| 13 | Other entries | `section.stack-1`, h2 exact; `ul.list-plain` A–Z, with descriptors on duplicates (IA 4.5, provisional O11b) | If the category has only 1 entry, the block is omitted (J; this does not happen today). | each link |
| 14 | CTA | `p > a.button-primary` "Compare {name} with other entries" to `/compare/?casinos={slug}`. On the 8 duplicates: "Compare {name} · {descriptor} with other entries" (Q13, provisional O11b). 52px at 2 lines (48 + 4 border), up to 76 at 3. | — | CTA |
| 15 | Footer | 3.3 | — | footer links |

**Landmarks.** banner (header), region "Disclosure", main, navigation "Breadcrumb", contentinfo.

**Heading outline**
- h1 {name}
  - h2 Field status
  - h2 At a Glance
  - h2 Sources
  - h2 Catalog notes
  - h2 Other entries in this category (A–Z, unranked)

The `summary` is not a heading.

---

## 6. Template 3: Compare `/compare/`

### 6.1 Why the table stacks below 40em (Q6, Option A)

Three side-by-side columns at narrow widths:

| Item (worst case) | Width needed | 3 cols at 320 (content 80) | 3 cols at 360 (content 93) | 3 cols at 375 (content 98) | Stacked at 320 (content 128) |
|---|---|---|---|---|---|
| "Unverified" badge (nowrap) | 84–90 | overflows by 4–10 | fits, 3–9 spare | fits, 8–14 spare | fits |
| "Remove" `.button-secondary` | ~95 | overflows by 15 | **overflows by about 2** | fits, 3 spare | not in the table (entry list, full width) |
| Mono date "2026-11-22" | 96 | breaks mid-date (`overflow-wrap: anywhere`) | **breaks mid-date (about 3 over)** | fits, 2 spare | fits |

**Column arithmetic**
- 320: 288 / 3 = 96, minus 16 padding = 80.
- 360: 328 / 3 = 109.3, minus 16 = 93.3.
- 375: 343 / 3 = 114.3, minus 16 = 98.3.
- Stacked at 320: 2 columns of 144, minus 16 = 128.
- Stacked at 375: 2 columns of 171.5, minus 16 = 155.5.

The common 360px Android width already fails side by side, and 375 passes by 2–14px only, which is less than the font uncertainty. That is the case for Option A.

**Rejected:** an `overflow-x` scroll wrapper. It breaks the brief §6 rule that tables are readable at 375 without sideways scrolling, and DS 2.6's rule that no ancestor of the table may set `overflow`. Option B (a 2-entry maximum below about 23em) and Option C (zero cell padding) stay rejected.

**Option A as built (AM-G4)**
- Both variants are in the markup, inside `div.compare-stacked` and `div.compare-wide`. One CSS rule, `@media (min-width: 40em)`, shows one and sets the other to `display: none`, which also removes it from the accessibility tree. `aria-hidden` alone is not used.
- JS has no `matchMedia` and no breakpoint literal. Each render builds both variants once, from the same data in the same function, so there is no second source of truth and nothing re-renders on resize.
- **Stacked (below 40em):**
  - h2-less entry list `ul.list-plain` "Entries, in the order picked" (Q10d): name link and Remove;
  - a "Sort entries A–Z" button (J);
  - `table.data-table` with no `thead`. Each field `<tbody>` holds its `th[scope=rowgroup][colspan=2]` label row, then one row per entry: `<th scope="row">{name · descriptor}</th><td>{value} {badge} {sub-label}</td>`. Row-header names are text, not links.
- **Wide (40em and wider):** the "Sort columns A–Z" button and the DS 2.6 side-by-side table (`thead` with name links and Remove). Content is 186px or more per column with 3 entries at 640px.
- Ids stay unique through per-table prefixes `s-main`, `s-more`, `w-main`, `w-more` (amending DS 2.6's `main`/`more`).
- Stacked header association (editor): each stacked `td` carries `headers="s-main-f-{field} s-main-r-{slug}"`, and each `th[scope=row]` has `id="s-main-r-{slug}"` (`s-more-` inside More fields). `scope=rowgroup` alone is poorly supported by screen readers, so the field name must reach them through `headers`.
- The "Entries, in the order picked" text is a visible `<p id>` and the `ul` has `aria-labelledby` pointing to it.
- The row label "Status line" and the unsourced Last verified cell text "not recorded yet" are (J) (IA §9 item 11 reads "Last verified: not recorded yet"); see section 14 item 5b.
- Remove sits inline after the name link in `div.entry-row` (AM-G12); a long name wraps and Remove drops under it. There is no right alignment.
- Cost: below 40em the values for one field sit stacked, not side by side, and the entry name repeats in each field group.
- Residual risk (J): if the viewport crosses 40em while focus is on a control inside the variant being hidden (for example when zooming), that control is hidden. Phase 7 tests where the next Tab goes. No resize listener is added.

### 6.2 Wireframes

```
320px, JS ON, 3 entries (Stake sourced, Rollbit unsourced, one duplicate)    y
  0 | header (Compare aria-current) / banner |  181
197 | Compare entries                      |  H1 32 (15 chars x 13.3 = 200, 1 line)
229 | Entries are unranked, in the order   |  one sentence (Q10a), 148 chars:
    | you picked them, with no winner;     |  4 x 24 = 96 (5 is unlikely)
    | Unknown means we have no data or did |
    | not find it, not that the answer is  |
    | 'none'.                              |  (drawn compressed; 4 lines central, 5 unlikely)
325 |>How we review                        |  44 (4-line case), .page-intro, gap 0
369 |                                      |  16
385 | Add an entry                         |  label 24 (385-409); picker is div.controls.js-only, baked shell; label + control in div.control-group
417 | [ Choose an entry                v ] |  44 (after 8), ends 461; options A–Z, picked excluded
477 | [ Add ]                              |  44 (after 16), ends 521; no auto-add on change (J)
480 - - - - FOLD 320x568 (480): banner, H1, intro, link and the select are above; Add (477-521) straddles it. With a 5-line intro the select (441-485) straddles - - - -
    | {status p, empty until a message}    |  p[role=status] (J copy, section 9)
    | [ Back to the directory ]            |  -> /#casino-directory-30
    | Entry not found: {slug}              |  only when the URL has a bad slug (escaped)
    |                                      |
    | --- div.compare-stacked ----------- |
    | [ Sort entries A–Z ]                 |  (J) toggles to "Back to the order picked";
    |                                      |  hidden with fewer than 2 entries (J)
    | Entries, in the order picked         |  Q10d
    | >Stake  [ Remove ]                   |  .entry-row (AM-G12); aria-label "Remove Stake" (Q17)
    | >Rollbit  [ Remove ]                 |
    | >mBit Casino · instant crypto        |  (prov. O11b); a long name wraps
    |   focus  [ Remove ]                  |
    | +----------------------------------+ |  table.data-table aria-labelledby=H1
    | | Category                         | |  th rowgroup colspan=2
    | |----------------+-----------------| |
    | | Stake          | Large game     | |  th scope=row | td (128 content each)
    | |                | libraries       | |
    | | Rollbit        | Token-based    | |
    | |                | platforms       | |
    | | mBit Casino ·  | {archLabel}     | |
    | | instant crypto |                 | |
    | | focus          |                 | |
    | |----------------------------------| |
    | | Status line                      | |
    | | Stake          | Partly checked ·| |
    | |                | last verified   | |
    | |                | 2026-11-22      | |
    | | Rollbit        | Unverified · no | |
    | |                | check date      | |
    | |                | recorded        | |
    | | mBit Casino …  | Unverified · …  | |
    | |----------------------------------| |
    | | Last verified                    | |
    | | Stake          | 2026-11-22      | |  mono, 96 of 128: fits
    | | Rollbit        | not recorded yet| |
    | | mBit Casino …  | not recorded yet| |
    | |----------------------------------| |
    | | Licence                          | |
    | | Stake          | Curaçao Gaming  | |  full value, no clamp (8.8):
    | |                | Authority       | |  about 6 lines + badge + sub-label
    | |                | (register       | |
    | |                | status:         | |
    | |                | Assessment in   | |
    | |                | progress)       | |
    | |                | [Checked] On the| |
    | |                | regulator's     | |
    | |                | register · see  | |
    | |                | Sources         | |
    | | Rollbit        | Curaçao Gaming  | |
    | |                | Oversight       | |
    | |                | [Unverified]    | |
    | |                | Claim · no      | |
    | |                | source recorded | |
    | | mBit Casino …  | {value} [..] …  | |
    | |----------------------------------| |
    | | Custody / KYC: same structure    | |
    | |----------------------------------| |
    | | Sources                          | |
    | | Stake          | 3 recorded,     | |
    | |                | _see the review_| |  aria-label "see the review: Stake" (Q18)
    | | Rollbit        | No sources      | |
    | |                | recorded yet.   | |
    | | mBit Casino …  | No sources      | |
    | |                | recorded yet.   | |
    | +----------------------------------+ |
    | ▸ More fields                        |  details; same stacked structure inside
    | --- div.compare-wide: display:none - |  (not rendered, not in the a11y tree)
    | footer                               |

375px: identical structure; columns 171.5, content 155.5. The intro is 4 lines ,
the link ends at 369 and the picker select at 461, all above 580.

>= 40em (drawn at 1200; compressed): div.compare-wide; thead NOT sticky (Q7)
+------------------------------------------------------------------------------------------------+
| Compare entries                                                                                 |
| Entries are unranked, in the order you picked them, with no winner; Unknown means we have no    |
| data or did not find it, not that the answer is 'none'.                                         |
| >How we review                                                                                  |
| Add an entry                                                                                    |
| [ Choose an entry                               v ]                                             |
| [ Add ]                                                                                         |
| [ Back to the directory ]                                                                       |
| [ Sort columns A–Z ]                                                                            |
| +--------------------------------+--------------------------------+---------------------------+ |
| | >Stake          [ Remove ]     | >Rollbit        [ Remove ]     | >mBit Casino · instant    | |  thead (raised)
| |                                |                                | crypto focus (prov. O11b) | |
| |                                |                                | [ Remove ]                | |
| | Category (colspan 3)                                                                       | |
| | Large game libraries           | Token-based platforms          | {archLabel}               | |
| | Licence                                                                                    | |
| | Curaçao Gaming Authority       | Curaçao Gaming Oversight       | {value} [Unverified]      | |
| | (register status: Assessment   | [Unverified] Claim · no source | Claim · no source         | |
| | in progress) [Checked] On the  | recorded                       | recorded                  | |
| | regulator's register · see     |                                |                           | |
| | Sources                        |                                |                           | |
| ...                                                                                             |
| ▸ More fields                                                                                  |
```

**States**
```
0–1 valid slugs (any width)                    Unknown slug / >3 slugs / repeats
| Compare entries / intro / >How we review |   | Entry not found: {slug}               | escaped, one line per bad
| Tick the "Compare" box on 2 or 3       |     |                                       | slug, below the picker
| directory cards, or add entries here.  |     | Only the first 3 entries are shown.   | (Q10e)
|   (Q10f)                               |     (repeated slugs ignored silently, IA)
| Add an entry [ … v ] [ Add ]           |
| [ Back to the directory ]              |
| >Stake [ Remove ]   (if 1 valid; J)    |
|   (no table, no sort button)           |

JS OFF, or catalog.js failed (html.js absent): baked .no-js block; the picker shell is .js-only
| Compare entries                        |
| {the Q10a sentence}  >How we review    |  intro and link are baked (shown in both states)
| The comparison needs JavaScript. Each  |  IA exact
| review page has the full facts without |
| it.                                    |
|>Browse all reviews in the directory    |  -> /#casino-directory-30
```

### 6.3 Annotations, Compare

- **Data:** catalog.js. Slugs are matched by the IA 2.2 rule. The URL is updated with `history.replaceState` on Add, Remove and Sort (J), so it can be shared.
- **Block 2 (IA):** h1 "Compare entries", then `div.page-intro` holding the Q10a sentence and the "How we review" `.link-standalone`. "no winner" and "unranked" are on the DS 3.2 allow-list. The existing "best for" clause is dropped.
- **Block 3, picker:** `div.controls.js-only` holding the label "Add an entry", `.control-select` (`inline-size: 100%`, AM-G8), `[ Add ]`, a `p[role=status]` and `[ Back to the directory ]`. The shell is baked; JS fills only the options.
- **Block 4, sort:** one `.button-secondary` per variant: "Sort entries A–Z" in stacked (J) and "Sort columns A–Z" in wide (IA). Both toggle to "Back to the order picked" and share one state. Hidden with fewer than 2 entries (J).
- **Block 5, table:** as in 6.1. Every cell shows its badge and sub-label, including Unknown. Nothing is highlighted. Field order: Category, status line, Last verified, Licence, Custody, KYC (Q12), Sources.
- **More fields:** a `<details>` in each variant, built the same way. It holds the other REVIEW_FIELDS, the 3 no-field dimensions as Unknown, and the 6(d) placeholder. Its table is labelled by its summary through `aria-labelledby` (J).
- **Non-sticky thead (Q7):** 8.3 gives the cost.
- **Headings and landmarks:** h1 only; the tables are labelled by the h1 (DS 2.6). Landmarks: banner, region "Disclosure", main, contentinfo.
- **Dynamic behaviour:** section 9. **Tab order:** section 10.

---

## 7. Template 4: Text page (`/methodology/`, `/glossary/`, `/disclosure/`, `/guides/`)

### 7.1 Shared frame

```
320px                                         y
  0 | header / banner                      |  181
197 | {H1}                                 |  32, or 64 for a 2-line H1
    | (16: .prose > * + *)                 |
    | On this page          (h2 compact)   |  28   (methodology, guides, disclosure only)
    | • >{section}                         |  44 each (prose ul, bullets kept)
    | ...                                  |
    | {section h2} (32 above)              |
    | {p, ul, dl at --measure}             |
    | footer                               |
480 - - - FOLD: banner (18+ and money disclosure) + H1 + start of On this page - - -
375: the same. >= 64em: the same single .prose column (--measure 640px), left-aligned in .wrap.
```

**Annotations**
- Content: `main > .wrap > .prose`, with the H1 as the first child of `.prose`, so DS prose spacing applies (no `.page-stack` here). Static.
- On this page: `nav[aria-labelledby]` with h2 "On this page" (IA copy), linking to `#{section-id}`.
- Inline links inside sentences are exempt from the 44px minimum. Every standalone link is 44px.
- JS affects only the glossary search.

### 7.2 Per-page block order

**/methodology/** (IA 5.4)
- H1 "How we review" (`<title>` "Review methodology").
- On this page, with 9 links.
- h2 sections, using the IA block names as headings (Q15):
  1. What each entry can show
  2. The four status definitions, with example `.badge`s in all 4 states and the IA 4.1 wording
  3. Entry status lines
  4. Which fields appear first (the 50% text, in IA wording)
  5. Re-check schedule ("not yet set")
  6. What unranked means
  7. Links and money, linking to `/disclosure/`
  8. Corrections ("not set up yet")
  9. Common questions, with 6 h3 questions
- Footer.

```
320  197 How we review / 229+16 On this page 28 / 273 • >What each entry can show ... (9 x 44 = 396)
480  FOLD: H1 + "On this page" + about 4 links above
```

**/glossary/** (IA 5.4)
- H1 "Glossary" (Q15).
- "Search terms" `label` + `.control-text` (`inline-size: 100%`), baked as `.js-only`.
- A `p[role=status]` that is empty, or reads "No term matches '{query}'" (exact).
- 8 terms A–Z, each an h2 with an `id` (`:target` ring), then its definition: GGR, House edge, KYC/AML & ZK-KYC, Liquidity Pool, Nonce, Provably fair, RTP, SHA-256.
- JS off: no input; all 8 terms show.

```
320  197 Glossary / 229+16 Search terms 24 / +8 [____________] 44 / status p (0 when empty) / GGR ...
no results:  Search terms [ xyz ]  /  No term matches 'xyz'   (all 8 terms hidden, plain text, no box)
```

**/disclosure/** (IA 5.4)
- H1 "Disclosure & safer gambling" (27 chars × 13.3 = 359 > 288, so 2 lines at 320 = 64).
- First line: "No affiliate relationships exist at time of writing."
- On this page (IA 3).
- h2 sections. The labels are (J) copy, still open (section 14), except "Safer gambling" (Q15):
  - "Sources links" (J)
  - "No ads" (J)
  - "Future affiliate links" (J)
  - "Safer gambling", `id="safer-gambling"` (Q15), holding the 18+ (21+) line and the helplines `ul` (1-800-GAMBLER/ncpgambling, GamCare, BeGambleAware, Gamban), each a `.link-standalone`
  - "Not advice; check your local law" (J)
- Footer. No "Last changed" date.

```
/disclosure/#safer-gambling arrival (320): the heading scrolls to the top of the viewport and gets
the :target ring. The header and banner scroll off (not sticky), so nothing covers the target (2.4.11 OK).
```

**/guides/** (IA 5.4)
- H1 "Guides" (Q15).
- On this page, with 5 links.
- 5 h2 sections with ids `#before-you-read`, `#provably-fair` (IA 9.6 needs this exact id), `#smart-contracts`, `#wallet-security`, `#scam-patterns`.
- Carried figures are labelled "Unverified estimate". There is no Pillar 03 section.

---

## 8. Must prove or solve

### 8.1 Review above the fold (arithmetic)

**Shared top stack, 320px (AM-G1 spacing, Q4)**

| Block | Arithmetic | px | Running y |
|---|---|---|---|
| Header | 44 (`--tap-min`) + 1 (`--border-1`) | 45 | 45 |
| Banner | 2 + 8 + 3×24 + 44 + 8 + 2 | 136 | 181 |
| main padding-block-start | `--space-2` | 16 | 197 |
| H1, 1 line | 32 (`--leading-xl`) | 32 | 229 |
| Gap H1 → Last verified | 0 | 0 | 229 |
| Last verified | 24 | 24 | 253 |
| Gap Last verified → Field status | `--space-1` (`.stack-tight`) | 8 | 261 |
| Field status row, one row (AM-G2) | max(28 heading, 44 link) | 44 | **305** |
| Gap row → first group line, and between group lines | 0 | 0 | 305 |
| (If the row wraps) | 28 + 44 | 72 | 333 |

- **Banner lines.** The text is 94 characters, about 696px. Two lines at 320 hold only about 576px, so 3 lines is robust.
- **H1 length.** IA 4.5 puts only the brand in the H1. The longest current display names ("Metaspins Casino", "CryptoCasino.com", "DuckyLuck Casino", 16 characters) come to about 213px, under 288. Every current H1 is 1 line at 320. The IA's "3-line H1" cannot occur today (IAC I3).
- **Field status row.** "Field status" is about 12 × 10.6 = 127px, plus a 16px gap, plus "Review methodology" at about 18 × 7.4 = 133px: 276 of 288 at 320, a 12px margin. At 375 it is 276 of 343, which is safe.

**Status groups, 320px (content 288).** Line 1 of each group = 288 − badge width. A badge line is 30px; each further line is 24px. Character counts include ": ".

| Case | Groups (IA 5.2 / D2; index.html arrays) | Line arithmetic | Lines | px |
|---|---|---|---|---|
| 56 pages and duplicates | Unverified: Licence, Custody, KYC | 25 chars = 185 ≤ 288 − 90 = 198 | 1 | 30 |
| | Unknown: Operator, Licence no., Coins, Withdrawals, Bonus terms, Restricted countries, Safer-gambling tools, Support | 109 chars = 807; line 1 holds 210; 597 left / 288 = 2.07 | 4 central, 5 possible | 102 (126) |
| | **Total** | | | **132** (156) |
| Stake | Checked: Licence, Licence no. | 22 chars = 163 ≤ 214 | 1 | 30 |
| | Stated: Operator, KYC, Withdrawals, Restricted countries, Support | 59 chars = 437; line 1 holds 227; 210 left | 2 | 54 |
| | Unverified: Custody | 9 chars | 1 | 30 |
| | Unknown: Coins, Bonus terms, Safer-gambling tools | 42 chars = 311; line 1 holds 210; 101 left | 2 | 54 |
| | **Total** | | | **168** |
| Cloudbet | Checked: Licence, Licence no. | as Stake | 1 | 30 |
| | Stated: Operator, Coins, KYC, Withdrawals, Support | 44 chars = 326 vs 227 | 2 | 54 |
| | Unverified: Custody | | 1 | 30 |
| | Unknown: Bonus terms, Restricted countries, Safer-gambling tools | 57 chars = 422 vs 210; 212 left | 2 | 54 |
| | **Total** | | | **168** |
| Vbet | Checked: Licence, Licence no. | | 1 | 30 |
| | Stated: Operator, KYC, Withdrawals, Restricted countries, Safer-gambling tools, Support | 81 chars = 599 vs 227; 372 left / 288 | 3 | 78 |
| | Unknown: Custody, Coins, Bonus terms (no Unverified group; Custody is Unknown, D21) | the labels "Custody, Coins, Bonus terms" are 27 chars (about 200px), plus ": " (about 15px) = 200–215 vs 210 | 1–2 | 30–54 |
| | **Total** | | | **138–162** |
| BC.Game | Stated: Operator, Licence, Licence no., KYC, Safer-gambling tools, Support | the labels are 66 chars (about 488px), plus ": " = about 503 vs 227; 276 left (≤ 288 on paper) | 2–3 | 54–78 |
| | Unverified: Custody | | 1 | 30 |
| | Unknown: Coins, Withdrawals, Bonus terms, Restricted countries | 55 chars = 407 vs 210 | 2 | 54 |
| | **Total** | | | **138–162** |

**Fold results, 320×568**

| Case | Bottom of groups (one-row heading) | vs 480 | vs Safari 460 | If the heading row wraps (+28) |
|---|---|---|---|---|
| 56 pages and duplicates | 305 + 132 = **437** (461 with a 5th Unknown line) | fits on paper only (43px); a 5th Unknown line leaves 19 | fits on paper only (23px); a 5th line spills 1 | 465: fits 480 by 15; 489 with a 5th line, **spills 9**; spills 460 by 5 |
| Stake, Cloudbet | 305 + 168 = **473** | **fits on paper only (7px); spills 21 if the heading row wraps or the font is 7px wider** (heading wrap: 501; one extra group line: 497, spills 17) | spills 13: the Unknown group's 2nd line is cut | 501: spills 21 |
| Vbet, BC.Game | 305 + 138–162 = **443–467** | fits on paper only (13–37px) | fits at 443–455; spills up to 7 at 467 | 471–495: fits or spills up to 15 |
| Hypothetical 3-line H1 (+64), unsourced | 501 | spills 21 | spills 41 | 529 |

**Spacing sensitivity (Q4).** Any extra 8px between the four stacked blocks (H1, Last verified, Field status row, group lines) takes Stake and Cloudbet from 473 to 481 or more, which spills 480. Their margin is 7px: zero slack. Phase 7 must measure.

**Robust / fragile**

*Robust* (holds under a ±1-line font error):
- The banner is 3 lines at 320 (94 characters, about 696px; 2 lines hold only about 576px).
- The H1 is 1 line (the longest display name is 16 characters, about 213px).
- At 480, these are above the fold in every case, including a wrapped heading row: the methodology link (bottom at 305, or 333 if wrapped), Last verified, the banner, and the FIRST line of every status group. The latest first line is Stake/Cloudbet's Unknown line, at 419–449, or 447–477 if wrapped.
- At the Safari 460 stress height, the same items are above the fold in every case with the one-row heading; Stake/Cloudbet's Unknown first line ends at 449. With a wrapped heading, that one line (447–477) is cut at 460.
- Every 375×667 result fits with more than 100px spare (see below).

*Fragile* (inside the font error; Phase 7 must measure):
- The last Unknown line on the 4 sourced pages at 320. Stake/Cloudbet have 7px spare; Vbet/BC.Game have 13–37px.
- The 56-page Unknown group's line count: 3–4 lines; 5 is unlikely (capacity 1074 against 807 needed). One heading wrap (+28) plus one extra Unknown line (+24) gives 489, which spills 480.
- The one-row heading claim: a 12px margin (276 of 288).
- Anything measured against Safari 460.

**375×667 (content 343; banner 3 lines, 136)**
- Top stack: 305 (the heading row is 276 of 343, so it does not wrap).
- Groups:
  - 56 pages: Unverified 1 line (30); Unknown 807 vs 265 on line 1, 542 left, 2 more lines: 78. Total 108, bottom **413**.
  - Stake: 30 + 54 (437 vs 282) + 30 + 54 (311 vs 265) = 168, bottom **473**.
  - Cloudbet: 30 + 54 + 30 + 54 = 168, bottom **473**.
  - Vbet: 30 + 54 (599 vs 282, 317 left ≤ 343) + 30–54 = 114–138, bottom **419–443**.
  - BC.Game: 54 (503 vs 282, 221 left) + 30 + 54 (407 vs 265) = 138, bottom **443**.
- Every case fits 580 by at least 107px, and Safari's 559 by at least 86px. With the unlikely 2-line banner, subtract 24 from every bottom.

**Must-holds (IA 5.2), all kept:**
- no hero image;
- a single-row header (45);
- the exact banner text;
- nothing between H1, Last verified and the status row;
- the status line, duplicate banner and breadcrumb all below the status row.

**Brief §6 items above the fold at 320×568 (480), per case**

| Case | Per-field status | Methodology link | Last verified | Money disclosure | 18+ |
|---|---|---|---|---|---|
| 56 pages and duplicates | all groups (fits on paper only, 43px) | yes (y 261–305) | yes (229–253) | yes (banner) | yes (banner) |
| Stake, Cloudbet | all groups on paper only (7px); the first line of every group is robust | yes | yes | yes | yes |
| Vbet, BC.Game | all groups on paper only (13–37px) | yes | yes | yes | yes |

The "Unknown: all other fields" fallback is not adopted (Q5).

### 8.2 Compare at 320 and 360 with 3 entries
Solved by Option A (Q6, AM-G4); arithmetic in 6.1. The maximum stays 3.

### 8.3 Compare `thead` not sticky (Q7, AM-G5)

Thead height = 8 + name lines × 24 (min 44) + 44 Remove + 8 + 1 border. Worst case: the longest provisional duplicate names (up to 44 characters; not quoted here, O11b).

| Width | Content per column | Longest name lines | thead | Share of usable height |
|---|---|---|---|---|
| 640 (40em) | 186 (≈25 chars/line) | 2 = 48 | 8+48+44+8+1 = **109** | portrait 109/900 ≈ 12%; landscape phone (≈330 usable) **33%** |
| 1024 (64em) | 314 | 2 = 48 | **109** | 109/650 ≈ 17% |
| 1200 | 373 | 1 = 44, Remove wraps | **105** | 105/650 ≈ 16% |

- A sticky header of 105px or more can wholly hide a 24–44px focus target when the user tabs backwards, which fails WCAG 2.4.11. The fix, a matching `scroll-padding-block-start`, needs a token. Capping the height would truncate descriptors (IA 4.5).
- **Cost of the non-sticky decision:** at 40em and wider, on long tables (the sourced entries make the main table well over one screen), the column names scroll away. Users scroll back up to see which column is which, because the value cells do not repeat the name. Below 40em, Option A repeats the name in every row, so the cost applies only to the wide variant.
- **Real alternative (deferred, not adopted):** sticky at 64em and wider only, plus a new `--sticky-offset` token used as `scroll-padding-block-start` on `html`, sized to the worst-case thead. This can be revisited after Phase 7 measures thead heights.

### 8.4 Compare bar on Home (Q8)

| Option | Height | 2.4.11 risk | Verdict |
|---|---|---|---|
| Static, after the controls | 102 (320) / 122 (375) / 62 (40em and wider) | none | **Decided** |
| Static, after the cards | same | none, but several thousand px below the controls | rejected |
| Fixed to the viewport bottom | same | covers about 21% of the viewport and can hide a checkbox | rejected |

- Bar arithmetic: count about 111px, "Go to comparison" about 126 + 32 + 4 = 162, Clear about 76, gaps 16.
  - 320: 111 + 16 + 162 = 289 > 288, so the count sits alone (24), then Go + Clear (254 ≤ 288, 44): 2 + 8 + 24 + 16 + 44 + 8 = **102**. This is 102 or 122 depending on a 1px split. The refusal message (about 311px) wraps to 2 lines at 320, so the bar grows by 24px for that moment.
  - 375: count + Go (289 ≤ 343, 44), then Clear (44): 2 + 8 + 44 + 16 + 44 + 8 = **122**.
  - 40em: one row: 2 + 8 + 44 + 8 = **62**.
- Cost: sighted users who tick far down the page scroll back up to "Go to comparison". Each checkbox shows its state, and the live region announces counts.

### 8.5 Header and Menu
See F2 and the 3.1 drawings.
- Below 64em there is one row with the brand and Menu. JS off: Menu is a link to `#footer-nav`. JS on: Menu is a button that expands the nav as an in-flow second row of 5 × 44 = 220px (the header grows from 45 to 265). Nothing is overlaid.
- 64em and wider: inline nav. Width needed is about 496px (brand about 90, links about 342, 4 × 16 gaps).

### 8.6 Home above the fold

| Block | 320 | 375 |
|---|---|---|
| Header + banner | 45 + 136 = 181 | 181 |
| main padding-top | 16 → 197 | 197 |
| H1 "Casino directory" (about 213px, 1 line) | 32 → 229 | 229 |
| Intro (234 chars), gap 0 | 7–8 × 24 = 168–192 → 397–421 | 6–7 × 24 = 144–168 → 373–397 |
| "How we review" link, gap 0 | 44 → **441–465** | 44 → **417–441** |
| Against 480 / 580 | fits (15–39 spare) | fits (139–163 spare) |
| Against Safari 460 / 559 | 441 fits (19); 465 cuts the link by 5 | fits |

- Robust: the banner, the H1 and the first intro lines. Fragile: the link's bottom edge at 8 lines against Safari 460.
- The Q2 limit (7 lines or fewer at 320) keeps the link at 441. Phase 7 measures.
- In the 7-line case, the first control label (457–481) straddles the 480 fold.

### 8.7 Breakpoints and card grid

**Keep 40em and 64em.**
- 40em: H1 at step 3; banner link inline (136 → 88); Compare switches from stacked to wide (AM-G4).
- 64em: inline nav. The nav would fit at 40em (496 ≤ 608). Moving it is not proposed.

**Card grid** = `repeat(auto-fill, minmax(min(18rem, 100%), 1fr))`, gap 16. n columns need n × 288 + (n−1) × 16 ≤ viewport − 32:

| Columns | Content needed | Viewport |
|---|---|---|
| 1 | — | 320–623 |
| 2 | 592 | 624–927 |
| 3 | 896 | 928 and wider |
| 4 | 1200 > 1168 max | never |

### 8.8 Long catalog values (decision line)

**Decision: catalog values are shown in full, with no truncation and no line clamping, on cards, At a Glance, All fields and Compare. Catalog text is editorial truth, and DS forbids the literal a clamp would need anyway.**

Consequences that Phase 5 must design for:
- Sourced cards and At a Glance rows are about **200–340px taller** than unsourced ones at 320.
  - Cloudbet's KYC (index.html 1701) and Vbet's KYC (1969) are about 8–11 lines at 254px.
  - Stake's licence number (1649) is about 10–11 lines of mono in the 237px sub-line.
  - Stake's At a Glance panel is about 900px tall at 320, against about 400px for an unsourced page.
- **Phase 5 must not treat height as emphasis.** No extra styling, no "more detail" marker, and no visual reward for the taller sourced cards. The grid's default row stretch makes cards in one row equal height, and that is left as is.
- Compare cells grow the same way; no column is styled differently.

### 8.9 IA conflicts and Phase 3 gaps: status

**IA conflicts and ambiguities**
- **I1.** Compare bar position: resolved (Q8).
- **I2.** Glance-field order: resolved (Q12) as a clarification of IA 5.1.
- **I3.** IA 5.2's "3-line H1" cannot occur under IA 4.5. Noted; no action.
- **I4.** JS-off list descriptors: resolved (Q11).
- **I5.** Option B: rejected (Q6).
- **I6.** "Sort columns A–Z" has no columns below 40em: resolved by two CSS-toggled controls (section 1). "Sort entries A–Z" is new (J) copy.
- **I9.** "see Withdrawal & turnover rules" target: resolved (the Withdrawals row).

**Phase 3 gaps**
- **G1 (spacing rules approved; controls and count rules to confirm), G2, G4, G5, G7, G8:** amendments in section 11.
- **G3.** No list-reset utility. Decided under delegation: AM-G3 in section 11.
- **G6.** Compare bar: none needed (static).
- **G9.** At a Glance stays stacked: no CSS.
- **G10.** No disabled checkbox state: handled by behaviour (refuse plus message).
- **G11.** No line-length container for review pages on desktop. Decided under delegation: AM-G11 in section 11. Without it, long values such as Stake's withdrawals text run to about 150 characters per line at 64em.
- **G12.** No rule for long catalog values. Decided in 8.8: show in full; no CSS needed.

---

## 9. Dynamic behaviour (per control)

Live-region wording tagged (J) is proposed copy that the human must approve (section 14). "Region" names the element that speaks.

**Shared**

| Action | Focus after | Region and wording | Notes |
|---|---|---|---|
| Menu button (open/close) | stays on Menu | none; `aria-expanded` changes | in-flow row, no overlay |
| Escape while Menu is open (focus on Menu or in the nav) | Menu button | none | closes the nav |
| Glossary search typing | stays in input | `p[role=status]`: empty, or "No term matches '{query}'" (exact) | filters on `input` |

**Home**

| Action | Focus after | Region and wording | Does the count text return? |
|---|---|---|---|
| Search typing | stays in input | `p.control-count[role=status]` "Showing N of {total}" (DS H2/H3) | n/a |
| Category select change | stays on select | same count region | n/a. Filtering content below is not a change of context (3.2.2). |
| Sort select change | stays on select | none: the count is unchanged and is not rewritten (J), so nothing is re-announced; the screen reader reads the new select value | n/a |
| Reset | stays on Reset (it stays in place) | count region "Showing {total} of {total}" | n/a |
| Tick a card checkbox | stays on checkbox | `p.compare-count[aria-live=polite]` "{n} of 3 selected" (IA) | n/a |
| Untick a card checkbox | stays on checkbox | "{n} of 3 selected" | yes: it replaces any refusal message |
| 4th tick refused | stays on checkbox (reverted to unticked) | compare-count reads "You can compare up to 3. Untick one first." (Q9) | Yes, on the next selection change (tick, untick or Clear). There is no timer. Until then the message replaces "3 of 3 selected" (J). |
| Clear | stays on Clear (visible at n=0) | "0 of 3 selected" | yes |
| Go to comparison | new page (browser default, top of `/compare/`) | none | n/a |
| Jump link | fragment navigation to the group h2 | none | n/a |
| Page load | none moved | JS fills the count region "Showing {total} of {total}". Some screen readers announce this once on load (J: accepted). | n/a |

**Compare** (the picker status region is the `p[role=status]` after Add)

| Action | Focus after | Region and wording | Does the previous text return? |
|---|---|---|---|
| Add (an entry chosen) | the picker select, reset to "Choose an entry" with the added entry removed from the options | "Added {name}. {n} of 3 entries." (J) | n/a; replaced by the next message |
| Add with "Choose an entry" still selected | stays on Add | "Choose an entry first." (J) | cleared by the next action |
| Add at 3 entries | stays on Add | "You can compare up to 3. Remove one first." (Q10g) | stays until the next Add, Remove or Sort, which replaces or clears it |
| Remove | the next entry's Remove button in the visible variant (pick order). If there is none, the picker select. | "Removed {name}. {n} of 3 entries." (J) | n/a |
| Sort toggle | stays on the visible sort button; its label toggles between "Sort entries A–Z" / "Sort columns A–Z" and "Back to the order picked" | "Entries sorted A–Z." / "Entries in the order picked." (J) | n/a |
| Back to the directory | new page at `/#casino-directory-30` | none | n/a |

**Re-render and focus.** Each Compare render rebuilds both variants from one data pass. JS then focuses the target control in the variant that has a layout box (`element.getClientRects().length > 0`). This needs no breakpoint literal and no `matchMedia`. The URL is updated with `replaceState`.

---

## 10. Tab order and landmark map

| Template | Tab order | Landmarks | Heading outline |
|---|---|---|---|
| All | skip → brand → Menu (→ 5 nav links if open; inline at 64em and wider) → "Disclosure & safer gambling" → main… → footer: 3 helplines → Safer gambling guide → 6 nav links → Back to top | banner, region "Disclosure", navigation "Main", main, contentinfo with navigation "Footer" | — |
| Home (JS on) | How we review → search → Category → Sort → Reset → Go to comparison → Clear → 6 jump links → per card: heading link, checkbox | + navigation "Categories" | h1 → h2 × 6 groups → h3 per card |
| Home (JS off) | How we review → 6 jump links → 60 review links | + navigation "Categories" | h1 → h2 × 6 |
| Review | Review methodology → (primary link, duplicates) → (see All fields, sourced) → Directory → {archLabel} → All fields summary → (inline links inside All fields when open) → source links → other entries → CTA | + navigation "Breadcrumb" | h1 → h2 Field status, At a Glance, Sources, Catalog notes, Other entries |
| Compare, below 40em | How we review → picker select → Add → Back to the directory → Sort entries → [entry list: name link, Remove] × n → see the review links (one per entry with sources) → More fields summary | — | h1 only |
| Compare, 40em and wider | How we review → picker select → Add → Back to the directory → Sort columns → [thead: name link, Remove] × n → see the review links → More fields summary | — | h1 only |
| Compare (JS off) | How we review → Browse all reviews in the directory | — | h1 only |
| Text | On this page links → in-prose links (glossary: search input first) | + navigation "On this page" | h1 → h2 sections (→ h3 FAQ on methodology) |

The hidden Compare variant is `display: none`, so it adds no tab stops.

---

## 11. Phase 3 amendments required (G1 spacing, G2, G4, G5, G7 and G8 approved at the Phase 4 gate via Q3-Q7, Q20 and G8; the `.controls`, `.control-count` and `.page-intro` rules inside G1, G3 and G8b were added in this revision and await confirmation; to be applied to DESIGN_SYSTEM.md before Phase 5/6)

Tokens only. The only literals are `0`, `100%` and the `40em` media value, all allowed by DS 1.3. I did not edit DESIGN_SYSTEM.md.

**AM-G1. Page-stack spacing** (Q4)
```css
main { padding-block: var(--space-2) var(--space-4); }
main > * + * { margin-block-start: var(--space-2); }
.page-stack > * + * { margin-block-start: var(--space-2); }
.page-stack > * + section { margin-block-start: var(--space-4); }
.page-stack > h1 + * { margin-block-start: 0; }
.page-stack > .stack-tight { margin-block-start: var(--space-1); }
.stack-1 > * + * { margin-block-start: var(--space-1); }
.page-intro > p { max-inline-size: var(--measure); }
.controls > * + * { margin-block-start: var(--space-2); }
.controls > .control-count + * { margin-block-start: var(--space-1); }
.control-count { min-block-size: var(--leading-base); }
.controls > .button-secondary { display: flex; inline-size: fit-content; }
```
Effect:
- 16px above main content.
- 0 after the H1; 8px before the Field status section and the status line; 16px default; 32px before sections.
- `.stack-1` is used on Home groups, Sources, Catalog notes and Other entries. It is NOT used on the Field status section, whose group lines must stay at 0.
- The control-count line is reserved, so filling it causes no shift.
- `.page-stack > .stack-tight` (0,2,0) outranks the `section` rule (0,1,1).
- Text pages use `.prose` instead.
- Markup rule (editor): each label plus its control is wrapped in `div.control-group`, on Home (search, Category, Sort), on the Compare picker and on the glossary search. Without the wrapper, `.controls > * + *` (0,1,0) would tie `.control-text { margin: 0 }` and add 16px above each control, making the label-to-control gap 24px instead of the drawn 8px. The same trap applies to `.prose > * + *` in the glossary search.
- `.controls > .button-secondary` becomes block-level (`display: flex; inline-size: fit-content`), so its margins collapse normally and the Compare picker does not get a 32px gap before "Back to the directory". The Home 352px control block is unchanged.
- `.controls > * + *` overrides the DS `.control-label` `margin-block-end` stack only between control groups; the label-to-control 8px stays from DS.

**AM-G2. Heading-plus-link row** (Q3)
```css
.heading-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: var(--space-2);
  row-gap: 0;
}
```
Effect: "Field status" and "Review methodology" share a 44px row. If they do not fit, they wrap to 28 + 44 = 72px.

**AM-G3. List reset** (decided under delegation; section 1)
```css
.list-plain {
  padding: 0;
  list-style: none;
}
```
Effect: removes the UA 40px indent and bullets on the Home static list, the Compare entry list, Sources and Other entries. Markup adds `role="list"` so Safari keeps list semantics (J). Without it, those lists keep the default indent (248px of content at 320). That still works, but the indents are uneven.

**AM-G4. Compare stacked and wide variants, toggled by CSS** (Q6)
```css
.compare-wide { display: none; }
@media (min-width: 40em) {
  .compare-stacked { display: none; }
  .compare-wide { display: block; }
}
```
Effect:
- Both variants are in the DOM and built once per render from the same data.
- The inactive one is `display: none`, so it is out of the layout, the tab order and the accessibility tree.
- The `display` values apply to wrapper `div`s, never to the `table`, so table layout is untouched.
- DS 2.6 is amended: the stacked variant has no `thead`, uses `th[scope=row]` entry names, and its `colspan` is 2.
- Id prefixes become `s-main`, `s-more`, `w-main`, `w-more`.
- The More fields table is labelled by its summary (J), and stacked-variant ids follow `s-main-r-{slug}`.
- DS 2.6's rule that no ancestor may set `overflow` stays.

**AM-G5. Non-sticky Compare `thead`** (Q7). It replaces the DS 2.1 rule:
```css
.data-table thead th {
  background-color: var(--color-raised);
}
```
Effect: `position: sticky` and `inset-block-start: 0` are removed. Column names scroll with the table (cost in 8.3). DS §5's sticky note is closed.

**AM-G7. JS-present hook** (Q20)
```html
<!-- in <head>, before the stylesheets -->
<script>document.documentElement.classList.add('js');</script>
```
```css
html:not(.js) .js-only { display: none; }
html.js .no-js { display: none; }
```
```html
<!-- Home and Compare only -->
<script src="/data/catalog.js" onerror="document.documentElement.classList.remove('js')"></script>
```
Effect:
- JS-only blocks (Home controls, compare bar, card grids, the Menu button, the glossary search, the Compare picker shell and variants) are visible from first paint. No-JS blocks (the Home static list, the Menu link, the Compare no-JS text) are hidden from first paint.
- **catalog.js failure rule:** the loader's `onerror` removes `html.js`. That restores Home's baked static list and the whole no-JS view, with no new copy. Compare uses the same revert to show its no-JS text. That text says the comparison needs JavaScript, which is slightly inaccurate when only the data failed. It is accepted, so no new copy is needed.
- Alternative, not adopted: `<noscript><style>.js-only{display:none}…</style></noscript>` in `<head>`. It cannot revert on a catalog.js failure.

**AM-G8. Control width** (G8)
```css
.control-text,
.control-select { inline-size: 100%; }
```
Effect: the search inputs and selects fill their container at every width (288px at 320).

**AM-G8b. Controls cap** (decided under delegation; section 1). Cap the controls block on wide screens:
```css
.controls { max-inline-size: var(--measure); }
```
Effect: Home and Compare controls stop at 640px instead of 1168px at 64em and wider. Without it, a full-width search box spans the desktop container.

**AM-G11. Review column** (decided under delegation; section 1)
```css
.page-review { max-inline-size: var(--measure); }
```
Markup: add `page-review` to the Review page's `.page-stack` element only.
Effect: on Review pages the content column stops at 640px, so long values stay near 75 characters per line instead of about 150. It is left-aligned inside `.wrap`. Below about 672px it changes nothing, so every fold figure in 8.1 stays as written. The `--measure` token's scope widens from "prose line length only" to "prose and review-page column line length". Header, banner and footer stay full width.

**AM-G12. Entry row** (decided under delegation; section 1)
```css
.entry-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-1) var(--space-2);
}
```
Markup: each `li` of the stacked Compare entry list holds one `div.entry-row` with the name link and the Remove button.
Effect: "Stake  [ Remove ]" sits on one line (44px). A long name such as "mBit Casino · instant crypto focus" wraps, and Remove drops beneath it. There is no right alignment; Phase 5 may restyle the row without changing its structure.

**AM-G13. `:target` ring beyond `.prose`** (decided under delegation; section 1)
```css
:target:is(section, details, h2, h3, h4, dt, dd, li) {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: var(--focus-offset);
}
```
Markup rule: anchors that should ring land on one of those elements: `section#sources`, `details#all-fields`, and the Withdrawals row as `dt#field-withdrawals`. `main#main` and `div#casino-directory-30` are deliberately excluded, so a skip link or an old directory link does not outline a whole region. `.prose :target` from DS stays as it is.
Effect: Review and Home anchors get the same ring as the glossary anchors. The `outline: none` and `outline: 0` scans do not match this rule.

---

## 12. Brief §6 acceptance check (wireframe stage)

| Criterion | Home | Review | Compare | Text |
|---|---|---|---|---|
| Above-the-fold items | PASS: banner, H1, intro and link at 441–465 of 480 (robust up to the intro; link edge fragile at Safari 460) | PASS on paper with G1 + G2 (decided). Robust: banner, H1, Last verified, methodology link, first line of every group. Fragile: last Unknown line on the 4 sourced pages (7–37px); Phase 7 measures. | PASS: banner, H1, intro and link at 369–393 | PASS: banner + H1 |
| Readable at 375, no sideways scroll | n/a | n/a | PASS: stacked below 40em (Option A); also covers 360 | n/a |
| Unranked; sortable | PASS (A–Z/Z–A) | n/a | PASS (pick order default; "Sort entries A–Z" / "Sort columns A–Z") | n/a |
| No aggregate score, star or rank | PASS | PASS | PASS | PASS |
| CTAs labelled with destination | PASS | PASS (descriptor in the CTA on duplicates, Q13) | PASS ("see the review" with aria-label "see the review: {name}", Q18) | PASS |
| 44px targets | PASS | PASS | PASS (Remove 44 tall) | PASS (inline prose links exempt) |
| Works at 320 | PASS | PASS | PASS (Option A) | PASS |
| Keyboard nav | PASS on paper (section 10; focus rules in 9) | PASS | PASS on paper (residual resize case in 6.1, Phase 7) | PASS |
| CLS < 0.1 | PARTLY: G7 removes the controls shift. On desktop the JS-built cards can push group headings inside the viewport; Phase 7 must measure. | PASS (static) | PARTLY: G7 covers the no-JS text and the baked picker shell. G7 does not cover the JS-built picker options and table pushing the footer; Phase 7 must measure. A synchronous script placed immediately after its container does not guarantee a pre-paint render. | PASS (glossary input baked, G7) |
| LCP < 2.5s mobile | OPEN (Phase 7) | OPEN (Phase 7) | OPEN (Phase 7) | OPEN (Phase 7) |
| No runtime Tailwind; no animation loop | PASS | PASS | PASS | PASS |

---

## 13. "No scores, stars, rankings" self-check

| List | Order | Why it is not a quality signal |
|---|---|---|
| Home groups | A–Z by category title | mechanical (IA) |
| Home entries and static list | A–Z by display name, then slug; Z–A reverses entries only | mechanical; all cards identical; no first-card variant |
| Jump list | A–Z by title | same as groups |
| Field status groups | Checked, Stated, Unverified, Unknown (fixed) | one entry's fields by source type; never used to order entries |
| Fields in a group | REVIEW_FIELDS order | fixed |
| Glance fields | Licence, Custody, KYC (REVIEW_FIELDS) | fixed, the same for every entry |
| Sources | catalog array order | as recorded |
| Other entries | A–Z | IA 5.2 |
| Compare columns and stacked rows | pick order; opt-in A–Z | never by status; no column emphasis; no winner |
| Glossary | A–Z | — |
| Methodology, guides, disclosure, footer, nav | IA editorial order | not entries |

No featured slot, promoted slot, "best for", badge count or all-green summary appears in any wireframe. The 4 sourced cards show Checked and Stated badges and are taller because their values are longer (8.8). They get no position or style advantage, and Phase 5 must not treat height as emphasis. The duplicate banner and the descriptor in the CTA are navigation only.

---

## 14. Open items (genuinely open)

**Copy still to be approved in Phase 5/6 (all tagged (J))**
1. Compare live-region strings: "Added {name}. {n} of 3 entries."; "Removed {name}. {n} of 3 entries."; "Choose an entry first."; "Entries sorted A–Z."; "Entries in the order picked."
2. The stacked Compare sort label "Sort entries A–Z".
3. /disclosure/ h2 labels: "Sources links", "No ads", "Future affiliate links", "Not advice; check your local law". "Safer gambling" is already approved (Q15).
4. Behaviour rule: the Compare sort button is hidden when fewer than 2 entries are shown.
5. Behaviour rule: Home's refusal message stays until the next selection change.
5b. Compare row label "Status line" and the unsourced Last verified cell text "not recorded yet" (IA §9 item 11 reads "Last verified: not recorded yet"; the alternative is to render that exact string in the cell).

**Data**
6. **O11(b).** All duplicate descriptor text is provisional. It appears on cards, the static list, the banner, Compare, Other entries, page titles and, under Q13, the review CTA. Three descriptors repeat unsourced catalog claims and are not used as examples in this document.

**Layout options (decided under the human's delegation, 2026-11-23; recorded in section 1 and section 11)**
7. AM-G3 list reset: approved.
7b. Name-plus-Remove row for the stacked Compare entry list: approved as AM-G12 (`.entry-row`).
7c. `:target` ring beyond `.prose`: approved as AM-G13, with `main` and the Home directory wrapper excluded.
8. AM-G8b controls cap: approved.
9. G11 review column: approved as AM-G11.
10. No print styles in v1: decided.
11. The old anchor `#casino-directory-30`: on a `div` wrapping the directory, not on the H1.

**Still open:** only the (J) copy items 1–5b above, and O11(b).
---

## 15. What is judgment vs source

**From IA:** blocks, block order, exact copy, JS-off rules, degradation rules, sort orders, the duplicate banner, the field groups.

**From DS:** every component and class, token values, the header, banner, card, panel, table and bar anatomy, the 40em and 64em breakpoints.

**From the human (section 1):** Q1–Q20, I2/Q12, I9, G8, G9.

**My judgment (J):**
- the CSS form of each amendment (section 11) and the class names `page-stack`, `stack-tight`, `stack-1`, `page-intro`, `controls`, `control-count`, `heading-row`, `list-plain`, `compare-stacked`, `compare-wide`, `js-only`, `no-js`;
- the two baked Menu elements; the focus targets in section 9; the replaceState and "Add" button behaviour;
- anchor ids (`field-{key}`, `sources`, the H1 directory id); the single-column footer;
- all glyph-width estimates and fold heights.

The widths and heights are estimates, not measurements. Phase 7 must measure with real system fonts at 320×568, 360×640 and 375×667, including the Safari stress heights.

---
- (J) added after the editor's re-check: the More fields `aria-labelledby` association to its summary, and the label "Entries, in the order picked" as the `aria-labelledby` target of the stacked entry list.

## 16. Changes from the first draft

1. Added the Status line and "Decisions applied (human, final)". The open-questions section is replaced; only genuinely open items remain (section 14).
2. Spacing rule (Q4) stated exactly: 0 gaps except one 8px gap between Last verified and the Field status row. Added the warning that any extra 8px spills Stake and Cloudbet (481 or more) and that their 7px margin is zero slack.
3. Fold claims restated as "fits on paper only" with the spill conditions, and a Robust / fragile paragraph added. Home above the fold is now the range 441–465. The banner at 375 is 3 lines (112 is only an unlikely alternative).
4. Vbet's Unknown labels corrected to 27 characters (1–2 lines kept). BC.Game Stated is 66 characters and 2–3 lines. The BC.Game and Vbet totals are now 138–162; the 375 Vbet figure is recomputed as 114–138.
5. Home 320 wireframe redrawn: the FOLD line sits after the y=457 control label, which straddles the fold (457–481 against 480).
6. G8 decided (`inline-size: 100%`) and moved into the Phase 3 amendments. Optional G8b added.
7. Compare intro is now one sentence with accurate Unknown wording. The quoted "Unknown (not yet checked)" is removed from the intro.
8. Sort label: two CSS-toggled controls, "Sort columns A–Z" (IA) at 40em and wider and "Sort entries A–Z" (J) below.
9. Option A is now built by rendering both variants and toggling them with one CSS `@media (min-width: 40em)` rule and `display: none`. `matchMedia` and the JS breakpoint literal are removed; content is built once per render from one data pass. The residual resize-focus case is stated.
10. Added the Dynamic behaviour tables (section 9): focus after each action, live-region wording tagged (J), and whether the count text returns after a refusal.
11. G7: added the catalog.js `onerror` revert rule for Home and Compare, the corrected Compare CLS row, and the `<noscript><style>` alternative.
12. Stated the cost of the non-sticky thead and the deferred alternative (sticky at 64em and wider with `--sticky-offset`).
13. Descriptors marked provisional (O11b) everywhere. The three unsourced descriptors are no longer worked examples (now mBit Casino and Wild.io). Stated that Q13 puts the descriptor into the primary CTA label.
14. Long catalog values: decision line (shown in full, no clamp), the 200–340px height difference, the Phase 5 "height is not emphasis" instruction, and the Home card and At a Glance drawings redrawn with multi-line real values.
15. Review CTA height corrected to 52px for 2 lines (76 for 3).
16. Disclosure h2 labels and "sort hidden under 2 entries" tagged (J) and added to the open copy list.
17. Banner markup decided as one inline flow (88 at 40em, 64 at desktop).
18. The Home count is baked empty (with a reserved line) and drawings use {total}, not 60.
19. Compare "see the review" links get `aria-label` "see the review: {name}".
20. Noted that "see All fields" lands on the closed `<details>` and needs a click.
21. "No print styles in v1" recorded (J).
22. Escape closes the open Menu and returns focus to the Menu button.
23. The final approval list includes G8 and G9.
24. The stacked Compare drawing now mixes sourced and unsourced entries (Stake, Rollbit, a duplicate).
25. Heading row at 375 stated as safe (276 of 343).
26. Added the 360px column to the Compare analysis ("Remove" and the mono date overflow at 93px), and rejected an `overflow-x` scroll wrapper.
27. Collected all Phase 3 amendments, with exact CSS, in section 11 (G1, G2, G3 proposed, G4, G5, G7, G8, G8b optional).
28. Added the status line on the 56-page fold drawing (445–469, above 480 and cut at 460) and the 8.9 status of every IA conflict and gap.
29. Menu JS on/off is now two baked elements toggled by G7, not a DOM swap.

---

**Phase:** Phase 4, Wireframes.

**Approval needed before Phase 5 (Visual Design) can begin:**
- the editor's re-check of this document (done: approve with changes, edits applied);
- the amendments in section 11 (AM-G1 to AM-G13) applied to DESIGN_SYSTEM.md as written. G1, G2, G4, G5, G7 and G8 were approved at the Phase 4 gate. The `.controls`, `.control-count` and `.page-intro` rules in G1, and AM-G3, AM-G8b, AM-G11, AM-G12 and AM-G13, were decided under the human's delegation (2026-11-23) and have not had a separate editor review. This application step has not been done;
- the (J) copy in section 14, items 1–5b, and O11(b), can be approved in Phase 5/6. They do not block Phase 5 from starting.

No Phase 5 work (colour, typography, hi-fi) has been done. No Phase 3 tokens or components were changed beyond the listed amendments, and DESIGN_SYSTEM.md itself has not yet been amended with them.

**Update, after the human delegated the remaining open items (2026-11-23)**
22. Decided G3, G8b, G11, no print styles, the old-anchor placement, the stacked Compare entry row and the `:target` ring. New amendments AM-G11, AM-G12 and AM-G13 added to section 11; the Home wireframe no longer puts `id="casino-directory-30"` on the H1; the stacked Compare entry-list drawing now shows Remove inline.
