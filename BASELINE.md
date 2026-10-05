# SEO baseline — tisrm.nl

Captured **2026-10-05T18:38:15.321Z** against production `https://tisrm.nl`. This file is a read-only
snapshot taken before any technical SEO work; the machine-readable twin is
[`seo-baseline.json`](./seo-baseline.json). No application code was changed to produce it.

## Stack and where metadata comes from

| Aspect | Value |
| --- | --- |
| Framework | Next.js 16.3.8 (App Router) with React 19.3.0, Chakra UI 3.37, TypeScript |
| Rendering | Statically prerendered at build time (SSG). All marketing routes appear in build/prerender-manifest.json and production responses carry x-nextjs-prerender: 1 with x-nextjs-cache: HIT. Served by nginx/1.24.0 (Ubuntu) in front of next start (cache-control: s-maxage=31536000). |
| Metadata | Root defaults in src/app/metadata.ts (consumed by src/app/layout.tsx) with title.template "%s \| TIS Risk Managers", metadataBase from pageInfo.url and alternates.canonical "/". Per-route metadata is exported from each route layout.tsx via src/lib/seo/buildPageMetadata.ts using the strings in src/lib/seo/pageMeta.ts. robots.txt from src/app/robots.ts, sitemap.xml from src/app/sitemap.ts (URL list from NAVIGATION_ROUTES in src/constants/app.ts, base URL from APP_CONFIG.url). JSON-LD is injected by src/components/seo/JsonLd.tsx using src/lib/seo/organizationSchema.ts, breadcrumbs.ts and pageFaqs.ts. |

Relevant files:

- `src/app/layout.tsx` + `src/app/metadata.ts` — root `<head>` defaults, `title.template` `"%s | TIS Risk Managers"`, `metadataBase`, `alternates.canonical: '/'`, default Open Graph and Twitter cards, `robots: { index: true, follow: true }` with Googlebot `max-image-preview: large`.
- `src/lib/seo/pageMeta.ts` — per-route title and description strings.
- `src/lib/seo/buildPageMetadata.ts` — helper each route `layout.tsx` uses to produce its `metadata` export.
- `src/lib/seo/organizationSchema.ts`, `breadcrumbs.ts`, `pageFaqs.ts` + `src/components/seo/JsonLd.tsx` — structured data injection.
- `src/app/sitemap.ts` — sitemap, URLs from `NAVIGATION_ROUTES`, base from `APP_CONFIG.url`, `lastmod` from `APP_CONFIG.contentUpdatedAt`.
- `src/app/robots.ts` — robots.txt.
- `next.config.mjs` — `redirects()` maps `/bestanden` and `/bestanden/` to `/downloads` (permanent). No `middleware.ts` exists.
- `nginx-config-example.conf` — example reverse-proxy config; production responses show `server: nginx/1.24.0 (Ubuntu)`.

Existing brand and contact data already in the repo (`src/constants/app.ts`), reported as-is:

- Name `TIS Risk Managers`, url `https://tisrm.nl`
- Phone `+31 20 636 8191`, email `info@tisrm.nl`
- Visiting address `Muiderstraat 1, 1011 PZ Amsterdam, Nederland`
- Postal address `Postbus 12887, 1100 AW Amsterdam`
- LinkedIn `https://www.linkedin.com/company/tisrm/` (used in the footer, contact block, and `sameAs` of the organization schema)
- GA measurement id `G-3HPHN1BV1Q`
- No KvK or AFM number exists in the repo; none was invented here.

Logo and social image:

- The header/footer logo is an **inline SVG** in `src/components/logo.tsx` (viewBox `0 0 3920 2120`). There is no standalone logo file under `public/`.
- `og:image` for every page is `https://tisrm.nl/1.webp`, declared as 1200x630 with alt `TIS Risk Managers`. That file is a photo, not the logo.
- `public/llms.txt` exists and is served (200).

## robots.txt and sitemap.xml

