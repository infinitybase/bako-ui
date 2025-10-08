import { RhfCombobox } from '@bako/ui';
import { Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof RhfCombobox> = {
  component: RhfCombobox,
  title: 'Bako UI/Form/RhfCombobox',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof RhfCombobox>;
const colors = ['Blue', 'Red', 'Green', 'Yellow', 'Black'];
const sizes = ['xs', 'sm', 'md', 'lg'] as const;

export const Standard: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfCombobox control={control} {...args} />;
  },
  args: {
    disabled: false,
    name: 'name',
    defaultValue: '',
    label: 'Select an option',
    options: colors.map((color) => ({
      label: color,
      value: color.toLowerCase(),
    })),
  },
};

export const Sizes: Story = {
  render: (args) => {
    const { control } = useForm();

    return (
      <Stack>
        {sizes.map((size) => (
          <RhfCombobox
            key={size}
            slotProps={{ root: { size } }}
            control={control}
            {...args}
          />
        ))}
      </Stack>
    );
  },
  args: {
    disabled: false,
    name: 'name',
    defaultValue: '',
    label: 'Select an option',
    options: colors.map((color) => ({
      label: color,
      value: color.toLowerCase(),
    })),
  },
};

export const Multiple: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfCombobox control={control} {...args} multiple />;
  },
  args: {
    disabled: false,
    name: 'name',
    defaultValue: [],
    label: 'Select options',
    options: colors.map((color) => ({
      label: color,
      value: color.toLowerCase(),
    })),
  },
};

export const OptionsWithImage: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfCombobox control={control} {...args} />;
  },
  args: {
    disabled: false,
    name: 'name',
    defaultValue: '',
    label: 'Select an option',
    options: [
      {
        label: 'Donuts',
        value: 'donuts',
        imageUrl: '/donuts.png',
      },
      {
        label: 'Ice Cream',
        value: 'ice-cream',
        imageUrl: '/ice-cream.png',
      },
    ],
  },
};
