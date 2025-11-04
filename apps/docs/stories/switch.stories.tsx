import type { Meta, StoryObj } from '@storybook/react';
import { CheckIcon, CloseIcon, Icon, Stack, Switch } from 'bako-ui';

const meta: Meta<typeof Switch> = {
  title: 'Bako UI/Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    children: 'Enable notifications',
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
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
    checked: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    checked: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      <Switch size="xs">Extra small (xs)</Switch>
      <Switch size="sm">Small (sm)</Switch>
      <Switch size="md">Medium (md) - default</Switch>
      <Switch size="lg">Large (lg)</Switch>
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={4}>
      <Switch variant="solid" checked>
        Solid variant (default)
      </Switch>
      <Switch variant="raised" checked>
        Raised variant
      </Switch>
    </Stack>
  ),
};

export const ColorPalettes: Story = {
  render: () => (
    <Stack gap={4}>
      <Switch colorPalette="yellow" checked>
        Yellow
      </Switch>
      <Switch colorPalette="green" checked>
        Green
      </Switch>
      <Switch colorPalette="red" checked>
        Red
      </Switch>
      <Switch colorPalette="purple" checked>
        Purple
      </Switch>
      <Switch colorPalette="orange" checked>
        Orange
      </Switch>
    </Stack>
  ),
};

export const WithThumbLabels: Story = {
  render: () => (
    <Stack gap={4}>
      <Switch
        thumbLabel={{
          on: <Icon as={CheckIcon} color="red" boxSize="16px" />,
          off: <Icon as={CloseIcon} color="red" boxSize="16px" />,
        }}
      >
        With thumb labels
      </Switch>
    </Stack>
  ),
};

export const WithoutLabel: Story = {
  args: {
    children: undefined,
    'aria-label': 'Switch without visible label',
  },
};

export const WithForm: Story = {
  render: () => (
    <form>
      <Switch name="notifications">Enable email notifications</Switch>
    </form>
  ),
};
