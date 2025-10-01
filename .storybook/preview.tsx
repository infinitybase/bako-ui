import { ChakraProvider } from '@chakra-ui/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import theme from '../src/theme';

const preview: Preview = {
	// ...
	decorators: [
		Story => (
			<ChakraProvider value={theme}>
				<Story />
			</ChakraProvider>
		),
		withThemeByClassName({
			defaultTheme: 'light',
			themes: {
				light: 'light',
				dark: 'dark',
			},
		})
	],
};

export default preview;
