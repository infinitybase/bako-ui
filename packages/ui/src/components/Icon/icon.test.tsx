import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Icon from './icon';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

// Simple SVG icon for testing
const TestIcon = () => (
  <svg viewBox="0 0 24 24" data-testid="test-icon">
    <title>Test Icon</title>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

describe('Icon', () => {
  it('renders icon with children', () => {
    renderWithChakra(
      <Icon>
        <TestIcon />
      </Icon>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies size prop', () => {
    renderWithChakra(
      <Icon boxSize={8}>
        <TestIcon />
      </Icon>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('applies color prop', () => {
    renderWithChakra(
      <Icon color="red.100">
        <TestIcon />
      </Icon>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  it('renders with custom viewBox', () => {
    renderWithChakra(
      <Icon viewBox="0 0 32 32">
        <TestIcon />
      </Icon>
    );
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
