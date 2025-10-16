import { defineSlotRecipe } from '@chakra-ui/react';
import { toastAnatomy } from '@chakra-ui/react/anatomy';

export const toastSlotRecipe = defineSlotRecipe({
  slots: toastAnatomy.keys(),
  base: {
    root: {
      py: '2',
      ps: '2',
      pe: '4',
      gap: '2',
      borderRadius: 'lg',
      border: '1px solid',
      borderColor: 'variable(--toast-border-color, transparent)',
      '&[data-type=info]': {
        bg: 'blue.solid/15',
        color: 'blue.fg',
        '--toast-trigger-bg': '{white/10}',
        '--toast-border-color': '{blue.solid/30}',
      },
      '&[data-type=warning]': {
        bg: 'yellow.solid/15',
        color: 'yellow.fg',
        '--toast-trigger-bg': '{white/10}',
        '--toast-border-color': '{yellow.solid/30}',
      },
      '&[data-type=success]': {
        bg: 'green.solid/15',
        color: 'green.fg',
        '--toast-trigger-bg': '{white/10}',
        '--toast-border-color': '{green.solid/30}',
      },
      '&[data-type=error]': {
        bg: 'red.solid/15',
        color: 'red.fg',
        '--toast-trigger-bg': '{white/10}',
        '--toast-border-color': '{red.solid/30}',
      },
    },
    title: {
      fontWeight: 'semibold',
    },
    description: {
      fontStyle: 'xs',
    },
  },
});
