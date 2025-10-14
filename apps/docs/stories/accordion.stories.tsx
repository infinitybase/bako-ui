import { Accordion } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion.Root> = {
  title: 'Bako UI/Disclosure/Accordion',
  component: Accordion.Root,
};

export default meta;
type Story = StoryObj<typeof Accordion.Root>;

const items = [
  {
    value: 'item-1',
    title: 'What is Bako UI?',
    content:
      'Bako UI is a React component library built on top of Chakra UI v3, providing a consistent and accessible design system.',
  },
  {
    value: 'item-2',
    title: 'How do I install it?',
    content:
      'You can install Bako UI using npm, yarn, or pnpm. Simply run the install command with the package name @bako/ui.',
  },
  {
    value: 'item-3',
    title: 'Is it free to use?',
    content:
      'Yes, Bako UI is completely free and open source. You can use it in both personal and commercial projects.',
  },
];

export const Default: Story = {
  render: () => (
    <Accordion.Root collapsible defaultValue={['item-1']}>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            {item.title}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion.Root multiple defaultValue={['item-1', 'item-2']}>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            {item.title}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h3 style={{ marginBottom: '0.5rem' }}>Size: {size}</h3>
          <Accordion.Root size={size} collapsible defaultValue={['item-1']}>
            {items.slice(0, 2).map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  {item.title}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['outline', 'subtle', 'enclosed', 'plain'] as const).map((variant) => (
        <div key={variant}>
          <h3 style={{ marginBottom: '0.5rem' }}>Variant: {variant}</h3>
          <Accordion.Root
            variant={variant}
            collapsible
            defaultValue={['item-1']}
          >
            {items.slice(0, 2).map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  {item.title}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithDisabledItem: Story = {
  render: () => (
    <Accordion.Root collapsible defaultValue={['item-1']}>
      <Accordion.Item value="item-1">
        <Accordion.ItemTrigger>
          Active Item
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            This item is active and can be toggled.
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-2" disabled>
        <Accordion.ItemTrigger>
          Disabled Item
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            This content cannot be accessed.
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.ItemTrigger>
          Another Active Item
          <Accordion.ItemIndicator />
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            This item is also active and can be toggled.
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const Collapsible: Story = {
  render: () => (
    <Accordion.Root collapsible defaultValue={['item-1']}>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            {item.title}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const WithCustomIndicator: Story = {
  render: () => (
    <Accordion.Root collapsible defaultValue={['item-1']}>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger>
            {item.title}
            <Accordion.ItemIndicator>
              <span style={{ fontSize: '1.2rem' }}>➕</span>
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const Nested: Story = {
  render: () => (
    <Accordion.Root collapsible defaultValue={['parent-1']}>
      <Accordion.Item value="parent-1">
        <Accordion.ItemTrigger>
          Parent Item 1<Accordion.ItemIndicator>▼</Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            <p style={{ marginBottom: '1rem' }}>
              This is a parent item that contains nested accordion.
            </p>
            <Accordion.Root collapsible>
              <Accordion.Item value="child-1">
                <Accordion.ItemTrigger>
                  Child Item 1
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>Nested content 1</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
              <Accordion.Item value="child-2">
                <Accordion.ItemTrigger>
                  Child Item 2
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>Nested content 2</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            </Accordion.Root>
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="parent-2">
        <Accordion.ItemTrigger>
          Parent Item 2<Accordion.ItemIndicator>▼</Accordion.ItemIndicator>
        </Accordion.ItemTrigger>
        <Accordion.ItemContent>
          <Accordion.ItemBody>
            Regular parent content without nesting.
          </Accordion.ItemBody>
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  ),
};

export const WithColorPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['blue', 'green', 'red', 'purple'] as const).map((color) => (
        <div key={color}>
          <h3 style={{ marginBottom: '0.5rem' }}>Color: {color}</h3>
          <Accordion.Root
            colorPalette={color}
            collapsible
            defaultValue={['item-1']}
          >
            {items.slice(0, 2).map((item) => (
              <Accordion.Item key={item.value} value={item.value}>
                <Accordion.ItemTrigger>
                  {item.title}
                  <Accordion.ItemIndicator />
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>
                  <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
                </Accordion.ItemContent>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      ))}
    </div>
  ),
};
