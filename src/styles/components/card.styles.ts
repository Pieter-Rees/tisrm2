/**
 * Card component styles - extracted from inline styles for better maintainability
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { UI_CONSTANTS } from '@/constants/app';

// Card variant definitions
export const CARD_VARIANTS = {
  default: {
    bg: 'white',
    shadow: 'lg',
    hover: {
      ...UI_CONSTANTS.hover.card,
      transform: 'translateY(-2px)',
    },
  },
  sidebar: {
    bg: 'white',
    shadow: 'md',
    hover: UI_CONSTANTS.hover.subtle,
  },
  downloads: {
    bg: 'white',
    border: '1px solid',
    borderColor: 'blue.200',
    shadow: 'sm',
    p: { base: '5', md: '6' },
    transition: 'all 0.2s ease-in-out',
    hover: {
      transform: 'translateY(-2px)',
      shadow: 'md',
      borderColor: 'blue.300',
    },
  },
  elevated: {
    bg: 'white',
    shadow: 'xl',
    hover: UI_CONSTANTS.hover.card,
  },
  featured: {
    bg: 'blue.50',
    shadow: '2xl',
    hover: {
      ...UI_CONSTANTS.hover.card,
      transform: 'translateY(-4px)',
      boxShadow: '2xl',
    },
  },
} as const;

// Base card styles
export const cardBaseStyles: SystemStyleObject = {
  border: '1px solid',
  borderRadius: 'lg',
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  minHeight: 'fit-content',
  transition: 'all 0.2s ease-in-out',
};

// Card states
export const cardStateStyles = {
  normal: {
    borderColor: 'gray.200',
    opacity: 1,
  },
  disabled: {
    borderColor: 'gray.300',
    bg: 'gray.50',
    opacity: 0.6,
  },
  interactive: {
    cursor: 'pointer',
  },
  static: {
    cursor: 'default',
  },
} as const;

// Focus styles
export const cardFocusStyles: SystemStyleObject = {
  outline: '2px solid',
  outlineColor: 'blue.500',
  outlineOffset: '2px',
};

// Image container styles
export const cardImageStyles: SystemStyleObject = {
  position: 'relative',
  overflow: 'hidden',
  borderTopRadius: 'lg',
  height: { base: '200px', md: '240px' },
  bg: 'gray.100',
};

// Content container styles
export const cardContentStyles: SystemStyleObject = {
  p: { base: '4', md: '6' },
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
};

// Action container styles
export const cardActionStyles: SystemStyleObject = {
  mt: 'auto',
};

// Button styles within cards
export const cardButtonStyles = {
  base: {
    width: 'full',
    gap: '2',
    transition: UI_CONSTANTS.hover.button.transition,
    _hover: UI_CONSTANTS.hover.button,
  },
  phone: {
    // Component props handled in JSX
  },
  download: {
    // Component props handled in JSX
  },
  cta: {
    // Component props handled in JSX
  },
} as const;

// Helper function to get card styles
export const getCardStyles = (
  variant: keyof typeof CARD_VARIANTS = 'default',
  disabled = false,
  isInteractive = false
): SystemStyleObject => {
  const variantStyles = CARD_VARIANTS[variant];
  const stateStyles = disabled ? cardStateStyles.disabled : cardStateStyles.normal;
  const interactionStyles = isInteractive && !disabled
    ? cardStateStyles.interactive
    : cardStateStyles.static;

  return {
    ...cardBaseStyles,
    ...stateStyles,
    ...interactionStyles,
    ...variantStyles,
    bg: disabled ? cardStateStyles.disabled.bg : variantStyles.bg,
    boxShadow: variantStyles.shadow,
    transition: cardBaseStyles.transition,
    _hover: !disabled && isInteractive ? variantStyles.hover : {},
    _focus: cardFocusStyles,
  };
};
