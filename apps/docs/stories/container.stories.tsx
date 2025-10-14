import { Box, Container, Heading, Text, VStack } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Container> = {
  title: 'Bako UI/Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxW: {
      control: 'text',
      description: 'Maximum width of the container',
    },
    centerContent: {
      control: 'boolean',
      description: 'Centers the content horizontally',
    },
  },
  decorators: [
    (Story) => (
      <Box bg="gray.50" p={4}>
        <Story />
      </Box>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <Box bg="red" p={6} borderWidth="1px" rounded="md">
        <Heading size="lg" mb={4}>
          Default Container
        </Heading>
        <Text>
          This is a default container. It has a maximum width and centers
          content automatically. The gray background shows the container
          boundaries.
        </Text>
      </Box>
    </Container>
  ),
};

export const WithMaxWidths: Story = {
  render: () => (
    <VStack gap={6} alignItems="stretch">
      <Container maxW="sm">
        <Box bg="red.50" p={4} borderWidth="1px" rounded="md">
          <Text fontWeight="bold" mb={2}>
            Small (sm)
          </Text>
          <Text fontSize="sm">Max width: 640px</Text>
        </Box>
      </Container>

      <Container maxW="md">
        <Box bg="green.50" p={4} borderWidth="1px" rounded="md">
          <Text fontWeight="bold" mb={2}>
            Medium (md)
          </Text>
          <Text fontSize="sm">Max width: 768px</Text>
        </Box>
      </Container>

      <Container maxW="lg">
        <Box bg="red.500" p={4} borderWidth="1px" rounded="md">
          <Text fontWeight="bold" mb={2}>
            Large (lg)
          </Text>
          <Text fontSize="sm">Max width: 1024px</Text>
        </Box>
      </Container>

      <Container maxW="xl">
        <Box bg="gray.600" p={4} borderWidth="1px" rounded="md">
          <Text fontWeight="bold" mb={2}>
            Extra Large (xl)
          </Text>
          <Text fontSize="sm">Max width: 1280px</Text>
        </Box>
      </Container>
    </VStack>
  ),
};

export const CenteredContent: Story = {
  render: () => (
    <Container centerContent>
      <VStack gap={4}>
        <Heading size="lg">Centered Content</Heading>
        <Text textAlign="center">
          The centerContent prop centers all children horizontally using
          flexbox.
        </Text>
        <Box
          bg="blue.500"
          color="white"
          px={6}
          py={3}
          rounded="md"
          fontWeight="bold"
        >
          Centered Button
        </Box>
      </VStack>
    </Container>
  ),
};

export const FluidContainer: Story = {
  render: () => (
    <Container fluid>
      <Box bg="red" p={6} borderWidth="1px" rounded="md">
        <Heading size="lg" mb={4}>
          Fluid Container
        </Heading>
        <Text>
          This container is fluid and takes the full width of its parent. The
          fluid prop removes the maximum width constraint.
        </Text>
      </Box>
    </Container>
  ),
};

export const WithPadding: Story = {
  render: () => (
    <VStack gap={6} alignItems="stretch">
      <Container p={8}>
        <Box bg="red" borderWidth="1px" rounded="md" h={20} />
        <Text mt={2} fontSize="sm" color="gray.600">
          Container with padding: 8
        </Text>
      </Container>

      <Container px={12} py={6}>
        <Box bg="red" borderWidth="1px" rounded="md" h={20} />
        <Text mt={2} fontSize="sm" color="gray.600">
          Container with px: 12, py: 6
        </Text>
      </Container>
    </VStack>
  ),
};

export const ResponsiveMaxWidth: Story = {
  render: () => (
    <Container maxW={{ base: 'sm', md: 'lg', lg: 'xl' }}>
      <Box bg="red" p={6} borderWidth="1px" rounded="md">
        <Heading size="lg" mb={4}>
          Responsive Container
        </Heading>
        <Text>
          This container has responsive max width:
          <br />• Small screens: sm (640px)
          <br />• Medium screens: lg (1024px)
          <br />• Large screens: xl (1280px)
        </Text>
      </Box>
    </Container>
  ),
};
