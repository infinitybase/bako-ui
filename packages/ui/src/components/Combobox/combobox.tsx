import { Combobox as ChakraCombobox, Portal } from '@chakra-ui/react';

export const Combobox: typeof ChakraCombobox & { Portal: typeof Portal } = {
  ...ChakraCombobox,
  Portal: Portal,
};

export default Combobox;
