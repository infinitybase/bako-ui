import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import CloseButton from './close-button';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('CloseButton', () => {
  it('renders correctly', () => {
    renderWithChakra(<CloseButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('has default aria-label', () => {
    renderWithChakra(<CloseButton />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label');
  });

  it('accepts custom aria-label', () => {
    renderWithChakra(<CloseButton aria-label="Close dialog" />);

    const button = screen.getByRole('button', { name: /close dialog/i });
    expect(button).toHaveAttribute('aria-label', 'Close dialog');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    renderWithChakra(<CloseButton onClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    renderWithChakra(<CloseButton disabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('renders with different sizes', () => {
    renderWithChakra(<CloseButton size="lg" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    renderWithChakra(<CloseButton variant="plain" />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderWithChakra(<CloseButton className="custom-close-button" />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-close-button');
  });

  it('renders as a different element with asChild', () => {
    renderWithChakra(
      <CloseButton asChild>
        <a href="#close">Close</a>
      </CloseButton>
    );

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