`https://tisrm.nl/robots.txt` → 200, `text/plain`. Allow-all for `*`, `Googlebot`, `Bingbot`,
`GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Claude-SearchBot`, `Claude-User`,
`anthropic-ai`. Sitemap reference `https://tisrm.nl/sitemap.xml`. The same file is also served on
the www host.

`https://tisrm.nl/sitemap.xml` → 200, `application/xml`, 10 URLs, every entry with
`lastmod 2026-10-05T00:00:00.000Z`. Home is listed as `https://tisrm.nl` without a trailing slash.

## Status, redirects, canonical, lang

| URL | Status | Final URL | Hops | `html lang` | Canonical | Robots meta |
| --- | --- | --- | --- | --- | --- | --- |
| `https://tisrm.nl/` | 200 | `https://tisrm.nl/` | 0 | nl | `https://tisrm.nl` | index, follow |
| `https://tisrm.nl/taxi` | 200 | `https://tisrm.nl/taxi` | 0 | nl | `https://tisrm.nl/taxi` | index, follow |
| `https://tisrm.nl/verzekeringen` | 200 | `https://tisrm.nl/verzekeringen` | 0 | nl | `https://tisrm.nl/verzekeringen` | index, follow |
| `https://tisrm.nl/verzekeringen/particulier` | 200 | `https://tisrm.nl/verzekeringen/particulier` | 0 | nl | `https://tisrm.nl/verzekeringen/particulier` | index, follow |
| `https://tisrm.nl/verzekeringen/zakelijk` | 200 | `https://tisrm.nl/verzekeringen/zakelijk` | 0 | nl | `https://tisrm.nl/verzekeringen/zakelijk` | index, follow |
| `https://tisrm.nl/risk-management` | 200 | `https://tisrm.nl/risk-management` | 0 | nl | `https://tisrm.nl/risk-management` | index, follow |
| `https://tisrm.nl/over-ons` | 200 | `https://tisrm.nl/over-ons` | 0 | nl | `https://tisrm.nl/over-ons` | index, follow |
| `https://tisrm.nl/contact` | 200 | `https://tisrm.nl/contact` | 0 | nl | `https://tisrm.nl/contact` | index, follow |
| `https://tisrm.nl/downloads` | 200 | `https://tisrm.nl/downloads` | 0 | nl | `https://tisrm.nl/downloads` | index, follow |
| `https://tisrm.nl/meld-schade` | 200 | `https://tisrm.nl/meld-schade` | 0 | nl | `https://tisrm.nl/meld-schade` | index, follow |
| `http://tisrm.nl` | 200 | `https://tisrm.nl/` | 1 | nl | `https://tisrm.nl` | index, follow |
| `http://www.tisrm.nl` | 200 | `https://www.tisrm.nl/` | 1 | nl | `https://tisrm.nl` | index, follow |
| `https://www.tisrm.nl` | 200 | `https://www.tisrm.nl` | 0 | nl | `https://tisrm.nl` | index, follow |

## Titles, descriptions, H1

| URL | Title (len) | Meta description len | H1 (count) |
| --- | --- | --- | --- |
| `/` | Onafhankelijk verzekeringsadvies Amsterdam \| TIS Risk Managers (62) | 156 | TIS Risk Managers — onafhankelijk verzekeringsadvies in Amsterdam (1) |
| `/taxi` | Taxi- en personenvervoer verzekeringen \| TIS Risk Managers (58) | 110 | Personenvervoer (1) |
| `/verzekeringen` | Verzekeringen \| TIS Risk Managers (33) | 118 | Verzekeringen (1) |
| `/verzekeringen/particulier` | Particuliere verzekeringen (26) | 119 | Particulier (1) |
| `/verzekeringen/zakelijk` | Zakelijke verzekeringen (23) | 123 | Zakelijk (1) |
| `/risk-management` | Risk management \| TIS Risk Managers (35) | 122 | Risk Management (1) |
| `/over-ons` | Over ons \| TIS Risk Managers (28) | 138 | Over ons (1) |
| `/contact` | Contact \| TIS Risk Managers (27) | 126 | Contact (1) |
| `/downloads` | Downloads \| TIS Risk Managers (29) | 120 | Downloads (1) |
| `/meld-schade` | Schade melden \| TIS Risk Managers (33) | 110 | Schade melden (1) |

