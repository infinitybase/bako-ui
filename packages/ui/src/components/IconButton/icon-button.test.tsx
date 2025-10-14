import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { CheckIcon } from '../../icons';
import IconButton from './icon-button';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('IconButton', () => {
  it('renders with icon correctly', () => {
    renderWithChakra(
      <IconButton aria-label="Search">
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeInTheDocument();
  });

  it('requires aria-label for accessibility', () => {
    renderWithChakra(
      <IconButton aria-label="Delete item">
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /delete item/i });
    expect(button).toHaveAttribute('aria-label', 'Delete item');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    renderWithChakra(
      <IconButton aria-label="Click me" onClick={handleClick}>
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /click me/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    renderWithChakra(
      <IconButton aria-label="Disabled" disabled>
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });

  it('renders with different sizes', () => {
    renderWithChakra(
      <IconButton aria-label="Large icon" size="lg">
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /large icon/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    renderWithChakra(
      <IconButton aria-label="Outline button" variant="outline">
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /outline button/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with different color palettes', () => {
    renderWithChakra(
      <IconButton aria-label="Blue button" colorPalette="blue">
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /blue button/i });
    expect(button).toBeInTheDocument();
  });

  it('supports loading state', () => {
    renderWithChakra(
      <IconButton aria-label="Loading" loading>
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderWithChakra(
      <IconButton aria-label="Custom class" className="custom-icon-button">
        <CheckIcon />
      </IconButton>
    );

    const button = screen.getByRole('button', { name: /custom class/i });
    expect(button).toHaveClass('custom-icon-button');
  });

  it('renders as a different element with asChild', () => {
    renderWithChakra(
      <IconButton aria-label="Link button" asChild>
        <a href="https://example.com">
          <CheckIcon />
        </a>
      </IconButton>
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-label', 'Link button');
  });
});
