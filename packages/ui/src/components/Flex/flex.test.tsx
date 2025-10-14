import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Flex from './flex';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Flex', () => {
  it('renders children correctly', () => {
    renderWithChakra(
      <Flex data-testid="flex">
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>
    );
    expect(screen.getByTestId('flex')).toBeInTheDocument();
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('applies flexbox properties', () => {
    renderWithChakra(
      <Flex
        data-testid="flex-props"
        direction="row"
        justify="space-between"
        align="center"
      >
        <div>A</div>
        <div>B</div>
      </Flex>
    );
    expect(screen.getByTestId('flex-props')).toBeInTheDocument();
  });

  it('supports wrap prop', () => {
    renderWithChakra(
      <Flex data-testid="flex-wrap" wrap="wrap">
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    expect(screen.getByTestId('flex-wrap')).toBeInTheDocument();
  });

  it('supports gap prop', () => {
    renderWithChakra(
      <Flex data-testid="flex-gap" gap={4}>
        <div>A</div>
        <div>B</div>
      </Flex>
    );
    expect(screen.getByTestId('flex-gap')).toBeInTheDocument();
  });
});
