import { defineRecipe } from '@chakra-ui/react';

export const badgeRecipe = defineRecipe({
  base: {
    borderRadius: 'xl',
  },
  variants: {
    variant: {
      surface: {
        border: '1px solid',
        borderColor: 'colorPalette.subtle/25',
        bg: 'colorPalette.subtle/10',
        color: 'colorPalette.solid',
      },
      subtle: {
        bg: 'colorPalette.subtle/5',
        color: 'colorPalette.solid',
      },
    },
  },
});
