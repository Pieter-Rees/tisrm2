import {
  buildBreadcrumbItems,
  formatBreadcrumbSegment,
} from '@/lib/seo/breadcrumbs';
import {
  getBreadcrumbListSchema,
  getFaqPageSchema,
  getOrganizationSchema,
  getServiceSchema,
  getWebPageSchema,
  getWebSiteSchema,
  HOME_FAQS,
} from '@/lib/seo/organizationSchema';

describe('SEO schema helpers', () => {
  it('builds organization schema with stable @id', () => {
    const schema = getOrganizationSchema();
    expect(schema['@type']).toEqual(['InsuranceAgency', 'LocalBusiness']);
    expect(schema['@id']).toBe('https://tisrm.nl/#organization');
    expect(schema.url).toBe('https://tisrm.nl');
  });

  it('builds website schema with stable @id', () => {
    const schema = getWebSiteSchema();
    expect(schema['@type']).toBe('WebSite');
    expect(schema['@id']).toBe('https://tisrm.nl/#website');
    expect(schema.publisher).toEqual({
      '@id': 'https://tisrm.nl/#organization',
    });
  });

  it('builds webpage schema linked to organization and website', () => {
    const schema = getWebPageSchema({
      name: 'Taxi',
      description: 'Taxi verzekeringen',
      path: '/taxi',
    });
    expect(schema['@type']).toBe('WebPage');
    expect(schema.url).toBe('https://tisrm.nl/taxi');
    expect(schema.publisher).toEqual({
      '@id': 'https://tisrm.nl/#organization',
    });
    expect(schema.isPartOf['@id']).toBe('https://tisrm.nl/#website');
  });

  it('builds service schema for service pages', () => {
    const schema = getServiceSchema({
      name: 'Taxi- en personenvervoer verzekeringen',
      description: 'Specialistische taxi verzekeringen',
      path: '/taxi',
      serviceType: 'Taxi- en personenvervoer verzekeringen',
    });
    expect(schema['@type']).toBe('Service');
    expect(schema.serviceType).toBe('Taxi- en personenvervoer verzekeringen');
    expect(schema.provider).toEqual({
      '@id': 'https://tisrm.nl/#organization',
    });
  });

  it('builds breadcrumb list from path', () => {
    const items = buildBreadcrumbItems('/verzekeringen/particulier');
    expect(items).toEqual([
      { name: 'Home', path: '/' },
      { name: 'Verzekeringen', path: '/verzekeringen' },
      { name: 'Particulier', path: '/verzekeringen/particulier' },
    ]);

    const schema = getBreadcrumbListSchema([], '/verzekeringen/particulier');
    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[2]).toMatchObject({
      position: 3,
      name: 'Particulier',
      item: 'https://tisrm.nl/verzekeringen/particulier',
    });
  });

  it('formats hyphenated segments', () => {
    expect(formatBreadcrumbSegment('risk-management')).toBe('Risk management');
    expect(formatBreadcrumbSegment('custom-page')).toBe('Custom Page');
  });

  it('builds FAQ schema from the same HOME_FAQS content', () => {
    const firstFaq = HOME_FAQS[0];
    expect(firstFaq).toBeDefined();

    const schema = getFaqPageSchema(HOME_FAQS);
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity).toHaveLength(HOME_FAQS.length);
    expect(schema.mainEntity[0]).toMatchObject({
      '@type': 'Question',
      name: firstFaq!.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: firstFaq!.answer,
      },
    });
  });
});

