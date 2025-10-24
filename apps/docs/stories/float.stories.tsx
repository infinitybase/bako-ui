import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Box, Float, Image, Stack, Text } from 'bako-ui';

const meta: Meta<typeof Float> = {
  component: Float,
  title: 'Bako UI/Layout/Float',
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top-start',
        'top-center',
        'top-end',
        'bottom-start',
        'bottom-center',
        'bottom-end',
        'middle-start',
        'middle-center',
        'middle-end',
      ],
      description: 'Position of the floating element',
    },
    offset: {
      control: 'text',
      description: 'Offset from the edge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Float>;

export const Default: Story = {
  render: () => (
    <Box
      position="relative"
      width="200px"
      height="200px"
      bg="gray.100"
      borderRadius="md"
    >
      <Float placement="top-end" offset="2">
        <Badge colorPalette="red">New</Badge>
      </Float>
    </Box>
  ),
};

export const Placements: Story = {
  render: () => (
    <Stack gap={6}>
      <Stack gap={4} direction="row" flexWrap="wrap">
        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="top-start" offset="2">
            <Badge colorPalette="blue" size="sm">
              Top Start
            </Badge>
          </Float>
        </Box>

        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="top-center" offset="2">
            <Badge colorPalette="blue" size="sm">
              Top Center
            </Badge>
          </Float>
        </Box>

        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="top-end" offset="2">
            <Badge colorPalette="blue" size="sm">
              Top End
            </Badge>
          </Float>
        </Box>
      </Stack>

      <Stack gap={4} direction="row" flexWrap="wrap">
        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="middle-start" offset="2">
            <Badge colorPalette="green" size="sm">
              Middle Start
            </Badge>
          </Float>
        </Box>

        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="middle-center" offset="2">
            <Badge colorPalette="green" size="sm">
              Middle Center
            </Badge>
          </Float>
        </Box>

        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="middle-end" offset="2">
            <Badge colorPalette="green" size="sm">
              Middle End
            </Badge>
          </Float>
        </Box>
      </Stack>

      <Stack gap={4} direction="row" flexWrap="wrap">
        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="bottom-start" offset="2">
            <Badge colorPalette="purple" size="sm">
              Bottom Start
            </Badge>
          </Float>
        </Box>

        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="bottom-center" offset="2">
            <Badge colorPalette="purple" size="sm">
              Bottom Center
            </Badge>
          </Float>
        </Box>

        <Box
          position="relative"
          width="150px"
          height="150px"
          bg="gray.100"
          borderRadius="md"
        >
          <Float placement="bottom-end" offset="2">
            <Badge colorPalette="purple" size="sm">
              Bottom End
            </Badge>
          </Float>
        </Box>
      </Stack>
    </Stack>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Box position="relative" width="300px">
      <Image
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop"
        alt="Product"
        borderRadius="md"
      />
      <Float placement="top-end" offset="3">
        <Badge colorPalette="red" variant="solid" size="lg">
          -20%
        </Badge>
      </Float>
      <Float placement="bottom-start" offset="3">
        <Badge colorPalette="green" variant="solid">
          In Stock
        </Badge>
      </Float>
    </Box>
  ),
};

export const NotificationBadge: Story = {
  render: () => (
    <Stack gap={6} direction="row" alignItems="center">
      <Box position="relative">
        <Box
          bg="blue.500"
          color="white"
          p={4}
          borderRadius="md"
          fontSize="2xl"
          cursor="pointer"
        >
          🔔
        </Box>
        <Float placement="top-end" offsetX="1" offsetY="1">
          <Badge
            colorPalette="red"
            variant="solid"
            borderRadius="full"
            minW="5"
            h="5"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xs"
          >
            3
          </Badge>
        </Float>
      </Box>

      <Box position="relative">
        <Box
          bg="green.500"
          color="white"
          p={4}
          borderRadius="md"
          fontSize="2xl"
          cursor="pointer"
        >
          💬
        </Box>
        <Float placement="top-end" offsetX="1" offsetY="1">
          <Badge
            colorPalette="red"
            variant="solid"
            borderRadius="full"
            minW="5"
            h="5"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xs"
          >
            12
          </Badge>
        </Float>
      </Box>

      <Box position="relative">
        <Box
          bg="purple.500"
          color="white"
          p={4}
          borderRadius="md"
          fontSize="2xl"
          cursor="pointer"
        >
          📧
        </Box>
        <Float placement="top-end" offsetX="1" offsetY="1">
          <Badge
            colorPalette="red"
            variant="solid"
            borderRadius="full"
            minW="5"
            h="5"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xs"
          >
            99+
          </Badge>
        </Float>
      </Box>
    </Stack>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <Stack gap={4} direction="row" flexWrap="wrap">
      <Box
        position="relative"
        width="150px"
        height="150px"
        bg="gray.100"
        borderRadius="md"
      >
        <Float placement="top-end" offset="0">
          <Badge colorPalette="red">offset: 0</Badge>
        </Float>
      </Box>

      <Box
        position="relative"
        width="150px"
        height="150px"
        bg="gray.100"
        borderRadius="md"
      >
        <Float placement="top-end" offset="2">
          <Badge colorPalette="orange">offset: 2</Badge>
        </Float>
      </Box>

      <Box
        position="relative"
        width="150px"
        height="150px"
        bg="gray.100"
        borderRadius="md"
      >
        <Float placement="top-end" offset="4">
          <Badge colorPalette="green">offset: 4</Badge>
        </Float>
      </Box>

      <Box
        position="relative"
        width="150px"
        height="150px"
        bg="gray.100"
        borderRadius="md"
      >
        <Float placement="top-end" offset="6">
          <Badge colorPalette="blue">offset: 6</Badge>
        </Float>
      </Box>
    </Stack>
  ),
};

export const StatusIndicator: Story = {
  render: () => (
    <Stack gap={6} direction="row" alignItems="center">
      <Box position="relative">
        <Box
          width="60px"
          height="60px"
          bg="gray.200"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
        >
          👤
        </Box>
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Box
            width="4"
            height="4"
            bg="green.500"
            borderRadius="full"
            border="2px solid white"
          />
        </Float>
      </Box>

      <Box position="relative">
        <Box
          width="60px"
          height="60px"
          bg="gray.200"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
        >
          👤
        </Box>
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Box
            width="4"
            height="4"
            bg="yellow.500"
            borderRadius="full"
            border="2px solid white"
          />
        </Float>
      </Box>

      <Box position="relative">
        <Box
          width="60px"
          height="60px"
          bg="gray.200"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2xl"
        >
          👤
        </Box>
        <Float placement="bottom-end" offsetX="1" offsetY="1">
          <Box
            width="4"
            height="4"
            bg="gray.400"
            borderRadius="full"
            border="2px solid white"
          />
        </Float>
      </Box>
    </Stack>
  ),
};

export const CustomOffset: Story = {
  render: () => (
    <Stack gap={4} direction="row" flexWrap="wrap">
      <Box
        position="relative"
        width="150px"
        height="150px"
        bg="gray.100"
        borderRadius="md"
      >
        <Float placement="top-end" offsetX="2" offsetY="2">
          <Badge colorPalette="blue">offsetX: 2, offsetY: 2</Badge>
        </Float>
      </Box>

      <Box
        position="relative"
        width="150px"
        height="150px"
        bg="gray.100"
        borderRadius="md"
      >
        <Float placement="top-end" offsetX="4" offsetY="2">
          <Badge colorPalette="green">offsetX: 4, offsetY: 2</Badge>
        </Float>
      </Box>

      <Box
        position="relative"
        width="150px"
        height="150px"
        bg="gray.100"
        borderRadius="md"
      >
        <Float placement="top-end" offsetX="2" offsetY="4">
          <Badge colorPalette="purple">offsetX: 2, offsetY: 4</Badge>
        </Float>
      </Box>
    </Stack>
  ),
};

export const WithTextContent: Story = {
  render: () => (
    <Box
      position="relative"
      width="400px"
      height="300px"
      bg="gray.50"
      borderRadius="lg"
      p={6}
    >
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        Card Title
      </Text>
      <Text color="gray.600">
        This is a card with floating badges demonstrating different use cases
        for the Float component in various scenarios.
      </Text>

      <Float placement="top-end" offset="3">
        <Badge colorPalette="red" variant="solid">
          Featured
        </Badge>
      </Float>

      <Float placement="bottom-start" offset="3">
        <Badge colorPalette="blue" variant="outline">
          $99.00
        </Badge>
      </Float>
    </Box>
  ),
};
