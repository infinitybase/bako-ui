import type { Progress as ChakraProgress } from '@chakra-ui/react';
import type { ComponentPropsWithoutRef } from 'react';

export type ProgressRootProps = ComponentPropsWithoutRef<
  typeof ChakraProgress.Root
>;

export type ProgressTrackProps = ComponentPropsWithoutRef<
  typeof ChakraProgress.Track
>;

export type ProgressRangeProps = ComponentPropsWithoutRef<
  typeof ChakraProgress.Range
>;

export type ProgressLabelProps = ComponentPropsWithoutRef<
  typeof ChakraProgress.Label
>;

export type ProgressValueTextProps = ComponentPropsWithoutRef<
  typeof ChakraProgress.ValueText
>;

export interface ProgressProps extends ProgressRootProps {
  showValueText?: boolean;
  valueText?: React.ReactNode;
  label?: React.ReactNode;
  trackProps?: ProgressTrackProps;
  rangeProps?: ProgressRangeProps;
  labelProps?: ProgressLabelProps;
  valueTextProps?: ProgressValueTextProps;
}
