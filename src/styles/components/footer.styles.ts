/**
 * Footer component styles - extracted from footer component
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { UI_CONSTANTS } from '@/constants/app';
import { SPACING_PATTERNS, SPACING_SCALE } from '@/constants/layout';

// Footer container styles
export const footerContainerStyles: SystemStyleObject = {
  bg: 'gray.800',
  py: SPACING_PATTERNS.footer.padding,
  borderTop: '1px solid',
  borderColor: 'gray.700',
};

// Footer grid layout
export const footerGridStyles: SystemStyleObject = {
  gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
  gap: SPACING_PATTERNS.footer.gap,
};

// Footer column styles
export const footerColumnStyles: SystemStyleObject = {
  alignItems: 'start',
  gap: SPACING_SCALE.sm,
};

// Footer heading styles
export const footerHeadingStyles: SystemStyleObject = {
  fontSize: 'xl',
  color: 'white',
  mb: '0',
};

// Footer text styles
export const footerTextStyles: SystemStyleObject = {
  color: 'white',
  fontSize: 'sm',
  m: '0',
};

// Footer links container styles
export const footerLinksContainerStyles: SystemStyleObject = {
  alignItems: 'start',
  gap: '2',
};

// Footer link button styles
export const footerLinkButtonStyles: SystemStyleObject = {
  color: 'white',
  fontSize: 'md',
  lineHeight: 'short',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  minH: '8',
  transition: UI_CONSTANTS.hover.link.transition,
  _hover: {
    color: 'blue.200',
    transform: 'translateX(4px)',
  },
};
