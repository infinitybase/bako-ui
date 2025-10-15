import type { Meta, StoryObj } from '@storybook/react';
import { Box, HStack, Icon, Stack, Text, VStack, WalletIcon } from 'bako-ui';

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

export const Sizes: Story = {
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

export const Colors: Story = {
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

export const Circular: Story = {
  render: () => (
    <HStack gap={4}>
      <Box
        p={3}
        bg="yellow.50"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WalletIcon boxSize="6" color="yellow.300" />
      </Box>

      <Box
        p={4}
        bg="green.50"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WalletIcon boxSize="8" color="green.300" />
      </Box>

      <Box
        p={5}
        bg="gray.50"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <WalletIcon boxSize="10" color="gray.300" />
      </Box>
    </HStack>
  ),
};

export const WithButtons: Story = {
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
