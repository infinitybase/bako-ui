import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { QrCode } from './qr-code';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('QrCode', () => {
  it('renders qr code with value', () => {
    const { container } = renderWithChakra(
      <QrCode.Root value="https://www.google.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { container, rerender } = renderWithChakra(
      <QrCode.Root value="https://test.com" size="xs">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    );

    expect(container.querySelector('svg')).toBeInTheDocument();

    rerender(
      <QrCode.Root value="https://test.com" size="md">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    );

    expect(container.querySelector('svg')).toBeInTheDocument();

    rerender(
      <QrCode.Root value="https://test.com" size="lg">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    );

    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders qr code with overlay', () => {
    renderWithChakra(
      <QrCode.Root value="https://test.com">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
        <QrCode.Overlay>
          <div data-testid="overlay-content">Logo</div>
        </QrCode.Overlay>
      </QrCode.Root>
    );

    expect(screen.getByTestId('overlay-content')).toBeInTheDocument();
    expect(screen.getByText('Logo')).toBeInTheDocument();
  });

  it('renders qr code with custom fill', () => {
    const { container } = renderWithChakra(
      <QrCode.Root value="https://test.com">
        <QrCode.Frame style={{ fill: '#FF0000' }}>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    );

    const frame = container.querySelector('svg');
    expect(frame).toBeInTheDocument();
  });

  it('supports color palette', () => {
    const { container } = renderWithChakra(
      <QrCode.Root value="https://test.com" colorPalette="blue">
        <QrCode.Frame>
          <QrCode.Pattern />
        </QrCode.Frame>
      </QrCode.Root>
    );

    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
