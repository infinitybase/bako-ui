import { RadioGroup as ChakraRadioGroup } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { RadioGroupProps, RadioProps } from './radio.types';

// RadioGroup wrapper
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(props, ref) {
    return <ChakraRadioGroup.Root ref={ref} spaceX={2} {...props} />;
  }
);

// Radio.Item wrapper
const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function Radio(props, ref) {
    const { children, inputProps, ...rest } = props;

    return (
      <ChakraRadioGroup.Item {...rest}>
        <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
        <ChakraRadioGroup.ItemControl />
        {children != null && (
          <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>
        )}
      </ChakraRadioGroup.Item>
    );
  }
);

export default Radio;
