/**
 * One-time: mark existing CMS docs as published after enabling drafts.
 * Run: node --import tsx src/payload/seed/publishExistingContent.ts
 */
import { config as loadEnv } from 'dotenv';
import { getPayload } from 'payload';

loadEnv({ path: '.env.local' });

const config = (await import('../../payload.config')).default;

async function publishAll() {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: 'pages',
    limit: 100,
    pagination: false,
    overrideAccess: true,
  });

  for (const doc of docs) {
    if (doc._status === 'published') {
      continue;
    }
    await payload.update({
      collection: 'pages',
      id: doc.id,
      data: { _status: 'published' },
      overrideAccess: true,
    });
    console.log(`published page: ${doc.slug}`);
  }

  for (const slug of ['siteSettings', 'formCopy'] as const) {
    const globalDoc = await payload.findGlobal({
      slug,
      overrideAccess: true,
    });
    if (globalDoc?._status === 'published') {
      continue;
    }
    await payload.updateGlobal({
      slug,
      data: { _status: 'published' },
      overrideAccess: true,
    });
    console.log(`published global: ${slug}`);
  }
}

publishAll()
  .then(() => {
    console.log('publish complete');
    process.exit(0);
  })
  .catch((error) => {
    console.error('publish failed', error);
    process.exit(1);
  });
