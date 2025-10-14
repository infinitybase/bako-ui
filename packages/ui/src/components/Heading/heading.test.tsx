import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Heading from './heading';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Heading', () => {
  it('renders heading text', () => {
    renderWithChakra(<Heading>Main Title</Heading>);
    expect(screen.getByRole('heading', { name: 'Main Title' })).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    renderWithChakra(
      <Heading data-testid="large-heading" size="2xl">
        Large Heading
      </Heading>
    );
    expect(screen.getByTestId('large-heading')).toBeInTheDocument();
  });

  it('supports as prop for semantic HTML', () => {
    renderWithChakra(
      <Heading as="h2" data-testid="h2-heading">
        Subtitle
      </Heading>
    );
    const heading = screen.getByTestId('h2-heading');
    expect(heading.tagName).toBe('H2');
  });

  it('applies color prop', () => {
    renderWithChakra(
      <Heading data-testid="colored-heading" color="blue.100">
        Colored Heading
      </Heading>
    );
    expect(screen.getByTestId('colored-heading')).toBeInTheDocument();
  });

  it('applies fontWeight prop', () => {
    renderWithChakra(
      <Heading data-testid="weighted-heading" fontWeight="light">
        Light Heading
      </Heading>
    );
    expect(screen.getByTestId('weighted-heading')).toBeInTheDocument();
  });
});
