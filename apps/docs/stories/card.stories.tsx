import type { Meta, StoryObj } from '@storybook/react';
import { Box, Card, Image, Stack, Text } from 'bako-ui';

const meta: Meta<typeof Card.Root> = {
  component: Card.Root,
  title: 'Bako UI/Data Display/Card',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outline', 'subtle'],
      description: 'Card variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Card size',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card.Root>;

export const Default: Story = {
  render: () => (
    <Card.Root>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description or subtitle</Card.Description>
      </Card.Header>
      <Card.Body>
        <Text>
          This is a default card with header, body content and composition
          pattern.
        </Text>
      </Card.Body>
      <Card.Footer>
        <Text>This is a footer</Text>
      </Card.Footer>
    </Card.Root>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={4}>
      <Card.Root variant="subtle">
        <Card.Header>
          <Card.Title>Subtle</Card.Title>
        </Card.Header>
        <Card.Body>
          <Text fontSize="sm">Card with background</Text>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="elevated">
        <Card.Header>
          <Card.Title>Elevated</Card.Title>
        </Card.Header>
        <Card.Body>
          <Text fontSize="sm">Card with shadow</Text>
        </Card.Body>
      </Card.Root>

      <Card.Root variant="outline">
        <Card.Header>
          <Card.Title>Outline</Card.Title>
        </Card.Header>
        <Card.Body>
          <Text fontSize="sm">Card with border</Text>
        </Card.Body>
      </Card.Root>
    </Stack>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <Stack gap={4}>
      <Card.Root size="sm">
        <Card.Header>
          <Card.Title>Small Card</Card.Title>
        </Card.Header>
        <Card.Body>
          <Text fontSize="sm">This is a small sized card</Text>
        </Card.Body>
      </Card.Root>

      <Card.Root size="md">
        <Card.Header>
          <Card.Title>Medium Card</Card.Title>
        </Card.Header>
        <Card.Body>
          <Text>This is a medium sized card (default)</Text>
        </Card.Body>
      </Card.Root>

      <Card.Root size="lg">
        <Card.Header>
          <Card.Title>Large Card</Card.Title>
        </Card.Header>
        <Card.Body>
          <Text fontSize="lg">This is a large sized card</Text>
        </Card.Body>
      </Card.Root>
    </Stack>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card.Root variant="elevated" maxWidth="400px">
      <Box borderRadius="md">
        <Image
          src="https://picsum.photos/200/400"
          alt="Random image"
          width="full"
          height="auto"
          aspectRatio="16/9"
        />
      </Box>
      <Card.Header>
        <Card.Title>Card with Image</Card.Title>
      </Card.Header>
      <Card.Body>
        <Text fontSize="sm" color="gray.600">
          This card includes an image placeholder at the top.
        </Text>
      </Card.Body>
    </Card.Root>
  ),
};
