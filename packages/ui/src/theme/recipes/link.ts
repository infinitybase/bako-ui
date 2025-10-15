import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  variants: {
    variant: {
      underline: {
        color: 'textPrimary',
      },
      plain: {
        color: 'textPrimary',
      },
    },
  },
});
