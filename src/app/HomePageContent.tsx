'use client';

import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { Suspense, lazy } from 'react';

import CallToAction from '@/components/call-to-action';
import CallUs from '@/components/call-us';
import ErrorBoundary from '@/components/error-boundary';
import Loading from '@/components/loading';
import { UnifiedLayout } from '@/components/layout';
import MeldSchade from '@/components/meld-schade';
import { HomeFaq } from '@/components/seo/HomeFaq';
import { UI_CONSTANTS } from '@/constants/app';
import { SPACING_SCALE } from '@/constants/layout';
import { HEADING_STYLES, SECTION_SPACING } from '@/constants/typography';

const ThreeElements = lazy(() => import('@/components/three-elements'));
const Talker = lazy(() => import('@/components/talker'));

function HeroImage() {
  return (
    <Box
      position="relative"
      width="full"
      minHeight={{ base: '220px', md: '320px', lg: '420px' }}
      height="full"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="md"
      bg="gray.100"
    >
      <Image
        src="/1.webp"
        alt="TIS Risk Managers - onafhankelijk verzekeringsadvies in Amsterdam"
        fill
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
    </Box>
  );
}

export default function HomePageContent() {
  return (
    <UnifiedLayout variant="page" showSidebar={true}>
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <ErrorBoundary>
          <Heading as="h1" {...HEADING_STYLES.h1} color="gray.800">
            TIS Risk Managers — onafhankelijk verzekeringsadvies in Amsterdam
          </Heading>
          <Grid
            templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
            gap={SECTION_SPACING.small}
            alignItems="stretch"
          >
            <GridItem height="full">
              <HeroImage />
            </GridItem>

            <GridItem>
              <Box height="full">
                <Flex
                  direction={{ base: 'column', md: 'row', lg: 'column' }}
                  gap={SPACING_SCALE.md}
                  height="full"
                >
                  <Box
                    bg="blue.700"
                    borderRadius="xl"
                    boxShadow="md"
                    overflow="visible"
                    flex="1"
                    minH="fit-content"
                    transition={UI_CONSTANTS.hover.button.transition}
                    _hover={{
                      bg: 'blue.900',
                      ...UI_CONSTANTS.hover.button,
                    }}
                  >
                    <CallUs />
                  </Box>

                  <Box hideFrom="lg" flex={{ base: 'initial', md: '1' }}>
                    <Box
                      bg="white"
                      borderRadius="xl"
                      boxShadow="sm"
                      overflow="visible"
                      height="full"
                      minH="fit-content"
                    >
                      <MeldSchade />
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<Loading text="Loading features..." />}>
            <ThreeElements />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<Loading text="Loading call to action..." />}>
            <CallToAction />
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary>
          <HomeFaq />
        </ErrorBoundary>

        <ErrorBoundary>
          <Suspense fallback={<Loading text="Loading testimonial..." />}>
            <Talker
              name="René Enthoven"
              title="Directeur TIS Risk Managers"
              image="/rene.jpg"
              quote="De weldaden van een verzekering komen samen met het onheil aan het licht."
              company="TIS Risk Managers"
            />
          </Suspense>
        </ErrorBoundary>
      </Flex>
    </UnifiedLayout>
  );
}
