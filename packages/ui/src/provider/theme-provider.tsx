import { ChakraProvider, type ChakraProviderProps } from '@chakra-ui/react';

export type ThemeProviderProps = ChakraProviderProps;

export const ThemeProvider = (props: ThemeProviderProps) => {
  return <ChakraProvider {...props} />;
};
