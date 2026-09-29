jest.mock('../getPayloadClient', () => ({
  getPayloadClient: jest.fn(),
}));

import { mapSiteSettingsDoc } from '../getSiteSettings';

describe('mapSiteSettingsDoc', () => {
  it('maps company contact and nav items', () => {
    const result = mapSiteSettingsDoc({
      companyName: 'TIS Risk Managers',
      phone: '+31 20 636 8191',
      email: 'info@tisrm.nl',
      address: {
        street: 'Muiderstraat 1',
        postalCode: '1011 PZ',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      navItems: [
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' },
      ],
      postalBox: {
        box: 'Postbus 1',
        postalCode: '1100 AW',
        city: 'Amsterdam',
      },
      linkedInUrl: 'https://www.linkedin.com/company/tisrm/',
    });
    expect(result).toEqual({
      companyName: 'TIS Risk Managers',
      phone: '+31 20 636 8191',
      email: 'info@tisrm.nl',
      address: {
        street: 'Muiderstraat 1',
        postalCode: '1011 PZ',
        city: 'Amsterdam',
        country: 'Nederland',
      },
      postalBox: {
        box: 'Postbus 1',
        postalCode: '1100 AW',
        city: 'Amsterdam',
      },
      linkedInUrl: 'https://www.linkedin.com/company/tisrm/',
      navItems: [
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' },
      ],
    });
  });

  it('filters incomplete nav items', () => {
    const result = mapSiteSettingsDoc({
      navItems: [
        { label: 'Home', href: '/' },
        { label: '', href: '/x' },
        { label: 'Y', href: '' },
        null,
      ],
    });
    expect(result.navItems).toEqual([{ label: 'Home', href: '/' }]);
  });
});
