import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import type { FaqItem } from '@/lib/seo/organizationSchema';
import { HOME_FAQS } from '@/lib/seo/organizationSchema';

export const PAGE_FAQS = {
  home: HOME_FAQS,
  taxi: [
    {
      question: 'Welke taxi- en personenvervoer verzekeringen biedt TIS?',
      answer:
        'TIS adviseert over taxiverzekeringen met uitgebreide dekking, inclusief aanvullingen die vaak voor TX Keurmerk nodig zijn, zoals bedrijfsaansprakelijkheid en ongevallen inzittenden.',
    },
    {
      question: 'Kan TIS ook wagenparken voor taxibedrijven verzekeren?',
      answer:
        'Ja. Naast een scherpe offerte maken wij desgewenst een risicoanalyse van uw bedrijf, zodat dekking en preventie aansluiten op de risico’s van personenvervoer.',
    },
    {
      question: 'Hoe vraag ik een taxi-offerte aan?',
      answer: `Neem contact op via ${CONTACT_INFO.phone} of ${CONTACT_INFO.email}, of start een vrijblijvende aanvraag via ${NAVIGATION_ROUTES.quote}.`,
    },
  ] satisfies FaqItem[],
  riskManagement: [
    {
      question: 'Wat houdt risk management bij TIS in?',
      answer:
        'TIS inventariseert bedrijfsrisico’s samen met u en vertaalt die naar concrete maatregelen en passende verzekeringen. Adviseurs zijn GRMC-geregistreerd.',
    },
    {
      question: 'Voor welke onderwerpen doen jullie een risico-inventarisatie?',
      answer:
        'Onder meer bedrijfsmiddelen, bedrijfsactiviteiten, vervoer en logistiek, personeel en preventie.',
    },
    {
      question: 'Is risk management alleen voor grote bedrijven?',
      answer:
        'Nee. Ook kleinere organisaties profiteren van inzicht in risico’s en maatwerkdekking die niet te ruim of te krap is.',
    },
  ] satisfies FaqItem[],
  insurancePersonal: [
    {
      question: 'Welke particuliere verzekeringen adviseert TIS?',
      answer:
        'Onder meer mobiliteit, gezinssituatie, wonen en vrije tijd — van auto en aansprakelijkheid tot inboedel, reis en recreatie.',
    },
    {
      question: 'Waarom geen standaardpakket?',
      answer:
        'Standaardpolissen dekken vaak te weinig of juist te veel. TIS stemt dekking af op uw persoonlijke situatie.',
    },
    {
      question: 'Hoe meld ik als particulier schade?',
      answer: `Via de digitale schadeafhandeling op ${NAVIGATION_ROUTES.damageReport}, of bel ${CONTACT_INFO.phone}.`,
    },
  ] satisfies FaqItem[],
  insuranceBusiness: [
    {
      question: 'Welke zakelijke verzekeringen biedt TIS?',
      answer:
        'TIS adviseert over maatwerkdekkingen voor bedrijven, afgestemd op activiteiten, bedrijfsmiddelen, aansprakelijkheid en overige risicogebieden.',
    },
    {
      question: 'Combineren jullie verzekeringen met risk management?',
      answer:
        'Ja. Voor bedrijven combineren wij graag risico-inventarisatie met passende verzekeringsoplossingen.',
    },
    {
      question: 'Hoe start ik als ondernemer een adviesgesprek?',
      answer: `Bel ${CONTACT_INFO.phone}, mail ${CONTACT_INFO.email} of vraag een offerte aan via ${NAVIGATION_ROUTES.quote}.`,
    },
  ] satisfies FaqItem[],
} as const;

export type PageFaqKey = keyof typeof PAGE_FAQS;
