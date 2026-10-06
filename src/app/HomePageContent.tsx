'use client';

import { Box, Flex, Heading, Separator, Text } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';

import CallToAction from '@/components/call-to-action';
import ErrorBoundary from '@/components/error-boundary';
import Loading from '@/components/loading';
import { UnifiedLayout } from '@/components/layout';
import MeldSchade from '@/components/meld-schade';
import { HomeFaq } from '@/components/seo/HomeFaq';
import { SECTION_SPACING } from '@/constants/typography';

const ThreeElements = lazy(() => import('@/components/three-elements'));
const Talker = lazy(() => import('@/components/talker'));

export default function HomePageContent() {
  return (
    <UnifiedLayout variant="page" showSidebar={true}>
      <Flex direction="column" gap={SECTION_SPACING.medium}>
        <ErrorBoundary>
          <Box
            as="header"
            textAlign="center"
            maxW="3xl"
            mx="auto"
            px={{ base: '2', md: '4' }}
            pt={{ base: '2', md: '4' }}
            pb={{ base: '4', md: '6' }}
          >
            <Heading
              as="h1"
              fontFamily="heading"
              fontWeight="medium"
              lineHeight="tight"
              color="blue.800"
            >
              <Flex
                direction="column"
                align="center"
                justify="center"
                gap={{ base: '4', md: '5' }}
              >
                <Text
                  as="span"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  letterSpacing={{ base: '0.06em', md: '0.1em' }}
                  textTransform="uppercase"
                >
                  TIS Risk Managers
                </Text>
                <Separator
                  w={{ base: '10', md: '14' }}
                  borderColor="blue.700"
                  size="sm"
                />
                <Text
                  as="span"
                  fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                  fontWeight="normal"
                  letterSpacing="wide"
                  color="gray.600"
                  lineHeight="relaxed"
                >
                  Onafhankelijk verzekeringsadvies in Amsterdam
                </Text>
              </Flex>
            </Heading>
          </Box>
          <Box
            hideFrom="lg"
            bg="white"
            borderRadius="xl"
            boxShadow="sm"
            overflow="visible"
            minH="fit-content"
          >
            <MeldSchade />
          </Box>
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
