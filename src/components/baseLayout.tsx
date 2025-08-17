/**
 * Modern Base Layout Component
 * @fileoverview Simple layout component for pages without sidebar
 */

'use client';

import { memo } from 'react';
import { Heading, Box } from '@chakra-ui/react';

import { cn } from '@/lib/utils';
import ErrorBoundary from '@/components/error-boundary';
import type { BaseLayoutProps } from '@/types/components';

/**
 * Base layout component for simple page layouts
 * Features:
 * - Clean, minimal layout structure
 * - Responsive design with proper spacing
 * - Accessibility support with semantic HTML
 * - Error boundary protection
 * - Performance optimized with memo
 * - Modern TypeScript patterns
 */
const BaseLayout = memo<BaseLayoutProps>(({
  title,
  children,
  maxWidth = 'full',
  className,
  'data-testid': testId,
}) => {
  return (
    <Box
      className={cn('base-layout', className)}
      data-testid={testId}
      as="section"
      role="main"
      aria-labelledby="page-title"
      width="full"
      maxW={maxWidth}
      mx="auto"
    >
      {/* Page Header */}
      <Box
        as="header"
        mb={{ base: '6', lg: '8' }}
      >
        <Heading
          id="page-title"
          as="h1"
          size={{ base: 'lg', md: 'xl', lg: '2xl' }}
          color="gray.900"
          fontWeight="bold"
          lineHeight="tight"
          textAlign={{ base: 'center', md: 'left' }}
        >
          {title}
        </Heading>
      </Box>

      {/* Main Content */}
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
    </Box>
  );
});

BaseLayout.displayName = 'BaseLayout';

export default BaseLayout;