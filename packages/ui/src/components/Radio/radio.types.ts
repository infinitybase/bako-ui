import type { RadioGroup } from '@chakra-ui/react';
import type React from 'react';

export interface RadioGroupProps extends RadioGroup.RootProps {
  // Props adicionais do wrapper
}

export interface RadioProps extends RadioGroup.ItemProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
