'use client';

import { Box, Heading } from '@chakra-ui/react';
import { memo } from 'react';

import ErrorBoundary from '@/components/error-boundary';
import { cn } from '@/lib/utils';
import type { BaseLayoutProps } from '@/types/components';
import type { FC } from 'react';

const HEADING_SIZE = { base: 'lg', md: 'xl', lg: '2xl' } as const;
const HEADING_ALIGNMENT = { base: 'center', md: 'left' } as const;

const BaseLayout: FC<BaseLayoutProps> = memo(
  ({
    title,
    children,
    maxWidth = 'full',
    className,
    'data-testid': testId,
  }) => (
    <Box
      className={cn('base-layout', className)}
      data-testid={testId}
      as="section"
      aria-labelledby={title ? 'page-title' : undefined}
      w="full"
      maxW={maxWidth}
      mx="auto"
    >
      {title && (
        <Box as="header">
          <Heading
            id="page-title"
            as="h1"
            size={HEADING_SIZE}
            color="gray.900"
            fontWeight="bold"
            lineHeight="tight"
            textAlign={HEADING_ALIGNMENT}
          >
            {title}
          </Heading>
        </Box>
      )}
      <ErrorBoundary>
        <Box as="main" minH="200px">
          {children}
        </Box>
      </ErrorBoundary>
    </Box>
  ),
);

BaseLayout.displayName = 'BaseLayout';

export default BaseLayout;
