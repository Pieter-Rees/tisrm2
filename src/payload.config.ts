import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

import { media } from './payload/collections/media';
import { pages } from './payload/collections/pages';
import { users } from './payload/collections/users';
import { formCopy } from './payload/globals/formCopy';
import { siteSettings } from './payload/globals/siteSettings';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [users, media, pages],
  globals: [siteSettings, formCopy],
  editor: lexicalEditor(),
  secret: process.env['PAYLOAD_SECRET'] || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env['DATABASE_URL'] || '',
    },
  }),
  sharp,
});
