# @bako/ts-config

Shared TypeScript configuration presets used across the Bako UI monorepo.

## Available configs

| Export | Extends | Notes |
| --- | --- | --- |
| `@bako/ts-config/base` | — | Base compiler options for modern JavaScript/TypeScript. |
| `@bako/ts-config/react-library` | `base` | Settings for React component libraries (no emit by default). |
| `@bako/ts-config/react-app` | `base` | Settings for React applications and tooling (includes `vite/client` types). |

## Usage

```jsonc
// tsconfig.json
{
  "extends": "@bako/ts-config/react-library",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"]
}
```
