import { defineRecipe } from '@chakra-ui/react';

export const iconRecipe = defineRecipe({
  variants: {
    size: {
      inherit: {},
      xs: { boxSize: '3' },
      sm: { boxSize: '4' },
      md: { boxSize: '5' },
      lg: { boxSize: '6' },
      xl: { boxSize: '7' },
      '2xl': { boxSize: '8' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});
