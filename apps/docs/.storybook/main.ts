import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const fromRoot = (relativePath: string) => {
  const url = new URL(relativePath, import.meta.url);
  const pathname = decodeURIComponent(url.pathname);

  if (process.platform === 'win32') {
    const normalized = pathname.startsWith('/') ? pathname.slice(1) : pathname;
    return normalized.split('/').join('\\');
  }

  return pathname;
};

const config: StorybookConfig = {
  stories: ['../stories/*.mdx', '../stories/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
  ],
  staticDirs: [fromRoot('../../../packages/ui/public/')],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@bako/ui': fromRoot('../../../packages/ui/src/'),
    };
    return config;
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
