import {
  Steps as ChakraSteps,
  useSteps,
  useStepsContext,
  useStepsItemContext,
} from '@chakra-ui/react';

export const Steps = {
  ...ChakraSteps,
} as typeof ChakraSteps;

export { useSteps, useStepsContext, useStepsItemContext };
