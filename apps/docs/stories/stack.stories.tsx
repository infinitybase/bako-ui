import { Box, Heading, HStack, Stack, Text, VStack } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Stack> = {
  component: Stack,
  title: 'Bako UI/Layout/Stack',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Stack direction',
    },
    gap: {
      control: 'text',
      description: 'Gap between items',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Vertical: Story = {
  render: () => (
    <Stack gap={3}>
      <Box bg="blue.100" p={3} borderRadius="md">
        <Text>Item 1</Text>
      </Box>
      <Box bg="blue.200" p={3} borderRadius="md">
        <Text>Item 2</Text>
      </Box>
      <Box bg="blue.300" p={3} borderRadius="md">
        <Text>Item 3</Text>
      </Box>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" gap={3}>
      <Box bg="green.100" p={3} borderRadius="md">
        <Text>Item 1</Text>
      </Box>
      <Box bg="green.200" p={3} borderRadius="md">
        <Text>Item 2</Text>
      </Box>
      <Box bg="green.300" p={3} borderRadius="md">
        <Text>Item 3</Text>
      </Box>
    </Stack>
  ),
};

export const DifferentGaps: Story = {
  render: () => (
    <VStack align="stretch" gap={6}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          Gap 2
        </Text>
        <Stack gap={2}>
          <Box bg="yellow.100" p={2} borderRadius="md">
            <Text fontSize="sm">Item 1</Text>
          </Box>
          <Box bg="yellow.200" p={2} borderRadius="md">
            <Text fontSize="sm">Item 2</Text>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Gap 4
        </Text>
        <Stack gap={4}>
          <Box bg="yellow.100" p={2} borderRadius="md">
            <Text fontSize="sm">Item 1</Text>
          </Box>
          <Box bg="yellow.200" p={2} borderRadius="md">
            <Text fontSize="sm">Item 2</Text>
          </Box>
        </Stack>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Gap 8
        </Text>
        <Stack gap={8}>
          <Box bg="yellow.100" p={2} borderRadius="md">
            <Text fontSize="sm">Item 1</Text>
          </Box>
          <Box bg="yellow.200" p={2} borderRadius="md">
            <Text fontSize="sm">Item 2</Text>
          </Box>
        </Stack>
      </Box>
    </VStack>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Stack gap={4}>
      <Heading size="sm">Resize window to see responsive behavior</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} gap={4}>
        <Box bg="purple.100" p={4} borderRadius="md" flex="1">
          <Text>Responsive Item 1</Text>
          <Text fontSize="sm" color="gray.600">
            Stacks vertically on mobile
          </Text>
        </Box>
        <Box bg="purple.200" p={4} borderRadius="md" flex="1">
          <Text>Responsive Item 2</Text>
          <Text fontSize="sm" color="gray.600">
            Stacks horizontally on desktop
          </Text>
        </Box>
      </Stack>
    </Stack>
  ),
};

export const HStackExamples: Story = {
  name: 'HStack Examples',
  render: () => (
    <VStack align="stretch" gap={6}>
      <Box>
        <Heading size="sm" mb={3}>
          HStack with different gaps
        </Heading>
        <VStack gap={3} align="stretch">
          <HStack gap={2}>
            <Box bg="blue.100" p={2} borderRadius="md">
              <Text fontSize="sm">Gap 2</Text>
            </Box>
            <Box bg="blue.200" p={2} borderRadius="md">
              <Text fontSize="sm">Gap 2</Text>
            </Box>
            <Box bg="blue.300" p={2} borderRadius="md">
              <Text fontSize="sm">Gap 2</Text>
            </Box>
          </HStack>

          <HStack gap={6}>
            <Box bg="blue.100" p={2} borderRadius="md">
              <Text fontSize="sm">Gap 6</Text>
            </Box>
            <Box bg="blue.200" p={2} borderRadius="md">
              <Text fontSize="sm">Gap 6</Text>
            </Box>
            <Box bg="blue.300" p={2} borderRadius="md">
              <Text fontSize="sm">Gap 6</Text>
            </Box>
          </HStack>
        </VStack>
      </Box>

      <Box>
        <Heading size="sm" mb={3}>
          HStack with justify
        </Heading>
        <HStack justify="space-between" p={4} bg="gray.50" borderRadius="md">
          <Box bg="gray.200" p={2} borderRadius="md">
            <Text>Start</Text>
          </Box>
          <Box bg="gray.300" p={2} borderRadius="md">
            <Text>End</Text>
          </Box>
        </HStack>
      </Box>

      <Box>
        <Heading size="sm" mb={3}>
          HStack with wrap
        </Heading>
        <HStack wrap="wrap" gap={2} p={4} bg="gray.50" borderRadius="md">
          {Array.from({ length: 8 }).map((_, i) => (
            <Box key={i.toString()} bg="green.100" p={2} borderRadius="md">
              <Text fontSize="sm">Item {i + 1}</Text>
            </Box>
          ))}
        </HStack>
      </Box>
    </VStack>
  ),
};

export const VStackExamples: Story = {
  name: 'VStack Examples',
  render: () => (
    <HStack gap={8} align="start">
      <Box>
        <Heading size="sm" mb={3}>
          VStack align start
        </Heading>
        <VStack align="start" gap={2} p={4} bg="gray.50" borderRadius="md">
          <Box bg="red.100" p={2} borderRadius="md">
            <Text>Item 1</Text>
          </Box>
          <Box bg="red.200" p={2} borderRadius="md">
            <Text>Item 2 (wider)</Text>
          </Box>
          <Box bg="red.300" p={2} borderRadius="md" color="white">
            <Text>Item 3</Text>
          </Box>
        </VStack>
      </Box>

      <Box>
        <Heading size="sm" mb={3}>
          VStack align center
        </Heading>
        <VStack align="center" gap={2} p={4} bg="gray.50" borderRadius="md">
          <Box bg="green.100" p={2} borderRadius="md">
            <Text>Item 1</Text>
          </Box>
          <Box bg="green.200" p={2} borderRadius="md">
            <Text>Item 2 (wider)</Text>
          </Box>
          <Box bg="green.300" p={2} borderRadius="md" color="white">
            <Text>Item 3</Text>
          </Box>
        </VStack>
      </Box>

      <Box>
        <Heading size="sm" mb={3}>
          VStack align end
        </Heading>
        <VStack align="end" gap={2} p={4} bg="gray.50" borderRadius="md">
          <Box bg="blue.100" p={2} borderRadius="md">
            <Text>Item 1</Text>
          </Box>
          <Box bg="blue.200" p={2} borderRadius="md">
            <Text>Item 2 (wider)</Text>
          </Box>
          <Box bg="blue.300" p={2} borderRadius="md" color="white">
            <Text>Item 3</Text>
          </Box>
        </VStack>
      </Box>
    </HStack>
  ),
};

export const VStackStretch: Story = {
  name: 'VStack with stretch',
  render: () => (
    <VStack align="stretch" gap={3} maxWidth="300px">
      <Box bg="yellow.100" p={3} borderRadius="md">
        <Text>Stretched Item 1</Text>
      </Box>
      <Box bg="yellow.200" p={3} borderRadius="md">
        <Text>Stretched Item 2</Text>
      </Box>
      <Box bg="yellow.300" p={3} borderRadius="md">
        <Text>Stretched Item 3</Text>
      </Box>
    </VStack>
  ),
};
