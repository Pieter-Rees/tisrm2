/**
 * Testimonial component styles - extracted from talker component
 */

import { COMPONENT_SPACING } from '@/constants/layout';
import type { SystemStyleObject } from '@chakra-ui/react';

// Mobile stack rhythm (avatar, quote icon, quote, attribution). Wider on large screens
// where the avatar sits beside the quote.
const testimonialStackGap = COMPONENT_SPACING.form.group;
const testimonialRowGap = {
  base: testimonialStackGap.base,
  md: testimonialStackGap.md,
  lg: '12',
} as const;

// Main testimonial container styles
export const testimonialContainerStyles: SystemStyleObject = {
  py: COMPONENT_SPACING.card.lg,
  px: COMPONENT_SPACING.card.xl,
  bg: 'gray.50',
  borderRadius: 'xl',
  boxShadow: 'sm',
  border: '1px solid',
  borderColor: 'gray.100',
};

// Testimonial content layout styles
export const testimonialLayoutStyles: SystemStyleObject = {
  flexDirection: { base: 'column', lg: 'row' } as const,
  gap: testimonialRowGap,
  justifyContent: 'center',
  alignItems: 'center',
  maxW: '4xl',
  mx: 'auto',
};

// Content area styles
export const testimonialContentStyles: SystemStyleObject = {
  alignItems: { base: 'center', lg: 'flex-start' },
  textAlign: { base: 'center', lg: 'left' },
  gap: testimonialStackGap,
  flex: '1',
  maxW: { base: 'full', lg: '2xl' },
};
