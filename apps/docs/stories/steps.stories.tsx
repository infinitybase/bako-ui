import { Button, Steps } from '@bako/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Steps.Root> = {
  title: 'Bako UI/Disclosure/Steps',
  component: Steps.Root,
};

export default meta;
type Story = StoryObj<typeof Steps.Root>;

const stepItems = [
  {
    title: 'Step 1',
    description: 'Create your account',
    content: 'Sign up with your email and password.',
  },
  {
    title: 'Step 2',
    description: 'Complete your profile',
    content: 'Add your personal information and preferences.',
  },
  {
    title: 'Step 3',
    description: 'Start using',
    content: 'Explore all features and get started!',
  },
];

export const Default: Story = {
  render: () => (
    <Steps.Root defaultStep={1} count={stepItems.length}>
      <Steps.List>
        {stepItems.map((step, index) => (
          <Steps.Item key={step.title} index={index}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {stepItems.map((step, index) => (
        <Steps.Content key={step.title} index={index}>
          {step.content}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Steps.PrevTrigger asChild>
          <Button size="sm" variant="outline">
            Prev
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button size="sm" variant="outline">
            Next
          </Button>
        </Steps.NextTrigger>
      </div>
    </Steps.Root>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Steps.Root defaultStep={1} count={stepItems.length}>
      <Steps.List>
        {stepItems.map((step, index) => (
          <Steps.Item key={step.title} index={index}>
            <Steps.Indicator />
            <div>
              <Steps.Title>{step.title}</Steps.Title>
              <Steps.Description>{step.description}</Steps.Description>
            </div>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {stepItems.map((step, index) => (
        <Steps.Content key={step.title} index={index}>
          {step.content}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Steps.PrevTrigger asChild>
          <Button size="sm" variant="outline">
            Prev
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button size="sm" variant="outline">
            Next
          </Button>
        </Steps.NextTrigger>
      </div>
    </Steps.Root>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Steps.Root orientation="vertical" defaultStep={1} count={stepItems.length}>
      <Steps.List>
        {stepItems.map((step, index) => (
          <Steps.Item key={step.title} index={index}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      <div>
        {stepItems.map((step, index) => (
          <Steps.Content key={step.title} index={index}>
            {step.content}
          </Steps.Content>
        ))}
        <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
          <Steps.PrevTrigger asChild>
            <Button size="sm" variant="outline">
              Prev
            </Button>
          </Steps.PrevTrigger>
          <Steps.NextTrigger asChild>
            <Button size="sm" variant="outline">
              Next
            </Button>
          </Steps.NextTrigger>
        </div>
      </div>
    </Steps.Root>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h3 style={{ marginBottom: '1rem' }}>Size: {size}</h3>
          <Steps.Root size={size} defaultStep={1} count={stepItems.length}>
            <Steps.List>
              {stepItems.map((step, index) => (
                <Steps.Item key={step.title} index={index}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {stepItems.map((step, index) => (
              <Steps.Content key={step.title} index={index}>
                {step.content}
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              All steps are complete!
            </Steps.CompletedContent>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <Steps.PrevTrigger asChild>
                <Button size="sm" variant="outline">
                  Prev
                </Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button size="sm" variant="outline">
                  Next
                </Button>
              </Steps.NextTrigger>
            </div>
          </Steps.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {(['solid', 'subtle'] as const).map((variant) => (
        <div key={variant}>
          <h3 style={{ marginBottom: '1rem' }}>Variant: {variant}</h3>
          <Steps.Root
            variant={variant}
            defaultStep={1}
            count={stepItems.length}
          >
            <Steps.List>
              {stepItems.map((step, index) => (
                <Steps.Item key={step.title} index={index}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {stepItems.map((step, index) => (
              <Steps.Content key={step.title} index={index}>
                {step.content}
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              All steps are complete!
            </Steps.CompletedContent>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <Steps.PrevTrigger asChild>
                <Button size="sm" variant="outline">
                  Prev
                </Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button size="sm" variant="outline">
                  Next
                </Button>
              </Steps.NextTrigger>
            </div>
          </Steps.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithColorPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      {(['blue', 'green', 'purple', 'red'] as const).map((color) => (
        <div key={color}>
          <h3 style={{ marginBottom: '1rem' }}>Color: {color}</h3>
          <Steps.Root
            colorPalette={color}
            defaultStep={1}
            count={stepItems.length}
          >
            <Steps.List>
              {stepItems.map((step, index) => (
                <Steps.Item key={step.title} index={index}>
                  <Steps.Indicator />
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Separator />
                </Steps.Item>
              ))}
            </Steps.List>

            {stepItems.map((step, index) => (
              <Steps.Content key={step.title} index={index}>
                {step.content}
              </Steps.Content>
            ))}
            <Steps.CompletedContent>
              All steps are complete!
            </Steps.CompletedContent>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <Steps.PrevTrigger asChild>
                <Button size="sm" variant="outline">
                  Prev
                </Button>
              </Steps.PrevTrigger>
              <Steps.NextTrigger asChild>
                <Button size="sm" variant="outline">
                  Next
                </Button>
              </Steps.NextTrigger>
            </div>
          </Steps.Root>
        </div>
      ))}
    </div>
  ),
};

export const NumberOnly: Story = {
  render: () => (
    <Steps.Root size="sm" defaultStep={1} count={stepItems.length}>
      <Steps.List>
        {stepItems.map((step, index) => (
          <Steps.Item key={step.title} index={index}>
            <Steps.Indicator />
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {stepItems.map((step, index) => (
        <Steps.Content key={step.title} index={index}>
          {step.content}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Steps.PrevTrigger asChild>
          <Button size="sm" variant="outline">
            Prev
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button size="sm" variant="outline">
            Next
          </Button>
        </Steps.NextTrigger>
      </div>
    </Steps.Root>
  ),
};

export const WithClickableTrigger: Story = {
  render: () => (
    <Steps.Root defaultStep={1} count={stepItems.length}>
      <Steps.List>
        {stepItems.map((step, index) => (
          <Steps.Item key={step.title} index={index}>
            <Steps.Trigger>
              <Steps.Indicator />
              <Steps.Title>{step.title}</Steps.Title>
            </Steps.Trigger>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {stepItems.map((step, index) => (
        <Steps.Content key={step.title} index={index}>
          {step.content}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Steps.PrevTrigger asChild>
          <Button size="sm" variant="outline">
            Prev
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button size="sm" variant="outline">
            Next
          </Button>
        </Steps.NextTrigger>
      </div>
    </Steps.Root>
  ),
};

export const CompleteState: Story = {
  render: () => (
    <Steps.Root step={stepItems.length} count={stepItems.length}>
      <Steps.List>
        {stepItems.map((step, index) => (
          <Steps.Item key={step.title} index={index}>
            <Steps.Indicator />
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      <Steps.CompletedContent>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            🎉 Congratulations!
          </h2>
          <p>You have successfully completed all the steps.</p>
        </div>
      </Steps.CompletedContent>
    </Steps.Root>
  ),
};

export const WithCustomStatus: Story = {
  render: () => (
    <Steps.Root defaultStep={1} count={stepItems.length}>
      <Steps.List>
        {stepItems.map((step, index) => (
          <Steps.Item key={step.title} index={index}>
            <Steps.Indicator>
              <Steps.Status complete="✓" incomplete={<Steps.Number />} />
            </Steps.Indicator>
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      {stepItems.map((step, index) => (
        <Steps.Content key={step.title} index={index}>
          {step.content}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Steps.PrevTrigger asChild>
          <Button size="sm" variant="outline">
            Prev
          </Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button size="sm" variant="outline">
            Next
          </Button>
        </Steps.NextTrigger>
      </div>
    </Steps.Root>
  ),
};
