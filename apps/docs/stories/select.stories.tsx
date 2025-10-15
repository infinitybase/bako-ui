import type { Meta, StoryObj } from '@storybook/react';
import { createListCollection, Select, Stack } from 'bako-ui';

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
});

const meta: Meta<typeof Select.Root> = {
  component: Select.Root,
  title: 'Bako UI/Form/Select',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Select size',
    },
    variant: {
      control: 'select',
      options: ['outline', 'subtle'],
      description: 'Select variant',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    invalid: {
      control: 'boolean',
      description: 'Invalid state',
    },
    multiple: {
      control: 'boolean',
      description: 'Multiple selection',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select.Root>;

export const Default: Story = {
  render: () => (
    <Select.Root collection={frameworks} size="sm" width="320px">
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Portal>
      <Select.HiddenSelect />
    </Select.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack gap={4}>
      {(['xs', 'sm', 'md', 'lg'] as const).map((size) => (
        <Select.Root
          key={size}
          collection={frameworks}
          size={size}
          width="320px"
        >
          <Select.Label>Size: {size}</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select framework" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Select.Portal>
            <Select.Positioner>
              <Select.Content>
                {frameworks.items.map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Portal>
          <Select.HiddenSelect />
        </Select.Root>
      ))}
    </Stack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack gap={4}>
      {(['outline', 'subtle'] as const).map((variant) => (
        <Select.Root
          key={variant}
          collection={frameworks}
          variant={variant}
          size="sm"
          width="320px"
        >
          <Select.Label>Variant: {variant}</Select.Label>
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder="Select framework" />
            </Select.Trigger>
            <Select.IndicatorGroup>
              <Select.Indicator />
            </Select.IndicatorGroup>
          </Select.Control>
          <Select.Portal>
            <Select.Positioner>
              <Select.Content>
                {frameworks.items.map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Positioner>
          </Select.Portal>
          <Select.HiddenSelect />
        </Select.Root>
      ))}
    </Stack>
  ),
};

export const DefaultValue: Story = {
  render: () => (
    <Select.Root
      collection={frameworks}
      size="sm"
      width="320px"
      defaultValue={['react']}
    >
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Portal>
      <Select.HiddenSelect />
    </Select.Root>
  ),
};

export const ClearButton: Story = {
  render: () => (
    <Select.Root
      collection={frameworks}
      size="sm"
      width="320px"
      defaultValue={['react']}
    >
      <Select.Label>Select framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Portal>
      <Select.HiddenSelect />
    </Select.Root>
  ),
};

export const MultipleSelection: Story = {
  render: () => (
    <Select.Root collection={frameworks} size="sm" width="320px" multiple>
      <Select.Label>Select frameworks (multiple)</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select frameworks" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Portal>
      <Select.HiddenSelect />
    </Select.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select.Root collection={frameworks} size="sm" width="320px" disabled>
      <Select.Label>Select framework (disabled)</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Portal>
      <Select.HiddenSelect />
    </Select.Root>
  ),
};

export const InvalidState: Story = {
  render: () => (
    <Select.Root collection={frameworks} size="sm" width="320px" invalid>
      <Select.Label>Select framework (invalid)</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Portal>
      <Select.HiddenSelect />
    </Select.Root>
  ),
};

export const OptionGroups: Story = {
  render: () => {
    const groupedItems = createListCollection({
      items: [
        { label: 'React.js', value: 'react', category: 'Popular' },
        { label: 'Vue.js', value: 'vue', category: 'Popular' },
        { label: 'Angular', value: 'angular', category: 'Others' },
        { label: 'Svelte', value: 'svelte', category: 'Others' },
        { label: 'Ember.js', value: 'ember', category: 'Others' },
      ],
    });

    return (
      <Select.Root collection={groupedItems} size="sm" width="320px">
        <Select.Label>Select framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.IndicatorGroup>
            <Select.Indicator />
          </Select.IndicatorGroup>
        </Select.Control>
        <Select.Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Popular</Select.ItemGroupLabel>
                {groupedItems.items.slice(0, 2).map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>

              <Select.ItemGroup>
                <Select.ItemGroupLabel>Others</Select.ItemGroupLabel>
                {groupedItems.items.slice(2).map((framework) => (
                  <Select.Item item={framework} key={framework.value}>
                    {framework.label}
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Select.Portal>
        <Select.HiddenSelect />
      </Select.Root>
    );
  },
};

export const CustomPlacement: Story = {
  render: () => (
    <Select.Root
      collection={frameworks}
      size="sm"
      width="320px"
      positioning={{ placement: 'top', flip: false }}
    >
      <Select.Label>Select framework (opens upward)</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select framework" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Select.Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Portal>
      <Select.HiddenSelect />
    </Select.Root>
  ),
};
