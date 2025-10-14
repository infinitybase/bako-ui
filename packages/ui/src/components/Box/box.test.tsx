import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Box from './box';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Box', () => {
  it('renders children correctly', () => {
    renderWithChakra(<Box>Test Content</Box>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom styles via props', () => {
    renderWithChakra(
      <Box data-testid="styled-box" bg="red.100" p="4" borderRadius="md">
        Styled Box
      </Box>
    );
    const box = screen.getByTestId('styled-box');
    expect(box).toBeInTheDocument();
  });

  it('supports as prop for polymorphism', () => {
    renderWithChakra(
      <Box as="section" data-testid="section-box">
        Section Box
      </Box>
    );
    const box = screen.getByTestId('section-box');
    expect(box.tagName).toBe('SECTION');
  });

  it('applies responsive styles', () => {
    renderWithChakra(
      <Box
        data-testid="responsive-box"
        width={{ base: '100%', md: '50%', lg: '25%' }}
      >
        Responsive
      </Box>
    );
    expect(screen.getByTestId('responsive-box')).toBeInTheDocument();
  });

  it('handles event handlers', () => {
    let clicked = false;

    const handleClick = () => {
      clicked = true;
    };

    renderWithChakra(
      <Box data-testid="clickable-box" onClick={handleClick}>
        Click me
      </Box>
    );
    const box = screen.getByTestId('clickable-box');
    box.click();
    expect(clicked).toBe(true);
  });

  it('supports className prop', () => {
    renderWithChakra(
      <Box data-testid="class-box" className="custom-class">
        Custom Class
      </Box>
    );
    const box = screen.getByTestId('class-box');
    expect(box).toHaveClass('custom-class');
  });
});
