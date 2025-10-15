import { Stack } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from 'bako-ui';
import {
  LuHeart,
  LuPlus,
  LuSearch,
  LuSettings,
  LuShoppingCart,
  LuTrash,
} from 'react-icons/lu';

const meta: Meta<typeof IconButton> = {
  title: 'Bako UI/Buttons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    'aria-label': 'Icon button',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    'aria-label': 'Search',
    children: <LuSearch />,
  },
};

export const WithSizes: Story = {
  render: () => (
    <Stack direction="row" gap={4} align="center">
      <IconButton size="xs" aria-label="Search">
        <LuSearch />
      </IconButton>
      <IconButton size="sm" aria-label="Search">
        <LuSearch />
      </IconButton>
      <IconButton size="md" aria-label="Search">
        <LuSearch />
      </IconButton>
      <IconButton size="lg" aria-label="Search">
        <LuSearch />
      </IconButton>
      <IconButton size="xl" aria-label="Search">
        <LuSearch />
      </IconButton>
    </Stack>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <IconButton variant="solid" aria-label="Solid">
        <LuSearch />
      </IconButton>
      <IconButton variant="subtle" aria-label="Subtle">
        <LuSearch />
      </IconButton>
      <IconButton variant="surface" aria-label="Surface">
        <LuSearch />
      </IconButton>
      <IconButton variant="outline" aria-label="Outline">
        <LuSearch />
      </IconButton>
      <IconButton variant="ghost" aria-label="Ghost">
        <LuSearch />
      </IconButton>
      <IconButton variant="plain" aria-label="Plain">
        <LuSearch />
      </IconButton>
    </Stack>
  ),
};

export const WithColorPalettes: Story = {
  render: () => (
    <Stack direction="row" gap={4} wrap="wrap">
      <IconButton colorPalette="gray" aria-label="Gray">
        <LuSearch />
      </IconButton>
      <IconButton colorPalette="red" aria-label="Red">
        <LuHeart />
      </IconButton>
      <IconButton colorPalette="orange" aria-label="Orange">
        <LuShoppingCart />
      </IconButton>
      <IconButton colorPalette="green" aria-label="Green">
        <LuPlus />
      </IconButton>
      <IconButton colorPalette="blue" aria-label="Blue">
        <LuSearch />
      </IconButton>
      <IconButton colorPalette="teal" aria-label="Teal">
        <LuSettings />
      </IconButton>
      <IconButton colorPalette="purple" aria-label="Purple">
        <LuHeart />
      </IconButton>
    </Stack>
  ),
};

export const WithDifferentIcons: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <IconButton aria-label="Search" colorPalette="blue">
        <LuSearch />
      </IconButton>
      <IconButton aria-label="Favorite" colorPalette="red">
        <LuHeart />
      </IconButton>
      <IconButton aria-label="Shopping cart" colorPalette="green">
        <LuShoppingCart />
      </IconButton>
      <IconButton aria-label="Settings" colorPalette="gray">
        <LuSettings />
      </IconButton>
      <IconButton aria-label="Delete" colorPalette="red" variant="outline">
        <LuTrash />
      </IconButton>
      <IconButton aria-label="Add" colorPalette="blue" variant="solid">
        <LuPlus />
      </IconButton>
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled',
    disabled: true,
    children: <LuSearch />,
  },
};

export const Loading: Story = {
  args: {
    'aria-label': 'Loading',
    loading: true,
    children: <LuSearch />,
  },
};

export const WithRounded: Story = {
  render: () => (
    <Stack direction="row" gap={4}>
      <IconButton aria-label="Rounded sm" rounded="sm">
        <LuSearch />
      </IconButton>
      <IconButton aria-label="Rounded md" rounded="md">
        <LuSearch />
      </IconButton>
      <IconButton aria-label="Rounded lg" rounded="lg">
        <LuSearch />
      </IconButton>
      <IconButton aria-label="Rounded full" rounded="full">
        <LuSearch />
      </IconButton>
    </Stack>
  ),
};

export const WithCombinations: Story = {
  render: () => (
    <Stack gap={4}>
      <Stack direction="row" gap={4}>
        <IconButton
          size="lg"
          colorPalette="red"
          variant="solid"
          aria-label="Delete"
        >
          <LuTrash />
        </IconButton>
        <IconButton
          size="lg"
          colorPalette="green"
          variant="outline"
          aria-label="Add"
        >
          <LuPlus />
        </IconButton>
        <IconButton
          size="lg"
          colorPalette="blue"
          variant="ghost"
          aria-label="Search"
        >
          <LuSearch />
        </IconButton>
      </Stack>
      <Stack direction="row" gap={4}>
        <IconButton
          size="sm"
          colorPalette="purple"
          rounded="full"
          aria-label="Settings"
        >
          <LuSettings />
        </IconButton>
        <IconButton
          size="sm"
          colorPalette="orange"
          rounded="full"
          aria-label="Favorite"
        >
          <LuHeart />
        </IconButton>
        <IconButton
          size="sm"
          colorPalette="teal"
          rounded="full"
          aria-label="Cart"
        >
          <LuShoppingCart />
        </IconButton>
      </Stack>
    </Stack>
  ),
};
