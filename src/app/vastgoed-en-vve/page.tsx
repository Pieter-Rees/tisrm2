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
    text: 'Voor Verenigingen van Eigenaren (VvE’s), verhuurders en vastgoedbeleggers verzorgen wij passende verzekeringen voor gebouwen en de risico’s die bij het bezit en beheer van vastgoed horen.',
  },
  {
    kind: 'paragraph',
    text: 'Van opstalverzekeringen en huurderving tot aansprakelijkheid en rechtsbijstand. Wij kijken naar passende dekkingen, goede voorwaarden en scherpe premies, afgestemd op uw vastgoed en de wijze waarop het wordt gebruikt.',
  },

  { kind: 'heading', level: 2, text: 'De opstalverzekering' },
  {
    kind: 'paragraph',
    text: 'Een opstalverzekering biedt dekking voor schade aan het gebouw door verzekerde gebeurtenissen, zoals brand, storm en bepaalde vormen van waterschade.',
  },
  {
    kind: 'paragraph',
    text: 'Of het nu gaat om een appartementencomplex van een VvE, een verhuurd pand of een vastgoedportefeuille: de basis is het verzekeren van het gebouw. De voorwaarden en dekkingen worden afgestemd op het gebruik en de eigendomssituatie.',
  },
  {
    kind: 'paragraph',
    text: 'Voor VvE’s is de verzekering van het gezamenlijke gebouw doorgaans geregeld in de splitsingsakte en het toepasselijke splitsingsreglement.',
  },
  {
    kind: 'table',
    columns: ['Verzekering', 'Waarvoor'],
    rows: [
      [
        'Gebouwen (opstal)',
        'Verzekering van appartementencomplexen, verhuurd vastgoed, beleggingspanden en bedrijfspanden.',
      ],
      [
        'Glas',
        'Schade aan verzekerde ruiten, zoals gevelbeglazing en glas in gemeenschappelijke ruimten.',
      ],
      [
        'Eigenarenbelang',
        'Verzekering van bepaalde verbeteringen of voorzieningen van een appartementseigenaar die niet onder de collectieve gebouwenverzekering vallen.',
      ],
      [
        'Huurderving',
        'Verlies van huurinkomsten wanneer een pand door een gedekte schade tijdelijk niet verhuurbaar of bruikbaar is.',
      ],
    ],
  },

  { kind: 'heading', level: 3, text: 'Let op onderverzekering' },
  {
    kind: 'paragraph',
    text: 'De herbouwwaarde van een gebouw kan in de loop der jaren aanzienlijk veranderen. Wanneer het verzekerd bedrag onvoldoende aansluit bij de werkelijke herbouwwaarde, kan bij schade onderverzekering ontstaan.',
  },
  {
    kind: 'paragraph',
    text: 'Een actuele herbouwwaardetaxatie helpt dit risico te beperken. Afhankelijk van de polisvoorwaarden kan een geldige taxatie ook bescherming bieden tegen onderverzekering.',
  },
  {
    kind: 'paragraph',
    text: 'Bij nieuwe verzekeringsaanvragen en wijzigingen in het vastgoed controleren wij of de verzekerde bedragen en eventuele taxaties nog aansluiten bij de situatie. Daarnaast houden wij de geldigheidsduur van de bij ons bekende taxaties bij en brengen wij het onder uw aandacht wanneer een taxatie aan vernieuwing toe is.',
  },
  {
    kind: 'link',
    label: 'Lees meer over onderverzekering bij VvE’s',
    href: getKnowledgeArticlePath('vve-onderverzekering-herbouwwaarde'),
  },

  { kind: 'heading', level: 2, text: 'Aansprakelijkheid en bestuur' },
  {
    kind: 'paragraph',
    text: 'Het bezit en beheer van vastgoed brengt ook aansprakelijkheidsrisico’s met zich mee. Denk aan een bezoeker die letsel oploopt door een gebrek aan het gebouw of schade die ontstaat door achterstallig onderhoud.',
  },
  {
    kind: 'table',
    columns: ['Verzekering', 'Waarvoor'],
    rows: [
      [
        'Aansprakelijkheid VvE',
        'Aansprakelijkheid voor schade aan derden die verband houdt met het gebouw of het beheer daarvan.',
      ],
      [
        'Bestuurdersaansprakelijkheid VvE',
        'Persoonlijke aansprakelijkheid van bestuursleden voor bepaalde bestuurlijke fouten.',
      ],
      [
        'Rechtsbijstand VvE',
        'Juridische ondersteuning bij verzekerde geschillen, bijvoorbeeld met aannemers, leveranciers of leden.',
      ],
      [
        'Ongevallen vrijwilligers',
        'Een uitkering bij ongevallen van verzekerde vrijwilligers tijdens werkzaamheden voor de VvE.',
      ],
    ],
  },
  {
    kind: 'paragraph',
    text: 'Met name bestuurdersaansprakelijkheid verdient aandacht. Ook vrijwillige bestuurders kunnen onder bepaalde omstandigheden persoonlijk aansprakelijk worden gesteld voor fouten bij de uitvoering van hun bestuurstaken.',
  },

  { kind: 'heading', level: 2, text: 'Verhuurd vastgoed verzekeren' },
  {
    kind: 'paragraph',
    text: 'Verhuurt u woningen of bedrijfsruimte, dan gelden andere voorwaarden dan bij eigen gebruik. Veel standaardpolissen sluiten verhuur uit of beperken de dekking, zeker bij kamerverhuur, kortdurende verhuur of verhuur aan arbeidsmigranten. Wordt dat niet goed gemeld, dan staat u bij schade met lege handen.',
  },
  {
    kind: 'paragraph',
    text: 'Bij verhuurd vastgoed letten wij onder andere op:',
  },
  {
    kind: 'list',
    items: [
      'Of de verhuurvorm en het type huurder correct zijn opgegeven',
      'Of huurderving is meeverzekerd en welke uitkeringstermijn geldt',
      'Of en onder welke voorwaarden schade door huurders verzekerd is',
      'Welke voorwaarden gelden bij leegstand of wijziging van gebruik',
      'Of eventuele aanvullende voorzieningen en eigenaarsbelangen goed zijn verzekerd',
    ],
  },
  {
    kind: 'link',
    label: 'Lees meer over huurderving bij verhuurd vastgoed',
    href: getKnowledgeArticlePath('huurderving-verhuurd-vastgoed'),
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Wanneer uw verzekeringen laten controleren?',
  },
  {
    kind: 'paragraph',
    text: 'Bij verbouwingen, uitbreidingen, wijzigingen in het gebruik of veranderingen in de verhuursituatie is het verstandig om uw verzekeringen opnieuw te beoordelen.',
  },
  {
    kind: 'paragraph',
    text: 'Ook een wijziging van de herbouwwaarde of een verlopen taxatie kan aanleiding zijn om de verzekerde bedragen te controleren.',
  },
  {
    kind: 'paragraph',
    text: 'Wij adviseren u graag over de verzekeringsmogelijkheden en bekijken of uw huidige verzekeringen nog aansluiten bij uw vastgoed.',
  },
];

export default function VastgoedEnVve() {
  return (
    <UnifiedLayout
      title={PAGE_META.realEstate.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={blocks} />
        </Box>

        <PageCta
          title="Vraag een offerte aan"
          text="Wilt u uw vastgoed, verhuurde pand of VvE verzekeren? Of bent u benieuwd of uw bestaande verzekering nog goed aansluit bij uw situatie? Bel of mail ons voor een offerte of een second opinion op uw huidige pakket."
        />
      </Flex>
    </UnifiedLayout>
  );
}
