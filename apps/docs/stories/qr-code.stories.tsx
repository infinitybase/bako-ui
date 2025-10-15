import type { Meta, StoryObj } from '@storybook/react';
import { Button, QrCode, Stack } from 'bako-ui';

const meta = {
  title: 'Bako UI/Data Display/QrCode',
  component: QrCode.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof QrCode.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <QrCode.Root value="https://www.google.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <Stack direction="row" gap="4" align="center" wrap="wrap">
      <QrCode.Root size="2xs" value="https://chakra-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <QrCode.Root size="xs" value="https://chakra-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <QrCode.Root size="sm" value="https://chakra-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <QrCode.Root size="md" value="https://chakra-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <QrCode.Root size="lg" value="https://chakra-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    </Stack>
  ),
};

export const WithCustomFill: Story = {
  render: () => (
    <Stack direction="row" gap="4">
      <QrCode.Root value="https://chakra-ui.com">
        <QrCode.Frame style={{ fill: '#5417D7' }}>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <QrCode.Root value="https://chakra-ui.com">
        <QrCode.Frame style={{ fill: '#FF0000' }}>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
      <QrCode.Root value="https://chakra-ui.com">
        <QrCode.Frame style={{ fill: '#00AA00' }}>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    </Stack>
  ),
};

export const WithOverlay: Story = {
  render: () => (
    <QrCode.Root value="https://chakra-ui.com" size="lg">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
      <QrCode.Overlay>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Chakra UI Logo</title>
          <rect width="40" height="40" rx="8" fill="white" />
          <path d="M20 10 L30 30 L10 30 Z" fill="#5417D7" />
        </svg>
      </QrCode.Overlay>
    </QrCode.Root>
  ),
};

export const WithDownload: Story = {
  render: () => (
    <Stack align="center">
      <QrCode.Root value="https://chakra-ui.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
        <QrCode.DownloadTrigger
          asChild
          fileName="qr-code.png"
          mimeType="image/png"
        >
          <Button variant="outline" size="sm" mt="4">
            Download QR Code
          </Button>
        </QrCode.DownloadTrigger>
      </QrCode.Root>
    </Stack>
  ),
};
