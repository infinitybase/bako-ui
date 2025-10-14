import { LinkBox } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type React from 'react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import LinkOverlay from './link-overlay';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('LinkOverlay', () => {
  it('renders with href correctly', () => {
    renderWithChakra(
      <LinkBox>
        <LinkOverlay href="https://example.com">Click anywhere</LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /click anywhere/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('makes the entire container clickable', () => {
    renderWithChakra(
      <LinkBox data-testid="link-box">
        <p>Some content here</p>
        <LinkOverlay href="https://example.com">Main Link</LinkOverlay>
        <p>More content</p>
      </LinkBox>
    );

    const linkBox = screen.getByTestId('link-box');
    const link = screen.getByRole('link', { name: /main link/i });

    expect(linkBox).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('renders with external link attributes', () => {
    renderWithChakra(
      <LinkBox>
        <LinkOverlay href="https://external.com" target="_blank">
          External Link
        </LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /external link/i });
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders with custom className', () => {
    renderWithChakra(
      <LinkBox>
        <LinkOverlay href="https://example.com" className="custom-overlay">
          Custom Overlay
        </LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /custom overlay/i });
    expect(link).toHaveClass('custom-overlay');
  });

  it('renders as a different element with asChild', () => {
    renderWithChakra(
      <LinkBox>
        <LinkOverlay asChild>
          <a href="https://example.com" data-custom="true">
            Custom Element
          </a>
        </LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /custom element/i });
    expect(link).toHaveAttribute('data-custom', 'true');
  });

  it('works with LinkBox container', () => {
    renderWithChakra(
      <LinkBox maxW="sm" p="5" borderWidth="1px">
        <h3>Card Title</h3>
        <p>Card description text</p>
        <LinkOverlay href="https://example.com">Read more</LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /read more/i });
    const heading = screen.getByRole('heading', { name: /card title/i });
    const description = screen.getByText(/card description text/i);

    expect(link).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('supports aria attributes', () => {
    renderWithChakra(
      <LinkBox>
        <LinkOverlay href="https://example.com" aria-label="Go to article">
          Article Title
        </LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /go to article/i });
    expect(link).toHaveAttribute('aria-label', 'Go to article');
  });

  it('handles navigation correctly', async () => {
    const user = userEvent.setup();

    renderWithChakra(
      <LinkBox>
        <LinkOverlay href="https://example.com">Navigate Here</LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /navigate here/i });
    await user.click(link);

    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('renders with inner content', () => {
    renderWithChakra(
      <LinkBox>
        <time dateTime="2024-01-15">15 January 2024</time>
        <h2>Article Heading</h2>
        <LinkOverlay href="/article">Read Article</LinkOverlay>
        <p>Article summary goes here...</p>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /read article/i });
    const time = screen.getByText(/15 january 2024/i);
    const heading = screen.getByRole('heading', { name: /article heading/i });
    const summary = screen.getByText(/article summary goes here/i);

    expect(link).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
  });

  it('supports download attribute', () => {
    renderWithChakra(
      <LinkBox>
        <LinkOverlay href="/document.pdf" download="my-document.pdf">
          Download PDF
        </LinkOverlay>
      </LinkBox>
    );

    const link = screen.getByRole('link', { name: /download pdf/i });
    expect(link).toHaveAttribute('download', 'my-document.pdf');
  });
});
