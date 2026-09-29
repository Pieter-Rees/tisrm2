# Design: Self-hosted Payload CMS admin for website content

**Date:** 2026-09-29  
**Status:** Draft for review  
**Stack:** Next.js 16 (`tisrm2`) + Payload CMS 3 + Postgres in Docker  
**Out of scope repo:** `tis-risk-managers-backend` (forms only — unchanged)

## Goal

Let one editor change website text, form labels/validation messages, and (later) images/PDFs and page sections via a simple admin panel, with changes live without rebuilding Docker images.

## Decisions (approved)

| Decision | Choice |
|---|---|
| Hosting | Self-hosted in Docker, aligned with existing compose |
| CMS | Payload CMS 3 (MIT) inside `tisrm2` |
| DB | Dedicated Postgres container + volumes |
| Forms API | Stay in existing Express backend |
| Live updates | Publish in admin → public site reads published content at request time |
| Scope order | Phase 0 → 1 (text) → 2 (media) → 3 (pages/sections) |
| Spacing / Chakra tokens | Stay in code (`src/constants`, theme) — not CMS fields |
| Form validation rules | Stay in code (min length, regex) |
| Form labels / messages | Editable in CMS |

## Architecture

```
Editor → /admin (Payload Admin in tisrm2)
              ↓
       Payload Local API + Postgres
              ↓
Docker:
  frontend  → Next.js public site + Payload admin/API
  postgres  → content + media metadata
  media vol → uploaded files
  backend   → offerte / schade (unchanged)
```

- Content source of truth: Payload + Postgres (not git).
- Public pages use existing Chakra layouts/components; they consume CMS strings and media URLs.
- Auth: Payload users. First account created at `/admin` is the editor (Administrator).
- Do not use `NEXT_EXPORT` / static export for CMS-backed production — Node server must fetch live content.
- Dockerfile: bump Node **18 → 20.9+** (Payload requirement). Wrap `next.config.mjs` with `withPayload`. Prefer `output: 'standalone'` for production Docker builds when Payload is integrated.

## Content model

### Collections / globals

| Name | Type | Phase | Purpose |
|---|---|---|---|
| `users` | collection | 0 | Payload auth; one editor admin |
| `media` | collection | 0 / 2 | Images and PDFs |
| `siteSettings` | global | 1 | Company name, phone, email, address, nav labels |
| `pages` | collection | 1 → 3 | One document per public URL (`slug`) |
| `formCopy` | global | 1 | Grouped fields for offerte + meld-schade: labels, placeholders, helper text, validation **messages** |

### `pages` fields

**Phase 1:** `title`, `slug`, structured text / rich text matching current hardcoded paragraphs (home, over-ons, verzekeringen + subpages, taxi, risk-management, contact CTAs, etc.).

**Phase 2:** image/file relationships to `media` (hero, team, download list).

**Phase 3:** `sections` array of blocks: `paragraph`, `list`, `cta`, `image`, `cards`, `downloads` — reorderable; each block maps to an existing Chakra component.

### Explicitly not in CMS

- Chakra spacing / typography / layout tokens  
- Validation rule numbers and regexes  
- GTM / analytics IDs  
- Form POST endpoints and mail logic  

## Data flow

1. Editor signs in at `/admin`, edits content, publishes.
2. Payload persists to Postgres; uploads go to the media volume.
3. Public routes load published docs via Payload Local API (same Node process).
4. Components keep using Chakra + existing spacing constants; props are CMS strings/URLs only.
5. Forms still POST to the existing backend; only visible copy comes from `formCopy`.

Drafts are admin-only; the public site always reads published documents.

## Error handling

- Missing page slug: log server-side; render existing layout with empty/minimal copy (no white screen). After Phase 1 migration, every public route has a seeded `pages` document.
- Payload / DB unavailable: controlled error UI for public pages; compose waits on Postgres healthcheck before starting frontend.
- Media missing: omit image or keep current `/public` asset for that slot; do not crash the page.
- Admin auth failures: Payload default login errors.
- Upload failures: Payload validation (file type/size); surface clear Dutch message in admin.

## Testing

- Unit: helpers that map Payload docs → page props; `formCopy` message lookup.
- Integration (where feasible): Local API fetch for a seeded page slug.
- Manual: editor login → edit → publish → refresh public page without rebuild.
- Regression: offerte / meld-schade still POST to backend; Chakra spacing unchanged.
- Docker: compose up → `/admin` reachable → Postgres volume persists across restart.

## Phased delivery

### Phase 0 — Foundation

- Install Payload + `@payloadcms/db-postgres` + Lexical + sharp as needed.
- Route groups: `(frontend)` for site, `(payload)` for admin/API.
- `payload.config.ts`, secrets via env.
- Compose: `postgres`, volumes, env (`DATABASE_URL`, `PAYLOAD_SECRET`).
- Node 20 in Dockerfile; `withPayload` in Next config.
- Seed empty collections; create first admin user.

### Phase 1 — Text (A) + form copy

- Migrate page copy from TSX / `src/data/content.ts` into `pages` + `siteSettings`.
- Migrate form labels/placeholders/validation messages into `formCopy`.
- Wire public pages and forms to read from Payload.
- Editor workflow: list pages → edit → publish → live.

### Phase 2 — Media (B)

- Enable `media` uploads (images + PDFs).
- Wire heroes, team photo, downloads list.
- Persist media volume across container restarts.

### Phase 3 — Sections / pages (C)

- Replace flat page fields with block `sections` where needed.
- Map blocks → existing components.
- Optional: create new pages from template (slug + blocks).

## Docker compose shape (target)

```yaml
services:
  frontend:   # tisrm2 — site + /admin
  postgres:   # Payload DB
  backend:    # existing forms API — unchanged
volumes:
  payload_pgdata:
  payload_media:
```

## Risks / constraints

- Payload Next version peer range must match installed `next` (^16.3.x; Payload docs require supported 16.x ranges — verify at install time).
- Integrating Payload requires restructuring `src/app` into route groups — plan carefully to avoid breaking existing pages/tests.
- Public datasets / draft privacy handled by Payload auth; do not expose draft preview without auth.
- Media on local disk needs a named volume (or later S3-compatible storage).

## Success criteria

- Editor can change homepage and over-ons text and see it live without redeploy.
- Editor can change a form validation message without a developer.
- Spacing/layout still driven by Chakra constants in code.
- Offerte / schade forms still work against the existing backend.
- All of the above runs via Docker Compose.
