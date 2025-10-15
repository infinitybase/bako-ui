import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { IconButtonProps } from './icon-button.types';

export default forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    return <ChakraIconButton ref={ref} {...props} />;
  }
);
