import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Button } from '../Button';
import { Popover } from './popover';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Popover', () => {
  it('renders popover trigger', () => {
    renderWithChakra(
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Title</Popover.Title>
            <Popover.Body>Content</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    );

    expect(
      screen.getByRole('button', { name: 'Open Popover' })
    ).toBeInTheDocument();
  });

  it('opens popover on click', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button>Open</Button>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Popover Title</Popover.Title>
            <Popover.Body>Popover Content</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Popover Title')).toBeInTheDocument();
      expect(screen.getByText('Popover Content')).toBeInTheDocument();
    });
  });

  it('closes popover with close button', async () => {
    const user = userEvent.setup();
    const { container } = renderWithChakra(
      <Popover.Root>
        <Popover.Trigger asChild>
          <Button>Open</Button>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Title</Popover.Title>
            <Popover.Body>Content</Popover.Body>
            <Popover.CloseTrigger asChild>
              <Button aria-label="close">Close</Button>
            </Popover.CloseTrigger>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));

    await waitFor(() => {
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: 'close' }));

    await waitFor(() => {
      const content = container.querySelector(
        '[data-part="content"][data-state="closed"]'
      );
      expect(content).toHaveAttribute('hidden');
    });
  });

  it('supports controlled open state', () => {
    renderWithChakra(
      <Popover.Root open>
        <Popover.Trigger asChild>
          <Button>Trigger</Button>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Body>Always visible</Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.Root>
    );

    expect(screen.getByText('Always visible')).toBeInTheDocument();
  });
});
