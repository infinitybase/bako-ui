import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import type React from 'react';
import theme from '../theme';

// Wrapper component to provide Chakra UI context
const ChakraWrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider value={theme}>{children}</ChakraProvider>
);

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

// Example component for testing setup template
const ExampleComponent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);

// Export the test utilities for reuse in other test files
export { ChakraWrapper, ExampleComponent, renderWithChakra };
