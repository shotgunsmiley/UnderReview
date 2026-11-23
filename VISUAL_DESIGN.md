# VISUAL_DESIGN.md: Phase 5 (Visual Design)

**Status:** Phase 5 approved at the gate; human delegated the open rulings to the session (decisions in section 1). Phase 6 not started.
**Scope:** high-fidelity design for Home, Review, Compare and Text page using ONLY existing tokens and classes from DESIGN_SYSTEM.md (tokens.css, styles.css, amendments AM-G1 to AM-G13). No new colours, tokens, fonts or components. Reference mocks: `mocks/*.html` (flat; each links `tokens.css` and `styles.css`, which are the first and second ```css blocks of DESIGN_SYSTEM.md; no inline styles; the only script is the `js` hook). Links to unmocked pages use Phase 6 paths and 404 in the flat folder.
**Review:** architect spec, Playwright measurement (Chromium, 1x), editor verdict APPROVE WITH CHANGES, no blockers outstanding.

## 1. Decisions (final)

| # | Item | Decision |
|---|---|---|
| 1 | Review fold criterion | The Phase 4 figure of 480px was an estimate that included a chrome allowance. Restated: at 320x568 the H1, the first line of every status group and the status line are visible without scrolling and no group line is clipped. Measured, see section 4. No spacing change. Phase 7 re-measures on real devices and fonts. |
| 2 | P1 equal-height cards | Approved as a Phase 3 amendment, applied in Phase 6: `.card-grid > li { display: grid; }`. No literals. Makes sourced and unsourced cards equal boxes. |
| 3 | P2 directory wrapper spacing | Approved, folded into Phase 6: `.stack-2 > * + * { margin-block-start: var(--space-2); }` on `div#casino-directory-30`. The mock's `.page-stack` workaround (32px above the compare bar) is not final. |
| 4 | P3 `<strong>` weight | Dropped. The banner has no `<strong>`. |
| 5 | P4 date wrap | Approved, Phase 6: `time.data { white-space: nowrap; }` so "2026-11-22" never splits. No literals. |
| 6 | D3 | Stacked Compare: `id` on a row header only in the first tbody; later rows use `headers`. DS 2.6 wording amended in Phase 6. |
| 7 | D4 | `section#sources` (ring on the section) is the anchor; WIREFRAMES 5.1/5.2 are read that way. |
| 8 | D6 | `.stack-1` inside `.glance-panel`, `details#all-fields` and the footer. |
| 9 | D8 | Jump list stays vertical at every width. |
| 10 | D9 | The Compare "More fields" thead carries name links only (no repeat Remove buttons). |
| 11 | (J) copy, WIREFRAMES 14 items 1 to 5b | Approved as written, incl. "Sort entries A-Z", "Status line", short "not recorded yet". |
| 12 | AM-G3, G8b, G11, G12, G13, `.controls` | Approved. |
| 13 | O11(b) duplicate descriptors | Stays provisional. Three descriptors repeat unsourced claims; not reworded. Human decides in Phase 6. |
| 14 | Methodology copy | Approved: "listed A-Z", register-only Checked definition (brief decision 9), dropped the old intro sentence (untrue for unsourced entries), new status-line explanations. Content-scan allow-list: only the two exact negation sentences (methodology "no scores, stars, ... featured slots" and FAQ 1 "scored, starred, ranked, featured"), never the words. |
| 15 | Catalog scan hits "approved domain" and "VIP" | Allow-listed only as exact quoted catalog strings (the register wording on Stake, Cloudbet and Vbet licence numbers; VIP as a feature-edition category name). No new copy uses them. |
| 16 | Vbet Custody | Shown as Unknown with "No custody wording found in the terms read" (WIREFRAMES D21/O10). `index.html` still says "Unverified (...)": correcting the catalog is a Phase 6 item, applied only as this approved change. |
| 17 | Compare buttons tall on desktop | Accepted; existing classes only. Revisit in Phase 7 if it hurts. |

## 2. Answers

**(a) Hierarchy below 40em (H1 = H2 = 25/32).** Position and spacing, not size. The H1 is first after the banner, `--space-2` above, 0 below; every H2 starts a section with `--space-4` above. On Review, "Field status" and "At a Glance" are `.heading-compact` (`--text-lg`), so the top of the page shows a real step. On Home, each group H2 is followed by a `--color-text-muted` subtitle the H1 never has. No new token.

**(b) Space beside the 640px Review column.** Empty `--color-bg`, by design (G11: no side panel). Header, banner and footer stay full width, so it reads as an article measure.

**(c) Sourced vs unsourced cards.** Same tokens, same heading step, A-Z order, no counts or summary badge, hover changes only the border. Differences come only from content (badge states, height). P1 makes the boxes equal height.

**(d) About 170 Unverified badges.** Unverified has its own token triplet, same size, weight and padding as the other states, no opacity, no smaller step. Dashed border plus label separate it without colour. Home will look yellow-heavy; that is the true state of the data and is not mitigated.

## 3. Spec
PHASE 5 (Visual Design), hi-fi spec. Dark is the designed theme. OS-light uses the same tokens remapped (tokens.css light block), so every row below holds in light with the values swapped. The swaps that change how things look: the accent becomes a near-black fill with white text, the focus ring becomes black, and badges become pale fills with dark text. Every class used in the mocks exists in styles.css (checked by grep), with one exception: AM-G1's "div.control-group" has no rule, so the mocks use an unclassed <div> in its place.

Abbreviations: T = type, S = spacing above (token), C = colour role, Cl = class.

SHARED FRAME (all templates)
| Block | T | S | C | Cl | States / 320 vs desktop |
|---|---|---|---|---|---|
| Skip link | base semibold | none (first in body) | text on bg, border-strong | .skip-link.button-secondary | Clipped until :focus; on focus it sits in flow (+44px) with the focus ring |
| Header | base; .brand semibold | row min --tap-min, padding-block 0, 1px --color-border bottom | bg | .site-header .wrap, .brand.link-standalone, .menu-toggle.button-secondary(.no-js a / .js-only button), .site-nav | Below 64em: Menu only, nav is an in-flow second row when .is-open. 64em and up: inline nav, gap --space-2. Current page = 3px underline (--nav-current-thickness), no colour change. Hover: 2px underline. Focus ring. |
| Banner | base | .wrap padding-block --space-1; 2px --color-banner-border top and bottom | banner-bg / banner-text | .disclosure > .wrap > p + a.link-standalone | Below 40em the link is display:flex (own 44px line, about 136px total). 40em: inline (88). 64em: one line (64). No <strong> (see defect D5). |
| main | — | padding-block --space-2 / --space-4; main > * + * gets --space-2 | bg | main#main | — |
| Footer | base | padding-block --space-4; children --space-1 (.stack-1) | bg, 1px --color-border top | .site-footer .wrap.stack-1, .list-plain[role=list], link-standalone | Single column at every width. All links are 44px. |

HOME (home.html)
| Block | T | S | C | Cl | States / notes |
|---|---|---|---|---|---|
| H1 "Casino directory" | --text-h1/--leading-h1 (25/32 below 40em, 31.25/40 at 40em+), --tracking-tight | 0 after (h1 + *) | text | .wrap.page-stack > h1 | — |
| Intro + "How we review" | base | 0 | text; link = --color-link | .page-intro (p capped at --measure), a.link-standalone | Link: hover 2px underline, focus ring |
| Controls | labels base semibold; inputs base regular | groups --space-2; label to control --space-1; count to Reset --space-1 | control bg = --color-bg, border-strong 2px | .controls.js-only, .control-label, .control-text, .control-select, p.control-count[role=status], .button-secondary | Capped at --measure. Count p is baked empty with 24px reserved (min-block-size). Empty-results state = "Showing 0 of {total}" + Reset only. No disabled states exist. |
| Compare bar | base; count muted | --space-4 above (see D1), --space-2 below | surface; 2px border-strong top | section.compare-bar.js-only > .wrap, p.compare-count[aria-live], a.button-primary, button.button-secondary | Accent CTA #1 "Go to comparison". Hover: underline. Static, rendered at n=0. Clear stays at n=0. |
| Jump list | base | --space-2 | link | nav[aria-label=Categories] > ul.list-plain[role=list] | Vertical at every width (6 × 44 = 264px). The wireframe's inline desktop drawing has no class to build it (D8). |
| Group | h2 --text-xl/--leading-xl; subtitle base muted | --space-4 above each section; --space-1 inside (.stack-1) | text / text-muted | .wrap.page-stack > section.stack-1 | :target ring is not applied to h2 ids by default (the :target:is list includes h2, so it does ring) |
| Card | h3 link --text-lg semibold; dt base semibold; dd base; badge --text-badge | padding --space-2, child gap --space-1, grid gap --space-2 | surface, 1px --color-border, --radius-2 | ul.card-grid.js-only > li > article.card, .glance-field, .badge (alone, no sub-label), .checkbox-label/.control-checkbox, time.data | Hover: border to --color-border-strong only. Focus ring on the link and on the checkbox. Checked state = --color-text inset fill. 1 column at 320–623, 2 at 624–927, 3 at 928+. No featured or first-card variant. |
| Static list | base | — | link | ul.list-plain.no-js[role=list] | Hidden under html.js |

REVIEW (review-stake.html; .wrap.page-stack.page-review, capped at --measure, left-aligned)
| Block | T | S | C | Cl | States / notes |
|---|---|---|---|---|---|
| H1 Stake | --text-h1 | top 16 (main) | text | h1 | — |
| Last verified | base; date mono | 0 | text | p > time.data | 56 pages: "not recorded yet" in sans |
| Field status | h2 --text-lg; group lines base; badge --text-badge | --space-1 (.stack-tight); 0 inside | bg, no box | section.stack-tight > .heading-row (h2.heading-compact + a.link-standalone), p × groups | No sub-labels (H4). The first line of each group is about 30px (badge borders). |
| Status line | base muted | --space-1 | text-muted | p.text-muted.stack-tight | — |
| Duplicate notice | base | --space-2 | surface, 3px border-strong inline-start | .notice | 9 pages only (not in this mock) |
| At a Glance | h2 --text-lg; dt semibold; sub-label muted; Licence no. mono | --space-4 above; --space-2 padding; rows --space-1 padding with 1px top rule; children --space-1 (.stack-1, D6) | surface, 1px --color-border | section.glance-panel.stack-1, .glance-row, .glance-subline, .badge + .badge-sublabel, .data | Height follows content. No error styling on unsourced pages. |
| Breadcrumb | base | --space-2 | link | nav.breadcrumb ol, gap --space-1, "›" aria-hidden | — |
| All fields | summary base semibold | --space-2; inside --space-1 | summary on --color-raised when open | details#all-fields.stack-1 > summary, dl > .glance-row, dt#field-{key} | Native marker. :target ring on details and on dt#field-withdrawals. Unknown rows = badge + "Unknown (not yet checked)". |
| Sources | h2 --text-xl | --space-4; --space-1 inside | link | section#sources.stack-1 (D4), ul.list-plain[role=list], a.link-standalone rel="noopener noreferrer" | Empty state is "No sources recorded yet." under the same heading and spacing. :target ring on the section. |
| Catalog notes | h2 xl; label muted; dt semibold | --space-4 / --space-1 | text | section.stack-1, dl > .glance-field | — |
| Other entries | h2 xl | --space-4 / --space-1 | link | section.stack-1, ul.list-plain | — |
| CTA | base semibold | --space-2 | accent / accent-text | p > a.button-primary | Accent CTA #2. Hover underline, focus ring (the offset gap shows bg) |
Desktop (64em): column 640px; the rest of the 1168px .wrap is empty (answer b).

COMPARE (compare.html; .wrap.page-stack)
| Block | T | S | C | Cl | States / notes |
|---|---|---|---|---|---|
| H1 + intro + link | as Home | 0 / 0 | text | h1#compare-h, .page-intro | — |
| Picker | label semibold; select base | --space-2 between, label --space-1 | bg controls | .controls.js-only > div(label+select), .button-secondary Add, p[role=status], a.button-secondary Back | The empty status p collapses (gap stays 16). JS fills the options; the mock bakes only "Choose an entry". |
| No-JS text | base | --space-2 | text | div.no-js | Hidden under html.js |
| Stacked (<40em) | th semibold, td base, badge + sub-label | children --space-2 (.page-stack) | rowgroup label cells on bg; 1px --color-border rules | div.compare-stacked.page-stack, button.button-secondary "Sort entries A–Z", p#s-entries-label, ul.list-plain > li > .entry-row, table.data-table (no thead), details.stack-1 | 2 equal columns (128px content at 320). Row ids appear only in the first tbody (D3). |
| Wide (>=40em) | as above; thead name links | same | thead on --color-raised | div.compare-wide.page-stack, "Sort columns A–Z", thead th > .entry-row (link + Remove) | Equal columns (table-layout fixed). No sticky thead, no column hover or emphasis. |
States: Remove/Sort/Add are .button-secondary (hover underline, focus ring). There are no disabled states. 0–1 entries = no table (not mocked).

TEXT PAGE (methodology.html; .wrap > .prose, H1 first child)
| Block | T | S | C | Cl | Notes |
|---|---|---|---|---|---|
| H1 How we review | --text-h1 | — | text | .prose > h1 | <title> "Review methodology" |
| On this page | h2.heading-compact | --space-2 | link | nav[aria-labelledby] > ul (bullets kept) > a.link-standalone | 9 links |
| Sections | h2 --text-xl, h3 --text-lg | h2 --space-4, h3 --space-3, blocks --space-2 | text | .prose > h2[id], p/ul/dl at --measure | .prose :target ring on h2 |
| Status definitions | badge + base | dl.stack-1 | badge palette | .badge × 4 states | Badges are static |

(a) Below 40em, H1 and H2 are both 25/32. Three things carry the hierarchy. (1) Position: the H1 is the first element after the banner, with --space-2 above and 0 below (.page-stack > h1 + *). Every h2 is a section start with --space-4 above (.page-stack > * + section, .prose > * + h2). (2) The h2s that sit closest to the H1 on Review ("Field status", "At a Glance") are .heading-compact (--text-lg, step 1), so the top of the page shows a real size step. (3) On Home, each group h2 is immediately followed by a --color-text-muted subtitle, which the H1 never is. There is no size difference between H1 and H2 at 320, and I propose none (no new token). Semantics carry the levels for assistive tech.
(b) On desktop the space beside the 640px Review column is empty: --color-bg, about 528px at 1168 content. No existing class should fill it. A side panel or sticky table of contents would be a new component and is not in the wireframes (G11 says "no side panel"). Recommendation: leave it empty, the way Wirecutter uses an article measure. The header, banner and footer stay full width, so the page does not read as broken.
(c) Every card uses the same tokens (.card surface, 1px --color-border, --radius-2, same heading step). Hover changes only the border. Order is mechanical A–Z, with no badge counts and no summary badge. The only differences come from content: badge state and height. On Home, Checked appears only 3 times (Stake, Cloudbet and Vbet Licence) and Stated 5 times, against 171 Unverified and 1 Unknown. Height is not neutralised today: with ul > li > article.card, cards in a grid row do NOT stretch to equal height, which contradicts WIREFRAMES 8.8 (defect D2), so sourced cards look visibly longer. Fix proposal P1. Mocks use the DS markup as-is.
(d) Unverified has its own token triplet: dark #f0d66b text on #2a2410 (my estimate is about 10.7:1) with a #a8902e dashed 3px border (about 5.6:1 on surface). Light is #5c4500 on #fbf3d6 (about 8.2:1). These are my estimates; the §4 script must confirm. The badge has the same size, weight and padding as the other three states, with no opacity, no smaller step and no collapsing. It reads as "a claim" without alarm because nothing else on the site is yellow: the banner deliberately uses neutral banner tokens. Honest consequence: Home will be visibly dominated by yellow (3 per unsourced card). That is the true state of the data, and the mocks do not mitigate it.

CARRIED-OVER (editor to rule; my recommendation in brackets)
1. Compare live-region strings ("Added {name}. {n} of 3 entries." etc.) [approve as written; plain and factual].
2. "Sort entries A–Z" [approve].
3. /disclosure/ h2s "Sources links", "No ads", "Future affiliate links", "Not advice; check your local law" [approve].
4. Hide sort with fewer than 2 entries [approve].
5. Home refusal message persists until the next selection change [approve].
5b. Row label "Status line" [approve]. Last verified cell "not recorded yet" [approve the short form: the row label already says "Last verified"].
O11(b) duplicate descriptors [keep provisional; the human confirms in Phase 6. The 3 that repeat unsourced claims ("no turnover focus", "Anjouan licence and hybrid focus", "games and Lightning") cannot be replaced without new copy, so flag them for the human. Do not reword in Phase 5.]
AM-G3 .list-plain + role=list [approve].
G8b .controls cap [approve. On Home the 640px controls sit above a 1168px card grid, which is fine.]
G11 .page-review [approve; see (b)].
G12 .entry-row [approve. Also reused in the wide thead cell (link + Remove), which needs no new CSS.]
G13 :target ring [approve. But see D4.]
.controls rules [work as described. The empty Compare status p collapses margins, so the gap stays 16, and Add/Reset/Back become fit-content flex boxes. No defect found.]
Methodology copy needing human or editor ruling (J):
- I adapted existing copy minimally: "listed in catalog order" became "listed A–Z" in two places (What unranked means, FAQ 1), because the redesign orders A–Z.
- The Checked definition now uses DESIGN_BRIEF decision 9 wording (register-only), spelled "licence".
- I dropped the old intro sentence "A field is only filled in when a source has been read", which is untrue for the 56 entries.
- FAQ links now point to #what-unranked-means and /guides/#provably-fair. The old "provably fair lab" became "provably fair guide".
- Entry-status-line explanations ("the entry has at least one Checked field" etc.) are new (J) wording.
- The methodology negation sentences ("no scores, stars, "best for" labels, top picks or featured slots"; FAQ "scored, starred, ranked, featured") hit the §3.2 content scan. I recommend adding these exact sentences to the allow-list.
- Catalog hits for the human: "approved domain" (Stake, Cloudbet and Vbet licence numbers) and "VIP".
Visible defects found while reading the CSS and wireframes:
D1. main > * + * does not reach inside div#casino-directory-30, so the controls, compare bar and lists would touch (0 gap). The mock puts .page-stack on the wrapper, which gives the compare bar (a section) 32px above instead of the drawn 16. This is below the fold. Fix: P2.
D2. Cards do not stretch to equal height (li wrapper). Fix: P1.
D3. Stacked Compare: id="s-main-r-{slug}" on every th[scope=row] repeats in each field tbody, which makes duplicate ids. The mock puts the id only in the first tbody (Category, and Operator in More); later rows reference it through headers. Amend DS 2.6 wording.
D4. The Sources anchor conflicts: WIREFRAMES 5.1/5.2 say h2#sources, AM-G13 says section#sources. The mock uses section#sources (ring on section) and h2#sources-h.
D5. <strong>18+ only.</strong> renders at UA "bolder" (700), not --weight-semibold. The mock omits <strong>. Fix: P3, if the editor wants it.
D6. No spacing rule inside .glance-panel, details or the footer. The mock adds the existing .stack-1 to each.
D8. The desktop jump list is vertical; the wireframe drawing shows it inline. Accept, or add an inline-list class in Phase 3 (not proposed).
D9. The wide "More fields" table repeats the thead, including 3 more "Remove {name}" buttons with duplicate accessible names and extra tab stops. The mock follows DS ("same structure"). I recommend the More thead carries name links only, which needs a DS 2.6 amendment.

Phase 3 proposals (NOT used in the mocks)
P1. `.card-grid > li { display: grid; }` makes each article.card fill its grid row (WIREFRAMES 8.8 equal-height assumption). No literals.
P2. `.stack-2 > * + * { margin-block-start: var(--space-2); }` on div#casino-directory-30 restores 16px around the compare bar. Alternative: accept .page-stack (32 above the bar) and update the 4.1 arithmetic below the fold.
P3. `strong { font-weight: var(--weight-semibold); }`, only if <strong> is kept in the banner.

Risks / things the measurement should check
- Review fold at 320×568: Stake has 7px of slack (Q4). Check the heading-row wrap and the 30px badge line boxes in group lines, which make line spacing uneven (DS 2.2 Phase 5 check, still visible in the mocks).
- Home intro must stay at 7 lines or fewer at 320 (Q2). Also check the 136px banner height at 320 and 375.
- Stacked Compare at 320: 128px cells carrying an "Unverified" badge (about 84–90px, nowrap) plus a wrapping sub-label. Also check the mono licence numbers and the dates (96px).
- The 3px "double" border (Stated) renders as roughly 1+1+1px at 1x DPR, so it may not be distinguishable from solid. Test at 1x, 200% zoom and forced-colors (badge backgrounds vanish there, so only the label and border style remain).
- Desktop CLS when JS-built cards replace the static lists (Phase 7).
- In the mocks, html.js is set but no JS runs: the Menu button, checkboxes, Remove, Sort and Add are inert, and the Menu button cannot open the nav below 64em.
- Production risk: review pages have no data script, so if the site script fails after the inline hook, the Menu button is dead and the no-JS Menu link stays hidden.
- Links to pages that are not mocked use Phase 6 paths (/review/{slug}/, /glossary/, /guides/, /disclosure/) and 404 in the flat mock folder. This is expected.
- Vbet custody uses the approved O10 edited text ("No custody wording found in the terms read") ahead of Phase 6.
- Home shows 10 representative cards. The control-count stays baked empty (filled by JS) so no literal count appears.
- Light theme: check the accent button (#111317) against surface in the compare bar, and the yellow volume on white.


## 4. Measurements (Chromium 1x; sans resolved to Inter, wider than most system fonts)
All 16 combos (4 pages x 320x568/1280x800 x dark/light): no horizontal overflow (scrollWidth == clientWidth), 0 console errors, 0 failed requests, 0 inline style attributes.
Banner: 136px at 320 (matches plan), 64px at 1280. Header 45px. H1 at 197-229 at 320 (matches plan).
Review fold at 320x568 (Phase 4 budget 480 = 568 minus browser chrome assumption):
- Heading row ends at 307 (plan 305): +2px (row 44px, one row, no wrap). 
- 56-page case (Unverified: Licence, Custody, KYC; Unknown: 8 labels): groups end 439 (plan 437). FITS 480 by 41.
- Stake: groups end 499 (plan 473). SPILLS 480 by 19. Cause: Stated group wraps to 3 lines (78px) not 2 (54px) in Inter; plus the 2px. The Unknown group's 2 lines start at 445, so the first line of every group is above 480 (last first-line ends 469); the 2nd Unknown line is cut at 480. Full groups end 499, i.e. inside the 568 viewport with 69px spare, and the status line "Partly checked ..." is also visible at 568 (ends ~555).
- Not measured: Cloudbet/Vbet/BC.Game pages (not mocked); Stake is the worst case by the Phase 4 table.
Review fold at 375x667: row ends 283 (banner is 2 lines at 375), Stake groups end 451, 56-page 391 (fits 580 by >100).

All 16 combinations (4 pages, 320x568 and 1280x800, dark and light): no horizontal overflow, 0 console errors, 0 failed requests, 0 inline styles. Banner 136px at 320.

## 5. Phase 6 inputs from this phase
Apply P1, P2, P4; the D3, D9 and D4 wording amendments; the catalog correction in decision 16 and the human-approved items only. Use `mocks/` as the markup reference. Phase 7 checks: fold on real devices, forced-colors and 200% zoom for badge borders, CLS when JS replaces static lists, and the content scan allow-list.
