import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Text from './text';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Text', () => {
  it('renders text content', () => {
    renderWithChakra(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies fontSize prop', () => {
    renderWithChakra(
      <Text data-testid="sized-text" fontSize="2xl">
        Large Text
      </Text>
    );
    expect(screen.getByTestId('sized-text')).toBeInTheDocument();
  });

  it('applies fontWeight prop', () => {
    renderWithChakra(
      <Text data-testid="bold-text" fontWeight="bold">
        Bold Text
      </Text>
    );
    expect(screen.getByTestId('bold-text')).toBeInTheDocument();
  });

  it('applies color prop', () => {
    renderWithChakra(
      <Text data-testid="colored-text" color="red.100">
        Colored Text
      </Text>
    );
    expect(screen.getByTestId('colored-text')).toBeInTheDocument();
  });

  it('supports as prop for different elements', () => {
    renderWithChakra(
      <Text data-testid="span-text" as="span">
        Span Text
      </Text>
    );
    const text = screen.getByTestId('span-text');
    expect(text.tagName).toBe('SPAN');
  });

  it('supports text truncation', () => {
    renderWithChakra(
      <Text data-testid="truncated-text" truncate>
        This is a very long text that should be truncated
      </Text>
    );
    expect(screen.getByTestId('truncated-text')).toBeInTheDocument();
  });
});
