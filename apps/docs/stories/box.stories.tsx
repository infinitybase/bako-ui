import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack, Text } from 'bako-ui';

const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Bako UI/Layout/Box',
  tags: ['autodocs'],
  argTypes: {
    bg: {
      control: 'text',
      description: 'Background color',
    },
    p: {
      control: 'text',
      description: 'Padding',
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', 'full'],
      description: 'Border radius',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box bg="red.500" p={4}>
      <Text>Basic Box with padding and background</Text>
    </Box>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Box p={6} border="2px solid" borderColor="border">
      <Text fontWeight="bold">Box with border</Text>
    </Box>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Box
      as="section"
      bg="green.50"
      p={4}
      borderRadius="md"
      _hover={{ bg: 'green.100', cursor: 'pointer' }}
      transition="all 0.2s"
    >
      <Text>Hover me!</Text>
    </Box>
  ),
};

export const Shadows: Story = {
  args: {
    shadow: 'md',
  },
  argTypes: {
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'inner'],
      description: 'Box shadow',
    },
  },
  render: (props) => (
    <Box bg="gray.600" p={4} shadow={props.shadow}>
      <Text fontSize="sm">Box With shadow</Text>
    </Box>
  ),
};

export const AsSemanticElement: Story = {
  render: () => (
    <Stack gap={4}>
      <Box as="article" bg="red.500" p={4} borderRadius="md">
        <Text>Box as article</Text>
      </Box>

      <Box as="section" bg="red.500" p={4} borderRadius="md">
        <Text>Box as section</Text>
      </Box>

      <Box as="header" bg="red.500" p={4} borderRadius="md">
        <Text>Box as header</Text>
      </Box>

      <Box as="footer" bg="red.500" p={4} borderRadius="md">
        <Text>Box as footer</Text>
      </Box>
    </Stack>
  ),
};
