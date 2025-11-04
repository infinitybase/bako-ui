import type { Meta, StoryObj } from '@storybook/react';
import { Stack, TextArea } from 'bako-ui';

const meta: Meta<typeof TextArea> = {
  title: 'Bako UI/Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: 'Hello World\nThis is a textarea component',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled textarea',
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: 'Read only textarea',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <TextArea size="xs" placeholder="Extra small (xs)" />
      <TextArea size="sm" placeholder="Small (sm)" />
      <TextArea size="md" placeholder="Medium (md) - default" />
      <TextArea size="lg" placeholder="Large (lg)" />
      <TextArea size="xl" placeholder="Extra large (xl)" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={4}>
      <TextArea variant="outline" placeholder="Outline variant (default)" />
      <TextArea variant="subtle" placeholder="Subtle variant" />
      <TextArea variant="flushed" placeholder="Flushed variant" />
    </Stack>
  ),
};

export const WithRows: Story = {
  render: () => (
    <Stack gap={4}>
      <TextArea rows={3} placeholder="3 rows" />
      <TextArea rows={5} placeholder="5 rows" />
      <TextArea rows={8} placeholder="8 rows" />
    </Stack>
  ),
};

export const WithResize: Story = {
  render: () => (
    <Stack gap={4} maxWidth="400px">
      <TextArea
        resize="none"
        placeholder="No resize"
        defaultValue="This textarea cannot be resized"
      />
      <TextArea
        resize="vertical"
        placeholder="Vertical resize only"
        defaultValue="This textarea can only be resized vertically"
      />
      <TextArea
        resize="horizontal"
        placeholder="Horizontal resize only"
        defaultValue="This textarea can only be resized horizontally"
      />
      <TextArea
        resize="both"
        placeholder="Both directions"
        defaultValue="This textarea can be resized in both directions"
      />
    </Stack>
  ),
};

export const WithAutoresize: Story = {
  args: {
    autoresize: true,
    placeholder: 'Start typing... (auto-resizes)',
    defaultValue:
      'This textarea automatically resizes as you type.\nTry adding more lines!',
  },
};

export const WithAutoresizeMaxHeight: Story = {
  args: {
    autoresize: true,
    maxH: '5lh',
    placeholder: 'Max 5 lines (auto-resize)',
    defaultValue: 'This textarea auto-resizes but limits to maximum 5 lines.',
  },
};
