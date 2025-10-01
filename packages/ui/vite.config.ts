import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'BakoUI',
			formats: ['es', 'umd'],
			fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', '@chakra-ui/react', '@emotion/react'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					'@chakra-ui/react': 'ChakraUI',
					'@emotion/react': 'EmotionReact',
				},
			},
		},
	},
});
