'use client';

import { Box, Flex } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { ContentBlocks, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import { getKnowledgeArticlePath } from '@/constants/app';
import { SECTION_SPACING } from '@/constants/typography';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

const blocks: readonly ContentBlock[] = [
  {
    kind: 'paragraph',
    variant: 'lead',
    text: 'Als ondernemer kunt u aansprakelijk worden gesteld voor schade die ontstaat door uw bedrijfsactiviteiten, producten of professionele dienstverlening. De financiële gevolgen hiervan kunnen aanzienlijk zijn.',
  },
  {
    kind: 'paragraph',
    text: 'Met een passende aansprakelijkheidsverzekering beschermt u uw onderneming tegen deze risico’s. Daarbij maken we onderscheid tussen twee belangrijke verzekeringen: de bedrijfsaansprakelijkheidsverzekering (AVB) en de beroepsaansprakelijkheidsverzekering (BAV).',
  },
  {
    kind: 'paragraph',
    text: 'Wie denkt dat de eerste de tweede dekt, komt er pas bij een claim achter dat dat niet zo is.',
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Bedrijfsaansprakelijkheidsverzekering (AVB)',
  },
  {
    kind: 'paragraph',
    text: 'Een bedrijfsaansprakelijkheidsverzekering biedt dekking voor schade aan personen of zaken waarvoor uw onderneming aansprakelijk is. Denk aan letselschade bij derden of schade aan eigendommen van anderen door uw bedrijfsactiviteiten.',
  },
  {
    kind: 'paragraph',
    text: 'Voorbeelden van situaties waarin een AVB dekking kan bieden:',
  },
  {
    kind: 'list',
    items: [
      'Een monteur beschadigt tijdens werkzaamheden de vloer van een klant',
      'Een bezoeker struikelt over een kabel op uw bedrijfsterrein en loopt letsel op',
      'Een medewerker veroorzaakt tijdens werkzaamheden schade aan eigendommen van een opdrachtgever',
    ],
  },
  {
    kind: 'paragraph',
    text: 'Welke schade daadwerkelijk verzekerd is, hangt af van de polisvoorwaarden, de verzekerde bedrijfsactiviteiten en eventuele uitsluitingen.',
  },

  { kind: 'heading', level: 3, text: 'Productaansprakelijkheid' },
  {
    kind: 'paragraph',
    text: 'Productaansprakelijkheid is doorgaans onderdeel van de bedrijfsaansprakelijkheidsverzekering.',
  },
  {
    kind: 'paragraph',
    text: 'Deze dekking is relevant voor ondernemingen die producten produceren, importeren of leveren. Wanneer een gebrekkig product letselschade of schade aan andere zaken veroorzaakt, kan uw onderneming hiervoor aansprakelijk worden gesteld.',
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Beroepsaansprakelijkheidsverzekering (BAV)',
  },
  {
    kind: 'paragraph',
    text: 'De BAV dekt zuivere vermogensschade: financiële schade door een fout in uw advies, ontwerp of dienstverlening, zonder dat er iets kapot is of iemand gewond raakt. Precies daarom valt het buiten de AVB.',
  },
  {
    kind: 'paragraph',
    text: 'Voorbeelden van situaties waarin een BAV dekking kan bieden:',
  },
  {
    kind: 'list',
    items: [
      'Een architect maakt een fout in een ontwerp of berekening, waardoor extra kosten ontstaan',
      'Een adviseur geeft een onjuist advies waardoor een opdrachtgever financiële schade lijdt',
      'Een ICT-dienstverlener maakt een fout waardoor een opdrachtgever inkomsten misloopt',
      'Een boekhouder mist een belangrijke termijn, met financiële gevolgen voor zijn cliënt',
    ],
  },
  {
    kind: 'paragraph',
    text: 'Voor adviserende en ontwerpende beroepen is de BAV geen luxe maar noodzaak. In veel branches is het inmiddels een voorwaarde om een opdracht te krijgen, en soms een eis van de beroepsorganisatie.',
  },
  {
    kind: 'link',
    label: 'Lees het verschil tussen AVB en BAV uitgebreider',
    href: getKnowledgeArticlePath('avb-of-bav-verschil'),
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Beroepsfouten verzekeren: waar moet u op letten?',
  },
  {
    kind: 'paragraph',
    text: 'Bij een beroepsaansprakelijkheidsverzekering zijn niet alleen het verzekerd bedrag en de premie belangrijk. Ook de voorwaarden bepalen of een aanspraak onder de dekking valt.',
  },

  { kind: 'heading', level: 3, text: 'De dekkingsgrondslag' },
  {
    kind: 'paragraph',
    text: 'Veel beroepsaansprakelijkheidsverzekeringen werken volgens het claims-made-principe. Daarbij is onder meer van belang wanneer een aanspraak wordt ingesteld en gemeld.',
  },
  {
    kind: 'paragraph',
    text: 'Een fout kan bijvoorbeeld jaren eerder zijn gemaakt, terwijl de aansprakelijkstelling pas later volgt. Of deze schade verzekerd is, hangt af van de dekkingsvoorwaarden en eventuele beperkingen.',
  },
  {
    kind: 'paragraph',
    text: 'Ook bij het beëindigen of overstappen van een verzekering is het belangrijk om rekening te houden met mogelijke toekomstige aanspraken.',
  },

  { kind: 'heading', level: 3, text: 'De inloopdekking en retroactieve datum' },
  {
    kind: 'paragraph',
    text: 'Bij het afsluiten van een beroepsaansprakelijkheidsverzekering is het belangrijk om te controleren of fouten uit het verleden kunnen worden meeverzekerd.',
  },
  {
    kind: 'paragraph',
    text: 'Een eventuele retroactieve datum kan hierbij bepalend zijn. Fouten die vóór deze datum zijn gemaakt, kunnen buiten de dekking vallen, ook wanneer de aansprakelijkstelling pas tijdens de looptijd van de verzekering wordt ingediend.',
  },

  { kind: 'heading', level: 3, text: 'Het verzekerd bedrag' },
  {
    kind: 'paragraph',
    text: 'Bij beroepsaansprakelijkheid wordt vaak onderscheid gemaakt tussen het maximaal verzekerd bedrag per aanspraak en het maximale bedrag per verzekeringsjaar.',
  },
  {
    kind: 'paragraph',
    text: 'Het is belangrijk dat deze bedragen aansluiten bij de werkzaamheden, mogelijke financiële gevolgen van beroepsfouten en eventuele contractuele eisen van opdrachtgevers.',
  },
  {
    kind: 'link',
    label: 'Heeft een zzp’er een aansprakelijkheidsverzekering nodig?',
    href: getKnowledgeArticlePath('aansprakelijkheidsverzekering-zzp'),
  },
];

export default function Aansprakelijkheidsverzekering() {
  return (
    <UnifiedLayout
      title={PAGE_META.liability.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={blocks} />
        </Box>

        <PageCta
          title="Vraag een aansprakelijkheidsverzekering aan"
          text="Wilt u uw bedrijfsaansprakelijkheid of beroepsaansprakelijkheid verzekeren? Niet zeker welke dekking u nodig heeft? Bel ons, dan lopen wij het met u door."
        />
      </Flex>
    </UnifiedLayout>
  );
}
