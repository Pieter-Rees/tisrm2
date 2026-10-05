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
import { SECTION_SPACING } from '@/constants/typography';

const ThreeElements = lazy(() => import('@/components/three-elements'));
const Talker = lazy(() => import('@/components/talker'));

function HeroImage() {
  return (
    <Box
      position="relative"
      width="full"
      minHeight={{ base: '100px', md: '150px', lg: '230px' }}
      height="full"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="xl"
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
          <Heading
            as="h1"
            size={{ base: 'xl', md: '2xl' }}
            color="gray.800"
            mb={SPACING_SCALE.xs}
          >
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
                    borderRadius="lg"
                    boxShadow="lg"
                    overflow="hidden"
                    flex="1"
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
                      bg="blue.700"
                      borderRadius="lg"
                      boxShadow="lg"
                      overflow="hidden"
                      height="full"
                      transition={UI_CONSTANTS.hover.button.transition}
                      _hover={{
                        bg: 'blue.900',
                        ...UI_CONSTANTS.hover.button,
                      }}
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
