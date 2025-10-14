import { Box, Heading, Image, Stack, Text, VStack } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

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
  render: () => (
    <Image src="https://via.placeholder.com/400x300" alt="Placeholder image" />
  ),
};

export const WithBorderRadius: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          Rounded (md)
        </Text>
        <Image
          src="https://via.placeholder.com/300x200"
          alt="Rounded image"
          borderRadius="md"
        />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Rounded (lg)
        </Text>
        <Image
          src="https://via.placeholder.com/300x200"
          alt="Rounded image"
          borderRadius="lg"
        />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Fully Rounded
        </Text>
        <Image
          src="https://via.placeholder.com/200x200"
          alt="Fully rounded image"
          borderRadius="full"
          width="200px"
          height="200px"
        />
      </Box>
    </Stack>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <VStack align="start" gap={4}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          Small (200x150)
        </Text>
        <Image
          src="https://via.placeholder.com/200x150"
          alt="Small image"
          borderRadius="md"
        />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Medium (400x300)
        </Text>
        <Image
          src="https://via.placeholder.com/400x300"
          alt="Medium image"
          borderRadius="md"
        />
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Large (600x400)
        </Text>
        <Image
          src="https://via.placeholder.com/600x400"
          alt="Large image"
          borderRadius="md"
        />
      </Box>
    </VStack>
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
            src="https://via.placeholder.com/600x400"
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
            src="https://via.placeholder.com/600x400"
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
      maxWidth="400px"
      bg="white"
      borderRadius="lg"
      borderWidth="1px"
      overflow="hidden"
    >
      <Image
        src="https://via.placeholder.com/400x250"
        alt="Card image"
        width="100%"
        height="250px"
        objectFit="cover"
      />

      <Box p={4}>
        <Heading size="md" mb={2}>
          Image Card
        </Heading>
        <Text fontSize="sm" color="gray.600">
          This is a card with an image at the top and content below.
        </Text>
      </Box>
    </Box>
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text fontWeight="bold" mb={2}>
          Placeholder image
        </Text>
        <Image
          src="https://via.placeholder.com/300x200/gray/white?text=Placeholder+Image"
          alt="Placeholder image"
          borderRadius="md"
        />
      </Box>
    </Stack>
  ),
};

export const Gallery: Story = {
  render: () => (
    <Box>
      <Heading size="lg" mb={4}>
        Image Gallery
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <Box
            key={`gallery-${i + 1}`}
            overflow="hidden"
            borderRadius="md"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
          >
            <Image
              src={`https://via.placeholder.com/300x200/${i % 2 === 0 ? 'blue' : 'green'}/white?text=Image+${i + 1}`}
              alt={`Gallery image ${i + 1}`}
              width="100%"
              height="200px"
              objectFit="cover"
            />
          </Box>
        ))}
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
          src="https://via.placeholder.com/40x40/blue/white?text=A"
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
          src="https://via.placeholder.com/64x64/green/white?text=B"
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
          src="https://via.placeholder.com/96x96/red/white?text=C"
          alt="Large avatar"
          borderRadius="full"
          width="96px"
          height="96px"
        />
      </Box>
    </Stack>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Stack gap={4}>
      <Image
        src="https://via.placeholder.com/300x200"
        alt="Image with border"
        borderRadius="md"
        borderWidth="2px"
        borderColor="gray.300"
      />

      <Image
        src="https://via.placeholder.com/300x200"
        alt="Image with colored border"
        borderRadius="md"
        borderWidth="4px"
        borderColor="blue.100"
      />
    </Stack>
  ),
};

export const LazyLoading: Story = {
  render: () => (
    <Stack gap={4}>
      <Text fontWeight="bold">Lazy loaded images (scroll to load)</Text>
      {Array.from({ length: 5 }).map((_, i) => (
        <Box key={`lazy-${i + 1}`}>
          <Text fontSize="sm" color="gray.600" mb={2}>
            Image {i + 1}
          </Text>
          <Image
            src={`https://via.placeholder.com/400x300?text=Lazy+Image+${i + 1}`}
            alt={`Lazy image ${i + 1}`}
            borderRadius="md"
            loading="lazy"
          />
        </Box>
      ))}
    </Stack>
  ),
};
