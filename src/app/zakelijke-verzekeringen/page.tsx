'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { ContentBlocks, LinkTile, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import PageHero from '@/components/page-hero';
import { FaqSection } from '@/components/seo/FaqSection';
import {
  BRANCH_ROUTES,
  NAVIGATION_ROUTES,
  getKnowledgeArticlePath,
} from '@/constants/app';
import { COMPONENT_SPACING } from '@/constants/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

const SPECIALTIES_ANCHOR = 'specialisaties';

const BRANCH_TILES: Record<
  string,
  { description: string; linkLabel: string }
> = {
  [NAVIGATION_ROUTES.taxi]: {
    description:
      'Voor personenvervoer, luxe vervoer met chauffeur en zorgvervoer',
    linkLabel: 'Naar taxi- en wagenparkverzekering',
  },
  [NAVIGATION_ROUTES.realEstate]: {
    description: 'Voor verhuurders, beleggers en Verenigingen van Eigenaren',
    linkLabel: 'Naar vastgoed en VvE',
  },
  [NAVIGATION_ROUTES.hospitality]: {
    description: 'Voor restaurants, cafés, bars en andere horecabedrijven',
    linkLabel: 'Naar horeca',
  },
  [NAVIGATION_ROUTES.construction]: {
    description:
      'Voor aannemers, installateurs, architecten en technische dienstverleners',
    linkLabel: 'Naar bouw en techniek',
  },
  [NAVIGATION_ROUTES.liability]: {
    description: 'Voor ondernemers en zelfstandigen',
    linkLabel: 'Naar aansprakelijkheid',
  },
  [NAVIGATION_ROUTES.absence]: {
    description: 'Voor werkgevers met personeel in dienst',
    linkLabel: 'Naar verzuim en personeel',
  },
};

/** Reused as the hero description, so it is no longer a body block. */
const INTRO_LEAD =
  'Als ondernemer wilt u erop kunnen vertrouwen dat uw verzekeringen goed geregeld zijn. Dat de dekking aansluit bij uw werkzaamheden, dat u niet onnodig betaalt en dat er iemand voor u klaarstaat wanneer er schade ontstaat.';

const introBlocks: readonly ContentBlock[] = [
  {
    kind: 'paragraph',
    text: 'Bij TIS Risk Managers stellen wij uw zakelijke verzekeringspakket samen op basis van uw bedrijfsactiviteiten en de risico’s die daarbij horen. Daarbij kijken we naar passende dekkingen, goede voorwaarden en scherpe premies.',
  },
  {
    kind: 'paragraph',
    text: 'U krijgt persoonlijk advies van een kantoor dat uw onderneming kent. Wanneer uw bedrijf verandert, kijken wij waar nodig samen of uw verzekeringen nog aansluiten op de nieuwe situatie.',
  },
];

const coverageBlocks: readonly ContentBlock[] = [
  {
    kind: 'heading',
    level: 2,
    text: 'Welke verzekeringen heeft uw bedrijf nodig',
  },
  {
    kind: 'paragraph',
    text: 'Dat hangt af van wat u doet, voor wie en met hoeveel mensen. Een adviesbureau heeft een heel ander verzekeringspakket nodig dan een aannemer of een restaurant.',
  },
  {
    kind: 'paragraph',
    text: 'Wij adviseren onder andere over de volgende zakelijke verzekeringen.',
  },
  { kind: 'heading', level: 3, text: 'Aansprakelijkheid' },
  {
    kind: 'definitions',
    items: [
      {
        term: 'Bedrijfsaansprakelijkheid (AVB)',
        description:
          'Schade aan personen of spullen van anderen door uw bedrijfsactiviteiten.',
      },
      {
        term: 'Beroepsaansprakelijkheid (BAV)',
        description: 'Vermogensschade door beroepsfouten.',
      },
      {
        term: 'Bestuurdersaansprakelijkheid',
        description: 'Aansprakelijkheid voor bestuurders en commissarissen.',
      },
      {
        term: 'Werkgeversaansprakelijkheid',
        description:
          'Aansprakelijkheid van de werkgever voor werkgerelateerde schade van werknemers.',
      },
    ],
  },
  { kind: 'heading', level: 3, text: 'Bezit en bedrijfsvoering' },
  {
    kind: 'definitions',
    items: [
      {
        term: 'Gebouwen en inventaris',
        description:
          'Schade door onder andere brand, storm, inbraak en water aan verzekerde gebouwen en bedrijfsmiddelen.',
      },
      {
        term: 'Goederen en voorraad',
        description: 'Schade aan uw handelsvoorraad en bedrijfsgoederen.',
      },
      {
        term: 'Bedrijfsschade',
        description:
          'Vergoeding van gemiste brutowinst en doorlopende bedrijfskosten bij bedrijfsstilstand.',
      },
      {
        term: 'Cyber',
        description:
          'Financiële gevolgen van bepaalde cyberincidenten, zoals herstelkosten, bedrijfsstilstand of aansprakelijkheidsclaims.',
      },
      {
        term: 'Transport',
        description:
          'Verzekeringen voor goederen tijdens vervoer en voor vervoerdersaansprakelijkheid.',
      },
    ],
  },
  { kind: 'heading', level: 3, text: 'Uw motorrijtuigen' },
  {
    kind: 'paragraph',
    text: 'Voor één zakelijke personenauto of bestelbus tot een compleet wagenpark. Wij verzorgen passende motorrijtuigenverzekeringen voor ondernemers, waaronder WA-, beperkt casco- en volledig cascoverzekeringen en aanvullende dekkingen.',
  },
  {
    kind: 'link',
    label: 'Naar de taxi- en wagenparkverzekering',
    href: NAVIGATION_ROUTES.taxi,
  },
  { kind: 'heading', level: 3, text: 'Uw personeel' },
  {
    kind: 'paragraph',
    text: 'Heeft u personeel in dienst? Dan krijgt u te maken met financiële risico’s rondom ziekte en arbeidsongeschiktheid. Wij adviseren onder andere over ziekteverzuimverzekeringen en bijbehorende WIA-aanvullingen.',
  },
  {
    kind: 'link',
    label: 'Naar verzuim en personeel',
    href: NAVIGATION_ROUTES.absence,
  },
];

