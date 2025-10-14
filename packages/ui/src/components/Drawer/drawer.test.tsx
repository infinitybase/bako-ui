import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Button } from '../Button';
import { Drawer } from './drawer';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Drawer', () => {
  it('renders drawer trigger', () => {
    renderWithChakra(
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button>Open Drawer</Button>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Body>Content</Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    );

    expect(
      screen.getByRole('button', { name: 'Open Drawer' })
    ).toBeInTheDocument();
  });

  it('opens drawer on click', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button>Open</Button>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.Body>Drawer Content</Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    );

    const trigger = screen.getByRole('button');
    await user.click(trigger);

    await waitFor(() => {
      expect(screen.getByText('Drawer Title')).toBeInTheDocument();
      expect(screen.getByText('Drawer Content')).toBeInTheDocument();
    });
  });

  it('closes drawer with close button', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button>Open</Button>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Body>Content</Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <Button>Close</Button>
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
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

  it('supports different placements', () => {
    renderWithChakra(
      <Drawer.Root open placement="end">
        <Drawer.Trigger asChild>
          <Button>Trigger</Button>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Body>End placement</Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    );

    expect(screen.getByText('End placement')).toBeInTheDocument();
  });
});
