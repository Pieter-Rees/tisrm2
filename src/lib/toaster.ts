'use client';

import { createToaster } from '@chakra-ui/react';

export const toaster = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
  max: 5,
  duration: 5000,
});
