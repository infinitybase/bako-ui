import { CloseButton } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Popover, Text } from 'bako-ui';

const meta = {
  title: 'Bako UI/Overlays/Popover',
  component: Popover.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <></> },
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Body>
              <Popover.Title>Popover Title</Popover.Title>
              <Text>
                This is the popover content. You can put any content here.
              </Text>
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  ),
};

export const WithArrow: Story = {
  args: { children: <></> },
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>With Arrow</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Body>
              <Popover.Title>Popover with Arrow</Popover.Title>
              Notice the arrow pointing to the trigger button.
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  ),
};

export const WithCloseButton: Story = {
  args: { children: <></> },
  render: () => (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button>Open</Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Header>
              <Popover.Title>Header Title</Popover.Title>
              <Popover.CloseTrigger asChild>
                <CloseButton />
              </Popover.CloseTrigger>
            </Popover.Header>
            <Popover.Body>
              Content with a close button in the header.
            </Popover.Body>
            <Popover.Footer>
              <Button size="sm">Action</Button>
            </Popover.Footer>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  ),
};
