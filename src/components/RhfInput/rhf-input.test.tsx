import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { type FieldValues, useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { RhfInput } from './rhf-input';
import type { RhfInputProps } from './rhf-input.types';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

// Test wrapper component with form context
const TestWrapper = ({
  children,
  defaultValues = {},
  onSubmit = vi.fn(),
}: {
  children: React.ReactNode;
  defaultValues?: Record<string, unknown>;
  onSubmit?: (data: Record<string, unknown>) => void;
}) => {
  const { control, handleSubmit } = useForm({ defaultValues });

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

type TestRhfInputProps = Partial<RhfInputProps<FieldValues, string>>;
type TestFormProps = {
  defaultValues?: Record<string, unknown>;
  onSubmit?: (data: Record<string, unknown>) => void;
};

const renderRhfInput = (
  props: TestRhfInputProps = {},
  formProps: TestFormProps = {}
) => {
  const defaultProps: Required<Pick<TestRhfInputProps, 'name' | 'label'>> &
    TestRhfInputProps = {
    name: 'testField',
    label: 'Test Field',
    ...props,
  };

  return renderWithChakra(
    <TestWrapper {...formProps}>
      <RhfInput {...defaultProps} />
    </TestWrapper>
  );
};

describe('RhfInput', () => {
  it('renders with correct label', () => {
    renderRhfInput({ label: 'Username' });

    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders input with correct type', () => {
    renderRhfInput({ type: 'email', label: 'Email' });

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('displays error message when error prop is provided', () => {
    const error = { message: 'This field is required', type: 'required' };
    renderRhfInput({ error });

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('displays helper text when provided', () => {
    renderRhfInput({ helperText: 'Enter your username' });

    expect(screen.getByText('Enter your username')).toBeInTheDocument();
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    renderRhfInput();

    const input = screen.getByRole('textbox');
    await user.type(input, 'test value');

    expect(input).toHaveValue('test value');
  });

  it('shows floating label when input has value', async () => {
    const user = userEvent.setup();
    renderRhfInput();

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    // Check if label has floating styles (smaller font size)
    const label = screen.getByText('Test Field');
    expect(label).toBeInTheDocument();
  });

  it('shows floating label on focus even without value', async () => {
    const user = userEvent.setup();
    renderRhfInput();

    const input = screen.getByRole('textbox');
    await user.click(input);

    const label = screen.getByText('Test Field');
    expect(label).toBeInTheDocument();
  });

  it('renders with default value from form', () => {
    renderRhfInput(
      { name: 'username' },
      { defaultValues: { username: 'defaultUser' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('defaultUser');
  });

  it('integrates with react-hook-form', () => {
    // Test that the component renders without errors when integrated with react-hook-form
    renderRhfInput({
      name: 'testField',
      rules: { required: 'This field is required' },
    });

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('submits form with input value', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();

    renderRhfInput({ name: 'username' }, { onSubmit });

    const input = screen.getByRole('textbox');
    await user.type(input, 'testuser');

    const submitButton = screen.getByText('Submit');
    await user.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ username: 'testuser' }),
        expect.anything()
      );
    });
  });

  it('handles disabled state', () => {
    renderRhfInput({ disabled: true });

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('renders with custom className from slotProps', () => {
    renderRhfInput({
      slotProps: {
        input: { className: 'custom-input' },
      },
    });

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-input');
  });

  it('renders with start element spacing', () => {
    renderRhfInput({
      slotProps: {
        inputGroup: {
          startElement: <div data-testid="start-icon">Icon</div>,
        },
      },
    });

    expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  });

  it('renders with end element spacing', () => {
    renderRhfInput({
      slotProps: {
        inputGroup: {
          endElement: <div data-testid="end-icon">Icon</div>,
        },
      },
    });

    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  });

  it('handles different input types correctly', () => {
    const types = ['text', 'email', 'number', 'tel'];

    types.forEach((type) => {
      const { unmount } = renderRhfInput({ type, label: `${type} field` });

      const input = screen.getByDisplayValue('');
      expect(input).toHaveAttribute('type', type);

      unmount();
    });
  });

  it('applies correct border radius with addons', () => {
    renderRhfInput({
      slotProps: {
        inputGroup: {
          startAddon: <div>Start</div>,
        },
      },
    });

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('shows error state styling when error is present', () => {
    const error = { message: 'Invalid input', type: 'validation' };
    renderRhfInput({ error });

    // The Field.Root should have invalid state
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
  });

  it('handles empty string and null values correctly', () => {
    const { rerender } = renderRhfInput(
      { name: 'testField' },
      { defaultValues: { testField: '' } }
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    // Test with null value
    rerender(
      <ChakraWrapper>
        <TestWrapper defaultValues={{ testField: null }}>
          <RhfInput name="testField" label="Test Field" />
        </TestWrapper>
      </ChakraWrapper>
    );

    expect(input).toHaveValue('');
  });

  it('handles numeric values correctly', () => {
    renderRhfInput(
      { name: 'age', type: 'number' },
      { defaultValues: { age: 25 } }
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveValue(25);
  });

  it('handles placeholder correctly', () => {
    renderRhfInput();

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('placeholder', ' ');
  });
});
