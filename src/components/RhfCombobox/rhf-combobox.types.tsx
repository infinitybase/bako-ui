import type { ComboboxRootProps, FieldLabelProps } from '@chakra-ui/react';
import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import type { EnumOption } from '../../types/common';

type RhfComboboxOptions =
  | (EnumOption & { imageUrl?: never })
  | (EnumOption & { imageUrl: string });

export type RhfComboboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & {
  label: string;
  options: RhfComboboxOptions[];
  helperText?: string;
  disabled?: boolean;
  error?: FieldError;
  slotProps?: {
    root?: Omit<ComboboxRootProps, 'collection' | 'openOnClick'>;
    label?: FieldLabelProps;
  };
  multiple?: boolean;
  noOptionsText?: string;
  isLoadingOptions?: boolean;
  openOnFocus?: boolean;
};
