'use client';

import ErrorBoundary from '@/components/error-boundary';
import Loading from '@/components/loading';
import {
  FadeInUp,
  PageAnimation,
  SlideInRight,
} from '@/components/page-animation';
import { HEADING_STYLES } from '@/constants/typography';
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { Suspense, lazy, type ReactNode } from 'react';

const Sidebar = lazy(() => import('@/components/sidebar'));

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  breadcrumb?: ReactNode;
  showSidebar?: boolean;
  maxWidth?: string;
}

export const PageLayout = ({
  children,
  title,
  breadcrumb,
  showSidebar = true,
  maxWidth = 'auto',
}: PageLayoutProps) => {
  return (
    <PageAnimation>
      <Container py="8" maxW={maxWidth}>
        <Grid
          templateColumns={{ base: '1fr', xl: showSidebar ? '3fr 1fr' : '1fr' }}
          gap="4"
          alignItems="start"
        >
          <GridItem>
            <Flex direction="column" gap="4">
              {(title || breadcrumb) && (
                <FadeInUp>
                  <Flex
                    as="header"
                    width="full"
                    justify="space-between"
                    align={{ base: 'flex-start', lg: 'center' }}
                    direction={{ base: 'column', lg: 'row' }}
                    mb={{ base: '6', lg: '8' }}
                    gap="4"
                  >
                    {title && (
                      <Heading as="h1" {...HEADING_STYLES.h1}>
                        {title}
                      </Heading>
                    )}

                    {breadcrumb && (
                      <Box
                        as="nav"
                        aria-label="Breadcrumb navigation"
                        flexShrink={0}
                      >
                        {breadcrumb}
                      </Box>
                    )}
                  </Flex>
                </FadeInUp>
              )}

              <FadeInUp delay={0.1}>{children}</FadeInUp>
            </Flex>
          </GridItem>

          {showSidebar && (
            <GridItem hideBelow="xl">
              <SlideInRight delay={0.2}>
                <Box position="sticky" top="100px">
                  <ErrorBoundary>
                    <Suspense fallback={<Loading text="Loading sidebar..." />}>
                      <Sidebar />
                    </Suspense>
                  </ErrorBoundary>
                </Box>
              </SlideInRight>
            </GridItem>
          )}
        </Grid>
      </Container>
    </PageAnimation>
  );
};

export default PageLayout;
