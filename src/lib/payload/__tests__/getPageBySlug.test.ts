jest.mock('../getPayloadClient', () => ({
  getPayloadClient: jest.fn(),
}));

import { mapPageDoc } from '../getPageBySlug';

describe('mapPageDoc', () => {
  it('maps title and body paragraphs', () => {
    const result = mapPageDoc({
      title: 'Over ons',
      slug: 'over-ons',
      body: [{ text: 'Eerste alinea.' }, { text: 'Tweede alinea.' }],
    });
    expect(result).toEqual({
      title: 'Over ons',
      slug: 'over-ons',
      body: ['Eerste alinea.', 'Tweede alinea.'],
      lists: [],
      featuredImageUrl: null,
      documents: [],
      cards: [],
      testimonial: null,
      sections: [],
    });
  });

  it('returns empty body when missing', () => {
    expect(mapPageDoc({ title: 'X', slug: 'x', body: null }).body).toEqual([]);
  });

  it('maps lists with titles and item labels', () => {
    const result = mapPageDoc({
      title: 'Particulier',
      slug: 'verzekeringen-particulier',
      body: [],
      lists: [
        {
          title: 'Onderweg',
          items: [{ label: 'Autoverzekering' }, { label: 'Motor' }],
        },
        { title: 'Wonen', items: [{ label: 'Opstal' }] },
      ],
    });
    expect(result.lists).toEqual([
      { title: 'Onderweg', items: ['Autoverzekering', 'Motor'] },
      { title: 'Wonen', items: ['Opstal'] },
    ]);
  });

  it('filters empty list items and empty lists', () => {
    const result = mapPageDoc({
      title: 'X',
      slug: 'x',
      lists: [
        { title: '', items: [{ label: '' }, null] },
        { title: 'Keep', items: [{ label: 'A' }, { label: null }] },
      ],
    });
    expect(result.lists).toEqual([{ title: 'Keep', items: ['A'] }]);
  });

  it('maps cards including image urls', () => {
    const result = mapPageDoc({
      title: 'Home',
      slug: 'home',
      cards: [
        {
          title: 'Risk Managers',
          description: 'Desc',
          cta: 'Lees meer',
          ctaLink: '/risk-management',
          image: { url: '/api/media/file/slider-2.jpg' },
        },
      ],
    });
    expect(result.cards).toEqual([
      {
        title: 'Risk Managers',
        description: 'Desc',
        cta: 'Lees meer',
        ctaLink: '/risk-management',
        imageUrl: '/api/media/file/slider-2.jpg',
        buttonVariant: 'ghost',
      },
    ]);
  });
});
