'use client';

import { Box, Flex } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { ContentBlocks, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import { FaqSection } from '@/components/seo/FaqSection';
import { NAVIGATION_ROUTES, getKnowledgeArticlePath } from '@/constants/app';
import { SECTION_SPACING } from '@/constants/typography';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';
import { PAGE_META } from '@/lib/seo/pageMeta';
import type { ContentBlock } from '@/types/content';

const blocks: readonly ContentBlock[] = [
  {
    kind: 'paragraph',
    variant: 'lead',
    text: 'Al ruim 25 jaar verzekeren wij taxibedrijven, luxe personenvervoer met chauffeur, zorgvervoer en touringcarbedrijven. Van zelfstandige chauffeurs tot ondernemingen met een uitgebreid wagenpark.',
  },
  {
    kind: 'paragraph',
    text: 'Dankzij onze jarenlange ervaring kennen wij de branche en de risico’s die daarbij horen. Wij zoeken naar passende verzekeringsdekkingen, goede voorwaarden en scherpe premies.',
  },
  {
    kind: 'paragraph',
    text: 'Ook bij schade staan wij voor u klaar. Onze eigen schadeafdeling begrijpt hoe belangrijk het is om stilstand te beperken en uw voertuig zo snel mogelijk weer op de weg te krijgen.',
  },

  { kind: 'heading', level: 2, text: 'De taxiverzekering' },
  {
    kind: 'paragraph',
    text: 'Een goede taxiverzekering begint bij de juiste dekking voor uw voertuig. De wettelijk verplichte WA-verzekering vormt de basis. Afhankelijk van uw situatie kunt u deze uitbreiden met een beperkte of volledige cascodekking en aanvullende verzekeringen.',
  },
  {
    kind: 'table',
    columns: ['Verzekering', 'Waarvoor'],
    rows: [
      [
        'WA-taxivervoer (wettelijke aansprakelijkheid)',
        'Wettelijk verplichte aansprakelijkheidsverzekering voor het gebruik als taxi. Dekt onder andere letselschade van betalende passagiers waarvoor de verzekerde aansprakelijk is, evenals schade aan andere verkeersdeelnemers.',
      ],
      [
        'Beperkt casco',
        'Schade aan het eigen voertuig door bepaalde gebeurtenissen, zoals brand, diefstal, storm en ruitschade.',
      ],
      [
        'Volledig casco',
        'Uitgebreidere dekking voor schade aan uw eigen voertuig, waaronder schade door een aanrijding bij eigen schuld.',
      ],
      [
        'Ongevallen inzittenden (POI)',
        'Aanvullende verzekering voor de bestuurder, met een vaste uitkering bij overlijden of blijvende invaliditeit door een ongeval, volgens de polisvoorwaarden.',
      ],
      [
        'Schadeverzekering inzittenden (SVI)',
        'Aanvullende verzekering voor de bestuurder, die verzekerde werkelijk geleden schade na een ongeval vergoedt, zoals letselschade en inkomensverlies, binnen de polisvoorwaarden.',
      ],
      [
        'Bedrijfsaansprakelijkheid (AVB)',
        'Aansprakelijkheid voor schade aan derden door bedrijfsactiviteiten buiten de dekking van de motorrijtuigenverzekering.',
      ],
      ['Rechtsbijstand', 'Juridische ondersteuning.'],
    ],
  },
  {
    kind: 'paragraph',
    text: 'Bij een taxiverzekering is het belangrijk dat de WA-verzekering is afgesloten voor taxivervoer. Letselschade van betalende passagiers valt bij aansprakelijkheid van de verzekerde onder deze WA-dekking. Voor de bestuurder kunnen aanvullend een persoonlijke ongevallenverzekering (POI) en schadeverzekering inzittenden (SVI) worden afgesloten.',
  },
  {
    kind: 'paragraph',
    text: 'Welke dekkingen noodzakelijk of verstandig zijn, hangt af van uw bedrijfsactiviteiten, voertuigen en eventuele eisen van opdrachtgevers. Niet iedere aanvullende dekking maakt standaard onderdeel uit van een taxiverzekering.',
  },

  { kind: 'heading', level: 2, text: 'Verzekeringen en het TX Keurmerk' },
  {
    kind: 'paragraph',
    text: 'Heeft uw taxibedrijf het TX Keurmerk of wilt u hiervoor in aanmerking komen? Dan moet u rekening houden met aanvullende verzekeringseisen.',
  },
  {
    kind: 'paragraph',
    text: 'Wij adviseren u over passende verzekeringen en controleren welke eisen voor uw onderneming van toepassing zijn.',
  },
  {
    kind: 'link',
    label: 'Welke verzekeringen vraagt het TX Keurmerk?',
    href: getKnowledgeArticlePath('tx-keurmerk-verzekeringen'),
  },

  { kind: 'heading', level: 2, text: 'Wagenparkverzekering' },
  {
    kind: 'paragraph',
    text: 'Heeft uw onderneming meerdere voertuigen? Dan kan een wagenparkverzekering een aantrekkelijke oplossing zijn.',
  },
  {
    kind: 'paragraph',
    text: 'Met een wagenparkverzekering kunnen meerdere voertuigen gezamenlijk worden verzekerd. Dit biedt mogelijkheden voor een overzichtelijke administratie, passende voorwaarden en een premieafspraak die aansluit bij uw wagenpark.',
  },
  {
    kind: 'paragraph',
    text: 'Of een wagenparkverzekering voordeliger is dan afzonderlijke polissen, hangt onder andere af van het aantal voertuigen, het type vervoer en uw schadeverleden. Wij vergelijken de mogelijkheden en adviseren welke oplossing het beste bij uw onderneming past.',
  },
  {
    kind: 'paragraph',
    text: 'Naast het zoeken naar passende verzekeringen en scherpe premies, kijken wij ook naar de schadelast van uw wagenpark. Door schades en schadeoorzaken te analyseren, kunnen wij samen met u kijken naar mogelijkheden om de schadelast te beperken en toekomstige premies beheersbaar te houden.',
  },
  {
    kind: 'link',
    label:
      'Lees wanneer een wagenparkverzekering voordeliger is dan losse polissen',
    href: getKnowledgeArticlePath('wagenparkverzekering-of-losse-polissen'),
  },

  {
    kind: 'heading',
    level: 2,
    text: 'Zakelijk wagenpark buiten het personenvervoer',
  },
  {
    kind: 'paragraph',
    text: 'Ook ondernemingen buiten de taxibranche kunnen bij ons terecht voor het verzekeren van hun zakelijke wagenpark. Denk aan installatiebedrijven, aannemers, cateraars en andere ondernemingen die gebruikmaken van meerdere personenauto’s of bedrijfswagens.',
  },
  {
    kind: 'paragraph',
    text: 'Wij bekijken welke verzekeringsvorm aansluit bij uw voertuigen, het gebruik en uw bedrijfsactiviteiten. Daarbij besteden wij aandacht aan zowel de premie en dekking als de beheersbaarheid van de schadelast.',
  },

  { kind: 'heading', level: 2, text: 'Schadeafhandeling voor taxibedrijven' },
  {
    kind: 'paragraph',
    text: 'Onze eigen schadeafdeling behandelt uw dossier van melding tot afwikkeling. U krijgt geen doorverwijzing naar de verzekeraar, maar houdt één aanspreekpunt dat uw polis kent en weet dat uw voertuig moet rijden.',
  },
  { kind: 'paragraph', text: 'Wat wij voor u doen bij schade:' },
  {
    kind: 'list',
    items: [
      'De dekking toetsen en u meteen vertellen waar u aan toe bent',
      'Waar nodig een expert inschakelen en de afspraak voor u inplannen',
      'Uw schade verhalen op de tegenpartij',
      'Bij letsel van een passagier of chauffeur een sterke vertegenwoordiger inschakelen',
    ],
  },
  {
    kind: 'paragraph',
    text: 'Voor onze relaties hebben wij uitgeschreven wat een chauffeur ter plekke moet doen na een aanrijding. Acht stappen, in de volgorde waarin ze van belang zijn. Laat ze gerust aan uw chauffeurs en collega’s zien.',
  },
  {
    kind: 'link',
    label: 'Bekijk de acht stappen en meld uw schade',
    href: NAVIGATION_ROUTES.damageReport,
  },

  { kind: 'heading', level: 2, text: 'Overstappen' },
  {
    kind: 'paragraph',
    text: 'Vaak kan dat ook midden in een verzekeringsjaar. Wij kijken naar uw opzegtermijn en contractduur en zorgen dat er geen dag zonder dekking zit. Zelf opzeggen hoeft u niet, dat regelen wij.',
  },
  {
    kind: 'paragraph',
    text: 'Vraag hier een offerte aan; deze ontvangt u meestal dezelfde dag óf de eerste werkdag erna.',
  },
  {
    kind: 'link',
    label: 'Offerte aanvragen',
    href: NAVIGATION_ROUTES.quote,
  },

  { kind: 'heading', level: 2, text: 'Wat is de beste taxiverzekering?' },
  {
    kind: 'paragraph',
    text: 'De beste taxiverzekering is niet voor iedere ondernemer hetzelfde. De premie speelt uiteraard een belangrijke rol. Daarnaast zijn de dekking, het eigen risico, de voorwaarden en de schadeafhandeling van belang.',
  },
  {
    kind: 'paragraph',
    text: 'Een zelfstandige taxichauffeur heeft nu eenmaal andere verzekeringsbehoeften dan een onderneming met tientallen voertuigen en meerdere chauffeurs.',
  },
  {
    kind: 'paragraph',
    text: 'Bij TIS kijken wij naar uw onderneming, het type vervoer, uw voertuigen en schadeverleden. Op basis daarvan zoeken wij naar een passende verzekering met goede voorwaarden en een scherpe premie.',
  },
  {
    kind: 'link',
    label: 'Taxiverzekering vergelijken: waar let u op?',
    href: getKnowledgeArticlePath('taxiverzekering-vergelijken'),
  },
];

export default function TaxiEnWagenparkverzekering() {
  return (
    <UnifiedLayout title={PAGE_META.taxi.heading} breadcrumb={<Breadcrumb />}>
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Box as="section">
          <ContentBlocks blocks={blocks} />
        </Box>

        <FaqSection faqs={PAGE_FAQS.taxi} />

        <PageCta
          title="Plan een kennismaking"
          text="Bel 020 636 8191 voor een vrijblijvend gesprek, of vraag direct een offerte aan."
        />
      </Flex>
    </UnifiedLayout>
  );
}