const adviceBlocks: readonly ContentBlock[] = [
  { kind: 'heading', level: 2, text: 'Persoonlijk advies en maatwerk' },
  {
    kind: 'paragraph',
    text: 'Bij TIS kijken wij verder dan een standaard verzekeringspakket. Wij willen begrijpen wat uw onderneming doet, welke risico’s daarbij horen en welke verzekeringen daadwerkelijk nodig zijn.',
  },
  {
    kind: 'paragraph',
    text: 'Op basis daarvan zoeken wij naar een goede combinatie van dekking, voorwaarden en premie. Daarbij bekijken we ook of bestaande verzekeringen nog passend zijn en of er mogelijkheden zijn om uw verzekeringspakket te verbeteren.',
  },
  {
    kind: 'paragraph',
    text: 'Zo krijgt u een verzekeringsoplossing die aansluit bij uw onderneming, met een vast aanspreekpunt voor advies en schadebegeleiding.',
  },
  {
    kind: 'link',
    label: 'Lees waarom de goedkoopste polis zelden de voordeligste is',
    href: getKnowledgeArticlePath('goedkope-zakelijke-verzekering'),
  },
  { kind: 'heading', level: 2, text: 'Risicomanagement en schadepreventie' },
  {
    kind: 'paragraph',
    text: 'Niet ieder risico hoeft verzekerd te worden. Sommige risico’s kunt u met goede preventiemaatregelen beperken of voorkomen.',
  },
  {
    kind: 'paragraph',
    text: 'Denk aan brandpreventie, gecertificeerde beveiliging, periodieke inspecties van de elektrische installaties en duidelijke veiligheidsinstructies voor medewerkers.',
  },
  {
    kind: 'paragraph',
    text: 'Naast verzekeringsadvies ondersteunen wij ondernemers ook bij het inzichtelijk maken en beheersen van bedrijfsrisico’s.',
  },
  {
    kind: 'link',
    label: 'Meer over Risk Management',
    href: NAVIGATION_ROUTES.riskAdvice,
  },
];

export default function ZakelijkeVerzekeringen() {
  return (
    <>
      <PageHero
        title={PAGE_META.businessInsurance.heading}
        description={INTRO_LEAD}
        image="/slider-2.jpg"
        ctaLabel="Offerte aanvragen"
        ctaHref={NAVIGATION_ROUTES.quote}
      />

      <UnifiedLayout breadcrumb={<Breadcrumb />}>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <Box as="section">
            <ContentBlocks blocks={introBlocks} />
          </Box>

          <Box as="section">
            <ContentBlocks blocks={coverageBlocks} />
          </Box>

          <Box as="section">
            <ContentBlocks blocks={adviceBlocks} />
          </Box>

          <Flex
            as="section"
            id={SPECIALTIES_ANCHOR}
            scrollMarginTop="var(--headerHeight)"
            direction="column"
            gap={PROSE_STACK_GAP}
          >
            <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
              Onze specialisaties
            </Heading>
            <Text {...PARAGRAPH_STYLES.body}>
              Wij verzorgen zakelijke verzekeringen voor uiteenlopende
              ondernemingen. Daarnaast hebben wij ruime ervaring binnen een
              aantal specifieke branches:
            </Text>
            <Box
              as="ul"
              listStyleType="none"
              m="0"
              p="0"
              display="grid"
              gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
              gap={COMPONENT_SPACING.grid.sm}
            >
              {BRANCH_ROUTES.map(({ href, label }) => (
                <LinkTile
                  key={href}
                  title={label}
                  description={BRANCH_TILES[href]?.description}
                  href={href}
                  linkLabel={BRANCH_TILES[href]?.linkLabel ?? label}
                />
              ))}
            </Box>
            <Text {...PARAGRAPH_STYLES.body}>
              Staat uw branche er niet bij? Dat betekent niet dat wij u niet
              kunnen helpen. Onze zakelijke verzekeringen zijn bedoeld voor
              ondernemingen in uiteenlopende sectoren. Neem gerust contact met
              ons op om de mogelijkheden te bespreken.
            </Text>
          </Flex>

          <FaqSection faqs={PAGE_FAQS.businessInsurance} />

          <PageCta
            title="Vraag een offerte aan of laat uw verzekeringen beoordelen"
            text="Wilt u uw onderneming goed verzekeren of weten of uw huidige verzekeringspakket nog aansluit bij uw bedrijfsactiviteiten? Wij kijken graag met u mee en adviseren over passende verzekeringen, voorwaarden en premies."
          />
        </Flex>
      </UnifiedLayout>
    </>
  );
}
