import { Box, Field, InputGroup } from '@chakra-ui/react';
import { useMemo } from 'react';
import {
  type FieldPath,
  type FieldValues,
  useController,
} from 'react-hook-form';
import { floatingStyles } from '../../helpers/floating-styles';
import { MoneyField } from '../MoneyField/money-field';
import type { RhfMoneyFieldProps } from './rhf-money-field.types';

export function RhfMoneyField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  defaultValue,
  name,
  label,
  error,
  thousandSeparator,
  decimalSeparator,
  decimalScale,
  helperText,
  slotProps,
  disabled = false,
  ...props
}: RhfMoneyFieldProps<TFieldValues, TName>) {
  const {
    field: { value, onChange, ...rest },
  } = useController({ control, defaultValue, name });

  const hasValue = useMemo(() => {
    return String(value).length > 0;
  }, [value]);

  return (
    <Field.Root invalid={!!error}>
      <InputGroup borderRadius="sm" {...slotProps?.inputGroup}>
        <Box position="relative" w="full" {...slotProps?.root}>
          <MoneyField
            value={value}
            onChange={onChange}
            thousandSeparator={thousandSeparator}
            decimalSeparator={decimalSeparator}
            decimalScale={decimalScale}
            disabled={disabled}
            className={`peer ${props?.className || ''}`}
            pt={2}
            pl={slotProps?.inputGroup?.startElement ? '10' : '3'}
            pr={slotProps?.inputGroup?.endElement ? '10' : '3'}
            color="fg.inverted"
            borderTopLeftRadius={
              slotProps?.inputGroup?.startAddon ? 'none' : 'sm'
            }
            borderBottomLeftRadius={
              slotProps?.inputGroup?.startAddon ? 'none' : 'sm'
            }
            borderTopRightRadius={
              slotProps?.inputGroup?.endAddon ? 'none' : 'sm'
            }
            borderBottomRightRadius={
              slotProps?.inputGroup?.endAddon ? 'none' : 'sm'
            }
            placeholder=" "
            {...rest}
            {...props}
          />
          <Field.Label
            css={floatingStyles({
              hasValue,
              withStartIcon: !!slotProps?.inputGroup?.startElement,
            })}
            htmlFor={rest.name}
            {...slotProps?.label}
          >
            {label}
          </Field.Label>
        </Box>
      </InputGroup>
      {error?.message && <Field.ErrorText>{error.message}</Field.ErrorText>}
      {helperText && (
        <Field.HelperText color="bg.emphasized">{helperText}</Field.HelperText>
      )}
    </Field.Root>
  );
}
