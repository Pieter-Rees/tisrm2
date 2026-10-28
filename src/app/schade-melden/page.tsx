'use client';

import { Box, Flex, Heading } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import {
  Callout,
  ContentBlocks,
  ContentSteps,
  PageCta,
} from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import {
  HEADING_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

import DamageForm from './DamageForm';

const introBlocks: readonly ContentBlock[] = [
  {
    kind: 'paragraph',
    variant: 'lead',
    text: 'Heeft u schade? Bij TIS Risk Managers meldt u uw schade rechtstreeks bij onze eigen schadeafdeling. Wij begeleiden de schadeafhandeling, onderhouden waar nodig contact met de verzekeraar en houden u op de hoogte van de voortgang.',
  },
  {
    kind: 'paragraph',
    text: 'Of het nu gaat om een aanrijding, brand-, water-, inbraak- of aansprakelijkheidsschade: wij helpen u bij de verdere afhandeling.',
  },
  {
    kind: 'paragraph',
    text: 'Kan uw voertuig na een ongeval niet meer rijden? Bel dan het noodnummer op uw groene kaart om uw voertuig te laten wegslepen. Tijdens onze openingstijden kunt u uiteraard contact met ons opnemen als u de groene kaart niet kunt vinden of advies nodig heeft over de vervolgstappen.',
  },
  {
    kind: 'callout',
    title: 'Direct gevaar of een medische noodsituatie?',
    text: 'Bel 112.',
  },
];

const channelBlocks: readonly ContentBlock[] = [
  { kind: 'heading', level: 2, text: 'Zo meldt u schade' },
  {
    kind: 'definitions',
    items: [
      {
        term: 'Online schade melden',
        description:
          'Via ons digitale formulier op deze pagina kunt u uw schade melden en eventuele foto’s en documenten meesturen.',
      },
      {
        term: 'Per mail',
        description: `Stuur uw schademelding en beschikbare documenten naar ${CONTACT_INFO.damageEmail}.`,
      },
      {
        term: 'Telefonisch',
        description: `Bel onze schadeafdeling via ${CONTACT_INFO.phone} tijdens onze openingstijden.`,
      },
    ],
  },

  { kind: 'heading', level: 2, text: 'Welke gegevens hebben wij nodig?' },
  {
    kind: 'table',
    columns: ['Wat', 'Waarom'],
    rows: [
      [
        'Naam, contactgegevens en polisnummer',
        'Daarmee vinden wij uw klantgegevens direct.',
      ],
      [
        'Schadeformulier en andere bewijsstukken',
        'Om de schademelding te onderbouwen.',
      ],
      [
        'Foto’s van de schade',
        'Om de schade en de omstandigheden vast te leggen.',
      ],
      [
        'Gegevens van betrokken partijen en getuigen',
        'Indien van toepassing, bijvoorbeeld bij een aanrijding of aansprakelijkheidskwestie.',
      ],
    ],
  },
  {
    kind: 'link',
    label: 'Download het Europees schadeformulier',
    href: NAVIGATION_ROUTES.downloads,
  },
];

const sceneSteps: readonly string[] = [
  'Ongeval gehad? Zet uw voertuig veilig neer en blijf rustig.',
  'Kijk of er getuigen zijn. Noteer hun naam, adres en telefoonnummer.',
  'Maak foto’s van de situatie. Het kenteken, de schade en de omgeving: hoe meer, hoe beter. Heeft u dashcambeelden, bewaar ze dan goed.',
  'Vul samen het schadeformulier in. Vul de polisgegevens in, en heeft u die niet, dan is het kenteken het belangrijkste. Let op de toedrachtkruisjes, maak een duidelijke situatieschets en zet allebei uw handtekening.',
  'Controleer samen het formulier. Maak daarna een duidelijke foto van het ingevulde formulier.',
  'Vul thuis de achterkant in. Rustig, met alle details van het ongeval. Maak ook daarvan een duidelijke foto.',
  'Werkt de tegenpartij niet mee? Bel de politie via 0900 8844. Bij gewonden of gevaar belt u 112.',
  `Meld uw schade bij TIS. Via het formulier op deze pagina of per mail naar ${CONTACT_INFO.damageEmail}. Wij zorgen voor de verdere afhandeling.`,
];

const afterSteps: readonly string[] = [
  'Wij toetsen de dekking. Uw behandelaar controleert de polis en laat u weten waar u aan toe bent.',
  'Expertise waar nodig. Bij grotere schades schakelen wij een expert in en plannen wij de afspraak voor u in.',
  'Herstel, uitkering of verhaal. Reparatie, een uitkering, of verhaal van uw schade op de tegenpartij.',
  'U hoort van ons. Wij bellen u bij elke stap die uw actie vraagt. U hoeft er zelf niet achteraan.',
];

const closingBlocks: readonly ContentBlock[] = [
  {
    kind: 'heading',
    level: 2,
    text: 'Binnen welke termijn moet u schade melden?',
  },
  {
    kind: 'paragraph',
    text: 'Meld uw schade zo spoedig mogelijk. Door schade tijdig te melden en bewijsstukken goed aan te leveren, helpt u vertraging of discussie over de schadeafhandeling te voorkomen.',
  },
  {
    kind: 'callout',
    title: 'Schade nu?',
    text: `Bel ${CONTACT_INFO.phone} en vraag naar de schadeafdeling.`,
  },
];

export default function SchadeMelden() {
  return (
    <UnifiedLayout
      title={PAGE_META.damageReport.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={introBlocks} />
        </Box>

        <Box as="section">
          <ContentBlocks blocks={channelBlocks} />
        </Box>

        <Box as="section">
          <DamageForm />
        </Box>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Schade met uw voertuig: acht stappen ter plekke
          </Heading>
          <ContentSteps items={sceneSteps} />
          <Callout
            title="Belangrijk"
            text="Kan uw voertuig niet verder rijden, neem dan contact op met de hulpverlening via het telefoonnummer op uw groene kaart voor het wegslepen."
          />
        </Flex>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Wat gebeurt er na uw schademelding?
          </Heading>
          <ContentSteps items={afterSteps} />
        </Flex>

        <Box as="section">
          <ContentBlocks blocks={closingBlocks} />
        </Box>

        <PageCta
          title="Hulp nodig bij uw schademelding?"
          text="Weet u niet zeker welke gegevens wij nodig hebben of wilt u uw schade liever telefonisch doorgeven? Onze schadeafdeling helpt u graag verder."
          actionLabel="Neem contact op"
          actionHref={NAVIGATION_ROUTES.contact}
        />
      </Flex>
    </UnifiedLayout>
  );
}
