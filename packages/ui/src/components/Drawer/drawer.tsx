import { Drawer as ChakraDrawer, Portal } from '@chakra-ui/react';

export const Drawer: typeof ChakraDrawer & { Portal: typeof Portal } = {
  ...ChakraDrawer,
  Portal: Portal,
};

export default Drawer;
