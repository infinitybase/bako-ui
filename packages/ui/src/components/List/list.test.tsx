import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { List } from './list';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('List', () => {
  it('renders unordered list', () => {
    renderWithChakra(
      <List.Root>
        <List.Item>Item 1</List.Item>
        <List.Item>Item 2</List.Item>
        <List.Item>Item 3</List.Item>
      </List.Root>
    );
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });

  it('renders ordered list', () => {
    renderWithChakra(
      <List.Root as="ol">
        <List.Item>First</List.Item>
        <List.Item>Second</List.Item>
        <List.Item>Third</List.Item>
      </List.Root>
    );
    
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
    expect(screen.getByText('Third')).toBeInTheDocument();
  });

  it('renders nested list', () => {
    renderWithChakra(
      <List.Root>
        <List.Item>Parent 1</List.Item>
        <List.Item>
          Parent 2
          <List.Root>
            <List.Item>Child 1</List.Item>
            <List.Item>Child 2</List.Item>
          </List.Root>
        </List.Item>
      </List.Root>
    );
    
    expect(screen.getByText('Parent 1')).toBeInTheDocument();
    expect(screen.getByText('Parent 2')).toBeInTheDocument();
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });

  it('renders with indicators', () => {
    renderWithChakra(
      <List.Root>
        <List.Item>
          <List.Indicator>✓</List.Indicator>
          Item with indicator
        </List.Item>
      </List.Root>
    );
    
    expect(screen.getByText('✓')).toBeInTheDocument();
    expect(screen.getByText('Item with indicator')).toBeInTheDocument();
  });
});
