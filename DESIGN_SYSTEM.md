# DESIGN SYSTEM (Phase 3)

**Status:** Written 2026-11-23 under the Phase 3 gate decisions (Q1 to Q6 and C1 answered by the human). The editor's final check returned "approve with changes"; edits E1 to E6 are applied. Items H1 to H5 (§8) and C1 to C2 (§9) are still open for the human. Phase 4 (Wireframes) has not started.

**Files this spec defines:** `tokens.css` (§1.2) and `styles.css` (§2.1). Implement them verbatim in Phase 6.

**Scope.** This document covers tokens, the type scale, component anatomy and guardrails. It has no wireframes, page layouts or per-template visuals; those belong to Phases 4 and 5. Layout arithmetic that Phase 4 may change is kept apart in §5.

---

## 0. Principles

1. **Colour means verification status.** The four status colours are the only hues on the site, and they appear only inside status badges. Everything else is neutral, including the CTA accent and the focus ring.
2. **The style is editorial, minimal, high-contrast and data-dense.** Structure follows Bitcoin.com (disclosure first, labelled fields, dated "Last verified"), Wirecutter (facts first, methodology page) and DefiLlama (dense factual tables), per brief §3. Their skins are not copied.
3. **Dark is the default.** Light is an OS-preference fallback that uses the same token names.
4. **Plain CSS custom properties only.** No runtime Tailwind, no canvas, no animation loop, no web fonts.
5. **No ranking treatment anywhere.** That means no score, star, rank, "best for", featured or promoted treatment. Verification status replaces rating.
6. **A filled button background means CTA, and nothing else.**

---

## 1. Tokens

### 1.1 Theme mechanism

- All tokens live in one file, `tokens.css`. It holds three blocks:
  - the `:root` block (the private palette, semantic colours, type, space and shape tokens);
  - the `@media (min-width: 40em)` H1 override;
  - the `@media (prefers-color-scheme: light)` override.
- `tokens.css` is the only file allowed to contain hex values. No rule outside it may contain hex.
- Raw hex appears once, as private palette tokens (`--p-dark-*`, `--p-light-*`). Semantic tokens (`--color-*`) map onto the palette. Components may reference `--color-*` and non-colour tokens only, never `var(--p-*)`.
- **Dark is the default.** It renders whenever the OS expresses no light preference, which covers both "no preference" and "prefers dark".
- **Light renders only when the OS reports `prefers-color-scheme: light`.** v1 has no theme toggle and no `[data-theme]` attribute.
- Phase 5 designs the dark theme only. The light theme is verified only through its token mapping and the contrast table in §4.
- The light block contains only `var()` mappings. It has no hex.
- Custom properties cannot be used inside `@media` conditions. So the only literal lengths outside `tokens.css` are `40em` and `64em` inside `@media` conditions (§1.6).
- **If a chart is ever added, this document must be amended first.** v1 has no data visualisation and no data-viz palette (IA D9).

### 1.2 `tokens.css` (complete; implement verbatim)

```css
/* tokens.css: the ONLY file that may contain hex values. */
:root {
  /* ===== PRIVATE PALETTE (referenced only by the semantic tokens in this file) ===== */
  /* dark */
  --p-dark-bg:                #0f1115;
  --p-dark-surface:           #171a1f;
  --p-dark-raised:            #1f232a;
  --p-dark-border:            #2e333b;
  --p-dark-border-strong:     #7d8590;
  --p-dark-text:              #e8eaed;
  --p-dark-text-muted:        #a8b0ba;
  --p-dark-accent:            #f2f3f5;
  --p-dark-accent-text:       #0f1115;
  --p-dark-focus:             #ffffff;
  --p-dark-banner-bg:         #1a1e24;
  --p-dark-checked-text:      #8ee6a8;
  --p-dark-checked-bg:        #10291a;
  --p-dark-checked-border:    #3fa866;
  --p-dark-stated-text:       #9cc8ff;
  --p-dark-stated-bg:         #0f2236;
  --p-dark-stated-border:     #4a8fe0;
  --p-dark-unverified-text:   #f0d66b;
  --p-dark-unverified-bg:     #2a2410;
  --p-dark-unverified-border: #a8902e;
  --p-dark-unknown-text:      #c9ced6;
  --p-dark-unknown-bg:        #22262d;
  --p-dark-unknown-border:    #7d8590;
  /* light */
  --p-light-bg:                #ffffff;
  --p-light-surface:           #f6f7f8;
  --p-light-raised:            #eceef1;
  --p-light-border:            #d5d9de;
  --p-light-border-strong:     #646b75;
  --p-light-text:              #111317;
  --p-light-text-muted:        #4a515b;
  --p-light-accent:            #111317;
  --p-light-accent-text:       #ffffff;
  --p-light-focus:             #000000;
  --p-light-banner-bg:         #eef0f2;
  --p-light-checked-text:      #14532d;
  --p-light-checked-bg:        #e6f4ea;
  --p-light-checked-border:    #2f855a;
  --p-light-stated-text:       #0b3d78;
  --p-light-stated-bg:         #e7f0fb;
  --p-light-stated-border:     #2b6cb0;
  --p-light-unverified-text:   #5c4500;
  --p-light-unverified-bg:     #fbf3d6;
  --p-light-unverified-border: #8a6d00;
  --p-light-unknown-text:      #30363d;
  --p-light-unknown-bg:        #eef0f2;
  --p-light-unknown-border:    #646b75;

  /* ===== SEMANTIC COLOUR (dark default) ===== */
  color-scheme: dark;
  --color-bg:                       var(--p-dark-bg);
  --color-surface:                  var(--p-dark-surface);
  --color-raised:                   var(--p-dark-raised);
  --color-border:                   var(--p-dark-border);
  --color-border-strong:            var(--p-dark-border-strong);
  --color-text:                     var(--p-dark-text);
  --color-text-muted:               var(--p-dark-text-muted);
  --color-link:                     var(--p-dark-text);
  --color-accent:                   var(--p-dark-accent);
  --color-accent-text:              var(--p-dark-accent-text);
  --color-focus:                    var(--p-dark-focus);
  --color-banner-bg:                var(--p-dark-banner-bg);
  --color-banner-text:              var(--p-dark-text);
  --color-banner-border:            var(--p-dark-border-strong);
  --color-status-checked-text:      var(--p-dark-checked-text);
  --color-status-checked-bg:        var(--p-dark-checked-bg);
  --color-status-checked-border:    var(--p-dark-checked-border);
  --color-status-stated-text:       var(--p-dark-stated-text);
  --color-status-stated-bg:         var(--p-dark-stated-bg);
  --color-status-stated-border:     var(--p-dark-stated-border);
  --color-status-unverified-text:   var(--p-dark-unverified-text);
  --color-status-unverified-bg:     var(--p-dark-unverified-bg);
  --color-status-unverified-border: var(--p-dark-unverified-border);
  --color-status-unknown-text:      var(--p-dark-unknown-text);
  --color-status-unknown-bg:        var(--p-dark-unknown-bg);
  --color-status-unknown-border:    var(--p-dark-unknown-border);

  /* ===== TYPE ===== */
  --font-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  --text-badge: 0.8rem;
  --text-base:  1rem;
  --text-lg:    1.25rem;
  --text-xl:    1.5625rem;
  --text-2xl:   1.953125rem;
  --text-h1:    var(--text-xl);
  --leading-base: 1.5rem;
  --leading-lg:   1.75rem;
  --leading-xl:   2rem;
  --leading-2xl:  2.5rem;
  --leading-h1:   var(--leading-xl);
  --weight-regular:  400;
  --weight-semibold: 600;
  --tracking-tight: -0.01em;
  --tracking-badge: 0.02em;
  --underline-offset:          0.2em;
  --underline-thickness:       1px;
  --underline-thickness-hover: 2px;
  --nav-current-thickness:     3px;

  /* ===== SPACE (8px scale, rem so zoom scales it) ===== */
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --gutter:  var(--space-2);

  /* ===== SHAPE / SIZE ===== */
  --radius-1: 2px;
  --radius-2: 4px;
  --border-1: 1px;
  --border-2: 2px;
  --border-3: 3px;
  --focus-width:  3px;
  --focus-offset: 2px;
  --checkbox-inset: 0.25rem;
  --tap-min:     2.75rem;
  --content-max: 75rem;
  --measure:     40rem;
  --card-min:    18rem;
}

@media (min-width: 40em) {
  :root {
    --text-h1:    var(--text-2xl);
    --leading-h1: var(--leading-2xl);
  }
}

@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
    --color-bg:                       var(--p-light-bg);
    --color-surface:                  var(--p-light-surface);
    --color-raised:                   var(--p-light-raised);
    --color-border:                   var(--p-light-border);
    --color-border-strong:            var(--p-light-border-strong);
    --color-text:                     var(--p-light-text);
    --color-text-muted:               var(--p-light-text-muted);
    --color-link:                     var(--p-light-text);
    --color-accent:                   var(--p-light-accent);
    --color-accent-text:              var(--p-light-accent-text);
    --color-focus:                    var(--p-light-focus);
    --color-banner-bg:                var(--p-light-banner-bg);
    --color-banner-text:              var(--p-light-text);
    --color-banner-border:            var(--p-light-border-strong);
    --color-status-checked-text:      var(--p-light-checked-text);
    --color-status-checked-bg:        var(--p-light-checked-bg);
    --color-status-checked-border:    var(--p-light-checked-border);
    --color-status-stated-text:       var(--p-light-stated-text);
    --color-status-stated-bg:         var(--p-light-stated-bg);
    --color-status-stated-border:     var(--p-light-stated-border);
    --color-status-unverified-text:   var(--p-light-unverified-text);
    --color-status-unverified-bg:     var(--p-light-unverified-bg);
    --color-status-unverified-border: var(--p-light-unverified-border);
    --color-status-unknown-text:      var(--p-light-unknown-text);
    --color-status-unknown-bg:        var(--p-light-unknown-bg);
    --color-status-unknown-border:    var(--p-light-unknown-border);
  }
}
```

