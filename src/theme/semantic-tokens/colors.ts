import { defineSemanticTokens } from '@chakra-ui/react';

export const semanticColors = defineSemanticTokens.colors({
  bg: {
    DEFAULT: {
      value: {
        _light: '{colors.background}',
        _dark: '{colors.background}',
      },
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
    solid: {
      value: {
        _light: '{colors.primary.default}',
        _dark: '{colors.primary.default}',
      },
    },
    muted: {
      value: {
        _light: '{colors.gray.100}',
        _dark: '{colors.gray.100}',
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
        _light: '{colors.gray.100/20}',
        _dark: '{colors.gray.100/20}',
      },
    },
    emphasized: {
      value: { _light: '{colors.yellow.300}', _dark: '{colors.yellow.700}' },
    },
    focusRing: {
      value: { _light: '{colors.yellow.500}', _dark: '{colors.yellow.500}' },
    },
    border: {
      value: {
        _light: '{colors.gray.450}',
        _dark: '{colors.gray.600}',
      },
    },
  },
});
