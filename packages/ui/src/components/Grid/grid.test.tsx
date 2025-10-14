import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Box } from '../Box';
import Grid from './grid';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Grid', () => {
  it('renders children correctly', () => {
    renderWithChakra(
      <Grid data-testid="grid">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('renders with templateColumns', () => {
    renderWithChakra(
      <Grid data-testid="grid" templateColumns="repeat(3, 1fr)">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      'grid-template-columns': 'repeat(3, 1fr)',
    });
  });

  it('renders with gap', () => {
    renderWithChakra(
      <Grid data-testid="grid" gap={4}>
        <Box>1</Box>
        <Box>2</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      gap: 'var(--chakra-spacing-4)',
    });
  });

  it('renders with templateRows', () => {
    renderWithChakra(
      <Grid data-testid="grid" templateRows="repeat(2, 1fr)">
        <Box>1</Box>
        <Box>2</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      'grid-template-rows': 'repeat(2, 1fr)',
    });
  });

  it('renders with templateAreas', () => {
    renderWithChakra(
      <Grid
        data-testid="grid"
        templateAreas={`
          "header header"
          "sidebar main"
        `}
      >
        <Box>Header</Box>
        <Box>Sidebar</Box>
        <Box>Main</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      'grid-template-areas': '"header header" "sidebar main"',
    });
  });

  it('renders with autoFlow', () => {
    renderWithChakra(
      <Grid data-testid="grid" autoFlow="column">
        <Box>1</Box>
        <Box>2</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      'grid-auto-flow': 'column',
    });
  });

  it('renders with autoRows', () => {
    renderWithChakra(
      <Grid data-testid="grid" autoRows="minmax(100px, auto)">
        <Box>1</Box>
        <Box>2</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      'grid-auto-rows': 'minmax(100px, auto)',
    });
  });

  it('renders with autoColumns', () => {
    renderWithChakra(
      <Grid data-testid="grid" autoColumns="minmax(100px, auto)">
        <Box>1</Box>
        <Box>2</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      'grid-auto-columns': 'minmax(100px, auto)',
    });
  });

  it('renders with custom className', () => {
    renderWithChakra(
      <Grid data-testid="grid" className="custom-grid">
        <Box>1</Box>
      </Grid>
    );

    const grid = screen.getByTestId('grid');
    expect(grid).toHaveClass('custom-grid');
  });

  it('renders as a different element with asChild', () => {
    renderWithChakra(
      <Grid asChild>
        <section data-testid="section">
          <Box>Content</Box>
        </section>
      </Grid>
    );

    const section = screen.getByTestId('section');
    expect(section.tagName).toBe('SECTION');
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
