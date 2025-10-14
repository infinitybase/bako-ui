import { Link, Text, VStack } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Link> = {
  title: 'Bako UI/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'plain'],
      description: 'The visual style of the link',
    },
    colorPalette: {
      control: 'select',
      options: ['gray', 'red', 'orange', 'green', 'blue', 'teal', 'purple'],
      description: 'The color scheme of the link',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: 'https://example.com',
    children: 'This is a link',
  },
};

export const WithVariants: Story = {
  render: () => (
    <VStack gap={4} alignItems="flex-start">
      <Link href="https://example.com" variant="underline">
        Underline variant (default)
      </Link>
      <Link href="https://example.com" variant="plain">
        Plain variant
      </Link>
    </VStack>
  ),
};

export const WithColorPalettes: Story = {
  render: () => (
    <VStack gap={4} alignItems="flex-start">
      <Link href="https://example.com" colorPalette="gray">
        Gray link
      </Link>
      <Link href="https://example.com" colorPalette="red">
        Red link
      </Link>
      <Link href="https://example.com" colorPalette="orange">
        Orange link
      </Link>
      <Link href="https://example.com" colorPalette="green">
        Green link
      </Link>
      <Link href="https://example.com" colorPalette="blue">
        Blue link
      </Link>
      <Link href="https://example.com" colorPalette="teal">
        Teal link
      </Link>
      <Link href="https://example.com" colorPalette="purple">
        Purple link
      </Link>
    </VStack>
  ),
};

export const ExternalLink: Story = {
  render: () => (
    <VStack gap={4} alignItems="flex-start">
      <Link href="https://example.com" target="_blank">
        Open in new tab (external link)
      </Link>
      <Text fontSize="sm" color="gray.500">
        This link opens in a new tab
      </Text>
    </VStack>
  ),
};

export const WithDownload: Story = {
  render: () => (
    <VStack gap={4} alignItems="flex-start">
      <Link href="/document.pdf" download="document.pdf">
        Download PDF document
      </Link>
      <Text fontSize="sm" color="gray.500">
        This link triggers a file download
      </Text>
    </VStack>
  ),
};

export const DisabledStyle: Story = {
  render: () => (
    <VStack gap={4} alignItems="flex-start">
      <Link href="https://example.com" opacity={0.4} cursor="not-allowed">
        Disabled-looking link
      </Link>
      <Text fontSize="sm" color="gray.500">
        Note: Links don't have a native disabled state
      </Text>
    </VStack>
  ),
};

export const WithCombinations: Story = {
  render: () => (
    <VStack gap={4} alignItems="flex-start">
      <Link
        href="https://example.com"
        variant="underline"
        colorPalette="blue"
        fontSize="lg"
        fontWeight="bold"
      >
        Large bold blue link
      </Link>
      <Link
        href="https://example.com"
        variant="plain"
        colorPalette="purple"
        fontSize="sm"
      >
        Small plain purple link
      </Link>
      <Link
        href="https://example.com"
        colorPalette="green"
        textDecoration="none"
        _hover={{ textDecoration: 'underline' }}
      >
        Hover to see underline
      </Link>
    </VStack>
  ),
};

export const InText: Story = {
  render: () => (
    <Text>
      This is a paragraph with an{' '}
      <Link href="https://example.com" colorPalette="blue">
        inline link
      </Link>{' '}
      in the middle of the text. It demonstrates how links work seamlessly
      within content.
    </Text>
  ),
};
