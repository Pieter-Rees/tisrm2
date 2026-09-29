# Payload CMS Phase 0–1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Self-host Payload in `tisrm2` with Postgres in Docker so an editor can publish page text and form labels/validation messages live at `/admin` without rebuilding images.

**Architecture:** Payload 3 runs inside the existing Next.js app (`/admin` + Local API). Public routes move under `src/app/(frontend)/`. Content lives in Postgres; Chakra spacing tokens stay in code. Forms still POST to `tis-risk-managers-backend`.

**Tech Stack:** Next.js 16.3.x, Payload 3.90.x, `@payloadcms/db-postgres`, `@payloadcms/richtext-lexical`, Docker Compose, Jest, Chakra UI 3 (layout tokens unchanged).

**Spec:** `docs/superpowers/specs/2026-09-29-payload-cms-admin-design.md`

**Out of this plan:** Phase 2 (media wiring on pages) and Phase 3 (section blocks / new pages) — separate plans after this ships. `media` collection is created empty in Phase 0 for forward compatibility only.

## Global Constraints

- Self-hosted Payload in `tisrm2` only — do not modify `tis-risk-managers-backend`
- Node for Payload/Docker: match `package.json` `engines.node` (`>=26`) — use `node:26-alpine` in Dockerfile
- Payload `@payloadcms/next@3.90.2` peer: `next >=16.3.3 <17` (current `^16.3.7` OK)
- CamelCase for new identifiers (`getPageBySlug`, `formCopy`, `siteSettings`)
- Chakra spacing/typography tokens remain in `src/constants` — not CMS fields
- Validation **rules** (min length, regex) stay in code; only **messages** in CMS
- No `NEXT_EXPORT` / static export for CMS-backed production
- Do **not** git commit unless the user explicitly asks
- Do **not** modify translation files
- Do **not** switch git branches

## File structure (target)

```
src/
  payload.config.ts
  payload/
    collections/
      users.ts
      media.ts
      pages.ts
    globals/
      siteSettings.ts
      formCopy.ts
    access/
      anyone.ts
      authenticated.ts
  lib/
    payload/
      getPayloadClient.ts
      getPageBySlug.ts
      getSiteSettings.ts
      getFormCopy.ts
  app/
    (frontend)/          # all current public routes move here
      layout.tsx         # current root layout content (Header/Footer)
      page.tsx
      ...
    (payload)/           # Payload-generated admin/API routes — do not hand-edit logic
      layout.tsx
      custom.css
      admin/[[...segments]]/page.tsx
      api/[...slug]/route.ts
      ...
docker-compose.yml       # + postgres + volumes + env
Dockerfile               # node:26-alpine, standalone-ready
.env.example             # DATABASE_URL, PAYLOAD_SECRET
```

---

### Task 1: Install Payload packages and env skeleton

**Files:**
- Modify: `package.json`
- Create: `.env.example`
- Create: `.env.local` (gitignored; local only)
- Modify: `.gitignore` (ensure `.env.local`, `media` upload dir ignored if not already)

**Interfaces:**
- Consumes: none
- Produces: deps installed; env var names `DATABASE_URL`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SERVER_URL`

- [ ] **Step 1: Install packages**

Run (from repo root):

```bash
npm install payload@3.90.2 @payloadcms/next@3.90.2 @payloadcms/db-postgres@3.90.2 @payloadcms/richtext-lexical@3.90.2 sharp graphql --legacy-peer-deps
```

Expected: packages appear in `package.json` dependencies; install exits 0.

- [ ] **Step 2: Add env example**

Create `.env.example`:

```bash
DATABASE_URL=postgres://payload:payload@localhost:5432/payload
PAYLOAD_SECRET=change-me-to-a-long-random-string
NEXT_PUBLIC_SERVER_URL=http://localhost:3011
```

Create `.env.local` with the same keys and a real random `PAYLOAD_SECRET` (e.g. `openssl rand -hex 32`).

- [ ] **Step 3: Checkpoint**

Confirm `npm ls payload @payloadcms/next` shows 3.90.2. Do not commit.

---

### Task 2: Move public app into `(frontend)` route group

**Files:**
- Create: `src/app/(frontend)/layout.tsx` (move body from current root layout)
- Move: all public routes currently under `src/app/` into `src/app/(frontend)/` (pages, `providers.tsx`, `theme.ts`, `metadata.ts`, `not-found.tsx`, `favicon.ico`, nested folders)
- Create: `src/app/layout.tsx` minimal root shell required by Next (html/body only if Payload needs it — prefer keeping site chrome only on `(frontend)/layout.tsx`)

**Interfaces:**
- Consumes: existing `src/app/layout.tsx` content
- Produces: public URLs unchanged (`/`, `/over-ons`, …); `(frontend)` isolated from `(payload)`

- [ ] **Step 1: Create route group and move files**

```bash
mkdir -p src/app/\(frontend\)
# Move every public route/asset from src/app into (frontend), EXCEPT keep a thin root layout if required.
# Include: page.tsx, layout content → (frontend)/layout.tsx, providers.tsx, theme.ts, metadata.ts,
# not-found.tsx, favicon.ico, contact/, downloads/, offerte/, etc.
```

Root `src/app/layout.tsx` must still provide `<html>` and `<body>` (Next.js requirement). Keep lang/font/suppressHydrationWarning there; move Header/Footer/Providers/GTM into `(frontend)/layout.tsx` so `/admin` does not wrap the CMS in the marketing chrome.

```tsx
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning className="light">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Fix imports broken by moves**

