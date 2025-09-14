/**
 * Utility component styles - breadcrumb, loading, contact-info
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { SPACING_PATTERNS } from '@/constants/layout';

// Style extractors removed due to TypeScript type conflicts

// Breadcrumb styles
export const breadcrumbContainerStyles: SystemStyleObject = {
  gap: SPACING_PATTERNS.page.section,
  fontSize: { base: 'md', xl: 'lg' },
  color: 'gray.700',
};

export const getBreadcrumbItemStyles = (isCurrentPage: boolean): SystemStyleObject => ({
  fontSize: 'xl',
  fontWeight: isCurrentPage ? 'bold' : 'normal',
  color: isCurrentPage ? 'blue.600' : 'gray.700',
});

export const breadcrumbSeparatorStyles: SystemStyleObject = {
  color: 'gray.400',
};

// Loading component styles
export const loadingContentStyles: SystemStyleObject = {
  gap: '4',
};

export const loadingSpinnerStyles: SystemStyleObject = {
  color: 'blue.500',
};

export const loadingTextStyles: SystemStyleObject = {
  fontSize: 'sm',
  color: 'gray.600',
};

export const loadingFullScreenStyles: SystemStyleObject = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  bg: 'white',
  zIndex: '9999',
};

export const loadingInlineStyles: SystemStyleObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minH: '200px',
  p: '8',
};

// Contact info styles
export const contactInfoGridStyles: SystemStyleObject = {
  gap: '10',
};

export const contactInfoColumnStyles: SystemStyleObject = {
  alignItems: 'start',
  gap: '2',
};

export const contactInfoTextStyles: SystemStyleObject = {
  color: 'gray.800',
};

export const contactInfoButtonsContainerStyles: SystemStyleObject = {
  justifyContent: 'start',
  mt: '8',
};

export const contactInfoButtonsListStyles: SystemStyleObject = {
  alignItems: 'start',
  gap: '2',
};

// Footer logos styles
export const footerLogosContainerStyles: SystemStyleObject = {
  backgroundColor: 'gray.100',
  flexDirection: { base: 'column', md: 'row' } as const,
  py: '8',
  gap: '8',
  width: 'full',
  justifyContent: 'center',
  alignItems: 'center',
  mt: '16',
};

export const footerLogoItemStyles: SystemStyleObject = {
  width: '200px',
};

// Error boundary styles
export const errorBoundaryContainerStyles: SystemStyleObject = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minH: '200px',
  p: '8',
};

export const errorBoundaryContentStyles: SystemStyleObject = {
  gap: '4',
  textAlign: 'center',
};

export const errorBoundaryHeadingStyles: SystemStyleObject = {
  fontSize: 'lg',
  color: 'red.500',
};

export const errorBoundaryTextStyles: SystemStyleObject = {
  color: 'gray.600',
};

export const errorBoundaryButtonStyles: SystemStyleObject = {
  // Component props handled in JSX
};
