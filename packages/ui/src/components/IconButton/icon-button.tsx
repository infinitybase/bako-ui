import { IconButton as ChakraIconButton } from '@chakra-ui/react';
import type { IconButtonProps } from './icon-button.types';

export default function IconButton(props: IconButtonProps) {
  return <ChakraIconButton {...props} />;
}
