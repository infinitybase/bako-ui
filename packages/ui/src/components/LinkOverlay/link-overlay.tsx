import { LinkOverlay as ChakraLinkOverlay } from '@chakra-ui/react';
import type { LinkOverlayProps } from './link-overlay.types';

export default function LinkOverlay(props: LinkOverlayProps) {
  return <ChakraLinkOverlay {...props} />;
}
