import type { ComboboxRootProps, FieldLabelProps } from '@chakra-ui/react';
import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import type { EnumOption } from '../../types/common';
import type { InputProps } from '../Input';

export type RhfComboboxOptions =
  | (EnumOption & { imageUrl?: never })
  | (EnumOption & { imageUrl: string });

export type RhfComboboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & {
  options: RhfComboboxOptions[];
  label?: string;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  error?: FieldError;
  noOptionsText?: string;
  isLoadingOptions?: boolean;
  openOnFocus?: boolean;
  variant?: ComboboxRootProps['variant'];
  showTrigger?: boolean;
  clearTriggerIcon?: React.ReactNode;
  allowCustomValue?: boolean;
  onInputValueChange?: (value: string) => void;
  slotProps?: {
    root?: Omit<ComboboxRootProps, 'collection' | 'openOnClick'>;
    label?: FieldLabelProps;
    input?: Omit<InputProps, 'value' | 'onChange' | 'disabled' | 'type'>;
  };
  onlyLowercase?: boolean;
};
