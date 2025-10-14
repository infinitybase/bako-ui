import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Badge } from './badge';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Badge', () => {
  it('renders badge with text', () => {
    renderWithChakra(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('supports different variants', () => {
    const { rerender } = renderWithChakra(<Badge variant="solid">Solid</Badge>);
    expect(screen.getByText('Solid')).toBeInTheDocument();

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toBeInTheDocument();

    rerender(<Badge variant="subtle">Subtle</Badge>);
    expect(screen.getByText('Subtle')).toBeInTheDocument();

    rerender(<Badge variant="surface">Surface</Badge>);
    expect(screen.getByText('Surface')).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { rerender } = renderWithChakra(<Badge size="xs">Extra Small</Badge>);
    expect(screen.getByText('Extra Small')).toBeInTheDocument();

    rerender(<Badge size="sm">Small</Badge>);
    expect(screen.getByText('Small')).toBeInTheDocument();

    rerender(<Badge size="md">Medium</Badge>);
    expect(screen.getByText('Medium')).toBeInTheDocument();

    rerender(<Badge size="lg">Large</Badge>);
    expect(screen.getByText('Large')).toBeInTheDocument();
  });

  it('supports different color palettes', () => {
    const { rerender } = renderWithChakra(
      <Badge colorPalette="green">Success</Badge>
    );
    expect(screen.getByText('Success')).toBeInTheDocument();

    rerender(<Badge colorPalette="red">Error</Badge>);
    expect(screen.getByText('Error')).toBeInTheDocument();

    rerender(<Badge colorPalette="blue">Info</Badge>);
    expect(screen.getByText('Info')).toBeInTheDocument();

    rerender(<Badge colorPalette="purple">New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders badge with custom className', () => {
    renderWithChakra(<Badge className="custom-badge">Custom</Badge>);
    const badge = screen.getByText('Custom');
    expect(badge).toHaveClass('custom-badge');
  });

  it('supports asChild prop', () => {
    renderWithChakra(
      <Badge asChild>
        <span data-testid="custom-span">As Child</span>
      </Badge>
    );
    const element = screen.getByTestId('custom-span');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('SPAN');
  });
});
