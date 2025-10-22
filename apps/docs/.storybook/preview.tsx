import { theme, ThemeProvider } from 'bako-ui';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider value={theme}>
        <Story />
      </ThemeProvider>
    ),
    withThemeByClassName({
      defaultTheme: 'dark',
      themes: {
        light: 'light',
        dark: 'dark',
      },
    }),
  ],
};

export default preview;
