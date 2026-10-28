/**
 * Feature section component styles - extracted from three-elements component
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { PROSE_STACK_GAP, SECTION_SPACING } from '@/constants/typography';
import { COMPONENT_SPACING } from '@/constants/layout';

// Feature section container styles
export const featureSectionContainerStyles: SystemStyleObject = {
  // Component props handled in JSX
};

// Feature header styles
export const featureHeaderStyles: SystemStyleObject = {
  display: 'flex',
  flexDirection: 'column',
  gap: PROSE_STACK_GAP,
  mb: SECTION_SPACING.medium,
  textAlign: 'center',
};

// Feature description styles
export const featureDescriptionStyles: SystemStyleObject = {
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
