import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Heading, ScrollArea, Stack, Text } from 'bako-ui';

const meta: Meta<typeof ScrollArea.Root> = {
  component: ScrollArea.Root,
  title: 'Bako UI/Layout/ScrollArea',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ScrollArea.Root>;

export const Basic: Story = {
  render: () => (
    <ScrollArea.Root maxW="300px" maxH="200px" borderWidth="1px" rounded="md">
      <ScrollArea.Viewport>
        <Stack p={4} gap={2}>
          {Array.from({ length: 20 }, (_, i) => ({
            id: `item-${i}`,
            label: `Item ${i + 1}`,
          })).map((item) => (
            <Text key={item.id}>{item.label}</Text>
          ))}
        </Stack>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea.Root maxW="400px" borderWidth="1px" rounded="md">
      <ScrollArea.Viewport>
        <Box p={4} minW="800px">
          <Text>
            This is a very long line of text that will require horizontal
            scrolling to view completely. It demonstrates the horizontal scroll
            functionality of the ScrollArea component.
          </Text>
        </Box>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
};

export const BothDirections: Story = {
  render: () => (
    <ScrollArea.Root maxW="400px" maxH="300px" borderWidth="1px" rounded="md">
      <ScrollArea.Viewport>
        <Box p={4} minW="600px" minH="500px">
          <Heading size="md" mb={4}>
            Scrollable in Both Directions
          </Heading>
          <Stack gap={4}>
            {Array.from({ length: 15 }, (_, i) => ({
              id: `item-${i}`,
              label: `Item ${i + 1}`,
            })).map((item) => (
              <Text key={item.id}>
                {item.label} - This is a long line of text that extends beyond
                the container width
              </Text>
            ))}
          </Stack>
        </Box>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  ),
};

export const LongContent: Story = {
  render: () => (
    <ScrollArea.Root maxW="500px" maxH="400px" borderWidth="1px" rounded="md">
      <ScrollArea.Viewport>
        <Stack p={4} gap={4}>
          <Heading size="lg">Documentation</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
          <Heading size="md">Getting Started</Heading>
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Text>
          <Heading size="md">Features</Heading>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Text>
          <Heading size="md">Usage</Heading>
          <Text>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet.
          </Text>
          <Heading size="md">Examples</Heading>
          <Text>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </Text>
        </Stack>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
};

export const CodeBlock: Story = {
  render: () => (
    <ScrollArea.Root
      maxW="600px"
      maxH="300px"
      borderWidth="1px"
      rounded="md"
      bg="gray.950"
    >
      <ScrollArea.Viewport>
        <Box
          as="pre"
          p={4}
          fontSize="sm"
          fontFamily="mono"
          color="green.400"
          whiteSpace="pre"
        >
          {`import { ScrollArea } from 'bako-ui';

export default function Example() {
  return (
    <ScrollArea.Root maxW="400px" maxH="300px">
      <ScrollArea.Viewport>
        <div>Your scrollable content goes here</div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}`}
        </Box>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  ),
};

export const CompactList: Story = {
  render: () => (
    <ScrollArea.Root maxW="250px" maxH="180px" borderWidth="1px" rounded="md">
      <ScrollArea.Viewport>
        <Stack p={2} gap={1}>
          {Array.from({ length: 30 }, (_, i) => ({
            id: `user-${i}`,
            name: `User ${i + 1}`,
          })).map((user) => (
            <Box
              key={user.id}
              p={2}
              rounded="sm"
              _hover={{ bg: 'gray.100' }}
              cursor="pointer"
            >
              <Text fontSize="sm">{user.name}</Text>
            </Box>
          ))}
        </Stack>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
};

export const TableWithScrolling: Story = {
  render: () => (
    <ScrollArea.Root maxW="600px" maxH="300px" borderWidth="1px" rounded="md">
      <ScrollArea.Viewport>
        <Box as="table" w="full" fontSize="sm">
          <Box as="thead" bg="gray.100" position="sticky" top={0}>
            <Box as="tr">
              <Box as="th" p={2} textAlign="left">
                Name
              </Box>
              <Box as="th" p={2} textAlign="left">
                Email
              </Box>
              <Box as="th" p={2} textAlign="left">
                Role
              </Box>
              <Box as="th" p={2} textAlign="left">
                Status
              </Box>
            </Box>
          </Box>
          <Box as="tbody">
            {Array.from({ length: 20 }, (_, i) => ({
              id: `row-${i}`,
              name: `User ${i + 1}`,
              email: `user${i + 1}@example.com`,
              role: i % 3 === 0 ? 'Admin' : 'User',
              status: i % 2 === 0 ? 'Active' : 'Inactive',
            })).map((row) => (
              <Box as="tr" key={row.id} borderTopWidth="1px">
                <Box as="td" p={2}>
                  {row.name}
                </Box>
                <Box as="td" p={2}>
                  {row.email}
                </Box>
                <Box as="td" p={2}>
                  {row.role}
                </Box>
                <Box as="td" p={2}>
                  {row.status}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  ),
};

export const ChatMessages: Story = {
  render: () => (
    <ScrollArea.Root maxW="400px" maxH="400px" borderWidth="1px" rounded="md">
      <ScrollArea.Viewport>
        <Stack p={4} gap={3}>
          {Array.from({ length: 15 }, (_, i) => ({
            id: `message-${i}`,
            sender: i % 2 === 0 ? 'Alice' : 'Bob',
            message: `This is message ${i + 1} in the chat`,
            time: `${10 + i}:${(i * 3) % 60}`,
          })).map((msg) => (
            <Box
              key={msg.id}
              alignSelf={msg.sender === 'Alice' ? 'flex-start' : 'flex-end'}
              maxW="70%"
            >
              <Box
                p={3}
                rounded="lg"
                bg={msg.sender === 'Alice' ? 'blue.100' : 'green.100'}
              >
                <Text fontWeight="bold" fontSize="sm">
                  {msg.sender}
                </Text>
                <Text fontSize="sm">{msg.message}</Text>
                <Text fontSize="xs" color="gray.600" mt={1}>
                  {msg.time}
                </Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  ),
};
