import { CloseButton } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Drawer } from 'bako-ui';

const meta = {
  title: 'Bako UI/Overlays/Drawer',
  component: Drawer.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Drawer.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <></> },
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              This is drawer content. Drawers slide in from the side of the
              screen.
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button>Close</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};

export const DifferentPlacements: Story = {
  args: { children: <></> },
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Drawer.Root placement="start">
        <Drawer.Trigger asChild>
          <Button>Start (Left)</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" colorPalette="primary" />
              </Drawer.CloseTrigger>
              <Drawer.Header>
                <Drawer.Title>Start Placement</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>Slides in from the left side.</Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="end">
        <Drawer.Trigger asChild>
          <Button>End (Right)</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" colorPalette="primary" />
              </Drawer.CloseTrigger>
              <Drawer.Header>
                <Drawer.Title>End Placement</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>Slides in from the right side.</Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="top">
        <Drawer.Trigger asChild>
          <Button>Top</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" colorPalette="primary" />
              </Drawer.CloseTrigger>
              <Drawer.Header>
                <Drawer.Title>Top Placement</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>Slides in from the top.</Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Portal>
      </Drawer.Root>

      <Drawer.Root placement="bottom">
        <Drawer.Trigger asChild>
          <Button>Bottom</Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" colorPalette="primary" />
              </Drawer.CloseTrigger>
              <Drawer.Header>
                <Drawer.Title>Bottom Placement</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>Slides in from the bottom.</Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  ),
};

export const WithHeaderAndFooter: Story = {
  args: { children: <></> },
  render: () => (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header
              display="flex"
              flexDirection="column"
              gap="2"
              alignItems="start"
            >
              <Drawer.Title>Drawer with Header</Drawer.Title>
              <Drawer.Description>
                Additional information about the drawer
              </Drawer.Description>
            </Drawer.Header>
            <Drawer.Body>
              Main content goes here. This drawer has both a header and footer
              section.
            </Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Drawer.ActionTrigger>
              <Drawer.ActionTrigger asChild>
                <Button>Save Changes</Button>
              </Drawer.ActionTrigger>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Portal>
    </Drawer.Root>
  ),
};
