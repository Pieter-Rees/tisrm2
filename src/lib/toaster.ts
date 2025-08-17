/**
 * Toaster configuration
 * @fileoverview Centralized toast notification configuration
 */

'use client';

import { createToaster } from '@chakra-ui/react';

/**
 * Global toaster instance with optimized settings
 */
export const toaster = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
  max: 5,
  duration: 5000,
});
