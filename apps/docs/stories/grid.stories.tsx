import { GridItem } from '@chakra-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import { Box, Grid, Text, VStack } from 'bako-ui';

const meta: Meta<typeof Grid> = {
  title: 'Bako UI/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    templateColumns: {
      control: 'text',
      description: 'Defines the columns of the grid',
    },
    templateRows: {
      control: 'text',
      description: 'Defines the rows of the grid',
    },
    gap: {
      control: 'number',
      description: 'The gap between grid items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Box bg="blue.100" h="20" p={4}>
        <Text>Item 1</Text>
      </Box>
      <Box bg="blue.100" h="20" p={4}>
        <Text>Item 2</Text>
      </Box>
      <Box bg="blue.100" h="20" p={4}>
        <Text>Item 3</Text>
      </Box>
    </Grid>
  ),
};

export const WithDifferentColumns: Story = {
  render: () => (
    <VStack gap={8} alignItems="stretch">
      <Box>
        <Text fontWeight="bold" mb={2}>
          2 Columns
        </Text>
        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
          <Box bg="purple.100" h="16" p={3}>
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="purple.100" h="16" p={3}>
            <Text fontSize="sm">2</Text>
          </Box>
        </Grid>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          3 Columns
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Box bg="green.100" h="16" p={3}>
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="green.100" h="16" p={3}>
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="green.100" h="16" p={3}>
            <Text fontSize="sm">3</Text>
          </Box>
        </Grid>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          4 Columns
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={4}>
          <Box bg="orange.100" h="16" p={3}>
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="orange.100" h="16" p={3}>
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="orange.100" h="16" p={3}>
            <Text fontSize="sm">3</Text>
          </Box>
          <Box bg="orange.100" h="16" p={3}>
            <Text fontSize="sm">4</Text>
          </Box>
        </Grid>
      </Box>
    </VStack>
  ),
};

export const WithGap: Story = {
  render: () => (
    <VStack gap={8} alignItems="stretch">
      <Box>
        <Text fontWeight="bold" mb={2}>
          Gap: 2
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          <Box bg="blue.100" h="16" />
          <Box bg="blue.100" h="16" />
          <Box bg="blue.100" h="16" />
        </Grid>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Gap: 4
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Box bg="blue.100" h="16" />
          <Box bg="blue.100" h="16" />
          <Box bg="blue.100" h="16" />
        </Grid>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Gap: 8
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <Box bg="blue.100" h="16" />
          <Box bg="blue.100" h="16" />
          <Box bg="blue.100" h="16" />
        </Grid>
      </Box>
    </VStack>
  ),
};

export const WithColumnSpan: Story = {
  render: () => (
    <Grid templateColumns="repeat(4, 1fr)" gap={6}>
      <GridItem colSpan={2}>
        <Box bg="purple.100" h="20" p={4}>
          <Text fontWeight="bold">colSpan: 2</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box bg="blue.100" h="20" p={4}>
          <Text fontSize="sm">1</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box bg="blue.100" h="20" p={4}>
          <Text fontSize="sm">1</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={1}>
        <Box bg="green.100" h="20" p={4}>
          <Text fontSize="sm">1</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={3}>
        <Box bg="orange.100" h="20" p={4}>
          <Text fontWeight="bold">colSpan: 3</Text>
        </Box>
      </GridItem>
    </Grid>
  ),
};

export const WithRowSpan: Story = {
  render: () => (
    <Grid
      h="400px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Box bg="purple.100" h="full" p={4}>
          <Text fontWeight="bold">rowSpan: 2</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box bg="blue.100" h="full" p={4}>
          <Text>colSpan: 2</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Box bg="green.100" h="full" p={4}>
          <Text>colSpan: 2</Text>
        </Box>
      </GridItem>
      <GridItem colSpan={4}>
        <Box bg="orange.100" h="full" p={4}>
          <Text fontWeight="bold">colSpan: 4</Text>
        </Box>
      </GridItem>
    </Grid>
  ),
};

