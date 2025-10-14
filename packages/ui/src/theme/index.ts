import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { recipes } from './recipes';
import { semanticTokens } from './semantic-tokens';
import { slotRecipes } from './slot-recipes';
import { tokens } from './tokens';

const config = defineConfig({
  theme: {
    tokens,
    semanticTokens,
    breakpoints: {
      xs: '25em', // 400px
      sm: '48em', // 768px
      md: '64em', // 1024px
      lg: '80em', // 1280px
      xl: '90em', // 1440px
    },
    recipes,
    slotRecipes,
  },
  globalCss: {
    body: {
      color: 'textPrimary',
      bg: 'background',
      minH: '100vh',
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
