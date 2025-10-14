import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Button } from '../Button';
import Tooltip from './tooltip';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Tooltip', () => {
  it('renders trigger element', () => {
    renderWithChakra(
      <Tooltip content="Tooltip text">
        <Button>Hover me</Button>
      </Tooltip>
    );

    expect(
      screen.getByRole('button', { name: 'Hover me' })
    ).toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Tooltip content="Helpful information" openDelay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('Helpful information')).toBeInTheDocument();
    });
  });

  it('hides tooltip on unhover', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Tooltip content="Helpful information" openDelay={0} closeDelay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('Helpful information')).toBeInTheDocument();
    });

    await user.unhover(button);

    await waitFor(() => {
      expect(screen.queryByText('Helpful information')).not.toBeInTheDocument();
    });
  });

  it('can be disabled', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Tooltip content="Tooltip text" disabled openDelay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    await waitFor(
      () => {
        expect(screen.queryByText('Tooltip text')).not.toBeInTheDocument();
      },
      { timeout: 500 }
    );
  });

  it('renders without arrow when showArrow is false', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Tooltip content="No arrow tooltip" showArrow={false} openDelay={0}>
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('No arrow tooltip')).toBeInTheDocument();
    });
  });

  it('supports controlled open state', () => {
    renderWithChakra(
      <Tooltip content="Always visible" open>
        <Button>Controlled</Button>
      </Tooltip>
    );

    expect(screen.getByText('Always visible')).toBeInTheDocument();
  });

  it('supports defaultOpen prop', () => {
    renderWithChakra(
      <Tooltip content="Initially visible" defaultOpen>
        <Button>Default open</Button>
      </Tooltip>
    );

    expect(screen.getByText('Initially visible')).toBeInTheDocument();
  });

  it('works with different positioning', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Tooltip
        content="Top tooltip"
        positioning={{ placement: 'top' }}
        openDelay={0}
      >
        <Button>Hover me</Button>
      </Tooltip>
    );

    const button = screen.getByRole('button');
    await user.hover(button);

    await waitFor(() => {
      expect(screen.getByText('Top tooltip')).toBeInTheDocument();
    });
  });
});
