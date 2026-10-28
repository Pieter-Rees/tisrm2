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
    text: 'Een horecabedrijf kent specifieke risico’s. Denk aan brand in de keuken, schade aan inventaris en goederen of tijdelijke sluiting na een calamiteit.',
  },
  {
    kind: 'paragraph',
    text: 'Bij TIS Risk Managers verzorgen wij verzekeringen voor restaurants, cafés, bars en andere horecabedrijven. Wij stellen een passend verzekeringspakket samen, met aandacht voor goede voorwaarden, scherpe premies en persoonlijk advies.',
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Welke verzekeringen heeft een horecabedrijf nodig?',
  },
  {
    kind: 'paragraph',
    text: 'Vier dekkingen vormen samen de kern. Daarnaast zijn er aanvullingen die per zaak verschillen.',
  },

  { kind: 'heading', level: 3, text: 'Inventaris- en goederenverzekering' },
  {
    kind: 'paragraph',
    text: 'Uw inventaris bestaat onder andere uit keukenapparatuur, koelinstallaties, meubilair en de inrichting van uw horecazaak. Onder goederen vallen bijvoorbeeld dranken, levensmiddelen en andere voorraden.',
  },
  {
    kind: 'paragraph',
    text: 'Met een inventaris- en goederenverzekering verzekert u deze bezittingen tegen schade door gedekte gebeurtenissen, zoals brand, storm of diefstal.',
  },
  {
    kind: 'paragraph',
    text: 'Ook schade aan gekoelde of diepgevroren voorraad verdient aandacht. Bederf door een storing van de koelinstallatie is namelijk niet altijd standaard meeverzekerd.',
  },

  { kind: 'heading', level: 3, text: 'Bedrijfsschadeverzekering' },
  {
    kind: 'paragraph',
    text: 'Wanneer uw onderneming na bijvoorbeeld een brand tijdelijk moet sluiten, lopen veel vaste kosten gewoon door.',
  },
  {
    kind: 'paragraph',
    text: 'Een bedrijfsschadeverzekering biedt dekking voor de financiële gevolgen van bedrijfsstilstand door een verzekerde gebeurtenis. Denk aan gemiste brutowinst en doorlopende bedrijfskosten.',
  },
  {
    kind: 'paragraph',
    text: 'Daarbij is vooral de gekozen uitkeringstermijn belangrijk. Herstel van een horecazaak kan langer duren dan verwacht, bijvoorbeeld door bouwwerkzaamheden of vergunningstrajecten.',
  },

  { kind: 'heading', level: 3, text: 'Aansprakelijkheidsverzekering' },
  {
    kind: 'paragraph',
    text: 'Als horecaondernemer kunt u aansprakelijk worden gesteld voor schade aan personen of zaken. Denk aan een bezoeker die uitglijdt of schade die ontstaat door een product dat u serveert. Een bedrijfsaansprakelijkheidsverzekering (AVB) biedt bescherming tegen bepaalde aansprakelijkheidsrisico’s die samenhangen met uw bedrijfsactiviteiten.',
  },
  {
    kind: 'paragraph',
    text: 'Ook eventuele aansprakelijkheid voor schade aan gehuurde zaken verdient aandacht. Welke situaties verzekerd zijn, hangt af van de polisvoorwaarden.',
  },
  {
    kind: 'link',
    label: 'Meer over aansprakelijkheidsverzekeringen',
    href: NAVIGATION_ROUTES.liability,
  },

  { kind: 'heading', level: 3, text: 'Gebouw of huurdersbelang' },
  {
    kind: 'paragraph',
    text: 'Bent u eigenaar van het pand? Dan is een gebouwenverzekering van belang.',
  },
  {
    kind: 'paragraph',
    text: 'Huurt u uw horecapand? Dan kan een huurdersbelangverzekering nodig zijn voor verbeteringen en voorzieningen die u zelf heeft aangebracht, zoals een vaste bar, keuken of afzuiginstallatie.',
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Aanvullende verzekeringen die per zaak verschillen',
  },
  {
    kind: 'table',
    columns: ['Verzekering', 'Waarvoor'],
    rows: [
      [
        'Terrasdekking',
        'Voor schade aan verzekerd terrasmeubilair en parasols.',
      ],
      ['Geld en waarden', 'Bij contant geld in de zaak of tijdens vervoer.'],
      [
        'Rechtsbijstand',
        'Voor juridische geschillen met leveranciers, werknemers of verhuurder.',
      ],
      [
        'Werkgeversaansprakelijkheid',
        'Aansprakelijkheid van de werkgever voor werkgerelateerde schade van werknemers.',
      ],
      [
        'Milieuschade',
        'Voor milieuschaderisico’s die voortkomen uit uw bedrijfsactiviteiten.',
      ],
      [
        'Evenementenaansprakelijkheid',
        'Bij evenementen of catering op locatie.',
      ],
      [
        'Cyber',
        'Voor de digitale risico’s rondom kassasystemen, reserveringen en klantgegevens.',
      ],
    ],
  },

  { kind: 'heading', level: 2, text: 'Personeel in de horeca' },
  {
    kind: 'paragraph',
    text: 'In de horeca wordt veel gewerkt met parttimemedewerkers, oproepkrachten en tijdelijke contracten. Ziekteverzuim kan daardoor aanzienlijke financiële gevolgen hebben.',
  },
  {
    kind: 'paragraph',
    text: 'Als werkgever bent u bij ziekte van een werknemer in beginsel verplicht om gedurende maximaal twee jaar het loon door te betalen. Daarnaast heeft u verplichtingen rondom verzuimbegeleiding en re-integratie.',
  },
  {
    kind: 'paragraph',
    text: 'Met een ziekteverzuimverzekering kunt u de financiële risico’s van loondoorbetaling bij ziekte beperken. Afhankelijk van de gekozen verzekering kan ook ondersteuning bij verzuimbegeleiding worden geregeld.',
  },
  {
    kind: 'paragraph',
    text: 'Wij adviseren over passende oplossingen die aansluiten bij uw onderneming en personeelsbestand.',
  },
  {
    kind: 'link',
    label: 'Meer over ziekteverzuim en personeel',
    href: NAVIGATION_ROUTES.absence,
  },

  { kind: 'heading', level: 2, text: 'Preventie en veiligheid in de horeca' },
  {
    kind: 'paragraph',
    text: 'Goede preventiemaatregelen helpen om schade te voorkomen en zijn belangrijk voor de verzekerbaarheid van uw onderneming.',
  },
  {
    kind: 'paragraph',
    text: 'Verzekeraars kunnen bijvoorbeeld eisen stellen aan elektrische installaties, brandblusvoorzieningen, beveiliging en het onderhoud van afzuiginstallaties.',
  },
  {
    kind: 'paragraph',
    text: 'Wij bespreken de relevante preventie-eisen met u, zodat duidelijk is aan welke voorwaarden uw onderneming moet voldoen.',
  },

  { kind: 'heading', level: 2, text: 'Wat kost een horecaverzekering?' },
  {
    kind: 'paragraph',
    text: 'De premie hangt onder andere af van het type horecabedrijf, uw omzet, de waarde van de inventaris, de bedrijfsactiviteiten en de aanwezige preventiemaatregelen.',
  },
  {
    kind: 'paragraph',
    text: 'Een café zonder keuken kent bijvoorbeeld andere risico’s dan een restaurant met een uitgebreide kookinstallatie.',
  },
  {
    kind: 'paragraph',
    text: 'Wij bekijken uw situatie en zoeken naar een passend verzekeringspakket met goede voorwaarden en een scherpe premie.',
  },
  {
    kind: 'link',
    label: 'Welke verzekeringen heeft een restaurant of café nodig?',
    href: getKnowledgeArticlePath('verzekeringen-restaurant-cafe'),
  },
];

export default function Horecaverzekering() {
  return (
    <UnifiedLayout
      title={PAGE_META.hospitality.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={blocks} />
        </Box>

        <PageCta
          title="Vraag een horecaverzekering aan"
          text="Wilt u uw restaurant, café of andere horecaonderneming verzekeren? Of wilt u weten of uw huidige verzekeringen nog aansluiten bij uw bedrijfsactiviteiten? Wij adviseren u graag over de mogelijkheden."
        />
      </Flex>
    </UnifiedLayout>
  );
}
