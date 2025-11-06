import { defineSlotRecipe } from '@chakra-ui/react';
import { cardAnatomy } from '@chakra-ui/react/anatomy';

export const cardSlotRecipe = defineSlotRecipe({
  slots: cardAnatomy.keys(),
  base: {
    root: {
      borderRadius: '2xl',
    },
  },
  variants: {
    variant: {
      subtle: {
        root: {
          bg: 'bg.panel',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
});
