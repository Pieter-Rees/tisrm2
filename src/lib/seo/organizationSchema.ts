import { APP_CONFIG, CONTACT_INFO } from '@/constants/app';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['InsuranceAgency', 'LocalBusiness'],
    name: CONTACT_INFO.name,
    url: APP_CONFIG.url,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    image: `${APP_CONFIG.url}/1.webp`,
    logo: `${APP_CONFIG.url}/1.webp`,
    description: APP_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      postalCode: CONTACT_INFO.address.postalCode,
      addressLocality: CONTACT_INFO.address.city,
      addressCountry: 'NL',
    },
    sameAs: [CONTACT_INFO.social.linkedIn],
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
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
  const url = `${APP_CONFIG.url}${path === '/' ? '' : path}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: 'nl-NL',
    isPartOf: {
      '@type': 'WebSite',
      name: APP_CONFIG.name,
      url: APP_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: CONTACT_INFO.name,
      url: APP_CONFIG.url,
    },
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
    mainEntity: faqs.map((faq) => ({
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
      'TIS Risk Managers is een onafhankelijk adviesbureau in Amsterdam voor verzekeringen en risk management. Wij leveren maatwerk voor particulieren, bedrijven en taxivervoer.',
  },
  {
    question: 'Zijn de adviseurs van TIS gecertificeerd?',
    answer:
      'Ja. De medewerkers van TIS zijn gediplomeerd als risicomanagers en geregistreerd in het register GRMC.',
  },
  {
    question: 'Waarom kiest TIS voor maatwerkverzekeringen?',
    answer:
      'Standaardpolissen dekken vaak te weinig of juist te veel. Maatwerk zorgt dat de dekking aansluit op uw persoonlijke of bedrijfsrisico’s.',
  },
  {
    question: 'Hoe werkt schadeafhandeling bij TIS?',
    answer:
      'TIS biedt volledig digitale schadeafhandeling. Daardoor kunnen wij schades snel en vakkundig afwikkelen, van inbraak en stormschade tot bedrijfsschade.',
  },
  {
    question: 'Adviseert TIS ook taxi- en personenvervoer?',
    answer:
      'Ja. TIS is gespecialiseerd in verzekeringen voor taxi- en personenvervoer en kent de specifieke risico’s van die branche.',
  },
  {
    question: 'Waar is TIS Risk Managers gevestigd?',
    answer:
      'TIS Risk Managers is gevestigd aan de Muiderstraat 1, 1011 PZ Amsterdam. U bereikt ons via +31 20 636 8191 of info@tisrm.nl.',
  },
];
