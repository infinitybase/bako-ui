import type { Meta, StoryObj } from '@storybook/react-vite';
import { useForm } from 'react-hook-form';
import { RhfCombobox } from './rhf-combobox';

const meta: Meta<typeof RhfCombobox> = {
  component: RhfCombobox,
  title: 'Bako UI/Form/RhfCombobox',
  argTypes: {
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof RhfCombobox>;

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
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
  },
};