## Open Graph and structured data

Twitter card tags mirror the Open Graph values on every page (`twitter:card summary_large_image`,
plus title, description and image). `og:site_name` is `TIS Risk Managers` and `og:locale` is
`nl_NL` everywhere.

| URL | og:title | og:description == meta description | og:url | og:type | og:image | JSON-LD types |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | Onafhankelijk verzekeringsadvies Amsterdam | yes | `https://tisrm.nl` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage, FAQPage |
| `/taxi` | Taxi- en personenvervoer verzekeringen | yes | `https://tisrm.nl/taxi` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage, Service, BreadcrumbList, FAQPage |
| `/verzekeringen` | Verzekeringen | yes | `https://tisrm.nl/verzekeringen` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage, Service, BreadcrumbList |
| `/verzekeringen/particulier` | Particuliere verzekeringen | yes | `https://tisrm.nl/verzekeringen/particulier` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage, Service, BreadcrumbList, FAQPage |
| `/verzekeringen/zakelijk` | Zakelijke verzekeringen | yes | `https://tisrm.nl/verzekeringen/zakelijk` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage, Service, BreadcrumbList, FAQPage |
| `/risk-management` | Risk management | yes | `https://tisrm.nl/risk-management` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage, Service, BreadcrumbList, FAQPage |
| `/over-ons` | Over ons | yes | `https://tisrm.nl/over-ons` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage |
| `/contact` | Contact | yes | `https://tisrm.nl/contact` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage |
| `/downloads` | Downloads | yes | `https://tisrm.nl/downloads` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage |
| `/meld-schade` | Schade melden | yes | `https://tisrm.nl/meld-schade` | website | `https://tisrm.nl/1.webp` | InsuranceAgency, LocalBusiness, WebSite, WebPage |

Every crawled page carries JSON-LD. `InsuranceAgency`, `LocalBusiness`, `WebSite` and `WebPage`
are global; `Service` and `BreadcrumbList` appear on the service pages; `FAQPage` appears on
home, `/taxi`, `/verzekeringen/particulier`, `/verzekeringen/zakelijk` and `/risk-management`.
`/verzekeringen`, `/over-ons`, `/contact`, `/downloads` and `/meld-schade` have no `FAQPage`.

## Visible body hashes

sha256 over the body HTML after removing `script`, `style`, `noscript` and `template`
nodes, stripping remaining tags, and collapsing whitespace (same algorithm as
`scripts/seo-check.mjs`). Use these to prove later SEO work did not change rendered copy.
Hashes below were re-aligned to that algorithm so local and production crawls compare
apples-to-apples; lengths differ slightly from the original DOM `textContent` capture.

| URL | Visible body hash | Visible body chars |
| --- | --- | --- |
| `https://tisrm.nl/` | `sha256:ed831fff1ba83eefa4324dd6e46bc38b1510e24302f0381cd214f3556fff2845` | 3226 |
| `https://tisrm.nl/taxi` | `sha256:4118d997c7a92f4d35867f2482ab2349971f36b5249c7c5e9a1ea1f409ebd531` | 2729 |
| `https://tisrm.nl/verzekeringen` | `sha256:0b77390bd70a8df73342f98741a47185d309746bc50bce333ee6a454ad475521` | 1631 |
| `https://tisrm.nl/verzekeringen/particulier` | `sha256:4666eeb91e0e4eac9e8f85f555b8cf9adac04ee52ea17476a051704e006baa00` | 2391 |
| `https://tisrm.nl/verzekeringen/zakelijk` | `sha256:693bbd3ed1f42d3669d666f8fbc1068c060bce4a1905e2b1742b8da223c0d7c3` | 2936 |
| `https://tisrm.nl/risk-management` | `sha256:51681789f21d0f497b61f01bdc877fa97d3e3f0f7120c595342376cb383d1212` | 2677 |
| `https://tisrm.nl/over-ons` | `sha256:094ff80970a08e8eb2c135951526c0d2908d02b099fbf6e1afc340950457e53b` | 1879 |
| `https://tisrm.nl/contact` | `sha256:27038a80cca7ecfd23492c3fb4fe635d8b67647d8af46a3551d87b44c1fbbede` | 943 |
| `https://tisrm.nl/downloads` | `sha256:7fd1b795f204c8acdc125e103d56c539fd1ce99734325693adf4f145e5c85291` | 975 |
| `https://tisrm.nl/meld-schade` | `sha256:ee30ec967102165f7dd2a862fb3e98e745e9e8a785739b161e2bdd3a16f78fb9` | 842 |
| `http://tisrm.nl` | `sha256:ed831fff1ba83eefa4324dd6e46bc38b1510e24302f0381cd214f3556fff2845` | 3226 |
| `http://www.tisrm.nl` | `sha256:ed831fff1ba83eefa4324dd6e46bc38b1510e24302f0381cd214f3556fff2845` | 3226 |
| `https://www.tisrm.nl` | `sha256:ed831fff1ba83eefa4324dd6e46bc38b1510e24302f0381cd214f3556fff2845` | 3226 |


