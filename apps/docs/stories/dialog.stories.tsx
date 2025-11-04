import type { Meta, StoryObj } from '@storybook/react';
import { Button, Dialog } from 'bako-ui';

const meta = {
  title: 'Bako UI/Overlays/Dialog',
  component: Dialog.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              This is a simple dialog with title and body content.
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Close</Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const WithHeaderAndFooter: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Confirm Action</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              This action cannot be undone. Are you sure you want to continue?
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button colorPalette="red">Confirm</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const DifferentSizes: Story = {
  args: {
    children: <></>,
    size: 'sm',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
  },
  render: ({ size = 'sm' }) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Dialog.Root size={size}>
        <Dialog.Trigger asChild>
          <Button>{`Open ${size} Dialog`}</Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>{`${size} Dialog`}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>{`This is a ${size} dialog.`}</Dialog.Body>
              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline">Close</Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  ),
};