Update any relative imports that pointed at `./providers` or `./theme` to the new paths. Prefer `@/` aliases.

- [ ] **Step 3: Verify site still works without Payload**

Run: `npm run dev`  
Open: `http://localhost:3011/` and `/over-ons`  
Expected: pages render as before.

Run: `npm test -- --testPathPattern=page-layout --passWithNoTests`  
Expected: existing layout tests still pass (update import paths if tests break).

- [ ] **Step 4: Checkpoint** — do not commit

---

### Task 3: Payload access helpers + users/media collections

**Files:**
- Create: `src/payload/access/anyone.ts`
- Create: `src/payload/access/authenticated.ts`
- Create: `src/payload/collections/users.ts`
- Create: `src/payload/collections/media.ts`

**Interfaces:**
- Produces: `anyone`, `authenticated` access functions; `Users`, `Media` collection configs

- [ ] **Step 1: Write access helpers**

`src/payload/access/anyone.ts`:

```ts
import type { Access } from 'payload';

export const anyone: Access = () => true;
```

`src/payload/access/authenticated.ts`:

```ts
import type { Access } from 'payload';

export const authenticated: Access = ({ req: { user } }) => Boolean(user);
```

- [ ] **Step 2: Users collection**

`src/payload/collections/users.ts`:

```ts
import type { CollectionConfig } from 'payload';

export const users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [],
};
```

- [ ] **Step 3: Media collection (stub for Phase 2)**

`src/payload/collections/media.ts`:

```ts
import type { CollectionConfig } from 'payload';
import { anyone } from '../access/anyone';
import { authenticated } from '../access/authenticated';

export const media: CollectionConfig = {
  slug: 'media',
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
};
```

- [ ] **Step 4: Checkpoint**

---

### Task 4: `payload.config.ts` + tsconfig path

**Files:**
- Create: `src/payload.config.ts`
- Modify: `tsconfig.json` (add `@payload-config` path)

**Interfaces:**
- Consumes: `users`, `media` collections
- Produces: default export Payload config at `@payload-config`

- [ ] **Step 1: Create config**

`src/payload.config.ts`:

```ts
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { media } from './payload/collections/media';
import { users } from './payload/collections/users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [users, media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
});
```

- [ ] **Step 2: Add tsconfig path**

In `tsconfig.json` `compilerOptions.paths` add:

```json
"@payload-config": ["./src/payload.config.ts"]
```

- [ ] **Step 3: Checkpoint**

---

### Task 5: Add `(payload)` App Router files + `withPayload`

**Files:**
- Create: Payload route tree under `src/app/(payload)/` by copying from the official blank template for Payload 3.90 (same major), then adjust imports to `@payload-config`
- Modify: `next.config.mjs` — wrap with `withPayload`, set `output: 'standalone'` for Docker (keep existing options)
- Create: `src/app/(payload)/custom.css` (can be empty)

**Interfaces:**
- Consumes: `@payload-config`
- Produces: `/admin`, `/api/*` Payload routes

- [ ] **Step 1: Copy Payload app files**

