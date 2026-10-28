import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import type { FaqItem } from '@/lib/seo/organizationSchema';
import { HOME_FAQS } from '@/lib/seo/organizationSchema';

/**
 * Only add questions here that are also rendered on the page itself; Google
 * requires FAQ markup to match visible content.
 */
export const PAGE_FAQS = {
  home: HOME_FAQS,
  taxi: [
    {
      question: 'Kan ik overstappen midden in een verzekeringsjaar?',
      answer:
        'Vaak wel. Wij kijken naar uw opzegtermijn en contractduur en zorgen dat er geen dag zonder dekking zit. Zelf opzeggen hoeft u niet, dat regelen wij.',
    },
    {
      question: 'Welke dekkingen horen bij een taxiverzekering?',
      answer:
        'De wettelijk verplichte WA-verzekering voor taxivervoer vormt de basis. Afhankelijk van uw situatie breidt u die uit met beperkt of volledig casco, ongevallen inzittenden, schadeverzekering inzittenden, bedrijfsaansprakelijkheid en rechtsbijstand.',
    },
    {
      question: 'Wat is de beste taxiverzekering?',
      answer:
        'Die is niet voor iedere ondernemer hetzelfde. Naast de premie tellen de dekking, het eigen risico, de voorwaarden en de schadeafhandeling mee. Een zelfstandige chauffeur heeft andere verzekeringsbehoeften dan een onderneming met tientallen voertuigen.',
    },
  ] satisfies FaqItem[],
  riskAdvice: [
    {
      question: 'Wat houdt risk management bij TIS in?',
      answer:
        'Wij brengen samen met u de risico’s binnen uw onderneming in kaart en bepalen per risico wat u vermijdt, vermindert, verzekert of zelf draagt. Binnen TIS beschikken wij over GRMC-geregistreerde deskundigheid op het gebied van risicomanagement.',
    },
    {
      question: 'Waar kijken jullie naar bij een risico-inventarisatie?',
      answer:
        'Onder meer naar bedrijfsmiddelen, bedrijfsactiviteiten, vervoer en logistiek, personeel, preventie en de aansprakelijkheid die u in uw contracten heeft geregeld.',
    },
    {
      question: 'Is risk management alleen voor grote bedrijven?',
      answer:
        'Nee. Ook kleinere organisaties profiteren van inzicht in hun risico’s en van dekking die niet te ruim en niet te krap is.',
    },
  ] satisfies FaqItem[],
  personalInsurance: [
    {
      question: 'Welke particuliere verzekeringen verzorgt TIS?',
      answer:
        'Van woon- en autoverzekeringen tot uitgebreidere oplossingen voor kostbaarheden, bijzondere voertuigen, monumentale panden en tweede woningen.',
    },
    {
      question: 'Waarom geen standaardpakket?',
      answer:
        'Vooral wanneer uw bezittingen of verzekeringsbehoeften afwijken van de standaard, is het belangrijk dat de verzekerde bedragen en voorwaarden aansluiten bij uw persoonlijke situatie.',
    },
    {
      question: 'Hoe meld ik als particulier schade?',
      answer: `Via het digitale formulier op ${NAVIGATION_ROUTES.damageReport}, per mail naar ${CONTACT_INFO.damageEmail} of telefonisch via ${CONTACT_INFO.phone}.`,
    },
  ] satisfies FaqItem[],
  businessInsurance: [
    {
      question: 'Welke verzekeringen heeft mijn bedrijf nodig?',
      answer:
        'Dat hangt af van wat u doet, voor wie en met hoeveel mensen. Wij adviseren onder andere over aansprakelijkheid, gebouwen en inventaris, goederen en voorraad, bedrijfsschade, cyber, transport, motorrijtuigen en ziekteverzuim.',
    },
    {
      question: 'Combineren jullie verzekeringen met risicomanagement?',
      answer:
        'Ja. Niet ieder risico hoeft verzekerd te worden. Naast verzekeringsadvies ondersteunen wij ondernemers bij het inzichtelijk maken en beheersen van bedrijfsrisico’s.',
    },
    {
      question: 'Hoe start ik als ondernemer een adviesgesprek?',
      answer: `Bel ${CONTACT_INFO.phone}, mail ${CONTACT_INFO.email} of vraag een offerte aan via ${NAVIGATION_ROUTES.quote}.`,
    },
  ] satisfies FaqItem[],
} as const;

export type PageFaqKey = keyof typeof PAGE_FAQS;
