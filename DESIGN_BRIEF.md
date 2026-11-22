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
- **Business model:** **Non-affiliate at launch.** No affiliate links exist.
  No ads planned. Disclosure states this plainly. Update the same day a
  monetized link is added.
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
| Comparison table (unranked; user picks sort) | "How do these shortlisted casinos differ on facts?" |
| Methodology / "How we verify" | "Can I trust these statuses?" |
| Glossary (provably fair, RTP, house edge) | "What does this term mean before I act?" |
| Affiliate & responsible gambling disclosure | "What's the catch, and am I playing safely?" |

**Status vocabulary (replaces scores throughout):**
- Per-dimension: **Verified / Unverified / Under review**
- Dimensions: Provably fair · Audit link · KYC policy · Withdrawal time · License

**Comparison table columns (unranked, user-sorted, default alphabetical):**
Name · Chain · Provably-fair status · Audit link · KYC · Withdrawal time · Last verified

**Review page "At a Glance" panel (replaces verdict box):**
Chain · License · Provably-fair status + audit link · KYC policy ·
Withdrawal time · Last verified date. Facts only, sourced, dated.
No editorial opinion until sourced verdicts exist. When they do, add a
clearly-dated **"Editorial note"** section *below* the facts.

**News / blog:** **Deferred.** No author, no cadence, no content. Do not
design templates in v1. Add in a future Phase 2b.

**Bylines:** No named authors → no byline strip. Replace with
**"Last verified: {date}"** + link to methodology. Add a named byline only
when a named reviewer exists.

---

## 3. References & Anti-References

**Aspirational (match structure, not skin):**
- Wirecutter — review structure, facts panels, methodology page
- DefiLlama — clean data density, factual tables
- <!-- FILL IN: 2–3 URLs from review-site-notes.md -->

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
- **Color:** neutral base + one accent reserved for CTAs/status only.
  Data viz gets its own palette.
- **Spacing:** 8px base unit.
- **Dark mode:** default (crypto audience), must pass WCAG AA contrast.
- **Tokens:** **CSS custom properties in `:root`** (in `styles.css` or a
  `<style>` block). **No runtime Tailwind CDN. No continuous canvas loop.**
- **Components to define:** review card, "At a Glance" facts panel,
  **status badge (verified/unverified/review)**, comparison row,
  disclosure banner.
- **Terminology:** "rating badge" → **status badge**; "how we rate" →
  **"how we verify"**; "rating methodology" → **verification methodology**.

---

## 5. Phases (gate each one — do not proceed until approved)

- [ ] **Phase 1 — Audit:** Read `index.html` and `review-site-notes.md` in full.
  Output: page list, content type map, and **discrepancy findings** — including
  catalog counts ("10 guides" vs actual) and missing anchors
  (e.g. `#hub-01-regulation`). Report only. **Do not fix.** WAIT FOR APPROVAL.
- [ ] **Phase 2 — IA Proposal:** Sitemap, nav, per-template page specs.
  Output: written spec. WAIT FOR APPROVAL.
- [ ] **Phase 3 — Design System:** Tokens (CSS custom properties), type scale,
  component specs. Output: style guide + token block. WAIT FOR APPROVAL.
- [ ] **Phase 4 — Wireframes:** One annotated text/ASCII wireframe per
  template. WAIT FOR APPROVAL.
- [ ] **Phase 5 — Visual Design:** High-fidelity spec per template.
  WAIT FOR APPROVAL.
- [ ] **Phase 6 — Build:** Implement each template as its **own `.html`
  file**. Reviews use **path URLs** (`/review/{casino}`), not hash routes.
  All colors/spacing/type from Phase 3 CSS custom properties — no hardcoded
  hex or magic spacing. **Catalog corrections: implement only human-approved
  changes decided between phases. Do not invent content or silently fix
  counts/links.**
- [ ] **Phase 7 — QA:** Accessibility, responsive, performance against
  Section 6.

Never jump from Phase 1 straight to Phase 6. Human review required at every gate.

---

## 6. Acceptance Criteria (measurable)

- [ ] LCP < 2.5s mobile, CLS < 0.1
- [ ] WCAG 2.1 AA contrast + keyboard nav on all templates
- [ ] Every review page shows above the fold: **verification status per
      dimension**, methodology link, last-verified date, disclosure line
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
- [ ] **Verification methodology** visible and consistent across all reviews.
- [ ] Per-dimension statuses are sourced; unsourced dimensions show
      "Unverified," never a guess.

---

## 8. Failure Modes to Avoid

- Skipping straight to "make it look good." That produces generic output.
- Inventing scores, stars, or rankings to fill a layout.
- Fabricating verdicts, counts, or link targets to make the UI "work."
- Letting the coder silently fix catalog accuracy — that is editorial truth
  and requires a human gate.
- Falling back to the retired dark/purple/glass look.
