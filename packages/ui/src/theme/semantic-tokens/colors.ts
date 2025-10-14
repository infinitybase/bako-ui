import { defineSemanticTokens } from '@chakra-ui/react';

export const semanticColors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: {
        _light: '{colors.background}',
        _dark: '{colors.background}',
      },
    },
    panel: {
      value: { _light: '{colors.gray.600}', _dark: '{colors.gray.600}' },
    },
    muted: {
      value: { _light: '{colors.gray.500}', _dark: '{colors.gray.500}' },
    },
  },
  fg: {
    DEFAULT: {
      value: { _light: '{colors.gray.50}', _dark: '{colors.gray.50}' },
    },
    muted: {
      value: { _light: '{colors.gray.200}', _dark: '{colors.gray.200}' },
    },
  },
  red: {
    solid: {
      value: {
        _light: '{colors.red.100}',
        _dark: '{colors.red.100}',
      },
    },
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.red.700}', _dark: '{colors.red.300}' },
    },
    subtle: {
      value: { _light: '{colors.red.100}', _dark: '{colors.red.900}' },
    },
    muted: {
      value: { _light: '{colors.red.200}', _dark: '{colors.red.800}' },
    },
    emphasized: {
      value: { _light: '{colors.red.300}', _dark: '{colors.red.700}' },
    },
    focusRing: {
      value: { _light: '{colors.red.500}', _dark: '{colors.red.500}' },
    },
  },
  primary: {
    DEFAULT: {
      value: { _light: '{colors.primary}', _dark: '{colors.primary}' },
    },
    solid: {
      value: {
        _light: '{colors.primary.default}',
        _dark: '{colors.primary.default}',
      },
    },
    muted: {
      value: {
        _light: '{colors.gray.300/40}',
        _dark: '{colors.gray.300/40}',
      },
    },
    contrast: {
      value: { _light: 'black', _dark: 'black' },
    },
    fg: {
      value: { _light: '{colors.gray.100}', _dark: '{colors.gray.100}' },
    },
    subtle: {
      value: {
        _light: '{colors.gray.300/20}',
        _dark: '{colors.gray.300/20}',
      },
    },
    emphasized: {
      value: { _light: '{colors.gray.400}', _dark: '{colors.gray.400}' },
    },
    border: {
      value: {
        _light: '{colors.gray.600}',
        _dark: '{colors.gray.600}',
      },
    },
  },
  green: {
    contrast: {
      value: { _light: 'white', _dark: 'white' },
    },
    fg: {
      value: { _light: '{colors.green.300}', _dark: '{colors.green.300}' },
    },
    subtle: {
      value: { _light: '{colors.green.100}', _dark: '{colors.green.100}' },
    },
    muted: {
      value: { _light: '{colors.green.100}', _dark: '{colors.green.100}' },
    },
    emphasized: {
      value: { _light: '{colors.green.300}', _dark: '{colors.green.300}' },
    },
    solid: {
      value: { _light: '{colors.green.300}', _dark: '{colors.green.300}' },
    },
    focusRing: {
      value: { _light: '{colors.green.300}', _dark: '{colors.green.300}' },
    },
  },

  yellow: {
    contrast: {
      value: { _light: 'black', _dark: 'black' },
    },
    fg: {
      value: { _light: '{colors.yellow.800}', _dark: '{colors.yellow.300}' },
    },
    subtle: {
      value: { _light: '{colors.yellow.150}', _dark: '{colors.yellow.150}' },
    },
    muted: {
      value: { _light: '{colors.yellow.200}', _dark: '{colors.yellow.800}' },
    },
    emphasized: {
      value: { _light: '{colors.yellow.300}', _dark: '{colors.yellow.700}' },
    },
    solid: {
      value: { _light: '{colors.yellow.100}', _dark: '{colors.yellow.100}' },
    },
    focusRing: {
      value: { _light: '{colors.yellow.500}', _dark: '{colors.yellow.500}' },
    },
  },
});
