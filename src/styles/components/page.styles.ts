/**
 * Page-level component styles - for app pages with specific styling needs
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { UI_CONSTANTS } from '@/constants/app';

// Contact page styles
export const contactGridStyles: SystemStyleObject = {
  gridTemplateColumns: {
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
  },
  gap: '6',
  alignItems: 'stretch',
  width: '100%',
};

export const contactGridItemStyles: SystemStyleObject = {
  display: 'flex',
  flexDirection: 'column',
  minW: '0',
};

export const contactLogoContainerStyles: SystemStyleObject = {
  width: '100%',
  py: '8',
  justifyContent: 'center',
};

export const contactImageContainerStyles: SystemStyleObject = {
  borderRadius: 'lg',
  boxShadow: 'lg',
  overflow: 'hidden',
  position: 'relative',
  width: 'full',
  height: { base: '300px', md: '400px', lg: '500px' },
  minHeight: '300px',
  transition: UI_CONSTANTS.hover.image.transition,
  _hover: UI_CONSTANTS.hover.image,
};

export const contactImageStyles: SystemStyleObject = {
  objectFit: 'cover',
  objectPosition: 'center',
};

export const contactCtaSectionStyles: SystemStyleObject = {
  pt: '12',
  textAlign: 'center',
};

export const contactCtaButtonStyles: SystemStyleObject = {
  bg: 'blue.500',
  color: 'white',
  borderRadius: 'lg',
  transition: UI_CONSTANTS.hover.button.transition,
  _hover: {
    bg: 'blue.600',
    ...UI_CONSTANTS.hover.button,
  },
  _active: {
    transform: 'translateY(0)',
  },
};

// Risk management page styles
export const riskHighlightBoxStyles: SystemStyleObject = {
  bg: 'blue.50',
  p: '6',
  borderRadius: 'lg',
  borderLeft: '4px solid',
  borderColor: 'blue.500',
};

export const riskSummaryBoxStyles: SystemStyleObject = {
  bg: 'gray.50',
  p: '6',
  borderRadius: 'lg',
  boxShadow: 'sm',
};

export const riskItalicTextStyles: SystemStyleObject = {
  fontStyle: 'italic',
  mt: '3',
};
