import { Container as ChakraContainer } from '@chakra-ui/react';
import type { ContainerProps } from './container.types';

export default function Container(props: ContainerProps) {
  return <ChakraContainer {...props} />;
}
