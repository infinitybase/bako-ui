import { defineSlotRecipe } from '@chakra-ui/react';
import { tabsAnatomy } from '@chakra-ui/react/anatomy';

export const tabsSlotRecipe = defineSlotRecipe({
  slots: tabsAnatomy.keys(),
  variants: {
    variant: {
      enclosed: {
        trigger: {
          _selected: {
            color: 'fg',
          },
        },
      },
      outline: {
        trigger: {
          _selected: {
            color: 'fg',
          },
        },
      },
      plain: {
        trigger: {
          _selected: {
            color: 'fg',
          },
        },
      },
    },
  },
});
