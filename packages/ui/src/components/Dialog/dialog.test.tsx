import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Button } from '../Button';
import { Dialog } from './dialog';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Dialog', () => {
  it('renders dialog trigger', () => {
    renderWithChakra(
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Body>Content</Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    );

    expect(
      screen.getByRole('button', { name: 'Open Dialog' })
    ).toBeInTheDocument();
  });

  it('opens dialog on click', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Body>Dialog Content</Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Dialog Title')).toBeInTheDocument();
      expect(screen.getByText('Dialog Content')).toBeInTheDocument();
    });
  });

  it('closes dialog with close button', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Body>Content</Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <Button>Close</Button>
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));

    await waitFor(() => {
      expect(screen.getByText('Content')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: 'Close' }));

    await waitFor(() => {
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });
  });

  it('supports controlled open state', () => {
    renderWithChakra(
      <Dialog.Root open>
        <Dialog.Trigger asChild>
          <Button>Trigger</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Body>Always visible</Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    );

    expect(screen.getByText('Always visible')).toBeInTheDocument();
  });

  it('renders with header and footer', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button>Open</Button>
        </Dialog.Trigger>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Header Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>Body Content</Dialog.Body>
            <Dialog.Footer>
              <Button>Footer Button</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>
    );

    await user.click(screen.getByRole('button', { name: 'Open' }));

    await waitFor(() => {
      expect(screen.getByText('Header Title')).toBeInTheDocument();
      expect(screen.getByText('Body Content')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Footer Button' })
      ).toBeInTheDocument();
    });
  });
});
