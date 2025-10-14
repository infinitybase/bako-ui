'use client';

import { Input, mergeRefs } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { withMask } from 'use-mask-input';
import type { TextMaskProps } from './text-mask.types';

const defaultMaskOptions = {
  placeholder: '',
  showMaskOnFocus: false,
  showMaskOnHover: false,
};

const TextMask = forwardRef<HTMLInputElement, TextMaskProps>(
  ({ mask, maskOptions, ...props }, ref) => {
    const mergedMaskOptions = {
      ...defaultMaskOptions,
      ...maskOptions,
    };
    return (
      <Input
        ref={mergeRefs(ref, withMask(mask, mergedMaskOptions))}
        {...props}
      />
    );
  }
);

export default TextMask;