Load order: `tokens.css` first, then `styles.css` (§2.1). The light block must stay after the `:root` block.

### 1.3 Token index

The palette tokens are listed as two group rows; every value is in §1.2. Every other token has its own row.

| Token | Value | Scope rule | Used by |
|---|---|---|---|
| `--p-dark-*` (23 tokens) | hex, §1.2 | Private. Referenced only by the semantic tokens in the `:root` block | `tokens.css` only |
| `--p-light-*` (23 tokens) | hex, §1.2 | Private. Referenced only by the light `@media` block | `tokens.css` only |
| `--color-bg` | p-*-bg | Page background and form-control background | body, header, footer, control inputs, compare row-group label cells |
| `--color-surface` | p-*-surface | Contained areas | card, At a Glance panel, notice box, compare bar |
| `--color-raised` | p-*-raised | One level above surface | compare `thead` cells, open `summary` |
| `--color-border` | p-*-border | Decorative rules only; carries no meaning | card and panel outline, table separators, header and footer rule, glance rows, licence sub-line rule |
| `--color-border-strong` | p-*-border-strong | Boundaries that carry meaning | secondary button, input, select, checkbox, notice-box edge, compare bar edge, card hover |
| `--color-text` | p-*-text | Body text; checkbox checked fill | body, secondary button text, control text, `.control-checkbox:checked` |
| `--color-text-muted` | p-*-text-muted | Secondary text | badge sub-labels, status line, category line, compare count, placeholder, subtitles |
| `--color-link` | p-*-text | All text links | `a` |
| `--color-accent` | p-*-accent | Primary-button fill and border only | `.button-primary` |
| `--color-accent-text` | p-*-accent-text | Primary-button text only | `.button-primary` |
| `--color-focus` | p-*-focus | Focus ring and `:target` ring only | `:focus-visible`, `.prose :target` |
| `--color-banner-bg` | p-*-banner-bg | Disclosure banner only | `.disclosure` |
| `--color-banner-text` | p-*-text | Disclosure banner only | `.disclosure` |
| `--color-banner-border` | p-*-border-strong | Disclosure banner only | `.disclosure` |
| `--color-status-checked-text` / `-bg` / `-border` | p-*-checked-* | Badge rules only | `.badge[data-status="checked"]` |
| `--color-status-stated-text` / `-bg` / `-border` | p-*-stated-* | Badge rules only | `.badge[data-status="stated"]` |
| `--color-status-unverified-text` / `-bg` / `-border` | p-*-unverified-* | Badge rules only | `.badge[data-status="unverified"]` |
| `--color-status-unknown-text` / `-bg` / `-border` | p-*-unknown-* | Badge rules only | `.badge` (fallback), `.badge[data-status="unknown"]` |
| `--font-sans` | system stack | UI and body | body, headings, buttons, controls, badge |
| `--font-mono` | system mono stack | Data only (dates, licence numbers, URLs shown as text, hashes, slugs) | `.data` |
| `--text-badge` | 0.8rem | Badge label only | `.badge` |
| `--text-base` | 1rem | Body and all UI text | body, h4, buttons, controls |
| `--text-lg` | 1.25rem | Step 1 headings | h3, `.heading-compact` |
| `--text-xl` | 1.5625rem | h2; h1 below 40em | h2, `--text-h1` |
| `--text-2xl` | 1.953125rem | h1 at 40em and wider | `--text-h1` (media block) |
| `--text-h1` | alias | h1 only | h1 |
| `--leading-base` | 1.5rem | Body line-height and badge line-height | body, h4, buttons, controls, `.badge` |
| `--leading-lg` | 1.75rem | Step 1 headings | h3, `.heading-compact` |
| `--leading-xl` | 2rem | h2; h1 below 40em | h2, `--leading-h1` |
| `--leading-2xl` | 2.5rem | h1 at 40em and wider | `--leading-h1` (media block) |
| `--leading-h1` | alias | h1 only | h1 |
| `--weight-regular` | 400 | Body and control text | body, controls |
| `--weight-semibold` | 600 | Headings, labels, buttons, badge, brand, `th`, `dt`, `summary` | as listed |
| `--tracking-tight` | -0.01em | h1 and h2 only | h1, h2 |
| `--tracking-badge` | 0.02em | Badge label only | `.badge` |
| `--underline-offset` | 0.2em | Underline offset on links and on button hover | `a`, button hover |
| `--underline-thickness` | 1px | Resting link underline and button-hover underline | `a`, button hover |
| `--underline-thickness-hover` | 2px | Link hover only | `a:hover` |
| `--nav-current-thickness` | 3px | Current-page nav link only | `.site-nav a[aria-current="page"]` |
| `--space-1` | 0.5rem (8px) | Small gaps and cell padding | badge padding-inline, card gap, glance rows, table cells, banner, compare bar and summary padding, breadcrumb gap, control label gap |
| `--space-2` | 1rem (16px) | Standard padding and gaps | card, panel and notice padding, button and control padding-inline, card grid gap, prose spacing, licence sub-line indent, header nav gap |
| `--space-3` | 1.5rem (24px) | Checkbox box size; h3 top margin in prose | `.control-checkbox`, `.prose > * + h3` |
| `--space-4` | 2rem (32px) | Footer padding-block; h2 top margin in prose | `.site-footer`, `.prose > * + h2` |
| `--gutter` | var(--space-2) | Page inline padding only | `.wrap` |
| `--radius-1` | 2px | Badge and checkbox only | `.badge`, `.control-checkbox` |
| `--radius-2` | 4px | Buttons, controls, card, panel | as listed |
| `--border-1` | 1px | Decorative rules only | card, panel, table, header, footer, glance rows, licence sub-line |
| `--border-2` | 2px | Buttons, controls, checkbox, banner, compare bar edge | as listed |
| `--border-3` | 3px | Badge border and notice-box edge only | `.badge`, `.notice` |
| `--focus-width` | 3px | Focus and `:target` ring | `:focus-visible`, `.prose :target` |
| `--focus-offset` | 2px | Focus and `:target` ring | same |
| `--checkbox-inset` | 0.25rem | Gap between the checkbox border and its checked fill only | `.control-checkbox` |
| `--tap-min` | 2.75rem (44px) | Minimum size of every interactive target; header row height | buttons, `.link-standalone`, controls, checkbox label, `summary`, header row |
| `--content-max` | 75rem | Maximum content width | `.wrap` |
| `--measure` | 40rem | Prose line length only | `.prose` p, ul, ol, dl |
| `--card-min` | 18rem | Minimum card column width | `.card-grid` |

**Allowed literals outside `tokens.css`.** Every value in a component rule is a `var()` or a keyword, with these exceptions only:
- `0`
- `100%`, used in `max-inline-size`, `inline-size`, `min()` and `clip-path: inset(100%)`
- `1fr`, in the card grid only
- `opacity: 1`, in the placeholder reset only (Firefox otherwise dims placeholder text)
- `40em` and `64em`, inside `@media` conditions only

Keyword media features (`prefers-color-scheme`, `prefers-reduced-motion`, `forced-colors`) contain no numbers.

### 1.4 Colour roles

**(i) Base neutrals.** The token index gives the role of each neutral. `--color-border` never carries meaning. `--color-border-strong` marks every boundary that does carry meaning.

**(ii) Accent: CTAs only.** Exactly two CTAs exist, and both use `.button-primary`:
- "Go to comparison" (Home compare bar)
- "Compare {name} with other entries" (review page, linking to `/compare/?casinos={slug}`)

Nothing else gets a filled accent background. That includes the Home card heading link, the duplicate-banner link, Menu, nav and footer links, Remove, Clear, Reset, "Sort columns A–Z", "Back to the order picked", "Back to the directory", the breadcrumb, "Review methodology", in-prose links and Sources links. Sources links must never look like a button, so no "Visit site" pattern can appear.

**(iii) Status palette.** There are four states, each with text, bg and border tokens: Checked (green), Stated (blue), Unverified (yellow), Unknown (grey). These tokens are used only by the `.badge` rules. The green never appears outside a badge.

**(iv) Banner and focus.** These use their own tokens (see the index).

### 1.5 Typography

**Families: two.**
- Sans (`--font-sans`) for UI and body.
- Mono (`--font-mono`) for data only.
- Each is a single system stack, and only one face per stack renders on any device. No web fonts are used, so no font request sits on the critical path (LCP) and no font swap causes layout shift (CLS). The brief allows a system stack.

