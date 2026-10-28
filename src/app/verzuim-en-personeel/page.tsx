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
    text: 'Wanneer een medewerker ziek wordt, lopen de loonkosten door terwijl het werk mogelijk moet worden opgevangen. Als werkgever bent u in beginsel verplicht om gedurende maximaal twee jaar het loon bij ziekte door te betalen.',
  },
  {
    kind: 'paragraph',
    text: 'Bij TIS Risk Managers adviseren wij over passende ziekteverzuimverzekeringen en aanvullende inkomensverzekeringen voor uw personeel. Met persoonlijk advies, goede voorwaarden en scherpe premies helpen wij u de financiële risico’s van ziekteverzuim te beperken.',
  },

  { kind: 'heading', level: 2, text: 'Loondoorbetaling bij ziekte verzekeren' },
  {
    kind: 'paragraph',
    text: 'De verzuimverzekering vergoedt het loon dat u tijdens ziekte doorbetaalt. Wettelijk bent u verplicht minimaal zeventig procent door te betalen, al schrijven veel cao’s het eerste jaar honderd procent voor. Daar bovenop lopen werkgeverslasten en pensioenpremies gewoon door, en komen vaak de kosten van vervanging.',
  },
  {
    kind: 'paragraph',
    text: 'Reken daarom niet met het kale brutoloon. De werkelijke kosten van een zieke medewerker liggen aanzienlijk hoger.',
  },
  {
    kind: 'link',
    label: 'Lees wat een zieke medewerker werkelijk kost',
    href: getKnowledgeArticlePath('wat-kost-een-zieke-medewerker'),
  },

  { kind: 'heading', level: 3, text: 'Keuzes binnen de verzuimverzekering' },
  {
    kind: 'table',
    columns: ['Keuze', 'Wat betekent het?'],
    rows: [
      [
        'Eigen risico in wachtdagen',
        'U draagt de eerste 10, 20 of 30 ziektedagen zelf. Hoe meer wachtdagen, hoe lager de premie.',
      ],
      [
        'Eigen behoud',
        'U draagt een vooraf bepaalde som zelf, voordat de verzekering uitkeert.',
      ],
      [
        'Dekkingspercentage',
        'Verzekert u zeventig of honderd procent van het loon?',
      ],
      [
        'Werkgeverslasten',
        'Een te kiezen percentage tot 25% dat wordt uitgekeerd, boven op het verzekerde loon.',
      ],
    ],
  },
  {
    kind: 'heading',
    level: 3,
    text: 'Conventioneel of MKB verzuim-ontzorg',
  },
  {
    kind: 'paragraph',
    text: 'Bij een conventionele verzekering ligt de nadruk op de financiële dekking. Een MKB verzuim-ontzorgverzekering combineert deze met uitgebreidere ondersteuning bij verzuim en re-integratie.',
  },
  {
    kind: 'paragraph',
    text: 'Welke verzekeringsvorm het beste aansluit, hangt onder andere af van uw personeelsbestand, loonsom en het financiële risico dat u zelf wilt dragen. Wij vergelijken de mogelijkheden en adviseren over een passende verzekering.',
  },
  {
    kind: 'link',
    label:
      'Lees het verschil tussen een conventionele en een stop-loss verzuimverzekering',
    href: getKnowledgeArticlePath(
      'verzuimverzekering-conventioneel-of-stop-loss',
    ),
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Arbodienstverlening en verzuimbegeleiding',
  },
  {
    kind: 'paragraph',
    text: 'Als werkgever heeft u verplichtingen rondom ziekteverzuim, begeleiding en re-integratie van medewerkers. Daarbij moet u zich laten ondersteunen door een bedrijfsarts of arbodienst, volgens de daarvoor geldende regels.',
  },
  {
    kind: 'paragraph',
    text: 'Ook de Wet verbetering poortwachter stelt eisen aan de begeleiding en re-integratie van zieke werknemers. Het niet naleven van deze verplichtingen kan financiële gevolgen hebben.',
  },
  {
    kind: 'paragraph',
    text: 'Naast het verzorgen van de ziekteverzuimverzekering kunnen wij u doorverwijzen naar gespecialiseerde partijen voor arbodienstverlening en verzuimbegeleiding.',
  },

  { kind: 'heading', level: 2, text: 'WIA' },
  {
    kind: 'paragraph',
    text: 'Wanneer een werknemer na twee jaar ziekte nog arbeidsongeschikt is, kan deze onder bepaalde voorwaarden in aanmerking komen voor een uitkering op grond van de Wet werk en inkomen naar arbeidsvermogen (WIA).',
  },
  {
    kind: 'paragraph',
    text: 'De overgang naar een WIA-uitkering kan leiden tot een aanzienlijke inkomensachteruitgang. Met een aanvullende WIA-verzekering kunt u uw medewerkers extra financiële bescherming bieden bij langdurige arbeidsongeschiktheid.',
  },
  {
    kind: 'paragraph',
    text: 'Welke aanvulling passend is, hangt af van de cao, bestaande arbeidsvoorwaarden en de gewenste inkomensbescherming. Wij adviseren over de verschillende mogelijkheden en helpen u bij het samenstellen van een passende regeling voor uw personeel.',
  },

  { kind: 'heading', level: 2, text: 'Collectieve ongevallenverzekering' },
  {
    kind: 'paragraph',
    text: 'Een collectieve ongevallenverzekering keert een vast bedrag uit bij blijvend letsel of overlijden van een medewerker, ongeacht de schuldvraag. Het is geen vervanger voor de werkgeversaansprakelijkheidsverzekering, maar een aanvulling die snel duidelijkheid geeft op een moment dat niemand op een juridische discussie zit te wachten.',
  },
  {
    kind: 'paragraph',
    text: 'In veel cao’s is deze dekking verplicht gesteld. Werkt u met personeel dat onderweg is of fysiek werk doet, dan is hij ook zonder cao-verplichting het overwegen waard.',
  },

  { kind: 'heading', level: 2, text: 'Ziekteverzuim in het personenvervoer' },
  {
    kind: 'paragraph',
    text: 'Ook voor taxibedrijven en andere ondernemingen in het personenvervoer verzorgen wij passende ziekteverzuimverzekeringen.',
  },
  {
    kind: 'paragraph',
    text: 'Dankzij onze jarenlange ervaring in deze branche kennen wij de specifieke risico’s en de verschillen tussen verzekeraars. Wij zoeken naar een passende oplossing met goede voorwaarden en een scherpe premie.',
  },
  {
    kind: 'link',
    label: 'Naar taxi- en wagenparkverzekeringen',
    href: NAVIGATION_ROUTES.taxi,
  },
];

export default function VerzuimEnPersoneel() {
  return (
    <UnifiedLayout
      title={PAGE_META.absence.heading}
      breadcrumb={<Breadcrumb />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={blocks} />
        </Box>

        <PageCta
          title="Vraag een berekening aan"
          text="Wilt u weten wat uw verzuimrisico kost en wat een verzekering daarvoor doet? Wij adviseren u graag over de mogelijkheden, de verschillende dekkingen en de bijbehorende premies."
        />
      </Flex>
    </UnifiedLayout>
  );
}
