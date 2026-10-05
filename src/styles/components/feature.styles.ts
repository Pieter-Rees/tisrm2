/**
 * Feature section component styles - extracted from three-elements component
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { SECTION_SPACING } from '@/constants/typography';
import { COMPONENT_SPACING } from '@/constants/layout';

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
  gap: COMPONENT_SPACING.grid.lg,
  alignItems: 'stretch',
  width: '100%',
  minWidth: '0',
};

// Feature grid item styles
export const featureGridItemStyles: SystemStyleObject = {
  display: 'flex',
  minW: '0',
};

// Feature call-to-action section styles (parent section gap owns vertical rhythm)
export const featureCtaStyles: SystemStyleObject = {
  textAlign: 'center',
  p: COMPONENT_SPACING.card.xl,
  bg: 'blue.50',
  borderRadius: 'xl',
  border: '1px solid',
  borderColor: 'blue.200',
};

// Feature CTA heading styles
export const featureCtaHeadingStyles: SystemStyleObject = {
  fontSize: { base: 'xl', lg: '2xl' },
  fontWeight: 'bold',
  color: 'blue.700',
  mb: COMPONENT_SPACING.card.sm,
};

// Feature CTA text styles
export const featureCtaTextStyles: SystemStyleObject = {
  color: 'blue.700',
  mb: COMPONENT_SPACING.form.group,
  maxW: '2xl',
  mx: 'auto',
};

// Feature CTA button styles
export const featureCtaButtonStyles: SystemStyleObject = {
  gap: COMPONENT_SPACING.nav.item,
};
