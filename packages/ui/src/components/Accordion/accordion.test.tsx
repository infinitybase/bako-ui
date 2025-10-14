import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Accordion } from './accordion';

describe('Accordion', () => {
  it('renders accordion with items', () => {
    render(
      <ChakraWrapper>
        <Accordion.Root data-testid="accordion">
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('accordion')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  it('expands item when trigger is clicked', async () => {
    const user = userEvent.setup();

    render(
      <ChakraWrapper>
        <Accordion.Root collapsible>
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    const trigger = screen.getByText('Item 1');
    await user.click(trigger);

    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('renders with default value', () => {
    render(
      <ChakraWrapper>
        <Accordion.Root defaultValue={['item-1']}>
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('supports multiple items expanded', async () => {
    const user = userEvent.setup();

    render(
      <ChakraWrapper>
        <Accordion.Root multiple>
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.ItemTrigger>Item 2</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 2</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    await user.click(screen.getByText('Item 1'));
    await user.click(screen.getByText('Item 2'));

    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <ChakraWrapper>
        <Accordion.Root size="sm" data-testid="accordion">
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('accordion')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Accordion.Root size="md" data-testid="accordion">
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('accordion')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <ChakraWrapper>
        <Accordion.Root variant="outline" data-testid="accordion">
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('accordion')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Accordion.Root variant="subtle" data-testid="accordion">
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('accordion')).toBeInTheDocument();
  });

  it('renders disabled item', () => {
    render(
      <ChakraWrapper>
        <Accordion.Root>
          <Accordion.Item value="item-1" disabled>
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    const trigger = screen.getByText('Item 1');
    expect(trigger).toBeDisabled();
  });

  it('renders with indicator', () => {
    render(
      <ChakraWrapper>
        <Accordion.Root>
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>
              Item 1
              <Accordion.ItemIndicator data-testid="indicator">
                ↓
              </Accordion.ItemIndicator>
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('indicator')).toBeInTheDocument();
  });

  it('applies custom className to root', () => {
    render(
      <ChakraWrapper>
        <Accordion.Root className="custom-accordion" data-testid="accordion">
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger>Item 1</Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('accordion')).toHaveClass('custom-accordion');
  });

  it('renders collapsible accordion', async () => {
    const user = userEvent.setup();

    render(
      <ChakraWrapper>
        <Accordion.Root collapsible defaultValue={['item-1']}>
          <Accordion.Item value="item-1">
            <Accordion.ItemTrigger data-testid="trigger">
              Item 1
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
              <Accordion.ItemBody>Content 1</Accordion.ItemBody>
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </ChakraWrapper>
    );

    const trigger = screen.getByTestId('trigger');

    // Initially expanded (aria-expanded should be true)
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    // Click to collapse
    await user.click(trigger);

    // After clicking, should be collapsed (aria-expanded should be false)
    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
