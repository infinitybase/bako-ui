/**
 * Note: This file contains @ts-expect-error comments due to TypeScript limitations
 * with react-hook-form's generic Control type in Storybook's render context.
 * These type errors do not affect runtime functionality.
 */
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { RhfMoneyField } from '../../../packages/ui/src/components/RhfMoneyField/rhf-money-field';

const meta: Meta<typeof RhfMoneyField> = {
  title: 'Bako UI/Form/RhfMoneyField',
  component: RhfMoneyField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RhfMoneyField>;

const FormExample = ({
  name,
  defaultValue,
  children,
}: {
  name: string;
  defaultValue: string;
  children: (control: ReturnType<typeof useForm>['control']) => React.ReactNode;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { control, handleSubmit } = useForm({
    defaultValues: { [name]: defaultValue },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => console.log('Form data:', data))}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '400px',
      }}
    >
      {children(control)}
    </form>
  );
};

export const Default: Story = {
  render: () => (
    <FormExample name="amount" defaultValue="1234.56">
      {(control) => (
        // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
        <RhfMoneyField control={control} name="amount" label="Amount" />
      )}
    </FormExample>
  ),
};

export const BRL: Story = {
  render: () => (
    <FormExample name="priceBRL" defaultValue="1200.50">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="priceBRL"
          label="Preço"
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          slotProps={{
            inputGroup: {
              startAddon: <div>R$</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};

export const USD: Story = {
  render: () => (
    <FormExample name="priceUSD" defaultValue="1200.50">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="priceUSD"
          label="Price"
          thousandSeparator=","
          decimalSeparator="."
          decimalScale={2}
          slotProps={{
            inputGroup: {
              startAddon: <div>$</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};

export const EUR: Story = {
  render: () => (
    <FormExample name="priceEUR" defaultValue="1200.50">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="priceEUR"
          label="Prix"
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          slotProps={{
            inputGroup: {
              startAddon: <div>€</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};

export const Ethereum: Story = {
  render: () => (
    <FormExample name="ethAmount" defaultValue="0.123456789012345678">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="ethAmount"
          label="ETH Amount"
          thousandSeparator=","
          decimalSeparator="."
          decimalScale={18}
          slotProps={{
            inputGroup: {
              endAddon: <div>ETH</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};

export const Bitcoin: Story = {
  render: () => (
    <FormExample name="btcAmount" defaultValue="0.00123456">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="btcAmount"
          label="BTC Amount"
          thousandSeparator=","
          decimalSeparator="."
          decimalScale={8}
          slotProps={{
            inputGroup: {
              endAddon: <div>BTC</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};

export const WithError: Story = {
  render: () => (
    <FormExample name="amount" defaultValue="">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="amount"
          label="Required Field"
          error={{ message: 'This field is required', type: 'required' }}
          slotProps={{
            inputGroup: {
              startAddon: <div>$</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <FormExample name="amount" defaultValue="100.00">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="amount"
          label="Payment"
          helperText="Enter the payment amount"
          thousandSeparator=","
          decimalSeparator="."
          slotProps={{
            inputGroup: {
              startAddon: <div>$</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FormExample name="amount" defaultValue="999.99">
      {(control) => (
        <RhfMoneyField
          // @ts-expect-error - Type incompatibility with react-hook-form generics in Storybook context
          control={control}
          name="amount"
          label="Locked Amount"
          disabled
          slotProps={{
            inputGroup: {
              startAddon: <div>$</div>,
            },
          }}
        />
      )}
    </FormExample>
  ),
};
