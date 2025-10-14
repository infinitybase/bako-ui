import { Button, Tooltip } from '@bako/ui';
import { Box, Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Bako UI/Overlays/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const WithoutArrow: Story = {
  render: () => (
    <Tooltip content="Tooltip without arrow" showArrow={false}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <Stack gap={4} align="center" p={20}>
      <Tooltip content="Top" positioning={{ placement: 'top' }}>
        <Button>Top</Button>
      </Tooltip>

      <Box display="flex" gap={4}>
        <Tooltip content="Left" positioning={{ placement: 'left' }}>
          <Button>Left</Button>
        </Tooltip>

        <Tooltip content="Right" positioning={{ placement: 'right' }}>
          <Button>Right</Button>
        </Tooltip>
      </Box>

      <Tooltip content="Bottom" positioning={{ placement: 'bottom' }}>
        <Button>Bottom</Button>
      </Tooltip>
    </Stack>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Stack gap={4}>
      <Tooltip content="Fast tooltip" openDelay={100}>
        <Button>Fast (100ms delay)</Button>
      </Tooltip>

      <Tooltip content="Normal tooltip" openDelay={500}>
        <Button>Normal (500ms delay)</Button>
      </Tooltip>

      <Tooltip content="Slow tooltip" openDelay={1000}>
        <Button>Slow (1000ms delay)</Button>
      </Tooltip>
    </Stack>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Tooltip
      content={
        <Box>
          <strong>Interactive Tooltip</strong>
          <p>You can hover over this content!</p>
        </Box>
      }
      interactive
    >
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tooltip content="This won't show" disabled>
      <Button>Tooltip is disabled</Button>
    </Tooltip>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tooltip content="This is a very long tooltip content that demonstrates how the tooltip handles longer text. It should wrap appropriately and remain readable.">
      <Button>Long content</Button>
    </Tooltip>
  ),
};

export const WithRichContent: Story = {
  render: () => (
    <Tooltip
      content={
        <Box>
          <Box fontWeight="bold" mb={1}>
            Pro Tip
          </Box>
          <Box fontSize="sm">
            You can use keyboard shortcuts:
            <ul style={{ margin: '4px 0', paddingLeft: '20px' }}>
              <li>Ctrl+S to save</li>
              <li>Ctrl+Z to undo</li>
            </ul>
          </Box>
        </Box>
      }
      interactive
      positioning={{ placement: 'right' }}
    >
      <Button>Hover for tips</Button>
    </Tooltip>
  ),
};

export const AlwaysOpen: Story = {
  render: () => (
    <Tooltip content="This tooltip is always visible" open>
      <Button>Always open</Button>
    </Tooltip>
  ),
};
