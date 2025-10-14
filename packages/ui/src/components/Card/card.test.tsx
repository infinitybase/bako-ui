import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Card from './card';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Card', () => {
  it('renders card with composition pattern', () => {
    renderWithChakra(
      <Card.Root>
        <Card.Body>Card Content</Card.Body>
      </Card.Root>
    );
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders card with header, body and footer', () => {
    renderWithChakra(
      <Card.Root>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
          <Card.Description>Card Description</Card.Description>
        </Card.Header>
        <Card.Body>Card Body Content</Card.Body>
        <Card.Footer>Card Footer</Card.Footer>
      </Card.Root>
    );

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Card Description')).toBeInTheDocument();
    expect(screen.getByText('Card Body Content')).toBeInTheDocument();
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('renders with elevated variant', () => {
    renderWithChakra(
      <Card.Root variant="elevated" data-testid="elevated-card">
        <Card.Body>Elevated Card</Card.Body>
      </Card.Root>
    );
    expect(screen.getByTestId('elevated-card')).toBeInTheDocument();
  });

  it('renders with outline variant', () => {
    renderWithChakra(
      <Card.Root variant="outline" data-testid="outline-card">
        <Card.Body>Outline Card</Card.Body>
      </Card.Root>
    );
    expect(screen.getByTestId('outline-card')).toBeInTheDocument();
  });

  it('renders with subtle variant', () => {
    renderWithChakra(
      <Card.Root variant="subtle" data-testid="subtle-card">
        <Card.Body>Subtle Card</Card.Body>
      </Card.Root>
    );
    expect(screen.getByTestId('subtle-card')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const sizes = ['sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = renderWithChakra(
        <Card.Root size={size} data-testid={`${size}-card`}>
          <Card.Body>{size} Card</Card.Body>
        </Card.Root>
      );

      expect(screen.getByTestId(`${size}-card`)).toBeInTheDocument();
      unmount();
    });
  });

  it('accepts custom styles', () => {
    renderWithChakra(
      <Card.Root maxWidth="400px" data-testid="custom-card">
        <Card.Body>Custom Card</Card.Body>
      </Card.Root>
    );
    expect(screen.getByTestId('custom-card')).toBeInTheDocument();
  });

  it('supports as prop for polymorphism', () => {
    renderWithChakra(
      <Card.Root as="article" data-testid="article-card">
        <Card.Body>Article Card</Card.Body>
      </Card.Root>
    );
    const card = screen.getByTestId('article-card');
    expect(card.tagName).toBe('ARTICLE');
  });
});
