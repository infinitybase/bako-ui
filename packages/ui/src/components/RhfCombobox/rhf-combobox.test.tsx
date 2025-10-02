import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { RhfCombobox } from './rhf-combobox';
import type { RhfComboboxProps } from './rhf-combobox.types';

type FormValues = {
  single: string;
  multi: string[];
};

type FormOverrides = {
  defaultValues?: Partial<FormValues>;
  onSubmit?: (data: FormValues, event: unknown) => void;
};

type SingleComboboxProps = Partial<
  Omit<RhfComboboxProps<FormValues, 'single'>, 'control' | 'name'>
>;

type MultiComboboxProps = Partial<
  Omit<RhfComboboxProps<FormValues, 'multi'>, 'control' | 'name'>
>;

const baseOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

const renderWithChakra = (ui: ReactElement) =>
  render(ui, { wrapper: ChakraWrapper });

const renderSingleCombobox = (
  props: SingleComboboxProps = {},
  formOverrides: FormOverrides = {}
) => {
  const {
    label = 'Fruit',
    defaultValue = '',
    options = baseOptions,
    helperText,
    ...restProps
  } = props;

  const defaultValues: FormValues = {
    single: defaultValue,
    multi: [],
    ...formOverrides.defaultValues,
  } as FormValues;

  const user = userEvent.setup();

  const Wrapper = () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues,
    });

    const onSubmit = formOverrides.onSubmit ?? vi.fn();

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RhfCombobox<FormValues, 'single'>
          control={control}
          name="single"
          label={label}
          defaultValue={defaultValue}
          options={options}
          helperText={helperText}
          {...restProps}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return {
    user,
    ...renderWithChakra(<Wrapper />),
  };
};

const renderMultiCombobox = (
  props: MultiComboboxProps = {},
  formOverrides: FormOverrides = {}
) => {
  const {
    label = 'Fruits',
    defaultValue = ['apple', 'banana'],
    options = baseOptions,
    helperText,
    ...restProps
  } = props;

  const defaultValues: FormValues = {
    single: '',
    multi: defaultValue,
    ...formOverrides.defaultValues,
  } as FormValues;

  const user = userEvent.setup();

  const Wrapper = () => {
    const { control, handleSubmit } = useForm<FormValues>({
      defaultValues,
    });

    const onSubmit = formOverrides.onSubmit ?? vi.fn();

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <RhfCombobox<FormValues, 'multi'>
          control={control}
          name="multi"
          label={label}
          defaultValue={defaultValue}
          options={options}
          helperText={helperText}
          multiple
          {...restProps}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

  return {
    user,
    ...renderWithChakra(<Wrapper />),
  };
};

describe('RhfCombobox', () => {
  it('renders label and helper text and opens options', async () => {
    const { user } = renderSingleCombobox({ helperText: 'Pick a fruit' });

    expect(screen.getByText('Fruit')).toBeInTheDocument();
    expect(screen.getByText('Pick a fruit')).toBeInTheDocument();

    await user.click(screen.getByRole('combobox'));

    await waitFor(() => {
      expect(screen.getByText('Apple')).toBeInTheDocument();
      expect(screen.getByText('Banana')).toBeInTheDocument();
      expect(screen.getByText('Cherry')).toBeInTheDocument();
    });
  });

  it('selects an option and submits form value', async () => {
    const onSubmit = vi.fn();
    const { user } = renderSingleCombobox({}, { onSubmit });

    await user.click(screen.getByRole('combobox'));
    await user.click(await screen.findByText('Banana'));
    await user.click(screen.getByText('Submit'));

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ single: ['banana'] }),
        expect.anything()
      );
    });
  });

  it('displays error and helper messages', async () => {
    renderSingleCombobox({
      helperText: 'Helper message',
      error: { type: 'required', message: 'Required field' },
    });

    expect(screen.getByText('Helper message')).toBeInTheDocument();
    expect(await screen.findByText('Required field')).toBeInTheDocument();
  });

  it('shows loading state when fetching options', async () => {
    const { user } = renderSingleCombobox({ isLoadingOptions: true });

    await user.click(screen.getByRole('combobox'));

    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  });

  it('renders badges for multiple selections', () => {
    renderMultiCombobox({ defaultValue: ['apple', 'banana'] });

    expect(screen.getByText('apple')).toBeInTheDocument();
    expect(screen.getByText('banana')).toBeInTheDocument();
  });

  it('renders option images when imageUrl is provided', async () => {
    const { user } = renderSingleCombobox({
      options: [
        { label: 'Mango', value: 'mango', imageUrl: 'mango.png' },
        ...baseOptions,
      ],
    });

    await user.click(screen.getByRole('combobox'));

    expect(await screen.findByAltText('Mango image')).toBeInTheDocument();
  });

  it('shows no options text when no items match', async () => {
    const { user } = renderSingleCombobox({ noOptionsText: 'Nothing found' });

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.type(input, 'zzz');

    await waitFor(() => {
      expect(screen.getByText('Nothing found')).toBeInTheDocument();
    });
  });
});
