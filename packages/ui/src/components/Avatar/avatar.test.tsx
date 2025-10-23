import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Avatar, AvatarGroup } from './avatar';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Avatar', () => {
  it('renders with image src and shows skeleton while loading', () => {
    const { container } = renderWithChakra(
      <Avatar src="https://example.com/avatar.jpg" name="John Doe" />
    );

    // Image element should exist (even if hidden in tests)
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(img).toHaveAttribute('alt', 'John Doe');

    // Skeleton should be rendered while loading
    const skeleton = container.querySelector('.chakra-skeleton');
    expect(skeleton).toBeInTheDocument();

    // Fallback should NOT be rendered while loading
    expect(screen.queryByText('JD')).not.toBeInTheDocument();
  });

  it('renders initials fallback when no src', () => {
    renderWithChakra(<Avatar name="John Doe" />);

    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders custom fallback', () => {
    renderWithChakra(<Avatar name="John Doe" fallback="JD" />);

    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('renders icon fallback when no name', () => {
    const { container } = renderWithChakra(<Avatar />);

    // Avatar icon should be rendered
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { rerender } = renderWithChakra(<Avatar name="Test" size="sm" />);
    expect(screen.getByText('T')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Avatar name="Test" size="md" />
      </ChakraWrapper>
    );
    expect(screen.getByText('T')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Avatar name="Test" size="lg" />
      </ChakraWrapper>
    );
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('supports different shapes', () => {
    const { rerender } = renderWithChakra(
      <Avatar name="Test" shape="square" />
    );
    expect(screen.getByText('T')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Avatar name="Test" shape="rounded" />
      </ChakraWrapper>
    );
    expect(screen.getByText('T')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Avatar name="Test" shape="full" />
      </ChakraWrapper>
    );
    expect(screen.getByText('T')).toBeInTheDocument();
  });

  it('supports different variants', () => {
    const { rerender } = renderWithChakra(
      <Avatar name="Test" variant="solid" />
    );
    expect(screen.getByText('T')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Avatar name="Test" variant="subtle" />
      </ChakraWrapper>
    );
    expect(screen.getByText('T')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Avatar name="Test" variant="outline" />
      </ChakraWrapper>
    );
    expect(screen.getByText('T')).toBeInTheDocument();
  });
});

describe('AvatarGroup', () => {
  it('renders multiple avatars in a group', () => {
    renderWithChakra(
      <AvatarGroup>
        <Avatar name="John Doe" />
        <Avatar name="Jane Smith" />
        <Avatar name="Bob Johnson" />
      </AvatarGroup>
    );

    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.getByText('JS')).toBeInTheDocument();
    expect(screen.getByText('BJ')).toBeInTheDocument();
  });

  it('renders with images and shows skeleton while loading', () => {
    const { container } = renderWithChakra(
      <AvatarGroup>
        <Avatar src="https://example.com/1.jpg" name="User 1" />
        <Avatar src="https://example.com/2.jpg" name="User 2" />
      </AvatarGroup>
    );

    const images = container.querySelectorAll('img');
    expect(images).toHaveLength(2);

    // Skeletons should be rendered while loading
    const skeletons = container.querySelectorAll('.chakra-skeleton');
    expect(skeletons.length).toBeGreaterThan(0);

    // Fallbacks should NOT be rendered while loading
    expect(screen.queryByText('U1')).not.toBeInTheDocument();
    expect(screen.queryByText('U2')).not.toBeInTheDocument();
  });
});
