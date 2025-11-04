import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup, Stack } from 'bako-ui';

const meta: Meta<typeof RadioGroup> = {
  title: 'Bako UI/Form/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup spaceX={2}>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="2" spaceX={2}>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2 (Default)</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup disabled spaceX={2}>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const IndividualDisabled: Story = {
  render: () => (
    <RadioGroup spaceX={2}>
      <Radio value="1">Option 1</Radio>
      <Radio value="2" disabled>
        Option 2 (Disabled)
      </Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup orientation="horizontal" defaultValue="1" spaceX={2}>
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const Vertical: Story = {
  render: () => (
    <RadioGroup orientation="vertical" defaultValue="1">
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={6}>
      <RadioGroup size="xs" defaultValue="1">
        <Radio value="1">Extra small (xs)</Radio>
        <Radio value="2">Extra small (xs)</Radio>
      </RadioGroup>

      <RadioGroup size="sm" defaultValue="1">
        <Radio value="1">Small (sm)</Radio>
        <Radio value="2">Small (sm)</Radio>
      </RadioGroup>

      <RadioGroup size="md" defaultValue="1">
        <Radio value="1">Medium (md) - default</Radio>
        <Radio value="2">Medium (md) - default</Radio>
      </RadioGroup>

      <RadioGroup size="lg" defaultValue="1">
        <Radio value="1">Large (lg)</Radio>
        <Radio value="2">Large (lg)</Radio>
      </RadioGroup>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={6}>
      <RadioGroup variant="outline" defaultValue="1">
        <Radio value="1">Outline variant</Radio>
        <Radio value="2">Outline variant</Radio>
      </RadioGroup>

      <RadioGroup variant="subtle" defaultValue="1">
        <Radio value="1">Subtle variant</Radio>
        <Radio value="2">Subtle variant</Radio>
      </RadioGroup>

      <RadioGroup variant="solid" defaultValue="1">
        <Radio value="1">Solid variant (default)</Radio>
        <Radio value="2">Solid variant (default)</Radio>
      </RadioGroup>
    </Stack>
  ),
};

export const ColorPalettes: Story = {
  render: () => (
    <Stack gap={4}>
      <RadioGroup colorPalette="blue" defaultValue="1">
        <Radio value="1">Blue</Radio>
        <Radio value="2">Blue</Radio>
      </RadioGroup>

      <RadioGroup colorPalette="green" defaultValue="1">
        <Radio value="1">Green</Radio>
        <Radio value="2">Green</Radio>
      </RadioGroup>

      <RadioGroup colorPalette="red" defaultValue="1">
        <Radio value="1">Red</Radio>
        <Radio value="2">Red</Radio>
      </RadioGroup>

      <RadioGroup colorPalette="purple" defaultValue="1">
        <Radio value="1">Purple</Radio>
        <Radio value="2">Purple</Radio>
      </RadioGroup>

      <RadioGroup colorPalette="orange" defaultValue="1">
        <Radio value="1">Orange</Radio>
        <Radio value="2">Orange</Radio>
      </RadioGroup>
    </Stack>
  ),
};

export const WithForm: Story = {
  render: () => (
    <form>
      <RadioGroup name="preference" defaultValue="option1">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2">Option 2</Radio>
        <Radio value="option3">Option 3</Radio>
      </RadioGroup>
    </form>
  ),
};
