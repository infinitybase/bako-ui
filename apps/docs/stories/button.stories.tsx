import { HStack, Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, WalletIcon } from 'bako-ui';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Bako UI/Buttons/Button',
  tags: ['autodocs'],
  argTypes: {
    size: {
      defaultValue: 'md',
      control: 'select',
    },
    variant: {
      defaultValue: 'solid',
      control: 'select',
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const sizeOptions = ['xs', 'sm', 'md', 'lg'] as const;
const variantOptions = [
  'solid',
  'surface',
  'subtle',
  'outline',
  'ghost',
  'plain',
] as const;
const colorPaletteOptions = [
  'gray',
  'green',
  'blue',
  'red',
  'orange',
  'yellow',
] as const;

export const Variants: Story = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <HStack gap={4}>
      {variantOptions.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </HStack>
  ),
};

export const Sizes: Story = {
  args: {
    variant: 'solid',
  },
  render: (args) => (
    <HStack gap={4}>
      {sizeOptions.map((size) => (
        <Button key={size} {...args} size={size}>
          {size.toUpperCase()}
        </Button>
      ))}
    </HStack>
  ),
};

export const Disabled: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
  render: (args) => (
    <HStack gap={4}>
      {variantOptions.map((variant) => (
        <Button key={variant} {...args} variant={variant} disabled />
      ))}
    </HStack>
  ),
};

export const RightIcon: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
  render: (args) => (
    <HStack gap={4}>
      {variantOptions.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          {args.children}
          <WalletIcon boxSize="5" />
        </Button>
      ))}
    </HStack>
  ),
};

export const LeftIcon: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
  render: (args) => (
    <HStack gap={4}>
      {variantOptions.map((variant) => (
        <Button key={variant} {...args} variant={variant}>
          <WalletIcon boxSize="5" />
          {args.children}
        </Button>
      ))}
    </HStack>
  ),
};

export const Loading: Story = {
  args: {
    size: 'md',
    children: 'Button',
    loading: true,
  },
  argTypes: {
    loadingText: {
      control: 'text',
      defaultValue: 'Loading',
    },
    spinnerPlacement: {
      control: 'select',
      options: ['start', 'end'],
      defaultValue: 'start',
    },
  },
  render: (args) => (
    <Stack gap={4}>
      <HStack gap={4}>
        {variantOptions.map((variant) => (
          <Button key={variant} {...args} variant={variant} loading />
        ))}
      </HStack>
      <HStack gap={4}>
        {variantOptions.map((variant) => (
          <Button
            key={variant}
            {...args}
            variant={variant}
            loading
            loadingText="Loading"
          />
        ))}
      </HStack>
      <HStack gap={4}>
        {variantOptions.map((variant) => (
          <Button
            key={variant}
            {...args}
            variant={variant}
            loading
            loadingText="Loading"
            spinnerPlacement="end"
          />
        ))}
      </HStack>
    </Stack>
  ),
};

export const Color: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
  render: (args) => (
    <Stack gap={4}>
      {colorPaletteOptions.map((color) => (
        <HStack key={color} gap={4}>
          {variantOptions.map((variant) => (
            <Button
              key={`${color}-${variant}`}
              {...args}
              variant={variant}
              colorPalette={color}
            />
          ))}
        </HStack>
      ))}
    </Stack>
  ),
};

export const AsLink: Story = {
  name: 'Polymorphism (as Link)',
  render: () => (
    <Stack gap={4}>
      <Button asChild>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          External Link
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#section">Internal Link</a>
      </Button>
      <Button variant="ghost" asChild>
        <a href="/page">Ghost Link Button</a>
      </Button>
    </Stack>
  ),
};
