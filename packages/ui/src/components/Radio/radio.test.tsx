import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Radio, { RadioGroup } from './radio';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('RadioGroup and Radio', () => {
  it('renders radio group with radios', () => {
    renderWithChakra(
      <RadioGroup>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
    );

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('selects radio on click', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <RadioGroup>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: 'Option 1' });
    const radio2 = screen.getByRole('radio', { name: 'Option 2' });

    expect(radio1).not.toBeChecked();
    expect(radio2).not.toBeChecked();

    await user.click(radio1);
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();

    await user.click(radio2);
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  it('respects defaultValue', () => {
    renderWithChakra(
      <RadioGroup defaultValue="2">
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: 'Option 1' });
    const radio2 = screen.getByRole('radio', { name: 'Option 2' });

    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();
  });

  it('can be disabled', () => {
    renderWithChakra(
      <RadioGroup disabled>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: 'Option 1' });
    const radio2 = screen.getByRole('radio', { name: 'Option 2' });

    expect(radio1).toBeDisabled();
    expect(radio2).toBeDisabled();
  });

  it('individual radio can be disabled', () => {
    renderWithChakra(
      <RadioGroup>
        <Radio value="1" disabled>
          Option 1
        </Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: 'Option 1' });
    const radio2 = screen.getByRole('radio', { name: 'Option 2' });

    expect(radio1).toBeDisabled();
    expect(radio2).not.toBeDisabled();
  });

  it('calls onValueChange when selection changes', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    renderWithChakra(
      <RadioGroup onValueChange={handleChange}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
    );

    const radio1 = screen.getByRole('radio', { name: 'Option 1' });
    await user.click(radio1);

    expect(handleChange).toHaveBeenCalled();
  });

  it('supports different orientations', () => {
    const { rerender } = renderWithChakra(
      <RadioGroup orientation="horizontal">
        <Radio value="1">Horizontal 1</Radio>
        <Radio value="2">Horizontal 2</Radio>
      </RadioGroup>
    );

    expect(screen.getByText('Horizontal 1')).toBeInTheDocument();
    expect(screen.getByText('Horizontal 2')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <RadioGroup orientation="vertical">
          <Radio value="1">Vertical 1</Radio>
          <Radio value="2">Vertical 2</Radio>
        </RadioGroup>
      </ChakraWrapper>
    );

    expect(screen.getByText('Vertical 1')).toBeInTheDocument();
    expect(screen.getByText('Vertical 2')).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { rerender } = renderWithChakra(
      <RadioGroup size="sm">
        <Radio value="1">Small</Radio>
      </RadioGroup>
    );

    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <RadioGroup size="md">
          <Radio value="1">Medium</Radio>
        </RadioGroup>
      </ChakraWrapper>
    );

    expect(screen.getByText('Medium')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <RadioGroup size="lg">
          <Radio value="1">Large</Radio>
        </RadioGroup>
      </ChakraWrapper>
    );

    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('renders without label', () => {
    renderWithChakra(
      <RadioGroup>
        <Radio value="1" aria-label="No label radio" />
      </RadioGroup>
    );

    const radio = screen.getByRole('radio', { name: 'No label radio' });
    expect(radio).toBeInTheDocument();
  });
});
