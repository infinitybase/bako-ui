import { Select as ChakraSelect, Portal } from '@chakra-ui/react';

export const Select: typeof ChakraSelect & { Portal: typeof Portal } = {
  ...ChakraSelect,
  Portal: Portal,
};

export default Select;
