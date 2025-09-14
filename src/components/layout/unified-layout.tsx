'use client';

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import { Suspense, lazy, memo, type ReactNode } from 'react';

import ErrorBoundary from '@/components/error-boundary';
import Loading from '@/components/loading';
import {
  FadeInUp,
  PageAnimation,
  SlideInRight,
} from '@/components/page-animation';
import { SPACING_PATTERNS } from '@/constants/layout';
import { HEADING_STYLES } from '@/constants/typography';
import { cn } from '@/lib/utils';
import {
  layoutGridStyles,
  // contentAreaStyles,
  // contentHeaderStyles,
  sidebarColumnStyles,
} from '@/styles/components/layout.styles';
import type { BaseComponentProps, ResponsiveValue } from '@/types/components';

const Sidebar = lazy(() => import('@/components/sidebar'));

interface UnifiedLayoutProps extends BaseComponentProps {
  /** Layout variant determines the structure */
  variant?: 'page' | 'grid' | 'base' | 'centered';
  /** Page title */
  title?: string;
  /** Breadcrumb navigation */
  breadcrumb?: ReactNode;
  /** Whether to show sidebar (for page/grid variants) */
  showSidebar?: boolean;
  /** Container max width */
  maxWidth?: ResponsiveValue<string>;
  /** Grid columns (for grid variant) */
  columns?: number;
  /** Gap between elements */
  gap?: ResponsiveValue<string | number>;
  /** Animation enabled */
  animated?: boolean;
  /** Container padding */
  padding?: ResponsiveValue<string | number>;
}

const UnifiedLayout = memo<UnifiedLayoutProps>(
  ({
    children,
    variant = 'page',
    title,
    breadcrumb,
    showSidebar = true,
    maxWidth = 'auto',
    columns: _columns = 6,
    gap = SPACING_PATTERNS.page.section,
    animated = true,
    padding = SPACING_PATTERNS.page.padding,
    className,
    'data-testid': testId,
  }) => {
    const LayoutWrapper = animated ? PageAnimation : Box;

    // Base layout for simple content
    if (variant === 'base' || variant === 'centered') {
      return (
        <LayoutWrapper>
          <Box
            className={cn('unified-layout', `variant-${variant}`, className)}
            data-testid={testId}
            as="section"
            aria-labelledby={title ? 'page-title' : undefined}
            w="full"
            maxW={maxWidth}
            mx="auto"
            p={variant === 'centered' ? padding : undefined}
          >
            {title && (
              <Box as="header">
                <Heading
                  id="page-title"
                  as="h1"
                  {...HEADING_STYLES.h1}
                  textAlign={variant === 'centered' ? 'center' : undefined}
                >
                  {title}
                </Heading>
              </Box>
            )}
            <ErrorBoundary>
              <Box as="main">{children}</Box>
            </ErrorBoundary>
          </Box>
        </LayoutWrapper>
      );
    }

    // Page layout with optional sidebar
    return (
      <LayoutWrapper>
        <Container py={padding} maxW={maxWidth}>
          <Grid
            {...(showSidebar ?
              layoutGridStyles.withSidebar
            : layoutGridStyles.withoutSidebar)}
            gap={gap}
          >
            <GridItem>
              <Flex flexDirection="column" gap={gap}>
                {(title || breadcrumb) && (
                  <FadeInUp>
                    <Flex
                      as="header"
                      width="full"
                      justifyContent="space-between"
                      alignItems={{ base: 'flex-start', lg: 'center' }}
                      flexDirection={{ base: 'column', lg: 'row' }}
                      gap="8"
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
                          flexShrink="0"
                        >
                          {breadcrumb}
                        </Box>
                      )}
                    </Flex>
                  </FadeInUp>
                )}

                <FadeInUp delay={0.1}>
                  <ErrorBoundary>
                    <Box
                      as="main"
                      role="main"
                      aria-label="Main content"
                      minH="200px"
                    >
                      {children}
                    </Box>
                  </ErrorBoundary>
                </FadeInUp>
              </Flex>
            </GridItem>

            {showSidebar && (
              <GridItem hideBelow="xl">
                <SlideInRight delay={0.2}>
                  <Box
                    as="aside"
                    role="complementary"
                    aria-label="Sidebar content"
                    {...sidebarColumnStyles}
                  >
                    <ErrorBoundary
                      fallback={
                        <Box
                          p="4"
                          bg="gray.50"
                          borderRadius="md"
                          border="1px solid"
                          borderColor="gray.200"
                        >
                          <Heading size="sm" color="gray.600" mb="2">
                            Sidebar niet beschikbaar
                          </Heading>
                          <Box fontSize="sm" color="gray.500">
                            Er is een probleem opgetreden bij het laden van de
                            sidebar.
                          </Box>
                        </Box>
                      }
                    >
                      <Suspense
                        fallback={
                          <Loading text="Loading sidebar..." size="sm" />
                        }
                      >
                        <Sidebar />
                      </Suspense>
                    </ErrorBoundary>
                  </Box>
                </SlideInRight>
              </GridItem>
            )}
          </Grid>
        </Container>
      </LayoutWrapper>
    );
  },
);

UnifiedLayout.displayName = 'UnifiedLayout';

export default UnifiedLayout;
