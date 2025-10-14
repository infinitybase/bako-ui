import { Button, Menu } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Bako UI/Overlays/Menu',
  component: Menu.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <></> },
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>Open Menu</Button>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new">New File</Menu.Item>
            <Menu.Item value="open">Open File</Menu.Item>
            <Menu.Item value="save">Save</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="exit">Exit</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  ),
};

export const WithDisabledItems: Story = {
  args: { children: <></> },
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>Actions</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="edit">Edit</Menu.Item>
          <Menu.Item value="duplicate">Duplicate</Menu.Item>
          <Menu.Item value="delete" disabled>
            Delete (disabled)
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};

export const WithSubmenu: Story = {
  args: { children: <></> },
  render: () => (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button>File</Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="new">New</Menu.Item>
          <Menu.Root positioning={{ placement: 'right-start' }}>
            <Menu.TriggerItem>Open Recent ›</Menu.TriggerItem>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="doc1">Document 1</Menu.Item>
                <Menu.Item value="doc2">Document 2</Menu.Item>
                <Menu.Item value="doc3">Document 3</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
          <Menu.Separator />
          <Menu.Item value="exit">Exit</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  ),
};
