import type { InputProps } from '@chakra-ui/react';

export interface MoneyFieldProps
  extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value: string | number;
  onChange: (value: string) => void;
  /**
   * The character to use as a thousand separator
   * @default ','
   */
  thousandSeparator?: string;
  /** The character to use as a decimal separator
   * @default '.'
   */
  decimalSeparator?: string;
  /** The number of decimal places to allow
   * @default 2
   */
  decimalScale?: number;
}