The three host variants and `https://tisrm.nl/` all produce the same hash
`sha256:c4315c14d64d54a0967c953af6ca767b86ce0bb51c3714b416a4f655978268c2` and the same ETag, confirming identical content across hosts.

## Routes that exist but are not in the sitemap

| URL | Status | Final URL | Hops | Note |
| --- | --- | --- | --- | --- |
| `https://tisrm.nl/offerte` | 200 | `https://tisrm.nl/offerte/stap-1` | 1 (307) | Indexable, absent from sitemap. 307 comes from `redirect()` in `src/app/offerte/page.tsx` |
| `https://tisrm.nl/offerte/stap-1` | 200 | — | 0 | `robots: index, follow`, canonical `https://tisrm.nl/offerte` |
| `https://tisrm.nl/offerte/stap-2` | 200 | — | 0 | Same title, description and canonical as stap-1 |
| `https://tisrm.nl/offerte/stap-3` | 200 | — | 0 | Same title, description and canonical as stap-1 |
| `https://tisrm.nl/bestanden` | 200 | `https://tisrm.nl/downloads` | 1 (308) | Permanent redirect, configured twice (`next.config.mjs` **and** `permanentRedirect('/downloads')` in `src/app/bestanden/page.tsx`); correctly excluded from the sitemap |

All four quote URLs serve `title "Offerte aanvragen | TIS Risk Managers"`, the description
`Vraag een vrijblijvende offerte aan bij TIS Risk Managers voor uw verzekeringen.`, `robots: index,
follow`, and canonical `https://tisrm.nl/offerte`, because all three steps inherit the single
`metadata` export in `src/app/offerte/layout.tsx`. That is three indexable URLs sharing one
canonical that itself redirects.

`public/llms.txt` line 40 describes this flow as `(noindex conversiestappen)`, but nothing in
`src/lib/seo/pageMeta.ts` sets `noIndex` and production serves `index, follow`. The documentation
and the actual behaviour disagree.

## Hosting, host rules, and response headers

`nginx-config-example.conf` **does** declare the redirects you would want: `return 301
https://tisrm.nl$request_uri` for `www.tisrm.nl` (lines 5–12) and for apex http (lines 17–25).
Production does not behave that way — http redirects are **302**, and `https://www.tisrm.nl`
answers **200** with no redirect. So the deployed nginx differs from the committed example, or the
www vhost is not served by it. Worth resolving before any redirect work, since the repo file is
not a reliable picture of production.

Production responses carry **none** of `strict-transport-security`,
`content-security-policy`, `x-frame-options`, `referrer-policy`, `permissions-policy`, or
`x-content-type-options`.

The example config also lists `mail.tisrm.nl`, `webmail.tisrm.nl` and `admin.tisrm.nl` in its
`server_name` directives. `https://mail.tisrm.nl/` refuses connections, so it is not a live
duplicate-content host.

