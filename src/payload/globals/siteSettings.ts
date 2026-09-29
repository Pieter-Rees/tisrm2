import type { GlobalConfig } from 'payload';
import { authenticated } from '../access/authenticated';
import { publishedGlobalRead } from '../access/publishedGlobalRead';

export const siteSettings: GlobalConfig = {
  slug: 'siteSettings',
  versions: {
    drafts: true,
  },
  access: {
    read: publishedGlobalRead,
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
      name: 'postalBox',
      type: 'group',
      fields: [
        { name: 'box', type: 'text' },
        { name: 'postalCode', type: 'text' },
        { name: 'city', type: 'text' },
      ],
    },
    {
      name: 'linkedInUrl',
      type: 'text',
      admin: { description: 'Full LinkedIn company URL' },
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
