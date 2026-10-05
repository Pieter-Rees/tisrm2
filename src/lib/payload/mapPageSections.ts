import { resolveMediaUrl } from './resolveMediaUrl';

export type PageDocumentView = {
  title: string;
  downloadLink: string;
};

import type { ButtonVariant } from '@/types/components';

export type PageCardView = {
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  imageUrl: string | null;
  buttonVariant: ButtonVariant;
};

function normalizeButtonVariant(value: string | null | undefined): ButtonVariant {
  if (
    value === 'solid' ||
    value === 'outline' ||
    value === 'ghost' ||
    value === 'subtle' ||
    value === 'plain'
  ) {
    return value;
  }
  return 'ghost';
}

export type PageTestimonialView = {
  quote: string;
  name: string;
  title: string;
  imageUrl: string | null;
};

export type PageSectionView =
  | { blockType: 'paragraph'; text: string }
  | { blockType: 'list'; title: string; items: string[] }
  | {
      blockType: 'headingSection';
      heading: string;
      paragraphs: string[];
      lastParagraphIsLead: boolean;
    }
  | { blockType: 'cta'; heading: string; description: string }
  | { blockType: 'image'; imageUrl: string; alt: string }
  | { blockType: 'cards'; cards: PageCardView[] }
  | { blockType: 'downloads'; documents: PageDocumentView[] };

export function mapPageDocuments(
  documents: Array<{
    title?: string | null;
    link?: string | null;
    file?: unknown;
  } | null> | null | undefined,
): PageDocumentView[] {
  return (documents ?? [])
    .filter((doc): doc is NonNullable<typeof doc> => Boolean(doc))
    .map((doc) => {
      const fileUrl = resolveMediaUrl(doc.file);
      const link = doc.link?.trim() || fileUrl || '';
      return {
        title: doc.title ?? '',
        downloadLink: link,
      };
    })
    .filter((doc) => doc.title && doc.downloadLink);
}

export function mapPageCards(
  cards: Array<{
    title?: string | null;
    description?: string | null;
    cta?: string | null;
    ctaLink?: string | null;
    image?: unknown;
    buttonVariant?: string | null;
  } | null> | null | undefined,
): PageCardView[] {
  return (cards ?? [])
    .filter((card): card is NonNullable<typeof card> => Boolean(card))
    .map((card) => ({
      title: card.title ?? '',
      description: card.description ?? '',
      cta: card.cta ?? 'Lees meer',
      ctaLink: card.ctaLink ?? '#',
      imageUrl: resolveMediaUrl(card.image),
      buttonVariant: normalizeButtonVariant(card.buttonVariant),
    }))
    .filter((card) => card.title);
}

export function mapPageTestimonial(
  testimonial: {
    quote?: string | null;
    name?: string | null;
    title?: string | null;
    image?: unknown;
  } | null | undefined,
): PageTestimonialView | null {
  if (!testimonial) {
    return null;
  }
  const quote = testimonial.quote?.trim() ?? '';
  if (!quote) {
    return null;
  }
  return {
    quote,
    name: testimonial.name ?? '',
    title: testimonial.title ?? '',
    imageUrl: resolveMediaUrl(testimonial.image),
  };
}

export function mapPageSections(sections: unknown): PageSectionView[] {
  if (!Array.isArray(sections)) {
    return [];
  }

  const mapped: PageSectionView[] = [];

  for (const block of sections) {
    if (!block || typeof block !== 'object' || !('blockType' in block)) {
      continue;
    }
    const blockType = block.blockType as string;

    if (blockType === 'paragraph' && 'text' in block) {
      const text = String(block.text ?? '').trim();
      if (text) {
        mapped.push({ blockType: 'paragraph', text });
      }
      continue;
    }

    if (blockType === 'list') {
      const title = 'title' in block ? String(block.title ?? '') : '';
      const items = Array.isArray(block.items)
        ? block.items
            .map((item: unknown) =>
              item && typeof item === 'object' && 'label' in item
                ? String((item as { label?: unknown }).label ?? '')
                : '',
            )
            .filter(Boolean)
        : [];
      if (title || items.length) {
        mapped.push({ blockType: 'list', title, items });
      }
      continue;
    }

    if (blockType === 'headingSection' && 'heading' in block) {
      const paragraphs = Array.isArray(block.paragraphs)
        ? block.paragraphs
            .map((p: unknown) =>
              p && typeof p === 'object' && 'text' in p
                ? String((p as { text?: unknown }).text ?? '')
                : '',
            )
            .filter(Boolean)
        : [];
      mapped.push({
        blockType: 'headingSection',
        heading: String(block.heading ?? ''),
        paragraphs,
        lastParagraphIsLead: Boolean(block.lastParagraphIsLead),
      });
      continue;
    }

    if (blockType === 'cta') {
      mapped.push({
        blockType: 'cta',
        heading: String(block.heading ?? ''),
        description: String(block.description ?? ''),
      });
      continue;
    }

    if (blockType === 'image' && 'image' in block) {
      const imageUrl = resolveMediaUrl(block.image);
      if (imageUrl) {
        mapped.push({
          blockType: 'image',
          imageUrl,
          alt: String(block.alt ?? ''),
        });
      }
      continue;
    }

    if (blockType === 'cards' && Array.isArray(block.cards)) {
      const cards = mapPageCards(block.cards);
      if (cards.length) {
        mapped.push({ blockType: 'cards', cards });
      }
      continue;
    }

    if (blockType === 'downloads' && Array.isArray(block.documents)) {
      const documents = mapPageDocuments(block.documents);
      if (documents.length) {
        mapped.push({ blockType: 'downloads', documents });
      }
    }
  }

  return mapped;
}
