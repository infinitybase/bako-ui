import { theme, ThemeProvider } from 'bako-ui';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider value={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
