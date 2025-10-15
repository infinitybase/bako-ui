import type { Meta, StoryObj } from '@storybook/react';
import { Stack, TextMask } from 'bako-ui';

const meta: Meta<typeof TextMask> = {
  title: 'Bako UI/TextMask',
  component: TextMask,
  argTypes: {
    mask: {
      control: 'text',
      description: 'The mask pattern to apply to the input',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the input',
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'flushed', 'unstyled'],
      description: 'The visual style of the input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextMask>;

export const Default: Story = {
  args: {
    mask: '(99) 99999-9999',
    placeholder: 'Phone number',
  },
};

export const PhoneMasks: Story = {
  render: () => (
    <Stack gap={4}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Brazilian Phone (Mobile)
        </p>
        <TextMask mask="(99) 99999-9999" placeholder="(11) 98765-4321" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Brazilian Phone (Landline)
        </p>
        <TextMask mask="(99) 9999-9999" placeholder="(11) 3456-7890" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>US Phone</p>
        <TextMask mask="(999) 999-9999" placeholder="(555) 123-4567" />
      </div>
    </Stack>
  ),
};

export const DocumentMasks: Story = {
  render: () => (
    <Stack gap={4}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>CPF</p>
        <TextMask mask="999.999.999-99" placeholder="123.456.789-01" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>CNPJ</p>
        <TextMask mask="99.999.999/9999-99" placeholder="12.345.678/0001-90" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>CEP</p>
        <TextMask mask="99999-999" placeholder="01310-100" />
      </div>
    </Stack>
  ),
};

export const DateTimeMasks: Story = {
  render: () => (
    <Stack gap={4}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Date (DD/MM/YYYY)
        </p>
        <TextMask mask="99/99/9999" placeholder="25/12/2023" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Date (MM/DD/YYYY)
        </p>
        <TextMask mask="99/99/9999" placeholder="12/25/2023" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Time (HH:MM)
        </p>
        <TextMask mask="99:99" placeholder="14:30" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          DateTime (DD/MM/YYYY HH:MM)
        </p>
        <TextMask mask="99/99/9999 99:99" placeholder="25/12/2023 14:30" />
      </div>
    </Stack>
  ),
};

export const CreditCardMasks: Story = {
  render: () => (
    <Stack gap={4}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Credit Card Number
        </p>
        <TextMask
          mask="9999 9999 9999 9999"
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>CVV</p>
        <TextMask mask="999" placeholder="123" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Expiration Date (MM/YY)
        </p>
        <TextMask mask="99/99" placeholder="12/25" />
      </div>
    </Stack>
  ),
};

export const CustomMasks: Story = {
  render: () => (
    <Stack gap={4}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          License Plate (Brazil)
        </p>
        <TextMask mask="AAA-9*99" placeholder="ABC-1D23" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>IP Address</p>
        <TextMask mask="999.999.999.999" placeholder="192.168.001.001" />
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
          Serial Number
        </p>
        <TextMask
          mask="AAAA-9999-AAAA-9999"
          placeholder="ABCD-1234-EFGH-5678"
        />
      </div>
    </Stack>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <Stack gap={4}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((size) => (
        <div key={size}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Size: {size}
          </p>
          <TextMask
            size={size}
            mask="(99) 99999-9999"
            placeholder="Phone number"
          />
        </div>
      ))}
    </Stack>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <Stack gap={4}>
      {(['outline', 'flushed', 'subtle'] as const).map((variant) => (
        <div key={variant}>
          <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Variant: {variant}
          </p>
          <TextMask
            variant={variant}
            mask="(99) 99999-9999"
            placeholder="Phone number"
          />
        </div>
      ))}
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    mask: '(99) 99999-9999',
    placeholder: 'Phone number',
    disabled: true,
    defaultValue: '(11) 98765-4321',
  },
};

export const ReadOnly: Story = {
  args: {
    mask: '(99) 99999-9999',
    placeholder: 'Phone number',
    readOnly: true,
    defaultValue: '(11) 98765-4321',
  },
};

export const WithDefaultValue: Story = {
  args: {
    mask: '999.999.999-99',
    placeholder: 'CPF',
    defaultValue: '12345678901',
  },
};
