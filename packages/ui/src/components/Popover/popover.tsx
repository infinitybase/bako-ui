import { Popover as ChakraPopover, Portal } from '@chakra-ui/react';

export const Popover: typeof ChakraPopover & { Portal: typeof Portal } = {
  ...ChakraPopover,
  Portal: Portal,
};

export default Popover;
