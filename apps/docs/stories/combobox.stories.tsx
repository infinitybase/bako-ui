import type { Meta, StoryObj } from '@storybook/react';
import { Box, Combobox, createListCollection } from 'bako-ui';

const meta: Meta<typeof Combobox.Root> = {
  title: 'Bako UI/Form/Combobox',
  component: Combobox.Root,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Combobox.Root>;

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Solid', value: 'solid' },
    { label: 'Qwik', value: 'qwik' },
  ],
});

export const Default: Story = {
  render: () => (
    <Combobox.Root collection={frameworks}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            {frameworks.items.map((item) => (
              <Combobox.Item key={item.value} item={item}>
                <Combobox.ItemText>{item.label}</Combobox.ItemText>
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Combobox.Root key={size} collection={frameworks} size={size}>
          <Combobox.Label>Framework ({size})</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Select a framework" />
            <Combobox.Trigger />
          </Combobox.Control>
          <Combobox.Positioner>
            <Combobox.Content>
              {frameworks.items.map((item) => (
                <Combobox.Item key={item.value} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.Root>
      ))}
    </Box>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <Box display="flex" flexDirection="column" gap={4}>
      {(['outline', 'subtle'] as const).map((variant) => (
        <Combobox.Root key={variant} collection={frameworks} variant={variant}>
          <Combobox.Label>Framework ({variant})</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Select a framework" />
            <Combobox.Trigger />
          </Combobox.Control>
          <Combobox.Positioner>
            <Combobox.Content>
              {frameworks.items.map((item) => (
                <Combobox.Item key={item.value} item={item}>
                  <Combobox.ItemText>{item.label}</Combobox.ItemText>
                </Combobox.Item>
              ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Combobox.Root>
      ))}
    </Box>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Combobox.Root collection={frameworks} defaultValue={['react']}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {frameworks.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  ),
};

export const WithClearButton: Story = {
  render: () => (
    <Combobox.Root collection={frameworks} defaultValue={['react']}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.ClearTrigger />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {frameworks.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  ),
};

export const WithMultipleSelection: Story = {
  render: () => (
    <Combobox.Root collection={frameworks} multiple>
      <Combobox.Label>Frameworks (Multiple)</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select frameworks" />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {frameworks.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Combobox.Root collection={frameworks} disabled>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {frameworks.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  ),
};

export const WithInvalidState: Story = {
  render: () => (
    <Combobox.Root collection={frameworks} invalid>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {frameworks.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  ),
};

export const WithOptionGroups: Story = {
  render: () => {
    const groupedFrameworks = createListCollection({
      items: [
        { label: 'React', value: 'react', group: 'Popular' },
        { label: 'Vue', value: 'vue', group: 'Popular' },
        { label: 'Angular', value: 'angular', group: 'Popular' },
        { label: 'Svelte', value: 'svelte', group: 'Emerging' },
        { label: 'Solid', value: 'solid', group: 'Emerging' },
        { label: 'Qwik', value: 'qwik', group: 'Emerging' },
      ],
    });

    return (
      <Combobox.Root collection={groupedFrameworks}>
        <Combobox.Label>Framework</Combobox.Label>
        <Combobox.Control>
          <Combobox.Input placeholder="Select a framework" />
          <Combobox.Trigger />
        </Combobox.Control>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Popular</Combobox.ItemGroupLabel>
              {groupedFrameworks.items
                .filter((item) => item.group === 'Popular')
                .map((item) => (
                  <Combobox.Item key={item.value} item={item}>
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  </Combobox.Item>
                ))}
            </Combobox.ItemGroup>
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Emerging</Combobox.ItemGroupLabel>
              {groupedFrameworks.items
                .filter((item) => item.group === 'Emerging')
                .map((item) => (
                  <Combobox.Item key={item.value} item={item}>
                    <Combobox.ItemText>{item.label}</Combobox.ItemText>
                  </Combobox.Item>
                ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Combobox.Root>
    );
  },
};

export const WithCustomPlacement: Story = {
  render: () => (
    <Combobox.Root collection={frameworks} positioning={{ placement: 'top' }}>
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Select a framework" />
        <Combobox.Trigger />
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          {frameworks.items.map((item) => (
            <Combobox.Item key={item.value} item={item}>
              <Combobox.ItemText>{item.label}</Combobox.ItemText>
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  ),
};
