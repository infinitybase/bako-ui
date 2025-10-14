import {
  Grid as ChakraGrid,
  GridItem as ChakraGridItem,
  type GridItemProps,
} from '@chakra-ui/react';
import type { GridProps } from './grid.types';

export function Grid(props: GridProps) {
  return <ChakraGrid {...props} />;
}

export function GridItem(props: GridItemProps) {
  return <ChakraGridItem {...props} />;
}
