import { defineTokens } from '@chakra-ui/react';

export const colors = defineTokens.colors({
  primary: {
    contrast: { value: '{colors.gray.600}' },
    default: { value: '{colors.yellow.100}' },
  },
  textPrimary: { value: '{colors.gray.500}' },

  secondary: { value: '{colors.gray.200}' },
  background: { value: '{colors.gray.500}' },
  // -------------------------
  gray: {
    '50': { value: '#F5F5F5' },
    '100': { value: '#CFCCC9' },
    '200': { value: '#AAA6A1' },
    '300': { value: '#868079' },
    '400': { value: '#5E5955' },
    '450': { value: '#2B2927' },
    '500': { value: '#201F1D' },
    '600': { value: '#151413' },
  },

  yellow: {
    '50': { value: '#EED07C' },
    '100': { value: '#FFC010' },
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
    100: { value: '#00E55C' },
    200: { value: '#00943B' },
  },
  blue: {
    50: { value: '#90CDFA' },
    100: { value: '#008EF4' },
    200: { value: '#005DA0' },
  },
});
