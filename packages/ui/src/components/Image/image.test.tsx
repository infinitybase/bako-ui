import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Image from './image';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Image', () => {
  it('renders image with src', () => {
    renderWithChakra(
      <Image src="https://via.placeholder.com/150" alt="Placeholder" />
    );
    const img = screen.getByRole('img', { name: 'Placeholder' });
    expect(img).toBeInTheDocument();
  });

  it('applies alt text correctly', () => {
    renderWithChakra(
      <Image src="https://via.placeholder.com/150" alt="Test Image" />
    );
    const img = screen.getByAltText('Test Image');
    expect(img).toBeInTheDocument();
  });

  it('applies custom dimensions', () => {
    renderWithChakra(
      <Image
        data-testid="sized-image"
        src="https://via.placeholder.com/150"
        alt="Sized"
        width="200px"
        height="200px"
      />
    );
    expect(screen.getByTestId('sized-image')).toBeInTheDocument();
  });

  it('applies borderRadius', () => {
    renderWithChakra(
      <Image
        data-testid="rounded-image"
        src="https://via.placeholder.com/150"
        alt="Rounded"
        borderRadius="full"
      />
    );
    expect(screen.getByTestId('rounded-image')).toBeInTheDocument();
  });

  it('supports object fit', () => {
    renderWithChakra(
      <Image
        data-testid="cover-image"
        src="https://via.placeholder.com/150"
        alt="Cover"
        objectFit="cover"
      />
    );
    expect(screen.getByTestId('cover-image')).toBeInTheDocument();
  });
});
