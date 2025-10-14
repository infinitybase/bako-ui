import { Box, HStack, Loader, Stack, Text, VStack } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Bako UI/Feedback/Loader',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Loader size',
    },
    color: {
      control: 'text',
      description: 'Loader color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  render: () => <Loader />,
};

export const DifferentSizes: Story = {
  render: () => (
    <HStack gap={8} align="center">
      <VStack gap={2}>
        <Loader size="xs" />
        <Text fontSize="sm">xs</Text>
      </VStack>

      <VStack gap={2}>
        <Loader size="sm" />
        <Text fontSize="sm">sm</Text>
      </VStack>

      <VStack gap={2}>
        <Loader size="md" />
        <Text fontSize="sm">md</Text>
      </VStack>

      <VStack gap={2}>
        <Loader size="lg" />
        <Text fontSize="sm">lg</Text>
      </VStack>

      <VStack gap={2}>
        <Loader size="xl" />
        <Text fontSize="sm">xl</Text>
      </VStack>
    </HStack>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <HStack gap={8} align="center">
      <VStack gap={2}>
        <Loader color="gray.600" />
        <Text fontSize="sm">Gray</Text>
      </VStack>

      <VStack gap={2}>
        <Loader color="blue.100" />
        <Text fontSize="sm">Blue</Text>
      </VStack>

      <VStack gap={2}>
        <Loader color="green.100" />
        <Text fontSize="sm">Green</Text>
      </VStack>

      <VStack gap={2}>
        <Loader color="red.100" />
        <Text fontSize="sm">Red</Text>
      </VStack>

      <VStack gap={2}>
        <Loader color="yellow.100" />
        <Text fontSize="sm">Yellow</Text>
      </VStack>

      <VStack gap={2}>
        <Loader color="purple.100" />
        <Text fontSize="sm">Purple</Text>
      </VStack>
    </HStack>
  ),
};

export const InButtons: Story = {
  render: () => (
    <Stack gap={4}>
      <HStack gap={3}>
        <Box
          as="button"
          p={3}
          bg="blue.100"
          color="white"
          borderRadius="md"
          cursor="wait"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Loader size="sm" color="white" />
          <Text>Loading...</Text>
        </Box>

        <Box
          as="button"
          p={3}
          borderWidth="1px"
          borderColor="blue.100"
          color="blue.100"
          borderRadius="md"
          cursor="wait"
          display="flex"
          alignItems="center"
          gap={2}
        >
          <Loader size="sm" color="blue.100" />
          <Text>Loading...</Text>
        </Box>
      </HStack>

      <HStack gap={3}>
        <Box
          as="button"
          p={2}
          bg="gray.100"
          borderRadius="md"
          cursor="wait"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Loader size="sm" />
        </Box>

        <Box
          as="button"
          p={3}
          bg="green.100"
          color="white"
          borderRadius="md"
          cursor="wait"
          display="flex"
          alignItems="center"
          gap={2}
          minWidth="120px"
          justifyContent="center"
        >
          <Loader size="sm" color="white" />
        </Box>
      </HStack>
    </Stack>
  ),
};

export const InCards: Story = {
  render: () => (
    <HStack gap={4}>
      <Box
        p={8}
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        minWidth="250px"
      >
        <Loader size="lg" />
        <Text fontWeight="bold">Loading data...</Text>
        <Text fontSize="sm" color="gray.600" textAlign="center">
          Please wait while we fetch your information
        </Text>
      </Box>

      <Box
        p={8}
        bg="gray.50"
        borderRadius="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
        minWidth="250px"
      >
        <Loader size="lg" color="blue.100" />
        <Text fontWeight="bold">Processing...</Text>
        <Text fontSize="sm" color="gray.600" textAlign="center">
          Your request is being processed
        </Text>
      </Box>
    </HStack>
  ),
};

export const Centered: Story = {
  render: () => (
    <Stack gap={4}>
      <Box
        minHeight="200px"
        bg="gray.50"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Loader size="lg" />
      </Box>

      <Box
        minHeight="200px"
        bg="blue.50"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack gap={3}>
          <Loader size="xl" color="blue.100" />
          <Text color="blue.100" fontWeight="medium">
            Loading content...
          </Text>
        </VStack>
      </Box>
    </Stack>
  ),
};

export const WithBackgrounds: Story = {
  render: () => (
    <HStack gap={4}>
      <Box
        p={6}
        bg="gray.100"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Loader size="lg" color="gray.600" />
      </Box>

      <Box
        p={6}
        bg="blue.100"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Loader size="lg" color="white" />
      </Box>

      <Box
        p={6}
        bg="green.100"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Loader size="lg" color="white" />
      </Box>

      <Box
        p={6}
        bg="gray.900"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Loader size="lg" color="white" />
      </Box>
    </HStack>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <Text fontWeight="bold" mb={3}>
          Page Loading
        </Text>
        <Box
          p={8}
          bg="white"
          borderRadius="lg"
          borderWidth="1px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={3}
        >
          <Loader size="xl" />
          <Text fontSize="lg" fontWeight="medium">
            Loading page...
          </Text>
        </Box>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={3}>
          Form Submission
        </Text>
        <Box p={4} bg="gray.50" borderRadius="md">
          <HStack gap={3}>
            <Loader size="md" color="blue.100" />
            <Text>Submitting your form...</Text>
          </HStack>
        </Box>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={3}>
          Data Refresh
        </Text>
        <Box p={4} bg="gray.50" borderRadius="md">
          <HStack gap={3} justify="space-between">
            <Text>Refreshing data</Text>
            <Loader size="sm" />
          </HStack>
        </Box>
      </Box>
    </Stack>
  ),
};

export const FullScreenOverlay: Story = {
  render: () => (
    <Box position="relative" minHeight="300px">
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(0, 0, 0, 0.5)"
        borderRadius="md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={3}
      >
        <Loader size="xl" color="white" />
        <Text color="white" fontSize="lg" fontWeight="medium">
          Loading...
        </Text>
      </Box>
    </Box>
  ),
};

export const InlineLoading: Story = {
  render: () => (
    <Stack gap={4}>
      <HStack gap={2}>
        <Text>Loading your data</Text>
        <Loader size="sm" />
      </HStack>

      <HStack gap={2}>
        <Loader size="xs" color="blue.100" />
        <Text fontSize="sm" color="blue.100">
          Syncing...
        </Text>
      </HStack>

      <HStack gap={2}>
        <Text fontWeight="bold">Status:</Text>
        <Loader size="sm" color="green.100" />
        <Text color="green.100">Active</Text>
      </HStack>
    </Stack>
  ),
};
