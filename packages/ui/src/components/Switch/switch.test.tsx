import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Switch from './switch';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Switch', () => {
  it('renders switch with label', () => {
    renderWithChakra(<Switch>Enable notifications</Switch>);
    
    expect(screen.getByText('Enable notifications')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('can be toggled on and off', async () => {
    const user = userEvent.setup();
    renderWithChakra(<Switch>Toggle me</Switch>);
    
    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).not.toBeChecked();
    
    await user.click(switchInput);
    expect(switchInput).toBeChecked();
    
    await user.click(switchInput);
    expect(switchInput).not.toBeChecked();
  });

  it('respects checked prop', () => {
    renderWithChakra(<Switch checked>Already enabled</Switch>);
    
    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeChecked();
  });

  it('can be disabled', () => {
    renderWithChakra(<Switch disabled>Disabled switch</Switch>);
    
    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeDisabled();
  });

  it('calls onCheckedChange when toggled', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    renderWithChakra(
      <Switch onCheckedChange={handleChange}>Switch</Switch>
    );
    
    const switchInput = screen.getByRole('checkbox');
    await user.click(switchInput);
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders without label', () => {
    renderWithChakra(<Switch aria-label="No label switch" />);
    
    const switchInput = screen.getByRole('checkbox', { name: 'No label switch' });
    expect(switchInput).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { rerender } = renderWithChakra(<Switch size="sm">Small</Switch>);
    expect(screen.getByText('Small')).toBeInTheDocument();
    
    rerender(
      <ChakraWrapper>
        <Switch size="md">Medium</Switch>
      </ChakraWrapper>
    );
    expect(screen.getByText('Medium')).toBeInTheDocument();
    
    rerender(
      <ChakraWrapper>
        <Switch size="lg">Large</Switch>
      </ChakraWrapper>
    );
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('supports read-only state', () => {
    renderWithChakra(<Switch readOnly checked>Read-only switch</Switch>);
    
    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeInTheDocument();
    expect(switchInput).toBeChecked();
  });

  it('supports required state', () => {
    renderWithChakra(<Switch required>Required switch</Switch>);
    
    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeRequired();
  });

  it('supports invalid state', () => {
    renderWithChakra(<Switch invalid>Invalid switch</Switch>);
    
    const switchInput = screen.getByRole('checkbox');
    expect(switchInput).toBeInTheDocument();
  });
});
