import { defineSlotRecipe } from '@chakra-ui/react';
import { progressAnatomy } from '@chakra-ui/react/anatomy';

export const progessSlotRecipes = defineSlotRecipe({
  slots: progressAnatomy.keys(),
  variants: {
    size: {
      xs: {
        track: { h: '0.5' },
      },
      sm: {
        track: { h: '1' },
      },
      md: {
        track: { h: '2.5' },
      },
      lg: {
        track: { h: '3' },
      },
      xl: {
        track: { h: '4' },
      },
    },
  },
});
