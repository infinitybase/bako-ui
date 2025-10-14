import { Box, Button, EmptyState, Stack } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof EmptyState.Root> = {
  title: 'Bako UI/Feedback/EmptyState',
  component: EmptyState.Root,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EmptyState.Root>;

export const Default: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>📭</EmptyState.Indicator>
        <EmptyState.Title>No messages</EmptyState.Title>
        <EmptyState.Description>
          You don't have any messages yet. Start a conversation to see messages
          here.
        </EmptyState.Description>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const WithoutIndicator: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Title>No results found</EmptyState.Title>
        <EmptyState.Description>
          Try adjusting your search or filter to find what you are looking for.
        </EmptyState.Description>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const TitleOnly: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Title>Nothing to show</EmptyState.Title>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const WithAction: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>📁</EmptyState.Indicator>
        <EmptyState.Title>No files uploaded</EmptyState.Title>
        <EmptyState.Description>
          Get started by uploading your first file.
        </EmptyState.Description>
        <Button mt={4}>Upload File</Button>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const WithMultipleActions: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>🔍</EmptyState.Indicator>
        <EmptyState.Title>No search results</EmptyState.Title>
        <EmptyState.Description>
          We couldn't find any results matching your search.
        </EmptyState.Description>
        <Stack direction="row" gap={2} mt={4}>
          <Button>Clear Search</Button>
          <Button variant="outline">Browse All</Button>
        </Stack>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const DifferentScenarios: Story = {
  render: () => (
    <Stack gap={8}>
      <Box borderWidth="1px" borderRadius="md" p={6}>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>🛒</EmptyState.Indicator>
            <EmptyState.Title>Your cart is empty</EmptyState.Title>
            <EmptyState.Description>
              Add items to your cart to continue shopping.
            </EmptyState.Description>
            <Button mt={4}>Start Shopping</Button>
          </EmptyState.Content>
        </EmptyState.Root>
      </Box>

      <Box borderWidth="1px" borderRadius="md" p={6}>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>⭐</EmptyState.Indicator>
            <EmptyState.Title>No favorites yet</EmptyState.Title>
            <EmptyState.Description>
              Items you favorite will appear here.
            </EmptyState.Description>
          </EmptyState.Content>
        </EmptyState.Root>
      </Box>

      <Box borderWidth="1px" borderRadius="md" p={6}>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>📊</EmptyState.Indicator>
            <EmptyState.Title>No data available</EmptyState.Title>
            <EmptyState.Description>
              Connect your data source to see insights.
            </EmptyState.Description>
            <Button mt={4}>Connect Data</Button>
          </EmptyState.Content>
        </EmptyState.Root>
      </Box>
    </Stack>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <Box
      borderWidth="2px"
      borderStyle="dashed"
      borderRadius="lg"
      p={12}
      bg="gray.50"
    >
      <EmptyState.Root>
        <EmptyState.Content>
          <EmptyState.Indicator fontSize="4xl">📤</EmptyState.Indicator>
          <EmptyState.Title fontSize="2xl">Drag & Drop Files</EmptyState.Title>
          <EmptyState.Description fontSize="lg" color="gray.600">
            Or click to browse files from your computer
          </EmptyState.Description>
          <Button mt={6} size="lg">
            Choose Files
          </Button>
        </EmptyState.Content>
      </EmptyState.Root>
    </Box>
  ),
};
