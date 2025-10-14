import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import TextArea from './text-area';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('TextArea', () => {
  it('renders textarea correctly', () => {
    renderWithChakra(<TextArea placeholder="Enter text" />);

    const textarea = screen.getByPlaceholderText('Enter text');
    expect(textarea).toBeInTheDocument();
  });

  it('handles user input correctly', async () => {
    const user = userEvent.setup();
    renderWithChakra(<TextArea placeholder="Enter text" />);

    const textarea = screen.getByPlaceholderText('Enter text');
    await user.type(textarea, 'Hello World');

    expect(textarea).toHaveValue('Hello World');
  });

  it('can be disabled', () => {
    renderWithChakra(<TextArea disabled placeholder="Enter text" />);

    const textarea = screen.getByPlaceholderText('Enter text');
    expect(textarea).toBeDisabled();
  });

  it('handles onChange callback', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();

    renderWithChakra(
      <TextArea onChange={handleChange} placeholder="Enter text" />
    );

    const textarea = screen.getByPlaceholderText('Enter text');
    await user.type(textarea, 'test');

    expect(handleChange).toHaveBeenCalled();
  });

  it('renders with custom size', () => {
    renderWithChakra(<TextArea size="lg" placeholder="Large textarea" />);

    const textarea = screen.getByPlaceholderText('Large textarea');
    expect(textarea).toBeInTheDocument();
  });

  it('renders with custom variant', () => {
    renderWithChakra(
      <TextArea variant="outline" placeholder="Outline variant" />
    );

    const textarea = screen.getByPlaceholderText('Outline variant');
    expect(textarea).toBeInTheDocument();
  });

  it('handles readOnly prop', () => {
    renderWithChakra(<TextArea readOnly value="Read only" />);

    const textarea = screen.getByDisplayValue('Read only');
    expect(textarea).toHaveAttribute('readonly');
  });

  it('renders with custom rows', () => {
    renderWithChakra(<TextArea rows={5} placeholder="5 rows" />);

    const textarea = screen.getByPlaceholderText('5 rows');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('handles autoresize prop', () => {
    renderWithChakra(<TextArea autoresize placeholder="Auto resize" />);

    const textarea = screen.getByPlaceholderText('Auto resize');
    expect(textarea).toBeInTheDocument();
  });

  it('applies custom className', () => {
    renderWithChakra(
      <TextArea className="custom-class" placeholder="Custom class" />
    );

    const textarea = screen.getByPlaceholderText('Custom class');
    expect(textarea).toHaveClass('custom-class');
  });
});
