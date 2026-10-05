import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';

describe('buildPageMetadata', () => {
  it('brands titles with an absolute title so nested routes keep the suffix', () => {
    const metadata = buildPageMetadata({
      title: 'Particuliere verzekeringen',
      description: 'Particuliere verzekeringen op maat.',
      path: '/verzekeringen/particulier',
    });

    expect(metadata.title).toEqual({
      absolute: 'Particuliere verzekeringen | TIS Risk Managers',
    });
    expect(metadata.openGraph?.title).toBe(
      'Particuliere verzekeringen | TIS Risk Managers',
    );
    expect(metadata.openGraph?.url).toBe(
      'https://tisrm.nl/verzekeringen/particulier',
    );
    expect(metadata.alternates?.canonical).toBe('/verzekeringen/particulier');
  });

  it('keeps the home canonical slash-less and og:url on the apex', () => {
    const metadata = buildPageMetadata({
      title: 'Verzekeringsadvies Amsterdam',
      description: 'Onafhankelijk advies.',
      path: '/',
    });

    expect(metadata.alternates?.canonical).toBe('/');
    expect(metadata.openGraph?.url).toBe('https://tisrm.nl');
  });
});
