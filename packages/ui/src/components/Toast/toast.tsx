import {
  Toast as ChakraToast,
  type CreateToasterReturn,
  createToaster,
  Toaster,
} from '@chakra-ui/react';

export const toaster: CreateToasterReturn = createToaster({
  placement: 'bottom-end',
  overlap: false,
});

export const Toast = { ...ChakraToast, Toaster };

// Export createToaster for creating custom toaster instances
export { createToaster };
export type { CreateToasterReturn };

export default Toast;
