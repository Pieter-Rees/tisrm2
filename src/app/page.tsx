/**
 * Homepage component
 * @fileoverview Modern homepage with optimized performance and accessibility
 */

import { Suspense } from 'react';
import { Box, Grid, GridItem, Flex, Container } from '@chakra-ui/react';
import Image from 'next/image';

import CallUs from '@/components/call-us';
import ThreeElements from '@/components/three-elements';
import Talker from '@/components/talker';
import SchadeMelden from '@/components/schade-melden';
import Sidebar from '@/components/sidebar';
import Loading from '@/components/loading';
import ErrorBoundary from '@/components/error-boundary';

/**
 * Hero image component with optimized loading
 */
const HeroImage = () => (
  <Box
    position="relative"
    width="full"
    height={{ base: '300px', md: '400px', lg: '500px' }}
    borderRadius="lg"
    overflow="hidden"
    boxShadow="xl"
    bg="gray.100"
  >
    <Image
      src="/1.webp"
      alt="TIS Risk Managers - Professional insurance and risk management services"
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

/**
 * Main homepage component with modern layout and performance optimizations
 * Features:
 * - Responsive grid layout
 * - Optimized image loading
 * - Error boundaries for resilience
 * - Suspense boundaries for loading states
 * - Semantic HTML structure
 * - Accessibility support
 */
export default function Homepage() {
  return (
    <Container maxW="6xl" py="8">
      <Grid
        templateColumns={{ base: '1fr', xl: '2fr 1fr' }}
        gap="12"
        alignItems="start"
      >
        {/* Main Content */}
        <GridItem>
          <Flex direction="column" gap="12">
            {/* Hero Section */}
            <ErrorBoundary>
              <Grid
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap="8"
                alignItems="stretch"
              >
                <GridItem>
                  <Suspense fallback={<Loading text="Loading hero image..." />}>
                    <HeroImage />
                  </Suspense>
                </GridItem>
                
                <GridItem>
                  <Flex direction="column" gap="4" height="full">
                    <Box
                      bg="blue.700"
                      borderRadius="lg"
                      boxShadow="lg"
                      overflow="hidden"
                      flex="1"
                    >
                      <CallUs />
                    </Box>
                    
                    {/* Mobile damage report button */}
                    <Box hideFrom="lg">
                      <Box
                        bg="blue.600"
                        borderRadius="lg"
                        boxShadow="lg"
                        overflow="hidden"
                      >
                        <SchadeMelden />
                      </Box>
                    </Box>
                  </Flex>
                </GridItem>
              </Grid>
            </ErrorBoundary>

            {/* Features Section */}
            <ErrorBoundary>
              <Suspense fallback={<Loading text="Loading features..." />}>
                <ThreeElements />
              </Suspense>
            </ErrorBoundary>

            {/* Testimonial Section */}
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
        </GridItem>

        {/* Sidebar */}
        <GridItem hideBelow="xl">
          <Box position="sticky" top="100px">
            <ErrorBoundary>
              <Suspense fallback={<Loading text="Loading sidebar..." />}>
                <Sidebar />
              </Suspense>
            </ErrorBoundary>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}