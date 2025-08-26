'use client';

import { Box, Grid, Heading } from '@chakra-ui/react';
import { memo } from 'react';

import Card from '@/components/card';
import { NAVIGATION_ROUTES, EXTERNAL_LINKS } from '@/constants/app';

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
        mt={{ base: '12', lg: '16' }}
        p={{ base: '6', lg: '8' }}
        bg="blue.50"
        borderRadius="xl"
        border="1px solid"
        borderColor="blue.200"
        textAlign="center"
      >
        <Heading
          as="h3"
          size="md"
          color="blue.900"
          mb="3"
          fontWeight="semibold"
        >
          Klaar voor persoonlijk advies?
        </Heading>
        <Box fontSize="sm" color="blue.700" mb="8" maxW="lg" mx="auto">
          Neem contact op voor een vrijblijvend gesprek over uw
          verzekeringsbehoefte
        </Box>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap="8"
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
            ctaLink={EXTERNAL_LINKS.damageReport}
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
