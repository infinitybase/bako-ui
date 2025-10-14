import { createListCollection } from '@chakra-ui/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Select from './select';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

const frameworks = createListCollection({
  items: [
    { label: 'React.js', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
});

describe('Select', () => {
  it('renders select with label and trigger', () => {
    renderWithChakra(
      <Select.Root collection={frameworks}>
        <Select.Label>Select framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Choose one" />
          </Select.Trigger>
        </Select.Control>
      </Select.Root>
    );

    expect(screen.getByText('Select framework')).toBeInTheDocument();
    expect(screen.getByText('Choose one')).toBeInTheDocument();
  });

  it('opens select menu on click', async () => {
    const user = userEvent.setup();

    renderWithChakra(
      <Select.Root collection={frameworks}>
        <Select.Control>
          <Select.Trigger data-testid="trigger">
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    );

    const trigger = screen.getByTestId('trigger');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('React.js')).toBeVisible();
      expect(screen.getByText('Vue.js')).toBeVisible();
    });
  });

  it('renders all items in the list', async () => {
    const user = userEvent.setup();

    renderWithChakra(
      <Select.Root collection={frameworks}>
        <Select.Control>
          <Select.Trigger data-testid="trigger">
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    );

    const trigger = screen.getByTestId('trigger');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('React.js')).toBeVisible();
      expect(screen.getByText('Vue.js')).toBeVisible();
      expect(screen.getByText('Angular')).toBeVisible();
      expect(screen.getByText('Svelte')).toBeVisible();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { unmount } = renderWithChakra(
        <Select.Root
          collection={frameworks}
          size={size}
          data-testid={`${size}-select`}
        >
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder={`${size} select`} />
            </Select.Trigger>
          </Select.Control>
        </Select.Root>
      );

      expect(screen.getByText(`${size} select`)).toBeInTheDocument();
      unmount();
    });
  });

  it('renders with different variants', () => {
    const variants = ['outline', 'subtle'] as const;

    variants.forEach((variant) => {
      const { unmount } = renderWithChakra(
        <Select.Root
          collection={frameworks}
          variant={variant}
          data-testid={`${variant}-select`}
        >
          <Select.Control>
            <Select.Trigger>
              <Select.ValueText placeholder={`${variant} select`} />
            </Select.Trigger>
          </Select.Control>
        </Select.Root>
      );

      expect(screen.getByText(`${variant} select`)).toBeInTheDocument();
      unmount();
    });
  });

  it('supports disabled state', () => {
    renderWithChakra(
      <Select.Root collection={frameworks} disabled>
        <Select.Control>
          <Select.Trigger data-testid="trigger">
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
        </Select.Control>
      </Select.Root>
    );

    const trigger = screen.getByTestId('trigger');
    expect(trigger).toBeDisabled();
  });

  it('supports invalid state', () => {
    renderWithChakra(
      <Select.Root collection={frameworks} invalid>
        <Select.Control data-testid="control">
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
        </Select.Control>
      </Select.Root>
    );

    const control = screen.getByTestId('control');
    expect(control).toHaveAttribute('data-invalid');
  });

  it('renders with Portal', () => {
    renderWithChakra(
      <Select.Root collection={frameworks}>
        <Select.Control>
          <Select.Trigger data-testid="trigger">
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
        </Select.Control>
        <Select.Portal>
          <Select.Positioner>
            <Select.Content>
              {frameworks.items.map((framework) => (
                <Select.Item item={framework} key={framework.value}>
                  {framework.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
    );

    expect(screen.getByTestId('trigger')).toBeInTheDocument();
  });

  it('supports multiple selection', async () => {
    const user = userEvent.setup();

    renderWithChakra(
      <Select.Root collection={frameworks} multiple>
        <Select.Control>
          <Select.Trigger data-testid="trigger">
            <Select.ValueText placeholder="Select frameworks" />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    );

    const trigger = screen.getByTestId('trigger');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('React.js')).toBeVisible();
    });

    const reactOption = screen.getByText('React.js');
    await user.click(reactOption);

    const vueOption = screen.getByText('Vue.js');
    await user.click(vueOption);

    // Multiple selection shows "Label, Label" format
    await waitFor(() => {
      const valueText = trigger.querySelector('[data-part="value-text"]');
      expect(valueText).toHaveTextContent('React.js, Vue.js');
    });
  });

  it('renders with item groups', async () => {
    const user = userEvent.setup();

    const groupedItems = createListCollection({
      items: [
        { label: 'React.js', value: 'react', category: 'Popular' },
        { label: 'Vue.js', value: 'vue', category: 'Popular' },
        { label: 'Angular', value: 'angular', category: 'Others' },
        { label: 'Svelte', value: 'svelte', category: 'Others' },
      ],
    });

    renderWithChakra(
      <Select.Root collection={groupedItems}>
        <Select.Control>
          <Select.Trigger data-testid="trigger">
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
        </Select.Control>
        <Select.Positioner>
          <Select.Content>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Popular</Select.ItemGroupLabel>
              <Select.Item item={groupedItems.items[0]}>React.js</Select.Item>
              <Select.Item item={groupedItems.items[1]}>Vue.js</Select.Item>
            </Select.ItemGroup>
            <Select.ItemGroup>
              <Select.ItemGroupLabel>Others</Select.ItemGroupLabel>
              <Select.Item item={groupedItems.items[2]}>Angular</Select.Item>
              <Select.Item item={groupedItems.items[3]}>Svelte</Select.Item>
            </Select.ItemGroup>
          </Select.Content>
        </Select.Positioner>
      </Select.Root>
    );

    const trigger = screen.getByTestId('trigger');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popular')).toBeVisible();
      expect(screen.getByText('Others')).toBeVisible();
    });
  });
});
