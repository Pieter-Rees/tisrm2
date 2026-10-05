/**
 * Action component styles - extracted from call-us, meld-schade components
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { COMPONENT_SPACING, SPACING_SCALE } from '@/constants/layout';

// Base action button styles. Padding and wrapping come from the inner content
// so the card can fill the surrounding box instead of the button size recipe.
export const actionButtonBaseStyles: SystemStyleObject = {
  width: 'full',
  height: 'full',
  px: '0',
  py: '0',
  bg: 'blue.700',
  color: 'white',
  whiteSpace: 'normal',
};

// Action content container styles
export const actionContentStyles: SystemStyleObject = {
  width: 'full',
  height: 'full',
  justifyContent: 'center',
  p: COMPONENT_SPACING.card.lg,
  gap: SPACING_SCALE.md,
};

// Action icon styles
export const actionIconStyles: SystemStyleObject = {
  color: 'white',
  flexShrink: '0',
};

// Action heading styles
export const actionHeadingStyles: SystemStyleObject = {
  fontFamily: 'body',
  fontSize: 'md',
  color: 'white',
};

// Action text styles
export const actionTextStyles: SystemStyleObject = {
  color: 'white',
};

// Specific action variants
export const actionVariants = {
  // Icon beside the text while the card is full width, stacked once it moves
  // into the narrow hero column at lg
  callUs: {
    content: {
      ...actionContentStyles,
      flexDirection: { base: 'column', sm: 'row', lg: 'column' },
      alignItems: { base: 'flex-start', sm: 'center', lg: 'flex-start' },
    },
    icon: {
      ...actionIconStyles,
      boxSize: { base: '6', lg: '7' },
    },
    heading: actionHeadingStyles,
    text: actionTextStyles,
  },
  schadeMelden: {
    content: {
      ...actionContentStyles,
      flexDirection: 'column',
      alignItems: 'center',
      py: COMPONENT_SPACING.card.md,
    },
    heading: actionHeadingStyles,
  },
} satisfies Record<string, Record<string, SystemStyleObject>>;

// Interactive states
export const actionStateStyles = {
  hover: {
    bg: 'blue.900',
    transform: 'translateY(-2px)',
    boxShadow: 'lg',
  },
  active: {
    bg: 'blue.950',
    transform: 'translateY(0)',
  },
  focus: {
    outline: '2px solid',
    outlineColor: 'blue.700',
    outlineOffset: '2px',
  },
} as const;
