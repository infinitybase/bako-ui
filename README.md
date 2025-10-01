# Bako UI Monorepo

This repository is a [Turborepo](https://turbo.build/repo) managed monorepo powered by [pnpm](https://pnpm.io). The design system lives in `packages/ui` and can be built, tested, linted, and previewed through the shared workspace scripts.

## Prerequisites

- Node.js 18+
- pnpm 9.x (automatically installed via `corepack enable` if needed)

## Install dependencies

```bash
pnpm install
```

## Available scripts

All workspace tasks proxy to the package scripts through Turborepo:

| Command | Description |
| --- | --- |
| `pnpm dev` | Run all dev servers in parallel (as configured per package). |
| `pnpm build` | Build every package (`@bako/ui` compiles library bundles). |
| `pnpm test` | Execute unit tests in each package (Vitest in `@bako/ui`). |
| `pnpm lint` | Run Biome lint/format checks. |
| `pnpm storybook` | Launch Storybook from `apps/docs` against `@bako/ui`. |
| `pnpm typegen` | Generate Chakra theme typings. |
| `pnpm clean` | Clean build artifacts across the repo. |

To run a script for a single package, use the `--filter` flag:

```bash
pnpm build --filter @bako/ui
```

## Workspace layout

- `packages/ui`: Bako design system (React + Chakra UI)
  - `src/`: Component source code and stories
  - `tsup.config.ts`: Library bundler configuration (ESM + CJS)
  - `vitest.config.ts`: Vitest runner configuration
  - `package.json`: Library-specific scripts and dependencies
- `packages/ts-config`: Shared TypeScript configuration presets used across the repo
- `apps/docs`: Storybook application that consumes `@bako/ui`
  - `.storybook/`: Storybook configuration pointing at the UI package
  - `package.json`: Storybook scripts and Chromatic integration

## Publishing `@bako/ui`

1. Ensure the package version is bumped in `packages/ui/package.json` (`pnpm version [patch|minor|major] --filter @bako/ui`).
2. Build the package: `pnpm build --filter @bako/ui`
3. (Optional) Inspect the package tarball: `pnpm pack --filter @bako/ui`
4. Publish to npm (requires access to the `@bako` scope):

```bash
pnpm publish --filter @bako/ui --access public
```

If your npm account uses 2FA, supply `--otp=<code>` during publish.

## Continuous integration

In CI environments, prefer running:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm test
pnpm build
```

These commands guarantee type safety, passing tests, and a production-ready build of the design system.