Base URL config: `https://tisrm.nl` is hardcoded in `APP_CONFIG.url` (`src/constants/app.ts`) and
drives `sitemap.ts`, `robots.ts` and `metadataBase`; it is not environment-driven. `.env.local`
defines `DATABASE_URL`, `PAYLOAD_SECRET` and `NEXT_PUBLIC_SERVER_URL`, the last of which is unused
in application code, while `NEXT_PUBLIC_API_URL` is referenced in `src/lib/utils.ts` but absent
from `.env.local`. No search-console verification tokens are set in metadata.

## 404 behaviour

Probe `https://tisrm.nl/deze-pagina-bestaat-niet-seo-probe` returns a real **404**. Its head
contains **two conflicting robots metas** (`noindex` and `index, follow`), a canonical pointing at
`https://tisrm.nl`, the homepage title, and an English `<h1>` `404 - Page Not Found` on an
`lang="nl"` site.

## Observations (recorded, not fixed)

1. **www is not redirected.** `https://www.tisrm.nl` answers 200 with byte-identical content and
   the same ETag as the non-www host. Host consolidation currently relies only on the canonical tag.
2. **http → https uses 302, not 301.** Both `http://tisrm.nl` and `http://www.tisrm.nl` return a
   temporary redirect, and the www variant stays on www instead of landing on the canonical host.
3. **Home canonical lacks the trailing slash** (`https://tisrm.nl` vs the served `https://tisrm.nl/`).
   The sitemap uses the same slash-less form, so the two are at least consistent.
4. **Two titles miss the brand suffix.** `/verzekeringen/particulier` → `Particuliere verzekeringen`
   and `/verzekeringen/zakelijk` → `Zakelijke verzekeringen`, while every other route ends in
   `| TIS Risk Managers`.
5. **The quote flow has one canonical for four indexable URLs**, and that canonical (`/offerte`)
   307-redirects back to `/offerte/stap-1`. All three steps share an identical title and description.
6. **`/offerte*` is indexable but not in the sitemap**, and `public/llms.txt` wrongly documents it
   as noindex.
7. **404 page sends mixed signals** (see above): duplicate robots metas, homepage canonical, English H1.
8. **`og:image` is a photo, not a branded social card**, and the same image is reused on all pages.
9. **All sitemap `lastmod` values are identical** because they come from a single
   `APP_CONFIG.contentUpdatedAt` constant.
10. No `hreflang`/`alternates.languages` are declared; the site is single-language `nl`, so this is
    informational only.
11. **The committed nginx example does not match production** — it specifies 301s for www and http
    that production does not perform. Treat production behaviour, not the repo file, as the truth.
12. **No security or caching response headers** (HSTS, CSP, X-Frame-Options, Referrer-Policy,
    Permissions-Policy, X-Content-Type-Options) are sent.
13. **`/bestanden` is redirected twice over** — once in `next.config.mjs` and once via
    `permanentRedirect()` in the route itself. Harmless today, but two places to keep in sync.

Page-specific notes captured in the JSON:

- `https://tisrm.nl/` — Canonical is https://tisrm.nl (no trailing slash) while the served URL is https://tisrm.nl/.
- `https://tisrm.nl/verzekeringen/particulier` — Title has no "| TIS Risk Managers" brand suffix, unlike the other routes.
- `https://tisrm.nl/verzekeringen/zakelijk` — Title has no "| TIS Risk Managers" brand suffix, unlike the other routes.
- `http://tisrm.nl` — http -> https uses 302 (temporary) instead of 301. No www normalisation applied.
- `http://www.tisrm.nl` — http -> https uses 302 and stays on the www host; no redirect to the canonical non-www host.
- `https://www.tisrm.nl` — Serves 200 on the www host with identical body (same ETag/body hash as non-www). Duplicate host is only mitigated by the canonical tag, there is no 301 to https://tisrm.nl.

## Scope confirmation

Nothing beyond this file and `seo-baseline.json` was added or modified. No code, metadata,
redirect, sitemap, robots, content, layout, or URL changes were made. No commits, pushes, or branch
switches. No translation JSON was touched. No business data (KvK, AFM, opening hours) was invented.
