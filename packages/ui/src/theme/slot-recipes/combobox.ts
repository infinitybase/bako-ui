import { defineSlotRecipe } from '@chakra-ui/react';
import { comboboxAnatomy } from '@chakra-ui/react/anatomy';

export const comboboxSlotRecipe = defineSlotRecipe({
  slots: comboboxAnatomy.keys(),
  base: {
    input: {
      borderRadius: 'lg',
    },
  },
});
