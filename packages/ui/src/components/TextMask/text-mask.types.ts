import type { Mask, Options } from 'use-mask-input';
import type { InputProps } from '../Input';

export interface TextMaskProps extends Omit<InputProps, 'mask'> {
  mask: Mask;
  maskOptions?: Options;
}
