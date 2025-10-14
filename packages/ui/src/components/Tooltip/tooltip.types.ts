import type { Tooltip as ChakraTooltip } from '@chakra-ui/react';
import type React from 'react';

export interface TooltipProps extends ChakraTooltip.RootProps {
  content: React.ReactNode;
  showArrow?: boolean;
}
