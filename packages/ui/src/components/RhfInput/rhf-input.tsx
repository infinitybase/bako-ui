import { Box, Input as ChakraInput, Field, InputGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import {
  type FieldPath,
  type FieldValues,
  useController,
} from 'react-hook-form';
import { floatingStyles } from '../../helpers/floating-styles';
import type { RhfInputProps } from './rhf-input.types';

export function RhfInput<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  defaultValue,
  name,
  label,
  error,
  type = 'text',
  helperText,
  slotProps,
  ...props
}: RhfInputProps<TFieldValues, TName>) {
  const {
    field: { value, onChange, ref, ...rest },
  } = useController({ control, defaultValue, name });
  const { inputGroup } = slotProps || {};

  const hasValue = useMemo(
    () => value != null && value !== '' && value.toString().length > 0,
    [value]
  );

  return (
    <Field.Root invalid={!!error}>
      <InputGroup borderRadius="sm" {...inputGroup}>
        <Box position="relative" w="full" {...slotProps?.root}>
          <ChakraInput
            value={value}
            ref={ref}
            borderTopLeftRadius={inputGroup?.startAddon ? 'none' : 'sm'}
            borderBottomLeftRadius={inputGroup?.startAddon ? 'none' : 'sm'}
            borderTopRightRadius={inputGroup?.endAddon ? 'none' : 'sm'}
            borderBottomRightRadius={inputGroup?.endAddon ? 'none' : 'sm'}
            type={type}
            onChange={onChange}
            className={`peer ${slotProps?.input?.className || ''}`}
            pt={2}
            pl={inputGroup?.startElement ? '10' : '3'}
            pr={inputGroup?.endElement ? '10' : '3'}
            color="fg.inverted"
            {...rest}
            {...slotProps?.input}
            {...props}
            placeholder=" "
          />
          <Field.Label
            css={floatingStyles({
              hasValue,
              withStartIcon: !!inputGroup?.startElement,
            })}
            htmlFor={name}
            {...slotProps?.label}
          >
            {label}
          </Field.Label>
        </Box>
      </InputGroup>
      {error?.message && <Field.ErrorText>{error?.message}</Field.ErrorText>}
      {helperText && (
        <Field.HelperText color="bg.emphasized">{helperText}</Field.HelperText>
      )}
    </Field.Root>
  );
}
