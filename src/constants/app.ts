export const APP_CONFIG = {
  name: 'TIS Risk Managers',
  description:
    'Onafhankelijk verzekeringsadvies en risk management in Amsterdam. Maatwerk voor particulier, zakelijk en taxivervoer, met snelle digitale schadeafhandeling.',
  version: '2.0.0',
  author: 'TIS Risk Managers',
  url: 'https://tisrm.nl',
  /** Bump when marketing content meaningfully changes (sitemap lastmod). */
  contentUpdatedAt: '2026-10-05',
} as const;

export const CONTACT_INFO = {
  name: 'TIS Risk Managers',
  /** TIS Risk Managers is a trade name; the AFM licence is held by this entity. */
  legalName: 'Alan Jacktar B.V.',
  /** Human-readable, for display only. Use phoneHref for tel: links. */
  phone: '+31 20 636 8191',
  /** E.164, no spaces and no trunk 0, so the number is actually dialable. */
  phoneHref: 'tel:+31206368191',
  damageEmail: 'schade@tisrm.nl',
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
  /** Legally required on every page; supplied by TIS. */
  registrations: {
    kvk: '34181626',
    afm: '12040755',
    kifid: '300.014940',
  },
  openingHours: {
    phone: { days: 'Maandag t/m vrijdag', from: '09:00', until: '17:30' },
    office: { days: 'Maandag t/m vrijdag', from: '09:30', until: '16:30' },
  },
} as const;

export const NAVIGATION_ROUTES = {
  home: '/',
  businessInsurance: '/zakelijke-verzekeringen',
  taxi: '/taxi-en-wagenparkverzekering',
  realEstate: '/vastgoed-en-vve',
  hospitality: '/horecaverzekering',
  liability: '/aansprakelijkheidsverzekering',
  construction: '/bouw-en-techniek',
  absence: '/verzuim-en-personeel',
  personalInsurance: '/particuliere-verzekeringen',
  riskAdvice: '/risicoadvies',
  knowledgeBase: '/kennisbank',
  about: '/over-ons',
  contact: '/contact',
  damageReport: '/schade-melden',
  quote: '/offerte',
  downloads: '/downloads',
} as const;

/** Knowledge articles sit one level under the kennisbank hub. */
export function getKnowledgeArticlePath(slug: string): string {
  return `${NAVIGATION_ROUTES.knowledgeBase}/${slug}`;
}

/** Top level navigation, shared by the navbar and the mobile side nav. */
export const PRIMARY_NAVIGATION = [
  { href: NAVIGATION_ROUTES.home, label: 'Home' },
  { href: NAVIGATION_ROUTES.businessInsurance, label: 'Zakelijk' },
  { href: NAVIGATION_ROUTES.personalInsurance, label: 'Particulier' },
  { href: NAVIGATION_ROUTES.riskAdvice, label: 'Risk Management' },
  { href: NAVIGATION_ROUTES.knowledgeBase, label: 'Kennisbank' },
  { href: NAVIGATION_ROUTES.about, label: 'Over ons' },
  { href: NAVIGATION_ROUTES.downloads, label: 'Downloads' },
  { href: NAVIGATION_ROUTES.contact, label: 'Contact' },
] as const;

/** Branch pages that sit under the business insurance hub. */
export const BRANCH_ROUTES = [
  { href: NAVIGATION_ROUTES.taxi, label: 'Taxi en wagenpark' },
  { href: NAVIGATION_ROUTES.realEstate, label: 'Vastgoed en VvE' },
  { href: NAVIGATION_ROUTES.hospitality, label: 'Horeca' },
  { href: NAVIGATION_ROUTES.liability, label: 'Aansprakelijkheid' },
  { href: NAVIGATION_ROUTES.construction, label: 'Bouw en techniek' },
  { href: NAVIGATION_ROUTES.absence, label: 'Verzuim en personeel' },
] as const;

export const EXTERNAL_LINKS = {
  damageReport:
    'https://schade.emsclaimsengine.com/index.php?template=tis&view=consument.login#identificatie_vragen',
  gaId: 'G-3HPHN1BV1Q',
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
  hover: {
    button: {
      transition: 'all 0.2s ease-in-out',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    image: {
      transition: 'all 0.3s ease',
      transform: 'scale(1.02)',
      boxShadow: 'xl',
    },
    link: {
      transition: 'all 0.2s ease',
      color: 'blue.700',
      transform: 'translateX(2px)',
    },
    subtle: {
      transition: 'all 0.2s ease',
      transform: 'translateY(-1px)',
      bg: 'gray.50',
    },
  },
} as const;

export const CURRENT_YEAR = new Date().getFullYear();
