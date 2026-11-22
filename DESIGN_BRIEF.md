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
- **Business model:** non-affiliate at launch. No ads, no ad slots. Disclosure
  text: "No affiliate relationships exist at time of writing."
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
| News / blog (deferred) | "What changed that affects my choice?" |
| Affiliate disclosure + responsible gambling | "What's the catch, and am I playing safely?" |

**Status vocabulary (all pages):** Checked / Stated / Unverified / Unknown.
Checked = confirmed on an official regulator register; Stated = taken from the
casino's own pages; Unverified = claim not confirmed; Unknown = not yet looked
at. No aggregate scores, stars or rankings.

**News/blog deferred** until author and cadence exist. No template in v1.

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
  row, status badge (checked / stated / unverified / unknown), disclosure
  banner.
- **Stack:** plain CSS with custom properties in `:root` (`styles.css` or a
  `<style>` block). No runtime Tailwind CDN. No continuous canvas loop.
- **Accessibility baseline:** 16px body copy, visible focus, 44px tap targets,
  reduced-motion support, works at 320px wide.

---

## 5. Phases (gate each one — do not proceed until approved)

- [ ] **Phase 1 — Audit:** Inventory index.html, review-site-notes.md, and
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
  (separate .html files; path URLs for reviews, e.g. `/review/{casino}`, not
  hash routes). All colors, spacing, and type come from CSS custom properties
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
- [ ] Comparison tables readable at 375px width
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

## 9. Decisions Log

Phase 1 not yet started.

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