**Root and body.**
- The root size is `html { font-size: 100%; }`. It is never set in px.
- The body uses `var(--weight-regular) var(--text-base)/var(--leading-base) var(--font-sans)`.

The px values in this table are documentation only. Implement them through the tokens.

| Step | Size token | px (doc only) | Line-height token (px, doc only) | Weight token | Tracking token | Used for |
|---|---|---|---|---|---|---|
| -1 | `--text-badge` | 12.8 | `--leading-base` (24) | `--weight-semibold` | `--tracking-badge` | Status badge label only |
| 0 | `--text-base` | 16 | `--leading-base` (24) | `--weight-regular`; `--weight-semibold` for labels, buttons, `dt`, `th`, `summary`, h4, brand | none | Body, values, sub-labels, banner, nav, buttons, controls, table cells, status line, mono data |
| 1 | `--text-lg` | 20 | `--leading-lg` (28) | `--weight-semibold` | none | h3, the card heading link, `.heading-compact` (the "Field status" and "At a Glance" h2 elements) |
| 2 | `--text-xl` | 25 | `--leading-xl` (32) | `--weight-semibold` | `--tracking-tight` | h2; h1 below 40em |
| 3 | `--text-2xl` | 31.25 | `--leading-2xl` (40) | `--weight-semibold` | `--tracking-tight` | h1 at 40em and wider |

- There are no steps above 3.
- **Sub-16px text exists only at step -1 (12.8px), for the badge label.** The label is a single word, always placed next to 16px text. It uses `rem`, so it scales with zoom, and it never holds a sentence or a sub-label. 12.8px is the floor (human decision).
- Mono data inherits `--text-base` and adds `overflow-wrap: anywhere`.

### 1.6 Spacing, size and breakpoints

- `--space-1` to `--space-4` are all multiples of 8px, with no exceptions. Nothing smaller than 8px is a space token. The two small insets that exist are shape tokens: `--checkbox-inset` and the borders.
- **Breakpoints.** These are literals inside `@media` conditions only:
  - `40em`: H1 at step 3; disclosure link inline; two-up cards where they fit.
  - `64em`: inline header nav.
- These breakpoint values are the architect's judgment, and Phase 4 may adjust them.

---

## 2. Components

### 2.1 `styles.css` (complete component CSS; implement verbatim)

```css
/* styles.css: no hex, no palette-token references, no literal lengths except those allowed in §1.3. */

/* ---------- Base ---------- */
*, *::before, *::after { box-sizing: border-box; }
html { font-size: 100%; }
[hidden] { display: none; }
body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-text);
  font: var(--weight-regular) var(--text-base)/var(--leading-base) var(--font-sans);
}
h1, h2, h3, h4, p, ul, ol, dl, dd { margin: 0; }
h1 {
  font: var(--weight-semibold) var(--text-h1)/var(--leading-h1) var(--font-sans);
  letter-spacing: var(--tracking-tight);
}
h2 {
  font: var(--weight-semibold) var(--text-xl)/var(--leading-xl) var(--font-sans);
  letter-spacing: var(--tracking-tight);
}
h3,
.heading-compact {
  font: var(--weight-semibold) var(--text-lg)/var(--leading-lg) var(--font-sans);
  letter-spacing: normal;
}
h4 {
  font: var(--weight-semibold) var(--text-base)/var(--leading-base) var(--font-sans);
}
.wrap {
  max-inline-size: var(--content-max);
  margin-inline: auto;
  padding-inline: var(--gutter);
}
.text-muted { color: var(--color-text-muted); }
.data {
  font-family: var(--font-mono);
  overflow-wrap: anywhere;
}

/* ---------- Focus ---------- */
:focus-visible {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: var(--focus-offset);
}
.prose :target {
  outline: var(--focus-width) solid var(--color-focus);
  outline-offset: var(--focus-offset);
}

/* ---------- Links ---------- */
a {
  color: var(--color-link);
  text-decoration-line: underline;
  text-decoration-thickness: var(--underline-thickness);
  text-underline-offset: var(--underline-offset);
}
a:visited { color: var(--color-link); }
a:hover { text-decoration-thickness: var(--underline-thickness-hover); }
.link-standalone {
  display: inline-flex;
  align-items: center;
  min-block-size: var(--tap-min);
}

/* ---------- Buttons ---------- */
.button-primary,
.button-secondary {
  display: inline-flex;
  align-items: center;
  max-inline-size: 100%;
  min-block-size: var(--tap-min);
  margin: 0;
  padding-block: 0;
  padding-inline: var(--space-2);
  border-width: var(--border-2);
  border-style: solid;
  border-radius: var(--radius-2);
  font: var(--weight-semibold) var(--text-base)/var(--leading-base) var(--font-sans);
  text-align: start;
  text-decoration-line: none;
  cursor: pointer;
}
.button-primary {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-accent-text);
}
.button-primary:visited { color: var(--color-accent-text); }
.button-secondary {
  background: none;
  border-color: var(--color-border-strong);
  color: var(--color-text);
}
.button-secondary:visited { color: var(--color-text); }
.button-primary:hover,
.button-secondary:hover {
  text-decoration-line: underline;
  text-decoration-thickness: var(--underline-thickness);
  text-underline-offset: var(--underline-offset);
}

/* ---------- Status badge ---------- */
.badge {
  display: inline-block;
  padding-block: 0;
  padding-inline: var(--space-1);
  border: var(--border-3) dotted var(--color-status-unknown-border);
  border-radius: var(--radius-1);
  background-color: var(--color-status-unknown-bg);
  color: var(--color-status-unknown-text);
  font: var(--weight-semibold) var(--text-badge)/var(--leading-base) var(--font-sans);
  letter-spacing: var(--tracking-badge);
  white-space: nowrap;
  vertical-align: baseline;
}
.badge[data-status="checked"] {
  border: var(--border-3) solid var(--color-status-checked-border);
  background-color: var(--color-status-checked-bg);
  color: var(--color-status-checked-text);
}
.badge[data-status="stated"] {
  border: var(--border-3) double var(--color-status-stated-border);
  background-color: var(--color-status-stated-bg);
  color: var(--color-status-stated-text);
}
.badge[data-status="unverified"] {
  border: var(--border-3) dashed var(--color-status-unverified-border);
  background-color: var(--color-status-unverified-bg);
  color: var(--color-status-unverified-text);
}
.badge[data-status="unknown"] {
  border: var(--border-3) dotted var(--color-status-unknown-border);
  background-color: var(--color-status-unknown-bg);
  color: var(--color-status-unknown-text);
}
.badge-sublabel { color: var(--color-text-muted); }

/* ---------- Form controls ---------- */
.control-label {
  display: block;
  margin-block-end: var(--space-1);
  font-weight: var(--weight-semibold);
}
.control-text,
.control-select {
  max-inline-size: 100%;
  min-block-size: var(--tap-min);
  margin: 0;
  padding-block: 0;
  padding-inline: var(--space-2);
  border: var(--border-2) solid var(--color-border-strong);
  border-radius: var(--radius-2);
  background-color: var(--color-bg);
  color: var(--color-text);
  font: var(--weight-regular) var(--text-base)/var(--leading-base) var(--font-sans);
}
.control-text {
  appearance: none;
}

.control-text::placeholder {
  color: var(--color-text-muted);
  opacity: 1;
}
.checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  min-block-size: var(--tap-min);
  min-inline-size: var(--tap-min);
  font-weight: var(--weight-semibold);
  cursor: pointer;
}
.control-checkbox {
  appearance: none;
  flex-shrink: 0;
  inline-size: var(--space-3);
  block-size: var(--space-3);
  margin: 0;
  padding: var(--checkbox-inset);
  border: var(--border-2) solid var(--color-border-strong);
  border-radius: var(--radius-1);
  background: none;
  background-clip: content-box;
  cursor: pointer;
}
.control-checkbox:checked { background-color: var(--color-text); }

/* ---------- details / summary ---------- */
summary {
  min-block-size: var(--tap-min);
  padding: var(--space-1);
  font-weight: var(--weight-semibold);
  cursor: pointer;
}
details[open] > summary { background-color: var(--color-raised); }

/* ---------- Table ---------- */
.data-table {
  inline-size: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
.data-table th,
.data-table td {
  padding: var(--space-1);
  border-block-start: var(--border-1) solid var(--color-border);
  text-align: start;
  vertical-align: top;
  overflow-wrap: anywhere;
}
.data-table th { font-weight: var(--weight-semibold); }
.data-table th[scope="rowgroup"] { background-color: var(--color-bg); }
.data-table thead th {
  position: sticky;
  inset-block-start: 0;
  background-color: var(--color-raised);
}

/* ---------- Header ---------- */
.site-header {
  border-block-end: var(--border-1) solid var(--color-border);
  background-color: var(--color-bg);
}
.site-header .wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  min-block-size: var(--tap-min);
  padding-block: 0;
}
.brand { font-weight: var(--weight-semibold); }
.site-nav { display: none; inline-size: 100%; }
.site-nav.is-open { display: block; }
.site-nav ul {
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style: none;
}
.site-nav a[aria-current="page"] { text-decoration-thickness: var(--nav-current-thickness); }
@media (min-width: 64em) {
  .menu-toggle { display: none; }
  .site-nav { display: block; inline-size: auto; }
  .site-nav ul { flex-direction: row; gap: var(--space-2); }
}

/* ---------- Disclosure banner ---------- */
.disclosure {
  border-block: var(--border-2) solid var(--color-banner-border);
  background-color: var(--color-banner-bg);
  color: var(--color-banner-text);
}
.disclosure .wrap { padding-block: var(--space-1); }
.disclosure .link-standalone { display: flex; }
@media (min-width: 40em) {
  .disclosure .link-standalone { display: inline-flex; }
}

/* ---------- Notice box (duplicate-brand banner) ---------- */
.notice {
  padding: var(--space-2);
  border-inline-start: var(--border-3) solid var(--color-border-strong);
  background-color: var(--color-surface);
}

/* ---------- Cards (Home) ---------- */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(var(--card-min), 100%), 1fr));
  gap: var(--space-2);
  padding: 0;
  list-style: none;
}
.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding: var(--space-2);
  border: var(--border-1) solid var(--color-border);
  border-radius: var(--radius-2);
  background-color: var(--color-surface);
}
.card:hover { border-color: var(--color-border-strong); }
.glance-field dt { font-weight: var(--weight-semibold); }

/* ---------- At a Glance panel ---------- */
.glance-panel {
  padding: var(--space-2);
  border: var(--border-1) solid var(--color-border);
  border-radius: var(--radius-2);
  background-color: var(--color-surface);
}
.glance-row {
  padding-block: var(--space-1);
  border-block-start: var(--border-1) solid var(--color-border);
}
.glance-row dt { font-weight: var(--weight-semibold); }
.glance-subline {
  margin-block-start: var(--space-1);
  padding-inline-start: var(--space-2);
  border-inline-start: var(--border-1) solid var(--color-border);
}

/* ---------- Compare bar (Home, JS only) ---------- */
.compare-bar {
  border-block-start: var(--border-2) solid var(--color-border-strong);
  background-color: var(--color-surface);
}
.compare-bar .wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-2);
  padding-block: var(--space-1);
}
.compare-count { color: var(--color-text-muted); }

/* ---------- Breadcrumb ---------- */
.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  padding: 0;
  list-style: none;
}
.breadcrumb li {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

/* ---------- Text-page prose ---------- */
.prose > p,
.prose > ul,
.prose > ol,
.prose > dl { max-inline-size: var(--measure); }
.prose > * + * { margin-block-start: var(--space-2); }
.prose > * + h2 { margin-block-start: var(--space-4); }
.prose > * + h3 { margin-block-start: var(--space-3); }

/* ---------- Footer ---------- */
.site-footer {
  padding-block: var(--space-4);
  border-block-start: var(--border-1) solid var(--color-border);
  background-color: var(--color-bg);
}
.site-footer ul {
  padding: 0;
  list-style: none;
}

/* ---------- Skip link ---------- */
.skip-link:not(:focus) {
  position: absolute;
  clip-path: inset(100%);
}

/* ---------- Guards ---------- */
@media (forced-colors: active) {
  .control-checkbox { appearance: auto; }
}
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
```

