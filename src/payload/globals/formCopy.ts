import type { GlobalConfig } from 'payload';
import { authenticated } from '../access/authenticated';
import { publishedGlobalRead } from '../access/publishedGlobalRead';

export const formCopy: GlobalConfig = {
  slug: 'formCopy',
  versions: {
    drafts: true,
  },
  access: {
    read: publishedGlobalRead,
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
