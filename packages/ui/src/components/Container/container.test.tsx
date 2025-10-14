import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Container from './container';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Container', () => {
  it('renders children correctly', () => {
    renderWithChakra(
      <Container>
        <p>Container content</p>
      </Container>
    );

    expect(screen.getByText(/container content/i)).toBeInTheDocument();
  });

  it('renders with fluid prop', () => {
    renderWithChakra(
      <Container fluid data-testid="fluid-container">
        <p>Fluid container</p>
      </Container>
    );

    const container = screen.getByTestId('fluid-container');
    expect(container).toBeInTheDocument();
  });

  it('renders with centerContent prop', () => {
    renderWithChakra(
      <Container centerContent data-testid="centered-container">
        <p>Centered content</p>
      </Container>
    );

    const container = screen.getByTestId('centered-container');
    expect(container).toBeInTheDocument();
  });

  it('renders with custom maxW', () => {
    renderWithChakra(
      <Container maxW="2xl" data-testid="custom-container">
        <p>Custom width</p>
      </Container>
    );

    const container = screen.getByTestId('custom-container');
    expect(container).toBeInTheDocument();
  });

  it('renders with custom padding', () => {
    renderWithChakra(
      <Container p={8} data-testid="padded-container">
        <p>Padded content</p>
      </Container>
    );

    const container = screen.getByTestId('padded-container');
    expect(container).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    renderWithChakra(
      <Container className="custom-container">
        <p>Custom class</p>
      </Container>
    );

    const container = screen.getByText(/custom class/i).parentElement;
    expect(container).toHaveClass('custom-container');
  });

  it('renders as a different element with asChild', () => {
    renderWithChakra(
      <Container asChild>
        <section data-testid="section-container">
          <p>Section content</p>
        </section>
      </Container>
    );

    const section = screen.getByTestId('section-container');
    expect(section.tagName).toBe('SECTION');
  });

  it('supports different color palettes', () => {
    renderWithChakra(
      <Container colorPalette="blue" data-testid="colored-container">
        <p>Colored container</p>
      </Container>
    );

    const container = screen.getByTestId('colored-container');
    expect(container).toBeInTheDocument();
  });

  it('renders with multiple children', () => {
    renderWithChakra(
      <Container>
        <h1>Title</h1>
        <p>First paragraph</p>
        <p>Second paragraph</p>
      </Container>
    );

    expect(screen.getByRole('heading', { name: /title/i })).toBeInTheDocument();
    expect(screen.getByText(/first paragraph/i)).toBeInTheDocument();
    expect(screen.getByText(/second paragraph/i)).toBeInTheDocument();
  });

  it('renders with responsive maxW', () => {
    renderWithChakra(
      <Container maxW={{ base: 'sm', md: 'md', lg: 'lg' }} data-testid="responsive-container">
        <p>Responsive width</p>
      </Container>
    );

    const container = screen.getByTestId('responsive-container');
    expect(container).toBeInTheDocument();
  });
});
