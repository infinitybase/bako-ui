import { Tabs } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tabs.Root> = {
  title: 'Bako UI/Disclosure/Tabs',
  component: Tabs.Root,
};

export default meta;
type Story = StoryObj<typeof Tabs.Root>;

const tabItems = [
  {
    value: 'overview',
    label: 'Overview',
    content: 'Overview content goes here',
  },
  {
    value: 'features',
    label: 'Features',
    content: 'Features content goes here',
  },
  { value: 'pricing', label: 'Pricing', content: 'Pricing content goes here' },
];

export const Default: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        {tabItems.map((item) => (
          <Tabs.Trigger key={item.value} value={item.value}>
            {item.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {tabItems.map((item) => (
        <Tabs.Content key={item.value} value={item.value}>
          <p style={{ padding: '1rem' }}>{item.content}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h3 style={{ marginBottom: '0.5rem' }}>Size: {size}</h3>
          <Tabs.Root size={size} defaultValue="overview">
            <Tabs.List>
              {tabItems.map((item) => (
                <Tabs.Trigger key={item.value} value={item.value}>
                  {item.label}
                </Tabs.Trigger>
              ))}
              <Tabs.Indicator />
            </Tabs.List>
            {tabItems.map((item) => (
              <Tabs.Content key={item.value} value={item.value}>
                <p style={{ padding: '1rem' }}>{item.content}</p>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['line', 'subtle', 'enclosed', 'outline', 'plain'] as const).map(
        (variant) => (
          <div key={variant}>
            <h3 style={{ marginBottom: '0.5rem' }}>Variant: {variant}</h3>
            <Tabs.Root variant={variant} defaultValue="overview">
              <Tabs.List>
                {tabItems.map((item) => (
                  <Tabs.Trigger key={item.value} value={item.value}>
                    {item.label}
                  </Tabs.Trigger>
                ))}
                <Tabs.Indicator />
              </Tabs.List>
              {tabItems.map((item) => (
                <Tabs.Content key={item.value} value={item.value}>
                  <p style={{ padding: '1rem' }}>{item.content}</p>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>
        )
      )}
    </div>
  ),
};

export const WithColorPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['blue', 'green', 'red', 'purple'] as const).map((color) => (
        <div key={color}>
          <h3 style={{ marginBottom: '0.5rem' }}>Color: {color}</h3>
          <Tabs.Root colorPalette={color} defaultValue="overview">
            <Tabs.List>
              {tabItems.map((item) => (
                <Tabs.Trigger key={item.value} value={item.value}>
                  {item.label}
                </Tabs.Trigger>
              ))}
              <Tabs.Indicator />
            </Tabs.List>
            {tabItems.map((item) => (
              <Tabs.Content key={item.value} value={item.value}>
                <p style={{ padding: '1rem' }}>{item.content}</p>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      ))}
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs.Root orientation="vertical" defaultValue="overview">
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Tabs.List>
          {tabItems.map((item) => (
            <Tabs.Trigger key={item.value} value={item.value}>
              {item.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
        <div style={{ flex: 1 }}>
          {tabItems.map((item) => (
            <Tabs.Content key={item.value} value={item.value}>
              <p style={{ padding: '1rem' }}>{item.content}</p>
            </Tabs.Content>
          ))}
        </div>
      </div>
    </Tabs.Root>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <Tabs.Root defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="features">Features</Tabs.Trigger>
        <Tabs.Trigger value="pricing" disabled>
          Pricing (Disabled)
        </Tabs.Trigger>
        <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="overview">
        <p style={{ padding: '1rem' }}>Overview content</p>
      </Tabs.Content>
      <Tabs.Content value="features">
        <p style={{ padding: '1rem' }}>Features content</p>
      </Tabs.Content>
      <Tabs.Content value="pricing">
        <p style={{ padding: '1rem' }}>Pricing content (not accessible)</p>
      </Tabs.Content>
      <Tabs.Content value="contact">
        <p style={{ padding: '1rem' }}>Contact content</p>
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const Fitted: Story = {
  render: () => (
    <Tabs.Root fitted defaultValue="overview">
      <Tabs.List>
        {tabItems.map((item) => (
          <Tabs.Trigger key={item.value} value={item.value}>
            {item.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {tabItems.map((item) => (
        <Tabs.Content key={item.value} value={item.value}>
          <p style={{ padding: '1rem' }}>{item.content}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  ),
};

export const WithJustify: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['start', 'center', 'end'] as const).map((justify) => (
        <div key={justify}>
          <h3 style={{ marginBottom: '0.5rem' }}>Justify: {justify}</h3>
          <Tabs.Root justify={justify} defaultValue="overview">
            <Tabs.List>
              {tabItems.map((item) => (
                <Tabs.Trigger key={item.value} value={item.value}>
                  {item.label}
                </Tabs.Trigger>
              ))}
              <Tabs.Indicator />
            </Tabs.List>
            {tabItems.map((item) => (
              <Tabs.Content key={item.value} value={item.value}>
                <p style={{ padding: '1rem' }}>{item.content}</p>
              </Tabs.Content>
            ))}
          </Tabs.Root>
        </div>
      ))}
    </div>
  ),
};

export const ManualActivation: Story = {
  render: () => (
    <Tabs.Root activationMode="manual" defaultValue="overview">
      <Tabs.List>
        {tabItems.map((item) => (
          <Tabs.Trigger key={item.value} value={item.value}>
            {item.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {tabItems.map((item) => (
        <Tabs.Content key={item.value} value={item.value}>
          <p style={{ padding: '1rem' }}>
            Manual activation mode - tabs are activated only when clicked or
            Enter is pressed
          </p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  ),
};

export const LazyMount: Story = {
  render: () => (
    <Tabs.Root lazyMount defaultValue="overview">
      <Tabs.List>
        {tabItems.map((item) => (
          <Tabs.Trigger key={item.value} value={item.value}>
            {item.label}
          </Tabs.Trigger>
        ))}
        <Tabs.Indicator />
      </Tabs.List>
      {tabItems.map((item) => (
        <Tabs.Content key={item.value} value={item.value}>
          <p style={{ padding: '1rem' }}>
            {item.content} - Content is only mounted when tab becomes active
          </p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  ),
};
