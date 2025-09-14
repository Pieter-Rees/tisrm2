import Breadcrumb from '@/components/breadcrumb';
import { UnifiedLayout } from '@/components/layout';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import StarList from '@/components/star-list';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  SECTION_SPACING,
} from '@/constants/typography';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

export default function Zakelijk() {
  const vastgoedList = ['Opstal', 'Huurderving', 'Taxaties'];

  const inhoudHorecaList = [
    'Bedrijfsschade',
    'Huurdersbelang',
    'Inventaris en goederen',
    'Elektronica',
  ];

  const bouwTransportList = [
    'Construction Allrisk (CAR)',
    'Goederentransport',
    'Transport eigen vervoer',
    'Transport en verblijf verzekering',
  ];

  const aansprakelijkheidList = [
    'Bedrijfs- en/of beroepsaansprakelijkheid',
    'Vervoerdersaansprakelijkheid',
    'Bestuurdersaansprakelijkheid',
    'Milieuschade',
    'Werkgeversaansprakelijkheid',
  ];

  const motorrijtuigenList = ['Personen en bedrijfswagens', 'Wagenparken'];

  const overigeList = ['Rechtsbijstand', 'Collectieve ongevallen'];

  return (
    <UnifiedLayout title="Zakelijk" breadcrumb={<Breadcrumb capitalizeLinks />}>
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.large}>
          <FadeInUp>
            <Text {...PARAGRAPH_STYLES.body}>
              TIS is al meer dan 25 jaar een landelijk werkend
              assurantiekantoor, welke altijd gespecialiseerd is geweest in
              verzekeren van het personenvervoer. Door onze jarenlange expertise
              in de personenvervoerbranche genieten wij veel vertrouwen bij de
              verzekeringsmaatschappijen. Als klant bent u degene die daar
              direct van profiteert. Doordat voorwaarden, mogelijkheden en
              premies per maatschappij verschillen en wij onafhankelijk zijn,
              kunnen wij voor de meest passende mogelijkheden combineren voor uw
              bedrijf. Dit resulteert in een zeer goede Prijs-Kwaliteit
              verhouding, waarmee u geniet van de meest uitgebreide voorwaarden
              tegen aantrekkelijke premies.
            </Text>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <Text {...PARAGRAPH_STYLES.body}>
              Om u hierbij te helpen en beschermen tegen de mogelijke financiële
              gevolgen van schade in welke situatie dan ook, bieden wij u altijd
              de beste verzekering op maat. Omdat wij 100% onafhankelijk zijn
              bekijken wij per onderneming en per verzekering waar deze het
              beste kan worden ondergebracht. Hierdoor zijn wij instaat voor u
              het beste uit de markt te kiezen, tegen de aantrekkelijkste
              premies.
            </Text>
          </FadeInUp>
          <FadeInUp delay={0.4}>
            <Text {...PARAGRAPH_STYLES.lead}>
              Wilt u uw verzekeringspakket een grondig met ons doorlopen? Neem
              dan gerust contact met ons op!
            </Text>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <Grid
              templateColumns={{
                base: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap={6}
              mt={8}
            >
              <GridItem display="flex" flexDirection="column" minW="0">
                <Box
                  bg="gray.50"
                  p="6"
                  borderRadius="lg"
                  boxShadow="sm"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Heading as="h3" {...HEADING_STYLES.h4}>
                    Vastgoed en bedrijfsgebouwen
                  </Heading>
                  <StarList listItems={vastgoedList} />
                </Box>
              </GridItem>
              <GridItem display="flex" flexDirection="column" minW="0">
                <Box
                  bg="gray.50"
                  p="6"
                  borderRadius="lg"
                  boxShadow="sm"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Heading as="h3" {...HEADING_STYLES.h4}>
                    Inhoud en horeca
                  </Heading>
                  <StarList listItems={inhoudHorecaList} />
                </Box>
              </GridItem>
              <GridItem display="flex" flexDirection="column" minW="0">
                <Box
                  bg="gray.50"
                  p="6"
                  borderRadius="lg"
                  boxShadow="sm"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Heading as="h3" {...HEADING_STYLES.h4}>
                    Bouw en transport
                  </Heading>
                  <StarList listItems={bouwTransportList} />
                </Box>
              </GridItem>
              <GridItem display="flex" flexDirection="column" minW="0">
                <Box
                  bg="gray.50"
                  p="6"
                  borderRadius="lg"
                  boxShadow="sm"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Heading as="h3" {...HEADING_STYLES.h4}>
                    Aansprakelijkheid
                  </Heading>
                  <StarList listItems={aansprakelijkheidList} />
                </Box>
              </GridItem>
              <GridItem display="flex" flexDirection="column" minW="0">
                <Box
                  bg="gray.50"
                  p="6"
                  borderRadius="lg"
                  boxShadow="sm"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Heading as="h3" {...HEADING_STYLES.h4}>
                    Motorrijtuigen
                  </Heading>
                  <StarList listItems={motorrijtuigenList} />
                </Box>
              </GridItem>
              <GridItem display="flex" flexDirection="column" minW="0">
                <Box
                  bg="gray.50"
                  p="6"
                  borderRadius="lg"
                  boxShadow="sm"
                  transition="all 0.3s ease"
                  _hover={{
                    boxShadow: 'md',
                    transform: 'translateY(-2px)',
                  }}
                >
                  <Heading as="h3" {...HEADING_STYLES.h4}>
                    Overige
                  </Heading>
                  <StarList listItems={overigeList} />
                </Box>
              </GridItem>
            </Grid>
          </FadeInUp>
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
