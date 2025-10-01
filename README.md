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
| `pnpm changeset` | Start an interactive prompt to record version notes for affected packages. |
| `pnpm version-packages` | Apply pending changesets to package versions and changelogs. |
| `pnpm release` | Publish all packages with unreleased changesets to npm. |

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

## Release workflow with Changesets

This repository uses [Changesets](https://github.com/changesets/changesets) to coordinate versioning and releases for every workspace package.

1. While implementing a change, run `pnpm changeset` and choose the affected packages and semver bump. The command creates a markdown summary in `.changeset/` that should be committed alongside your code.
2. When you're ready to cut a release, run `pnpm version-packages` on the default branch. This updates versions, generates changelog entries, and removes applied changeset files.
3. Commit the resulting version bumps and changelog updates (often via a release PR).
4. Publish the new versions with `pnpm release`. Ensure your npm authentication is configured (including OTP if required) before running the command.

You can still target a single package by combining these commands with `--filter` if necessary (for example, `pnpm build --filter @bako/ui`).

## Continuous integration

In CI environments, prefer running:

```bash
pnpm install --frozen-lockfile
pnpm lint
pnpm test
pnpm build
```

These commands guarantee type safety, passing tests, and a production-ready build of the design system.
