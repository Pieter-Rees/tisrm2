/**
 * Footer component styles - extracted from footer component
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { SPACING_PATTERNS } from '@/constants/layout';

// Footer container styles
export const footerContainerStyles: SystemStyleObject = {
  bg: 'gray.800',
  py: SPACING_PATTERNS.footer.padding,
  borderTop: '1px solid',
  borderColor: 'gray.700',
};

// Footer grid layout
export const footerGridStyles: SystemStyleObject = {
  gridTemplateColumns: {
    base: '1fr',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(4, 1fr)',
  },
  gap: SPACING_PATTERNS.footer.gap,
};
