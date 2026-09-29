import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import { UnifiedLayout } from '@/components/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  SECTION_SPACING,
} from '@/constants/typography';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export const dynamic = 'force-dynamic';

export default async function Taxi() {
  const page = await getPageBySlug('taxi');
  const paragraphs = page?.body?.length ? page.body : [];

  return (
    <UnifiedLayout title={page?.title || 'Personenvervoer'}>
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <FadeInUp>
            <Box>
              <Heading as="h2" {...HEADING_STYLES.h2}>
                Taxiverzekering
              </Heading>
              {paragraphs[0] && (
                <Text {...PARAGRAPH_STYLES.body}>{paragraphs[0]}</Text>
              )}
            </Box>
          </FadeInUp>

          {paragraphs[1] && (
            <FadeInUp delay={0.1}>
              <Text {...PARAGRAPH_STYLES.body}>{paragraphs[1]}</Text>
            </FadeInUp>
          )}

          <FadeInUp delay={0.2}>
            <Box>
              <Heading as="h2" {...HEADING_STYLES.h2}>
                Wagenpark
              </Heading>
              {paragraphs[2] && (
                <Text {...PARAGRAPH_STYLES.body}>{paragraphs[2]}</Text>
              )}
              {paragraphs[3] && (
                <Text {...PARAGRAPH_STYLES.lead}>{paragraphs[3]}</Text>
              )}
            </Box>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <Box>
              <Heading as="h2" {...HEADING_STYLES.h2}>
                Schadeafhandeling
              </Heading>
              {paragraphs[4] && (
                <Text {...PARAGRAPH_STYLES.body}>{paragraphs[4]}</Text>
              )}
            </Box>
          </FadeInUp>
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
