import type {
  BoxProps,
  FieldLabelProps,
  InputGroupProps,
  InputProps,
} from '@chakra-ui/react';
import type {
  FieldError,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';

export type RhfInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = UseControllerProps<TFieldValues, TName> & {
  label?: React.ReactNode;
  type?: string;
  helperText?: string;
  disabled?: boolean;
  error?: FieldError;
  slotProps?: {
    inputGroup?: Omit<InputGroupProps, 'children'>;
    input?: Omit<InputProps, 'value' | 'onChange' | 'name' | 'children'>;
    label?: FieldLabelProps;
    root?: BoxProps;
  };
};
