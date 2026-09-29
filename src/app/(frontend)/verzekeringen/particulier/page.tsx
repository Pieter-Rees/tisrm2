import Breadcrumb from '@/components/breadcrumb';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import { UnifiedLayout } from '@/components/layout';
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
    title: 'Onderweg',
    items: [
      'Autoverzekering',
      'Oldtimer',
      'Bromfiets',
      'Motor',
      'Aanhanger',
      'Caravan',
      'Camper',
    ],
  },
  {
    title: 'Gezinssituatie',
    items: ['Aansprakelijkheid', 'Rechtsbijstand', 'Ongevallen'],
  },
  {
    title: 'Wonen',
    items: ['Opstal', 'Inboedel', 'Kostbaarheden', 'Recreatiewoning'],
  },
  {
    title: 'Vrije tijd',
    items: ['Reis', 'Pleziervaartuigen', 'Recreatiegoederen'],
  },
];

export default async function Particulier() {
  const page = await getPageBySlug('verzekeringen-particulier');
  const paragraphs = page?.body?.length ? page.body : [];
  const lists = page?.lists?.length ? page.lists : FALLBACK_LISTS;

  return (
    <UnifiedLayout
      title={page?.title || 'Particulier'}
      breadcrumb={<Breadcrumb capitalizeLinks />}
    >
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <Flex direction="column" gap={SECTION_SPACING.small}>
            {paragraphs.map((text, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <Text
                  {...(index === 4
                    ? PARAGRAPH_STYLES.lead
                    : PARAGRAPH_STYLES.body)}
                >
                  {text}
                </Text>
              </FadeInUp>
            ))}
          </Flex>

          <FadeInUp delay={0.6}>
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
              }}
              gap={SECTION_SPACING.small}
              alignItems="stretch"
              width="100%"
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
