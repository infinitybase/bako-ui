import { Link as ChakraLink } from '@chakra-ui/react';
import type { LinkProps } from './link.types';

export default function Link(props: LinkProps) {
  return <ChakraLink {...props} />;
}
