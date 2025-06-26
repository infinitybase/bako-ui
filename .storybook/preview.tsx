import { ChakraProvider } from '@chakra-ui/react';
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
	],
};

export default preview;
