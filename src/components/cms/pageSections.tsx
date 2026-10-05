import CallToAction from '@/components/call-to-action';
import Card from '@/components/card';
import AnimatedGrid from '@/components/common/animated-grid';
import StarList from '@/components/star-list';
import { DownloadsGrid } from '@/components/cms/downloadsGrid';
import { FadeInUp, StaggerContainer } from '@/components/page-animation';
import { isCmsMediaSrc, pageImageSrc } from '@/lib/payload/cmsImage';
import type { PageSectionView } from '@/lib/payload/mapPageSections';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  SECTION_SPACING,
} from '@/constants/typography';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

type PageSectionsProps = {
  sections: PageSectionView[];
};

export function PageSections({ sections }: PageSectionsProps) {
  if (!sections.length) {
    return null;
  }

  return (
    <StaggerContainer>
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        {sections.map((section, index) => {
          const delay = index * 0.1;

          if (section.blockType === 'paragraph') {
            return (
              <FadeInUp key={index} delay={delay}>
                <Text {...PARAGRAPH_STYLES.body}>{section.text}</Text>
              </FadeInUp>
            );
          }

          if (section.blockType === 'list') {
            return (
              <FadeInUp key={index} delay={delay}>
                {section.title ? (
                  <Heading as="h3" {...HEADING_STYLES.h3} mb="4">
                    {section.title}
                  </Heading>
                ) : null}
                <StarList listItems={section.items} />
              </FadeInUp>
            );
          }

          if (section.blockType === 'headingSection') {
            return (
              <FadeInUp key={index} delay={delay}>
                <Box>
                  <Heading as="h2" {...HEADING_STYLES.h2}>
                    {section.heading}
                  </Heading>
                  {section.paragraphs.map((text, paragraphIndex) => {
                    const isLast = paragraphIndex === section.paragraphs.length - 1;
                    const useLead = section.lastParagraphIsLead && isLast;
                    return (
                      <Text
                        key={paragraphIndex}
                        {...(useLead ? PARAGRAPH_STYLES.lead : PARAGRAPH_STYLES.body)}
                      >
                        {text}
                      </Text>
                    );
                  })}
                </Box>
              </FadeInUp>
            );
          }

          if (section.blockType === 'cta') {
            return (
              <FadeInUp key={index} delay={delay}>
                <CallToAction
                  {...(section.heading ? { heading: section.heading } : {})}
                  {...(section.description
                    ? { description: section.description }
                    : {})}
                />
              </FadeInUp>
            );
          }

          if (section.blockType === 'image') {
            const src = pageImageSrc(section.imageUrl, '/team.jpg');
            return (
              <FadeInUp key={index} delay={delay}>
                <Box borderRadius="lg" overflow="hidden" boxShadow="lg">
                  <Image
                    src={src}
                    alt={section.alt || 'Page image'}
                    width={750}
                    height={250}
                    unoptimized={isCmsMediaSrc(src)}
                    style={{ display: 'block', width: '100%', height: 'auto' }}
                  />
                </Box>
              </FadeInUp>
            );
          }

          if (section.blockType === 'cards') {
            return (
              <FadeInUp key={index} delay={delay}>
                <AnimatedGrid
                  items={section.cards}
                  renderItem={(card) => (
                    <Card
                      title={card.title}
                      description={card.description}
                      cta={card.cta}
                      ctaLink={card.ctaLink}
                      buttonVariant={card.buttonVariant}
                      {...(card.imageUrl
                        ? { image: pageImageSrc(card.imageUrl, '') }
                        : {})}
                    />
                  )}
                />
              </FadeInUp>
            );
          }

          if (section.blockType === 'downloads') {
            return (
              <FadeInUp key={index} delay={delay}>
                <DownloadsGrid documents={section.documents} />
              </FadeInUp>
            );
          }

          return null;
        })}
      </Flex>
    </StaggerContainer>
  );
}
