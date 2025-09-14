/**
 * Footer component styles - extracted from footer component
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { UI_CONSTANTS } from '@/constants/app';
import { SPACING_PATTERNS } from '@/constants/layout';

// Footer container styles
export const footerContainerStyles: SystemStyleObject = {
  bg: 'gray.700',
  py: SPACING_PATTERNS.footer.padding,
};

// Footer grid layout
export const footerGridStyles: SystemStyleObject = {
  gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
  gap: SPACING_PATTERNS.footer.gap,
};

// Footer column styles
export const footerColumnStyles: SystemStyleObject = {
  alignItems: 'start',
  gap: '4',
};

// Footer heading styles
export const footerHeadingStyles: SystemStyleObject = {
  fontSize: 'md',
  color: 'white',
};

// Footer text styles
export const footerTextStyles: SystemStyleObject = {
  color: 'white',
  fontSize: 'sm',
};

// Footer links container styles
export const footerLinksContainerStyles: SystemStyleObject = {
  alignItems: 'start',
  gap: '2',
};

// Footer link button styles
export const footerLinkButtonStyles: SystemStyleObject = {
  color: 'white',
  fontSize: 'sm',
  p: '0',
  justifyContent: 'flex-start',
  transition: UI_CONSTANTS.hover.link.transition,
  _hover: {
    color: 'blue.200',
    transform: 'translateX(4px)',
  },
};
