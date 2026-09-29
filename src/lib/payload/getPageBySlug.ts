import { getPayloadClient } from './getPayloadClient';

export type PageListView = {
  title: string;
  items: string[];
};

export type PageView = {
  title: string;
  slug: string;
  body: string[];
  lists: PageListView[];
};

export function mapPageDoc(doc: {
  title?: string | null;
  slug?: string | null;
  body?: Array<{ text?: string | null }> | null;
  lists?: Array<{
    title?: string | null;
    items?: Array<{ label?: string | null } | null> | null;
  } | null> | null;
}): PageView {
  return {
    title: doc.title ?? '',
    slug: doc.slug ?? '',
    body: (doc.body ?? [])
      .map((block) => block.text ?? '')
      .filter(Boolean),
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
  };
}

export async function getPageBySlug(slug: string): Promise<PageView | null> {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    });
    const doc = result.docs[0];
    if (!doc) return null;
    return mapPageDoc(doc);
  } catch (error) {
    console.error('getPageBySlug failed', { slug, error });
    return null;
  }
}
