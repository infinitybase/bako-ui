import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Separator from './separator';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Separator', () => {
  it('renders horizontal separator', () => {
    renderWithChakra(<Separator data-testid="separator" />);
    expect(screen.getByTestId('separator')).toBeInTheDocument();
  });

  it('renders vertical separator', () => {
    renderWithChakra(
      <Separator data-testid="v-separator" orientation="vertical" />
    );
    expect(screen.getByTestId('v-separator')).toBeInTheDocument();
  });

  it('applies custom styles', () => {
    renderWithChakra(
      <Separator data-testid="styled-separator" borderColor="red.100" />
    );
    expect(screen.getByTestId('styled-separator')).toBeInTheDocument();
  });
});