### 2.2 Status Badge

- **Markup:** `<span class="badge" data-status="checked">Checked</span>`. The value of `data-status` is one of `checked`, `stated`, `unverified` or `unknown`.
  - The visible word is the accessible name.
  - No `aria-label`, no `role="img"`, no icon and no glyph.
  - Labels are sentence case.
- **Exactly 4 states.** The visible label word is the primary non-colour cue (WCAG 1.4.1). The border style is secondary reinforcement.

| State | Label | Border style | Sub-label (review pages and Compare) |
|---|---|---|---|
| Checked | "Checked" | `solid` | "On the regulator's register · see Sources" |
| Stated | "Stated" | `double` | "From the casino's own page · see Sources" |
| Unverified | "Unverified" | `dashed` | "Claim · no source recorded" |
| Unknown, value absent | "Unknown" | `dotted` | "Unknown (not yet checked)". No value text is rendered; the sub-label fills the slot (IA 4.1). |
| Unknown, not-found note (today Vbet `custody`, D21) | "Unknown" | `dotted` | The value text "No custody wording found in the terms read", then the badge, then the sub-label "Unknown (not found)" |

- **Fallback.** The base `.badge` rule renders the Unknown style. A badge with a missing or misspelt `data-status` can therefore never look Checked.
- **Sub-label rule (enforced).** On review pages and the Compare page, the sub-label always renders next to the badge, for every state, wherever a field value is shown. The only exception is the Field status group lines (§2.3), which list field names and show no values.
  - Markup: `<span class="badge">…</span>` + one space + `<span class="badge-sublabel">…</span>`. The sub-label wraps under the badge at 320px.
  - Home cards may show the badge alone (IA 4.1).
- **States:** the badge is static and not interactive. It has no hover, focus or motion.
- **Never a grade:**
  - no number or count inside or beside a badge;
  - no entry-level or all-green summary badge;
  - no sorting or ordering of entries by badge;
  - no glyphs (stars, ticks, shields, coins and the like);
  - no pill or circle shape;
  - all four states have the same size and weight. Do not vary size or weight, and do not add glyphs to tell them apart.
- **Unverified is never dimmed.** About 170 dashed yellow Unverified badges will appear on Home: 56 entries × 3 fields, plus the custody field on Stake, Cloudbet and BC.Game, for 171 in total. That is the honest state of the data. Unverified must never be dimmed, shrunk, collapsed or otherwise played down to compensate.
- **Missing data:** a value never renders without a badge. Absent data renders the Unknown badge and sub-label, never a blank or a "—".
- **No-JS:** the badge is pure HTML and CSS.
- **Phase 5 check:** the badge is about 30px tall (24px line-height plus two 3px borders). Inside a 24px text line, the line box holding the badge grows to about 30px, so line spacing in a wrapped group may look uneven. Check this.
- **Phase 7 check:** confirm the four border styles can be told apart at 1x device pixel ratio and at 200% zoom, in both themes and in forced-colors mode.

### 2.3 Field status row (IA 5.2 block 5)

- **Heading:** `<h2 class="heading-compact">Field status</h2>`. It is followed by the link "Review methodology" (`.link-standalone`).
- **Group lines:** one line per non-empty group, in the order Checked, Stated, Unverified, Unknown.
  - Each line holds the badge, then the colon as text outside the badge, then the short field labels from IA 5.2, comma-separated.
  - Example text content: "Unverified: Licence, Custody, KYC".
  - These group lines are a listing and not field values, so they carry no sub-label. The sub-label rule applies wherever a value is shown.
- **Presentation:** the row sits on `--color-bg`, with no box and no counts.

### 2.4 At a Glance panel (IA 5.2 block 8)

- **Markup:** `<section class="glance-panel" aria-labelledby="glance-h">`, then `<h2 class="heading-compact" id="glance-h">At a Glance</h2>`, then a `<dl>`.
- **Rows:** each row is `<div class="glance-row">` holding:
  - `<dt>` with the label;
  - `<dd>` with the value, then the badge, then the sub-label.
- **Licence number sub-line (`licenseNumber`):**
  - A `<div class="glance-subline">` nested in the Licence `<dd>`.
  - It holds the label "Licence no.", the value in `.data`, and its own badge and sub-label.
  - It is omitted entirely when the value is absent. The status row and All fields still list it.
- **Lines after the rows,** both `.text-muted`:
  - "Not yet sourced: {names}", with the names joined by " · ".
  - "{n} more fields have sources: see All fields", shown only when n ≥ 1. n is computed, never hard-coded. "see All fields" links to the All fields `<details>`.
- **Panel height:** with 1 to 5 rows, the height follows the content. There is no min-height and there are no placeholder rows.
- **The 56 unsourced pages:** three Unverified rows, each with "Claim · no source recorded", followed by the not-yet-sourced line. They use the same neutral panel as every other page, with no error styling.
- **No-JS:** the panel is static HTML.

### 2.5 Review card (Home, IA 5.1)

- **Markup:** `<article class="card">` holding, in order:
  1. `<h3><a class="link-standalone" href="/review/{slug}/">Read the review: {name}</a></h3>`. On the 8 duplicates the text is "Read the review: {name} · {descriptor}".
     - This is a heading link: `--text-lg`, semibold, underlined, using the link primitive.
     - It is not a button and has no accent.
  2. The category, `.text-muted`.
  3. `<dl>` of glance fields (IA "promoted fields"; class `.glance-field` per row): label, value and badge. The badge appears alone, without a sub-label (IA 4.1).
  4. The catalog-notes label and the summary. The label is plain `.text-muted` text, exactly "Catalog notes · Unverified: written without a recorded source." It is not a badge.
  5. The status line, as plain `.text-muted` text (not a badge).
  6. "Last verified: {date | not recorded yet}". The date goes in `<time class="data">`; "not recorded yet" stays in sans.
  7. The Compare checkbox:
     ```html
     <label class="checkbox-label">
       <input type="checkbox" class="control-checkbox" aria-label="Compare {name}"> Compare
     </label>
     ```
     - On the 8 duplicates the `aria-label` is "Compare {name} · {descriptor}".
     - The accessible name starts with the visible word "Compare" (WCAG 2.5.3).
     - No `aria-describedby`.
