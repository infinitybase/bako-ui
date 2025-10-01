# Bako UI

Bako Design System - A modern React component library built with Chakra UI.

## Installation

```bash
npm install @bako-ui
# or
yarn add @bako-ui
# or
pnpm add @bako-ui
```

## Usage

```tsx
import { Button, RhfInput, theme } from '@bako-ui';
import { ChakraProvider } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function App() {
  const { control } = useForm();

  return (
    <ChakraProvider value={theme}>
      <Button colorPalette="primary">
        Click me
      </Button>
      
      <RhfInput
        control={control}
        name="email"
        label="Email Address"
        type="email"
      />
    </ChakraProvider>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and states.

```tsx
import { Button } from '@bako-ui';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// With colors
<Button colorPalette="red">Red Button</Button>

// With loading state
<Button loading loadingText="Loading...">Submit</Button>

// With icons
<Button>
  <WalletIcon />
  Connect Wallet
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'solid' \| 'outline' \| 'ghost' \| 'plain' \| 'shaded'` | `'solid'` | Button variant |
| `colorPalette` | `string` | `'primary'` | Color palette for the button |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading state |
| `loadingText` | `string` | - | Text to show when loading |
| `disabled` | `boolean` | `false` | Disable the button |

### RhfInput

A form input component with floating labels, built for React Hook Form integration.

```tsx
import { RhfInput } from '@bako-ui';
import { useForm } from 'react-hook-form';

function LoginForm() {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Basic usage */}
      <RhfInput
        control={control}
        name="email"
        label="Email"
        type="email"
      />

      {/* With validation */}
      <RhfInput
        control={control}
        name="password"
        label="Password"
        type="password"
        rules={{ required: 'Password is required' }}
      />

      {/* With helper text */}
      <RhfInput
        control={control}
        name="username"
        label="Username"
        helperText="Choose a unique username"
      />

      {/* With icons */}
      <RhfInput
        control={control}
        name="amount"
        label="Amount"
        type="number"
        slotProps={{
          inputGroup: {
            startElement: <span>$</span>,
            endElement: <span>USD</span>
          }
        }}
      />
    </form>
  );
}
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `control` | `Control` | - | React Hook Form control object |
| `name` | `string` | - | Field name for form registration |
| `label` | `string` | - | Floating label text |
| `type` | `string` | `'text'` | Input type (text, email, password, etc.) |
| `helperText` | `string` | - | Helper text displayed below input |
| `error` | `FieldError` | - | Error object from React Hook Form |
| `rules` | `RegisterOptions` | - | Validation rules |
| `disabled` | `boolean` | `false` | Disable the input |
| `slotProps` | `object` | - | Props for customizing sub-components |

#### SlotProps

The `slotProps` prop allows customization of internal components:

```tsx
<RhfInput
  // ...other props
  slotProps={{
    // Customize the input group container
    inputGroup: {
      startElement: <Icon />,
      endElement: <Button />,
      startAddon: <Text>https://</Text>,
      endAddon: <Text>.com</Text>
    },
    // Customize the input element
    input: {
      className: 'custom-input',
      'data-testid': 'username-input'
    },
    // Customize the root container
    root: {
      maxW: 'md'
    }
  }}
/>
```

#### Features

- **Floating Labels**: Labels animate smoothly when input gains focus or has value
- **React Hook Form Integration**: Seamless integration with validation and form state
- **Chakra UI Styling**: Consistent with Chakra UI design system
- **Icon Support**: Start and end elements/addons support
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **TypeScript Support**: Full TypeScript support with type inference

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook (docs app)
pnpm storybook

# Run tests
pnpm test

# Build library
pnpm build

# Run linter
pnpm lint
```

### Testing

- `pnpm test:ui` - Opens Vitest visual interface
- `pnpm test:coverage` - Runs tests with coverage report

### Storybook

Storybook now lives in `apps/docs`.

- `pnpm storybook` - Starts Storybook in development mode
- `pnpm build --filter @bako/docs` - Builds the static Storybook bundle

## Test Configuration

The project is configured with:

- **Vitest** - Fast testing framework
- **React Testing Library** - Utilities for testing React components
- **Jest DOM** - Custom DOM matchers
- **jsdom** - Simulated DOM environment for tests
- **User Event** - User interaction simulation

### Configuration Files

- `vite.config.ts` - Vitest configuration
- `setup-test.ts` - Initial test setup
- `src/types/test.d.ts` - TypeScript types for tests
- `src/test-utils.tsx` - Reusable test utilities

## Test Examples

### Basic Component Test

```typescript
import { renderWithChakra } from '../test-utils';
import Button from './button';

test('renders button with text', () => {
	renderWithChakra(<Button>Click me</Button>);
	expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
```

### React Hook Form Component Test

```typescript
import { useForm } from 'react-hook-form';
import { renderWithChakra } from '../test-utils';
import { RhfInput } from './rhf-input';

test('handles user input correctly', async () => {
	const TestWrapper = () => {
		const { control } = useForm();
		return <RhfInput control={control} name="test" label="Test Field" />;
	};

	renderWithChakra(<TestWrapper />);
	
	const input = screen.getByRole('textbox');
	await userEvent.type(input, 'test value');
	
	expect(input).toHaveValue('test value');
});
```

## Test Utilities

The `src/test-utils.tsx` file exports:

- `ChakraWrapper` - Wrapper component with Chakra UI context
- `renderWithChakra` - Function that renders components with necessary context

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── button.tsx                    # Component
│   │   ├── button.stories.tsx            # Storybook stories
│   │   └── button.test.tsx               # Unit tests
│   └── RhfInput/
│       ├── rhf-input.tsx                 # Component
│       ├── rhf-input.types.tsx           # TypeScript types
│       ├── rhf-input.stories.tsx         # Storybook stories
│       └── rhf-input.test.tsx            # Unit tests
├── theme/
│   └── index.ts                          # Theme configuration
├── types/
│   └── test.d.ts                         # TypeScript types for tests
├── test-utils.tsx                        # Reusable utilities
├── setup-test.ts                         # Initial test setup
└── vite.config.ts                        # Vite/Vitest configuration
```

## Useful Commands

```bash
# Run tests in watch mode
pnpm test:watch

# Run tests once
pnpm test

# Open Vitest visual interface
pnpm test:ui

# Run tests with coverage
pnpm test:coverage

# Update snapshots
pnpm test -- -u

# Run only Button tests
pnpm test -- Button

# Run only RhfInput tests
pnpm test -- RhfInput

# Run specific component tests
pnpm test -- components/
```

## License

ISC
