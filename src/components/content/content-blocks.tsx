'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import type { Route } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import { BsArrowRight } from 'react-icons/bs';

import StarList from '@/components/star-list';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  PROSE_STACK_GAP,
  SECTION_SPACING,
} from '@/constants/typography';
import type { ContentBlock } from '@/types/content';

export function ContentLink({ href, label }: { href: string; label: string }) {
  return (
    <Box
      asChild
      display="inline-flex"
      alignItems="center"
      gap={SPACING_SCALE.xs}
      {...PARAGRAPH_STYLES.link}
      alignSelf="flex-start"
      textDecoration="underline"
      textUnderlineOffset="3px"
      transition="color 0.2s ease"
      _hover={{ color: 'blue.900' }}
    >
      <Link href={href as Route}>
        {label}
        <BsArrowRight aria-hidden="true" />
      </Link>
    </Box>
  );
}

export function ContentSteps({ items }: { items: readonly string[] }) {
  return (
    <Box as="ol" m="0" pl="0" listStyleType="none">
      {items.map((item, index) => (
        <Flex as="li" key={item} gap={SPACING_SCALE.sm} mb={SPACING_SCALE.sm}>
          <Box
            flexShrink="0"
            minW="7"
            h="7"
            px="2"
            borderRadius="full"
            bg="blue.700"
            color="text.inverse"
            fontSize="sm"
            fontWeight="semibold"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {index + 1}
          </Box>
          <Text {...PARAGRAPH_STYLES.body}>{item}</Text>
        </Flex>
      ))}
    </Box>
  );
}

export function DefinitionList({
  items,
}: {
  items: readonly { term: string; description: string }[];
}) {
  return (
    <Box
      as="dl"
      m="0"
      bg="gray.50"
      borderRadius="xl"
      p={COMPONENT_SPACING.card.md}
    >
      {items.map(({ term, description }, index) => (
        <Fragment key={term}>
          <Box
            as="dt"
            {...HEADING_STYLES.h4}
            mb="0"
            mt={index === 0 ? '0' : SPACING_SCALE.md}
          >
            {term}
          </Box>
          <Box
            as="dd"
            {...PARAGRAPH_STYLES.bodySmall}
            m="0"
            mt="1"
          >
            {description}
          </Box>
        </Fragment>
      ))}
    </Box>
  );
}

export function DataTable({
  columns,
  rows,
}: {
  columns: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <Box overflowX="auto" width="full">
      <Box
        as="table"
        {...PARAGRAPH_STYLES.bodySmall}
        width="full"
        borderCollapse="collapse"
        minW="520px"
      >
        <Box as="thead">
          <Box as="tr">
            {columns.map(column => (
              <Box
                as="th"
                key={column}
                textAlign="start"
                fontFamily="heading"
                fontWeight="semibold"
                color="text.primary"
                borderBottom="2px solid"
                borderColor="blue.700"
                p={SPACING_SCALE.sm}
              >
                {column}
              </Box>
            ))}
          </Box>
        </Box>
        <Box as="tbody">
          {rows.map(row => (
            <Box as="tr" key={row.join('|')}>
              {row.map((cell, cellIndex) => (
                <Box
                  as="td"
                  key={`${row[0] ?? ''}-${cellIndex}`}
                  verticalAlign="top"
                  color={cellIndex === 0 ? 'text.primary' : 'text.secondary'}
                  fontWeight={cellIndex === 0 ? 'medium' : 'normal'}
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  p={SPACING_SCALE.sm}
                >
                  {cell}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export function Callout({ title, text }: { title: string; text: string }) {
  return (
    <Box
      bg="blue.50"
      borderLeft="4px solid"
      borderColor="blue.700"
      borderRadius="md"
      p={COMPONENT_SPACING.card.md}
    >
      <Text {...HEADING_STYLES.h4} color="text.accent" mb={SPACING_SCALE.xs}>
        {title}
      </Text>
      <Text {...PARAGRAPH_STYLES.bodySmall}>{text}</Text>
    </Box>
  );
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.kind) {
    case 'heading':
      return (
        <Heading
          key={`${block.text}-${index}`}
          as={block.level === 2 ? 'h2' : 'h3'}
          {...(block.level === 2 ? HEADING_STYLES.h2 : HEADING_STYLES.h3)}
          mb="0"
          mt={block.level === 2 && index > 0 ? SECTION_SPACING.small : '0'}
        >
          {block.text}
        </Heading>
      );
    case 'paragraph':
      return (
        <Text
          key={`${block.text.slice(0, 32)}-${index}`}
          {...(block.variant === 'lead' ?
            PARAGRAPH_STYLES.lead
          : PARAGRAPH_STYLES.body)}
        >
          {block.text}
        </Text>
      );
    case 'list':
      return <StarList key={`list-${index}`} listItems={block.items} />;
    case 'steps':
      return <ContentSteps key={`steps-${index}`} items={block.items} />;
    case 'definitions':
      return (
        <DefinitionList key={`definitions-${index}`} items={block.items} />
      );
    case 'table':
      return (
        <DataTable
          key={`table-${index}`}
          columns={block.columns}
          rows={block.rows}
        />
      );
    case 'callout':
      return (
        <Callout
          key={`callout-${index}`}
          title={block.title}
          text={block.text}
        />
      );
    case 'link':
      return (
        <ContentLink
          key={`${block.href}-${index}`}
          href={block.href}
          label={block.label}
        />
      );
  }
}

export default function ContentBlocks({
  blocks,
}: {
  blocks: readonly ContentBlock[];
}) {
  return (
    <Flex direction="column" gap={PROSE_STACK_GAP} align="stretch">
      {blocks.map(renderBlock)}
    </Flex>
  );
}