- **Equality:**
  - every card uses identical tokens;
  - hover changes only the border colour;
  - no featured, new, popular or first-card variant.
- **Missing data:** only present glance fields render. With none, the card shows the heading link, category, notes label and summary, status line, Last verified and Compare. It never shows empty rows.
- **No-JS:** cards do not render. Instead, the baked static list renders one `.link-standalone` per line, grouped and ordered as in IA 5.1.

### 2.6 Comparison table (IA 5.3)

- **Markup:** `<table class="data-table" aria-labelledby="{h1-id}">`. There is no hidden caption, and no visually-hidden utility is defined.
  - `<thead>`: one `<tr>` with one `<th scope="col" id="{t}-e-{slug}">` per entry, in pick order. Each holds:
    - the name link (link primitive, with " · {descriptor}" on the 8 duplicates);
    - a "Remove" `.button-secondary`.
  - One `<tbody>` per field. Each holds two rows:
    - a label row: `<tr><th scope="rowgroup" colspan="{n}" id="{t}-f-{field}">{field label}</th></tr>`;
    - a value row: `<tr>` with one `<td headers="{t}-f-{field} {t}-e-{slug}">` per entry, holding the value, badge and sub-label.
  - `{t}` is a per-table prefix (`main` or `more`), so ids stay unique when the "More fields" table repeats the thead.
- **Row order (IA):** Name; Category; status line; Last verified; glance fields; Sources ("{n} recorded, see the review" or "No sources recorded yet.").
- **"More fields":** a `<details>` after the main table, styled with the details/summary primitive (§2.9), with the summary "More fields". It contains a second table of the same structure, holding:
  - the other `REVIEW_FIELDS`;
  - the 3 no-field dimensions as Unknown;
  - the 6(d) placeholder "Not yet sourced. A way to send sources or corrections has not been set up yet." as plain text.
- **Equal weight:**
  - columns are equal width (`table-layout: fixed`, no column widths set);
  - no column background, no column hover, no bold or larger value, no marker of any kind, no ordering by status;
  - the sort controls are `.button-secondary`.
- **Sticky `thead`:** see §2.1 for the CSS. No ancestor may set `overflow`. The focus-obscured risk is in §5.
- **0 or 1 entries:** no table renders.
- **No-JS:** no table. The IA no-JS text and link render as prose.

### 2.7 Disclosure banner (IA 3)

- **Markup:** `<section class="disclosure" aria-label="Disclosure"><div class="wrap">…</div></section>`, placed directly after `<header>` on every page.
- **Text, exact:** "18+ only. Gambling involves risk of loss. No affiliate relationships exist at time of writing."
  - Then the link "Disclosure & safer gambling" to `/disclosure/` (`.link-standalone`).
  - Nothing else.
  - "18+ only." may be wrapped in `<strong>`, which renders in `--weight-semibold` through the base weight; the copy does not change.
- **Prominence without alarm:** prominence comes from position (first after the header), full width and the `--border-2` rules.
  - It is not red, not yellow (yellow means Unverified) and not accent-filled.
  - It has no icon, motion, close button or dismiss control.
- **No-JS:** the banner is static.

### 2.8 Form controls

**Covers:** the text inputs (Home search, glossary search), the selects (Home category filter, Home sort, Compare "Add an entry" picker) and the checkbox (Home card Compare).

**Text input and select**
- Markup: `<label class="control-label" for="…">` plus `<input class="control-text" type="search">` or `<select class="control-select">`.
- Every control has a visible `<label>`.
- A placeholder never replaces the label. No placeholder copy is defined (see H2).
- The select keeps its native appearance, so its arrow is drawn by the browser. Do not add a glyph.

**Control background**
- The background is `--color-bg`. The only permitted alternative is `--color-surface`.
- The PAIR lines therefore cover control text, placeholder and control border on both backgrounds.

**Checkbox**
- `appearance: none` with a `--border-2` solid `--color-border-strong` border, in a `--space-3` box.
- The checked state is a token-coloured inset fill: `--color-text`, clipped to the content box inside `--checkbox-inset`. No glyph, emoji or browser-drawn mark is used.
- Under `forced-colors: active`, the checkbox falls back to `appearance: auto`, so the system-drawn control stays visible.

**Focus:** all controls use the shared `:focus-visible` ring.

**No-results text**
- This is plain text, with no box and no status colour.
- Glossary copy is exact: "No term matches '{query}'".
- Home shows only the "Showing N of {total}" count unless the human approves a sentence (H3).

### 2.9 Shared primitives

**Header**
- One row: `min-block-size: var(--tap-min)`, `padding-block: 0`, inline padding `--gutter` (through `.wrap`), with a `--border-1` decorative bottom rule. The row is 44px plus 1px.
- The brand is a plain text link (`.brand` plus `.link-standalone`) with no logo mark.
- The header is not sticky.
- Below 64em there is one "Menu" control, `.button-secondary` with `.menu-toggle`:
  - With JS off, it is `<a href="#footer-nav">Menu</a>`.
  - With JS on, it is `<button aria-expanded aria-controls>`, which toggles `.is-open` on `.site-nav`, with no animation.
- At 64em and wider, the nav links show inline in IA order: Directory, Compare, How we review, Glossary, Guides. Each uses `.link-standalone`.
- The current page gets `aria-current="page"` and a thicker underline (`--nav-current-thickness`). Its colour does not change.

**Primary button:** `.button-primary`, used for the two CTAs in §1.4 only.
- Hover adds an underline.
- There is no disabled variant. When the compare bar is visible, "Go to comparison" is a live link; Compare handles 0 or 1 entries itself (IA 5.3).

**Secondary button:** `.button-secondary`. Used for Menu, Remove, Clear, Reset, the sort controls, "Back to the directory" and the skip link.

**Link:** `a` and `.link-standalone`. Every standalone link is at least `--tap-min` tall. External Sources links use `rel="noopener noreferrer"` and stay plain links.

**Focus ring:** `:focus-visible` on every interactive element. `outline: none` and `outline: 0` are forbidden. The offset gap shows the page colour, so the ring stays visible around the light accent button.

**details/summary:**
- The summary keeps its default `display: list-item`, so the native `::marker` stays.
- `min-block-size: var(--tap-min)` with `--space-1` padding.
- When open, the summary uses `--color-raised`.
- No animation. It works without JS.

**Table:** `.data-table` (§2.1). Separators are decorative.

**Notice box (duplicate-brand banner, IA 2.3)**
- `.notice`, holding the exact IA banner text.
- It is followed by the link "Read the review: {primary name}" as a `.link-standalone` on its own line. This is a plain link, not accent.
- It is never status-coloured.

**Footer:** `<footer class="site-footer"><div class="wrap">…</div></footer>`. Contents, from IA 3:
- the not-advice disclaimer;
- the 18+ line (21+ where local law requires);
- the helplines: "1-800-GAMBLER" as text with its link to ncpgambling.org, GamCare and BeGambleAware. Reuse the existing helpline hrefs from the current footer. Do not invent URLs;
- "Safer gambling guide", linking to `/disclosure/#safer-gambling`;
- the 6 site pages in `<nav id="footer-nav" aria-label="Footer">`;
- "Back to top", linking to `#top`, which is an `id` on `<header>`.

All footer links are `.link-standalone`.

**Breadcrumb (review pages, below At a Glance)**
- Markup: `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>`.
- Items: `<li><a href="/">Directory</a></li>`, then `<li><span aria-hidden="true">›</span> <a href="/#{category-anchor}">{archLabel}</a></li>`. Both links are `.link-standalone`.
- The "›" is literal text.
- IA 5.2 defines the breadcrumb as "Directory › {archLabel}" with no current-page item, so none is added. If one is ever added, it is plain text with `aria-current="page"`.

**Text-page prose:** a `.prose` wrapper on methodology, glossary, guides and disclosure.
- p, ul, ol and dl have a maximum line length of `--measure`.
- Blocks are spaced by `--space-2`.
- h2 has `--space-4` above it and h3 has `--space-3`.
- h4 uses `--text-base` semibold.
- Glossary term anchors get the `:target` ring (focus tokens).

**Compare bar (Home, JS only)**
- `.compare-bar` holds:
  - `<p class="compare-count" aria-live="polite">{n} of 3 selected</p>`. This live region is created once, when the bar first renders, and stays in the DOM after that; only its text changes.
  - "Go to comparison" as `.button-primary`, linking to `/compare/?casinos=…`.
  - "Clear" as `.button-secondary`.
- No shadow.

**Skip link**
- The first element in `<body>`: `<a class="skip-link button-secondary" href="#main">`, which targets `<main id="main">`.
- It is clipped until focused. When focused, it is in flow, visible, and at least `--tap-min` tall.
- Its copy needs approval (H1).

**Motion:** none. No `@keyframes`, no transitions, no smooth scrolling. The reduced-motion guard in §2.1 is mandatory.

---

## 3. Guardrails and scans

The visual guardrails are those in brief §3 and the hard rules in CLAUDE.md: no gradients, glass, blur, glow or shadows; no purple-gradient crypto styling; no casino motifs; no canvas or animation loops; no runtime Tailwind; no web fonts; no scores, stars, ranks, featured slots or ad slots.

