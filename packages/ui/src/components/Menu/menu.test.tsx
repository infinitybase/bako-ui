import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Button } from '../Button';
import { Menu } from './menu';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Menu', () => {
  it('renders menu trigger', () => {
    renderWithChakra(
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="item1">Item 1</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );

    expect(
      screen.getByRole('button', { name: 'Open Menu' })
    ).toBeInTheDocument();
  });

  it('opens menu on click', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="item1">Menu Item 1</Menu.Item>
            <Menu.Item value="item2">Menu Item 2</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );

    const trigger = screen.getByRole('button', { name: 'Open Menu' });
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Menu Item 1')).toBeInTheDocument();
      expect(screen.getByText('Menu Item 2')).toBeInTheDocument();
    });
  });

  it('closes menu when item is selected', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="item1">Menu Item 1</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Menu Item 1')).toBeInTheDocument();
    });

    const item = screen.getByText('Menu Item 1');
    await user.click(item);

    await waitFor(() => {
      expect(screen.queryByText('Menu Item 1')).not.toBeInTheDocument();
    });
  });

  it('supports disabled items', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="item1">Enabled Item</Menu.Item>
            <Menu.Item value="item2" disabled>
              Disabled Item
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Disabled Item')).toBeInTheDocument();
    });
  });

  it('supports menu separator', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="item1">Item 1</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="item2">Item 2</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
    });
  });

  it('calls onSelect when item is clicked', async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();

    renderWithChakra(
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="item1" onSelect={handleSelect}>
              Item 1
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    const item = screen.getByText('Item 1');
    await user.click(item);

    expect(handleSelect).toHaveBeenCalled();
  });

  it('supports controlled open state', () => {
    renderWithChakra(
      <Menu.Root open>
        <Menu.Trigger asChild>
          <Button>Open Menu</Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="item1">Always Visible</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    );

    expect(screen.getByText('Always Visible')).toBeInTheDocument();
  });
});
