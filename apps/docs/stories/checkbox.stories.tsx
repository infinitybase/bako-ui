import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Stack } from 'bako-ui';

const meta: Meta<typeof Checkbox> = {
  title: 'Bako UI/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    children: 'Accept terms and conditions',
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    defaultChecked: 'indeterminate',
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <Checkbox size="sm">Small checkbox</Checkbox>
      <Checkbox size="md">Medium checkbox (default)</Checkbox>
      <Checkbox size="lg">Large checkbox</Checkbox>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={4}>
      <Checkbox variant="outline">Outline variant</Checkbox>
      <Checkbox variant="subtle">Subtle variant</Checkbox>
      <Checkbox variant="solid">Solid variant</Checkbox>
    </Stack>
  ),
};

export const WithoutLabel: Story = {
  args: {
    children: undefined,
    'aria-label': 'Checkbox without visible label',
  },
};

export const ColorPalettes: Story = {
  render: () => (
    <Stack gap={4}>
      <Checkbox colorPalette="yellow" defaultChecked>
        Yellow
      </Checkbox>
      <Checkbox colorPalette="green" defaultChecked>
        Green
      </Checkbox>
      <Checkbox colorPalette="red" defaultChecked>
        Red
      </Checkbox>
      <Checkbox colorPalette="purple" defaultChecked>
        Purple
      </Checkbox>
      <Checkbox colorPalette="orange" defaultChecked>
        Orange
      </Checkbox>
    </Stack>
  ),
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultChecked: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};