Two scans enforce them. **Every hit is reviewed by a person against the allow-list; nothing is auto-fixed.**

### 3.1 (A) Code scan

Patterns use lookbehind and lookahead. Run them with `rg -P` (PCRE2) or a JavaScript RegExp, not default `rg`.

**Where it runs:** every `.html`, `.css` and `.js` file except `tokens.css`. In `.html` files it covers `<style>` blocks, `style=""` attributes and `<script>` blocks. All patterns are case-insensitive unless noted.

```
# Colour literals
(?<![&\w])#[0-9a-fA-F]{3,8}\b
    Hex. The (?<![&\w]) guard skips numeric entities such as &#183;.
    Scope it to CSS values by requiring a declaration context:
    :\s*[^;{}]*(?<![&\w])#[0-9a-fA-F]{3,8}\b  in .css, <style> and style="".
    In .js and HTML attributes, review any hit by hand (hrefs such as "#add" can match).
\b(rgba?|hsla?|hwb|oklch|oklab|lab|lch|color|color-mix|light-dark)\(
(color|background|background-color|border|border-[a-z-]*color|border-(block|inline|top|right|bottom|left)(-[a-z]+)?|outline|outline-color|text-decoration|text-decoration-color|caret-color|accent-color|column-rule|fill|stroke)\s*:\s*(?![^;]*var\(--color-)(?!\s*(none|inherit)\s*[;}])[^;]*[;}]
    Colour-bearing declaration whose value is not var(--color-…), none or inherit.
    Catches named colours, transparent and currentColor. Rules that set only a
    length or style (border-width, border-style) are excluded by the property list.
var\(--p-

# Effects
gradient\(
backdrop-filter
filter\s*:\s*[^;]*(blur|drop-shadow)
box-shadow
text-shadow

# Motion
@keyframes
animation(-[a-z]+)?\s*:
transition(-[a-z]+)?\s*:
    Allow-list: the single reduced-motion guard
    "animation: none !important; transition: none !important; scroll-behavior: auto !important".
requestAnimationFrame
setInterval
<canvas
scroll-behavior\s*:\s*smooth
behavior\s*:\s*['"]smooth

# Stack and fonts
tailwind
@font-face
fonts\.googleapis
fonts\.gstatic
\bfont(-family)?\s*:(?![^;]*var\(--font-(sans|mono)\)\s*[;}])
    Third-family check: every font / font-family value must end with var(--font-sans) or var(--font-mono).

# Focus
outline\s*:\s*(none|0)\b

# Shape and magic numbers
border-radius\s*:(?!\s*var\(--radius-[12]\))
    Catches literal radii, including 50% and 9999px.
(?<![\w.#-])-?\d*\.?\d+(?:(?:px|rem|em|vh|vw|vmin|vmax|ch|ex|pt|cm|mm|in|lh|svh|dvh)\b|%)
    Any literal length in a declaration.
    Allow-list: 100% (§1.3 uses only); the 40em and 64em values inside @media conditions.
    The bare 0, 1fr in .card-grid and opacity: 1 in the placeholder reset carry no
    unit and are allowed by §1.3.

# Restricted tokens
var\(--color-accent
    Allowed only in rules whose selector starts with .button-primary.
var\(--color-status-
    Allowed only in rules whose selector starts with .badge.

# Naming
\bpromoted\b
    In class names and ids. Use .glance-field.
```

### 3.2 (B) Content-word scan

**Where it runs:** rendered text and accessible names (visible text, `aria-label`, `alt`, `title`, `<title>`) on all 66 pages. Matching is case-insensitive and uses word boundaries.

```
\bscores?\b
\brat(ed|ing|ings)\b
\bstars?\b
\brank(s|ed|ing|ings)?\b        ("unranked" does not match: no boundary before "rank")
\btop picks?\b
\bbest for\b
\bfeatured\b
\bpromoted\b
\bleaderboards?\b
\bwinners?\b
\bverdicts?\b
\brecommend\w*\b
\beditor'?s'? choice\b
\bsafest\b
\bapproved\b
\bjackpots?\b
\bgold\b
\bneon\b
\bglow\w*\b
\bcountdowns?\b
\bclick here\b
Emoji and glyphs (by code point):
  U+2605 U+2606 U+2B50 U+1F31F                 stars
  U+2713 U+2714 U+2705                         ticks
  U+1F3B2 U+1F3B0 U+2660 U+2663 U+2665 U+2666  dice, slot, card suits
  U+1FA99 U+1F4B0                              coin, money bag
  U+1F3C6 U+1F3C5 U+1F947 U+1F948 U+1F949      trophy, medals
  U+1F525 U+1F48E U+1F381 U+1F680              fire, gem, gift, rocket
  U+1F6E1 U+1F512 U+1F510                      shield, locks
```

**Allow-list.** These exact IA-approved negations pass after review:
- the Home intro clause "not a recommendation, safety rating or legality check";
- "no scores, stars or ranks";
- "unranked" and "(A–Z, unranked)";
- the disclosure line "Gambling involves risk of loss";
- the Compare intro's "no winner" (IA 5.3: "unranked, in the order picked, no winner").

**Catalog data** (names, summaries, strengths, tradeoffs, techStack and descriptors) is scanned on its own. Hits there, for example a brand name containing "VIP" or a summary mentioning jackpots, are flagged for the human. They never auto-fail the build and are never auto-edited, because catalog text is editorial truth.

---

## 4. Contrast table

These pairs are for the contrast script. No ratios are claimed here.

