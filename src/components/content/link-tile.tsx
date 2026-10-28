'use client';

import { Flex, Heading, Text } from '@chakra-ui/react';

import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';
import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';

import { ContentLink } from './content-blocks';

type LinkTileProps = {
  title: string;
  description?: string | undefined;
  href: string;
  linkLabel: string;
};

/** Card-styled teaser tile that links on to another page. Renders as a list item. */
export default function LinkTile({
  title,
  description,
  href,
  linkLabel,
}: LinkTileProps) {
  return (
    <Flex
      as="li"
      direction="column"
      gap={SPACING_SCALE.xs}
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="xl"
      boxShadow="md"
      p={COMPONENT_SPACING.card.md}
    >
      <Heading as="h3" {...HEADING_STYLES.h4} mb="0">
        {title}
      </Heading>
      {description && (
        <Text {...PARAGRAPH_STYLES.bodySmall}>{description}</Text>
      )}
      <ContentLink href={href} label={linkLabel} />
    </Flex>
  );
}
