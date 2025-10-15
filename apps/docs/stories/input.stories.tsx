import { Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'bako-ui';

const meta: Meta<typeof Input> = {
  title: 'Bako UI/Form/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled input',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: 'Read only input',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <Input size="xs" placeholder="Extra small (xs)" />
      <Input size="sm" placeholder="Small (sm)" />
      <Input size="md" placeholder="Medium (md) - default" />
      <Input size="lg" placeholder="Large (lg)" />
      <Input size="xl" placeholder="Extra large (xl)" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={4}>
      <Input variant="outline" placeholder="Outline variant (default)" />
      <Input variant="subtle" placeholder="Subtle variant" />
      <Input variant="flushed" placeholder="Flushed variant" />
    </Stack>
  ),
};

export const Types: Story = {
  render: () => (
    <Stack gap={4}>
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </Stack>
  ),
};
