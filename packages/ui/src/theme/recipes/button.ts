import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      shaded: {
        backgroundColor: 'gray.light',
        color: 'gray.darkest',
        _hover: {
          backgroundColor: 'gray.dark',
        },
        _expanded: {
          backgroundColor: 'gray.dark',
        },
      },
    },
  },
});
