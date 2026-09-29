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
