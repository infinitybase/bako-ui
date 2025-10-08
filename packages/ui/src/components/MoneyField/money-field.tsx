import { Input as ChakraInput } from '@chakra-ui/react';
import { type ChangeEvent, useCallback, useMemo, useRef } from 'react';
import type { MoneyFieldProps } from './money-field.types';

export function MoneyField({
  value,
  onChange,
  thousandSeparator = ',',
  decimalSeparator = '.',
  decimalScale = 2,
  ...props
}: MoneyFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const config = useMemo(
    () => ({
      thousandSeparator,
      decimalSeparator,
      decimalScale,
    }),
    [thousandSeparator, decimalSeparator, decimalScale]
  );

  const formatNumber = useCallback(
    (num: string | number): string => {
      const numStr = String(num).replace(/[^\d.-]/g, '');
      if (!numStr || numStr === '-') return '';

      const [integerPart, decimalPart] = numStr.split('.');
      const formattedInteger = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        config.thousandSeparator
      );

      let result = formattedInteger;
      if (decimalPart !== undefined) {
        const limitedDecimal = decimalPart.slice(0, config.decimalScale);
        result = `${formattedInteger}${config.decimalSeparator}${limitedDecimal}`;
      }

      return result;
    },
    [config]
  );

  const unformatNumber = useCallback(
    (formatted: string): string => {
      return formatted
        .replace(new RegExp(`\\${config.thousandSeparator}`, 'g'), '')
        .replace(new RegExp(`\\${config.decimalSeparator}`, 'g'), '.');
    },
    [config]
  );

  const displayValue = useMemo(() => {
    if (!value && value !== 0) return '';
    return formatNumber(value);
  }, [value, formatNumber]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      const cursorPosition = event.target.selectionStart || 0;

      const rawValue = unformatNumber(inputValue);

      // Validate numeric input
      if (
        rawValue === '' ||
        rawValue === '-' ||
        !Number.isNaN(Number(rawValue))
      ) {
        onChange(rawValue);

        // Restore cursor position after formatting
        setTimeout(() => {
          if (inputRef.current) {
            const newFormattedValue = formatNumber(rawValue);
            const diff = newFormattedValue.length - inputValue.length;
            inputRef.current.setSelectionRange(
              cursorPosition + diff,
              cursorPosition + diff
            );
          }
        }, 0);
      }
    },
    [formatNumber, unformatNumber, onChange]
  );

  return (
    <ChakraInput
      ref={inputRef}
      value={displayValue}
      type="text"
      onChange={handleChange}
      color="fg.inverted"
      {...props}
    />
  );
}
