'use client';

import { Box, Flex, Text } from '@chakra-ui/react';

import Breadcrumb from '@/components/breadcrumb';
import { ContentBlocks, ContentLink, PageCta } from '@/components/content';
import { UnifiedLayout } from '@/components/layout';
import { NAVIGATION_ROUTES } from '@/constants/app';
import {
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import type { KnowledgeArticle } from '@/data/kennisbank';

type ArticleContentProps = {
  article: KnowledgeArticle;
};

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <UnifiedLayout
      title={article.title}
      breadcrumb={<Breadcrumb currentLabel={article.title} />}
    >
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <Flex as="article" direction="column" gap={PROSE_STACK_GAP}>
          <Text {...PARAGRAPH_STYLES.lead}>{article.intro}</Text>

          <ContentBlocks blocks={article.blocks} />
        </Flex>

        <Box as="section">
          <ContentLink
            href={NAVIGATION_ROUTES.knowledgeBase}
            label="Terug naar de kennisbank"
          />
        </Box>

        <PageCta
          title="Vragen over uw eigen situatie?"
          text="Onze adviseurs leggen graag uit wat dit voor uw onderneming betekent en welke dekking daarbij past."
          actionLabel="Neem contact op"
          actionHref={NAVIGATION_ROUTES.contact}
        />
      </Flex>
    </UnifiedLayout>
  );
}
