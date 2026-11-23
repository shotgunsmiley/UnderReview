# DESIGN BRIEF — Full Site Redesign

> Source of truth for the redesign. Read before any layout, styling, or
> component work. Follow the phase gates in Section 5. Do not skip phases.
> Stop at each gate for human approval.

---

## 1. Project Context

- **Site:** Review site for web3 / DeFi gambling (casino) platforms.
- **Audience:** Crypto-native users evaluating on-chain casinos. They care about
  provably-fair mechanics, audit status, tokenomics, withdrawal speed, and KYC
  policy. They are skeptical of affiliate spam and generic "top 10" listicles.
- **Business model:** non-affiliate at launch. No ads, no ad slots. Disclosure
  text: "No affiliate relationships exist at time of writing."
- **Trust constraint:** Gambling-adjacent site. Design must signal legitimacy.
  No dark patterns, no fake urgency, no manipulative CTAs. No aggregate
  scores, stars, or rankings (see CLAUDE.md Rule 1). Clarity and disclosure
  are brand assets.
- **Tone:** Editorial, technical, understated. "Wirecutter for DeFi casinos,"
  not "casino affiliate site."

---

## 2. Content Architecture

Every page type serves one clear user decision. **No ranking. No aggregate
score. No stars.** Verification status replaces rating.

| Page type | User decision it supports |
|-----------|---------------------------|
| Home / directory | "Which casinos are worth opening a review for?" |
| Casino review (long-form + "At a Glance" facts panel) | "Is this casino legitimate and worth my deposit?" |
| Comparison table (unranked, same fields in the order picked) | "Which of these should I shortlist?" |
| Methodology / "how we review" | "Can I trust what you show me?" |
| Glossary (provably fair, RTP, house edge) | "What does this term mean before I act?" |
| Affiliate disclosure + responsible gambling | "What's the catch, and am I playing safely?" |

**Status vocabulary (all pages):** Checked / Stated / Unverified / Unknown.
Checked = confirmed on an official regulator register; Stated = taken from the
casino's own pages; Unverified = claim not confirmed; Unknown = not yet looked
at. No aggregate scores, stars or rankings.

**Review page "At a Glance" panel (replaces the verdict box):** facts only,
sourced, dated, each with its status tag. No editorial opinion until sourced
verdicts exist. When they do, add a clearly-dated **"Editorial note"** section
*below* the facts.

**Bylines:** No named authors → no byline strip. Replace with
**"Last verified: {date}"** + link to methodology. Add a named byline only
when a named reviewer exists.

**News/blog deferred** until author and cadence exist. No template in v1.

---

## 3. References & Anti-References

**Aspirational (match structure, not skin):**
- **Bitcoin.com** (list page + "How We Rate") — PRIMARY domain reference.
  URL as recorded in `review-site-notes.md`: `bitcoin.com/gambling/casino/`.
  Verified by user 2026-11-22.
  - Methodology page: https://www.bitcoin.com/gambling/how-we-rate/
    (titled 'How We Rank Casinos: Our Review Methodology')
  - Directory page: https://www.bitcoin.com/gambling/
  Structure confirmed: disclosure at top ('How We Make Money — and
  What It Can't Buy'), register-first licensing check, dated policy
  changes with reasoning, separation of commercial and editorial
  teams, second fact-checker before publishing.
  - Copy (structure only): disclosure box first (18+, how money works, link to
    policy); last-updated / published dates; "On This Page" contents list;
    method page with register check, re-check rule, corrections route and
    dated policy changes.
  - Do not copy: scores and sub-scores; "Top picks" / ranked table /
    "Best for"; Visit Site buttons; named author / fact-checker bylines
    (none exist here).
  - Note: the methodology page is titled 'How We Rank Casinos' and
    the site is ranking-based. This reference is for STRUCTURE ONLY —
    disclosure placement, labelled fields, last-updated dates,
    register-check methodology, dated policy-change notes. Do NOT copy
    its ranking model, scores, sub-scores, 'Top picks', or ranked
    tables — see 'Must not copy' above. Citing 'Bitcoin.com does it'
    is not a justification for reintroducing rankings: DESIGN_BRIEF.md
    Section 2's no-rankings rule and CLAUDE.md Rule 1 are governing.
