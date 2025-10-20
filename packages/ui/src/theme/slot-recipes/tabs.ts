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
      subtle: {
        trigger: {
          rounded: 'lg',
          color: 'textSecondary',
          bg: 'bg.panel',
          transition: 'all 0.3s',
          _hover: {
            bg: 'bg.muted',
            color: 'textPrimary',
          },
          _selected: {
            color: 'textPrimary',
            bg: 'bg.muted',
          },
        },
      },
    },
  },
});
