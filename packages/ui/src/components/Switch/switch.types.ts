import type { Switch as ChakraSwitch } from '@chakra-ui/react';
import type React from 'react';

export interface SwitchProps extends ChakraSwitch.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  thumbLabel?: {
    on?: React.ReactNode;
    off?: React.ReactNode;
  };
}
