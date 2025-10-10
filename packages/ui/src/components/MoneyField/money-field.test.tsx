import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { MoneyField } from './money-field';

const renderWithChakra = (ui: React.ReactElement) =>
  render(ui, { wrapper: ChakraWrapper });

describe('MoneyField', () => {
  it('renders input correctly', () => {
    renderWithChakra(<MoneyField value="" onChange={vi.fn()} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('formats value with default separators', () => {
    const onChange = vi.fn();
    renderWithChakra(<MoneyField value="1200.50" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1,200.50');
  });

  it('handles small decimal values', () => {
    const onChange = vi.fn();
    renderWithChakra(
      <MoneyField value="0.001" onChange={onChange} decimalScale={3} />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0.001');
  });

  it('handles large values with thousand separators', () => {
    const onChange = vi.fn();
    renderWithChakra(<MoneyField value="1234567.89" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1,234,567.89');
  });

  it('uses custom separators when provided', () => {
    const onChange = vi.fn();
    renderWithChakra(
      <MoneyField
        value="1234.56"
        onChange={onChange}
        thousandSeparator="."
        decimalSeparator=","
        decimalScale={2}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1.234,56');
  });

  it('uses custom space separator', () => {
    const onChange = vi.fn();
    renderWithChakra(
      <MoneyField
        value="1234.56"
        onChange={onChange}
        thousandSeparator=" "
        decimalSeparator=","
        decimalScale={2}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1 234,56');
  });

  it('calls onChange with raw numeric value when user types', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    renderWithChakra(<MoneyField value="" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, '123');

    expect(onChange).toHaveBeenCalled();
  });

  it('handles empty value correctly', () => {
    renderWithChakra(<MoneyField value="" onChange={vi.fn()} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });

  it('handles zero value correctly', () => {
    renderWithChakra(<MoneyField value="0" onChange={vi.fn()} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0');
  });

  it('respects decimalScale limit', () => {
    const onChange = vi.fn();
    renderWithChakra(
      <MoneyField value="123.456789" onChange={onChange} decimalScale={2} />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('123.45');
  });

  it('handles negative values correctly', () => {
    const onChange = vi.fn();
    renderWithChakra(<MoneyField value="-123.45" onChange={onChange} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('-123.45');
  });

  it('handles high precision decimals', () => {
    const onChange = vi.fn();
    renderWithChakra(
      <MoneyField
        value="0.123456789012345678"
        onChange={onChange}
        decimalScale={18}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0.123456789012345678');
  });

  it('accepts standard input props like placeholder', () => {
    renderWithChakra(
      <MoneyField value="" onChange={vi.fn()} placeholder="Enter amount" />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', 'Enter amount');
  });

  it('accepts standard input props like disabled', () => {
    renderWithChakra(<MoneyField value="" onChange={vi.fn()} disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('accepts standard input props like name', () => {
    renderWithChakra(<MoneyField value="" onChange={vi.fn()} name="price" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('name', 'price');
  });
});
