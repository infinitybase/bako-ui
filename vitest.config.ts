/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [react()],
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './setup-test.ts',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		// Configurações específicas para o Vitest
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'node_modules/',
				'src/test/',
				'**/*.d.ts',
				'**/*.stories.tsx',
				'**/*.config.*',
				'dist/',
				'.storybook/',
				'coverage/',
			],
		},
		// Configuração para executar os testes em UI mode
		ui: true,
		// Timeout para testes mais lentos
		testTimeout: 10000,
		// Configuração para watch mode
		watch: true,
	},
});
