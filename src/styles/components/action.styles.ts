/**
 * Action component styles - extracted from call-us, meld-schade components
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { COMPONENT_SPACING } from '@/constants/layout';
import { SECTION_SPACING } from '@/constants/typography';

// Base action button styles
export const actionButtonBaseStyles: SystemStyleObject = {
  width: 'full',
  height: 'full',
  bg: 'blue.700',
  color: 'white',
};

// Action content container styles
export const actionContentStyles: SystemStyleObject = {
  justifyContent: 'center',
  height: 'full',
  flexDirection: 'column',
  p: COMPONENT_SPACING.card.xl,
  gap: SECTION_SPACING.small,
};

// Action icon styles
export const actionIconStyles: SystemStyleObject = {
  color: 'white',
};

// Action heading styles
export const actionHeadingStyles: SystemStyleObject = {
  fontSize: 'md',
  color: 'white',
};

// Action text styles
export const actionTextStyles: SystemStyleObject = {
  color: 'white',
};

// Specific action variants
export const actionVariants = {
  callUs: {
    content: {
      ...actionContentStyles,
      gap: SECTION_SPACING.small,
    },
    icon: {
      ...actionIconStyles,
    },
    heading: {
      ...actionHeadingStyles,
    },
    text: {
      ...actionTextStyles,
    },
  },
  schadeMelden: {
    content: {
      ...actionContentStyles,
      pt: '8',
      pb: '6',
      gap: SECTION_SPACING.small,
    },
    heading: {
      ...actionHeadingStyles,
    },
  },
} as const;

// Interactive states
export const actionStateStyles = {
  hover: {
    bg: 'blue.600',
    transform: 'translateY(-2px)',
    boxShadow: 'lg',
  },
  active: {
    bg: 'blue.700',
    transform: 'translateY(0)',
  },
  focus: {
    outline: '2px solid',
    outlineColor: 'blue.300',
    outlineOffset: '2px',
  },
} as const;
