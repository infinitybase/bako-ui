import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import TextMask from './text-mask';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('TextMask', () => {
  it('renders text mask input with placeholder', () => {
    renderWithChakra(<TextMask mask="(99) 99999-9999" placeholder="Phone" />);

    const input = screen.getByPlaceholderText('Phone');
    expect(input).toBeInTheDocument();
  });

  it('applies phone mask to input value', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <TextMask mask="(99) 99999-9999" placeholder="Phone number" />
    );

    const input = screen.getByPlaceholderText(
      'Phone number'
    ) as HTMLInputElement;
    await user.type(input, '11987654321');

    // The mask should format the input
    expect(input.value).toBe('(11) 98765-4321');
  });

  it('applies CPF mask to input value', async () => {
    const user = userEvent.setup();
    renderWithChakra(<TextMask mask="999.999.999-99" placeholder="CPF" />);

    const input = screen.getByPlaceholderText('CPF') as HTMLInputElement;
    await user.type(input, '12345678901');

    expect(input.value).toBe('123.456.789-01');
  });

  it('applies date mask to input value', async () => {
    const user = userEvent.setup();
    renderWithChakra(<TextMask mask="99/99/9999" placeholder="Date" />);

    const input = screen.getByPlaceholderText('Date') as HTMLInputElement;
    await user.type(input, '25122023');

    expect(input.value).toBe('25/12/2023');
  });

  it('applies CEP mask to input value', async () => {
    const user = userEvent.setup();
    renderWithChakra(<TextMask mask="99999-999" placeholder="CEP" />);

    const input = screen.getByPlaceholderText('CEP') as HTMLInputElement;
    await user.type(input, '01310100');

    expect(input.value).toBe('01310-100');
  });

  it('applies credit card mask to input value', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <TextMask mask="9999 9999 9999 9999" placeholder="Credit Card" />
    );

    const input = screen.getByPlaceholderText(
      'Credit Card'
    ) as HTMLInputElement;
    await user.type(input, '1234567890123456');

    expect(input.value).toBe('1234 5678 9012 3456');
  });

  it('renders with different sizes', () => {
    const { rerender } = renderWithChakra(
      <TextMask mask="99/99/9999" size="sm" placeholder="Small" />
    );
    expect(screen.getByPlaceholderText('Small')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <TextMask mask="99/99/9999" size="md" placeholder="Medium" />
      </ChakraWrapper>
    );
    expect(screen.getByPlaceholderText('Medium')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <TextMask mask="99/99/9999" size="lg" placeholder="Large" />
      </ChakraWrapper>
    );
    expect(screen.getByPlaceholderText('Large')).toBeInTheDocument();
  });

  it('can be disabled', () => {
    renderWithChakra(
      <TextMask mask="(99) 99999-9999" disabled placeholder="Disabled" />
    );

    const input = screen.getByPlaceholderText('Disabled') as HTMLInputElement;
    expect(input).toBeDisabled();
  });

  it('renders with custom variant', () => {
    renderWithChakra(
      <TextMask
        mask="(99) 99999-9999"
        variant="outline"
        placeholder="Outline"
      />
    );

    const input = screen.getByPlaceholderText('Outline');
    expect(input).toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderWithChakra(
      <TextMask
        mask="99/99/9999"
        className="custom-class"
        placeholder="Custom"
      />
    );

    const input = screen.getByPlaceholderText('Custom');
    expect(input).toHaveClass('custom-class');
  });
});
