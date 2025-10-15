import type { Meta, StoryObj } from '@storybook/react';
import { Button, createToaster, Loader, Portal, Stack, Toast } from 'bako-ui';

// Create a single toaster instance for all stories
const demoToaster = createToaster({
  placement: 'bottom-end',
  overlap: false,
  pauseOnPageIdle: true,
});

const meta = {
  component: Toast.Root,
  title: 'Bako UI/Feedback/Toast',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Portal>
          <Toast.Toaster
            toaster={demoToaster}
            insetInline={{ mdDown: '4' }}
            w="full"
          >
            {(toast) => (
              <Toast.Root key={toast.id} w="fit-content">
                {toast.type === 'loading' ? (
                  <Loader size="sm" />
                ) : (
                  <Toast.Indicator />
                )}
                <Stack>
                  {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                  {toast.description && (
                    <Toast.Description>{toast.description}</Toast.Description>
                  )}
                </Stack>
                {toast.meta?.action && (
                  <Toast.ActionTrigger>{toast.meta.action}</Toast.ActionTrigger>
                )}
                <Toast.CloseTrigger />
              </Toast.Root>
            )}
          </Toast.Toaster>
        </Portal>
      </>
    ),
  ],
} satisfies Meta<typeof Toast.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Button
      onClick={() => {
        demoToaster.create({
          title: 'Default Toast',
          description: 'This is a default toast notification',
        });
      }}
    >
      Show Toast
    </Button>
  ),
};

export const DifferentTypes: Story = {
  render: () => (
    <Stack direction="row" gap="2" wrap="wrap">
      <Button
        onClick={() => {
          demoToaster.create({
            title: 'Info',
            type: 'info',
          });
        }}
      >
        Info
      </Button>
      <Button
        onClick={() => {
          demoToaster.create({
            title: 'Success',
            description: 'Operation completed successfully',
            type: 'success',
          });
        }}
      >
        Success
      </Button>
      <Button
        onClick={() => {
          demoToaster.create({
            title: 'Warning',
            description: 'Please be careful',
            type: 'warning',
          });
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          demoToaster.create({
            title: 'Error',
            description: 'Something went wrong',
            type: 'error',
          });
        }}
      >
        Error
      </Button>
    </Stack>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() => {
        demoToaster.create({
          title: 'File deleted',
          description: 'Your file has been deleted',
          meta: {
            action: 'Undo',
          },
        });
      }}
    >
      Delete File
    </Button>
  ),
};
