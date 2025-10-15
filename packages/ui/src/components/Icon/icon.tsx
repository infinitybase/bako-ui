import { Icon as ChakraIcon } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { IconProps } from './icon.types';

const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
  return <ChakraIcon ref={ref} {...props} />;
});

export default Icon;

// Re-export for direct access when needed
export { ChakraIcon };
