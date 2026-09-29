import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import Image from 'next/image';
import { Suspense, lazy } from 'react';

import CallToAction from '@/components/call-to-action';
import CallUs from '@/components/call-us';
import ErrorBoundary from '@/components/error-boundary';
import Loading from '@/components/loading';
import { UnifiedLayout } from '@/components/layout';
import {
  FadeInUp,
  ScaleIn,
  SlideInRight,
  StaggerContainer,
} from '@/components/page-animation';
import { UI_CONSTANTS } from '@/constants/app';
import { NAVIGATION_ROUTES } from '@/constants/app';
import { getPageBySlug } from '@/lib/payload/getPageBySlug';

export const dynamic = 'force-dynamic';

const ThreeElements = lazy(() => import('@/components/three-elements'));
const Talker = lazy(() => import('@/components/talker'));
const MeldSchade = lazy(() => import('@/components/meld-schade'));

const HeroImage = () => (
  <ScaleIn>
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

const DEFAULT_FEATURE_CARDS = [
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

export default async function Homepage() {
  const page = await getPageBySlug('home');
  const body = page?.body ?? [];
  const lists = page?.lists ?? [];

  const featureCards = DEFAULT_FEATURE_CARDS.map((card, index) => {
    const cms = lists[index];
    return {
      ...card,
      title: cms?.title || card.title,
      description: cms?.items[0] || card.description,
    };
  });

  return (
    <UnifiedLayout variant="page" showSidebar={true}>
      <StaggerContainer>
        <Flex direction="column" gap="12">
          <ErrorBoundary>
            <FadeInUp>
              <Grid
                templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                gap="8"
                alignItems="stretch"
              >
                <GridItem height="full">
                  <Suspense
                    fallback={<Loading text="Loading hero image..." />}
                  >
                    <HeroImage />
                  </Suspense>
                </GridItem>

                <GridItem>
                  <Box height="full">
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
                            transition={UI_CONSTANTS.hover.button.transition}
                            _hover={{
                              bg: 'blue.500',
                              ...UI_CONSTANTS.hover.button,
                            }}
                          >
                            <MeldSchade />
                          </Box>
                        </Box>
                      </Flex>
                    </SlideInRight>
                  </Box>
                </GridItem>
              </Grid>
            </FadeInUp>
          </ErrorBoundary>

          <ErrorBoundary>
            <FadeInUp delay={0.3}>
              <Suspense fallback={<Loading text="Loading features..." />}>
                <ThreeElements
                  elements={featureCards}
                  {...(body[0] ? { heading: body[0] } : {})}
                  {...(body[1] ? { description: body[1] } : {})}
                />
              </Suspense>
            </FadeInUp>
          </ErrorBoundary>

          <ErrorBoundary>
            <FadeInUp delay={0.35}>
              <Suspense fallback={<Loading text="Loading call to action..." />}>
                <CallToAction
                  {...(body[2] ? { heading: body[2] } : {})}
                  {...(body[3] ? { description: body[3] } : {})}
                />
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
                  quote={
                    body[4] ||
                    'De weldaden van een verzekering komen samen met het onheil aan het licht.'
                  }
                  company="TIS Risk Managers"
                />
              </Suspense>
            </FadeInUp>
          </ErrorBoundary>
        </Flex>
      </StaggerContainer>
    </UnifiedLayout>
  );
}
