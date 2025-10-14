import type { Meta, StoryObj } from '@storybook/react';
import { MoneyField } from '../../../packages/ui/src/components/MoneyField/money-field';

const meta: Meta<typeof MoneyField> = {
  title: 'Bako UI/Form/MoneyField',
  component: MoneyField,
  tags: ['autodocs'],
  argTypes: {
    thousandSeparator: { control: 'text' },
    decimalSeparator: { control: 'text' },
    decimalScale: { control: 'number' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof MoneyField>;

export const Default: Story = {
  args: {
    value: '1234.56',
    onChange: (value) => console.log('Value:', value),
    placeholder: 'Enter amount',
  },
};

export const BRL: Story = {
  args: {
    value: '1200.50',
    onChange: (value) => console.log('Value:', value),
    thousandSeparator: '.',
    decimalSeparator: ',',
    decimalScale: 2,
    placeholder: 'Preço em R$',
  },
};

export const USD: Story = {
  args: {
    value: '1200.50',
    onChange: (value) => console.log('Value:', value),
    thousandSeparator: ',',
    decimalSeparator: '.',
    decimalScale: 2,
    placeholder: 'Price in $',
  },
};

export const EUR: Story = {
  args: {
    value: '1200.50',
    onChange: (value) => console.log('Value:', value),
    thousandSeparator: '.',
    decimalSeparator: ',',
    decimalScale: 2,
    placeholder: 'Prix en €',
  },
};

export const Ethereum: Story = {
  args: {
    value: '0.123456789012345678',
    onChange: (value) => console.log('Value:', value),
    thousandSeparator: ',',
    decimalSeparator: '.',
    decimalScale: 18,
    placeholder: 'ETH Amount',
  },
};

export const SmallDecimals: Story = {
  args: {
    value: '0.001',
    onChange: (value) => console.log('Value:', value),
    decimalScale: 3,
    placeholder: 'Small decimals',
  },
};

export const LargeValue: Story = {
  args: {
    value: '9876543.21',
    onChange: (value) => console.log('Value:', value),
    thousandSeparator: '.',
    decimalSeparator: ',',
    decimalScale: 2,
    placeholder: 'Large amount',
  },
};

export const CustomSeparators: Story = {
  args: {
    value: '1234.56',
    onChange: (value) => console.log('Value:', value),
    thousandSeparator: ' ',
    decimalSeparator: ',',
    decimalScale: 2,
    placeholder: 'Custom format',
  },
};

export const Disabled: Story = {
  args: {
    value: '999.99',
    onChange: (value) => console.log('Value:', value),
    disabled: true,
    placeholder: 'Locked amount',
  },
};
