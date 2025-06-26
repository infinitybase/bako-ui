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
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build

# Run linter
npm run lint
```
- `npm run test:ui` - Abre a interface visual do Vitest
- `npm run test:coverage` - Executa os testes com relatório de cobertura

### Storybook

- `npm run storybook` - Inicia o Storybook em modo desenvolvimento
- `npm run build-storybook` - Constrói o Storybook para produção

## Configuração de Testes

O projeto está configurado com:

- **Vitest** - Framework de testes rápido
- **React Testing Library** - Utilitários para testar componentes React
- **Jest DOM** - Matchers customizados para o DOM
- **jsdom** - Ambiente DOM simulado para testes
- **User Event** - Simulação de interações do usuário

### Arquivos de Configuração

- `vite.config.ts` - Configuração do Vitest
- `setup-test.ts` - Configuração inicial dos testes
- `src/types/test.d.ts` - Tipos do TypeScript para testes
- `src/test-utils.tsx` - Utilitários reutilizáveis para testes

## Exemplos de Teste

### Teste Básico de Componente

```typescript
import { renderWithChakra } from '../test-utils';
import Button from './button';

test('renders button with text', () => {
	renderWithChakra(<Button>Click me</Button>);
	expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
```

### Teste de Componente com React Hook Form

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

## Utilitários de Teste

O arquivo `src/test-utils.tsx` exporta:

- `ChakraWrapper` - Componente wrapper com contexto do Chakra UI
- `renderWithChakra` - Função que renderiza componentes com o contexto necessário

## Estrutura do Projeto

```
src/
├── components/
│   ├── Button/
│   │   ├── button.tsx                    # Componente
│   │   ├── button.stories.tsx            # Stories do Storybook
│   │   └── button.test.tsx               # Testes unitários
│   └── RhfInput/
│       ├── rhf-input.tsx                 # Componente
│       ├── rhf-input.types.tsx           # Tipos TypeScript
│       ├── rhf-input.stories.tsx         # Stories do Storybook
│       └── rhf-input.test.tsx            # Testes unitários
├── theme/
│   └── index.ts                          # Configuração do tema
├── types/
│   └── test.d.ts                         # Tipos para testes
├── test-utils.tsx                        # Utilitários reutilizáveis
├── setup-test.ts                         # Configuração inicial dos testes
└── vite.config.ts                        # Configuração do Vite/Vitest
```

## Comandos Úteis

```bash
# Executar testes em modo watch
npm test

# Executar testes uma vez
npm run test:run

# Abrir interface visual do Vitest
npm run test:ui

# Executar testes com cobertura
npm run test:coverage

# Atualizar snapshots
npm test -- -u

# Executar apenas testes do Button
npm test -- Button

# Executar apenas testes do RhfInput
npm test -- RhfInput

# Executar testes de componentes específicos
npm test -- components/
```
