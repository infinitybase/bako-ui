import type { Meta, StoryObj } from '@storybook/react';
import { Button, Clipboard, Input, Stack } from 'bako-ui';

const meta = {
  title: 'Bako UI/Data Display/Clipboard',
  component: Clipboard.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Clipboard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

const CopyIcon = () => (
  <svg width="24px" height="24px" viewBox="0 0 15 15" fill="#">
    <title>Copy to Clipboard Icon</title>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
      fill="#CFCCC9"
    />
  </svg>
);

export const Default: Story = {
  render: () => (
    <Clipboard.Root value="https://chakra-ui.com">
      <Clipboard.Trigger asChild>
        <Button variant="surface" size="sm">
          <Clipboard.Indicator copied="✓">
            <CopyIcon />
          </Clipboard.Indicator>
          Copy
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  ),
};

export const WithInput: Story = {
  render: () => (
    <Clipboard.Root value="https://chakra-ui.com" maxW="400px">
      <Clipboard.Label>Document Link</Clipboard.Label>
      <Stack direction="row" gap="2" align="center" mt="2">
        <Clipboard.Input asChild>
          <Input readOnly />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <Button size="sm" variant="outline">
            Copy
          </Button>
        </Clipboard.Trigger>
      </Stack>
    </Clipboard.Root>
  ),
};

export const WithIndicator: Story = {
  render: () => (
    <Clipboard.Root value="npm install @chakra-ui/react">
      <Clipboard.Trigger asChild>
        <Button variant="surface" size="sm">
          <Clipboard.Indicator copied="Copied!">Copy</Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  ),
};

export const WithValueText: Story = {
  render: () => (
    <Stack gap="4" maxW="md">
      <Clipboard.Root value="https://chakra-ui.com">
        <Stack gap="2">
          <Clipboard.Label>Share this link:</Clipboard.Label>
          <Clipboard.ValueText />
          <Clipboard.Trigger asChild>
            <Button size="sm" variant="surface" alignSelf="flex-start">
              <Clipboard.Indicator copied="✓">
                <CopyIcon />
              </Clipboard.Indicator>
              Copy Link
            </Button>
          </Clipboard.Trigger>
        </Stack>
      </Clipboard.Root>
    </Stack>
  ),
};

export const WithCustomTimeout: Story = {
  args: {
    timeout: 2000,
  },
  argTypes: { timeout: { control: 'number' } },
  render: (props) => (
    <Clipboard.Root value="https://chakra-ui.com" timeout={props.timeout}>
      <Clipboard.Trigger asChild>
        <Button variant="surface" size="sm">
          <Clipboard.Indicator copied="Copied!">Copy</Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  ),
};
