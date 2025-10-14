import { Box, HStack, Icon, Stack, Text, VStack, WalletIcon } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: 'Bako UI/Media/Icon',
  tags: ['autodocs'],
  argTypes: {
    boxSize: {
      control: 'text',
      description: 'Icon size (width and height)',
    },
    color: {
      control: 'text',
      description: 'Icon color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: () => <WalletIcon />,
};

export const DifferentSizes: Story = {
  render: () => (
    <HStack gap={4} align="center">
      <Box>
        <Text fontSize="sm" mb={1}>
          Small (4)
        </Text>
        <WalletIcon boxSize="4" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={1}>
          Medium (6)
        </Text>
        <WalletIcon boxSize="6" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={1}>
          Large (8)
        </Text>
        <WalletIcon boxSize="8" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={1}>
          XL (12)
        </Text>
        <WalletIcon boxSize="12" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={1}>
          2XL (16)
        </Text>
        <WalletIcon boxSize="16" />
      </Box>
    </HStack>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <HStack gap={6}>
      <VStack gap={2}>
        <WalletIcon boxSize="8" color="gray.600" />
        <Text fontSize="sm">Gray</Text>
      </VStack>

      <VStack gap={2}>
        <WalletIcon boxSize="8" color="blue.100" />
        <Text fontSize="sm">Blue</Text>
      </VStack>

      <VStack gap={2}>
        <WalletIcon boxSize="8" color="green.100" />
        <Text fontSize="sm">Green</Text>
      </VStack>

      <VStack gap={2}>
        <WalletIcon boxSize="8" color="red.100" />
        <Text fontSize="sm">Red</Text>
      </VStack>

      <VStack gap={2}>
        <WalletIcon boxSize="8" color="yellow.100" />
        <Text fontSize="sm">Yellow</Text>
      </VStack>

      <VStack gap={2}>
        <WalletIcon boxSize="8" color="purple.100" />
        <Text fontSize="sm">Purple</Text>
      </VStack>
    </HStack>
  ),
};

export const InButtons: Story = {
  render: () => (
    <Stack gap={3}>
      <HStack gap={3}>
        <Box
          as="button"
          p={3}
          bg="blue.100"
          color="white"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: 'blue.200' }}
        >
          <HStack gap={2}>
            <WalletIcon boxSize="5" />
            <Text>Connect Wallet</Text>
          </HStack>
        </Box>

        <Box
          as="button"
          p={3}
          borderWidth="1px"
          borderColor="blue.100"
          color="blue.100"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: 'blue.50' }}
        >
          <HStack gap={2}>
            <WalletIcon boxSize="5" />
            <Text>Connect Wallet</Text>
          </HStack>
        </Box>
      </HStack>

      <HStack gap={3}>
        <Box
          as="button"
          p={2}
          bg="gray.100"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: 'gray.200' }}
        >
          <WalletIcon boxSize="5" />
        </Box>

        <Box
          as="button"
          p={2}
          borderWidth="1px"
          borderRadius="md"
          cursor="pointer"
          _hover={{ bg: 'gray.50' }}
        >
          <WalletIcon boxSize="5" />
        </Box>
      </HStack>
    </Stack>
  ),
};

export const InCards: Story = {
  render: () => (
    <HStack gap={4}>
      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        maxWidth="200px"
      >
        <VStack gap={3}>
          <Box p={3} bg="blue.50" borderRadius="full">
            <WalletIcon boxSize="8" color="blue.100" />
          </Box>
          <Text fontWeight="bold">Wallet</Text>
          <Text fontSize="sm" color="gray.600" textAlign="center">
            Connect your wallet to get started
          </Text>
        </VStack>
      </Box>

      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        maxWidth="200px"
      >
        <VStack gap={3}>
          <Box p={3} bg="green.50" borderRadius="full">
            <WalletIcon boxSize="8" color="green.100" />
          </Box>
          <Text fontWeight="bold">Secure</Text>
          <Text fontSize="sm" color="gray.600" textAlign="center">
            Your assets are safe with us
          </Text>
        </VStack>
      </Box>
    </HStack>
  ),
};

export const WithBackgrounds: Story = {
  render: () => (
    <HStack gap={4}>
      <Box p={4} bg="gray.100" borderRadius="md">
        <WalletIcon boxSize="8" color="gray.600" />
      </Box>

      <Box p={4} bg="blue.100" borderRadius="md">
        <WalletIcon boxSize="8" color="white" />
      </Box>

      <Box p={4} bg="green.100" borderRadius="md">
        <WalletIcon boxSize="8" color="white" />
      </Box>

      <Box p={4} bg="red.100" borderRadius="md">
        <WalletIcon boxSize="8" color="white" />
      </Box>

      <Box p={4} bg="gray.900" borderRadius="md">
        <WalletIcon boxSize="8" color="white" />
      </Box>
    </HStack>
  ),
};

export const Circular: Story = {
  render: () => (
    <HStack gap={4}>
      <Box
        p={3}
        bg="blue.50"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WalletIcon boxSize="6" color="blue.100" />
      </Box>

      <Box
        p={4}
        bg="green.50"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WalletIcon boxSize="8" color="green.100" />
      </Box>

      <Box
        p={5}
        bg="red.50"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WalletIcon boxSize="10" color="red.100" />
      </Box>
    </HStack>
  ),
};

export const Interactive: Story = {
  render: () => (
    <HStack gap={4}>
      <Box
        p={4}
        bg="gray.50"
        borderRadius="md"
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          bg: 'gray.100',
          transform: 'scale(1.1)',
        }}
      >
        <WalletIcon boxSize="8" />
      </Box>

      <Box
        p={4}
        bg="blue.50"
        borderRadius="full"
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          bg: 'blue.100',
          transform: 'rotate(15deg)',
        }}
      >
        <WalletIcon boxSize="8" color="blue.100" />
      </Box>

      <Box
        p={4}
        bg="green.50"
        borderRadius="md"
        cursor="pointer"
        transition="all 0.2s"
        _hover={{
          shadow: 'lg',
          transform: 'translateY(-2px)',
        }}
      >
        <WalletIcon boxSize="8" color="green.100" />
      </Box>
    </HStack>
  ),
};

export const WithText: Story = {
  render: () => (
    <Stack gap={4}>
      <HStack gap={3}>
        <WalletIcon boxSize="6" color="blue.100" />
        <Text>Icon with text (horizontal)</Text>
      </HStack>

      <HStack gap={3}>
        <WalletIcon boxSize="5" color="green.100" />
        <Text fontSize="sm">Smaller icon with smaller text</Text>
      </HStack>

      <VStack gap={2}>
        <WalletIcon boxSize="8" color="yellow.100" />
        <Text textAlign="center">Icon with text (vertical)</Text>
      </VStack>
    </Stack>
  ),
};
