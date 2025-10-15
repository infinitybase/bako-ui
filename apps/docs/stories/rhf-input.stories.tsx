import { Icon, Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { RhfInput, WalletIcon } from 'bako-ui';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof RhfInput> = {
  component: RhfInput,
  title: 'Bako UI/Rhf/RhfInput',
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof RhfInput>;

export const Standard: Story = (args: Exclude<Story['args'], undefined>) => {
  const { control } = useForm();

  return (
    <RhfInput
      control={control}
      name={args.name!}
      label={args.label!}
      {...args}
    />
  );
};

Standard.args = {
  disabled: false,
  name: 'name',
  defaultValue: '',
  label: 'Nome',
};

export const Disabled: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfInput control={control} {...args} />;
  },
  args: {
    disabled: true,
    name: 'name',
    defaultValue: '',
    label: 'Nome',
  },
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: Storybook convention
export const Error: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfInput control={control} {...args} />;
  },
  args: {
    name: 'error',
    defaultValue: '',
    label: 'Name',
    error: { message: 'This field is required', type: 'error' },
  },
};

export const HelperText: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfInput control={control} {...args} />;
  },
  args: {
    name: 'helperText',
    defaultValue: '',
    label: 'Name',
    helperText: 'This is some helper text',
  },
};

export const StartAddon: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfInput control={control} {...args} />;
  },
  args: {
    name: 'StartAddon',
    defaultValue: '',
    label: 'Website',
    slotProps: {
      inputGroup: {
        startAddon: 'https://',
      },
    },
  },
};

export const StartIcon: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfInput control={control} {...args} />;
  },
  args: {
    name: 'startIcon',
    defaultValue: '',
    label: 'Wallet',
    slotProps: {
      inputGroup: {
        startElement: <Icon as={WalletIcon} size="md" />,
      },
    },
  },
};

export const EndAddon: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfInput control={control} {...args} />;
  },
  args: {
    name: 'EndAddon',
    defaultValue: '',
    label: 'Website',
    slotProps: {
      inputGroup: {
        endAddon: '.com',
      },
    },
  },
};

export const EndIcon: Story = {
  render: (args) => {
    const { control } = useForm();

    return <RhfInput control={control} {...args} />;
  },
  args: {
    name: 'endIcon',
    defaultValue: '',
    label: 'Wallet',
    slotProps: {
      inputGroup: {
        endElement: <Icon as={WalletIcon} size="md" />,
      },
    },
  },
};

export const Size: Story = {
  render: (args) => {
    const { control } = useForm();

    return (
      <Stack>
        <RhfInput
          control={control}
          {...args}
          label="Small Input"
          slotProps={{
            ...args.slotProps,
            input: {
              ...args.slotProps?.input,
              size: 'sm',
            },
          }}
        />
        <RhfInput
          control={control}
          {...args}
          label="Medium Input"
          slotProps={{
            ...args.slotProps,
            input: {
              ...args.slotProps?.input,
              size: 'md',
            },
          }}
        />
        <RhfInput
          control={control}
          {...args}
          label="Larger Input"
          slotProps={{
            ...args.slotProps,
            input: {
              ...args.slotProps?.input,
              size: 'lg',
            },
          }}
        />
        <RhfInput
          control={control}
          {...args}
          label="Extra Larger Input"
          slotProps={{
            ...args.slotProps,
            input: {
              ...args.slotProps?.input,
              size: 'xl',
            },
          }}
        />
      </Stack>
    );
  },
  args: {
    name: 'size',
    defaultValue: '',
    label: 'Website',
  },
};
