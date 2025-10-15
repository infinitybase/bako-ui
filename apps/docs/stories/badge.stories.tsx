import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Stack } from 'bako-ui';

const meta = {
  title: 'Bako UI/Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Stack direction="row">
      <Badge>Default</Badge>
      <Badge colorPalette="green">Success</Badge>
      <Badge colorPalette="red">Error</Badge>
      <Badge colorPalette="purple">New</Badge>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="subtle">Subtle</Badge>
      <Badge variant="surface">Surface</Badge>
      <Badge variant="plain">Plain</Badge>
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" align="center">
      <Badge size="xs">Extra Small</Badge>
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </Stack>
  ),
};

export const ColorPalettes: Story = {
  render: () => (
    <Stack gap="4">
      <Stack direction="row" wrap="wrap" gap="2">
        <Badge colorPalette="gray">Gray</Badge>
        <Badge colorPalette="red">Red</Badge>
        <Badge colorPalette="orange">Orange</Badge>
        <Badge colorPalette="yellow">Yellow</Badge>
        <Badge colorPalette="green">Green</Badge>
      </Stack>
      <Stack direction="row" wrap="wrap" gap="2">
        <Badge colorPalette="teal">Teal</Badge>
        <Badge colorPalette="blue">Blue</Badge>
        <Badge colorPalette="cyan">Cyan</Badge>
        <Badge colorPalette="purple">Purple</Badge>
        <Badge colorPalette="pink">Pink</Badge>
      </Stack>
    </Stack>
  ),
};

export const WithVariantsAndColors: Story = {
  render: () => (
    <Stack gap="4">
      <Stack direction="row" gap="2">
        <Badge colorPalette="green" variant="solid">
          Solid
        </Badge>
        <Badge colorPalette="green" variant="outline">
          Outline
        </Badge>
        <Badge colorPalette="green" variant="subtle">
          Subtle
        </Badge>
        <Badge colorPalette="green" variant="surface">
          Surface
        </Badge>
      </Stack>
      <Stack direction="row" gap="2">
        <Badge colorPalette="red" variant="solid">
          Solid
        </Badge>
        <Badge colorPalette="red" variant="outline">
          Outline
        </Badge>
        <Badge colorPalette="red" variant="subtle">
          Subtle
        </Badge>
        <Badge colorPalette="red" variant="surface">
          Surface
        </Badge>
      </Stack>
      <Stack direction="row" gap="2">
        <Badge colorPalette="yellow" variant="solid">
          Solid
        </Badge>
        <Badge colorPalette="yellow" variant="outline">
          Outline
        </Badge>
        <Badge colorPalette="yellow" variant="subtle">
          Subtle
        </Badge>
        <Badge colorPalette="yellow" variant="surface">
          Surface
        </Badge>
      </Stack>
    </Stack>
  ),
};
