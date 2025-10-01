import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm', 'cjs'],
  clean: true,
  sourcemap: true,
  target: 'es2019',
  treeshake: true,
  dts: {
    entry: 'src/index.ts',
    resolve: true
  },
  tsconfig: './tsconfig.build.json',
  external: ['react', 'react-dom', '@chakra-ui/react', '@emotion/react', 'react/jsx-runtime', 'react-hook-form'],
});
