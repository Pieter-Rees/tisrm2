'use client';

import { Box, Flex } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { ContentBlocks, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import PageHero from '@/components/page-hero';
import { FaqSection } from '@/components/seo/FaqSection';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { SECTION_SPACING } from '@/constants/typography';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

const INTRO_LEAD =
  'Goed risicomanagement begint met inzicht in de risico’s van uw onderneming. Niet ieder risico hoeft verzekerd te worden. Sommige risico’s kunt u beperken of voorkomen, terwijl andere risico’s beter verzekerd kunnen worden.';

const blocks: readonly ContentBlock[] = [
  {
    kind: 'paragraph',
    variant: 'lead',
    text: INTRO_LEAD,
  },
  {
    kind: 'paragraph',
    text: 'Bij TIS Risk Managers kijken wij samen met u naar de risico’s binnen uw onderneming. Met persoonlijk advies, aandacht voor preventie en passende verzekeringsoplossingen helpen wij u deze risico’s beheersbaar te houden.',
  },
  {
    kind: 'paragraph',
    text: 'Binnen TIS beschikken wij over GRMC-geregistreerde deskundigheid op het gebied van risicomanagement.',
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Vier manieren om met risico’s om te gaan',
  },
  {
    kind: 'table',
    columns: ['Aanpak', 'Wat houdt het in?', 'Voorbeeld'],
    rows: [
      [
        'Risico vermijden',
        'Activiteiten of situaties vermijden om risico’s te voorkomen.',
        'Een risicovolle activiteit aanpassen of niet uitvoeren.',
      ],
      [
        'Risico verminderen',
        'Maatregelen nemen om schade te voorkomen of te beperken.',
        'Schade aan voertuigen beperken door chauffeursinstructies en preventiemaatregelen.',
      ],
      [
        'Risico verzekeren',
        'De financiële gevolgen van bepaalde risico’s overdragen aan een verzekeraar.',
        'Een gebouwenverzekering tegen schade door brand.',
      ],
      [
        'Risico zelf dragen',
        'Bewust bepaalde risico’s voor eigen rekening houden.',
        'Kiezen voor een hoger eigen risico in ruil voor een lagere premie.',
      ],
    ],
  },
  {
    kind: 'paragraph',
    text: 'Een goede combinatie van deze mogelijkheden kan helpen om risico’s en verzekeringskosten beter beheersbaar te maken.',
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Uw huidige verzekeringen laten beoordelen',
  },
  {
    kind: 'paragraph',
    text: 'Uw onderneming verandert en daarmee kunnen ook uw verzekeringsrisico’s veranderen. Wij bekijken graag of uw bestaande verzekeringen nog aansluiten bij uw bedrijfsactiviteiten en de risico’s die daarbij horen.',
  },
  { kind: 'paragraph', text: 'Wat wij in de praktijk het vaakst tegenkomen:' },
  {
    kind: 'list',
    items: [
      'Verzekerde sommen die jaren niet zijn aangepast, terwijl de waarde wel is gestegen',
      'Dekkingen die dubbel lopen bij twee verschillende aanbieders',
      'Een activiteit die inmiddels een groot deel van de omzet is, maar nergens op een polis staat',
      'Een bedrijfsschadeverzekering met een uitkeringstermijn die te kort is voor de werkelijke hersteltijd',
      'Preventie-eisen in de voorwaarden waar niemand meer naar heeft gekeken',
    ],
  },
  {
    kind: 'paragraph',
    text: 'Op basis daarvan adviseren wij waar eventuele verbeteringen mogelijk zijn.',
  },

  { kind: 'heading', level: 2, text: 'Wat wij doorlopen' },
  {
    kind: 'table',
    columns: ['Onderdeel', 'Waar wij naar kijken'],
    rows: [
      ['Bedrijfsmiddelen', 'Panden, machines, voertuigen, voorraad en ICT.'],
      [
        'Bedrijfsactiviteiten',
        'Wat u doet, voor wie, en welke aansprakelijkheid daaruit volgt.',
      ],
      [
        'Vervoer en logistiek',
        'Wagenpark, goederen onderweg en vervoerdersaansprakelijkheid.',
      ],
      [
        'Personeel',
        'Verzuim, werkgeversaansprakelijkheid en arbeidsomstandigheden.',
      ],
      ['Preventie', 'Wat u kunt voorkomen voordat u het hoeft te verzekeren.'],
      [
        'Contracten',
        'Welke aansprakelijkheid u in uw algemene voorwaarden heeft geregeld.',
      ],
    ],
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Rapporten en preventie-eisen van verzekeraars',
  },
  {
    kind: 'paragraph',
    text: 'Stuurt een verzekeraar u een risicorapport of een preventie-eis, bijvoorbeeld na een inspectie van uw pand, dan beoordelen wij dat en nemen het met u door. Wat betekent het voor uw dekking, wat moet u werkelijk regelen en op welke termijn, en wat gebeurt er als u het laat zitten.',
  },

  { kind: 'heading', level: 2, text: 'Van onbewust naar bewust verzekerd' },
  {
    kind: 'paragraph',
    text: 'Met goed Risk Management krijgt u inzicht in de risico’s van uw onderneming en kunt u bewust keuzes maken over preventie, verzekeren en het zelf dragen van risico’s.',
  },
  {
    kind: 'link',
    label: 'Naar zakelijke verzekeringen',
    href: NAVIGATION_ROUTES.businessInsurance,
  },
];

export default function Risicoadvies() {
  return (
    <>
      <PageHero
        title={PAGE_META.riskAdvice.heading}
        description={INTRO_LEAD}
        image="/slider-4.jpg"
        ctaLabel="Neem contact op"
        ctaHref={NAVIGATION_ROUTES.contact}
      />

      <UnifiedLayout breadcrumb={<Breadcrumb />}>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <Box as="section">
            <ContentBlocks blocks={blocks} />
          </Box>

          <FaqSection faqs={PAGE_FAQS.riskAdvice} />

          <PageCta
            title="Plan een afspraak"
            text="Wilt u weten welke risico’s uw onderneming loopt en welke daarvan u beter kunt verzekeren of voorkomen? Bel of mail ons voor een afspraak."
            actionLabel="Neem contact op"
            actionHref={NAVIGATION_ROUTES.contact}
          />
        </Flex>
      </UnifiedLayout>
    </>
  );
}
