import type { Meta, StoryObj } from '@storybook/react';
import { Box, Heading, Image, Stack, Text } from 'bako-ui';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Bako UI/Media/Image',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: () => <Image src="/monkees-56.png" alt="Placeholder image" />,
};

export const WithBorderRadius: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          Rounded (md)
        </Text>
        <Image src="/monkees-56.png" alt="Rounded image" borderRadius="md" />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Rounded (lg)
        </Text>
        <Image src="/monkees-56.png" alt="Rounded image" borderRadius="lg" />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Fully Rounded
        </Text>
        <Image
          src="/monkees-56.png"
          alt="Fully rounded image"
          borderRadius="full"
          width="200px"
          height="200px"
        />
      </Box>
    </Stack>
  ),
};

export const WithObjectFit: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          Cover (fills container)
        </Text>
        <Box width="300px" height="200px" bg="gray.100" borderRadius="md">
          <Image
            src="/monkees-56.png"
            alt="Cover image"
            width="100%"
            height="100%"
            objectFit="cover"
            borderRadius="md"
          />
        </Box>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Contain (fits inside container)
        </Text>
        <Box width="300px" height="200px" bg="gray.100" borderRadius="md">
          <Image
            src="/monkees-56.png"
            alt="Contain image"
            width="100%"
            height="100%"
            objectFit="contain"
            borderRadius="md"
          />
        </Box>
      </Box>
    </Stack>
  ),
};

export const InCard: Story = {
  render: () => (
    <Box
      maxWidth="300px"
      bg="fg"
      borderRadius="lg"
      borderWidth="1px"
      overflow="hidden"
    >
      <Image
        src="/monkees-56.png"
        alt="Card image"
        aspectRatio={4 / 3}
        width="100%"
        height="auto"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading size="md" mb={2} color="gray.600">
          Image Card
        </Heading>
        <Text fontSize="sm" color="gray.400">
          This is a card with an image at the top and content below.
        </Text>
      </Box>
    </Box>
  ),
};

export const Avatar: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          Small Avatar (40px)
        </Text>
        <Image
          src="/monkees-56.png"
          alt="Small avatar"
          borderRadius="full"
          width="40px"
          height="40px"
        />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Medium Avatar (64px)
        </Text>
        <Image
          src="/monkees-56.png"
          alt="Medium avatar"
          borderRadius="full"
          width="64px"
          height="64px"
        />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Large Avatar (96px)
        </Text>
        <Image
          src="/monkees-56.png"
          alt="Large avatar"
          borderRadius="full"
          width="96px"
          height="96px"
        />
      </Box>
    </Stack>
  ),
};

export const LazyLoading: Story = {
  render: () => (
    <Stack gap={4}>
      <Text fontWeight="bold">Lazy loaded images (scroll to load)</Text>
      {Array.from({ length: 10 }).map((_, i) => (
        <Box key={`lazy-${i + 1}`}>
          <Text fontSize="sm" color="fg" mb={2}>
            Image {i + 1}
          </Text>
          <Image
            src={`https://picsum.photos/seed/${i + 1}/600/400`}
            alt={`Lazy image ${i + 1}`}
            borderRadius="md"
            loading="lazy"
          />
        </Box>
      ))}
    </Stack>
  ),
};
