/**
 * Modern Sidebar Component
 * @fileoverview Responsive sidebar with action cards and contact information
 */

'use client';

import { memo } from 'react';
import { VStack, Box, Heading } from '@chakra-ui/react';

import Card from '@/components/card';
import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import { cn } from '@/lib/utils';
import type { BaseComponentProps } from '@/types/components';

/**
 * Sidebar content configuration
 */
const SIDEBAR_CARDS = [
  {
    id: 'quote',
    variant: 'sidebar' as const,
    title: 'Verzekering afsluiten',
    description: 'Vraag vandaag nog een vrijblijvende offerte aan voor uw verzekeringen',
    cta: 'Offerte aanvragen',
    ctaLink: NAVIGATION_ROUTES.quote,
    buttonVariant: 'solid' as const,
    phone: undefined,
  },
  {
    id: 'documents',
    variant: 'sidebar' as const,
    title: 'Formulieren & Documenten',
    description: 'Download direct belangrijke formulieren voor uw schadeafhandeling en verzekeringsaanvragen',
    cta: 'Naar bestanden',
    ctaLink: NAVIGATION_ROUTES.downloads,
    buttonVariant: 'outline' as const,
    phone: undefined,
  },
  {
    id: 'contact',
    variant: 'sidebar' as const,
    title: 'Vragen?',
    description: 'Neem direct contact met ons op voor persoonlijk advies',
    cta: 'Bel ons nu',
    ctaLink: undefined,
    phone: `tel:${CONTACT_INFO.phone}`,
    buttonVariant: 'outline' as const,
  },
] as const;

/**
 * Modern sidebar component with action cards
 * Features:
 * - Responsive card layout
 * - Action-oriented content structure
 * - Performance optimized with memo
 * - Accessibility support
 * - Modern TypeScript patterns
 * - Consistent spacing and design
 */
const Sidebar = memo<BaseComponentProps>(({
  className,
  'data-testid': testId,
}) => {
  return (
    <Box
      className={cn('sidebar', className)}
      data-testid={testId}
      as="aside"
      role="complementary"
      aria-label="Sidebar navigation and quick actions"
    >
      {/* Sidebar Header */}
      <Box mb="6">
        <Heading
          as="h2"
          size="md"
          color="gray.800"
          fontWeight="semibold"
          textAlign="center"
        >
          Snelle acties
        </Heading>
      </Box>

      {/* Action Cards */}
      <VStack gap="6" align="stretch">
        {SIDEBAR_CARDS.map((card) => (
          <Card
            key={card.id}
            variant={card.variant}
            title={card.title}
            description={card.description}
            cta={card.cta}
            ctaLink={card.ctaLink}
            phone={card.phone}
            buttonVariant={card.buttonVariant}
            data-testid={`sidebar-card-${card.id}`}
          />
        ))}
      </VStack>

      {/* Additional Help Text */}
      <Box
        mt="8"
        p="4"
        bg="blue.50"
        borderRadius="md"
        border="1px solid"
        borderColor="blue.200"
        textAlign="center"
      >
        <Box fontSize="sm" color="blue.700" fontWeight="medium" mb="1">
          Hulp nodig?
        </Box>
        <Box fontSize="xs" color="blue.600">
          Onze experts helpen u graag verder met al uw verzekeringsvragen
        </Box>
      </Box>
    </Box>
  );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;