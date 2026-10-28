'use client';

import { Box, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';

import { ContentLink, LinkTile } from '@/components/content';
import ErrorBoundary from '@/components/error-boundary';
import { UnifiedLayout } from '@/components/layout';
import Loading from '@/components/loading';
import MeldSchade from '@/components/meld-schade';
import { HomeFaq } from '@/components/seo/HomeFaq';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { COMPONENT_SPACING } from '@/constants/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';

const ThreeElements = lazy(() => import('@/components/three-elements'));
const CallToAction = lazy(() => import('@/components/call-to-action'));
const Talker = lazy(() => import('@/components/talker'));

const BRANCHES = [
  {
    href: NAVIGATION_ROUTES.taxi,
    title: 'Taxi en wagenpark',
    linkLabel: 'Naar taxi- en wagenparkverzekering',
    description:
      'Al ruim 25 jaar behoren taxi en het personenvervoer tot onze specialisaties. Wij verzekeren taxibedrijven, zelfstandige chauffeurs, luxe personenvervoer, zorgvervoer en wagenparken. Wij adviseren over passende dekkingen en scherpe premies en begrijpen hoe belangrijk een snelle en goede schadeafhandeling is wanneer een voertuig uitvalt.',
  },
  {
    href: NAVIGATION_ROUTES.realEstate,
    title: 'Vastgoed en VvE',
    linkLabel: 'Naar vastgoed en VvE',
    description:
      'Opstal, glas, huurderving en aansprakelijkheid voor Verenigingen van Eigenaren (VvE), verhuurders en beleggers.',
  },
  {
    href: NAVIGATION_ROUTES.hospitality,
    title: 'Horeca',
    linkLabel: 'Naar horeca',
    description:
      'Voor restaurants, cafés, bars en andere horecabedrijven. Wij adviseren onder andere over inventaris en goederen, bedrijfsschade, aansprakelijkheid en personeelsverzekeringen.',
  },
  {
    href: NAVIGATION_ROUTES.construction,
    title: 'Bouw en technische bedrijven',
    linkLabel: 'Naar bouw en techniek',
    description:
      'Voor aannemers, installateurs, architecten en technische bedrijven verzorgen wij onder andere CAR-, bedrijfs- en beroepsaansprakelijkheids- en werkmaterieelverzekeringen.',
  },
  {
    href: NAVIGATION_ROUTES.liability,
    title: 'Aansprakelijkheid',
    linkLabel: 'Naar aansprakelijkheid',
    description:
      'Bedrijfsaansprakelijkheid en beroepsaansprakelijkheid zijn belangrijke onderdelen van een goed verzekeringspakket. Wij adviseren ondernemers en zelfstandigen over de verzekeringen die passen bij hun werkzaamheden en verantwoordelijkheden.',
  },
  {
    href: NAVIGATION_ROUTES.absence,
    title: 'Ziekteverzuim en personeel',
    linkLabel: 'Naar verzuim en personeel',
    description:
      'Personeel brengt verantwoordelijkheden en financiële risico’s met zich mee. Wij adviseren werkgevers over ziekteverzuim, werkgeversaansprakelijkheid en aanvullende personenverzekeringen voor bijvoorbeeld de WIA.',
  },
] as const;

export default function HomePageContent() {
  return (
    <UnifiedLayout variant="page" showSidebar={true}>
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <ErrorBoundary>
          <Box
            as="header"
            textAlign="center"
            maxW="3xl"
            mx="auto"
            px={{ base: '2', md: '4' }}
            pt={{ base: '2', md: '4' }}
            pb={{ base: '4', md: '6' }}
          >
            <Flex
              direction="column"
              align="center"
              justify="center"
              gap={{ base: '4', md: '5' }}
            >
              <Heading as="h1" {...HEADING_STYLES.h1} mb="0">
                <Text
                  as="span"
                  // Logotype treatment: wider tracking than any letterSpacings step
                  letterSpacing={{ base: '0.06em', md: '0.1em' }}
                  textTransform="uppercase"
                >
                  TIS Risk Managers
                </Text>
              </Heading>
              <Separator
                w={{ base: '10', md: '14' }}
                borderColor="blue.700"
                size="sm"
              />
              <Text {...PARAGRAPH_STYLES.lead}>
                Onafhankelijk verzekeringsadvies in Amsterdam
              </Text>
            </Flex>
          </Box>
          <Box
            hideFrom="xl"
            bg="white"
            borderRadius="xl"
            boxShadow="sm"
            overflow="visible"
            minH="fit-content"
          >
            <MeldSchade />
          </Box>
        </ErrorBoundary>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Text {...PARAGRAPH_STYLES.lead}>
            TIS Risk Managers is een landelijk werkend assurantiekantoor
            gevestigd in Amsterdam. Wij adviseren ondernemers in uiteenlopende
            branches, waaronder het personenvervoer, de horeca, de bouw en
            techniek, en daarnaast vastgoedeigenaren en VvE’s en hun
            particuliere verzekeringen.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Bij TIS combineren we persoonlijk advies met passende
            verzekeringsdekkingen en scherpe premies. Wij kijken verder dan
            alleen de prijs en zorgen dat uw verzekeringen aansluiten bij de
            risico’s die u loopt bij uw onderneming of privéleven.
          </Text>
        </Flex>

        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <ThreeElements />
          </Suspense>
        </ErrorBoundary>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Zakelijke verzekeringen voor iedere onderneming
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            Iedere onderneming heeft andere risico’s. Daarom kijken wij naar uw
            bedrijfsactiviteiten en stellen wij een passend verzekeringspakket
            samen. Naast onze algemene zakelijke verzekeringen hebben wij ruime
            ervaring binnen een aantal specifieke branches.
          </Text>
          <Box
            as="ul"
            role="list"
            listStyleType="none"
            m="0"
            p="0"
            display="grid"
            gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
            gap={COMPONENT_SPACING.grid.sm}
          >
            {BRANCHES.map(branch => (
              <LinkTile
                key={branch.href}
                title={branch.title}
                description={branch.description}
                href={branch.href}
                linkLabel={branch.linkLabel}
              />
            ))}
          </Box>
          <ContentLink
            href={NAVIGATION_ROUTES.businessInsurance}
            label="Bekijk alle zakelijke verzekeringen"
          />
        </Flex>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Laat uw verzekeringen beoordelen
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            Sluiten uw verzekeringen nog aan bij uw huidige
            bedrijfsactiviteiten?
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Wij bekijken graag samen met u of uw bestaande verzekeringspakket
            nog voldoet. Daarbij letten we onder andere op de premie, verzekerde
            bedragen, polisvoorwaarden, mogelijke overlappingen en ontbrekende
            dekkingen.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Zo krijgt u meer inzicht in de risico’s en bijbehorende
            verzekeringen.
          </Text>
          <ContentLink
            href={NAVIGATION_ROUTES.riskAdvice}
            label="Laat uw verzekeringen beoordelen"
          />
        </Flex>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Particulier verzekerd via TIS
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            Naast ondernemers verzekeren wij particulieren voor wie de standaard
            verzekeringsoplossing niet voldoet. Denk aan een hogere
            inboedelwaarde, kostbaarheden, een oldtimer, een vakantiehuis of een
            monumentaal pand. Ook hierbij kunt u rekenen op persoonlijk advies
            en maatwerk.
          </Text>
          <ContentLink
            href={NAVIGATION_ROUTES.personalInsurance}
            label="Naar particuliere verzekeringen"
          />
        </Flex>

        <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
            Schade? Wij handelen het zelf af
          </Heading>
          <Text {...PARAGRAPH_STYLES.body}>
            Bij TIS beschikken wij over een eigen schadeafdeling. Wij beoordelen
            de dekking, begeleiden de schadeafhandeling, schakelen waar nodig
            een expert in en onderzoeken de mogelijkheden om schade op een
            aansprakelijke tegenpartij te verhalen. U houdt daarbij een
            persoonlijk aanspreekpunt binnen TIS.
          </Text>
          <ContentLink
            href={NAVIGATION_ROUTES.damageReport}
            label="Naar schade melden"
          />
        </Flex>

        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <CallToAction />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <HomeFaq />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <Talker
              name="René Enthoven"
              title="Directeur TIS Risk Managers"
              image="/rene.jpg"
              quote="De weldaden van een verzekering komen samen met het onheil aan het licht."
              company="TIS Risk Managers"
            />
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </UnifiedLayout>
  );
}
