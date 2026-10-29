/**
 * Layout component styles - extracted from inline styles
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { UI_CONSTANTS } from '@/constants/app';
import { COMPONENT_SPACING, SPACING_PATTERNS } from '@/constants/layout';
import { SECTION_SPACING } from '@/constants/typography';

// Header styles. The header is fixed so the home hero can run full-bleed
// underneath it, which means it no longer reserves layout space -- every other
// route gets that space back through `headerOffset` on <main>.
const headerChromeStyles: SystemStyleObject = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: UI_CONSTANTS.zIndexes.fixed,
  backdropFilter: 'blur(16px)',
  borderBottom: '1px solid',
  transition:
    'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
};

const headerStylesLight: SystemStyleObject = {
  ...headerChromeStyles,
  bg: 'rgba(247, 245, 242, 0.96)',
  borderColor: 'stone.300',
  boxShadow: 'none',
};

const headerStylesDark: SystemStyleObject = {
  ...headerChromeStyles,
  bg: 'rgba(8, 22, 40, 0.92)',
  borderColor: 'rgba(196, 165, 116, 0.45)',
  boxShadow: '0 10px 30px rgba(5, 14, 26, 0.28)',
};

export const getHeaderStyles = (useLightChrome: boolean): SystemStyleObject =>
  useLightChrome ? headerStylesLight : headerStylesDark;

// Height of the fixed header, used as the top offset for non-home routes.
// `--headerHeight` is declared once in `globalCss` (src/app/theme.ts).
export const headerOffset = 'var(--headerHeight)';

export const headerContainerStyles: SystemStyleObject = {
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: SPACING_PATTERNS.header.gap,
};

export const headerLogoStyles: SystemStyleObject = {
  flex: '0 0 auto',
  py: { base: '2', md: '3' },
};

export const getHeaderMenuButtonStyles = (
  useLightChrome: boolean,
): SystemStyleObject => ({
  color: useLightChrome ? 'navy.700' : 'white',
  transition: UI_CONSTANTS.hover.subtle.transition,
  _hover:
    useLightChrome ?
      { bg: 'stone.200', color: 'navy.700' }
    : { bg: 'whiteAlpha.200', color: 'white' },
  _active: { bg: useLightChrome ? 'stone.300' : 'whiteAlpha.300' },
  _focusVisible: {
    outline: '2px solid',
    outlineColor: useLightChrome ? 'navy.700' : 'white',
    outlineOffset: '2px',
  },
});

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
  p: COMPONENT_SPACING.card.lg,
  bg: 'blue.50',
  borderRadius: 'xl',
  border: '1px solid',
  borderColor: 'blue.200',
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
  top: headerOffset,
};
