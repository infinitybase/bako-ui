import { zodResolver } from '@hookform/resolvers/zod';
import { Button, RhfInput, RhfMoneyField } from 'bako-ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod/v4';

const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  amount: z.number().min(1, 'Amount must be at least 1'),
});

type Form = z.infer<typeof schema>;

export default function App() {
  const [formData, setFormData] = useState<Form | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleSubmitForm = (data: Form) => {
    setFormData(data);
  };

  return (
    <div
      style={{
        padding: 32,
        textAlign: 'center',
        display: 'grid',
        gap: 16,
        margin: '0 auto',
        maxWidth: 600,
      }}
    >
      <h1>Bako UI example</h1>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          width: '100%',
          margin: '0 auto',
        }}
      >
        <RhfInput
          name="name"
          control={control}
          label="Name"
          defaultValue=""
          error={errors.name}
        />

        <RhfMoneyField
          name="amount"
          control={control}
          label="Amount"
          defaultValue={0}
          error={errors.amount}
        />

        <Button type="submit">Submit</Button>
      </form>

      {formData && (
        <div
          style={{
            marginTop: 32,
            textAlign: 'left',
          }}
        >
          <pre
            style={{ border: '1px solid black', padding: 16, borderRadius: 8 }}
          >
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