export const WithTemplateAreas: Story = {
  render: () => (
    <Grid
      gap={4}
      templateAreas={`
        "header header header"
        "sidebar main main"
        "footer footer footer"
      `}
      templateColumns="1fr 2fr 1fr"
      templateRows="80px 1fr 60px"
      h="400px"
    >
      <GridItem bg="blue.100" area="header" p={4}>
        <Text fontWeight="bold">Header</Text>
      </GridItem>
      <GridItem bg="purple.100" area="sidebar" p={4}>
        <Text fontWeight="bold">Sidebar</Text>
      </GridItem>
      <GridItem bg="green.100" area="main" p={4}>
        <Text fontWeight="bold">Main Content</Text>
      </GridItem>
      <GridItem bg="orange.100" area="footer" p={4}>
        <Text fontWeight="bold">Footer</Text>
      </GridItem>
    </Grid>
  ),
};

export const WithAutoFlow: Story = {
  render: () => (
    <VStack gap={8} alignItems="stretch">
      <Box>
        <Text fontWeight="bold" mb={2}>
          Auto Flow: Row (default)
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <Box bg="blue.100" h="16" p={3}>
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="blue.100" h="16" p={3}>
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="blue.100" h="16" p={3}>
            <Text fontSize="sm">3</Text>
          </Box>
          <Box bg="blue.100" h="16" p={3}>
            <Text fontSize="sm">4</Text>
          </Box>
          <Box bg="blue.100" h="16" p={3}>
            <Text fontSize="sm">5</Text>
          </Box>
        </Grid>
      </Box>

      <Box>
        <Text fontWeight="bold" mb={2}>
          Auto Flow: Column
        </Text>
        <Grid templateRows="repeat(2, 1fr)" autoFlow="column" gap={4} h="150px">
          <Box bg="green.100" p={3}>
            <Text fontSize="sm">1</Text>
          </Box>
          <Box bg="green.100" p={3}>
            <Text fontSize="sm">2</Text>
          </Box>
          <Box bg="green.100" p={3}>
            <Text fontSize="sm">3</Text>
          </Box>
          <Box bg="green.100" p={3}>
            <Text fontSize="sm">4</Text>
          </Box>
          <Box bg="green.100" p={3}>
            <Text fontSize="sm">5</Text>
          </Box>
        </Grid>
      </Box>
    </VStack>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      gap={6}
    >
      <Box bg="blue.100" h="24" p={4}>
        <Text fontWeight="bold">1</Text>
        <Text fontSize="sm">Responsive item</Text>
      </Box>
      <Box bg="purple.100" h="24" p={4}>
        <Text fontWeight="bold">2</Text>
        <Text fontSize="sm">Responsive item</Text>
      </Box>
      <Box bg="green.100" h="24" p={4}>
        <Text fontWeight="bold">3</Text>
        <Text fontSize="sm">Responsive item</Text>
      </Box>
      <Box bg="orange.100" h="24" p={4}>
        <Text fontWeight="bold">4</Text>
        <Text fontSize="sm">Responsive item</Text>
      </Box>
      <Box bg="red.100" h="24" p={4}>
        <Text fontWeight="bold">5</Text>
        <Text fontSize="sm">Responsive item</Text>
      </Box>
      <Box bg="teal.100" h="24" p={4}>
        <Text fontWeight="bold">6</Text>
        <Text fontSize="sm">Responsive item</Text>
      </Box>
    </Grid>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Box
          key={item}
          borderWidth="1px"
          borderRadius="lg"
          p={6}
          bg="white"
          shadow="sm"
          _hover={{ shadow: 'md' }}
        >
          <Text fontWeight="bold" fontSize="lg" mb={2}>
            Card {item}
          </Text>
          <Text color="gray.600" fontSize="sm">
            This is a card using auto-fill to create a responsive grid layout.
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};
