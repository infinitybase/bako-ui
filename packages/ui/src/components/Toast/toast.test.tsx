import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Button } from '../Button';
import { Toast, toaster } from './toast';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Toast', () => {
  it('creates and shows a toast notification', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const showToast = () => {
        toaster.create({
          title: 'Toast Title',
          description: 'Toast Description',
        });
      };

      return (
        <>
          <Button onClick={showToast}>Show Toast</Button>
          <Toast.Toaster toaster={toaster}>
            {(toast) => (
              <Toast.Root key={toast.id}>
                <Toast.Title>{toast.title}</Toast.Title>
                <Toast.Description>{toast.description}</Toast.Description>
                <Toast.CloseTrigger />
              </Toast.Root>
            )}
          </Toast.Toaster>
        </>
      );
    };

    renderWithChakra(<TestComponent />);

    const button = screen.getByRole('button', { name: 'Show Toast' });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText('Toast Title')).toBeInTheDocument();
      expect(screen.getByText('Toast Description')).toBeInTheDocument();
    });
  });

  it('supports different toast types', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const showSuccessToast = () => {
        toaster.create({
          title: 'Success',
          type: 'success',
        });
      };

      return (
        <>
          <Button onClick={showSuccessToast}>Show Success</Button>
          <Toast.Toaster toaster={toaster}>
            {(toast) => (
              <Toast.Root key={toast.id}>
                <Toast.Title>{toast.title}</Toast.Title>
              </Toast.Root>
            )}
          </Toast.Toaster>
        </>
      );
    };

    renderWithChakra(<TestComponent />);

    const button = screen.getByRole('button', { name: 'Show Success' });
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText('Success')).toBeInTheDocument();
    });
  });

  it('renders close button in toast', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const showToast = () => {
        toaster.create({
          title: 'Closeable Toast',
        });
      };

      return (
        <>
          <Button onClick={showToast}>Show Toast</Button>
          <Toast.Toaster toaster={toaster}>
            {(toast) => (
              <Toast.Root key={toast.id}>
                <Toast.Title>{toast.title}</Toast.Title>
                <Toast.CloseTrigger />
              </Toast.Root>
            )}
          </Toast.Toaster>
        </>
      );
    };

    renderWithChakra(<TestComponent />);

    await user.click(screen.getByRole('button', { name: 'Show Toast' }));

    await waitFor(() => {
      expect(screen.getByText('Closeable Toast')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /dismiss notification/i })
      ).toBeInTheDocument();
    });
  });

  it('supports action button', async () => {
    const user = userEvent.setup();

    const TestComponent = () => {
      const showToast = () => {
        toaster.create({
          title: 'Toast with Action',
          meta: {
            action: 'Undo',
          },
        });
      };

      return (
        <>
          <Button onClick={showToast}>Show Toast</Button>
          <Toast.Toaster toaster={toaster}>
            {(toast) => (
              <Toast.Root key={toast.id}>
                <Toast.Title>{toast.title}</Toast.Title>
                {toast.meta?.action && (
                  <Toast.ActionTrigger>{toast.meta.action}</Toast.ActionTrigger>
                )}
              </Toast.Root>
            )}
          </Toast.Toaster>
        </>
      );
    };

    renderWithChakra(<TestComponent />);

    await user.click(screen.getByRole('button', { name: 'Show Toast' }));

    await waitFor(() => {
      expect(screen.getByText('Toast with Action')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument();
    });
  });
});
