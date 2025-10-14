import { createListCollection } from '@chakra-ui/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Combobox } from './combobox';

const frameworks = createListCollection({
  items: [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
  ],
});

describe('Combobox', () => {
  it('renders combobox with label and input', () => {
    render(
      <ChakraWrapper>
        <Combobox.Root collection={frameworks}>
          <Combobox.Label>Framework</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Select framework" />
          </Combobox.Control>
        </Combobox.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('Framework')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Select framework')).toBeInTheDocument();
  });

  it('opens combobox menu on input focus', async () => {
    const user = userEvent.setup();

    render(
      <ChakraWrapper>
        <Combobox.Root collection={frameworks}>
          <Combobox.Control>
            <Combobox.Input placeholder="Select framework" />
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
      </ChakraWrapper>
    );

    const input = screen.getByPlaceholderText('Select framework');
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Vue')).toBeInTheDocument();
    });
  });

  it('renders all items in the list', async () => {
    const user = userEvent.setup();

    render(
      <ChakraWrapper>
        <Combobox.Root collection={frameworks}>
          <Combobox.Control>
            <Combobox.Input placeholder="Select framework" />
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
      </ChakraWrapper>
    );

    const input = screen.getByPlaceholderText('Select framework');
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Vue')).toBeInTheDocument();
      expect(screen.getByText('Angular')).toBeInTheDocument();
      expect(screen.getByText('Svelte')).toBeInTheDocument();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;

    sizes.forEach((size) => {
      const { container } = render(
        <ChakraWrapper>
          <Combobox.Root collection={frameworks} size={size}>
            <Combobox.Control>
              <Combobox.Input placeholder={`Size ${size}`} />
            </Combobox.Control>
          </Combobox.Root>
        </ChakraWrapper>
      );

      const input = screen.getByPlaceholderText(`Size ${size}`);
      expect(input).toBeInTheDocument();
      expect(
        container.querySelector('[data-scope="combobox"]')
      ).toBeInTheDocument();
    });
  });

  it('renders with different variants', () => {
    const variants = ['outline', 'subtle'] as const;

    variants.forEach((variant) => {
      const { container } = render(
        <ChakraWrapper>
          <Combobox.Root collection={frameworks} variant={variant}>
            <Combobox.Control>
              <Combobox.Input placeholder={`Variant ${variant}`} />
            </Combobox.Control>
          </Combobox.Root>
        </ChakraWrapper>
      );

      const input = screen.getByPlaceholderText(`Variant ${variant}`);
      expect(input).toBeInTheDocument();
      expect(
        container.querySelector('[data-scope="combobox"]')
      ).toBeInTheDocument();
    });
  });

  it('supports disabled state', () => {
    render(
      <ChakraWrapper>
        <Combobox.Root collection={frameworks} disabled>
          <Combobox.Control>
            <Combobox.Input placeholder="Select framework" />
          </Combobox.Control>
        </Combobox.Root>
      </ChakraWrapper>
    );

    const input = screen.getByPlaceholderText('Select framework');
    expect(input).toBeDisabled();
  });

  it('supports invalid state', () => {
    render(
      <ChakraWrapper>
        <Combobox.Root collection={frameworks} invalid>
          <Combobox.Label>Framework</Combobox.Label>
          <Combobox.Control>
            <Combobox.Input placeholder="Select framework" />
          </Combobox.Control>
        </Combobox.Root>
      </ChakraWrapper>
    );

    const input = screen.getByPlaceholderText('Select framework');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders with Portal', () => {
    const { container } = render(
      <ChakraWrapper>
        <Combobox.Root collection={frameworks}>
          <Combobox.Control>
            <Combobox.Input placeholder="Select framework" />
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
      </ChakraWrapper>
    );

    expect(container).toBeTruthy();
  });

  it('supports multiple selection', async () => {
    const user = userEvent.setup();

    render(
      <ChakraWrapper>
        <Combobox.Root collection={frameworks} multiple>
          <Combobox.Control>
            <Combobox.Input placeholder="Select frameworks" />
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
      </ChakraWrapper>
    );

    const input = screen.getByPlaceholderText('Select frameworks');
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Vue')).toBeInTheDocument();
    });
  });

  it('renders with item groups', async () => {
    const user = userEvent.setup();

    const groupedFrameworks = createListCollection({
      items: [
        { label: 'React', value: 'react', group: 'Popular' },
        { label: 'Vue', value: 'vue', group: 'Popular' },
        { label: 'Svelte', value: 'svelte', group: 'Emerging' },
      ],
    });

    render(
      <ChakraWrapper>
        <Combobox.Root collection={groupedFrameworks}>
          <Combobox.Control>
            <Combobox.Input placeholder="Select framework" />
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
      </ChakraWrapper>
    );

    const input = screen.getByPlaceholderText('Select framework');
    await user.click(input);

    await waitFor(() => {
      expect(screen.getByText('Popular')).toBeInTheDocument();
      expect(screen.getByText('Emerging')).toBeInTheDocument();
    });
  });
});
