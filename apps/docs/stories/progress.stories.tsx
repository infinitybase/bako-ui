import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  HStack,
  Progress,
  ProgressLabel,
  ProgressRange,
  ProgressRoot,
  ProgressTrack,
  ProgressValueText,
  Stack,
} from 'bako-ui';

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: 'Bako UI/Components/Progress',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      defaultValue: 50,
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md',
    },
    variant: {
      control: 'select',
      options: ['outline', 'subtle'],
      defaultValue: 'outline',
    },
    colorPalette: {
      control: 'select',
      options: [
        'gray',
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'blue',
        'cyan',
        'purple',
        'pink',
      ],
      defaultValue: 'blue',
    },
    striped: {
      control: 'boolean',
      defaultValue: false,
    },
    animated: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Basic: Story = {
  args: {
    defaultValue: 50,
  },
};

export const WithLabel: Story = {
  args: {
    defaultValue: 60,
    label: 'Loading...',
  },
};

export const WithValueText: Story = {
  args: {
    defaultValue: 75,
    showValueText: true,
  },
};

export const WithLabelAndValueText: Story = {
  args: {
    defaultValue: 40,
    label: 'Token usage',
    showValueText: true,
  },
};

export const Indeterminate: Story = {
  args: {
    value: null,
  },
};

export const Striped: Story = {
  args: {
    defaultValue: 60,
    striped: true,
  },
};

export const AnimatedStripes: Story = {
  args: {
    defaultValue: 60,
    striped: true,
    animated: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={4} maxW="300px">
      <Progress size="xs" defaultValue={50} />
      <Progress size="sm" defaultValue={50} />
      <Progress size="md" defaultValue={50} />
      <Progress size="lg" defaultValue={50} />
      <Progress size="xl" defaultValue={50} />
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={4} maxW="300px">
      <Progress variant="outline" defaultValue={50} />
      <Progress variant="subtle" defaultValue={50} />
    </Stack>
  ),
};

export const ColorPalettes: Story = {
  render: () => (
    <Stack gap={4} maxW="300px">
      <Progress colorPalette="gray" defaultValue={50} />
      <Progress colorPalette="red" defaultValue={50} />
      <Progress colorPalette="orange" defaultValue={50} />
      <Progress colorPalette="yellow" defaultValue={50} />
      <Progress colorPalette="green" defaultValue={50} />
      <Progress colorPalette="teal" defaultValue={50} />
      <Progress colorPalette="blue" defaultValue={50} />
      <Progress colorPalette="cyan" defaultValue={50} />
      <Progress colorPalette="purple" defaultValue={50} />
      <Progress colorPalette="pink" defaultValue={50} />
    </Stack>
  ),
};

export const CustomComposition: Story = {
  render: () => (
    <ProgressRoot defaultValue={40} maxW="sm">
      <HStack gap={5}>
        <ProgressLabel>Usage</ProgressLabel>
        <ProgressTrack flex="1">
          <ProgressRange />
        </ProgressTrack>
        <ProgressValueText>40%</ProgressValueText>
      </HStack>
    </ProgressRoot>
  ),
};

export const MinMaxValues: Story = {
  render: () => (
    <Progress
      min={0}
      max={200}
      value={150}
      label="Storage (150/200 GB)"
      showValueText
      valueText="75%"
    />
  ),
};

export const Complete: Story = {
  args: {
    value: 100,
    label: 'Upload complete!',
    showValueText: true,
    colorPalette: 'green',
  },
};
