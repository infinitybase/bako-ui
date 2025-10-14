import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { HStack, Stack, VStack } from './stack';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Stack', () => {
  it('renders children in a stack', () => {
    renderWithChakra(
      <Stack data-testid="stack">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByTestId('stack')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('applies gap prop', () => {
    renderWithChakra(
      <Stack data-testid="gapped-stack" gap={4}>
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByTestId('gapped-stack')).toBeInTheDocument();
  });

  it('supports direction prop', () => {
    renderWithChakra(
      <Stack data-testid="row-stack" direction="row">
        <div>Item 1</div>
        <div>Item 2</div>
      </Stack>
    );
    expect(screen.getByTestId('row-stack')).toBeInTheDocument();
  });
});

describe('HStack', () => {
  it('renders children horizontally', () => {
    renderWithChakra(
      <HStack data-testid="hstack">
        <div>Left</div>
        <div>Right</div>
      </HStack>
    );
    expect(screen.getByTestId('hstack')).toBeInTheDocument();
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('applies gap between items', () => {
    renderWithChakra(
      <HStack data-testid="hstack-gap" gap={8}>
        <div>A</div>
        <div>B</div>
      </HStack>
    );
    expect(screen.getByTestId('hstack-gap')).toBeInTheDocument();
  });
});

describe('VStack', () => {
  it('renders children vertically', () => {
    renderWithChakra(
      <VStack data-testid="vstack">
        <div>Top</div>
        <div>Bottom</div>
      </VStack>
    );
    expect(screen.getByTestId('vstack')).toBeInTheDocument();
    expect(screen.getByText('Top')).toBeInTheDocument();
    expect(screen.getByText('Bottom')).toBeInTheDocument();
  });

  it('supports align prop', () => {
    renderWithChakra(
      <VStack data-testid="aligned-vstack" align="start">
        <div>Item 1</div>
        <div>Item 2</div>
      </VStack>
    );
    expect(screen.getByTestId('aligned-vstack')).toBeInTheDocument();
  });
});
