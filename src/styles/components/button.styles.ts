import type { SystemStyleObject } from '@chakra-ui/react';
import { SPACING_SCALE } from '@/constants/layout';
// import { UI_CONSTANTS } from '@/constants/app';

// Shared brand styles for call-to-action buttons. Spread these instead of
// repeating colour props per page so every primary button stays the same blue.
export const primaryButtonStyles: SystemStyleObject = {
  bg: 'blue.700',
  color: 'white',
  transition: 'all 0.2s ease-in-out',
  _hover: {
    bg: 'blue.900',
    transform: 'translateY(-2px)',
    boxShadow: 'lg',
  },
  _active: {
    bg: 'blue.950',
    transform: 'translateY(0)',
  },
};

// Brand counterpart for secondary call-to-action buttons.
export const outlineButtonStyles: SystemStyleObject = {
  color: 'blue.700',
  borderColor: 'blue.700',
  transition: 'all 0.2s ease-in-out',
  _hover: {
    bg: 'blue.50',
    color: 'blue.900',
    borderColor: 'blue.900',
    transform: 'translateY(-2px)',
    boxShadow: 'lg',
  },
  _active: {
    bg: 'blue.100',
    transform: 'translateY(0)',
  },
};

export const buttonSizes = {
  xs: {
    height: '24px',
    fontSize: 'xs',
    px: '2',
    py: '1',
  },
  sm: {
    height: '32px',
    fontSize: 'sm',
    px: '3',
    py: '1',
  },
  md: {
    height: '40px',
    fontSize: 'md',
    px: '4',
    py: '2',
  },
  lg: {
    height: '48px',
    fontSize: 'lg',
    px: '6',
    py: '3',
  },
  xl: {
    height: '56px',
    fontSize: 'xl',
    px: '8',
    py: '4',
  },
} as const;

export const buttonVariants = {
  primary: {
    bg: 'blue.700',
    color: 'white',
    border: '1px solid',
    borderColor: 'blue.700',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.900',
      borderColor: 'blue.900',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'blue.950',
      borderColor: 'blue.950',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'gray.300',
      borderColor: 'gray.300',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  secondary: {
    bg: 'gray.500',
    color: 'white',
    border: '1px solid',
    borderColor: 'gray.500',
    fontWeight: 'medium',
    _hover: {
      bg: 'gray.600',
      borderColor: 'gray.600',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'gray.700',
      borderColor: 'gray.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'gray.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'gray.300',
      borderColor: 'gray.300',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  outline: {
    bg: 'transparent',
    color: 'blue.700',
    border: '1px solid',
    borderColor: 'blue.700',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.50',
      borderColor: 'blue.900',
      transform: 'translateY(-2px)',
      boxShadow: 'md',
    },
    _active: {
      bg: 'blue.100',
      borderColor: 'blue.950',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'transparent',
      borderColor: 'gray.300',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  ghost: {
    bg: 'transparent',
    color: 'blue.700',
    border: '1px solid',
    borderColor: 'transparent',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.50',
      color: 'blue.900',
      transform: 'translateY(-1px)',
    },
    _active: {
      bg: 'blue.100',
      color: 'blue.950',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'transparent',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
    },
  },
  danger: {
    bg: 'red.700',
    color: 'white',
    border: '1px solid',
    borderColor: 'red.700',
    fontWeight: 'medium',
    _hover: {
      bg: 'red.800',
      borderColor: 'red.800',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'red.900',
      borderColor: 'red.900',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'red.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'gray.300',
      borderColor: 'gray.300',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  success: {
    bg: 'green.700',
    color: 'white',
    border: '1px solid',
    borderColor: 'green.700',
    fontWeight: 'medium',
    _hover: {
      bg: 'green.800',
      borderColor: 'green.800',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'green.900',
      borderColor: 'green.900',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'green.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'gray.300',
      borderColor: 'gray.300',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
} as const;

export const footerButtonVariants = {
  primary: {
    bg: 'blue.700',
    color: 'white',
    border: '1px solid',
    borderColor: 'blue.700',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.900',
      borderColor: 'blue.900',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'blue.950',
      borderColor: 'blue.950',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'gray.300',
      borderColor: 'gray.300',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
  secondary: {
    bg: 'gray.500',
    color: 'white',
    border: '1px solid',
    borderColor: 'gray.500',
    fontWeight: 'medium',
    _hover: {
      bg: 'gray.600',
      borderColor: 'gray.600',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'gray.700',
      borderColor: 'gray.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'gray.700',
      outlineOffset: '2px',
    },
    _disabled: {
      bg: 'gray.300',
      borderColor: 'gray.300',
      color: 'gray.500',
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
    },
  },
} as const;

export const buttonBaseStyles: SystemStyleObject = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: SPACING_SCALE.xs,
  borderRadius: 'md',
  fontWeight: 'medium',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  _focus: {
    outline: '2px solid',
    outlineColor: 'blue.700',
    outlineOffset: '2px',
  },
  _disabled: {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
};

export const getButtonStyles = (
  variant: keyof typeof buttonVariants = 'primary',
  size: keyof typeof buttonSizes = 'md',
  isFooter = false,
): SystemStyleObject => {
  const variantStyles = isFooter
    ? footerButtonVariants[variant as keyof typeof footerButtonVariants] || footerButtonVariants.primary
    : buttonVariants[variant];

  const sizeStyles = buttonSizes[size];

  return {
    ...buttonBaseStyles,
    ...sizeStyles,
    ...variantStyles,
  };
};

export const legacyButtonStyles = {
  primary: {
    bg: 'blue.700',
    color: 'white',
    _hover: { bg: 'blue.900' },
  },
  secondary: {
    bg: 'gray.500',
    color: 'white',
    _hover: { bg: 'gray.600' },
  },
};
