import { Grid as ChakraGrid } from '@chakra-ui/react';
import type { GridProps } from './grid.types';

export default function Grid(props: GridProps) {
  return <ChakraGrid {...props} />;
}
