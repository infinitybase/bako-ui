import { Switch as ChakraSwitch } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { SwitchProps } from './switch.types';

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(props, ref) {
    const { children, inputProps, thumbLabel, ...rest } = props;

    return (
      <ChakraSwitch.Root {...rest}>
        <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
        <ChakraSwitch.Control>
          <ChakraSwitch.Thumb />
          {thumbLabel && (
            <ChakraSwitch.Indicator fallback={thumbLabel.off}>
              {thumbLabel.on}
            </ChakraSwitch.Indicator>
          )}
        </ChakraSwitch.Control>
        {children != null && (
          <ChakraSwitch.Label>{children}</ChakraSwitch.Label>
        )}
      </ChakraSwitch.Root>
    );
  }
);

export default Switch;
