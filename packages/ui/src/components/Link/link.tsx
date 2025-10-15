import { Link as ChakraLink } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { LinkProps } from './link.types';

export default forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    return <ChakraLink ref={ref} {...props} />;
  }
);
