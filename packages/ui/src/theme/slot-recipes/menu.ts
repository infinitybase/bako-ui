import { defineSlotRecipe } from '@chakra-ui/react';
import { menuAnatomy } from '@chakra-ui/react/anatomy';

export const menuSlotRecipe = defineSlotRecipe({
  slots: menuAnatomy.keys(),
  base: {
    content: {
      color: 'primary.fg',
      borderRadius: '2xl',
    },
    item: {
      color: 'primary.fg',
    },
  },
  variants: {
    variant: {
      subtle: {
        item: {
          _highlighted: {
            bg: 'primary.emphasized',
          },
        },
      },
    },
  },
});
