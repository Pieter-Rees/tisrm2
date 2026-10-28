'use client';

import { Box, Flex } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { ContentBlocks, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import { NAVIGATION_ROUTES, getKnowledgeArticlePath } from '@/constants/app';
import { SECTION_SPACING } from '@/constants/typography';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

const blocks: readonly ContentBlock[] = [
  {
    kind: 'paragraph',
    variant: 'lead',
    text: 'Bouw- en technische bedrijven hebben te maken met uiteenlopende risico’s. Denk aan schade tijdens bouwwerkzaamheden, diefstal van werkmaterieel of schade aan eigendommen tijdens montage en installatie.',
  },
  {
    kind: 'paragraph',
    text: 'Bij TIS Risk Managers verzorgen wij passende verzekeringen voor aannemers, installatiebedrijven en andere technische ondernemingen. Met aandacht voor goede voorwaarden, scherpe premies en persoonlijk advies.',
  },

  { kind: 'heading', level: 2, text: 'De CAR-verzekering' },
  {
    kind: 'paragraph',
    text: 'CAR staat voor Construction All Risks, in het Nederlands de bouwverzekering. Deze verzekert het werk zelf tijdens de bouw: materialen, het half afgebouwde werk en wat er tijdens de uitvoering misgaat. Zonder CAR draagt u de schade aan het werk zelf, en dat is zelden een klein bedrag.',
  },
  {
    kind: 'paragraph',
    text: 'In de CAR kan gekozen worden uit verschillende rubrieken om mee te verzekeren.',
  },
  {
    kind: 'table',
    columns: ['Rubriek', 'Wat kan verzekerd worden?'],
    rows: [
      [
        'Het werk',
        'Materiële schade aan het bouwwerk en de materialen tijdens de uitvoering.',
      ],
      [
        'Aansprakelijkheid',
        'Aansprakelijkheid voor schade aan derden tijdens de bouwwerkzaamheden.',
      ],
      [
        'Bestaande eigendommen',
        'Schade aan bestaande gebouwen of eigendommen waaraan of waarin werkzaamheden plaatsvinden.',
      ],
      [
        'Hulpmaterieel',
        'Steigers, bekistingen, keten en gereedschap op de bouwplaats.',
      ],
      [
        'Eigendommen opdrachtgever',
        'Schade aan zaken van de opdrachtgever die op de bouwplaats aanwezig zijn.',
      ],
      [
        'Transport',
        'Transport van de bouwmaterialen ten behoeve van het bouwwerk.',
      ],
    ],
  },

  { kind: 'heading', level: 3, text: 'Doorlopende CAR of per project?' },
  {
    kind: 'paragraph',
    text: 'Een CAR-verzekering kan per bouwproject of als doorlopende verzekering worden afgesloten.',
  },
  {
    kind: 'paragraph',
    text: 'Bij een doorlopende CAR-verzekering kunnen meerdere projecten onder één polis worden verzekerd. Welke voorwaarden, projectgrenzen en eventuele meldingsverplichtingen gelden, hangt af van de verzekering.',
  },
  {
    kind: 'paragraph',
    text: 'Wij bekijken welke verzekeringsvorm het beste aansluit bij uw werkzaamheden, projecten en onderneming.',
  },
  {
    kind: 'link',
    label: 'Lees meer over de CAR-verzekering',
    href: getKnowledgeArticlePath('car-verzekering-uitleg'),
  },

  { kind: 'heading', level: 2, text: 'Werkmaterieel' },
  {
    kind: 'paragraph',
    text: 'Graafmachines, hoogwerkers, mobiele kranen en ander werkmaterieel vertegenwoordigen vaak een aanzienlijke waarde. Schade, diefstal of uitval kan grote gevolgen hebben voor uw werkzaamheden.',
  },
  {
    kind: 'paragraph',
    text: 'Met een werkmaterieelverzekering kunnen machines en ander materieel tegen verschillende risico’s worden verzekerd.',
  },
  {
    kind: 'paragraph',
    text: 'Wij kijken daarbij onder andere naar de dekking tijdens gebruik, transport en op wisselende werklocaties. Ook beoordelen wij welke aansprakelijkheidsdekking nodig is voor het betreffende materieel.',
  },
  {
    kind: 'paragraph',
    text: 'Heeft uw onderneming daarnaast bedrijfsauto’s of bestelwagens? Ook hiervoor verzorgen wij passende motorrijtuigen- en wagenparkverzekeringen.',
  },
  {
    kind: 'link',
    label: 'Meer over wagenparkverzekeringen',
    href: NAVIGATION_ROUTES.taxi,
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Installatiebedrijven en overige technische bedrijven',
  },
  {
    kind: 'paragraph',
    text: 'Installatiebedrijven en andere technische ondernemingen werken vaak op verschillende locaties en aan bestaande gebouwen, installaties en eigendommen van opdrachtgevers.',
  },
  {
    kind: 'paragraph',
    text: 'Specifieke aandachtspunten voor installatie- en technische bedrijven:',
  },
  {
    kind: 'table',
    columns: ['Risico', 'Aandachtspunt'],
    rows: [
      [
        'Brandgevaarlijke werkzaamheden',
        'Bij bijvoorbeeld lassen, solderen en slijpen kunnen specifieke preventie-eisen gelden.',
      ],
      [
        'Montage en installatie',
        'Mogelijke schade aan installaties, materialen en zaken waaraan wordt gewerkt.',
      ],
      ['Gereedschap en apparatuur', 'Schade aan of diefstal van gereedschap.'],
      [
        'Onderhoud en service',
        'Risico’s tijdens onderhouds- en servicewerkzaamheden bij opdrachtgevers.',
      ],
    ],
  },

  { kind: 'heading', level: 2, text: 'Overige bedrijfsverzekeringen' },
  {
    kind: 'paragraph',
    text: 'Naast verzekeringen voor bouwprojecten en werkmaterieel hebben bouw- en technische bedrijven vaak behoefte aan algemene zakelijke verzekeringen.',
  },
  {
    kind: 'paragraph',
    text: 'Denk aan verzekeringen voor inventaris en goederen, aansprakelijkheid, bedrijfsschade, rechtsbijstand en ziekteverzuim.',
  },
  {
    kind: 'paragraph',
    text: 'Wij stellen waar nodig een passend verzekeringspakket samen, afgestemd op de activiteiten van uw onderneming.',
  },
  {
    kind: 'link',
    label: 'Naar zakelijke verzekeringen',
    href: NAVIGATION_ROUTES.businessInsurance,
  },
];

export default function BouwEnTechniek() {
  return (
    <UnifiedLayout
      title={PAGE_META.construction.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={blocks} />
        </Box>

        <PageCta
          title="Vraag een offerte aan"
          text="Wilt u uw bouwproject, werkmaterieel of technische onderneming verzekeren? Bel ons voor een gesprek over uw projecten en materieel."
        />
      </Flex>
    </UnifiedLayout>
  );
}
