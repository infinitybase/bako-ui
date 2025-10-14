import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Checkbox from './checkbox';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Checkbox', () => {
  it('renders checkbox with label', () => {
    renderWithChakra(<Checkbox>Accept terms</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup();
    renderWithChakra(<Checkbox>Accept terms</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('can be disabled', () => {
    renderWithChakra(<Checkbox disabled>Disabled checkbox</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('handles onCheckedChange callback', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    renderWithChakra(
      <Checkbox onCheckedChange={handleChange}>Checkbox</Checkbox>
    );

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with defaultChecked', () => {
    renderWithChakra(<Checkbox defaultChecked>Pre-checked</Checkbox>);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('can be indeterminate', () => {
    renderWithChakra(
      <Checkbox defaultChecked="indeterminate">Indeterminate</Checkbox>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('renders without label', () => {
    renderWithChakra(<Checkbox aria-label="No label checkbox" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('handles different sizes', () => {
    const { rerender } = renderWithChakra(<Checkbox size="sm">Small</Checkbox>);

    let checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Checkbox size="lg">Large</Checkbox>
      </ChakraWrapper>
    );

    checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
});
