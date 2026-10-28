import { APP_CONFIG, CONTACT_INFO } from '@/constants/app';

import {
  buildBreadcrumbItems,
  toAbsoluteUrl,
  type BreadcrumbItem,
} from '@/lib/seo/breadcrumbs';

const organizationId = `${APP_CONFIG.url}/#organization`;
const websiteId = `${APP_CONFIG.url}/#website`;

/** Topics TIS advises on; keep in sync with the service pages. */
export const ORGANIZATION_KNOWS_ABOUT = [
  'Taxiverzekering',
  'Wagenparkverzekering',
  'VvE verzekering',
  'Horecaverzekering',
  'Bedrijfsaansprakelijkheidsverzekering',
  'CAR-verzekering',
  'Verzuimverzekering',
  'Zakelijke verzekeringen',
  'Particuliere verzekeringen',
  'Risk management',
] as const;

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InsuranceAgency',
    '@id': organizationId,
    name: CONTACT_INFO.name,
    legalName: CONTACT_INFO.legalName,
    url: APP_CONFIG.url,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    image: `${APP_CONFIG.url}/1.webp`,
    logo: `${APP_CONFIG.url}/logo.svg`,
    description: APP_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      postalCode: CONTACT_INFO.address.postalCode,
      addressLocality: CONTACT_INFO.address.city,
      addressCountry: 'NL',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: CONTACT_INFO.openingHours.phone.from,
        closes: CONTACT_INFO.openingHours.phone.until,
      },
    ],
    sameAs: [CONTACT_INFO.social.linkedIn],
    parentOrganization: {
      '@type': 'Organization',
      name: 'ENTO Groep',
    },
    knowsAbout: [...ORGANIZATION_KNOWS_ABOUT],
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: APP_CONFIG.name,
    url: APP_CONFIG.url,
    inLanguage: 'nl-NL',
    publisher: {
      '@id': organizationId,
    },
  };
}

type WebPageSchemaInput = {
  name: string;
  description: string;
  path: string;
};

export function getWebPageSchema({
  name,
  description,
  path,
}: WebPageSchemaInput) {
  const url = toAbsoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    name,
    description,
    url,
    inLanguage: 'nl-NL',
    isPartOf: {
      '@type': 'WebSite',
      '@id': websiteId,
      name: APP_CONFIG.name,
      url: APP_CONFIG.url,
    },
    publisher: {
      '@id': organizationId,
    },
  };
}

type ServiceSchemaInput = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

export function getServiceSchema({
  name,
  description,
  path,
  serviceType,
}: ServiceSchemaInput) {
  const url = toAbsoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}/#service`,
    name,
    description,
    serviceType,
    url,
    provider: {
      '@id': organizationId,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
  };
}

export function getBreadcrumbListSchema(
  items: BreadcrumbItem[] = [],
  path?: string,
) {
  const listItems =
    items.length > 0 ? items : buildBreadcrumbItems(path ?? '/');

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: listItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqPageSchema(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export const HOME_FAQS: FaqItem[] = [
  {
    question: 'Wat doet TIS Risk Managers?',
    answer:
      'TIS Risk Managers is een landelijk werkend assurantiekantoor in Amsterdam. Wij adviseren ondernemers in onder meer het personenvervoer, de horeca, de bouw en techniek, vastgoedeigenaren en VvE’s, en verzorgen daarnaast particuliere verzekeringen.',
  },
  {
    question: 'Zijn de adviseurs van TIS gecertificeerd?',
    answer:
      'Ja. De medewerkers van TIS zijn gediplomeerd als risicomanagers en geregistreerd in het register GRMC.',
  },
  {
    question: 'Waarom kiest TIS voor maatwerkverzekeringen?',
    answer:
      'Iedere onderneming heeft andere risico’s. Daarom kijken wij naar uw bedrijfsactiviteiten en stellen wij een passend verzekeringspakket samen, in plaats van een standaardoplossing.',
  },
  {
    question: 'Hoe werkt schadeafhandeling bij TIS?',
    answer:
      'Bij TIS beschikken wij over een eigen schadeafdeling. Wij beoordelen de dekking, begeleiden de schadeafhandeling, schakelen waar nodig een expert in en onderzoeken of de schade op een aansprakelijke tegenpartij verhaald kan worden.',
  },
  {
    question: 'Adviseert TIS ook taxi- en personenvervoer?',
    answer:
      'Ja. Al ruim 25 jaar verzekeren wij taxibedrijven, zelfstandige chauffeurs, luxe personenvervoer, zorgvervoer en wagenparken.',
  },
  {
    question: 'Waar is TIS Risk Managers gevestigd?',
    answer: `TIS Risk Managers is gevestigd aan de ${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.postalCode} ${CONTACT_INFO.address.city}. U bereikt ons via ${CONTACT_INFO.phone} of ${CONTACT_INFO.email}.`,
  },
];

export const SERVICE_TYPES = {
  businessInsurance: 'Zakelijke verzekeringen',
  taxi: 'Taxiverzekering en wagenparkverzekering',
  realEstate: 'Vastgoed- en VvE-verzekering',
  hospitality: 'Horecaverzekering',
  liability: 'Aansprakelijkheidsverzekering',
  construction: 'CAR-verzekering en bouwverzekering',
  absence: 'Verzuimverzekering',
  personalInsurance: 'Particuliere verzekeringen',
  riskAdvice: 'Risicoadvies en risk management',
} as const;

type ArticleSchemaInput = {
  headline: string;
  description: string;
  path: string;
};

export function getArticleSchema({
  headline,
  description,
  path,
}: ArticleSchemaInput) {
  const url = toAbsoluteUrl(path);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}/#article`,
    headline,
    description,
    url,
    inLanguage: 'nl-NL',
    author: {
      '@id': organizationId,
    },
    publisher: {
      '@id': organizationId,
    },
  };
}
