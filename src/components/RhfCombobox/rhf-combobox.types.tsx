import type { ComboboxRootProps, FieldLabelProps } from '@chakra-ui/react';
import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import type { EnumOption } from '../../types/common';

export type RhfComboboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & {
  label: string;
  options: EnumOption[];
  helperText?: string;
  disabled?: boolean;
  error?: FieldError;
  slotProps?: {
    root?: ComboboxRootProps;
    label?: FieldLabelProps;
  };
  multiple?: boolean;
  noOptionsText?: string;
  isLoadingOptions?: boolean;
};
