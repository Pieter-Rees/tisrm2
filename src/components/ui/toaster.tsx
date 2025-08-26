'use client';

import { toaster } from '@/lib/toaster';
import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
} from '@chakra-ui/react';
import {
  toasterPortalStyles,
  toastRootStyles,
  toastSpinnerStyles,
  toastContentStyles,
} from '@/styles/components/ui.styles';

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} {...toasterPortalStyles}>
        {toast => (
          <Toast.Root {...toastRootStyles}>
            {toast.type === 'loading' ?
              <Spinner color="blue.500" />
              : <Toast.Indicator />}
            <Stack gap="1" flexDirection="column">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && (
                <Toast.Description>{toast.description}</Toast.Description>
              )}
            </Stack>
            {toast.action && (
              <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
            )}
            {toast.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};

export { toaster } from '@/lib/toaster';
