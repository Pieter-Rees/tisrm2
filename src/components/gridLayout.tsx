/**
 * Modern Grid Layout Component
 * @fileoverview Responsive grid layout with sidebar support and accessibility
 */

'use client';

import { memo, Suspense } from 'react';
import { Grid, GridItem, Heading, Flex, Box } from '@chakra-ui/react';

import Sidebar from '@/components/sidebar';
import Loading from '@/components/loading';
import ErrorBoundary from '@/components/error-boundary';
import { cn } from '@/lib/utils';
import type { GridLayoutProps } from '@/types/components';

/**
 * Modern grid layout component with responsive design and performance optimizations
 * Features:
 * - Responsive grid system with customizable columns
 * - Optional sidebar with lazy loading
 * - Accessibility support with semantic structure
 * - Error boundaries for resilience
 * - Performance optimized with memo and suspense
 * - Modern TypeScript patterns
 */
const GridLayout = memo<GridLayoutProps>(({
  children,
  title,
  sidebar = true,
  breadcrumb,
  columns = 6,
  gap = '8',
  maxWidth = 'full',
  className,
  'data-testid': testId,
}) => {
  return (
    <Box
      className={cn('grid-layout', className)}
      data-testid={testId}
      as="section"
      role="main"
      aria-labelledby="page-title"
      width="full"
      maxW={maxWidth}
      mx="auto"
    >
      {/* Page Header */}
      <Flex
        as="header"
        width="full"
        justify="space-between"
        align={{ base: 'flex-start', lg: 'center' }}
        direction={{ base: 'column', lg: 'row' }}
        mb={{ base: '6', lg: '8' }}
        gap="4"
      >
        <Heading
          id="page-title"
          as="h1"
          size={{ base: 'lg', md: 'xl', lg: '2xl' }}
          color="gray.900"
          fontWeight="bold"
          lineHeight="tight"
        >
          {title}
        </Heading>
        
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

      {/* Main Content Grid */}
      <Grid
        templateColumns={{ 
          base: '1fr', 
          xl: sidebar ? `repeat(${columns}, 1fr)` : '1fr' 
        }}
        gap={gap}
        alignItems="start"
        width="full"
      >
        {/* Main Content Area */}
        <GridItem
          colSpan={{
            base: 1,
            xl: sidebar ? Math.floor(columns * 0.67) : 1
          }}
        >
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
        </GridItem>

        {/* Sidebar */}
        {sidebar && (
          <GridItem
            colSpan={{
              base: 1,
              xl: Math.ceil(columns * 0.33)
            }}
            hideBelow="xl"
          >
            <Box
              as="aside"
              role="complementary"
              aria-label="Sidebar content"
              position="sticky"
              top="100px"
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
                      Er is een probleem opgetreden bij het laden van de sidebar.
                    </Box>
                  </Box>
                }
              >
                <Suspense
                  fallback={
                    <Loading
                      text="Sidebar laden..."
                      size="sm"
                    />
                  }
                >
                  <Sidebar />
                </Suspense>
              </ErrorBoundary>
            </Box>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
});

GridLayout.displayName = 'GridLayout';

export default GridLayout;