import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  VStack,
} from 'bako-ui';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  title: 'Bako UI/Feedback/Skeleton',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton height="20px" />,
};

export const DifferentHeights: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontSize="sm" mb={2}>
          Small height (20px)
        </Text>
        <Skeleton height="20px" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          Medium height (40px)
        </Text>
        <Skeleton height="40px" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          Large height (60px)
        </Text>
        <Skeleton height="60px" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          Extra large height (100px)
        </Text>
        <Skeleton height="100px" />
      </Box>
    </Stack>
  ),
};

export const DifferentWidths: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontSize="sm" mb={2}>
          25% width
        </Text>
        <Skeleton height="20px" width="25%" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          50% width
        </Text>
        <Skeleton height="20px" width="50%" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          75% width
        </Text>
        <Skeleton height="20px" width="75%" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          100% width (default)
        </Text>
        <Skeleton height="20px" />
      </Box>
    </Stack>
  ),
};

export const SkeletonTextComponent: Story = {
  render: () => (
    <Stack gap={6}>
      <Box>
        <Text fontWeight="bold" mb={3}>
          3 lines (default)
        </Text>
        <SkeletonText />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={3}>
          5 lines
        </Text>
        <SkeletonText noOfLines={5} />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={3}>
          7 lines with spacing
        </Text>
        <SkeletonText noOfLines={7} gap={4} />
      </Box>
    </Stack>
  ),
};

export const SkeletonCircleComponent: Story = {
  render: () => (
    <HStack gap={6} align="center">
      <VStack gap={2}>
        <SkeletonCircle size="10" />
        <Text fontSize="sm">Small (40px)</Text>
      </VStack>

      <VStack gap={2}>
        <SkeletonCircle size="16" />
        <Text fontSize="sm">Medium (64px)</Text>
      </VStack>

      <VStack gap={2}>
        <SkeletonCircle size="24" />
        <Text fontSize="sm">Large (96px)</Text>
      </VStack>

      <VStack gap={2}>
        <SkeletonCircle size="32" />
        <Text fontSize="sm">XL (128px)</Text>
      </VStack>
    </HStack>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <Stack gap={4}>
      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        maxWidth="400px"
      >
        <Stack gap={4}>
          <Skeleton height="200px" borderRadius="md" />
          <Skeleton height="24px" width="70%" />
          <SkeletonText noOfLines={3} />
        </Stack>
      </Box>

      <Box
        p={6}
        bg="white"
        borderRadius="lg"
        borderWidth="1px"
        maxWidth="400px"
      >
        <Stack gap={4}>
          <HStack gap={4}>
            <SkeletonCircle size="12" />
            <Stack gap={2} flex="1">
              <Skeleton height="16px" width="40%" />
              <Skeleton height="12px" width="60%" />
            </Stack>
          </HStack>
          <SkeletonText noOfLines={4} />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const ListSkeleton: Story = {
  render: () => (
    <Box p={4} bg="white" borderRadius="lg" borderWidth="1px">
      <Stack gap={4}>
        {Array.from({ length: 5 }).map((_, i) => (
          <HStack key={`list-skeleton-${i + 1}`} gap={4}>
            <SkeletonCircle size="10" />
            <Stack gap={2} flex="1">
              <Skeleton height="16px" width="30%" />
              <Skeleton height="12px" width="60%" />
            </Stack>
          </HStack>
        ))}
      </Stack>
    </Box>
  ),
};

export const ProfileSkeleton: Story = {
  render: () => (
    <Box p={6} bg="white" borderRadius="lg" borderWidth="1px" maxWidth="600px">
      <Stack gap={6}>
        {/* Header */}
        <HStack gap={4}>
          <SkeletonCircle size="20" />
          <Stack gap={2} flex="1">
            <Skeleton height="24px" width="40%" />
            <Skeleton height="16px" width="60%" />
          </Stack>
        </HStack>

        {/* Stats */}
        <HStack gap={6}>
          <Box flex="1">
            <Skeleton height="32px" width="50%" mb={2} />
            <Skeleton height="16px" width="70%" />
          </Box>
          <Box flex="1">
            <Skeleton height="32px" width="50%" mb={2} />
            <Skeleton height="16px" width="70%" />
          </Box>
          <Box flex="1">
            <Skeleton height="32px" width="50%" mb={2} />
            <Skeleton height="16px" width="70%" />
          </Box>
        </HStack>

        {/* Bio */}
        <SkeletonText noOfLines={4} />
      </Stack>
    </Box>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <Box p={4} bg="white" borderRadius="lg" borderWidth="1px">
      <Stack gap={3}>
        {/* Header */}
        <HStack gap={4} pb={3} borderBottomWidth="1px">
          <Skeleton height="16px" width="20%" />
          <Skeleton height="16px" width="30%" />
          <Skeleton height="16px" width="25%" />
          <Skeleton height="16px" width="25%" />
        </HStack>

        {/* Rows */}
        {Array.from({ length: 6 }).map((_, i) => (
          <HStack key={`table-skeleton-${i + 1}`} gap={4}>
            <Skeleton height="14px" width="20%" />
            <Skeleton height="14px" width="30%" />
            <Skeleton height="14px" width="25%" />
            <Skeleton height="14px" width="25%" />
          </HStack>
        ))}
      </Stack>
    </Box>
  ),
};

export const DashboardSkeleton: Story = {
  render: () => (
    <Stack gap={6}>
      {/* Header */}
      <Box>
        <Skeleton height="32px" width="300px" mb={2} />
        <Skeleton height="16px" width="400px" />
      </Box>

      {/* Stats Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
        gap={4}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <Box
            key={`stat-skeleton-${i + 1}`}
            p={4}
            bg="white"
            borderRadius="lg"
            borderWidth="1px"
          >
            <Stack gap={2}>
              <Skeleton height="12px" width="60%" />
              <Skeleton height="28px" width="40%" />
            </Stack>
          </Box>
        ))}
      </Box>

      {/* Chart */}
      <Box p={6} bg="white" borderRadius="lg" borderWidth="1px">
        <Skeleton height="20px" width="150px" mb={4} />
        <Skeleton height="300px" />
      </Box>
    </Stack>
  ),
};

export const WithBorderRadius: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontSize="sm" mb={2}>
          No border radius
        </Text>
        <Skeleton height="60px" borderRadius="none" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          Small border radius
        </Text>
        <Skeleton height="60px" borderRadius="sm" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          Medium border radius (default)
        </Text>
        <Skeleton height="60px" borderRadius="md" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          Large border radius
        </Text>
        <Skeleton height="60px" borderRadius="lg" />
      </Box>

      <Box>
        <Text fontSize="sm" mb={2}>
          Full border radius
        </Text>
        <Skeleton height="60px" borderRadius="full" />
      </Box>
    </Stack>
  ),
};

export const FormSkeleton: Story = {
  render: () => (
    <Box p={6} bg="white" borderRadius="lg" borderWidth="1px" maxWidth="500px">
      <Stack gap={5}>
        <Skeleton height="28px" width="150px" mb={2} />

        {Array.from({ length: 4 }).map((_, i) => (
          <Box key={`form-skeleton-${i + 1}`}>
            <Skeleton height="16px" width="100px" mb={2} />
            <Skeleton height="40px" borderRadius="md" />
          </Box>
        ))}

        <Skeleton height="44px" borderRadius="md" mt={2} />
      </Stack>
    </Box>
  ),
};
