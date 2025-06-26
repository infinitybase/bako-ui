import { Button as ChakraButton } from '@chakra-ui/react';
import type { ButtonProps } from './button.types';

export default function Button({
  colorPalette = 'primary',
  ...props
}: ButtonProps) {
  return <ChakraButton colorPalette={colorPalette} {...props} />;
}
