import { Input as ChakraInput, Field, InputGroup } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { InputProps } from './input.types';

export default forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    return <ChakraInput ref={ref} {...props} />;
  }
);

export { Field, InputGroup };
