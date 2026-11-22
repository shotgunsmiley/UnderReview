# DESIGN BRIEF — Full Site Redesign

> This file is the source of truth for the redesign. Read it before doing
> any layout, styling, or component work. Follow the phase gates in Section 5.
> Do not skip phases. Stop at each gate for human approval.

---

## 1. Project Context

- **Site:** Review site for web3 / DeFi gambling (casino) platforms.
- **Audience:** Crypto-native users evaluating on-chain casinos. They care about
  provably-fair mechanics, audit status, tokenomics, withdrawal speed, and KYC
  policy. They are skeptical of affiliate spam and generic "top 10" listicles.
- **Business model:** affiliate
- **Trust constraint:** Gambling-adjacent site. Design must signal legitimacy.
  No dark patterns, no fake urgency, no manipulative CTAs. Clarity and
  disclosure are brand assets.
- **Tone:** Editorial, technical, understated. "Wirecutter for DeFi casinos,"
  not "casino affiliate site."

---

## 2. Content Architecture

Every page type must serve one clear user decision.

| Page type | User decision it supports |
|-----------|---------------------------|
| Casino review (long-form + verification-status box) | "Is this casino legitimate and worth my deposit?" |
| Comparison table (unranked, same fields in the order picked) | "Which of these should I shortlist?" |
| Methodology / "how we review" | "Can I trust what you show me?" |
| Glossary (provably fair, RTP, house edge) | "What does this term mean before I act?" |
| News / blog | "What changed that affects my choice?" |
| Affiliate disclosure + responsible gambling | "What's the catch, and am I playing safely?" |

---

## 3. References & Anti-References

**Aspirational (match these):**
- Wirecutter — review structure, verdict boxes
- DefiLlama — clean data density
- (add competitor URLs from review-site-notes.md here)

**Anti-references (explicitly avoid):**
- Generic casino affiliate sites: neon gradients, spinning banners,
  "CLAIM BONUS" popups, gold coins, countdown timers.
- Crypto clichés: dark mode + purple gradient + glassmorphism used uncritically.

Do not invent visual taste where a reference exists. Match references; avoid
anti-references.

---

## 4. Design System Constraints

- **Typography:** one sans (UI) + one serif or mono (editorial/data). Define a
  type scale (e.g., 1.25 ratio).
- **Color:** neutral base + one accent reserved for CTAs only. Data viz gets
  its own palette.
- **Spacing:** 8px base unit.
- **Dark mode:** default (crypto audience), must pass WCAG AA contrast.
- **Components to define:** review card, verification-status box, comparison
  row, verification-status badge, disclosure banner.

---

## 5. Phases (gate each one — do not proceed until approved)

- [ ] **Phase 1 — Audit:** Inventory index.html, review-site-notes.md, and
  current pages. Output: page list + content type map.
- [ ] **Phase 2 — IA Proposal:** Sitemap, nav, page templates. Output: written
  spec. WAIT FOR APPROVAL.
- [ ] **Phase 3 — Design System:** Tokens, components, type scale. Output: style
  guide + CSS custom properties. WAIT FOR APPROVAL.
- [ ] **Phase 4 — Wireframes:** One low-fidelity annotated wireframe per
  template. WAIT FOR APPROVAL.
- [ ] **Phase 5 — Visual Design:** High-fidelity per template. WAIT FOR APPROVAL.
- [ ] **Phase 6 — Build:** Implement in index.html (static site). All colors,
  spacing, and type come from CSS custom properties defined in Phase 3.
- [ ] **Phase 7 — QA:** Accessibility, responsive, performance.

Never jump from Phase 1 straight to Phase 6. Human review required at every gate.

---

## 6. Acceptance Criteria (measurable)

- [ ] LCP < 2.5s mobile, CLS < 0.1
- [ ] WCAG 2.1 AA contrast + keyboard nav on all templates
- [ ] Every review page shows above the fold: verification status (per-field
      Checked / Stated / Unverified / Unknown), methodology link,
      last-verified date, affiliate / money disclosure, 18+ notice
- [ ] Comparison tables readable at 375px width
- [ ] No layout shift from ad slots (space reserved)
- [ ] All CTAs labeled with destination/offer, never "Click here"

---

## 7. Gambling / Affiliate Guardrails

- [ ] Affiliate disclosure visually prominent, never buried.
- [ ] Age / responsible-gambling messaging placed deliberately.
- [ ] Do NOT mimic casino UI (slot animations, chip icons) in the review
      interface — editorial layer stays visually distinct from reviewed products.
- [ ] Review methodology visible and consistent across all reviews.

---

## 8. Failure Mode to Avoid

Skipping straight to "make it look good." That produces generic output.
Follow the phases. When in doubt, re-read this file.

---

## 9. Status

Phase 1 not yet started.
