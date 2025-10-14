import { defineRecipe } from '@chakra-ui/react';

export const cardRecipe = defineRecipe({
  variants: {
    variant: {
      subtle: {},
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
});
