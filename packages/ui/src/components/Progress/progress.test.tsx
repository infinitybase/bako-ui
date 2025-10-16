import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Progress } from './progress';

const renderWithChakra = (ui: React.ReactElement) =>
  render(ui, { wrapper: ChakraWrapper });

describe('Progress', () => {
  it('renders with default value', () => {
    renderWithChakra(<Progress defaultValue={50} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
    expect(progress).toHaveAttribute('aria-valuenow', '50');
  });

  it('renders with label', () => {
    renderWithChakra(<Progress label="Loading" defaultValue={50} />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('renders with value text', () => {
    renderWithChakra(
      <Progress showValueText valueText="50%" defaultValue={50} />
    );
    expect(screen.getByText('50%')).toBeInTheDocument();
  });

  it('renders with min and max values', () => {
    renderWithChakra(<Progress min={0} max={100} value={75} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toHaveAttribute('aria-valuemin', '0');
    expect(progress).toHaveAttribute('aria-valuemax', '100');
    expect(progress).toHaveAttribute('aria-valuenow', '75');
  });

  it('renders indeterminate progress', () => {
    renderWithChakra(<Progress value={null} />);
    const progress = screen.getByRole('progressbar');
    expect(progress).toBeInTheDocument();
    expect(progress).not.toHaveAttribute('aria-valuenow');
  });

  it('applies custom props to track', () => {
    const { container } = renderWithChakra(
      <Progress defaultValue={50} trackProps={{ className: 'custom-track' }} />
    );
    expect(container.querySelector('.custom-track')).toBeInTheDocument();
  });

  it('applies custom props to range', () => {
    const { container } = renderWithChakra(
      <Progress defaultValue={50} rangeProps={{ className: 'custom-range' }} />
    );
    expect(container.querySelector('.custom-range')).toBeInTheDocument();
  });

  it('applies custom props to label', () => {
    renderWithChakra(
      <Progress
        label="Loading"
        defaultValue={50}
        labelProps={{ className: 'custom-label' }}
      />
    );
    expect(screen.getByText('Loading')).toHaveClass('custom-label');
  });

  it('applies custom props to value text', () => {
    renderWithChakra(
      <Progress
        showValueText
        valueText="50%"
        defaultValue={50}
        valueTextProps={{ className: 'custom-value-text' }}
      />
    );
    expect(screen.getByText('50%')).toHaveClass('custom-value-text');
  });

  it('renders with different sizes', () => {
    const { rerender } = renderWithChakra(
      <Progress defaultValue={50} size="xs" />
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Progress defaultValue={50} size="sm" />
      </ChakraWrapper>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Progress defaultValue={50} size="md" />
      </ChakraWrapper>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Progress defaultValue={50} size="lg" />
      </ChakraWrapper>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders with striped variant', () => {
    renderWithChakra(<Progress defaultValue={50} striped />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders with animated stripes', () => {
    renderWithChakra(<Progress defaultValue={50} striped animated />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders with different color palettes', () => {
    const { rerender } = renderWithChakra(
      <Progress defaultValue={50} colorPalette="blue" />
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Progress defaultValue={50} colorPalette="green" />
      </ChakraWrapper>
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
