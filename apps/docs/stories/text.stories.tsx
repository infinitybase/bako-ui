import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Text, VStack } from 'bako-ui';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Bako UI/Typography/Text',
  tags: ['autodocs'],
  argTypes: {
    fontSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Font size',
    },
    fontWeight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    color: {
      control: 'text',
      description: 'Text color',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  render: () => <Text>This is a default text component</Text>,
};

export const FontSizes: Story = {
  render: () => (
    <VStack align="start" gap={3}>
      <Text fontSize="xs">Extra Small Text (xs)</Text>
      <Text fontSize="sm">Small Text (sm)</Text>
      <Text fontSize="md">Medium Text (md) - Default</Text>
      <Text fontSize="lg">Large Text (lg)</Text>
      <Text fontSize="xl">Extra Large Text (xl)</Text>
      <Text fontSize="2xl">2X Large Text (2xl)</Text>
      <Text fontSize="3xl">3X Large Text (3xl)</Text>
    </VStack>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <VStack align="start" gap={3}>
      <Text fontWeight="normal">Normal Weight (400)</Text>
      <Text fontWeight="medium">Medium Weight (500)</Text>
      <Text fontWeight="semibold">Semibold Weight (600)</Text>
      <Text fontWeight="bold">Bold Weight (700)</Text>
    </VStack>
  ),
};

export const Colors: Story = {
  render: () => (
    <VStack align="start" gap={3}>
      <Text color="gray.600">Gray Text</Text>
      <Text color="red.100">Red Text</Text>
      <Text color="green.100">Green Text</Text>
      <Text color="blue.100">Blue Text</Text>
      <Text color="yellow.100">Yellow Text</Text>
      <Text color="purple.100">Purple Text</Text>
      <Text color="orange.100">Orange Text</Text>
    </VStack>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <Stack gap={4}>
      <Box p={4} bg="gray.50" borderRadius="md">
        <Text textAlign="left">
          Left aligned text - Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </Text>
      </Box>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Text textAlign="center">
          Center aligned text - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </Box>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Text textAlign="right">
          Right aligned text - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Text>
      </Box>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Text textAlign="justify">
          Justified text - Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </Text>
      </Box>
    </Stack>
  ),
};

export const Truncate: Story = {
  render: () => (
    <Stack gap={4}>
      <Box maxWidth="300px">
        <Text truncate>
          This is a very long text that will be truncated when it exceeds the
          container width. The rest will be hidden with ellipsis.
        </Text>
      </Box>

      <Box maxWidth="200px">
        <Text truncate>
          Even shorter container with very long text that gets truncated.
        </Text>
      </Box>
    </Stack>
  ),
};

export const LineClamp: Story = {
  render: () => (
    <Stack gap={4}>
      <Box maxWidth="400px">
        <Text lineClamp={2}>
          This is a longer text that will be clamped to 2 lines. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris.
        </Text>
      </Box>

      <Box maxWidth="400px">
        <Text lineClamp={3}>
          This text will be clamped to 3 lines. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Text>
      </Box>
    </Stack>
  ),
};

export const Combinations: Story = {
  render: () => (
    <VStack align="start" gap={4}>
      <Text fontSize="lg" fontWeight="bold" color="blue.100">
        Large, Bold, Blue Text
      </Text>

      <Text fontSize="xl" fontWeight="semibold" color="green.100">
        Extra Large, Semibold, Green Text
      </Text>

      <Text fontSize="2xl" fontWeight="bold" color="red.100">
        2XL, Bold, Red Text
      </Text>

      <Box p={4} bg="gray.900" borderRadius="md">
        <Text fontSize="lg" fontWeight="medium" color="white">
          White text on dark background
        </Text>
      </Box>

      <Box p={4} bg="blue.100" borderRadius="md">
        <Text fontSize="md" fontWeight="semibold" color="white">
          White text on colored background
        </Text>
      </Box>
    </VStack>
  ),
};

export const AsSemanticElement: Story = {
  render: () => (
    <VStack align="start" gap={3}>
      <Text as="p">Text as paragraph (p)</Text>
      <Text as="span">Text as span</Text>
      <Text as="div">Text as div</Text>
      <Text as="label">Text as label</Text>
      <Text as="caption">Text as caption</Text>
    </VStack>
  ),
};

export const WithLineHeight: Story = {
  render: () => (
    <Stack gap={4}>
      <Box maxWidth="400px">
        <Text lineHeight="1.2">
          Tight line height (1.2) - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
      </Box>

      <Box maxWidth="400px">
        <Text lineHeight="1.6">
          Normal line height (1.6) - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
      </Box>

      <Box maxWidth="400px">
        <Text lineHeight="2">
          Loose line height (2) - Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
      </Box>
    </Stack>
  ),
};
