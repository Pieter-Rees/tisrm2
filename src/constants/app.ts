export const APP_CONFIG = {
  name: 'TIS Risk Managers',
  description: 'Professional insurance and risk management services',
  version: '2.0.0',
  author: 'TIS Risk Managers',
  url: 'https://tisrm.nl',
} as const;

export const CONTACT_INFO = {
  name: 'TIS Risk Managers',
  phone: '+31 20 636 8191',
  email: 'info@tisrm.nl',
  address: {
    street: 'Muiderstraat 1',
    postalCode: '1011 PZ',
    city: 'Amsterdam',
    country: 'Nederland',
  },
  postalBox: {
    box: 'Postbus 12887',
    postalCode: '1100 AW',
    city: 'Amsterdam',
  },
  social: {
    linkedIn: 'https://www.linkedin.com/company/tisrm/',
  },
} as const;

export const NAVIGATION_ROUTES = {
  home: '/',
  insurance: '/verzekeringen',
  insurancePersonal: '/verzekeringen/particulier',
  insuranceBusiness: '/verzekeringen/zakelijk',
  taxi: '/taxi',
  riskManagement: '/risk-management',
  about: '/over-ons',
  contact: '/contact',
  quote: '/offerte',
  downloads: '/bestanden',
} as const;

export const EXTERNAL_LINKS = {
  damageReport:
    'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen',
  gtmId: 'G-3HPHN1BV1Q',
} as const;

export const UI_CONSTANTS = {
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  animations: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
  },
  zIndexes: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    toast: 1070,
  },
} as const;

export const CURRENT_YEAR = new Date().getFullYear();
