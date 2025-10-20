import { Button as ChakraButton } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { ButtonProps } from './button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const { colorPalette = 'primary', ...rest } = props;
    return <ChakraButton ref={ref} colorPalette={colorPalette} {...rest} />;
  }
);

export default Button;
