'use client';

import { Box, Grid, Heading } from '@chakra-ui/react';
import { memo } from 'react';

import Card from '@/components/card';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';
import { SECTION_SPACING } from '@/constants/typography';

interface CallToActionProps {
  className?: string;
  'data-testid'?: string;
}

const CallToAction = memo<CallToActionProps>(
  ({ className, 'data-testid': testId }) => {
    return (
      <Box
        className={className}
        data-testid={testId}
        p={COMPONENT_SPACING.card.lg}
        bg="blue.50"
        borderRadius="xl"
        border="1px solid"
        borderColor="blue.700"
        textAlign="center"
      >
        <Heading
          as="h2"
          size="md"
          color="blue.900"
          mb={SPACING_SCALE.sm}
          fontWeight="semibold"
        >
          Klaar voor persoonlijk advies?
        </Heading>
        <Box fontSize="sm" color="blue.900" mb={SECTION_SPACING.small} maxW="lg" mx="auto">
          Neem contact op voor een vrijblijvend gesprek over uw
          verzekeringsbehoefte
        </Box>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={SECTION_SPACING.small}
          mx="auto"
        >
          <Card
            title="Bel direct"
            cta="Bel nu"
            phone="tel:+310206368191"
            variant="sidebar"
            buttonVariant="solid"
          />
          <Card
            title="Schade melden"
            cta="Start hier"
            ctaLink={NAVIGATION_ROUTES.damageReport}
            variant="sidebar"
            buttonVariant="solid"
          />
          <Card
            title="Offerte aanvragen"
            cta="Start hier"
            ctaLink={NAVIGATION_ROUTES.quote}
            variant="sidebar"
            buttonVariant="outline"
          />
        </Grid>
      </Box>
    );
  },
);

CallToAction.displayName = 'CallToAction';

export default CallToAction;
