'use client';

import { Box, VStack } from '@chakra-ui/react';
import { memo } from 'react';

import Card from '@/components/card';
import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import { cn } from '@/lib/utils';
// import {
//   sidebarContainerStyles,
//   sidebarHelpBoxStyles,
//   sidebarHelpTitleStyles,
//   sidebarHelpTextStyles,
// } from '@/styles/components/layout.styles';
import { COMPONENT_SPACING } from '@/constants/layout';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
  SECTION_SPACING,
} from '@/constants/typography';
import type { BaseComponentProps } from '@/types/components';

const SIDEBAR_CARDS = [
  {
    id: 'quote',
    variant: 'sidebar' as const,
    title: 'Verzekering afsluiten',
    description:
      'Vraag vandaag nog een vrijblijvende offerte aan voor uw verzekeringen',
    cta: 'Offerte aanvragen',
    ctaLink: NAVIGATION_ROUTES.quote,
    buttonVariant: 'solid' as const,
    phone: undefined,
  },
  {
    id: 'documents',
    variant: 'sidebar' as const,
    title: 'Formulieren & Documenten',
    description:
      'Download direct belangrijke formulieren voor uw schadeafhandeling en verzekeringsaanvragen',
    cta: 'Naar downloads',
    ctaLink: NAVIGATION_ROUTES.downloads,
    buttonVariant: 'outline' as const,
    phone: undefined,
  },
  {
    id: 'contact',
    variant: 'sidebar' as const,
    title: 'Vragen?',
    description: 'Neem direct contact met ons op voor persoonlijk advies',
    cta: 'Bel nu',
    ctaLink: undefined,
    phone: CONTACT_INFO.phoneHref,
    buttonVariant: 'outline' as const,
  },
] as const;

const Sidebar = memo<BaseComponentProps>(
  ({ className, 'data-testid': testId }) => {
    return (
      <Box
        className={cn('sidebar', className)}
        data-testid={testId}
        as="aside"
        role="complementary"
        aria-label="Sidebar navigation and quick actions"
      >
        <VStack gap={COMPONENT_SPACING.form.group} alignItems="stretch">
          {SIDEBAR_CARDS.map(card => (
            <Card
              key={card.id}
              variant={card.variant}
              title={card.title}
              titleAs="h2"
              description={card.description}
              cta={card.cta}
              ctaLink={card.ctaLink}
              phone={card.phone}
              buttonVariant={card.buttonVariant}
              data-testid={`sidebar-card-${card.id}`}
            />
          ))}
        </VStack>

        <Box
          mt={SECTION_SPACING.small}
          p={COMPONENT_SPACING.card.lg}
          bg="blue.50"
          borderRadius="xl"
          border="1px solid"
          borderColor="blue.200"
          textAlign="center"
        >
          <Box {...HEADING_STYLES.h5} color="text.accent" mb="1">
            Hulp nodig?
          </Box>
          <Box {...PARAGRAPH_STYLES.small} color="text.accent">
            Onze experts helpen u graag verder met al uw verzekeringsvragen
          </Box>
        </Box>
      </Box>
    );
  },
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
