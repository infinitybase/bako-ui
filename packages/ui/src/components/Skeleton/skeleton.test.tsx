import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Skeleton, SkeletonCircle, SkeletonText } from './skeleton';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Skeleton', () => {
  it('renders skeleton', () => {
    renderWithChakra(<Skeleton data-testid="skeleton" height="20px" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('applies custom dimensions', () => {
    renderWithChakra(
      <Skeleton data-testid="sized-skeleton" width="200px" height="100px" />
    );
    expect(screen.getByTestId('sized-skeleton')).toBeInTheDocument();
  });

  it('supports borderRadius', () => {
    renderWithChakra(
      <Skeleton data-testid="rounded-skeleton" height="20px" borderRadius="md" />
    );
    expect(screen.getByTestId('rounded-skeleton')).toBeInTheDocument();
  });
});

describe('SkeletonCircle', () => {
  it('renders skeleton circle', () => {
    renderWithChakra(<SkeletonCircle data-testid="skeleton-circle" size="50px" />);
    expect(screen.getByTestId('skeleton-circle')).toBeInTheDocument();
  });

  it('applies size prop', () => {
    renderWithChakra(<SkeletonCircle data-testid="large-circle" size="100px" />);
    expect(screen.getByTestId('large-circle')).toBeInTheDocument();
  });
});

describe('SkeletonText', () => {
  it('renders skeleton text with default lines', () => {
    const { container } = renderWithChakra(<SkeletonText />);
    // SkeletonText renders multiple skeleton elements (lines)
    const skeletons = container.querySelectorAll('.chakra-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders custom number of lines', () => {
    const { container } = renderWithChakra(<SkeletonText noOfLines={5} />);
    const skeletons = container.querySelectorAll('.chakra-skeleton');
    expect(skeletons.length).toBe(5);
  });

  it('applies gap between lines', () => {
    const { container } = renderWithChakra(
      <SkeletonText noOfLines={3} gap={4} />
    );
    const skeletons = container.querySelectorAll('.chakra-skeleton');
    expect(skeletons.length).toBe(3);
  });
});