```
PAIR | dark | body text on page | --color-text=#e8eaed | --color-bg=#0f1115 | 4.5
PAIR | dark | body text on surface (cards, panel) | --color-text=#e8eaed | --color-surface=#171a1f | 4.5
PAIR | dark | body text on raised (thead, open summary) | --color-text=#e8eaed | --color-raised=#1f232a | 4.5
PAIR | dark | muted text on page | --color-text-muted=#a8b0ba | --color-bg=#0f1115 | 4.5
PAIR | dark | muted text on surface | --color-text-muted=#a8b0ba | --color-surface=#171a1f | 4.5
PAIR | dark | muted text on raised | --color-text-muted=#a8b0ba | --color-raised=#1f232a | 4.5
PAIR | dark | link on page | --color-link=#e8eaed | --color-bg=#0f1115 | 4.5
PAIR | dark | link on surface | --color-link=#e8eaed | --color-surface=#171a1f | 4.5
PAIR | dark | link on raised (compare thead name link) | --color-link=#e8eaed | --color-raised=#1f232a | 4.5
PAIR | dark | link on banner | --color-link=#e8eaed | --color-banner-bg=#1a1e24 | 4.5
PAIR | dark | banner text on banner bg | --color-banner-text=#e8eaed | --color-banner-bg=#1a1e24 | 4.5
PAIR | dark | banner border against page | --color-banner-border=#7d8590 | --color-bg=#0f1115 | 3
PAIR | dark | banner border against banner bg | --color-banner-border=#7d8590 | --color-banner-bg=#1a1e24 | 3
PAIR | dark | Checked badge text on badge bg | --color-status-checked-text=#8ee6a8 | --color-status-checked-bg=#10291a | 4.5
PAIR | dark | Stated badge text on badge bg | --color-status-stated-text=#9cc8ff | --color-status-stated-bg=#0f2236 | 4.5
PAIR | dark | Unverified badge text on badge bg | --color-status-unverified-text=#f0d66b | --color-status-unverified-bg=#2a2410 | 4.5
PAIR | dark | Unknown badge text on badge bg | --color-status-unknown-text=#c9ced6 | --color-status-unknown-bg=#22262d | 4.5
PAIR | dark | Checked badge border on page | --color-status-checked-border=#3fa866 | --color-bg=#0f1115 | 3
PAIR | dark | Checked badge border on surface | --color-status-checked-border=#3fa866 | --color-surface=#171a1f | 3
PAIR | dark | Checked badge border on raised | --color-status-checked-border=#3fa866 | --color-raised=#1f232a | 3
PAIR | dark | Stated badge border on page | --color-status-stated-border=#4a8fe0 | --color-bg=#0f1115 | 3
PAIR | dark | Stated badge border on surface | --color-status-stated-border=#4a8fe0 | --color-surface=#171a1f | 3
PAIR | dark | Stated badge border on raised | --color-status-stated-border=#4a8fe0 | --color-raised=#1f232a | 3
PAIR | dark | Unverified badge border on page | --color-status-unverified-border=#a8902e | --color-bg=#0f1115 | 3
PAIR | dark | Unverified badge border on surface | --color-status-unverified-border=#a8902e | --color-surface=#171a1f | 3
PAIR | dark | Unverified badge border on raised | --color-status-unverified-border=#a8902e | --color-raised=#1f232a | 3
PAIR | dark | Unknown badge border on page | --color-status-unknown-border=#7d8590 | --color-bg=#0f1115 | 3
PAIR | dark | Unknown badge border on surface | --color-status-unknown-border=#7d8590 | --color-surface=#171a1f | 3
PAIR | dark | Unknown badge border on raised | --color-status-unknown-border=#7d8590 | --color-raised=#1f232a | 3
PAIR | dark | CTA text on accent fill | --color-accent-text=#0f1115 | --color-accent=#f2f3f5 | 4.5
PAIR | dark | accent button boundary on page (review CTA) | --color-accent=#f2f3f5 | --color-bg=#0f1115 | 3
PAIR | dark | accent button boundary on surface (compare bar CTA) | --color-accent=#f2f3f5 | --color-surface=#171a1f | 3
PAIR | dark | focus ring on page | --color-focus=#ffffff | --color-bg=#0f1115 | 3
PAIR | dark | focus ring on surface | --color-focus=#ffffff | --color-surface=#171a1f | 3
PAIR | dark | focus ring on raised | --color-focus=#ffffff | --color-raised=#1f232a | 3
PAIR | dark | focus ring on banner | --color-focus=#ffffff | --color-banner-bg=#1a1e24 | 3
PAIR | dark | strong border (secondary button) on page | --color-border-strong=#7d8590 | --color-bg=#0f1115 | 3
PAIR | dark | strong border on surface | --color-border-strong=#7d8590 | --color-surface=#171a1f | 3
PAIR | dark | strong border on raised | --color-border-strong=#7d8590 | --color-raised=#1f232a | 3
PAIR | dark | placeholder on page (control bg) | --color-text-muted=#a8b0ba | --color-bg=#0f1115 | 4.5
PAIR | dark | placeholder on surface (alt control bg) | --color-text-muted=#a8b0ba | --color-surface=#171a1f | 4.5
PAIR | dark | control border on page | --color-border-strong=#7d8590 | --color-bg=#0f1115 | 3
PAIR | dark | control border on surface | --color-border-strong=#7d8590 | --color-surface=#171a1f | 3
PAIR | dark | checkbox checked fill on surface | --color-text=#e8eaed | --color-surface=#171a1f | 3
PAIR | light | body text on page | --color-text=#111317 | --color-bg=#ffffff | 4.5
PAIR | light | body text on surface | --color-text=#111317 | --color-surface=#f6f7f8 | 4.5
PAIR | light | body text on raised | --color-text=#111317 | --color-raised=#eceef1 | 4.5
PAIR | light | muted text on page | --color-text-muted=#4a515b | --color-bg=#ffffff | 4.5
PAIR | light | muted text on surface | --color-text-muted=#4a515b | --color-surface=#f6f7f8 | 4.5
PAIR | light | muted text on raised | --color-text-muted=#4a515b | --color-raised=#eceef1 | 4.5
PAIR | light | link on page | --color-link=#111317 | --color-bg=#ffffff | 4.5
PAIR | light | link on surface | --color-link=#111317 | --color-surface=#f6f7f8 | 4.5
PAIR | light | link on raised (compare thead name link) | --color-link=#111317 | --color-raised=#eceef1 | 4.5
PAIR | light | link on banner | --color-link=#111317 | --color-banner-bg=#eef0f2 | 4.5
PAIR | light | banner text on banner bg | --color-banner-text=#111317 | --color-banner-bg=#eef0f2 | 4.5
PAIR | light | banner border against page | --color-banner-border=#646b75 | --color-bg=#ffffff | 3
PAIR | light | banner border against banner bg | --color-banner-border=#646b75 | --color-banner-bg=#eef0f2 | 3
PAIR | light | Checked badge text on badge bg | --color-status-checked-text=#14532d | --color-status-checked-bg=#e6f4ea | 4.5
PAIR | light | Stated badge text on badge bg | --color-status-stated-text=#0b3d78 | --color-status-stated-bg=#e7f0fb | 4.5
PAIR | light | Unverified badge text on badge bg | --color-status-unverified-text=#5c4500 | --color-status-unverified-bg=#fbf3d6 | 4.5
PAIR | light | Unknown badge text on badge bg | --color-status-unknown-text=#30363d | --color-status-unknown-bg=#eef0f2 | 4.5
PAIR | light | Checked badge border on page | --color-status-checked-border=#2f855a | --color-bg=#ffffff | 3
PAIR | light | Checked badge border on surface | --color-status-checked-border=#2f855a | --color-surface=#f6f7f8 | 3
PAIR | light | Checked badge border on raised | --color-status-checked-border=#2f855a | --color-raised=#eceef1 | 3
PAIR | light | Stated badge border on page | --color-status-stated-border=#2b6cb0 | --color-bg=#ffffff | 3
PAIR | light | Stated badge border on surface | --color-status-stated-border=#2b6cb0 | --color-surface=#f6f7f8 | 3
PAIR | light | Stated badge border on raised | --color-status-stated-border=#2b6cb0 | --color-raised=#eceef1 | 3
PAIR | light | Unverified badge border on page | --color-status-unverified-border=#8a6d00 | --color-bg=#ffffff | 3
PAIR | light | Unverified badge border on surface | --color-status-unverified-border=#8a6d00 | --color-surface=#f6f7f8 | 3
PAIR | light | Unverified badge border on raised | --color-status-unverified-border=#8a6d00 | --color-raised=#eceef1 | 3
PAIR | light | Unknown badge border on page | --color-status-unknown-border=#646b75 | --color-bg=#ffffff | 3
PAIR | light | Unknown badge border on surface | --color-status-unknown-border=#646b75 | --color-surface=#f6f7f8 | 3
PAIR | light | Unknown badge border on raised | --color-status-unknown-border=#646b75 | --color-raised=#eceef1 | 3
PAIR | light | CTA text on accent fill | --color-accent-text=#ffffff | --color-accent=#111317 | 4.5
PAIR | light | accent button boundary on page (review CTA) | --color-accent=#111317 | --color-bg=#ffffff | 3
PAIR | light | accent button boundary on surface (compare bar CTA) | --color-accent=#111317 | --color-surface=#f6f7f8 | 3
PAIR | light | focus ring on page | --color-focus=#000000 | --color-bg=#ffffff | 3
PAIR | light | focus ring on surface | --color-focus=#000000 | --color-surface=#f6f7f8 | 3
PAIR | light | focus ring on raised | --color-focus=#000000 | --color-raised=#eceef1 | 3
PAIR | light | focus ring on banner | --color-focus=#000000 | --color-banner-bg=#eef0f2 | 3
PAIR | light | strong border (secondary button) on page | --color-border-strong=#646b75 | --color-bg=#ffffff | 3
PAIR | light | strong border on surface | --color-border-strong=#646b75 | --color-surface=#f6f7f8 | 3
PAIR | light | strong border on raised | --color-border-strong=#646b75 | --color-raised=#eceef1 | 3
PAIR | light | placeholder on page (control bg) | --color-text-muted=#4a515b | --color-bg=#ffffff | 4.5
PAIR | light | placeholder on surface (alt control bg) | --color-text-muted=#4a515b | --color-surface=#f6f7f8 | 4.5
PAIR | light | control border on page | --color-border-strong=#646b75 | --color-bg=#ffffff | 3
PAIR | light | control border on surface | --color-border-strong=#646b75 | --color-surface=#f6f7f8 | 3
PAIR | light | checkbox checked fill on surface | --color-text=#111317 | --color-surface=#f6f7f8 | 3
```

**Exempt (decorative; the script skips these lines).**
```
EXEMPT | dark  | --color-border=#2e333b on --color-bg / --color-surface   | card outlines, table separators, rules
EXEMPT | light | --color-border=#d5d9de on --color-bg / --color-surface   | same
EXEMPT | both  | --color-status-*-bg against surrounding surface          | badge boundary is carried by its 3px border
EXEMPT | both  | --color-raised / --color-surface / --color-banner-bg against --color-bg | area fills; text on them is tested above
```

---

## 5. Provisional layout notes (Phase 4 may change)

- **At a Glance.** At 320 and 375px the rows stack: label on line 1, value on line 2, badge and sub-label on line 3, wrapping as needed. At 40em and wider, a three-column grid: label | value | badge and sub-label. Phase 4 sets the column widths from `--space-*` multiples.
- **Compare column arithmetic at 375px.**
  - 375 minus two 16px gutters leaves 343px of table width.
  - With 3 entries, each column is about 114px, which leaves about 98px of content after the `--space-1` cell padding.
  - With 2 entries, each column is about 171px, leaving about 155px of content.
  - A 12.8px semibold "Unverified" badge is roughly 90px wide, which is tight in a 98px content area. Phase 4 must prove it with real system fonts.
  - These figures replace the first draft's 104px and 160px.
  - At 320px with 3 entries, columns are about 96px with about 80px of content. A nowrap 12.8px "Unverified" badge (about 90px) overflows. Phase 4 must prove or solve this (for example a 2-entry limit or stacked cells at 320px).
