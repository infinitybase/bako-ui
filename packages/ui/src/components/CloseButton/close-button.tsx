import { CloseButton as ChakraCloseButton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { CloseButtonProps } from './close-button.types';

export default forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return <ChakraCloseButton ref={ref} {...props} />;
  }
);
