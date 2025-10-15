import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from 'bako-ui';

const meta: Meta<typeof Breadcrumb.Root> = {
  title: 'Bako UI/Disclosure/Breadcrumb',
  component: Breadcrumb.Root,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb.Root>;

export const Default: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Breadcrumb</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  ),
};

export const WithCustomSeparator: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>→</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>→</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>•</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>•</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </div>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Ellipsis />
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Breadcrumb</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  ),
};

export const WithSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <div key={size}>
          <h3 style={{ marginBottom: '0.5rem' }}>Size: {size}</h3>
          <Breadcrumb.Root size={size}>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['plain', 'underline'] as const).map((variant) => (
        <div key={variant}>
          <h3 style={{ marginBottom: '0.5rem' }}>Variant: {variant}</h3>
          <Breadcrumb.Root variant={variant}>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithColorPalette: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['blue', 'green', 'red', 'purple'] as const).map((color) => (
        <div key={color}>
          <h3 style={{ marginBottom: '0.5rem' }}>Color: {color}</h3>
          <Breadcrumb.Root colorPalette={color}>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
        </div>
      ))}
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            🏠 Home
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            📚 Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="#"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            🧩 Components
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Breadcrumb</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  ),
};

export const Simple: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>Current</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  ),
};

export const Long: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Products</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Electronics</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Computers</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Laptops</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.CurrentLink>MacBook Pro</Breadcrumb.CurrentLink>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  ),
};
