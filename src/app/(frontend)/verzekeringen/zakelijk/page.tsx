import Breadcrumb from '@/components/breadcrumb';
import { UnifiedLayout } from '@/components/layout';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import StarList from '@/components/star-list';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  SECTION_SPACING,
} from '@/constants/typography';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

export const dynamic = 'force-dynamic';

const FALLBACK_LISTS = [
  {
    title: 'Vastgoed en bedrijfsgebouwen',
    items: ['Opstal', 'Huurderving', 'Taxaties'],
  },
  {
    title: 'Inhoud en horeca',
    items: [
      'Bedrijfsschade',
      'Huurdersbelang',
      'Inventaris en goederen',
      'Elektronica',
    ],
  },
  {
    title: 'Bouw en transport',
    items: [
      'Construction Allrisk (CAR)',
      'Goederentransport',
      'Transport eigen vervoer',
      'Transport en verblijf verzekering',
    ],
  },
  {
    title: 'Aansprakelijkheid',
    items: [
      'Bedrijfs- en/of beroepsaansprakelijkheid',
      'Vervoerdersaansprakelijkheid',
      'Bestuurdersaansprakelijkheid',
      'Milieuschade',
      'Werkgeversaansprakelijkheid',
    ],
  },
  {
    title: 'Motorrijtuigen',
    items: ['Personen en bedrijfswagens', 'Wagenparken'],
  },
  {
    title: 'Overige',
    items: ['Rechtsbijstand', 'Collectieve ongevallen'],
  },
];

export default async function Zakelijk() {
  const page = await getPageBySlug('verzekeringen-zakelijk');
  const paragraphs = page?.body?.length ? page.body : [];
  const lists = page?.lists?.length ? page.lists : FALLBACK_LISTS;

  return (
    <UnifiedLayout
      title={page?.title || 'Zakelijk'}
      breadcrumb={<Breadcrumb capitalizeLinks />}
    >
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.large}>
          {paragraphs.map((text, index) => (
            <FadeInUp key={index} delay={index * 0.2}>
              <Text
                {...(index === 2
                  ? PARAGRAPH_STYLES.lead
                  : PARAGRAPH_STYLES.body)}
              >
                {text}
              </Text>
            </FadeInUp>
          ))}

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
              {lists.map((list) => (
                <GridItem
                  key={list.title}
                  display="flex"
                  flexDirection="column"
                  minW="0"
                >
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
                      {list.title}
                    </Heading>
                    <StarList listItems={list.items} />
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </FadeInUp>
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
