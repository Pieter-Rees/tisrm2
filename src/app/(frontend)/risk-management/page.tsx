import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import { UnifiedLayout } from '@/components/layout';
import StarList from '@/components/star-list';
import { PARAGRAPH_STYLES, SECTION_SPACING } from '@/constants/typography';
import { RISK_CATEGORIES } from '@/data/content';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';
import {
  riskHighlightBoxStyles,
  riskSummaryBoxStyles,
  riskItalicTextStyles,
} from '@/styles/components/page.styles';
import { Box, Flex, Text } from '@chakra-ui/react';

export const dynamic = 'force-dynamic';

export default async function Riskmanagement() {
  const page = await getPageBySlug('risk-management');
  const paragraphs = page?.body?.length ? page.body : [];
  const listItems =
    page?.lists?.[0]?.items?.length ?
      page.lists[0].items
    : [...RISK_CATEGORIES];

  return (
    <UnifiedLayout title={page?.title || 'Risk Management'}>
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.small}>
          {paragraphs[0] && (
            <FadeInUp>
              <Text {...PARAGRAPH_STYLES.lead}>{paragraphs[0]}</Text>
            </FadeInUp>
          )}

          {paragraphs[1] && (
            <FadeInUp delay={0.1}>
              <Text {...PARAGRAPH_STYLES.body}>{paragraphs[1]}</Text>
            </FadeInUp>
          )}

          {paragraphs[2] && (
            <FadeInUp delay={0.2}>
              <Text {...PARAGRAPH_STYLES.body}>{paragraphs[2]}</Text>
            </FadeInUp>
          )}

          {(paragraphs[3] || paragraphs[4]) && (
            <FadeInUp delay={0.3}>
              <Box {...riskHighlightBoxStyles}>
                {paragraphs[3] && (
                  <Text {...PARAGRAPH_STYLES.body}>{paragraphs[3]}</Text>
                )}
                {paragraphs[4] && (
                  <Text {...PARAGRAPH_STYLES.body} {...riskItalicTextStyles}>
                    {paragraphs[4]}
                  </Text>
                )}
              </Box>
            </FadeInUp>
          )}

          {paragraphs[5] && (
            <FadeInUp delay={0.4}>
              <Text {...PARAGRAPH_STYLES.body}>{paragraphs[5]}</Text>
            </FadeInUp>
          )}

          <FadeInUp delay={0.5}>
            {paragraphs[6] && (
              <Text {...PARAGRAPH_STYLES.body}>{paragraphs[6]}</Text>
            )}
            <Box {...riskSummaryBoxStyles}>
              <StarList listItems={listItems} />
            </Box>
          </FadeInUp>
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
