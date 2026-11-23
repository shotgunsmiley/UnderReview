# Proposal: light motion (needs owner approval)

**Source check:** motionsites.dev sells paid AI prompts for animated landing pages. It has no CSS or assets to reuse, and its usual output (continuous animation, libraries, gradients) breaks rules 6 and the JS limits. Nothing was copied.

**What fits the rules:** short, one-shot transitions on existing classes only. No keyframes, no loops, no JS, no new classes.

**Needs approval (new tokens):** `--motion-fast: 120ms`, `--motion-ease: ease-out` in `tokens.css`.

**Exact CSS (append to styles.css):**
```css
.button-primary, .button-secondary, .link-standalone, .card {
  transition: background-color var(--motion-fast) var(--motion-ease), border-color var(--motion-fast) var(--motion-ease);
}
```
The existing `prefers-reduced-motion` block already sets `transition: none !important`. Accent colour stays on the two compare buttons. Focus ring unchanged.

**Not proposed:** scroll effects, parallax, gradients, hero video, dark glass. All retired or banned.
