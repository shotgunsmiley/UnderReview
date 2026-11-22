# Notes on other casino review sites

Research notes only (not part of the site). Based on what the sites and third-party write-ups publish, gathered Nov 2026. Claims about other sites are as reported by those sources and were not independently tested.

## What they do well

- **Say what the score means.** Casino Guru states its Safety Index is about fairness and likelihood of smooth withdrawals, and ties complaint outcomes to score changes. AskGamblers publishes the weights behind its CasinoRank.
- **Show their work.** Bitcoin.com's "How We Rate" page lists criteria, weights and content rules: a named author and a separate named fact-checker, every statistic traceable to a source, and KYC requirements stated factually.
- **Disclose money at the top, next to the content.** Bitcoin.com opens review pages with a box covering 18+, how operators can pay for listings, a statement that payment does not set scores, a free help line, and "Last updated" / "Published" dates. Guidance in the trade press says a disclosure should sit close to the comparison it concerns, in plain language.
- **Date things and mark gaps.** One methodology page records the domain reviewed and the date checked, and says "not stated" must never be turned into "no limit".
- **Complaint archives and community feedback.** AskGamblers and Casino Guru publish dispute histories; AskGamblers adds player reviews beside expert ones.
- **Comparison tables that work on phones.** Advice for the sector: sortable table on desktop, one card per row on mobile with the same fields in the same order, every row dated.
- **Safer-gambling content placed where people see it.** Bournemouth University / GambleAware research recommends prominent, working links, not only footer text, and safer-gambling content near the top on mobile. Others add: licence details, the 18+ notice and the complaints route visible in the footer.
- **Sources.** Evidence of independent checks and an easy way to report errors ("Suggest an edit").

## What they do badly (or what to avoid)

- **Opaque inputs.** Casino Guru's revenue estimates and complaint-validity calls are hard to check; AskGamblers' sub-scores are largely internal.
- **One number that hides trade-offs.** A safety-only index can understate a casino strong elsewhere; community scores can reflect short-term sentiment.
- **Commercial conflicts.** Every site is paid by the industry it reviews; the ones to trust say so plainly. Ordering driven by commercial terms is rarely written down.
- **Uniformly glowing reviews, no ownership or "About" information.** Listed as red flags for independence.
- **Disclosure far from the content, or generic.** A "may earn a commission" line elsewhere on the site leaves the relevant recommendation ambiguous.
- **Copying operator marketing and mimicking operator branding.** Design should make comparison easier to read, not blur review and advertising.
- **Safer-gambling text that is boring, text-heavy or in a footer only; repetitive pop-ups that cause fatigue.**
- **Dense tables with numbers that need a sentence of context** (for example, what a given wagering figure means).

## What this suggests for our site (within CLAUDE.md rules)

- Unranked stays: no scores, stars or leaderboards.
- Never invent facts: where something is unverified or has no date, say so.
- Put the 18+ / responsible-gambling notice where it is seen on every page, not only in one section; keep helpline links.
- Explain what the directory is and is not, near the top of it, in plain language.
- Say what the site's own claims are based on and when they were last checked (honestly, including "not yet verified").
- Make the directory easier to scan and navigate, especially on phones; add context sentences where a bare term or number needs one.
- Label any affiliate link as one (none exist today).

---

# Premium template inspiration (design upgrade)

Sources: public listings and demos of directory/listing templates (MyListing on ThemeForest, Directify's template gallery, Webflow/Framer directory template roundups) and 2026 web-design trend write-ups. I read marketing pages and one demo's page text; the paid demos were not opened or inspected in full. These are patterns to learn from, not designs to copy: no template code, text or assets are reused.

## What premium directory templates do

- **Explore page = filters + results + status.** A filter panel (category, custom-field filters), a "Showing X out of Y results" line, a visible Reset Filters, and "Load more" instead of endless dumps.
- **View switching.** List / grid (and map) toggles; one template family ("Compact") is a dense list view that fits the most entries on screen, another ("Modern") groups curated homepage sections by category.
- **Card anatomy with quick actions.** Each card has a category link, key facts and quick actions: Quick view, Bookmark, Add to comparison. A "Compare items (n)" tray appears once something is selected.
- **Listing detail with tabs/blocks, related listings and breadcrumbs.** Structured sections instead of one long wall of text.
- **Dark-first "glassy" look** (Directify "Stellar") and **bold gradient-friendly layouts with strong category art** ("Aurora") for premium brands.
- **Filters that really work, CMS-style consistent entries,** and clean category structure that can grow.

## 2026 design guidance worth applying

- **Type leads.** Large, confident headlines; readable body: 16px or larger, line-height about 1.5 or more, line length roughly 50-75 characters.
- **One accent colour on near-black.** Keeps a dark design coherent; grey text on near-black often fails contrast, so keep body text pale and give it weight; thin type looks thinner on dark.
- **Bento only where tiles mean something.** Cell size should signal importance; do not split a long explanation into cards; keep DOM order equal to reading order so Tab order and screen readers match what people see; test down to 320px width.
- **Calm, purposeful motion.** Feedback on buttons and panels is good; scroll-jacking, long entrance animations, carousels and custom cursors cost conversions and speed. Respect reduced-motion settings.
- **Dark mode is a choice, not a costume.** Check contrast; sites that read a lot should keep reading areas calm.
- **Accessible by default.** Visible focus states, tap targets, keyboard reachability for anything revealed on hover.

## Constraints from CLAUDE.md that shape the redesign

- Unranked directory: no stars, scores, "top pick" badges or leaderboards, even though many templates have star ratings and promoted/featured slots.
- No invented facts or "verified" badges; keep the unverified status labels.
- Keep: `#casino-directory-30` and other anchor ids, the single-file Tailwind-CDN + vanilla-JS approach, the 60-entry catalog, the 18+ notices and helpline links.
