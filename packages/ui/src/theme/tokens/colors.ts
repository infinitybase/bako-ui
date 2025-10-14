import { defineTokens } from '@chakra-ui/react';

export const colorsTokens = defineTokens.colors({
  primary: {
    contrast: { value: '{colors.gray.500}' },
    default: { value: '{colors.yellow.100}' },
  },
  secondary: {
    default: { value: '{colors.gray.500}' },
    contrast: { value: '{colors.gray.300}' },
  },

  textPrimary: { value: '{colors.gray.50}' },
  textSecondary: { value: '{colors.gray.200}' },
  background: { value: '{colors.gray.500}' },

  // ------------------------------------------

  gray: {
    '50': { value: '#F5F5F5' },
    '100': { value: '#CFCCC9' },
    '200': { value: '#AAA6A1' },
    '300': { value: '#868079' },
    '400': { value: '#5E5955' },
    '500': { value: '#201F1D' },
    '600': { value: '#151413' },
  },

  yellow: {
    '50': { value: '#EED07C' },
    '100': { value: '#FFC010' },
    '150': { value: '#E3AF13' },
    '200': { value: '#B68F40' },
    '300': { value: '#F16517' },
    '400': { value: '#B24F18' },
    '500': { value: '#54372D' },
  },
  red: {
    50: { value: '#EF9B8F' },
    100: { value: '#F05D48' },
    200: { value: '#F2290D' },
  },
  green: {
    50: { value: '#8CEEB3' },
    100: { value: '#00F48B' },
    200: { value: '#00E55C' },
    300: { value: '#00943B' },
  },
  blue: {
    50: { value: '#90CDFA' },
    100: { value: '#008EF4' },
    200: { value: '#005DA0' },
  },
});
