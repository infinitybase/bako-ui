import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { EmptyState } from './empty-state';

describe('EmptyState', () => {
  it('renders empty state with title and description', () => {
    render(
      <ChakraWrapper>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Title>No results found</EmptyState.Title>
            <EmptyState.Description>
              Try adjusting your search or filter to find what you are looking
              for.
            </EmptyState.Description>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('No results found')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Try adjusting your search or filter to find what you are looking for.'
      )
    ).toBeInTheDocument();
  });

  it('renders with indicator', () => {
    render(
      <ChakraWrapper>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>📭</EmptyState.Indicator>
            <EmptyState.Title>Empty Inbox</EmptyState.Title>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('📭')).toBeInTheDocument();
    expect(screen.getByText('Empty Inbox')).toBeInTheDocument();
  });

  it('renders title only', () => {
    render(
      <ChakraWrapper>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Title>No data available</EmptyState.Title>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

  it('renders description only', () => {
    render(
      <ChakraWrapper>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Description>
              There is nothing to show here yet.
            </EmptyState.Description>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(
      screen.getByText('There is nothing to show here yet.')
    ).toBeInTheDocument();
  });

  it('renders with custom indicator component', () => {
    const CustomIcon = () => <div data-testid="custom-icon">🔍</div>;

    render(
      <ChakraWrapper>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <CustomIcon />
            </EmptyState.Indicator>
            <EmptyState.Title>Search</EmptyState.Title>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('renders with multiple elements in content', () => {
    render(
      <ChakraWrapper>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>⚠️</EmptyState.Indicator>
            <EmptyState.Title>Warning</EmptyState.Title>
            <EmptyState.Description>
              This is a warning message.
            </EmptyState.Description>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('⚠️')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
    expect(screen.getByText('This is a warning message.')).toBeInTheDocument();
  });

  it('applies custom className to root', () => {
    const { container } = render(
      <ChakraWrapper>
        <EmptyState.Root className="custom-empty-state">
          <EmptyState.Content>
            <EmptyState.Title>Custom</EmptyState.Title>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(container.querySelector('.custom-empty-state')).toBeInTheDocument();
  });

  it('renders complex content structure', () => {
    render(
      <ChakraWrapper>
        <EmptyState.Root>
          <EmptyState.Content>
            <EmptyState.Indicator>
              <div data-testid="icon-wrapper">🎉</div>
            </EmptyState.Indicator>
            <EmptyState.Title>Success!</EmptyState.Title>
            <EmptyState.Description>
              Your action was completed successfully.
            </EmptyState.Description>
          </EmptyState.Content>
        </EmptyState.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('icon-wrapper')).toBeInTheDocument();
    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(
      screen.getByText('Your action was completed successfully.')
    ).toBeInTheDocument();
  });
});
