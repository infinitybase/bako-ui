import { Progress as ChakraProgress } from '@chakra-ui/react';
import { forwardRef } from 'react';
import type { ProgressProps } from './progress.types';

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  function Progress(props, ref) {
    const {
      showValueText,
      valueText,
      label,
      trackProps,
      rangeProps,
      labelProps,
      valueTextProps,
      ...rootProps
    } = props;

    return (
      <ChakraProgress.Root ref={ref} {...rootProps}>
        {label && (
          <ChakraProgress.Label {...labelProps}>{label}</ChakraProgress.Label>
        )}
        <ChakraProgress.Track {...trackProps}>
          <ChakraProgress.Range {...rangeProps} />
        </ChakraProgress.Track>
        {showValueText && (
          <ChakraProgress.ValueText {...valueTextProps}>
            {valueText}
          </ChakraProgress.ValueText>
        )}
      </ChakraProgress.Root>
    );
  }
);

export const ProgressRoot = ChakraProgress.Root;
export const ProgressTrack = ChakraProgress.Track;
export const ProgressRange = ChakraProgress.Range;
export const ProgressLabel = ChakraProgress.Label;
export const ProgressValueText = ChakraProgress.ValueText;
