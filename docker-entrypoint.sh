#!/bin/sh
set -eu

echo "Seeding CMS content (create-if-missing)..."
node --import tsx src/payload/seed/phase1.ts
node --import tsx src/payload/seed/publishExistingContent.ts
node --import tsx src/payload/seed/syncPhase2Content.ts
echo "CMS seed complete"

exec node server.js
