import { buildPageMetadata } from '@/lib/seo/buildPageMetadata';

describe('buildPageMetadata', () => {
  it('uses the copy deck title verbatim instead of appending the brand', () => {
    const metadata = buildPageMetadata({
      title: 'Particuliere verzekeringen | TIS Risk Managers Amsterdam',
      description: 'Particuliere verzekeringen op maat.',
      path: '/particuliere-verzekeringen',
    });

    expect(metadata.title).toEqual({
      absolute: 'Particuliere verzekeringen | TIS Risk Managers Amsterdam',
    });
    expect(metadata.openGraph?.title).toBe(
      'Particuliere verzekeringen | TIS Risk Managers Amsterdam',
    );
    expect(metadata.openGraph?.url).toBe(
      'https://tisrm.nl/particuliere-verzekeringen',
    );
    expect(metadata.alternates?.canonical).toBe('/particuliere-verzekeringen');
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
