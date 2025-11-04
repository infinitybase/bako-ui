import { Box, Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarGroup } from 'bako-ui';

const meta: Meta<typeof Avatar> = {
  title: 'Bako UI/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    name: 'John Doe',
  },
};

export const WithImage: Story = {
  args: {
    name: 'John Doe',
    src: 'https://picsum.photos/200/400',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={4} align="center">
      <Avatar name="Test" size="2xs" />
      <Avatar name="Test" size="xs" />
      <Avatar name="Test" size="sm" />
      <Avatar name="Test" size="md" />
      <Avatar name="Test" size="lg" />
      <Avatar name="Test" size="xl" />
      <Avatar name="Test" size="2xl" />
    </Stack>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <Avatar src="https://picsum.photos/200/400" shape="square" />
      <Avatar src="https://picsum.photos/200/400" shape="rounded" />
      <Avatar src="https://picsum.photos/200/400" shape="full" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <Avatar name="Solid" variant="solid" />
      <Avatar name="Subtle" variant="subtle" />
      <Avatar name="Outline" variant="outline" />
    </Stack>
  ),
};

export const ColorPalettes: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <Avatar name="Blue" colorPalette="blue" />
      <Avatar name="Green" colorPalette="green" />
      <Avatar name="Red" colorPalette="red" />
      <Avatar name="Purple" colorPalette="purple" />
      <Avatar name="Orange" colorPalette="orange" />
    </Stack>
  ),
};

export const WithCustomFallback: Story = {
  args: {
    name: 'John Doe',
    fallback: '👤',
  },
};

export const WithoutName: Story = {
  render: () => <Avatar />,
};

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar name="John Doe" src="https://bit.ly/dan-abramov" />
      <Avatar name="Jane Smith" src="https://bit.ly/kent-c-dodds" />
      <Avatar name="Bob Johnson" src="https://bit.ly/ryan-florence" />
      <Avatar name="Alice Williams" />
      <Avatar name="Charlie Brown" />
    </AvatarGroup>
  ),
};

export const GroupWithSizes: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <p>Small:</p>
        <AvatarGroup>
          <Avatar name="User 1" size="sm" />
          <Avatar name="User 2" size="sm" />
          <Avatar name="User 3" size="sm" />
        </AvatarGroup>
      </Box>

      <Box>
        <p>Medium:</p>
        <AvatarGroup>
          <Avatar name="User 1" size="md" />
          <Avatar name="User 2" size="md" />
          <Avatar name="User 3" size="md" />
        </AvatarGroup>
      </Box>

      <Box>
        <p>Large:</p>
        <AvatarGroup>
          <Avatar name="User 1" size="lg" />
          <Avatar name="User 2" size="lg" />
          <Avatar name="User 3" size="lg" />
        </AvatarGroup>
      </Box>
    </Stack>
  ),
};
