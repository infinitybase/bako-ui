import { render, screen } from '@testing-library/react';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { ScrollArea } from './scroll-area';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('ScrollArea', () => {
  it('should render correctly', () => {
    const items = Array.from({ length: 20 }, (_, i) => ({
      id: `item-${i}`,
      label: `Item ${i + 1}`,
    }));

    renderWithChakra(
      <ScrollArea.Root maxW="300px" maxH="200px">
        <ScrollArea.Viewport>
          <div>
            {items.map((item) => (
              <p key={item.id}>{item.label}</p>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('should render with horizontal scrollbar', () => {
    renderWithChakra(
      <ScrollArea.Root maxW="300px">
        <ScrollArea.Viewport>
          <div style={{ width: '600px' }}>Wide content</div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    );

    expect(screen.getByText('Wide content')).toBeInTheDocument();
  });

  it('should render both scrollbars', () => {
    renderWithChakra(
      <ScrollArea.Root maxW="300px" maxH="200px">
        <ScrollArea.Viewport>
          <div style={{ width: '600px', height: '400px' }}>
            Large content area
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    );

    expect(screen.getByText('Large content area')).toBeInTheDocument();
  });
});
