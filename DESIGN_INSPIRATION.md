# Design inspiration: "The Glass Vault and the Company Safe"

Status: **proposal, nothing applied.** Source: the owner-supplied article (live at `/audit/`). Site name: UnderReview.io.

The article has a warm, editorial, print-like look. This file lists what could carry over to the whole site, and what each item would need. No CSS has changed.

## What the article does

| Element | Article | Site today |
|---|---|---|
| Background | Warm paper `#fbf9f5`, white cards `#ffffff` | Dark default, OS-light fallback (tokens) |
| Text | Near-black ink `#17181c`, soft grey `#4b4f58` | Token greys |
| Accent | Rust `#a8481c` on kickers, quotes, links | Accent only on two compare buttons |
| Fonts | Serif body (Iowan / Palatino / Georgia), sans for labels and tables | Two system families already (sans + mono) |
| Measure | 760px column, 18px body, line-height 1.72 | `--measure`, 16px body |
| Labels | Small uppercase kickers with wide letter-spacing | Plain headings |
| Structure | 1px hairline rules between sections, numbered steps, call-out boxes | Borders, `glance-panel` |
| Motion | Smooth scroll, colour fade on links only | Tokens, see CLAUDE.md |

## What could be adopted with no rule change

1. **Serif for article text** using system fonts only (second family swapped from mono to serif on text pages). Needs a font token. Proposal below.
2. **Narrower reading column and looser leading on text pages** (Guides, Methodology, Glossary, Audit), from existing `--measure`.
3. **Hairline rule between sections** using the existing border tokens.
4. **Uppercase kicker label** above page titles ("Part One", "Guide"), as one new token for letter-spacing.

## What needs your approval (rule conflicts)

| Change | Rule it touches |
|---|---|
| Warm paper as a light theme | Dark default, OS-light fallback. Could be the light palette only. |
| Rust accent colour | "Accent colour only on Go to comparison" and "Compare {name}". |
| Tinted call-out boxes (green, red, blue) | Badge colours must keep their meaning. Tints could be mistaken for status. |
| Gradient masthead | Retired look. Not recommended. |
| Score circles | Rule 1. Only `/audit/` has scores. Not recommended elsewhere. |

## Proposed tokens (new, not added)

```
--font-serif: Iowan Old Style, Palatino Linotype, Palatino, Georgia, serif;
--tracking-kicker: 0.17em;
```

Light theme palette candidates, to replace the current light values only if approved: paper `#fbf9f5`, surface `#ffffff`, rule `#e3ddd2`, ink `#17181c`, muted `#4b4f58`. Contrast would be re-checked with the script in DESIGN_SYSTEM.md section 4 before use.

## Decision needed

Pick one:

- **A. Text pages only:** serif and rules on Guides, Methodology, Glossary, Audit. Smallest change.
- **B. Whole site:** adopt the paper light theme, serif text, rules and kickers everywhere; keep dark as the default.
- **C. Leave as is.**