- Wirecutter — editorial review structure, facts-first layout, methodology
  page, no aggregate scores. Secondary structural reference.
- DefiLlama — data density, factual tables, no decorative styling. Third
  reference.

**Anti-references (explicitly avoid):**
- Generic casino affiliate sites: neon gradients, spinning banners,
  "CLAIM BONUS" popups, gold coins, countdown timers.
- Crypto clichés: dark mode + purple gradient + glassmorphism used uncritically.
- The current pre-redesign look (dark/purple/glass/gradient, "VERIFIED DICE
  ROLL" display) — it is being retired.

Do not invent visual taste where a reference exists. Match references; avoid
anti-references.

---

## 4. Design System Constraints

- **Typography:** **two families only.** Sans for UI/body (Inter or system
  stack) + Mono for data (JetBrains Mono or system mono: hashes, addresses,
  dates, audit links). No third family. No serif in v1.
- **Color:** neutral base. One accent reserved for CTAs only; status has its
  own palette. Data viz gets its own palette.
- **Spacing:** 8px base unit.
- **Dark mode:** default (crypto audience), must pass WCAG AA contrast.
- **Components to define:** review card, "At a Glance" facts panel, comparison
  row, status badge (checked / stated / unverified / unknown), disclosure
  banner.
- **Terminology:** "rating badge" → **status badge**; "how we rate" →
  **"how we review"**; "rating methodology" → **review methodology**.
- **Stack:** plain CSS with custom properties in `:root` (`styles.css` or a
  `<style>` block). No runtime Tailwind CDN. No continuous canvas loop.
- **URL / file convention:** each casino review is `/review/{casino}/index.html`
  (directory per casino), served as `/review/{casino}/` on static hosts
  (GitHub Pages, Netlify, Vercel, Cloudflare Pages) with no rewrites and no
  build step.
- **Analytics:** none for v1. LCP / CLS measured locally with Lighthouse before
  Phase 6 ships.
- **Accessibility baseline:** 16px body copy, visible focus, 44px tap targets,
  reduced-motion support, works at 320px wide.

---

## 5. Phases (gate each one — do not proceed until approved)

- [x] **Phase 1 — Audit:** Inventory index.html, review-site-notes.md, and
  current pages. Output: page list + content type map. Report catalog and link
  discrepancies (counts, missing anchors such as `#hub-01-regulation`); do not
  fix them.
- [ ] **Phase 2 — IA Proposal:** Sitemap, nav, page templates. Output: written
  spec. WAIT FOR APPROVAL.
- [ ] **Phase 3 — Design System:** Tokens, components, type scale. Output: style
  guide + CSS custom properties. WAIT FOR APPROVAL.
- [ ] **Phase 4 — Wireframes:** One low-fidelity annotated wireframe per
  template. WAIT FOR APPROVAL.
- [ ] **Phase 5 — Visual Design:** High-fidelity per template. WAIT FOR APPROVAL.
- [ ] **Phase 6 — Build:** Implement each template as its own .html file
  (separate .html files; reviews at `/review/{casino}/index.html`, served as
  `/review/{casino}/`, not hash routes; no build step). All colors, spacing, and type come from CSS custom properties
  defined in Phase 3. Apply only human-approved catalog/link corrections.
- [ ] **Phase 7 — QA:** Accessibility, responsive, performance.

Never jump from Phase 1 straight to Phase 6. Human review required at every gate.

---

## 6. Acceptance Criteria (measurable)

- [ ] LCP < 2.5s mobile, CLS < 0.1
- [ ] WCAG 2.1 AA contrast + keyboard nav on all templates
- [ ] Every review page shows above the fold: verification status (per-field
      Checked / Stated / Unverified / Unknown), methodology link,
      last-verified date, affiliate / money disclosure, 18+ notice
- [ ] Comparison tables readable at 375px width; **unranked**; sortable
- [ ] No aggregate score, star, or ranking anywhere in UI or markup
- [ ] All CTAs labeled with destination/offer, never "Click here"
- [ ] No runtime Tailwind; no continuous animation loop

---

## 7. Gambling / Affiliate Guardrails

- [ ] Disclosure: **"No affiliate relationships exist at time of writing."**
      Visually prominent, never buried. Updated the day a link changes.
- [ ] Age / responsible-gambling messaging placed deliberately.
- [ ] Do NOT mimic casino UI (slot animations, chip icons, dice-roll
      displays) in the review interface — editorial layer stays visually
      distinct from reviewed products.
- [ ] **Review methodology** visible and consistent across all reviews.
- [ ] Per-dimension statuses are sourced; unsourced dimensions show
      "Unverified" or "Unknown" (per the Section 2 definitions), never a guess.

---

## 8. Failure Modes to Avoid

- Skipping straight to "make it look good." That produces generic output.
- Inventing scores, stars, or rankings to fill a layout.
- Fabricating verdicts, counts, or link targets to make the UI "work."
- Letting the coder silently fix catalog accuracy — that is editorial truth
  and requires a human gate.
- Falling back to the retired dark/purple/glass look.

Follow the phases. When in doubt, re-read this file.

---

## 9. Decisions Log

Phase 1 approved, Phase 2 not yet started.

**Resolved**
1. **Affiliate / ads:** no to both. Non-affiliate at launch, no ad slots.
   Disclosure: "No affiliate relationships exist at time of writing."
2. **Rule 4:** edited in place in `CLAUDE.md` (redesign supersedes the
   pre-redesign look once a template ships from Phase 5 approval).
3. **Architecture:** separate `.html` files, one per template. Reviews use path
   URLs (`/review/{casino}`), not hash routes.
4. **Tailwind CDN:** dropped. Plain CSS with custom properties. No continuous
   canvas loop.
5. **News/blog:** deferred until author and cadence exist. No template in v1.
6. **"10 guides" counts / `#hub-01-regulation`:** report in Phase 1, do not fix.
   The human decides per item between Phase 1 and Phase 6; the coder
   implements approved corrections in Phase 6 only.
7. **Catalog accuracy:** same gate as 6.
8. **Section 3 competitor URLs:** left as a placeholder. The human will fill
   them in before Phase 1.
9. **"Checked" narrowed to register-only (Q3).** Content decision, gated into
   Phase 6; not a Phase 2 IA decision. Methodology text: "Checked" means we
   read the regulator's public register and confirmed the license, not that
   the casino's site says so.
10. **Hosting and URLs (Q4).** `/review/{casino}/index.html`, plain HTML + CSS
    custom properties, no build step, no analytics in v1 (Lighthouse locally).
11. **Section 3 references (Q1).** Bitcoin.com primary, Wirecutter secondary,
    DefiLlama third. See entries 13 to 15.
12. **`#report-modal` ("5 Defining Shifts") cut in Phase 2** (decision to cut,
    not defer-and-keep): unsourced, undated, no 18+ line, no fit to a
    Section 2 type.
13. **Crypto Casino Scan:** dropped — no verifiable URL; not findable by web
    search.
14. **CryptoCasinoRank:** dropped — ranking-based; referencing it invites
    reintroducing ranked tables.
15. **Bitcoin.com:** verified 2026-11-22. Methodology at
    https://www.bitcoin.com/gambling/how-we-rate/, directory at
    https://www.bitcoin.com/gambling/. Confirmed structural patterns
    (disclosure first, register-first licensing, dated policy changes).
    Reference is structural only — no ranking model.

**Pattern note for the methodology page (informs Phase 4, not a Phase 2 task)**
- Bitcoin.com moved responsible-gambling tools from a listing requirement to a
  scored criterion, with a dated explanation. Pattern for our methodology page:
  show what changed and when, with reasoning — the opposite of the
  unsourced/undated claims the Phase 1 audit flagged.

**Content backlog for Phase 6 (human-gated; coder acts only on approved items)**
- Rewrite the methodology "Checked" definition to register-only.
- Re-classify the 56 unsourced catalog entries: "Stated" if the casino states
  it and we have not verified it, "Unknown" if nobody sourced it. Same gate as
  the catalog count and link corrections.
- Phase 2 IA must support the honest state: the review template shows all four
  statuses, including "Unknown" as a visible tag (the audit found Unknown
  currently never renders). Phase 2 does not do the re-classification.
