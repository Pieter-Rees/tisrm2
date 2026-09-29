import type { Block } from 'payload';

export const paragraphBlock: Block = {
  slug: 'paragraph',
  labels: { singular: 'Paragraph', plural: 'Paragraphs' },
  fields: [
    {
      name: 'text',
      type: 'textarea',
      required: true,
    },
  ],
};

export const listBlock: Block = {
  slug: 'list',
  labels: { singular: 'List', plural: 'Lists' },
  fields: [
    { name: 'title', type: 'text' },
    {
      name: 'items',
      type: 'array',
      fields: [{ name: 'label', type: 'text' }],
    },
  ],
};

export const headingSectionBlock: Block = {
  slug: 'headingSection',
  labels: { singular: 'Heading section', plural: 'Heading sections' },
  fields: [
    { name: 'heading', type: 'text', required: true },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [{ name: 'text', type: 'textarea' }],
    },
    {
      name: 'lastParagraphIsLead',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
};

export const ctaBlock: Block = {
  slug: 'cta',
  labels: { singular: 'CTA', plural: 'CTAs' },
  fields: [
    { name: 'heading', type: 'text' },
    { name: 'description', type: 'textarea' },
  ],
};

export const imageBlock: Block = {
  slug: 'image',
  labels: { singular: 'Image', plural: 'Images' },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    { name: 'alt', type: 'text' },
  ],
};

export const cardsBlock: Block = {
  slug: 'cards',
  labels: { singular: 'Cards row', plural: 'Cards rows' },
  fields: [
    {
      name: 'cards',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'cta', type: 'text' },
        { name: 'ctaLink', type: 'text' },
      ],
    },
  ],
};

export const downloadsBlock: Block = {
  slug: 'downloads',
  labels: { singular: 'Downloads', plural: 'Downloads' },
  fields: [
    {
      name: 'documents',
      type: 'array',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'link', type: 'text' },
        {
          name: 'file',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};

export const pageSectionBlocks = [
  paragraphBlock,
  listBlock,
  headingSectionBlock,
  ctaBlock,
  imageBlock,
  cardsBlock,
  downloadsBlock,
];
