/**
 * Testimonial component styles - extracted from talker component
 */

import type { SystemStyleObject } from '@chakra-ui/react';

// Main testimonial container styles
export const testimonialContainerStyles: SystemStyleObject = {
  py: { base: '12', lg: '20' },
  px: { base: '4', lg: '8' },
  bg: 'gray.50',
  borderRadius: 'xl',
  boxShadow: 'sm',
};

// Testimonial content layout styles
export const testimonialLayoutStyles: SystemStyleObject = {
  flexDirection: { base: 'column', lg: 'row' } as const,
  gap: { base: '8', lg: '16' },
  justifyContent: 'center',
  alignItems: 'center',
  maxW: '4xl',
  mx: 'auto',
};

// Avatar container styles
export const testimonialAvatarContainerStyles: SystemStyleObject = {
  position: 'relative',
  flexShrink: 0,
  order: { base: 1, lg: 0 },
};

// Avatar image styles
export const testimonialAvatarStyles: SystemStyleObject = {
  position: 'relative',
  width: { base: '200px', lg: '280px' },
  height: { base: '200px', lg: '280px' },
  borderRadius: 'full',
  overflow: 'hidden',
  boxShadow: 'xl',
  bg: 'gray.200',
  _before: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 'full',
    boxShadow: 'inset 0 0 0 4px white',
    zIndex: 1,
  },
};

// Content area styles
export const testimonialContentStyles: SystemStyleObject = {
  alignItems: { base: 'center', lg: 'flex-start' },
  textAlign: { base: 'center', lg: 'left' },
  gap: '6',
  flex: '1',
  maxW: { base: 'full', lg: '2xl' },
};

// Quote icon styles
export const testimonialQuoteIconStyles: SystemStyleObject = {
  color: 'blue.500',
  opacity: '0.8',
};

// Quote text styles
export const testimonialQuoteStyles: SystemStyleObject = {
  position: 'relative',
  fontStyle: 'italic',
  pl: '4',
  pr: '4',
};

// Author info container styles
export const testimonialAuthorContainerStyles: SystemStyleObject = {
  gap: '1',
  alignItems: { base: 'center', lg: 'flex-start' },
};

// Author name styles
export const testimonialAuthorNameStyles: SystemStyleObject = {
  fontSize: 'lg',
  fontWeight: 'bold',
  color: 'text.primary',
  lineHeight: 'tight',
};

// Author title styles
export const testimonialAuthorTitleStyles: SystemStyleObject = {
  fontSize: 'md',
  color: 'text.accent',
  fontWeight: 'medium',
};

// Author company styles
export const testimonialAuthorCompanyStyles: SystemStyleObject = {
  fontSize: 'sm',
  color: 'text.muted',
  fontWeight: 'medium',
};
