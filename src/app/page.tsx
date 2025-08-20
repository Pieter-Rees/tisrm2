import { Box, Container, Flex, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import { Suspense, lazy } from 'react';

import CallUs from '@/components/call-us';
import ErrorBoundary from '@/components/error-boundary';
import Loading from '@/components/loading';
import {
  FadeInUp,
  PageAnimation,
  ScaleIn,
  SlideInRight,
  StaggerContainer,
} from '@/components/page-animation';
import { UI_CONSTANTS } from '@/constants/app';

const ThreeElements = lazy(() => import('@/components/three-elements'));
const Talker = lazy(() => import('@/components/talker'));
const SchadeMelden = lazy(() => import('@/components/schade-melden'));
const Sidebar = lazy(() => import('@/components/sidebar'));

const HeroImage = () => (
  <ScaleIn>
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
  </ScaleIn>
);

export default function Homepage() {
  return (
    <PageAnimation>
      <Container py="8">
        <Grid
          templateColumns={{ base: '1fr', xl: '3fr 1fr' }}
          gap="4"
          alignItems="start"
        >
          <GridItem>
            <StaggerContainer>
              <Flex direction="column" gap="4">
                <ErrorBoundary>
                  <FadeInUp>
                    <Grid
                      templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
                      gap="8"
                      alignItems="stretch"
                    >
                      <GridItem>
                        <Suspense
                          fallback={<Loading text="Loading hero image..." />}
                        >
                          <HeroImage />
                        </Suspense>
                      </GridItem>

                      <GridItem>
                        <SlideInRight delay={0.2}>
                          <Flex direction="column" gap="4" height="full">
                            <Box
                              bg="blue.700"
                              borderRadius="lg"
                              boxShadow="lg"
                              overflow="hidden"
                              flex="1"
                              transition={UI_CONSTANTS.hover.button.transition}
                              _hover={{
                                bg: 'blue.600',
                                ...UI_CONSTANTS.hover.button,
                              }}
                            >
                              <CallUs />
                            </Box>

                            <Box hideFrom="lg">
                              <Box
                                bg="blue.600"
                                borderRadius="lg"
                                boxShadow="lg"
                                overflow="hidden"
                                transition={
                                  UI_CONSTANTS.hover.button.transition
                                }
                                _hover={{
                                  bg: 'blue.500',
                                  ...UI_CONSTANTS.hover.button,
                                }}
                              >
                                <SchadeMelden />
                              </Box>
                            </Box>
                          </Flex>
                        </SlideInRight>
                      </GridItem>
                    </Grid>
                  </FadeInUp>
                </ErrorBoundary>

                <ErrorBoundary>
                  <FadeInUp delay={0.3}>
                    <Suspense fallback={<Loading text="Loading features..." />}>
                      <ThreeElements />
                    </Suspense>
                  </FadeInUp>
                </ErrorBoundary>

                <ErrorBoundary>
                  <FadeInUp delay={0.4}>
                    <Suspense
                      fallback={<Loading text="Loading testimonial..." />}
                    >
                      <Talker
                        name="René Enthoven"
                        title="Directeur TIS Risk Managers"
                        image="/rene.jpg"
                        quote="De weldaden van een verzekering komen samen met het onheil aan het licht."
                        company="TIS Risk Managers"
                      />
                    </Suspense>
                  </FadeInUp>
                </ErrorBoundary>
              </Flex>
            </StaggerContainer>
          </GridItem>

          <GridItem hideBelow="xl">
            <SlideInRight delay={0.5}>
              <Box position="sticky" top="100px">
                <ErrorBoundary>
                  <Suspense fallback={<Loading text="Loading sidebar..." />}>
                    <Sidebar />
                  </Suspense>
                </ErrorBoundary>
              </Box>
            </SlideInRight>
          </GridItem>
        </Grid>
      </Container>
    </PageAnimation>
  );
}
