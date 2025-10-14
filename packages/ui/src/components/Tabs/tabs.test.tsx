import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ChakraWrapper } from '../../helpers/test-utils';
import { Tabs } from './tabs';

const renderWithChakra = (ui: React.ReactElement) => {
  return render(ui, { wrapper: ChakraWrapper });
};

describe('Tabs', () => {
  it('renders tabs with content', () => {
    renderWithChakra(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs.Root>
    );
    
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('switches between tabs on click', async () => {
    const user = userEvent.setup();
    renderWithChakra(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs.Root>
    );
    
    expect(screen.getByText('Content 1')).toBeVisible();
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(tab2);
    
    expect(screen.getByText('Content 2')).toBeVisible();
  });

  it('supports disabled tabs', () => {
    renderWithChakra(
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2" disabled>Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs.Root>
    );
    
    const tab2 = screen.getByRole('tab', { name: 'Tab 2' });
    expect(tab2).toBeDisabled();
  });

  it('supports vertical orientation', () => {
    renderWithChakra(
      <Tabs.Root defaultValue="tab1" orientation="vertical">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs.Root>
    );
    
    expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument();
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });
});
