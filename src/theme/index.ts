import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { colors } from './colors';
import { buttonRecipe } from './recipes/button';
import { inputRecipe } from './recipes/input';
import { semanticColors } from './semantic-tokens/colors';
import { fonts } from './tokens/fonts';

const config = defineConfig({
  theme: {
    tokens: {
      colors,
      fonts,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    breakpoints: {
      xs: '25em', // 400px
      sm: '48em', // 768px
      md: '64em', // 1024px
      lg: '80em', // 1280px
      xl: '90em', // 1440px
    },
    recipes: {
      button: buttonRecipe,
      input: inputRecipe,
    },
  },
  globalCss: {
    body: {
      color: 'textPrimary',
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
