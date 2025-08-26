'use client';

import { Box, Grid, GridItem, Heading } from '@chakra-ui/react';
import { memo } from 'react';

import Card from '@/components/card';
import { NAVIGATION_ROUTES } from '@/constants/app';
import {
  HEADING_STYLES,
  PARAGRAPH_STYLES,
} from '@/constants/typography';
import {
  featureSectionContainerStyles,
  featureHeaderStyles,
  featureDescriptionStyles,
  featureGridStyles,
  featureGridItemStyles,
  featureCtaStyles,
  featureCtaHeadingStyles,
  featureCtaTextStyles,
  featureCtaButtonStyles,
} from '@/styles/components/feature.styles';
import { cn } from '@/lib/utils';
import type { ThreeElementsProps } from '@/types/components';
const FEATURE_CARDS = [
  {
    id: 'risk-management',
    image: '/slider-2.jpg',
    title: 'Risk Managers',
    description:
      'TIS is de laatste jaren meegegroeid met de ontwikkelingen in de verzekeringsmarkt, alsmede de veranderende behoefte van de klanten. Zodoende zijn de werknemers van TIS gediplomeerd als risico managers en geregistreerd in het register GRMC.',
    cta: 'Lees meer',
    ctaLink: NAVIGATION_ROUTES.riskManagement,
    variant: 'elevated' as const,
  },
  {
    id: 'maatwerk',
    image: '/unieke-kenmerken.jpg',
    title: 'Maatwerk Verzekeringen',
    description:
      'De verzekeringen van TIS zijn stuk voor stuk maatwerk. De standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er een kans bestaat dat er geen dekking is óf juist dekking heeft voor zaken die geen betrekking hebben op u of uw bedrijf.',
    cta: 'Lees meer',
    ctaLink: NAVIGATION_ROUTES.insurance,
    variant: 'elevated' as const,
  },
  {
    id: 'schadeafhandeling',
    image: '/slider-3.jpg',
    title: 'Digitale Schadeafhandeling',
    description:
      'TIS biedt u een volledig digitale schadeafhandeling. Door deze specialisatie staan wij bekend om het snel en vakkundig afwikkelen van uw schade, van een inbraak, stormschade of het verhalen van uw bedrijfsschade.',
    cta: 'Lees meer',
    ctaLink: '#',
    variant: 'elevated' as const,
    external: true,
  },
] as const;
const ThreeElements = memo<ThreeElementsProps>(
  ({ elements = FEATURE_CARDS, className, 'data-testid': testId }) => {
    return (
      <Box
        className={cn('three-elements', className)}
        data-testid={testId}
        {...featureSectionContainerStyles}
        aria-label="Key features and services"
      >
        <Box {...featureHeaderStyles}>
          <Heading as="h2" {...HEADING_STYLES.h2} textAlign="center">
            Waarom kiezen voor TIS?
          </Heading>
          <Box
            {...PARAGRAPH_STYLES.large}
            {...featureDescriptionStyles}
          >
            Ontdek onze unieke aanpak en specialisaties die ons onderscheiden in
            de verzekeringsmarkt
          </Box>
        </Box>

        <Grid {...featureGridStyles}>
          {elements.map((element, index) => (
            <GridItem key={element.id} {...featureGridItemStyles}>
              <Card
                image={element.image}
                title={element.title}
                description={element.description}
                cta={element.cta}
                ctaLink={element.ctaLink}
                variant={element.variant}
                buttonVariant="outline"
                loading={index === 0} // Prioritize first card
                data-testid={`feature-card-${element.id}`}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    );
  },
);

ThreeElements.displayName = 'ThreeElements';

export default ThreeElements;
