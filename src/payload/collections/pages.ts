import type { CollectionConfig } from 'payload';
import { pageSectionBlocks } from '../blocks/pageSections';
import { authenticated } from '../access/authenticated';
import { publishedOnlyRead } from '../access/publishedOnlyRead';

export const pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: publishedOnlyRead,
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
      admin: {
        description:
          'Known slugs: home, over-ons, verzekeringen, verzekeringen-particulier, verzekeringen-zakelijk, taxi, risk-management, contact, downloads',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Hero or team photo for this page (Phase 2 media).',
      },
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
    {
      name: 'lists',
      type: 'array',
      labels: { singular: 'List', plural: 'Lists' },
      fields: [
        { name: 'title', type: 'text' },
        {
          name: 'items',
          type: 'array',
          fields: [{ name: 'label', type: 'text' }],
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      labels: { singular: 'Card', plural: 'Cards' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'cta', type: 'text' },
        { name: 'ctaLink', type: 'text' },
        {
          name: 'buttonVariant',
          type: 'select',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Subtle', value: 'subtle' },
            { label: 'Plain', value: 'plain' },
          ],
          defaultValue: 'ghost',
        },
      ],
    },
    {
      name: 'documents',
      type: 'array',
      labels: { singular: 'Document', plural: 'Documents' },
      admin: { description: 'Download cards (PDF upload or /documents/… link).' },
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'link',
          type: 'text',
          admin: { description: 'e.g. /documents/algemene-voorwaarden.pdf' },
        },
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'testimonial',
      type: 'group',
      fields: [
        { name: 'quote', type: 'textarea' },
        { name: 'name', type: 'text' },
        { name: 'title', type: 'text' },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'sections',
      type: 'blocks',
      blocks: pageSectionBlocks,
      admin: {
        description:
          'Optional page builder (Phase 3). When used, prefer rendering sections on the route.',
      },
    },
  ],
};
