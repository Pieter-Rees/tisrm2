# Docker Setup

Runs the Next.js site (with Payload CMS), Postgres, and the separate form API backend.

## Prerequisites

- Docker and Docker Compose
- Sibling backend repo at `../tis-risk-managers-backend` (only needed for form submit APIs)

## Usage

From `tisrm2`:

```bash
docker compose up --build
```

This starts:

| Service | URL / port | Role |
| --- | --- | --- |
| frontend | http://localhost:3011 | Next.js site + Payload admin at `/admin` |
| postgres | localhost:5433 → container 5432 | Payload database |
| backend | http://localhost:4000 | Form/API backend |

On frontend start, `docker-entrypoint.sh` runs create-if-missing CMS seed + publish + phase-2 sync.

## Local CMS (without full compose)

```bash
docker compose up -d postgres
cp .env.example .env.local   # if you do not have one yet
npm install
npm run cms:seed
npm run cms:publish
npm run dev -- -p 3011
```

Then open http://localhost:3011 and http://localhost:3011/admin.

## Environment

Compose sets defaults; for local `npm run dev` use `.env.local` (see `.env.example`):

- `DATABASE_URL` — Postgres (local: `postgres://payload:payload@localhost:5433/payload`)
- `PAYLOAD_SECRET` — Payload encryption secret
- `NEXT_PUBLIC_SERVER_URL` — site URL (default `http://localhost:3011`)
- `NEXT_PUBLIC_API_URL` — form backend (default `http://localhost:4000`)

## Stopping

```bash
docker compose down
```

Remove volumes (wipes CMS DB + media):

```bash
docker compose down -v
```
