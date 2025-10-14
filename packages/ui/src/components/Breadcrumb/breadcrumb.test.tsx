import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Breadcrumb } from './breadcrumb';

describe('Breadcrumb', () => {
  it('renders breadcrumb with links', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root data-testid="breadcrumb">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Current')).toBeInTheDocument();
  });

  it('renders with custom separator', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator data-testid="separator">
              /
            </Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator data-testid="separator2">
              /
            </Breadcrumb.Separator>
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('separator')).toHaveTextContent('/');
    expect(screen.getByTestId('separator2')).toHaveTextContent('/');
  });

  it('renders with ellipsis', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Ellipsis data-testid="ellipsis" />
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('ellipsis')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <ChakraWrapper>
        <Breadcrumb.Root size="sm" data-testid="breadcrumb">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Breadcrumb.Root size="md" data-testid="breadcrumb">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <ChakraWrapper>
        <Breadcrumb.Root variant="plain" data-testid="breadcrumb">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Breadcrumb.Root variant="underline" data-testid="breadcrumb">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
  });

  it('renders current link without href', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink data-testid="current">
                Current Page
              </Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    const currentLink = screen.getByTestId('current');
    expect(currentLink).toBeInTheDocument();
    expect(currentLink.tagName).toBe('SPAN');
  });

  it('applies custom className to root', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root className="custom-breadcrumb" data-testid="breadcrumb">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('breadcrumb')).toHaveClass('custom-breadcrumb');
  });

  it('renders multiple links in sequence', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Breadcrumb</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Docs')).toBeInTheDocument();
    expect(screen.getByText('Components')).toBeInTheDocument();
    expect(screen.getByText('Breadcrumb')).toBeInTheDocument();
  });

  it('renders with color palette', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root colorPalette="blue" data-testid="breadcrumb">
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
  });

  it('renders links with proper href attributes', () => {
    render(
      <ChakraWrapper>
        <Breadcrumb.Root>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/docs">Docs</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb.Root>
      </ChakraWrapper>
    );

    const homeLink = screen.getByText('Home');
    const docsLink = screen.getByText('Docs');

    expect(homeLink).toHaveAttribute('href', '/home');
    expect(docsLink).toHaveAttribute('href', '/docs');
  });
});
