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
