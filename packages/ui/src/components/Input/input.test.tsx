import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Input from './input';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Input', () => {
  it('renders input correctly', () => {
    renderWithChakra(<Input placeholder="Enter text" />);
    
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    renderWithChakra(<Input placeholder="Enter text" />);
    
    const input = screen.getByPlaceholderText('Enter text');
    await user.type(input, 'Hello World');
    
    expect(input).toHaveValue('Hello World');
  });

  it('can be disabled', () => {
    renderWithChakra(<Input disabled placeholder="Enter text" />);
    
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeDisabled();
  });

  it('renders with different types', () => {
    const { rerender } = renderWithChakra(<Input type="email" placeholder="Email" />);
    
    let input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('type', 'email');

    rerender(
      <ChakraWrapper>
        <Input type="password" placeholder="Password" />
      </ChakraWrapper>
    );
    
    input = screen.getByPlaceholderText('Password');
    expect(input).toHaveAttribute('type', 'password');
  });

  it('handles onChange callback', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    
    renderWithChakra(<Input onChange={handleChange} placeholder="Enter text" />);
    
    const input = screen.getByPlaceholderText('Enter text');
    await user.type(input, 'test');
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with custom size', () => {
    renderWithChakra(<Input size="lg" placeholder="Large input" />);
    
    const input = screen.getByPlaceholderText('Large input');
    expect(input).toBeInTheDocument();
  });

  it('renders with custom variant', () => {
    renderWithChakra(<Input variant="outline" placeholder="Outline variant" />);
    
    const input = screen.getByPlaceholderText('Outline variant');
    expect(input).toBeInTheDocument();
  });

  it('handles readOnly prop', () => {
    renderWithChakra(<Input readOnly value="Read only" />);
    
    const input = screen.getByDisplayValue('Read only');
    expect(input).toHaveAttribute('readonly');
  });
});
