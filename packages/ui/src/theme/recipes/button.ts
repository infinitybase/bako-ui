import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    borderRadius: 'lg',
  },
  variants: {
    variant: {},
  },
  defaultVariants: { colorPalette: 'primary' },
});
