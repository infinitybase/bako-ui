import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { WalletIcon } from '../../icons';
import Button from './button';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Button', () => {
  it('renders with correct text', () => {
    renderWithChakra(<Button>Click me</Button>);

    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    renderWithChakra(<Button size="lg">Large Button</Button>);

    const button = screen.getByRole('button', { name: /large button/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with different color schemes', () => {
    renderWithChakra(<Button colorScheme="red">Red Button</Button>);

    const button = screen.getByRole('button', { name: /red button/i });
    expect(button).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    renderWithChakra(<Button onClick={handleClick}>Clickable</Button>);

    const button = screen.getByRole('button', { name: /clickable/i });
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    renderWithChakra(<Button disabled>Disabled Button</Button>);

    const button = screen.getByRole('button', { name: /disabled button/i });
    expect(button).toBeDisabled();
  });

  it('renders with loading state', () => {
    renderWithChakra(<Button loading>Loading Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    // Chakra UI loading buttons are disabled when loading
    expect(button).toBeDisabled();
  });

  it('renders with different variants', () => {
    const variants = [
      'solid',
      'outline',
      'ghost',
      'plain',
      'subtle',
      'surface',
    ] as const;

    variants.forEach((variant) => {
      const { unmount } = renderWithChakra(
        <Button variant={variant}>{variant} Button</Button>
      );

      const button = screen.getByRole('button', {
        name: new RegExp(`${variant} button`, 'i'),
      });
      expect(button).toBeInTheDocument();

      unmount();
    });
  });

  it('renders with loading text', () => {
    renderWithChakra(
      <Button loading loadingText="Processing...">
        Submit
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    // The loading text should be visible
    expect(screen.getByText('Processing...')).toBeInTheDocument();
  });

  it('renders with spinner placement end', () => {
    renderWithChakra(
      <Button loading loadingText="Loading..." spinnerPlacement="end">
        Submit
      </Button>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it('renders with icons', () => {
    renderWithChakra(
      <Button>
        <WalletIcon data-testid="wallet-icon" />
        Button with Icon
      </Button>
    );

    const button = screen.getByRole('button', { name: /button with icon/i });
    const icon = screen.getByTestId('wallet-icon');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('renders without any props', () => {
    renderWithChakra(<Button />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('handles accessibility props', () => {
    renderWithChakra(
      <Button aria-label="Close dialog" aria-describedby="close-description">
        ×
      </Button>
    );

    const button = screen.getByRole('button', { name: /close dialog/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Close dialog');
    expect(button).toHaveAttribute('aria-describedby', 'close-description');
  });

  it('renders with custom colorPalette', () => {
    const customColors = [
      'gray',
      'green',
      'blue',
      'red',
      'orange',
      'yellow',
    ] as const;

    customColors.forEach((color) => {
      const { unmount } = renderWithChakra(
        <Button colorPalette={color}>{color} Button</Button>
      );

      const button = screen.getByRole('button', {
        name: new RegExp(`${color} button`, 'i'),
      });
      expect(button).toBeInTheDocument();

      unmount();
    });
  });

  it('handles form submission', () => {
    const handleSubmit = vi.fn((e) => e.preventDefault());

    renderWithChakra(
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit Form</Button>
      </form>
    );

    const button = screen.getByRole('button', { name: /submit form/i });
    expect(button).toHaveAttribute('type', 'submit');
  });
});
