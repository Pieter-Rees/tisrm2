/**
 * Centralized content data to reduce duplication and improve maintainability
 */

import type { ButtonVariant } from '@/types/components';

// Insurance cards data
export const INSURANCE_CATEGORIES = [
  {
    id: 'particulier',
    title: 'Particulier',
    description: 'U verwacht als particulier de beste service tegen scherpe premies, alsmede een snelle afhandeling van mogelijke schades. Bij TIS geniet u van adviseurs die op de juiste momenten bereikbaar zijn en de persoonlijke aandacht geven waar u als klant behoefte heeft.',
    cta: 'Lees meer',
    ctaLink: '/verzekeringen/particulier',
    buttonVariant: 'ghost' as ButtonVariant,
  },
  {
    id: 'zakelijk',
    title: 'Zakelijk',
    description: 'Als ondernemer wilt u ervanuit kunnen gaan dat de verzekeringen op orde zijn, zijn alle risico\'s wel goed afgedekt en dan wel tegen de juiste premies? Wij nemen graag samen met u uw verzekeringspakket door en houden deze up to date, zodat ook u kunt genieten van de rust die TIS biedt.',
    cta: 'Lees meer',
    ctaLink: '/verzekeringen/zakelijk',
    buttonVariant: 'ghost' as ButtonVariant,
  },
  {
    id: 'taxi',
    title: 'Taxi',
    description: 'TIS is al meer dan 25 jaar dé specialist op het gebied van verzekeringen in het personenvervoer. Door onze jarenlange expertise hebben wij veel vertrouwen gewonnen bij verzekeringsmaatschappijen, belangenorganisaties én de klanten zelf.',
    cta: 'Lees meer',
    ctaLink: '/taxi',
    buttonVariant: 'ghost' as ButtonVariant,
  },
] as const;

// Documents data
export const AVAILABLE_DOCUMENTS = [
  {
    id: 'aanrijdingsformulier',
    title: 'Schadeaanrijdings formulier',
    link: '/documents/aanrijdingsformulier.pdf',
    category: 'schade',
  },
  {
    id: 'dienstverleningsdocument',
    title: 'Dienstverlenings document',
    link: '/documents/dienstverleningsdocument.pdf',
    category: 'algemeen',
  },
  {
    id: 'algemene-voorwaarden',
    title: 'Algemene voorwaarden',
    link: '/documents/algemene-voorwaarden.pdf',
    category: 'juridisch',
  },
  {
    id: 'privacyverklaring',
    title: 'Privacyverklaring',
    link: '/documents/privacyverklaring.pdf',
    category: 'privacy',
  },
  {
    id: 'beloningsbeleid',
    title: 'Beloningsbeleid',
    link: '/documents/beloningsbeleid.pdf',
    category: 'beleid',
  },
  {
    id: 'incidentenregeling',
    title: 'Incidentenregeling',
    link: '/documents/incidentenregeling.pdf',
    category: 'beleid',
  },
  {
    id: 'interne-klachtenprocedure',
    title: 'Interne klachtenprocedure',
    link: '/documents/interne-klachtenprocedure.pdf',
    category: 'klachten',
  },
] as const;

// Company information
export const COMPANY_ENTITIES = [
  'Enthoven Beheer BV – Financial Holding',
  'ENTO lease BV – Lease en financiering',
  'ENTO Holding – bedrijfs adviezen',
  'Alan Jacktar BV – Risico Management',
  'TIS RM – Assurantiën (Schade) voor particulier en MKB',
] as const;

// Risk management categories
export const RISK_CATEGORIES = [
  'Bedrijfsmiddelen',
  'Bedrijfsactiviteiten',
  'Vervoer & Logistiek',
  'Personeel',
  'Preventie',
] as const;

// Navigation structure
export const MAIN_NAVIGATION = [
  {
    label: 'Home',
    href: '/',
    external: false,
  },
  {
    label: 'Verzekeringen',
    href: '/verzekeringen',
    external: false,
    children: [
      { label: 'Particulier', href: '/verzekeringen/particulier' },
      { label: 'Zakelijk', href: '/verzekeringen/zakelijk' },
      { label: 'Taxi', href: '/taxi' },
    ],
  },
  {
    label: 'Risk Management',
    href: '/risk-management',
    external: false,
  },
  {
    label: 'Over ons',
    href: '/over-ons',
    external: false,
  },
  {
    label: 'Contact',
    href: '/contact',
    external: false,
  },
  {
    label: 'Downloads',
    href: '/bestanden',
    external: false,
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'René Enthoven',
    title: 'Directeur TIS Risk Managers',
    image: '/rene.jpg',
    quote: 'De weldaden van een verzekering komen samen met het onheil aan het licht.',
    company: 'TIS Risk Managers',
  },
] as const;

// Form validation messages
export const VALIDATION_MESSAGES = {
  required: 'Dit veld is verplicht',
  email: 'Voer een geldig e-mailadres in',
  phone: 'Voer een geldig Nederlands telefoonnummer in',
  postalCode: 'Voer een geldige Nederlandse postcode in',
  kvk: 'KvK-nummer moet 8 cijfers bevatten',
  btw: 'BTW-nummer moet in het formaat NL123456789B01 zijn',
  minLength: (min: number) => `Minimaal ${min} karakters vereist`,
  maxLength: (max: number) => `Maximaal ${max} karakters toegestaan`,
} as const;

// Success/error messages
export const SYSTEM_MESSAGES = {
  success: {
    formSubmit: 'Uw bericht is succesvol verzonden. Wij nemen zo spoedig mogelijk contact met u op.',
    dataUpdate: 'Gegevens zijn succesvol bijgewerkt.',
  },
  error: {
    generic: 'Er is een fout opgetreden. Probeer het later opnieuw.',
    network: 'Controleer uw internetverbinding en probeer het opnieuw.',
    validation: 'Controleer uw invoer en probeer het opnieuw.',
  },
  loading: {
    default: 'Laden...',
    form: 'Formulier wordt verzonden...',
    data: 'Gegevens worden geladen...',
  },
} as const;

// Helper functions for data access
export const getDocumentsByCategory = (category: string) => {
  return AVAILABLE_DOCUMENTS.filter(doc => doc.category === category);
};

export const getNavigationItem = (href: string) => {
  return MAIN_NAVIGATION.find(item => item.href === href);
};

export const getInsuranceCategory = (id: string) => {
  return INSURANCE_CATEGORIES.find(category => category.id === id);
};
