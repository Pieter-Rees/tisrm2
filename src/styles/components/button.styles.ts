import type { SystemStyleObject } from '@chakra-ui/react';
// import { UI_CONSTANTS } from '@/constants/app';

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
    bg: 'blue.500',
    color: 'white',
    border: '1px solid',
    borderColor: 'blue.500',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.600',
      borderColor: 'blue.600',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'blue.700',
      borderColor: 'blue.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.300',
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
      outlineColor: 'gray.300',
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
    color: 'blue.500',
    border: '1px solid',
    borderColor: 'blue.500',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.50',
      borderColor: 'blue.600',
      transform: 'translateY(-2px)',
      boxShadow: 'md',
    },
    _active: {
      bg: 'blue.100',
      borderColor: 'blue.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.300',
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
    color: 'blue.500',
    border: '1px solid',
    borderColor: 'transparent',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.50',
      color: 'blue.600',
      transform: 'translateY(-1px)',
    },
    _active: {
      bg: 'blue.100',
      color: 'blue.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.300',
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
    bg: 'red.500',
    color: 'white',
    border: '1px solid',
    borderColor: 'red.500',
    fontWeight: 'medium',
    _hover: {
      bg: 'red.600',
      borderColor: 'red.600',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'red.700',
      borderColor: 'red.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'red.300',
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
    bg: 'green.500',
    color: 'white',
    border: '1px solid',
    borderColor: 'green.500',
    fontWeight: 'medium',
    _hover: {
      bg: 'green.600',
      borderColor: 'green.600',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'green.700',
      borderColor: 'green.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'green.300',
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
    bg: 'blue.500',
    color: 'white',
    border: '1px solid',
    borderColor: 'blue.500',
    fontWeight: 'medium',
    _hover: {
      bg: 'blue.600',
      borderColor: 'blue.600',
      transform: 'translateY(-2px)',
      boxShadow: 'lg',
    },
    _active: {
      bg: 'blue.700',
      borderColor: 'blue.700',
      transform: 'translateY(0)',
    },
    _focus: {
      outline: '2px solid',
      outlineColor: 'blue.300',
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
      outlineColor: 'gray.300',
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
  gap: '2',
  borderRadius: 'md',
  fontWeight: 'medium',
  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',
  _focus: {
    outline: '2px solid',
    outlineColor: 'blue.300',
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
    bg: 'blue.500',
    color: 'white',
    _hover: { bg: 'blue.600' },
  },
  secondary: {
    bg: 'gray.500',
    color: 'white',
    _hover: { bg: 'gray.600' },
  },
};
