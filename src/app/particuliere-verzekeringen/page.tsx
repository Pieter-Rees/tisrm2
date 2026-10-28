'use client';

import { Box, Flex } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { ContentBlocks, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import { FaqSection } from '@/components/seo/FaqSection';
import { SECTION_SPACING } from '@/constants/typography';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

const blocks: readonly ContentBlock[] = [
  {
    kind: 'paragraph',
    variant: 'lead',
    text: 'Bij TIS Risk Managers verzorgen wij particuliere verzekeringen met persoonlijk advies en aandacht voor uw specifieke situatie. Van woon- en autoverzekeringen tot uitgebreidere verzekeringsoplossingen voor kostbaarheden, bijzondere voertuigen, monumentale panden en tweede woningen.',
  },
  {
    kind: 'paragraph',
    text: 'Vooral wanneer uw bezittingen of verzekeringsbehoeften afwijken van de standaard, is het belangrijk dat uw verzekeringen goed aansluiten bij uw persoonlijke situatie.',
  },

  { kind: 'heading', level: 2, text: 'Wonen' },
  {
    kind: 'paragraph',
    text: 'Of u nu een reguliere woning, een monumentaal pand of een tweede woning bezit, een passende verzekering is belangrijk om uw bezittingen goed te beschermen.',
  },
  {
    kind: 'table',
    columns: ['Verzekering', 'Waarvoor'],
    rows: [
      [
        'Woonhuis',
        'Schade aan de woning zelf: brand, storm, water en inbraakschade.',
      ],
      [
        'Inboedel',
        'Uw spullen, met een verzekerd bedrag dat past bij wat u werkelijk heeft.',
      ],
      [
        'Kostbaarheden en bijzondere bezittingen',
        'Sieraden, kunst, verzamelingen en apparatuur, ook buiten het huis.',
      ],
      ['Glas', 'Ruiten, inclusief bijzondere beglazing.'],
      [
        'Tweede woning',
        'Vakantiewoning of appartement, ook bij periodieke verhuur.',
      ],
      ['Monumentaal pand', 'Herbouw volgens monumentale eisen.'],
    ],
  },

  {
    kind: 'heading',
    level: 3,
    text: 'Bijzondere bezittingen en onderverzekering',
  },
  {
    kind: 'paragraph',
    text: 'Bij waardevolle bezittingen, bijzondere woningen of een uitgebreide inboedel is het belangrijk dat de verzekerde bedragen en voorwaarden aansluiten bij de werkelijke waarde.',
  },
  {
    kind: 'paragraph',
    text: 'Wij adviseren waar nodig over taxaties en passende verzekeringsmogelijkheden, zodat het risico op onderverzekering zoveel mogelijk wordt beperkt.',
  },

  { kind: 'heading', level: 2, text: 'Aansprakelijkheid en rechtsbijstand' },
  {
    kind: 'paragraph',
    text: 'Met een aansprakelijkheidsverzekering voor particulieren (AVP) kunt u zich verzekeren tegen bepaalde schade aan anderen waarvoor u in de privésfeer aansprakelijk bent.',
  },
  {
    kind: 'paragraph',
    text: 'Een particuliere rechtsbijstandverzekering biedt juridische ondersteuning bij verzekerde geschillen, bijvoorbeeld rondom aankopen, wonen of arbeid.',
  },
  {
    kind: 'paragraph',
    text: 'Wij bekijken welke dekkingen en aanvullende modules aansluiten bij uw persoonlijke situatie.',
  },

  { kind: 'heading', level: 2, text: 'Vervoer' },
  {
    kind: 'paragraph',
    text: 'Naast reguliere motorrijtuigenverzekeringen verzorgen wij ook verzekeringen voor klassieke en bijzondere voertuigen.',
  },
  {
    kind: 'table',
    columns: ['Verzekering', 'Waarvoor'],
    rows: [
      [
        'Autoverzekering',
        'WA, beperkt casco of volledig casco, afhankelijk van het voertuig en uw wensen.',
      ],
      [
        'Oldtimer- en klassiekerverzekering',
        'Verzekeringen voor klassieke en bijzondere voertuigen, waarbij onder voorwaarden dekking op basis van taxatiewaarde mogelijk is.',
      ],
      [
        'Motor- en scooterverzekering',
        'Passende aansprakelijkheids- en cascodekkingen voor motoren en scooters.',
      ],
      [
        'Caravan- en camperverzekering',
        'Verzekeringen voor schade aan caravans, campers en eventueel aanvullende bezittingen.',
      ],
      [
        'Pleziervaartuigverzekering',
        'Verzekeringen voor schade aan vaartuigen en aansprakelijkheid, eventueel met aanvullende dekkingen.',
      ],
    ],
  },

  { kind: 'heading', level: 3, text: 'Oldtimers en bijzondere bezittingen' },
  {
    kind: 'paragraph',
    text: 'Bij klassieke en bijzondere voertuigen kan de werkelijke waarde aanzienlijk afwijken van de gebruikelijke dagwaarde.',
  },
  {
    kind: 'paragraph',
    text: 'Een verzekering op basis van een erkende taxatie kan daarom interessant zijn. Wij kijken naar de mogelijkheden en voorwaarden, zodat de verzekering aansluit bij de waarde en het gebruik van uw voertuig.',
  },

  { kind: 'heading', level: 2, text: 'Onderweg en persoonlijk' },
  {
    kind: 'paragraph',
    text: 'Ook voor andere persoonlijke risico’s verzorgen wij passende verzekeringen, waaronder:',
  },
  {
    kind: 'list',
    items: [
      'Reisverzekeringen: voor onder andere bagage en, afhankelijk van de gekozen dekking, medische kosten en annulering',
      'Ongevallenverzekeringen: voor een vooraf vastgestelde uitkering bij overlijden of blijvende invaliditeit als gevolg van een verzekerd ongeval',
    ],
  },

  { kind: 'heading', level: 2, text: 'Uw hele pakket op één plek' },
  {
    kind: 'paragraph',
    text: 'Heeft u meerdere particuliere verzekeringen bij verschillende verzekeraars lopen? Dan kan het verstandig zijn om uw verzekeringspakket opnieuw te bekijken.',
  },
  {
    kind: 'paragraph',
    text: 'Wij beoordelen graag samen met u of de verzekerde bedragen, dekkingen en voorwaarden nog aansluiten bij uw bezittingen en persoonlijke situatie.',
  },
  {
    kind: 'paragraph',
    text: 'Daarbij kijken wij ook naar mogelijke overlappingen en verbeteringen, met aandacht voor goede voorwaarden en scherpe premies.',
  },
];

export default function ParticuliereVerzekeringen() {
  return (
    <UnifiedLayout
      title={PAGE_META.personalInsurance.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={blocks} />
        </Box>

        <FaqSection faqs={PAGE_FAQS.personalInsurance} />

        <PageCta
          title="Vraag een offerte aan"
          text="Wilt u uw woning, kostbaarheden, bijzondere voertuig of andere persoonlijke bezittingen verzekeren? Of wilt u uw bestaande verzekeringen laten beoordelen? Wij adviseren u graag over de mogelijkheden."
        />
      </Flex>
    </UnifiedLayout>
  );
}
