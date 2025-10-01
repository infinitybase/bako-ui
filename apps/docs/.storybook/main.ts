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
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ],
  staticDirs: [fromRoot('../../../packages/ui/public/')],
  framework: {
    name: '@storybook/react-vite',
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
