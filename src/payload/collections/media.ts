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
