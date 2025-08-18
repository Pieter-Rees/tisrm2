import { Suspense, lazy } from 'react';
import { Box, Grid, GridItem, Flex, Container } from '@chakra-ui/react';
import Image from 'next/image';

import CallUs from '@/components/call-us';
import Loading from '@/components/loading';
import ErrorBoundary from '@/components/error-boundary';

const ThreeElements = lazy(() => import('@/components/three-elements'));
const Talker = lazy(() => import('@/components/talker'));
const SchadeMelden = lazy(() => import('@/components/schade-melden'));
const Sidebar = lazy(() => import('@/components/sidebar'));

const HeroImage = () => (
  <Box
    position="relative"
    width="full"
    height={{ base: '100px', md: '200px', lg: '250px' }}
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
export default function Homepage() {
  return (
    <Container py="8">
      <Grid
        templateColumns={{ base: '1fr', xl: '3fr 1fr' }}
        gap="12"
        alignItems="start"
      >
        <GridItem>
          <Flex direction="column" gap="12">
            <ErrorBoundary>
              <Grid
                templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
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

            <ErrorBoundary>
              <Suspense fallback={<Loading text="Loading features..." />}>
                <ThreeElements />
              </Suspense>
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
        </GridItem>

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