import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Loader from './loader';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Loader', () => {
  it('renders loader', () => {
    renderWithChakra(<Loader data-testid="loader" />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('applies size prop', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

    sizes.forEach((size) => {
      const { unmount } = renderWithChakra(
        <Loader data-testid={`${size}-loader`} size={size} />
      );

      expect(screen.getByTestId(`${size}-loader`)).toBeInTheDocument();
      unmount();
    });
  });

  it('applies color prop', () => {
    renderWithChakra(<Loader data-testid="colored-loader" color="blue.100" />);
    expect(screen.getByTestId('colored-loader')).toBeInTheDocument();
  });

  it('applies custom thickness', () => {
    renderWithChakra(<Loader data-testid="thick-loader" borderWidth="4px" />);
    expect(screen.getByTestId('thick-loader')).toBeInTheDocument();
  });
});
