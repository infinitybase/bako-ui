import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import Link from './link';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Link', () => {
  it('renders with correct text', () => {
    renderWithChakra(<Link href="https://example.com">Click here</Link>);

    const link = screen.getByRole('link', { name: /click here/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('handles click events', async () => {
    const handleClick = vi.fn((e) => e.preventDefault());
    const user = userEvent.setup();

    renderWithChakra(
      <Link href="https://example.com" onClick={handleClick}>
        Clickable Link
      </Link>
    );

    const link = screen.getByRole('link', { name: /clickable link/i });
    await user.click(link);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders with different variants', () => {
    renderWithChakra(
      <Link href="https://example.com" variant="underline">
        Underline Link
      </Link>
    );

    const link = screen.getByRole('link', { name: /underline link/i });
    expect(link).toBeInTheDocument();
  });

  it('renders with different color palettes', () => {
    renderWithChakra(
      <Link href="https://example.com" colorPalette="blue">
        Blue Link
      </Link>
    );

    const link = screen.getByRole('link', { name: /blue link/i });
    expect(link).toBeInTheDocument();
  });

  it('supports external links', () => {
    renderWithChakra(
      <Link href="https://example.com" target="_blank" rel="noopener noreferrer">
        External Link
      </Link>
    );

    const link = screen.getByRole('link', { name: /external link/i });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('can be disabled visually', () => {
    renderWithChakra(
      <Link href="https://example.com" opacity={0.5} pointerEvents="none">
        Disabled Link
      </Link>
    );

    const link = screen.getByRole('link', { name: /disabled link/i });
    expect(link).toBeInTheDocument();
  });

  it('renders with custom className', () => {
    renderWithChakra(
      <Link href="https://example.com" className="custom-link">
        Custom Link
      </Link>
    );

    const link = screen.getByRole('link', { name: /custom link/i });
    expect(link).toHaveClass('custom-link');
  });

  it('renders as a different element with asChild', () => {
    const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
      <a href={href} data-custom="true">{children}</a>
    );

    renderWithChakra(
      <Link asChild>
        <CustomLink href="https://example.com">Custom Component</CustomLink>
      </Link>
    );

    const link = screen.getByRole('link', { name: /custom component/i });
    expect(link).toHaveAttribute('data-custom', 'true');
  });

  it('renders with aria attributes', () => {
    renderWithChakra(
      <Link href="https://example.com" aria-label="Go to homepage">
        Home
      </Link>
    );

    const link = screen.getByRole('link', { name: /go to homepage/i });
    expect(link).toHaveAttribute('aria-label', 'Go to homepage');
  });

  it('supports download attribute', () => {
    renderWithChakra(
      <Link href="/file.pdf" download="document.pdf">
        Download PDF
      </Link>
    );

    const link = screen.getByRole('link', { name: /download pdf/i });
    expect(link).toHaveAttribute('download', 'document.pdf');
  });
});
