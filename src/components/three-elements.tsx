'use client';

import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
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
} from '@/styles/components/feature.styles';
import { cn } from '@/lib/utils';
import type { ThreeElementsProps } from '@/types/components';
const FEATURE_CARDS = [
  {
    id: 'risk-management',
    image: '/slider-2.jpg',
    title: 'Risk Managers',
    description:
      'Onze adviseurs zijn GRMC-geregistreerd en combineren verzekeringskennis met risicomanagement en preventie. Zo bepalen we samen met u per risico wat u verzekert en wat u zelf draagt.',
    cta: 'Lees meer',
    ctaLink: NAVIGATION_ROUTES.riskAdvice,
    variant: 'elevated' as const,
  },
  {
    id: 'maatwerk',
    image: '/unieke-kenmerken.jpg',
    title: 'Maatwerk Verzekeringen',
    description:
      'De verzekeringen van TIS zijn stuk voor stuk maatwerk. Standaard verzekeringsproducten zijn vaak niet toereikend, waardoor er dekking ontbreekt of juist dekking is voor zaken die niet op u of uw bedrijf van toepassing zijn.',
    cta: 'Lees meer',
    ctaLink: NAVIGATION_ROUTES.businessInsurance,
    variant: 'elevated' as const,
  },
  {
    id: 'schadeafhandeling',
    image: '/slider-3.jpg',
    title: 'Eigen Schadeafdeling',
    description:
      'Uw schade blijft bij ons. Wij beoordelen de dekking, begeleiden de afhandeling, schakelen waar nodig een expert in en onderzoeken de mogelijkheden om schade op een aansprakelijke tegenpartij te verhalen. U houdt één vast aanspreekpunt.',
    cta: 'Lees meer',
    ctaLink: NAVIGATION_ROUTES.damageReport,
    variant: 'elevated' as const,
  },
] as const;
const ThreeElements = memo<ThreeElementsProps>(
  ({ elements = FEATURE_CARDS, className, 'data-testid': testId }) => {
    return (
      <Box
        as="section"
        className={cn('three-elements', className)}
        data-testid={testId}
        {...featureSectionContainerStyles}
        aria-label="Waarom kiezen voor TIS?"
      >
        <Box {...featureHeaderStyles}>
          <Heading as="h2" {...HEADING_STYLES.h2} mb="0" textAlign="center">
            Waarom kiezen voor TIS?
          </Heading>
          <Text {...PARAGRAPH_STYLES.large} {...featureDescriptionStyles}>
            Ontdek onze unieke aanpak en specialisaties die ons onderscheiden in
            de verzekeringsmarkt
          </Text>
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
