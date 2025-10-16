import { defineSlotRecipe } from '@chakra-ui/react';
import { accordionAnatomy } from '@chakra-ui/react/anatomy';

export const accordionSlotRecipe = defineSlotRecipe({
  slots: accordionAnatomy.keys(),
  base: {
    root: {
      '--accordion-radius': 'radii.lg',
    },
  },
  variants: {
    variant: {
      subtle: {
        item: {
          bg: 'bg.panel',
          _open: {
            bg: 'bg.panel',
          },
        },
      },
    },
  },
});
