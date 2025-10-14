import { Input as ChakraInput } from '@chakra-ui/react';
import type { InputProps } from './input.types';

export default function Input(props: InputProps) {
  return <ChakraInput {...props} />;
}
