import { LinkBox } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Heading, LinkOverlay, Text, VStack } from 'bako-ui';

const meta: Meta<typeof LinkOverlay> = {
  title: 'Bako UI/Typography/LinkOverlay',
  component: LinkOverlay,
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'text',
      description: 'The URL to link to',
    },
  },
};

export default meta;
type Story = StoryObj<typeof LinkOverlay>;

export const Default: Story = {
  render: () => (
    <LinkBox
      as="article"
      maxW="sm"
      p={5}
      borderWidth="1px"
      rounded="md"
      _hover={{ shadow: 'lg' }}
    >
      <Heading size="md" mb={2}>
        <LinkOverlay href="https://example.com">Article Title</LinkOverlay>
      </Heading>
      <Text>
        This entire card is clickable thanks to LinkOverlay. The link is
        semantically associated with the heading.
      </Text>
    </LinkBox>
  ),
};

export const WithImage: Story = {
  render: () => (
    <LinkBox
      as="article"
      maxW="sm"
      borderWidth="1px"
      rounded="md"
      overflow="hidden"
      _hover={{ shadow: 'lg' }}
    >
      <Box bg="gray.200" h="200px" />
      <Box p={5}>
        <Heading size="md" mb={2}>
          <LinkOverlay href="https://example.com">Card with Image</LinkOverlay>
        </Heading>
        <Text>The entire card including the image area is clickable.</Text>
      </Box>
    </LinkBox>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <VStack gap={4} alignItems="stretch">
      <LinkBox
        as="article"
        p={5}
        borderWidth="1px"
        rounded="md"
        _hover={{ shadow: 'lg', borderColor: 'blue.500' }}
      >
        <Heading size="sm" mb={2}>
          <LinkOverlay href="https://example.com/article1">
            First Article
          </LinkOverlay>
        </Heading>
        <Text fontSize="sm">
          Click anywhere on this card to navigate to the first article.
        </Text>
      </LinkBox>

      <LinkBox
        as="article"
        p={5}
        borderWidth="1px"
        rounded="md"
        _hover={{ shadow: 'lg', borderColor: 'green.500' }}
      >
        <Heading size="sm" mb={2}>
          <LinkOverlay href="https://example.com/article2">
            Second Article
          </LinkOverlay>
        </Heading>
        <Text fontSize="sm">
          Click anywhere on this card to navigate to the second article.
        </Text>
      </LinkBox>

      <LinkBox
        as="article"
        p={5}
        borderWidth="1px"
        rounded="md"
        _hover={{ shadow: 'lg', borderColor: 'purple.500' }}
      >
        <Heading size="sm" mb={2}>
          <LinkOverlay href="https://example.com/article3">
            Third Article
          </LinkOverlay>
        </Heading>
        <Text fontSize="sm">
          Click anywhere on this card to navigate to the third article.
        </Text>
      </LinkBox>
    </VStack>
  ),
};

export const ExternalLink: Story = {
  render: () => (
    <LinkBox
      as="article"
      maxW="sm"
      p={5}
      borderWidth="1px"
      rounded="md"
      _hover={{ shadow: 'lg' }}
    >
      <Heading size="md" mb={2}>
        <LinkOverlay href="https://example.com" target="_blank">
          External Article →
        </LinkOverlay>
      </Heading>
      <Text>This card links to an external site and opens in a new tab.</Text>
    </LinkBox>
  ),
};

export const WithMetadata: Story = {
  render: () => (
    <LinkBox
      as="article"
      maxW="sm"
      p={5}
      borderWidth="1px"
      rounded="md"
      _hover={{ shadow: 'lg' }}
    >
      <Text fontSize="xs" color="gray.500" mb={1}>
        Technology • 5 min read
      </Text>
      <Heading size="md" mb={2}>
        <LinkOverlay href="https://example.com">
          Understanding LinkOverlay
        </LinkOverlay>
      </Heading>
      <Text mb={3}>
        Learn how to create accessible card components that are fully clickable
        using LinkOverlay and LinkBox.
      </Text>
      <Text fontSize="sm" color="gray.600">
        By John Doe • Jan 15, 2024
      </Text>
    </LinkBox>
  ),
};

export const ColoredCards: Story = {
  render: () => (
    <VStack gap={4} alignItems="stretch">
      <LinkBox
        as="article"
        p={5}
        bg="blue.50"
        borderWidth="1px"
        borderColor="blue.200"
        rounded="md"
        _hover={{ shadow: 'lg', bg: 'blue.100' }}
      >
        <Heading size="sm" mb={2} color="blue.700">
          <LinkOverlay href="https://example.com">Blue Themed Card</LinkOverlay>
        </Heading>
        <Text color="blue.600">This card has a blue color theme.</Text>
      </LinkBox>

      <LinkBox
        as="article"
        p={5}
        bg="green.50"
        borderWidth="1px"
        borderColor="green.200"
        rounded="md"
        _hover={{ shadow: 'lg', bg: 'green.100' }}
      >
        <Heading size="sm" mb={2} color="green.700">
          <LinkOverlay href="https://example.com">
            Green Themed Card
          </LinkOverlay>
        </Heading>
        <Text color="green.600">This card has a green color theme.</Text>
      </LinkBox>
    </VStack>
  ),
};