Prefer generating via:

```bash
npx create-payload-app@3.90.2 --help
```

Or copy from [payload blank template `src/app/(payload)`](https://github.com/payloadcms/payload/tree/v3.90.2/templates/blank/src/app/(payload)) into `src/app/(payload)/`.

Required surface:
- `(payload)/layout.tsx`
- `(payload)/admin/[[...segments]]/page.tsx`
- `(payload)/api/[...slug]/route.ts`
- `(payload)/api/graphql/route.ts` (if present in template)
- `(payload)/api/graphql-playground/route.ts` (if present)
- `importMap` as generated by Payload

Do not invent alternate admin routing.

- [ ] **Step 2: Wrap Next config**

Update `next.config.mjs`:

```js
import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // keep existing config
  output: 'standalone',
  // IMPORTANT: do not enable NEXT_EXPORT for CMS production
};

export default withPayload(nextConfig);
```

Resolve conflicts with existing `output: process.env.NEXT_EXPORT === 'true' ? 'export' : undefined` by using:

```js
output:
  process.env.NEXT_EXPORT === 'true'
    ? 'export'
    : 'standalone',
```

Document in a code comment that CMS mode requires non-export builds.

- [ ] **Step 3: Checkpoint**

---

### Task 6: Docker Postgres + local admin smoke test

**Files:**
- Modify: `docker-compose.yml`
- Modify: `Dockerfile` → `node:26-alpine`, standalone copy paths
- Modify: `.env.example` if compose service hostnames differ

**Interfaces:**
- Produces: `postgres` healthy; frontend can connect via `DATABASE_URL`

- [ ] **Step 1: Add postgres to compose**

Extend `docker-compose.yml`:

```yaml
services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: tisrm2-frontend
    ports:
      - "3011:3011"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://payload:payload@postgres:5432/payload
      - PAYLOAD_SECRET=${PAYLOAD_SECRET}
      - NEXT_PUBLIC_SERVER_URL=http://localhost:3011
      - NEXT_PUBLIC_API_URL=http://localhost:4000
    volumes:
      - payload_media:/app/media
    depends_on:
      postgres:
        condition: service_healthy
      backend:
        condition: service_started
    networks:
      - app-network

  postgres:
    image: postgres:16-alpine
    container_name: tisrm2-postgres
    environment:
      POSTGRES_USER: payload
      POSTGRES_PASSWORD: payload
      POSTGRES_DB: payload
    volumes:
      - payload_pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U payload -d payload"]
      interval: 5s
      timeout: 5s
      retries: 10
    networks:
      - app-network

  backend:
    # keep existing backend service as-is

volumes:
  payload_pgdata:
  payload_media:
```

Keep the existing backend service block; only add postgres + frontend env/volumes/depends_on.

- [ ] **Step 2: Bump Dockerfile Node**

Change base image to `node:26-alpine`. After Payload + standalone, adjust `CMD` to Next standalone server if you switch copy paths; until then keep `npm start` on port 3011 if that still matches the current image layout.

- [ ] **Step 3: Start Postgres locally for dev**

```bash
docker compose up -d postgres
```

Expected: `pg_isready` healthy.

- [ ] **Step 4: Boot app and create admin**

```bash
npm run dev
```

Open `http://localhost:3011/admin`  
Expected: first-user creation form → create editor account → admin dashboard with Users + Media.

- [ ] **Step 5: Checkpoint**

---

### Task 7: `pages` + `siteSettings` + `formCopy` schemas

**Files:**
- Create: `src/payload/collections/pages.ts`
- Create: `src/payload/globals/siteSettings.ts`
- Create: `src/payload/globals/formCopy.ts`
- Modify: `src/payload.config.ts` — register them

**Interfaces:**
- Produces: CMS schema for Phase 1 content

- [ ] **Step 1: Pages collection (flat Phase 1 fields)**

`src/payload/collections/pages.ts`:

```ts
import type { CollectionConfig } from 'payload';
import { anyone } from '../access/anyone';
import { authenticated } from '../access/authenticated';

export const pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'body',
      type: 'array',
      labels: { singular: 'Paragraph', plural: 'Paragraphs' },
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
};
```

- [ ] **Step 2: siteSettings global**

Mirror keys from `src/constants/app.ts` `CONTACT_INFO` / `APP_CONFIG` / nav labels (text only):

```ts
import type { GlobalConfig } from 'payload';
import { anyone } from '../access/anyone';
import { authenticated } from '../access/authenticated';

export const siteSettings: GlobalConfig = {
  slug: 'siteSettings',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    { name: 'companyName', type: 'text', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    {
      name: 'address',
      type: 'group',
      fields: [
        { name: 'street', type: 'text' },
        { name: 'postalCode', type: 'text' },
        { name: 'city', type: 'text' },
        { name: 'country', type: 'text' },
      ],
    },
    {
      name: 'navItems',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'href', type: 'text', required: true },
      ],
    },
  ],
};
```

- [ ] **Step 3: formCopy global**

```ts
import type { GlobalConfig } from 'payload';
import { anyone } from '../access/anyone';
import { authenticated } from '../access/authenticated';

export const formCopy: GlobalConfig = {
  slug: 'formCopy',
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'offerte',
      type: 'group',
      fields: [
        { name: 'labels', type: 'json' },
        { name: 'placeholders', type: 'json' },
        { name: 'helpers', type: 'json' },
        { name: 'validationMessages', type: 'json' },
      ],
    },
    {
      name: 'meldSchade',
      type: 'group',
      fields: [
        { name: 'labels', type: 'json' },
        { name: 'placeholders', type: 'json' },
        { name: 'helpers', type: 'json' },
        { name: 'validationMessages', type: 'json' },
      ],
    },
  ],
};
```

JSON maps keep keys stable in code (`validationMessages.phoneInvalid`) while values are editable.

- [ ] **Step 4: Register in `payload.config.ts`**

```ts
import { pages } from './payload/collections/pages';
import { formCopy } from './payload/globals/formCopy';
import { siteSettings } from './payload/globals/siteSettings';

// collections: [users, media, pages],
// globals: [siteSettings, formCopy],
```

- [ ] **Step 5: Restart dev, open `/admin`**

Expected: Pages, Site Settings, Form Copy visible. Create a page with `slug: over-ons` and two body paragraphs.

- [ ] **Step 6: Checkpoint**

---

### Task 8: Local API helpers + unit tests (TDD)

**Files:**
- Create: `src/lib/payload/getPayloadClient.ts`
- Create: `src/lib/payload/getPageBySlug.ts`
- Create: `src/lib/payload/getSiteSettings.ts`
- Create: `src/lib/payload/getFormCopy.ts`
- Create: `src/lib/payload/__tests__/getPageBySlug.test.ts`
- Create: `src/lib/payload/__tests__/getFormCopy.test.ts`

**Interfaces:**
- Produces:
  - `getPayloadClient(): Promise<Payload>`
  - `getPageBySlug(slug: string): Promise<{ title: string; body: string[] } | null>`
  - `getSiteSettings(): Promise<SiteSettingsView | null>`
  - `getFormCopy(): Promise<FormCopyView | null>`
  - `getFormMessage(formCopy, form: 'offerte' | 'meldSchade', group: 'validationMessages' | 'labels' | 'placeholders' | 'helpers', key: string, fallback: string): string`

- [ ] **Step 1: Write failing tests for page mapper**

`src/lib/payload/__tests__/getPageBySlug.test.ts`:

```ts
import { mapPageDoc } from '../getPageBySlug';

describe('mapPageDoc', () => {
  it('maps title and body paragraphs', () => {
    const result = mapPageDoc({
      title: 'Over ons',
      slug: 'over-ons',
      body: [{ text: 'Eerste alinea.' }, { text: 'Tweede alinea.' }],
    });
    expect(result).toEqual({
      title: 'Over ons',
      slug: 'over-ons',
      body: ['Eerste alinea.', 'Tweede alinea.'],
    });
  });

  it('returns empty body when missing', () => {
    expect(mapPageDoc({ title: 'X', slug: 'x', body: null }).body).toEqual([]);
  });
});
```

- [ ] **Step 2: Run test — expect FAIL**

```bash
npm test -- --testPathPattern=getPageBySlug
```

Expected: FAIL (module/export missing).

- [ ] **Step 3: Implement mapper + client**

`getPayloadClient.ts`:

```ts
import config from '@payload-config';
import { getPayload } from 'payload';

export async function getPayloadClient() {
  return getPayload({ config });
}
```

`getPageBySlug.ts`:

```ts
import { getPayloadClient } from './getPayloadClient';

export type PageView = {
  title: string;
  slug: string;
  body: string[];
};

export function mapPageDoc(doc: {
  title?: string | null;
  slug?: string | null;
  body?: Array<{ text?: string | null }> | null;
}): PageView {
  return {
    title: doc.title ?? '',
    slug: doc.slug ?? '',
    body: (doc.body ?? [])
      .map((block) => block.text ?? '')
      .filter(Boolean),
  };
}

export async function getPageBySlug(slug: string): Promise<PageView | null> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    });
    const doc = result.docs[0];
    if (!doc) return null;
    return mapPageDoc(doc);
  } catch (error) {
    console.error('getPageBySlug failed', { slug, error });
    return null;
  }
}
```

- [ ] **Step 4: Form copy message helper tests + impl**

Test:

```ts
import { getFormMessage } from '../getFormCopy';

describe('getFormMessage', () => {
  it('returns CMS value when present', () => {
    const copy = {
      offerte: {
        validationMessages: { phoneInvalid: 'Ongeldig telefoonnummer' },
      },
    };
    expect(
      getFormMessage(copy, 'offerte', 'validationMessages', 'phoneInvalid', 'fallback'),
    ).toBe('Ongeldig telefoonnummer');
  });

  it('returns fallback when missing', () => {
    expect(
      getFormMessage(null, 'offerte', 'validationMessages', 'phoneInvalid', 'fallback'),
    ).toBe('fallback');
  });
});
```

Implement `getFormMessage` + `getFormCopy` / `getSiteSettings` similarly (null-safe, try/catch → null).

- [ ] **Step 5: Run tests — expect PASS**

```bash
npm test -- --testPathPattern='getPageBySlug|getFormCopy'
```

- [ ] **Step 6: Checkpoint**

---

### Task 9: Wire `over-ons` as pilot page

**Files:**
- Modify: `src/app/(frontend)/over-ons/page.tsx`
- Keep: Chakra/`PARAGRAPH_STYLES`/`SPACING_SCALE` imports unchanged for layout

**Interfaces:**
- Consumes: `getPageBySlug('over-ons')`
- Produces: live editable over-ons body

- [ ] **Step 1: Make page async and load CMS**

Pattern:

```tsx
import { getPageBySlug } from '@/lib/payload/getPageBySlug';
// ... existing layout imports

export default async function Overons() {
  const page = await getPageBySlug('over-ons');
  const paragraphs = page?.body?.length
    ? page.body
    : []; // empty if missing — layout still renders

  return (
    <UnifiedLayout title={page?.title || 'Over ons'}>
      {/* map paragraphs to existing Text + FadeInUp structure */}
      {/* keep COMPANY_ENTITIES StarList from content.ts for Phase 1 unless also migrated */}
    </UnifiedLayout>
  );
}
```

Remove hardcoded paragraph strings that are now in CMS. Keep `COMPANY_ENTITIES` list in code for this task (can move to page fields in Task 10).

- [ ] **Step 2: Manual test**

1. `/admin` → edit Over ons paragraph → Publish  
2. Refresh `/over-ons` (no rebuild)  
Expected: new text visible.

- [ ] **Step 3: Checkpoint**

---

### Task 10: Migrate remaining page copy + site settings

**Files:**
- Modify pages under `src/app/(frontend)/`: `page.tsx` (home), `verzekeringen/**`, `taxi`, `risk-management`, `contact`, and any CTA/nav consumers
- Modify: `src/components/contact-info.tsx`, `src/components/footer.tsx`, `src/components/navbar.tsx` / sidenav as needed to read `getSiteSettings()` (server components) or accept props from parents
- Seed: create Page docs for each slug used

**Slugs (exact):**
`home`, `over-ons`, `verzekeringen`, `verzekeringen-particulier`, `verzekeringen-zakelijk`, `taxi`, `risk-management`, `contact`, `downloads`

- [ ] **Step 1: For each page, extract visible marketing paragraphs into a Pages doc in admin (or a one-off seed script `src/payload/seed/phase1.ts` run via `npx tsx`)**

Seed script should upsert by slug using Local API — idempotent.

- [ ] **Step 2: Replace hardcoded marketing strings with `getPageBySlug` data**

Keep lists that are structural (insurance product lists) either as page `body` paragraphs + a simple `lists` JSON field **or** leave product lists in code for Phase 1 if editing them is rare — prefer moving into page fields as `lists` array of `{ title, items: text[] }` if they appear on particulier/zakelijk.

If adding `lists`, update `pages.ts`:

```ts
{
  name: 'lists',
  type: 'array',
  fields: [
    { name: 'title', type: 'text' },
    { name: 'items', type: 'array', fields: [{ name: 'label', type: 'text' }] },
  ],
}
```

Update `mapPageDoc` + tests accordingly.

- [ ] **Step 3: Wire contact phone/email from `siteSettings`**

Server-fetch in layout or contact-info parent; pass props. Do not put spacing tokens in CMS.

- [ ] **Step 4: Manual smoke**

Visit each slug; edit one field in admin; confirm live update.

- [ ] **Step 5: Checkpoint**

---

### Task 11: Wire form labels and validation messages

**Files:**
- Modify: `src/app/(frontend)/offerte/stap-1/page.tsx`, `stap-2/page.tsx`, `stap-3/page.tsx`, `form.tsx`
- Modify: `src/app/(frontend)/meld-schade/page.tsx`
- Optionally: small client wrapper that receives `formCopy` as props from a server parent (client forms cannot call Local API directly)

**Interfaces:**
- Consumes: `getFormCopy()`, `getFormMessage(...)`
- Produces: editable Dutch strings; unchanged POST URLs/rules

- [ ] **Step 1: Inventory current message strings**

Grep form files for `message:` / `helperText` / `placeholder` and list keys under `offerte.validationMessages` / `meldSchade.validationMessages`.

- [ ] **Step 2: Seed `formCopy` global in admin with those key/value pairs**

- [ ] **Step 3: Pass messages into client form components as props**

Example:

```tsx
// server page
const copy = await getFormCopy();
return <MeldSchadeForm validationMessages={copy?.meldSchade?.validationMessages ?? {}} />;
```

In client validation rules, keep `minLength: 10` in code; use CMS string for `message`.

- [ ] **Step 4: Manual test**

Change one validation message in admin → trigger validation on form → new message shows. Submit still hits existing backend.

- [ ] **Step 5: Run form-related tests; update expected strings if hardcoded in tests**

```bash
npm test -- --testPathPattern='meld-schade|offerte'
```

- [ ] **Step 6: Checkpoint**

---

### Task 12: Docker end-to-end verification

**Files:**
- Modify: `Dockerfile` as needed for `media` dir permissions + standalone
- Modify: `docker-compose.yml` if ports differ from current (`3011` vs old `3002`)

- [ ] **Step 1: Build and run**

```bash
export PAYLOAD_SECRET=$(openssl rand -hex 32)
docker compose up --build -d
```

Expected: postgres healthy; frontend serves `/` and `/admin`.

- [ ] **Step 2: Persist check**

Edit a page → `docker compose restart frontend` → text still present (postgres volume).

- [ ] **Step 3: Regression**

Submit offerte or meld-schade against backend URL — still works.

- [ ] **Step 4: Final checkpoint**

Run:

```bash
npm run type-check
npm test
```

Expected: pass (or only pre-existing failures unrelated to CMS).

---

## Phase 2 / 3 (not in this plan)

- **Phase 2:** Wire `media` uploads into page heroes/downloads; mount `payload_media` volume (already in compose).
- **Phase 3:** Replace flat `body` with block `sections`; optional create-page flow.

Write separate plans after Phase 0–1 is verified.

---

## Spec coverage checklist

| Spec item | Task |
|---|---|
| Payload in tisrm2 + `/admin` | 1, 5, 6 |
| Postgres in Docker + volumes | 6, 12 |
| Forms backend unchanged | 11, 12 |
| Live publish without rebuild | 9, 10 |
| `users` / `media` | 3 |
| `pages` / `siteSettings` / `formCopy` | 7, 10, 11 |
| Chakra tokens not in CMS | 9–11 (layout imports unchanged) |
| Validation rules in code, messages in CMS | 11 |
| Error handling null-safe fetches | 8 |
| Unit tests for mappers | 8 |
| Node 20+/engines | 6 (`node:26-alpine`) |
| No static export for CMS prod | 5 |
