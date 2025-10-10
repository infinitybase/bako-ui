import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { type FieldValues, useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { RhfMoneyField } from './rhf-money-field';
import type { RhfMoneyFieldProps } from './rhf-money-field.types';

const renderWithChakra = (ui: React.ReactElement) =>
  render(ui, { wrapper: ChakraWrapper });

type FormValues = {
  amount: string;
  price: string;
};

const TestWrapper = ({
  children,
  defaultValues = {},
  onSubmit = vi.fn(),
}: {
  children: React.ReactNode;
  defaultValues?: Partial<FormValues>;
  onSubmit?: (data: FormValues) => void;
}) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: defaultValues as FormValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { control } as Partial<
            typeof child.props
          >);
        }
        return child;
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

type TestRhfMoneyFieldProps = Partial<RhfMoneyFieldProps<FieldValues, string>>;
type TestFormProps = {
  defaultValues?: Partial<FormValues>;
  onSubmit?: (data: FormValues) => void;
};

const renderRhfMoneyField = (
  props: TestRhfMoneyFieldProps = {},
  formProps: TestFormProps = {}
) => {
  const defaultProps: Required<Pick<TestRhfMoneyFieldProps, 'name' | 'label'>> &
    TestRhfMoneyFieldProps = {
    name: 'amount',
    label: 'Amount',
    ...props,
  };

  return renderWithChakra(
    <TestWrapper {...formProps}>
      <RhfMoneyField {...defaultProps} />
    </TestWrapper>
  );
};

describe('RhfMoneyField', () => {
  it('renders label correctly', () => {
    renderRhfMoneyField({ label: 'Price' });
    expect(screen.getByText('Price')).toBeInTheDocument();
  });

  it('formats value with default separators', () => {
    renderRhfMoneyField({}, { defaultValues: { amount: '1200.50' } });

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1,200.50');
  });

  it('handles high precision decimals', () => {
    renderRhfMoneyField(
      { decimalScale: 18 },
      { defaultValues: { amount: '0.123456789012345678' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0.123456789012345678');
  });

  it('handles small decimal values', () => {
    renderRhfMoneyField(
      { decimalScale: 3 },
      { defaultValues: { amount: '0.001' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0.001');
  });

  it('submits form with raw numeric value', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    renderRhfMoneyField({}, { onSubmit });

    const input = screen.getByRole('textbox');
    await user.type(input, '123.45');

    const submitButton = screen.getByText('Submit');
    await user.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    });
  });

  it('displays error message when provided', () => {
    renderRhfMoneyField({
      error: { message: 'Required field', type: 'required' },
    });

    expect(screen.getByText('Required field')).toBeInTheDocument();
  });

  it('displays helper text when provided', () => {
    renderRhfMoneyField({ helperText: 'Enter amount in USD' });
    expect(screen.getByText('Enter amount in USD')).toBeInTheDocument();
  });

  it('integrates with react-hook-form default values', () => {
    renderRhfMoneyField(
      { name: 'price' },
      { defaultValues: { price: '500.00' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('500.00');
  });

  it('disables input when disabled prop is true', () => {
    renderRhfMoneyField({ disabled: true });

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('uses custom separators when provided', () => {
    renderRhfMoneyField(
      {
        thousandSeparator: ' ',
        decimalSeparator: ',',
        decimalScale: 2,
      },
      { defaultValues: { amount: '1234.56' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('1 234,56');
  });

  it('handles zero value correctly', () => {
    renderRhfMoneyField({}, { defaultValues: { amount: '0' } });

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('0');
  });

  it('handles empty value correctly', () => {
    renderRhfMoneyField({});

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });

  it('respects decimalScale limit', () => {
    renderRhfMoneyField(
      { decimalScale: 2 },
      { defaultValues: { amount: '123.456789' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('123.45');
  });

  it('handles negative values correctly', () => {
    renderRhfMoneyField({}, { defaultValues: { amount: '-123.45' } });

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('-123.45');
  });

  it('handles large values with thousand separators', () => {
    renderRhfMoneyField(
      { thousandSeparator: '.', decimalSeparator: ',' },
      { defaultValues: { amount: '9876543.21' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('9.876.543,21');
  });
});
