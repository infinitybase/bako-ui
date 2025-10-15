import { LinkOverlay as ChakraLinkOverlay } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { LinkOverlayProps } from './link-overlay.types';

export default forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  function LinkOverlay(props, ref) {
    return <ChakraLinkOverlay ref={ref} {...props} />;
  }
);
