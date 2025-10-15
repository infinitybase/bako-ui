import { Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { CloseButton } from 'bako-ui';

const meta: Meta<typeof CloseButton> = {
  title: 'Bako UI/Buttons/CloseButton',
  component: CloseButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CloseButton>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" gap={4} align="center">
      <CloseButton size="xs" />
      <CloseButton size="sm" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
      <CloseButton size="xl" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <CloseButton variant="solid" />
      <CloseButton variant="subtle" />
      <CloseButton variant="surface" />
      <CloseButton variant="outline" />
      <CloseButton variant="ghost" />
      <CloseButton variant="plain" />
    </Stack>
  ),
};

export const ColorPalettes: Story = {
  render: () => (
    <Stack direction="row" gap={4} wrap="wrap">
      <CloseButton colorPalette="gray" />
      <CloseButton colorPalette="red" />
      <CloseButton colorPalette="orange" />
      <CloseButton colorPalette="green" />
      <CloseButton colorPalette="blue" />
      <CloseButton colorPalette="teal" />
      <CloseButton colorPalette="purple" />
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomAriaLabel: Story = {
  args: {
    'aria-label': 'Close dialog',
  },
};

export const Rounded: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <CloseButton rounded="sm" />
      <CloseButton rounded="md" />
      <CloseButton rounded="lg" />
      <CloseButton rounded="full" />
    </Stack>
  ),
};

export const DialogExample: Story = {
  render: () => (
    <Stack
      p={6}
      bg="bg.surface"
      borderWidth="1px"
      borderRadius="lg"
      position="relative"
      maxW="md"
    >
      <CloseButton position="absolute" top={2} right={2} />
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Dialog Title</h3>
      <p>This is an example of a CloseButton positioned in a dialog header.</p>
    </Stack>
  ),
};
