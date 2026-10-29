'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { LinkTile, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import PageHero from '@/components/page-hero';
import { NAVIGATION_ROUTES, getKnowledgeArticlePath } from '@/constants/app';
import { COMPONENT_SPACING } from '@/constants/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import type { KnowledgeCategoryGroup } from '@/data/kennisbank';
import { PAGE_META } from '@/lib/seo/pageMeta';

type KennisbankContentProps = {
  groups: readonly KnowledgeCategoryGroup[];
};

const INTRO_LEAD =
  'In onze kennisbank vindt u praktische informatie over zakelijke verzekeringen, schadeafhandeling en risicomanagement. Wij beantwoorden veelvoorkomende verzekeringsvragen en leggen belangrijke verschillen tussen dekking en voorwaarden uit.';

export default function KennisbankContent({ groups }: KennisbankContentProps) {
  return (
    <>
      <PageHero
        title={PAGE_META.knowledgeBase.heading}
        description={INTRO_LEAD}
        image="/slider-5.jpg"
        ctaLabel="Neem contact op"
        ctaHref={NAVIGATION_ROUTES.contact}
      />

      <UnifiedLayout breadcrumb={<Breadcrumb />}>
        <Flex direction="column" gap={SECTION_SPACING.medium}>
          <Flex as="section" direction="column" gap={PROSE_STACK_GAP}>
            <Text {...PARAGRAPH_STYLES.lead}>{INTRO_LEAD}</Text>
            <Text {...PARAGRAPH_STYLES.body}>
              Zo krijgt u meer inzicht in uw verzekeringen en de risico’s die voor
              uw onderneming relevant zijn. Staat uw vraag er niet tussen? Neem
              gerust contact met ons op.
            </Text>
          </Flex>

          {groups.map(({ category, articles }) => (
            <Flex
              as="section"
              key={category}
              direction="column"
              gap={PROSE_STACK_GAP}
            >
              <Heading as="h2" {...HEADING_STYLES.h2} mb="0">
                {category}
              </Heading>
              <Box
                as="ul"
                listStyleType="none"
                m="0"
                p="0"
                display="grid"
                gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
                gap={COMPONENT_SPACING.grid.sm}
              >
                {articles.map(article => (
                  <LinkTile
                    key={article.slug}
                    title={article.title}
                    description={article.summary}
                    href={getKnowledgeArticlePath(article.slug)}
                    linkLabel="Lees het artikel"
                  />
                ))}
              </Box>
            </Flex>
          ))}

          <PageCta
            title="Heeft u nog vragen?"
            text="Staat uw vraag er niet tussen of wilt u meer weten over een bepaalde verzekering? Onze adviseurs helpen u graag verder."
            actionLabel="Neem contact op"
            actionHref={NAVIGATION_ROUTES.contact}
          />
        </Flex>
      </UnifiedLayout>
    </>
  );
}
