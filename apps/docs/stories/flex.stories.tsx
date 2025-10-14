import { Box, Flex, Heading, Stack, Text } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Bako UI/Layout/Flex',
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      description: 'Flex direction',
    },
    justify: {
      control: 'select',
      options: [
        'start',
        'end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Justify content',
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      description: 'Align items',
    },
    wrap: {
      control: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      description: 'Flex wrap',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <Flex gap={4} p={4} bg="gray.50" borderRadius="md">
      <Box bg="blue.100" p={3} borderRadius="md">
        <Text>Item 1</Text>
      </Box>
      <Box bg="blue.200" p={3} borderRadius="md">
        <Text>Item 2</Text>
      </Box>
      <Box bg="blue.300" p={3} borderRadius="md">
        <Text>Item 3</Text>
      </Box>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Flex justify="space-between" p={4} bg="gray.50" borderRadius="md">
      <Box bg="green.100" p={3} borderRadius="md">
        <Text>Left</Text>
      </Box>
      <Box bg="green.200" p={3} borderRadius="md">
        <Text>Center</Text>
      </Box>
      <Box bg="green.300" p={3} borderRadius="md">
        <Text>Right</Text>
      </Box>
    </Flex>
  ),
};

export const Centered: Story = {
  render: () => (
    <Flex
      justify="center"
      align="center"
      minHeight="200px"
      bg="gray.50"
      borderRadius="md"
    >
      <Box bg="yellow.200" p={6} borderRadius="md">
        <Text fontWeight="bold">Perfectly Centered</Text>
      </Box>
    </Flex>
  ),
};

export const WithWrap: Story = {
  render: () => (
    <Flex wrap="wrap" gap={2} p={4} bg="gray.50" borderRadius="md">
      {Array.from({ length: 15 }).map((_, i) => (
        <Box
          key={i.toString()}
          bg="purple.100"
          p={3}
          borderRadius="md"
          minWidth="100px"
        >
          <Text fontSize="sm">Item {i + 1}</Text>
        </Box>
      ))}
    </Flex>
  ),
};

export const Column: Story = {
  render: () => (
    <Flex direction="column" gap={3} p={4} bg="gray.50" borderRadius="md">
      <Box bg="red.100" p={3} borderRadius="md">
        <Text>Item 1</Text>
      </Box>
      <Box bg="red.200" p={3} borderRadius="md">
        <Text>Item 2</Text>
      </Box>
      <Box bg="red.300" p={3} borderRadius="md">
        <Text>Item 3</Text>
      </Box>
    </Flex>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Stack gap={4}>
      <Heading size="sm">Resize window to see responsive behavior</Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        p={4}
        bg="gray.50"
        borderRadius="md"
      >
        <Box bg="blue.100" p={4} borderRadius="md" flex="1">
          <Text>Responsive Item 1</Text>
          <Text fontSize="sm" color="gray.600">
            Column on mobile, row on desktop
          </Text>
        </Box>
        <Box bg="blue.200" p={4} borderRadius="md" flex="1">
          <Text>Responsive Item 2</Text>
          <Text fontSize="sm" color="gray.600">
            Column on mobile, row on desktop
          </Text>
        </Box>
      </Flex>
    </Stack>
  ),
};

export const AllJustifyOptions: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          justify=&quot;start&quot;
        </Text>
        <Flex justify="start" gap={2} p={4} bg="gray.50" borderRadius="md">
          <Box bg="blue.100" p={2} borderRadius="md">
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="blue.200" p={2} borderRadius="md">
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="blue.300" p={2} borderRadius="md">
            <Text fontSize="sm">3</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          justify=&quot;center&quot;
        </Text>
        <Flex justify="center" gap={2} p={4} bg="gray.50" borderRadius="md">
          <Box bg="green.100" p={2} borderRadius="md">
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="green.200" p={2} borderRadius="md">
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="green.300" p={2} borderRadius="md">
            <Text fontSize="sm">3</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          justify=&quot;end&quot;
        </Text>
        <Flex justify="end" gap={2} p={4} bg="gray.50" borderRadius="md">
          <Box bg="yellow.100" p={2} borderRadius="md">
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="yellow.200" p={2} borderRadius="md">
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="yellow.300" p={2} borderRadius="md">
            <Text fontSize="sm">3</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          justify=&quot;space-between&quot;
        </Text>
        <Flex
          justify="space-between"
          gap={2}
          p={4}
          bg="gray.50"
          borderRadius="md"
        >
          <Box bg="red.100" p={2} borderRadius="md">
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="red.200" p={2} borderRadius="md">
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="red.300" p={2} borderRadius="md">
            <Text fontSize="sm">3</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          justify=&quot;space-around&quot;
        </Text>
        <Flex
          justify="space-around"
          gap={2}
          p={4}
          bg="gray.50"
          borderRadius="md"
        >
          <Box bg="purple.100" p={2} borderRadius="md">
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="purple.200" p={2} borderRadius="md">
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="purple.300" p={2} borderRadius="md">
            <Text fontSize="sm">3</Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          justify=&quot;space-evenly&quot;
        </Text>
        <Flex
          justify="space-evenly"
          gap={2}
          p={4}
          bg="gray.50"
          borderRadius="md"
        >
          <Box bg="gray.200" p={2} borderRadius="md">
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="gray.300" p={2} borderRadius="md">
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="gray.400" p={2} borderRadius="md" color="white">
            <Text fontSize="sm">3</Text>
          </Box>
        </Flex>
      </Box>
    </Stack>
  ),
};
