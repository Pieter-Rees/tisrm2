/**
 * Navigation component styles - extracted from navbar and sidenav components
 */

import type { SystemStyleObject } from '@chakra-ui/react';
import { UI_CONSTANTS } from '@/constants/app';

// Navbar styles
export const navbarContainerStyles: SystemStyleObject = {
  alignItems: 'center',
  gap: '8',
  width: 'full',
  justifyContent: 'space-between',
};

export const navbarLinksContainerStyles: SystemStyleObject = {
  hideBelow: 'xl',
};

export const navbarLinksListStyles: SystemStyleObject = {
  gap: '6',
  fontSize: { base: 'sm', '2xl': 'md' },
  fontWeight: 'medium',
  listStyleType: 'none',
  margin: '0',
  padding: '0',
};

export const navbarLinkItemStyles: SystemStyleObject = {
  // Component props handled in JSX
};

export const navbarLinkWrapperStyles: SystemStyleObject = {
  textDecoration: 'none',
  display: 'block',
  paddingBottom: '4px',
  position: 'relative',
};

export const getNavbarLinkStyles = (isActive: boolean): SystemStyleObject => ({
  color: isActive ? 'blue.500' : 'gray.900',
  fontWeight: isActive ? '600' : '500',
  borderBottom: isActive ? '2px solid' : '2px solid transparent',
  borderBottomColor: isActive ? 'blue.500' : 'transparent',
  transition: UI_CONSTANTS.hover.link.transition,
  _hover: !isActive ? {
    color: 'blue.500',
    borderBottomColor: 'blue.200',
    transform: 'translateY(-1px)',
  } : {},
});

// Actions menu styles
export const navbarActionsContainerStyles: SystemStyleObject = {
  hideBelow: 'xl',
  position: 'relative',
};

export const navbarActionsButtonStyles: SystemStyleObject = {
  bg: 'blue.500',
  color: 'white',
  transition: UI_CONSTANTS.hover.button.transition,
  _hover: {
    bg: 'blue.600',
    ...UI_CONSTANTS.hover.button,
  },
  _active: {
    bg: 'blue.700',
    transform: 'translateY(0)',
  },
  fontWeight: 'medium',
  gap: '2',
};

export const navbarMenuContentStyles: SystemStyleObject = {
  position: 'absolute',
  top: '100%',
  right: '0',
  mt: '1',
  minW: '200px',
  bg: 'white',
  border: '1px solid',
  borderColor: 'gray.200',
  borderRadius: 'md',
  boxShadow: 'lg',
  zIndex: 'dropdown',
};

export const navbarMenuItemStyles: SystemStyleObject = {
  gap: '2',
  _hover: { bg: 'blue.50' },
};

// Sidenav styles
export const sidenavContainerStyles: SystemStyleObject = {
  position: 'fixed',
  top: '0',
  height: '100vh',
  width: { base: '85%', sm: '400px' },
  maxW: '400px',
  bg: 'white',
  boxShadow: '2xl',
  zIndex: UI_CONSTANTS.zIndexes.modal,
  flexDirection: 'column' as const,
  transition: 'left 0.3s ease-in-out',
  overflowY: 'auto',
  borderRight: '1px solid',
  borderColor: 'gray.200',
};

export const getSidenavPositionStyles = (showSideNav: boolean): SystemStyleObject => ({
  left: showSideNav ? '0' : '-100%',
});

export const sidenavCloseButtonContainerStyles: SystemStyleObject = {
  position: 'absolute',
  top: '4',
  right: '4',
  zIndex: '1',
};

export const sidenavCloseButtonStyles: SystemStyleObject = {
  transition: UI_CONSTANTS.hover.subtle.transition,
  _hover: UI_CONSTANTS.hover.subtle,
};

export const sidenavContentContainerStyles: SystemStyleObject = {
  flexDirection: 'column' as const,
  height: 'full',
  justifyContent: 'center',
  alignItems: 'center',
  p: '8',
  pt: '16',
  gap: '8',
};

export const sidenavLogoContainerStyles: SystemStyleObject = {
  mb: '4',
};

export const sidenavLinksContainerStyles: SystemStyleObject = {
  gap: '3',
  alignItems: 'center',
  width: 'full',
  listStyleType: 'none',
  margin: '0',
  padding: '0',
};

export const sidenavLinkItemStyles: SystemStyleObject = {
  width: 'full',
};

export const getSidenavLinkButtonStyles = (isActive: boolean): SystemStyleObject => ({
  width: 'full',
  color: isActive ? 'blue.600' : 'gray.700',
  fontWeight: isActive ? 'semibold' : 'medium',
  transition: UI_CONSTANTS.hover.subtle.transition,
  _hover: {
    bg: 'gray.50',
    color: 'blue.600',
    transform: 'translateX(4px)',
  },
  _active: { bg: 'gray.100' },
  justifyContent: 'center',
  py: '3',
});

export const sidenavSeparatorStyles: SystemStyleObject = {
  borderColor: 'gray.300',
  width: '80%',
};

export const sidenavActionsContainerStyles: SystemStyleObject = {
  width: 'full',
  px: '4',
  mt: '4',
};

export const sidenavActionsButtonStyles: SystemStyleObject = {
  bg: 'blue.500',
  color: 'white',
  width: 'full',
  transition: UI_CONSTANTS.hover.button.transition,
  _hover: {
    bg: 'blue.600',
    ...UI_CONSTANTS.hover.button,
  },
  _active: { bg: 'blue.700' },
  fontWeight: 'medium',
  gap: '2',
};
