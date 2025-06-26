import { defineRecipe } from '@chakra-ui/react';

export const inputRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        bg: 'transparent',
        borderWidth: '1px',
        borderColor: 'gray.450',
        focusVisibleRing: 'inside',
        outlineWidth: '3px',
        focusRingColor: 'var(--focus-color)',
        _focusVisible: {
          borderColor: 'border',
        },
      },
    },
  },
});
