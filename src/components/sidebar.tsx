'use client';

import { Box, VStack } from '@chakra-ui/react';
import { memo } from 'react';

import Card from '@/components/card';
import { CONTACT_INFO, NAVIGATION_ROUTES } from '@/constants/app';
import { cn } from '@/lib/utils';
import {
  sidebarContainerStyles,
  sidebarHelpBoxStyles,
  sidebarHelpTitleStyles,
  sidebarHelpTextStyles,
} from '@/styles/components/layout.styles';
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
    phone: `tel:${CONTACT_INFO.phone}`,
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
        <VStack gap="6" alignItems="stretch">
          {SIDEBAR_CARDS.map(card => (
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

        <Box
          mt="8"
          p="4"
          bg="blue.50"
          borderRadius="md"
          border="1px solid"
          borderColor="blue.200"
          textAlign="center"
        >
          <Box
            fontSize="sm"
            color="blue.700"
            fontWeight="medium"
            mb="1"
          >
            Hulp nodig?
          </Box>
          <Box
            fontSize="xs"
            color="blue.600"
          >
            Onze experts helpen u graag verder met al uw verzekeringsvragen
          </Box>
        </Box>
      </Box>
    );
  },
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
