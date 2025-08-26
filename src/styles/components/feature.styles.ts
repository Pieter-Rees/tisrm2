/**
 * Feature section component styles - extracted from three-elements component
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { SECTION_SPACING } from '@/constants/typography';

// Feature section container styles
export const featureSectionContainerStyles: SystemStyleObject = {
  // Component props handled in JSX
};

// Feature header styles
export const featureHeaderStyles: SystemStyleObject = {
  mb: SECTION_SPACING.medium,
  textAlign: 'center',
};

// Feature description styles
export const featureDescriptionStyles: SystemStyleObject = {
  color: 'text.muted',
  maxW: '3xl',
  mx: 'auto',
  textAlign: 'center',
};

// Feature grid styles
export const featureGridStyles: SystemStyleObject = {
  gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
  gap: { base: '3', sm: '4', md: '6', lg: '8' },
  alignItems: 'stretch',
  width: '100%',
  // Ensure cards don't get too cramped on small screens
  minWidth: '0',
  overflow: 'hidden',
};

// Feature grid item styles
export const featureGridItemStyles: SystemStyleObject = {
  display: 'flex',
  minW: '0',
};

// Feature call-to-action section styles
export const featureCtaStyles: SystemStyleObject = {
  mt: { base: '12', lg: '16' },
  textAlign: 'center',
  p: { base: '6', lg: '8' },
  bg: 'blue.50',
  borderRadius: 'lg',
  border: '1px solid',
  borderColor: 'blue.200',
};

// Feature CTA heading styles
export const featureCtaHeadingStyles: SystemStyleObject = {
  fontSize: { base: 'xl', lg: '2xl' },
  fontWeight: 'bold',
  color: 'blue.700',
  mb: '4',
};

// Feature CTA text styles
export const featureCtaTextStyles: SystemStyleObject = {
  color: 'blue.600',
  mb: '6',
  maxW: '2xl',
  mx: 'auto',
};

// Feature CTA button styles
export const featureCtaButtonStyles: SystemStyleObject = {
  gap: '2',
};
