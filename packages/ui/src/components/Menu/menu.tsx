import { Menu as ChakraMenu, Portal } from '@chakra-ui/react';

export const Menu: typeof ChakraMenu & { Portal: typeof Portal } = {
  ...ChakraMenu,
  Portal: Portal,
};

export default Menu;
