import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Button } from '../Button';
import { Clipboard } from './clipboard';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

// Mock clipboard API
const writeTextMock = vi.fn(() => Promise.resolve());
Object.assign(navigator, {
  clipboard: {
    writeText: writeTextMock,
  },
});

beforeEach(() => {
  writeTextMock.mockClear();
});

describe('Clipboard', () => {
  it('renders clipboard trigger', () => {
    renderWithChakra(
      <Clipboard.Root value="https://chakra-ui.com">
        <Clipboard.Trigger asChild>
          <Button>Copy</Button>
        </Clipboard.Trigger>
      </Clipboard.Root>
    );

    expect(screen.getByRole('button', { name: /copy/i })).toBeInTheDocument();
    expect(screen.getByText('Copy')).toBeInTheDocument();
  });

  it('shows copied state after clicking', async () => {
    const user = userEvent.setup();
    const { container } = renderWithChakra(
      <Clipboard.Root value="https://chakra-ui.com">
        <Clipboard.Trigger asChild>
          <Button>Copy Link</Button>
        </Clipboard.Trigger>
      </Clipboard.Root>
    );

    const button = screen.getByRole('button', { name: /copy/i });
    await user.click(button);

    await waitFor(() => {
      const root = container.querySelector('[data-copied]');
      expect(root).toBeInTheDocument();
    });
  });

  it('renders clipboard with input', () => {
    renderWithChakra(
      <Clipboard.Root value="https://chakra-ui.com">
        <Clipboard.Input />
        <Clipboard.Trigger asChild>
          <Button>Copy</Button>
        </Clipboard.Trigger>
      </Clipboard.Root>
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('https://chakra-ui.com');
  });

  it('renders clipboard label', () => {
    renderWithChakra(
      <Clipboard.Root value="https://test.com">
        <Clipboard.Label>Copy Link</Clipboard.Label>
        <Clipboard.Input />
      </Clipboard.Root>
    );

    expect(screen.getByText('Copy Link')).toBeInTheDocument();
  });

  it('shows value text', () => {
    renderWithChakra(
      <Clipboard.Root value="https://example.com">
        <Clipboard.ValueText />
      </Clipboard.Root>
    );

    expect(screen.getByText('https://example.com')).toBeInTheDocument();
  });

  it('supports controlled value', () => {
    const { rerender } = renderWithChakra(
      <Clipboard.Root value="first-value">
        <Clipboard.ValueText />
      </Clipboard.Root>
    );

    expect(screen.getByText('first-value')).toBeInTheDocument();

    rerender(
      <Clipboard.Root value="second-value">
        <Clipboard.ValueText />
      </Clipboard.Root>
    );

    expect(screen.getByText('second-value')).toBeInTheDocument();
  });
});
