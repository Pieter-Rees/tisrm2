'use client';

import Breadcrumb from '@/components/breadcrumb';
import { UnifiedLayout } from '@/components/layout';
import { FaqSection } from '@/components/seo/FaqSection';
import StarList from '@/components/star-list';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import { PAGE_FAQS } from '@/lib/seo/pageFaqs';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { COMPONENT_SPACING } from '@/constants/layout';

export default function Particulier() {
  const list1 = [
    'Autoverzekering',
    'Oldtimer',
    'Bromfiets',
    'Motor',
    'Aanhanger',
    'Caravan',
    'Camper',
  ];

  const list2 = ['Aansprakelijkheid', 'Rechtsbijstand', 'Ongevallen'];

  const list3 = ['Opstal', 'Inboedel', 'Kostbaarheden', 'Recreatiewoning'];

  const list4 = ['Reis', 'Pleziervaartuigen', 'Recreatiegoederen'];

  return (
    <UnifiedLayout title="Particulier" breadcrumb={<Breadcrumb />}>
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Flex direction="column" gap={PROSE_STACK_GAP}>
          <Text {...PARAGRAPH_STYLES.body}>
            Iedereen is op zoek naar de goedkoopste verzekering, maar u
            verwacht van ons natuurlijk wél een goed advies als adviseur
            over de allerbeste dekkingen. TIS is daarbij een uitstekend
            partner als zijnde erkend Risico Manager en als zodanig
            geregistreerd in het GRMC register. Hierdoor bent u verzekerd
            van het beste advies.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Wij bieden verzekeringen tegen een concurrerend tarief, zonder
            daarbij de kwaliteit van het product uit het oog te verliezen.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Of u nu een auto-, bromfiets-, aansprakelijkheid- of
            woonhuisverzekering nodig heeft, wij staan voor u klaar!
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Bovendien proberen wij al uw particuliere (schade) verzekeringen
            samen te voegen in één pakket, waardoor u een makkelijk
            overzicht heeft van uw lopende verzekeringen. Daarbij geeft een
            pakket aantrekkelijke kortingen over de premies.
          </Text>
          <Text {...PARAGRAPH_STYLES.lead}>
            Wij groeien graag met u mee.
          </Text>
          <Text {...PARAGRAPH_STYLES.body}>
            Bent u geïnteresseerd of heeft u vragen, neem dan gerust contact
            op via de mail of bel ons!
          </Text>
        </Flex>

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={SECTION_SPACING.small}
          alignItems="stretch"
          width="100%"
        >
          <GridItem display="flex" flexDirection="column" minW="0">
            <Box
              bg="gray.50"
              p={COMPONENT_SPACING.card.lg}
              borderRadius="xl"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: 'md',
                transform: 'translateY(-2px)',
              }}
            >
              <Heading as="h2" {...HEADING_STYLES.h4}>
                Onderweg
              </Heading>
              <StarList listItems={list1} />
            </Box>
          </GridItem>
          <GridItem display="flex" flexDirection="column" minW="0">
            <Box
              bg="gray.50"
              p={COMPONENT_SPACING.card.lg}
              borderRadius="xl"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: 'md',
                transform: 'translateY(-2px)',
              }}
            >
              <Heading as="h2" {...HEADING_STYLES.h4}>
                Gezinssituatie
              </Heading>
              <StarList listItems={list2} />
            </Box>
          </GridItem>
          <GridItem display="flex" flexDirection="column" minW="0">
            <Box
              bg="gray.50"
              p={COMPONENT_SPACING.card.lg}
              borderRadius="xl"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: 'md',
                transform: 'translateY(-2px)',
              }}
            >
              <Heading as="h2" {...HEADING_STYLES.h4}>
                Wonen
              </Heading>
              <StarList listItems={list3} />
            </Box>
          </GridItem>
          <GridItem display="flex" flexDirection="column" minW="0">
            <Box
              bg="gray.50"
              p={COMPONENT_SPACING.card.lg}
              borderRadius="xl"
              boxShadow="sm"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: 'md',
                transform: 'translateY(-2px)',
              }}
            >
              <Heading as="h2" {...HEADING_STYLES.h4}>
                Vrije tijd
              </Heading>
              <StarList listItems={list4} />
            </Box>
          </GridItem>
        </Grid>

        <FaqSection faqs={PAGE_FAQS.insurancePersonal} />
      </Flex>
    </UnifiedLayout>
  );
}
