/**
 * Card component styles - extracted from inline styles for better maintainability
 */

import type { SystemStyleObject } from '@chakra-ui/react';

// Card variant definitions
export const CARD_VARIANTS = {
  default: {
    bg: 'white',
    shadow: 'lg',
  },
  sidebar: {
    bg: 'white',
    shadow: 'md',
  },
  downloads: {
    bg: 'white',
    border: '1px solid',
    borderColor: 'blue.200',
    shadow: 'sm',
    p: { base: '5', md: '6' },
    transition: 'all 0.2s ease-in-out',
  },
  elevated: {
    bg: 'white',
    shadow: 'xl',
  },
  featured: {
    bg: 'blue.50',
    shadow: '2xl',
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
  interactive: {},
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
  height: { base: '140px', sm: '160px', md: '180px', lg: '200px', xl: '240px' },
  bg: 'gray.100',
};

// Content container styles
export const cardContentStyles: SystemStyleObject = {
  p: { base: '2', sm: '3', md: '4', lg: '5', xl: '6' },
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
    transition: 'all 0.2s ease-in-out',
    _hover: {
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
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
    _focus: cardFocusStyles,
  };
};
