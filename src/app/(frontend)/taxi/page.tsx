import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import { PageSections } from '@/components/cms/pageSections';
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

  if (page?.sections?.length) {
    return (
      <UnifiedLayout title={page.title || 'Personenvervoer'}>
        <PageSections sections={page.sections} />
      </UnifiedLayout>
    );
  }

  const sections = page?.lists?.length ? page.lists : [];
  const paragraphs = page?.body?.length ? page.body : [];

  return (
    <UnifiedLayout title={page?.title || 'Personenvervoer'}>
      <StaggerContainer>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          {sections.length > 0
            ? sections.map((section, index) => (
                <FadeInUp key={section.title || index} delay={index * 0.1}>
                  <Box>
                    {section.title && (
                      <Heading as="h2" {...HEADING_STYLES.h2}>
                        {section.title}
                      </Heading>
                    )}
                    {section.items.map((text, itemIndex) => (
                      <Text
                        key={itemIndex}
                        {...(itemIndex === section.items.length - 1 &&
                        section.title === 'Wagenpark' &&
                        section.items.length > 1
                          ? PARAGRAPH_STYLES.lead
                          : PARAGRAPH_STYLES.body)}
                      >
                        {text}
                      </Text>
                    ))}
                  </Box>
                </FadeInUp>
              ))
            : null}

          {sections.length === 0 &&
            paragraphs.map((text, index) => (
              <FadeInUp key={index} delay={index * 0.1}>
                <Text {...PARAGRAPH_STYLES.body}>{text}</Text>
              </FadeInUp>
            ))}
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