- **Header height.** About 45px: a 44px row from `--tap-min` plus its 1px rule. The IA estimate was about 56px.
- **Banner height at 320px.** 8 + 3 × 24 + 44 + 8 = 132px, plus 4px of `--border-2` rules, for about 136px. The IA estimate was about 132px.
- **H1 below 40em.** 32px per line: 1 or 2 lines take 32 to 64px (IA estimate about 72px), and 3 lines take 96px (IA estimate up to about 104px).
- **Status-row badge lines.** Only the first line of each group holds a badge, and that line grows to about 30px. The 56 unsourced pages have 2 groups, adding about 12px over the IA's 24px-per-line estimate.
- **Net against the IA fold estimate:** about −11 (header) + 4 (banner) − 8 (2-line H1) + 12 (badge lines), which is roughly −3px on the 56 pages. This holds on paper only. The line counts depend on system font metrics, so Phase 4 must prove it at 320×568 and 375×667.
- **Sticky compare `thead`.** With three long duplicate descriptors, the sticky header can grow tall and hide focused cells below it (WCAG 2.4.11, Focus Not Obscured). Phase 4 must prove this does not happen, or choose a fallback: either cap the thead height, or make it non-sticky below a breakpoint.
- **Compare bar position.** If Phase 4 makes the bar sticky at the bottom of the viewport, the same 2.4.11 risk applies to the cards under it.

---

## 6. Self-check

| Check | Result | Evidence |
|---|---|---|
| Badge states | 4 | §2.2 table: Checked, Stated, Unverified, Unknown. Unknown has two value presentations but is one state and one rule. |
| Font families | 2 | `--font-sans` and `--font-mono` (§1.2). The code scan's third-family check (§3.1) enforces it. |
| Hex location | `tokens.css` only | §1.1. The light block holds `var()` mappings only (§1.2). §3.1 scans everything else. The PAIR and EXEMPT lines are documentation, not CSS. |
| Space scale | `--space-1` to `--space-4`, all multiples of 8px | §1.2 and §1.6. `--space-half` was removed. |
| Accent use | One rule (`.button-primary`), two CTAs | §1.4 (ii) and §2.9. The scan in §3.1 restricts `--color-accent`. |
| Status tokens | `.badge` rules only | §2.1. The scan in §3.1 restricts `--color-status-`. |
| Token index | Complete | §1.3. Every token has a scope and its users. No unused tokens remain. |
| Literals outside tokens | Only those listed in §1.3 | §2.1 CSS. §3.1 magic-number scan. |
| Sub-16px text | One step (12.8px), badge label only | §1.5. |
| PAIR lines | 88 (44 per theme), all hex taken from §1.2 | §4. |
| Theme | Dark default; light only when the OS prefers light; no toggle | §1.1. |

---

## 7. Decisions applied (human, final)

1. **Accent.** The accent is an inverted neutral. Only the two CTAs use it, and a filled background means CTA only.
2. **Home card link.** It is a heading link ("Read the review: {name}", with " · {descriptor}" on the 8 duplicates), not a button. The duplicate-banner link is a plain link.
3. **Badge size.** The badge stays at 12.8px. Its token is renamed `--text-badge` and is used for the badge label only.
4. **Checked green.** Accepted. The sub-label is enforced on review pages and Compare for every state. The green never appears outside a badge, and there are no counts and no all-green summaries.
5. **Theme.** Dark is the default, with only the `prefers-color-scheme: light` fallback, written in full with `var()` mappings. The `[data-theme]` blocks are deleted and there is no toggle.
6. **Data viz.** None in v1. Adding a chart requires amending this document first.
7. **Banner and header.** The banner border stays at `--border-2`. The header has no padding-block, so its row is 44px plus a 1px rule.
8. **Badge and spacing.** `--space-half` and `--leading-xs` are removed. The badge has `padding-block: 0`, `--leading-base` line-height and a 3px border, so it is about 30px tall.

---

## 8. Open questions

**Resolved 2026-11-23.** The human delegated these to the main session's best judgment when moving to Phase 4. The proposals below are accepted as written, with these notes:
- H1: "Skip to main content" accepted.
- H2: the control labels accepted as proposed. No placeholder copy.
- H3: accepted as proposed. The Home empty state shows only the count, "Showing 0 of {total}", with Reset available. No new sentence is invented.
- H4: accepted. The Field status group lines are listings of field names, so they are exempt from the sub-label rule. Every value shown anywhere still carries its sub-label.
- H5: accepted: "Disclosure", "Footer", "Breadcrumb", "Compare {name}".

The original wording follows for the record.

- **H1. Skip-link copy.** The IA has no copy for it. Proposed: "Skip to main content". It needs approval before Phase 6.
- **H2. Visible label copy for the controls.** The IA names the controls but not their labels. Proposed:
  - "Search entries" (Home search)
  - "Category" (filter), with the option "All categories" followed by the six category titles
  - "Sort", with the options "A–Z" and "Z–A"
  - "Search terms" (glossary)
  - "Add an entry" (the Compare picker, which is IA copy)

  No placeholder copy is proposed. All of this needs approval.
- **H3. Home no-results.** The proposal shows only the "Showing 0 of {total}" count. Approve that, or supply a sentence.
- **H4. Sub-label exception.** Confirm that the Field status group lines (§2.2 and §2.3) are exempt from the "sub-label always renders" rule, because they are listings of field names, not values.
- **H5. ARIA label strings.** Approve "Disclosure", "Footer", "Breadcrumb" and "Compare {name}". The IA has no copy for them.

## 9. Conflicts

**Resolved 2026-11-23 (delegated judgment).** C1: the `tokens.css` and `styles.css` split is accepted, because it makes the hex scan enforceable; brief §4 allows a `styles.css` file. C2: accepted as a starting point. Phase 4 proves or changes the breakpoints and the sticky Compare header.

- **C1. File names.** Brief §4 names "`styles.css` or a `<style>` block". This spec splits the CSS into `tokens.css`, which holds every token and is the only file allowed to contain hex, and `styles.css`, which holds the components. That split makes the hex scan enforceable. The human should confirm the two-file split, or say which name to use.
- **C2. Architect judgments.** The 40em and 64em breakpoints and the sticky Compare `thead` are architect choices that Phase 4 may change.

---

## 10. Changes from the first draft

**Human decisions and editor items**

1. All human decisions in §7 are applied.
2. `--badge-style` was undefined. It is replaced by a base `.badge` rule and four per-state rules, written in full. The base rule falls back to Unknown, so a bad attribute never renders green.
3. Form controls are added (§2.8 and §2.1): text input, select and token-drawn checkbox. The checkbox gets `aria-label="Compare {name}"` in place of `aria-describedby`, plus a `forced-colors` fallback (my addition).
4. Every literal in component specs is now a token. Added `--underline-thickness`, `--underline-thickness-hover`, `--nav-current-thickness` and `--checkbox-inset`.
5. Unused tokens are deleted: `--space-5` to `--space-12`, `--space-half`, `--tracking-normal`, `--leading-xs` and `--text-xs`. `--gutter` is now used through `.wrap`, and `--measure` is used in prose. The token index is added (§1.3).
6. The broken "§2.10" cross-reference now points to §2.9 (details/summary).
7. The single forbidden list is replaced by a code scan and a content-word scan, each with an allow-list, and every hit gets human review (§3).
8. The card grid uses `minmax(min(var(--card-min), 100%), 1fr)`.
9. Compare is rebuilt as one `<tbody>` per field, with a `scope="rowgroup"` label row and per-table id prefixes so ids stay unique. The table is labelled by the H1 with `aria-labelledby`; there is no hidden caption.
10. The disclosure banner is a `<section aria-label="Disclosure">` instead of an `<aside>`.
11. Primitives are added: footer, breadcrumb, text-page prose, compare bar and skip link.
12. Layout arithmetic is moved to §5. C4 is dropped. The status line stays plain text.

**My own fixes on re-read**

13. **Catalog-notes label.** It is now plain text, not a badge. A badge there would have broken the "sub-label always" rule, and the Home count of about 170 Unverified badges assumes field badges only.
14. **details/summary.** The first draft set the summary to `display: flex`, which removes the native `::marker` it claimed to keep. It now keeps `display: list-item`.
15. **Disabled CTA.** The disabled primary-button state is removed, together with its PAIR line, because a filled background must mean CTA only. The "checkbox (accent-color text)" PAIR line is renamed "checkbox checked fill". Five PAIR lines are added per theme: link on raised, placeholder on page and on surface, and control border on page and on surface.
16. **Compare column widths.** Recomputed as about 114px (about 98px of content) for 3 entries and about 171px (about 155px) for 2, replacing 104 and 160.
17. **Visually hidden text.** No visually-hidden utility is defined. The skip link uses `clip-path: inset(100%)`, so it needs no magic numbers.
18. **Button visited colour.** Added `:visited` rules for both button classes, because `a:visited` would otherwise override the accent-text colour on link-buttons.
19. **Scan patterns.** Added `behavior: 'smooth'` (JavaScript smooth scrolling) to the code scan. The content scan now uses `recommend\w*` so that "recommendation" is caught too.

---

**Phase:** Phase 3, Design System.

**Approval needed before Phase 4 (Wireframes) can begin:**
- the editor's final check of this document;
- the human's approval of DESIGN_SYSTEM.md, with answers to H1 to H3 and C1.

I made no file edits. The inputs I read are:
- /tmp/claude-0/-home-user-web3-casino-reviews/d4f80b7d-848b-5119-af57-9f11521519dd/scratchpad/DESIGN_SYSTEM.proposal.md
- /home/user/web3-casino-reviews/DESIGN_BRIEF.md
- /home/user/web3-casino-reviews/IA_PROPOSAL.md