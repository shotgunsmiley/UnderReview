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
- Wirecutter — review structure, facts-first layout, methodology page
  (generic structural reference)
- DefiLlama — clean data density (generic structural reference)
- **Bitcoin.com** (list page + "How We Rate") — PRIMARY domain reference.
  URL as recorded in `review-site-notes.md`: `bitcoin.com/gambling/casino/`.
  **UNVERIFIED:** the fetch failed on 2026-11-22 (DNS; host not reachable from
  the research session), so the URL is not confirmed live, the "How We Rate"
  URL is unknown, and the features below are second-hand from the notes.
  - Copy (structure only): disclosure box first (18+, how money works, link to
    policy); last-updated / published dates; "On This Page" contents list;
    method page with register check, re-check rule, corrections route and
    dated policy changes.
  - Do not copy: scores and sub-scores; "Top picks" / ranked table /
    "Best for"; Visit Site buttons; named author / fact-checker bylines
    (none exist here).
- **Crypto Casino Scan** — SECONDARY domain reference. **UNVERIFIED:** the
  notes record no URL and a web search found no site by this name on
  2026-11-22. URL to be supplied by the human.
  - Copy (structure only, per the notes): "unknown" shown as a value; a
    "site updated" date; an "evidence record" of facts, unknowns and
    conflicts.
  - Do not copy: any ranking; affiliate-link patterns (none exist here).
- Dropped: CryptoCasinoRank (ranking-based).

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
- [ ] Comparison tables readable at 375px width
- [ ] All CTAs labeled with destination/offer, never "Click here"

---

## 7. Gambling / Affiliate Guardrails

- [ ] Disclosure statement visually prominent, never buried. Currently states
      no affiliate relationships exist; update the day a monetized link is added.
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
11. **Section 3 references (Q1).** Bitcoin.com (primary) and Crypto Casino Scan
    (secondary). CryptoCasinoRank dropped (ranking-based). Wirecutter and
    DefiLlama stay as generic structural references.
12. **`#report-modal` ("5 Defining Shifts") cut in Phase 2** (decision to cut,
    not defer-and-keep): unsourced, undated, no 18+ line, no fit to a
    Section 2 type.

**Content backlog for Phase 6 (human-gated; coder acts only on approved items)**
- Rewrite the methodology "Checked" definition to register-only.
- Re-classify the 56 unsourced catalog entries: "Stated" if the casino states
  it and we have not verified it, "Unknown" if nobody sourced it. Same gate as
  the catalog count and link corrections.
- Phase 2 IA must support the honest state: the review template shows all four
  statuses, including "Unknown" as a visible tag (the audit found Unknown
  currently never renders). Phase 2 does not do the re-classification.
