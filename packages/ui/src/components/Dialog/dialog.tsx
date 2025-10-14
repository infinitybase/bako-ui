import { Dialog as ChakraDialog, Portal } from '@chakra-ui/react';

export const Dialog: typeof ChakraDialog & { Portal: typeof Portal } = {
  ...ChakraDialog,
  Portal: Portal,
};

export default Dialog;
