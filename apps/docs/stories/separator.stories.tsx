import { Box, Heading, HStack, Separator, Stack, Text } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Separator> = {
  component: Separator,
  title: 'Bako UI/Layout/Separator',
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Separator orientation',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <Box>
      <Text>Content above</Text>
      <Separator my={4} />
      <Text>Content below</Text>
    </Box>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack gap={0}>
      <Box p={4}>
        <Heading size="sm">Section 1</Heading>
        <Text>Content for the first section</Text>
      </Box>

      <Separator />

      <Box p={4}>
        <Heading size="sm">Section 2</Heading>
        <Text>Content for the second section</Text>
      </Box>

      <Separator />

      <Box p={4}>
        <Heading size="sm">Section 3</Heading>
        <Text>Content for the third section</Text>
      </Box>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <HStack height="100px" gap={0} justifyContent="space-evenly">
      <Box p={4} flex="1">
        <Text>Left</Text>
      </Box>

      <Separator orientation="vertical" h="full" />

      <Box p={4} flex="1">
        <Text>Center</Text>
      </Box>

      <Separator orientation="vertical" h="full" />

      <Box p={4} flex="1">
        <Text>Right</Text>
      </Box>
    </HStack>
  ),
};

export const Color: Story = {
  args: {
    borderColor: 'red',
  },
  argTypes: {
    borderColor: {
      control: 'text',
    },
  },
  render: (props) => (
    <Stack gap={4}>
      <Box>
        <Separator my={2} borderColor={props.borderColor} />
      </Box>
    </Stack>
  ),
};

export const Thickness: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text>Thin separator (1px - default)</Text>
        <Separator my={2} borderWidth="1px" />
        <Text>Content below</Text>
      </Box>

      <Box>
        <Text>Medium separator (2px)</Text>
        <Separator my={2} borderWidth="2px" />
        <Text>Content below</Text>
      </Box>

      <Box>
        <Text>Thick separator (4px)</Text>
        <Separator my={2} borderWidth="4px" />
        <Text>Content below</Text>
      </Box>
    </Stack>
  ),
};

export const DashedAndDotted: Story = {
  render: () => (
    <Stack gap={4}>
      <Box>
        <Text>Solid separator (default)</Text>
        <Separator my={2} />
        <Text>Content below</Text>
      </Box>

      <Box>
        <Text>Dashed separator</Text>
        <Separator my={2} borderStyle="dashed" />
        <Text>Content below</Text>
      </Box>

      <Box>
        <Text>Dotted separator</Text>
        <Separator my={2} borderStyle="dotted" />
        <Text>Content below</Text>
      </Box>
    </Stack>
  ),
};
