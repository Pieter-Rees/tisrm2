/**
 * UI component styles - toaster and other UI elements
 */

import type { SystemStyleObject } from '@chakra-ui/react';

// Toaster styles
export const toasterPortalStyles: SystemStyleObject = {
  insetInline: { mdDown: '4' },
};

export const toastRootStyles: SystemStyleObject = {
  width: { md: 'sm' },
};

export const toastSpinnerStyles: SystemStyleObject = {
  color: 'blue.solid',
};

export const toastContentStyles: SystemStyleObject = {
  gap: '1',
  flex: '1',
  maxWidth: '100%',
};
