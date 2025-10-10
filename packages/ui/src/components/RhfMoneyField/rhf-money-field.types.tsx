import type {
  BoxProps,
  FieldLabelProps,
  InputGroupProps,
} from '@chakra-ui/react';
import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import type { MoneyFieldProps } from '../MoneyField/money-field.types';

export type RhfMoneyFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> &
  Omit<MoneyFieldProps, 'value' | 'onChange'> & {
    label: string;
    error?: FieldError;
    helperText?: string;
    slotProps?: {
      inputGroup?: Omit<InputGroupProps, 'children'>;
      label?: FieldLabelProps;
      root?: BoxProps;
    };
  };
