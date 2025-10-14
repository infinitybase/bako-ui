import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Steps } from './steps';

const stepItems = [
  { title: 'Step 1', description: 'First step' },
  { title: 'Step 2', description: 'Second step' },
  { title: 'Step 3', description: 'Third step' },
];

describe('Steps', () => {
  it('renders steps with titles', () => {
    render(
      <ChakraWrapper>
        <Steps.Root count={stepItems.length} data-testid="steps">
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('steps')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
    expect(screen.getByText('Step 3')).toBeInTheDocument();
  });

  it('renders with default step', () => {
    render(
      <ChakraWrapper>
        <Steps.Root defaultStep={1} count={stepItems.length}>
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('Step 1')).toBeInTheDocument();
  });

  it('renders step content', () => {
    render(
      <ChakraWrapper>
        <Steps.Root defaultStep={0} count={stepItems.length}>
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
          {stepItems.map((step, index) => (
            <Steps.Content key={index.toString()} index={index}>
              {step.description}
            </Steps.Content>
          ))}
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('First step')).toBeInTheDocument();
  });

  it('renders completed content when all steps done', () => {
    render(
      <ChakraWrapper>
        <Steps.Root step={stepItems.length} count={stepItems.length}>
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
          <Steps.CompletedContent>All steps complete!</Steps.CompletedContent>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('All steps complete!')).toBeInTheDocument();
  });

  it('navigates with next and prev buttons', async () => {
    const user = userEvent.setup();

    render(
      <ChakraWrapper>
        <Steps.Root defaultStep={0} count={stepItems.length}>
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
          {stepItems.map((step, index) => (
            <Steps.Content key={index.toString()} index={index}>
              {step.description}
            </Steps.Content>
          ))}
          <Steps.NextTrigger data-testid="next-btn">Next</Steps.NextTrigger>
          <Steps.PrevTrigger data-testid="prev-btn">Prev</Steps.PrevTrigger>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('First step')).toBeInTheDocument();

    const nextBtn = screen.getByTestId('next-btn');
    await user.click(nextBtn);

    await waitFor(() => {
      expect(screen.getByText('Second step')).toBeInTheDocument();
    });
  });

  it('renders with different sizes', () => {
    const { rerender } = render(
      <ChakraWrapper>
        <Steps.Root size="sm" count={stepItems.length} data-testid="steps">
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('steps')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Steps.Root size="lg" count={stepItems.length} data-testid="steps">
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('steps')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(
      <ChakraWrapper>
        <Steps.Root
          variant="solid"
          count={stepItems.length}
          data-testid="steps"
        >
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('steps')).toBeInTheDocument();

    rerender(
      <ChakraWrapper>
        <Steps.Root
          variant="subtle"
          count={stepItems.length}
          data-testid="steps"
        >
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('steps')).toBeInTheDocument();
  });

  it('renders with vertical orientation', () => {
    render(
      <ChakraWrapper>
        <Steps.Root
          orientation="vertical"
          count={stepItems.length}
          data-testid="steps"
        >
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    const stepsRoot = screen.getByTestId('steps');
    expect(stepsRoot).toBeInTheDocument();
    expect(stepsRoot).toHaveAttribute('data-orientation', 'vertical');
  });

  it('renders with description', () => {
    render(
      <ChakraWrapper>
        <Steps.Root count={stepItems.length}>
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <div>
                  <Steps.Title>{step.title}</Steps.Title>
                  <Steps.Description>{step.description}</Steps.Description>
                </div>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByText('First step')).toBeInTheDocument();
    expect(screen.getByText('Second step')).toBeInTheDocument();
  });

  it('applies custom className to root', () => {
    render(
      <ChakraWrapper>
        <Steps.Root
          className="custom-steps"
          count={stepItems.length}
          data-testid="steps"
        >
          <Steps.List>
            {stepItems.map((step, index) => (
              <Steps.Item key={index.toString()} index={index}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
        </Steps.Root>
      </ChakraWrapper>
    );

    expect(screen.getByTestId('steps')).toHaveClass('custom-steps');
  });
});
