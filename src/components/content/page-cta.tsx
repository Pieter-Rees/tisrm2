'use client';

import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import { ButtonLink } from '@/components/ui/button-link';
import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';
import { HEADING_STYLES, PARAGRAPH_STYLES } from '@/constants/typography';
import {
  outlineButtonStyles,
  primaryButtonStyles,
} from '@/styles/components/button.styles';

type PageCtaProps = {
  title: string;
  text: string;
  /** Overrides the default "Vraag een offerte aan" button label. */
  actionLabel?: string;
  actionHref?: string;
};

export default function PageCta({
  title,
  text,
  actionLabel = 'Vraag een offerte aan',
  actionHref = NAVIGATION_ROUTES.quote,
}: PageCtaProps) {
  return (
    <Box
      as="section"
      bg="blue.50"
      border="1px solid"
      borderColor="blue.200"
      borderRadius="xl"
      p={COMPONENT_SPACING.card.lg}
    >
      <Heading as="h2" {...HEADING_STYLES.h3} mb={SPACING_SCALE.sm}>
        {title}
      </Heading>
      <Text {...PARAGRAPH_STYLES.body} mb={COMPONENT_SPACING.form.group}>
        {text}
      </Text>
      <Flex gap={SPACING_SCALE.sm} wrap="wrap">
        <ButtonLink href={actionHref} {...primaryButtonStyles}>
          {actionLabel}
        </ButtonLink>
        <ButtonLink
          href={CONTACT_INFO.phoneHref}
          variant="outline"
          {...outlineButtonStyles}
        >
          Bel {CONTACT_INFO.phone}
        </ButtonLink>
        <ButtonLink
          href={`mailto:${CONTACT_INFO.email}`}
          variant="outline"
          {...outlineButtonStyles}
        >
          Mail {CONTACT_INFO.email}
        </ButtonLink>
      </Flex>
    </Box>
  );
}
