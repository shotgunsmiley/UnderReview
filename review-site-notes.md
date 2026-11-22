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
- *Superseded by Phase 1 audit and DESIGN_BRIEF.md Section 9: the redesign drops the single-file Tailwind-CDN approach and anchor-id navigation (separate `.html` files, plain CSS custom properties, path URLs). Kept below as history.*
- Keep: `#casino-directory-30` and other anchor ids, the single-file Tailwind-CDN + vanilla-JS approach, the 60-entry catalog, the 18+ notices and helpline links.

---

# Round 2: what the actual pages show (studied Nov 2026)

How this was gathered: I fetched and read the page text of these pages. Casino Guru's `/best-online-casinos` list page and AskGamblers' "how we rate" page returned HTTP 403, so for those two sites I only saw the pages listed below, not their individual review pages or live comparison tables. Visual layout (spacing, colours, interactions) was not inspected, only page structure and wording. Nothing here is copied; these are patterns to learn from.

## Bitcoin.com crypto casino list page (bitcoin.com/gambling/casino/) and "How We Rate"

Structure, top to bottom:
1. H1 plus a **disclosure box first** ("18+ only", operators may pay listing fees or share revenue, links may earn a commission, payment never sets rank, links to the editorial policy and How We Rate, "Check local laws. Gamble responsibly").
2. A byline block: **Last Updated** and **Published** dates, **Written by** and **Reviewed by** (named people with one-line credentials).
3. **On This Page** table of contents.
4. An opening paragraph that leads with the single rule that decides most outcomes (deposit turnover before withdrawal), so the page has a thesis.
5. "Top picks" row of short cards (name, score, one-sentence reason, Visit Site, Read our review).
6. **Compare table, ranked**: each row has logo, name, score out of 5, a "Best for" line, a "Watch out" line (dated warnings), and links.
7. Long per-casino reviews in the same order as the table: Overall score plus five sub-scores (Trust & Safety, Experience, Selection, Fees & Value, Support), a list of pros and cons, then small labelled fields: Operator, License (with number and expiry), Bonus, "Last verified" date.
8. A second comparison table on one decisive question ("What each site requires before it will pay you": deposit turnover, with the clause where it is published).
9. "How we rate" summary, then guide sections and FAQ-style explainers, then a "need a site review?" contact.

"How We Rate" page: sections for how they make money, vetting before listing, how every casino is evaluated (licence check against the regulator's register, the operator's own terms read in full, reputation analysis, platform assessment), a weighted criteria table (eight criteria, weights shown), a "what a 5 / 3 / 1 looks like" anchor table, how displayed ratings derive from the criteria, how reviews are kept current (a visible last-updated date changes only after a real re-check), removal triggers, content rules (named author plus a separate named fact-checker, every statistic traceable, KYC stated factually), and a corrections route. Changes to the policy are dated at the top.

## Casino Guru ("Our casino reviews" guide)

- Opens with a short overview before the detail ("you can get an overview without reading the complicated specifics"), with a table of contents.
- Explains what the main number measures: a **Safety Index** about fairness and likelihood of getting paid, deliberately not usability or game selection.
- Lists the inputs: casino size, player complaints, deductions for restrictive or unfair practices (low withdrawal or win limits, blacklists, unfair or hidden rules, bad support, fake games, no or fake licence), points for positive qualities, and related casinos.
- Explains data collection and update cadence (top-listed casinos are re-reviewed most often); the review team has its own "About us" page; the complaints centre is a main navigation item with sub-filters (opened, unresolved, resolved, rejected).
- Navigation offers many ready-made filters: mobile, crypto, live dealer, high roller, anonymous, licence (e.g. Malta), payment method.

## AskGamblers (online casinos list page)

- Hub of category chips (reviews, newest, video reviews, awarded, mobile, instant play), an "affiliate disclosure" link at the top, casinos by country, "Our picks" cards with a score out of 10, and a "Key takeaways" box that includes a warning not to mistake list order for ranking and to verify the licence number against the regulator's register.
- A short "How we review an online casino" section (ownership, licensing, security first; then registration, KYC, payments) and a "How to check a casino before you register" explainer (how to verify a licence, payments and withdrawals).
- Navigation includes Complaints, Community, Glossary and Deposit methods as first-class areas.

## Crypto-focused sites (99Bitcoins, CryptoGamble, CoinGambling, CryptoCasinos.com, CryptoCasinoRank, Crypto Casino Scan)

- **Method pages** are standard: what is checked, weights, and what a score means. Common crypto-specific checks: licence number against the register, coins and networks, KYC triggers (no-KYC treated as conditional), withdrawal speed (some measure it, some refuse to publish times until measured), provably fair verification, bonus wagering, country restrictions, responsible gambling tools, support.
- **CryptoCasinoRank** records the same fields for every casino (licence, coins, KYC, withdrawals, games, bonus terms, restricted countries), separates "stated by the casino" from "checked", adds a "So what" line to every criterion, has a review-vs-ranking table and an FAQ, and shows "18+ · T&Cs apply · Play responsibly" next to its top list.
- **Crypto Casino Scan** labels unknowns as "unknown", says affiliate links are labelled and rankings are not for sale, and shows a "site updated" date and an "evidence record" of facts, unknowns and conflicts.
- **CryptoGamble** refuses a score without a live test, says so, and states its own limitation (tests are not anonymous).
- **Network-fee note pattern** (CryptoNews): fees vary by asset and network; casino fee is separate from network fee.

## What they do well that we can do without breaking our rules

1. A **disclosure and byline strip** at the top of listing and review pages (dates, who, what money does and does not do).
2. A **methodology page** with a short "what we check" list, "stated vs checked" wording, how often entries are re-checked, a corrections route, and what unranked means.
3. A **standard review layout** with the same labelled fields for every casino: operator, licence (and number and expiry where verified), custody, coins and networks, KYC triggers, withdrawal terms, bonus terms, restricted countries, responsible-gambling tools, support, plus strengths and trade-offs, "Last verified" and "Sources".
4. A **comparison view** that puts the same fields side by side, plus one decisive question table (for example deposit turnover before withdrawal).
5. **Unknown is a value.** Show "Unknown" or "Not stated" instead of an empty field. Never turn "not stated" into "none" or "no limit".
6. An **FAQ** that answers real questions (what is provably fair, does no-KYC mean no ID checks, what does unranked mean, how do I verify a licence).
7. A short **"So what"** sentence per criterion so numbers and terms carry meaning.

## What they do that we must not copy

- Scores, stars, "best for" crowns, ranked orders and "top picks" (the directory is unranked by design).
- Visit-site affiliate buttons (none exist; if ever added they must be labelled).
- Claims that need live testing, deposits or named editorial staff that we do not have.
- Dated "last verified" values, licence numbers, expiry dates or withdrawal times that we have not checked ourselves from a source we actually read.

## Facts already confirmed from sources read in this session (for the verification step)

Only facts the researcher confirms from a primary source are added to the site. This list is filled in as the loop runs.
