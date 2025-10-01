import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '../../..');

const config: StorybookConfig = {
  stories: ['../stories/*.mdx', '../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ],
  staticDirs: [join(rootDir, 'packages/ui/public')],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@bako/ui': join(rootDir, 'packages/ui/src'),
    };
    return config;
  },
};

export default config;
