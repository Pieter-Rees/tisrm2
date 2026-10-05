# SEO changes — tisrm.nl

Technical SEO work completed against baseline
[`BASELINE.md`](./BASELINE.md) / [`seo-baseline.json`](./seo-baseline.json).
No visible body copy, headings, navigation labels, layout or design was changed.
`/taxi` remains the canonical taxi URL. No commits were pushed or merged.

## 1. Changes per commit

### Commit 1 — `f673fda` — structured data

`seo: make organization entity match the published facts`

| Field | Old | New |
| --- | --- | --- |
| Organization `@type` | `InsuranceAgency` (+ redundant `LocalBusiness`) | `InsuranceAgency` only |
| `logo` | `https://tisrm.nl/1.webp` (photo) | `https://tisrm.nl/logo.svg` (exported from the same SVG paths as the header logo; UI unchanged) |
| `knowsAbout` | missing | `Taxiverzekering`, `Personenvervoer verzekering`, `Zakelijke verzekeringen`, `Particuliere verzekeringen`, `Risk management` |
| `parentOrganization` | missing | `{ "@type": "Organization", "name": "ENTO Groep" }` (stated on `/over-ons`) |
| `/taxi` Service `name` / `serviceType` | page-style heading | `Taxiverzekering` |
| BreadcrumbList | missing on `/over-ons`, `/contact`, `/downloads`, `/meld-schade` | present on all sub-pages |

Sitewide `WebSite` (`@id` `https://tisrm.nl/#website`, `inLanguage` `nl-NL`, publisher → organization) was already present and kept.

### Commit 2 — `cc78dc0` — technical fixes

`seo: consolidate hosts, keyword URLs and sitemap freshness`

| Change | Old | New |
| --- | --- | --- |
| `/taxiverzekering` | 404 | permanent redirect → `/taxi` (Next emits **308**; search engines treat as permanent) |
| `/taxi-verzekering` | 404 | permanent redirect → `/taxi` (308) |
| `www.tisrm.nl` (app safety net) | served 200 when traffic reached the app | redirect to `https://tisrm.nl/:path*` in one hop |
| Sitemap `lastmod` | one shared `APP_CONFIG.contentUpdatedAt` for every URL | per-route mtime of files under `src/app/<route>` |
| Testimonial portrait (`talker`) | `priority` (competed with LCP) | `loading="lazy"` |

Already correct before this work (verified, not changed):

- `<html lang="nl">`
- Self-referencing absolute canonicals + matching `og:url`
- `robots.txt` allow-all + sitemap reference
- Image alts / width / height on marketing images (no missing alts that needed stuffing)

**Nginx (manual):** production still answered `https://www.tisrm.nl` with 200 and used **302** for http→https at capture time. `nginx-config-example.conf` already documents the correct single-hop **301** apex rules. Deploy that (or equivalent) on the server so www/http never reach the app. The Next.js www redirect is only a safety net.

### Commit 3 — `40707f6` — titles and meta

`seo: tighten titles and meta without touching page copy`

| URL | Field | Old | New |
| --- | --- | --- | --- |
| `/` | title | `Onafhankelijk verzekeringsadvies Amsterdam \| TIS Risk Managers` (62) | `Verzekeringsadvies Amsterdam \| TIS Risk Managers` (48) |
| `/` | og:title | `Onafhankelijk verzekeringsadvies Amsterdam` | `Verzekeringsadvies Amsterdam \| TIS Risk Managers` |
| `/taxi` | title | `Taxi- en personenvervoer verzekeringen \| TIS Risk Managers` | `Taxiverzekering & personenvervoer verzekering \| TIS Risk Managers` |
| `/taxi` | meta description | `Specialistische taxi- en personenvervoer verzekeringen. TIS Risk Managers kent de risico’s van de taxibranche.` | `Taxiverzekering voor taxibedrijven en chauffeurs: aansprakelijkheid, inzittendenverzekering en TX Keurmerk-dekkingen. Onafhankelijk advies uit Amsterdam.` |
| `/taxi` | og:title / og:description | matched old title/description (unbranded og:title) | match new title/description |
| `/verzekeringen/particulier` | title | `Particuliere verzekeringen` (no brand) | `Particuliere verzekeringen \| TIS Risk Managers` |
| `/verzekeringen/zakelijk` | title | `Zakelijke verzekeringen` (no brand) | `Zakelijke verzekeringen \| TIS Risk Managers` |
| All routes via `buildPageMetadata` | og:title | often unbranded | branded absolute title (root `title.template` does not reach nested layouts) |

**Left untouched (already good Dutch, within limits):**

- `/contact` title `Contact | TIS Risk Managers` and its description
- `/verzekeringen`, `/risk-management`, `/over-ons`, `/downloads`, `/meld-schade` titles/descriptions (aside from branded og:title via the helper)

### Commit 4 — regression tooling

`seo: add baseline regression check`

- `scripts/seo-check.mjs` + npm script `seo:check`
- Compares crawl results to `seo-baseline.json`
- Fails on body-hash / H1 / nav changes, bad status, redirect chains, missing canonical/title/H1, `noindex`, invalid JSON-LD
- Accepts permanent keyword redirects (301/308) in one hop
- Writes `AFTER_CHECK.md`
- Baseline body hashes re-aligned to the same strip-tags algorithm the checker uses (documented in `BASELINE.md`) so local vs production compares cleanly

## 2. `seo:check` result

Local preview (`SEO_CHECK_BASE_URL=http://localhost:3011`):

**PASS** — 0/13 page failures, 0/2 keyword redirect failures.

See [`AFTER_CHECK.md`](./AFTER_CHECK.md). Host variants are skipped against non-production bases; re-run against `https://tisrm.nl` after deploy.

## 3. Missing data to provide

| Item | Status |
| --- | --- |
| AFM number | Not on the site / not in the repo — omitted from schema |
| KvK number | Not on the site / not in the repo — omitted from schema |
| Kifid membership number | Footer shows Kifid logo only — no number to publish |
| LinkedIn URL | Verified: `https://www.linkedin.com/company/tisrm/` |
| Opening hours | Not published — omitted |
| Dedicated social share image | Still `/1.webp` (photo) on every page — optional later |

## 4. Manual steps after deployment

1. Export Google Search Console Performance (pages + queries, last 3 months) **before** deploy.
2. Deploy commits 1–2 first (structured data + technical). Wait ~2 weeks.
3. Deploy commit 3 (titles/meta) separately so effects can be measured.
4. Apply nginx apex rules from `nginx-config-example.conf` (www + http → `https://tisrm.nl` in **one 301 hop**).
5. Run `SEO_CHECK_BASE_URL=https://tisrm.nl npm run seo:check`.
6. Test `/`, `/taxi` and `/contact` in [Rich Results Test](https://search.google.com/test/rich-results) and PageSpeed Insights (mobile).
7. In GSC: submit sitemap, request indexing for `/taxi`.
8. Compare clicks and positions after 4–6 weeks. If important queries are clearly worse, revert commit 3 only (fully reversible).

## 5. Optional later improvements (visible content — do not implement now)

- H1 on `/taxi`: `Personenvervoer` → `Taxiverzekering & personenvervoer`
- Nav label `Taxi` → `Taxiverzekering`
- AFM / KvK in the footer once you supply the numbers
- More dedicated taxi content and a branded OG image
- Fix 404 page English H1 and conflicting robots metas (Next root metadata vs automatic noindex) — H1 change is visible, so deferred
- `public/llms.txt` already exists; original plan said not to add one — leave as-is unless you want it removed in a separate decision
