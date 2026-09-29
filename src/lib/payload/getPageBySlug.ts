import { getPayloadClient } from './getPayloadClient';
import {
  mapPageCards,
  mapPageDocuments,
  mapPageSections,
  mapPageTestimonial,
  type PageCardView,
  type PageDocumentView,
  type PageSectionView,
  type PageTestimonialView,
} from './mapPageSections';
import { resolveMediaUrl } from './resolveMediaUrl';

export type PageListView = {
  title: string;
  items: string[];
};

export type PageView = {
  title: string;
  slug: string;
  body: string[];
  lists: PageListView[];
  featuredImageUrl: string | null;
  documents: PageDocumentView[];
  cards: PageCardView[];
  testimonial: PageTestimonialView | null;
  sections: PageSectionView[];
};

export function mapPageDoc(doc: {
  title?: string | null;
  slug?: string | null;
  body?: Array<{ text?: string | null }> | null;
  lists?: Array<{
    title?: string | null;
    items?: Array<{ label?: string | null } | null> | null;
  } | null> | null;
  featuredImage?: unknown;
  documents?: Parameters<typeof mapPageDocuments>[0];
  cards?: Parameters<typeof mapPageCards>[0];
  testimonial?: Parameters<typeof mapPageTestimonial>[0];
  sections?: unknown;
}): PageView {
  return {
    title: doc.title ?? '',
    slug: doc.slug ?? '',
    body: (doc.body ?? [])
      .map((block) => block.text ?? '')
      .filter(Boolean),
    featuredImageUrl: resolveMediaUrl(doc.featuredImage),
    lists: (doc.lists ?? [])
      .filter((list): list is NonNullable<typeof list> => Boolean(list))
      .map((list) => ({
        title: list.title ?? '',
        items: (list.items ?? [])
          .filter((item): item is { label?: string | null } => Boolean(item))
          .map((item) => item.label ?? '')
          .filter(Boolean),
      }))
      .filter((list) => list.title || list.items.length > 0),
    documents: mapPageDocuments(doc.documents),
    cards: mapPageCards(doc.cards),
    testimonial: mapPageTestimonial(doc.testimonial),
    sections: mapPageSections(doc.sections),
  };
}

export async function getPageBySlug(slug: string): Promise<PageView | null> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 1,
    });
    const doc = result.docs[0];
    if (!doc) return null;
    return mapPageDoc(doc);
  } catch (error) {
    console.error('getPageBySlug failed', { slug, error });
    return null;
  }
}
