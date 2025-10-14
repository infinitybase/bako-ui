import { Box, Heading, Stack, Text, VStack } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Bako UI/Typography/Heading',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Heading size',
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML heading element',
    },
    color: {
      control: 'text',
      description: 'Heading color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: () => <Heading>Default Heading</Heading>,
};

export const Sizes: Story = {
  render: () => (
    <VStack align="start" gap={4}>
      <Heading size="xs">Extra Small Heading (xs)</Heading>
      <Heading size="sm">Small Heading (sm)</Heading>
      <Heading size="md">Medium Heading (md)</Heading>
      <Heading size="lg">Large Heading (lg)</Heading>
      <Heading size="xl">Extra Large Heading (xl)</Heading>
      <Heading size="2xl">2X Large Heading (2xl)</Heading>
      <Heading size="3xl">3X Large Heading (3xl)</Heading>
    </VStack>
  ),
};

export const SemanticElements: Story = {
  render: () => (
    <VStack align="start" gap={3}>
      <Heading as="h1" size="2xl">
        H1 Heading - Main Title
      </Heading>
      <Heading as="h2" size="xl">
        H2 Heading - Section Title
      </Heading>
      <Heading as="h3" size="lg">
        H3 Heading - Subsection
      </Heading>
      <Heading as="h4" size="md">
        H4 Heading - Sub-subsection
      </Heading>
      <Heading as="h5" size="sm">
        H5 Heading - Minor Heading
      </Heading>
      <Heading as="h6" size="xs">
        H6 Heading - Smallest Heading
      </Heading>
    </VStack>
  ),
};

export const Colors: Story = {
  render: () => (
    <VStack align="start" gap={3}>
      <Heading color="gray.600">Gray Heading</Heading>
      <Heading color="blue.100">Blue Heading</Heading>
      <Heading color="green.100">Green Heading</Heading>
      <Heading color="red.100">Red Heading</Heading>
      <Heading color="yellow.100">Yellow Heading</Heading>
      <Heading color="purple.100">Purple Heading</Heading>
    </VStack>
  ),
};

export const WithText: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <Heading size="xl" mb={2}>
          Article Title
        </Heading>
        <Text color="gray.600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>

      <Box>
        <Heading size="lg" mb={2}>
          Section Heading
        </Heading>
        <Text color="gray.600">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Box>

      <Box>
        <Heading size="md" mb={2}>
          Subsection Heading
        </Heading>
        <Text color="gray.600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </Text>
      </Box>
    </Stack>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <VStack align="start" gap={3}>
      <Heading fontWeight="normal">Normal Weight Heading</Heading>
      <Heading fontWeight="medium">Medium Weight Heading</Heading>
      <Heading fontWeight="semibold">Semibold Weight Heading</Heading>
      <Heading fontWeight="bold">Bold Weight Heading</Heading>
    </VStack>
  ),
};

export const TextAlign: Story = {
  render: () => (
    <Stack gap={4}>
      <Box p={4} bg="gray.50" borderRadius="md">
        <Heading textAlign="left">Left Aligned Heading</Heading>
      </Box>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Heading textAlign="center">Center Aligned Heading</Heading>
      </Box>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Heading textAlign="right">Right Aligned Heading</Heading>
      </Box>
    </Stack>
  ),
};

export const Truncate: Story = {
  render: () => (
    <Stack gap={4}>
      <Box maxWidth="300px">
        <Heading truncate>
          This is a very long heading that will be truncated when it exceeds the
          container width
        </Heading>
      </Box>

      <Box maxWidth="200px">
        <Heading size="sm" truncate>
          Even shorter container with truncation
        </Heading>
      </Box>
    </Stack>
  ),
};

export const WithBackgrounds: Story = {
  render: () => (
    <Stack gap={4}>
      <Box p={6} bg="gray.900" borderRadius="md">
        <Heading size="xl" color="white">
          White Heading on Dark
        </Heading>
      </Box>

      <Box p={6} bg="blue.100" borderRadius="md">
        <Heading size="xl" color="white">
          White Heading on Blue
        </Heading>
      </Box>

      <Box p={6} bg="green.100" borderRadius="md">
        <Heading size="xl" color="white">
          White Heading on Green
        </Heading>
      </Box>

      <Box
        p={6}
        bg="gradient-to-r from-blue-500 to-purple-500"
        borderRadius="md"
      >
        <Heading size="xl" color="white">
          Heading on Gradient
        </Heading>
      </Box>
    </Stack>
  ),
};

export const ResponsiveSizes: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontSize="sm" color="gray.600" mb={2}>
          Resize window to see size changes
        </Text>
        <Heading size={{ base: 'md', md: 'xl', lg: '2xl' }}>
          Responsive Heading Size
        </Heading>
      </Box>

      <Box>
        <Text fontSize="sm" color="gray.600" mb={2}>
          Small on mobile, large on desktop
        </Text>
        <Heading size={{ base: 'sm', md: 'lg' }}>
          Another Responsive Example
        </Heading>
      </Box>
    </Stack>
  ),
};

export const RealWorldExamples: Story = {
  render: () => (
    <Stack gap={8}>
      {/* Hero Section */}
      <Box textAlign="center" p={8} bg="gray.50" borderRadius="lg">
        <Heading size="3xl" mb={4}>
          Welcome to Bako UI
        </Heading>
        <Text fontSize="xl" color="gray.600">
          A modern design system built with Chakra UI
        </Text>
      </Box>

      {/* Card Header */}
      <Box p={6} bg="white" borderRadius="lg" borderWidth="1px">
        <Heading size="lg" mb={3}>
          Card Title
        </Heading>
        <Text color="gray.600" mb={4}>
          This is a card with a heading and description text.
        </Text>
        <Box h="100px" bg="gray.100" borderRadius="md" />
      </Box>

      {/* Section with Subtitle */}
      <Box>
        <Heading size="xl" mb={1}>
          Features
        </Heading>
        <Text color="gray.600" fontSize="lg" mb={4}>
          Everything you need to build modern interfaces
        </Text>
        <Stack gap={2}>
          <Text>• Responsive design system</Text>
          <Text>• Accessible components</Text>
          <Text>• Dark mode support</Text>
        </Stack>
      </Box>
    </Stack>
  ),
};
