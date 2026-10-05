/**
 * Layout component styles - extracted from inline styles
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { UI_CONSTANTS } from '@/constants/app';
import { COMPONENT_SPACING, SPACING_PATTERNS } from '@/constants/layout';
import { SECTION_SPACING } from '@/constants/typography';

// Header styles
export const headerStyles: SystemStyleObject = {
  position: 'sticky',
  top: '0',
  zIndex: UI_CONSTANTS.zIndexes.sticky,
  bg: 'white',
  borderBottom: '1px',
  borderColor: 'gray.200',
  boxShadow: 'sm',
};

export const headerContainerStyles: SystemStyleObject = {
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: SPACING_PATTERNS.header.gap,
};

export const headerLogoStyles: SystemStyleObject = {
  flex: '0 0 auto',
  py: { base: '2', md: '3' },
};

export const headerNavStyles: SystemStyleObject = {
  flex: '1',
  hideBelow: 'xl',
};

export const headerMenuButtonStyles: SystemStyleObject = {
  color: 'gray.900',
  transition: UI_CONSTANTS.hover.subtle.transition,
  _hover: UI_CONSTANTS.hover.subtle,
  _active: { bg: 'gray.200' },
  hideFrom: 'xl',
};

// Mobile menu overlay styles
export const mobileMenuOverlayStyles: SystemStyleObject = {
  position: 'fixed',
  inset: '0',
  bg: 'blackAlpha.600',
  zIndex: UI_CONSTANTS.zIndexes.modal - 10,
};

// Sidebar styles
export const sidebarContainerStyles: SystemStyleObject = {
  gap: COMPONENT_SPACING.form.group,
  alignItems: 'stretch',
};

export const sidebarHelpBoxStyles: SystemStyleObject = {
  mt: SECTION_SPACING.small,
  p: COMPONENT_SPACING.card.md,
  bg: 'blue.50',
  borderRadius: 'md',
  border: '1px solid',
  borderColor: 'blue.700',
  textAlign: 'center',
};

export const sidebarHelpTitleStyles: SystemStyleObject = {
  fontSize: 'sm',
  color: 'blue.700',
  fontWeight: 'medium',
  mb: '1',
};

export const sidebarHelpTextStyles: SystemStyleObject = {
  fontSize: 'xs',
  color: 'blue.700',
};

// Main layout grid styles
export const layoutGridStyles = {
  withSidebar: {
    templateColumns: { base: '1fr', xl: '3fr 1fr' },
    gap: SPACING_PATTERNS.page.section,
    alignItems: 'start',
  },
  withoutSidebar: {
    templateColumns: '1fr',
    gap: SPACING_PATTERNS.page.section,
    alignItems: 'start',
  },
} as const;

// Content area styles
export const contentAreaStyles: SystemStyleObject = {
  flexDirection: 'column' as const,
  gap: SPACING_PATTERNS.page.section,
};

// Header section within content
export const contentHeaderStyles: SystemStyleObject = {
  width: 'full',
  justifyContent: 'space-between',
  alignItems: { base: 'flex-start', lg: 'center' },
  flexDirection: { base: 'column', lg: 'row' } as const,
  mb: COMPONENT_SPACING.form.group,
  gap: SECTION_SPACING.small,
};

// Breadcrumb container styles - moved to utility.styles.ts

// Sidebar column styles
export const sidebarColumnStyles: SystemStyleObject = {
  hideBelow: 'xl',
  position: 'sticky',
  top: '100px',
};
