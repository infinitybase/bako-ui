# @bako/ui

## 0.5.1

### Patch Changes

- [#23](https://github.com/infinitybase/bako-ui/pull/23) [`58cac38`](https://github.com/infinitybase/bako-ui/commit/58cac3837769a851cd72709e8fa3f1e948b66878) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - update border radius in components recipes

## 0.5.0

### Minor Changes

- [#22](https://github.com/infinitybase/bako-ui/pull/22) [`f50b1a8`](https://github.com/infinitybase/bako-ui/commit/f50b1a894e02f571bc9ab6dc19e201a35399e026) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - Add ScrollArea component

  Added a new ScrollArea component that provides customizable scrollable containers with support for both vertical and horizontal scrolling.

  **Features:**
  - Vertical and horizontal scrollbars
  - Customizable scroll behavior
  - Supports both directions simultaneously
  - Native scrollbar styling with Chakra UI theming
  - Fully typed with TypeScript

  **Components:**
  - `ScrollArea.Root` - Main container component
  - `ScrollArea.Viewport` - Scrollable content area
  - `ScrollArea.Scrollbar` - Customizable scrollbar
  - `ScrollArea.Thumb` - Scrollbar thumb indicator
  - `ScrollArea.Corner` - Corner element for both scrollbars

  **Usage:**

  ```tsx
  import { ScrollArea } from "bako-ui";

  <ScrollArea.Root maxW="400px" maxH="300px">
    <ScrollArea.Viewport>{/* Your content */}</ScrollArea.Viewport>
    <ScrollArea.Scrollbar orientation="vertical">
      <ScrollArea.Thumb />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>;
  ```

## 0.4.2

### Patch Changes

- [#20](https://github.com/infinitybase/bako-ui/pull/20) [`ccef5d4`](https://github.com/infinitybase/bako-ui/commit/ccef5d417cb2c75ec3c5290191c79fa785e274cc) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - update default border radius for input and textarea

## 0.4.1

### Patch Changes

- [`d36ceee`](https://github.com/infinitybase/bako-ui/commit/d36ceeeccb94853a3864846530808091ae4d9da6) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - fix react types

## 0.4.0

### Minor Changes

- [`e7c9ad5`](https://github.com/infinitybase/bako-ui/commit/e7c9ad50d4aa2bebb1352fd8eddc1013acdc2479) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - add charts

## 0.3.2

### Patch Changes

- [`a3e01e0`](https://github.com/infinitybase/bako-ui/commit/a3e01e0201727956ed4dcc7ee8a9396818a893cf) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - fix radio component to show indicator

## 0.3.1

### Patch Changes

- [`1500093`](https://github.com/infinitybase/bako-ui/commit/150009323542ef0c87855bb5f4a2984525028731) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - update badge recipe

## 0.3.0

### Minor Changes

- [#13](https://github.com/infinitybase/bako-ui/pull/13) [`d87596a`](https://github.com/infinitybase/bako-ui/commit/d87596ab6ea9db1aa2009d76668b667f5809c1fa) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - add float component

## 0.2.5

### Patch Changes

- [#11](https://github.com/infinitybase/bako-ui/pull/11) [`1176466`](https://github.com/infinitybase/bako-ui/commit/117646679e5e9e45f161694b8cec46cd9a49fcc9) Thanks [@Vitosoaresp](https://github.com/Vitosoaresp)! - improve avatar loading with skeleton and export select hooks

## 0.2.4

### Patch Changes

- f7d035a: fix RhfInput label color

## 0.2.3

### Patch Changes

- 6edb03d: add ref prop to button

## 0.2.2

### Patch Changes

- e84ef2d: update tooltip props and add accordion recipe

## 0.2.1

### Patch Changes

- 5a469d4: add freeSolo option to RhfCombobox

## 0.2.0

### Minor Changes

- 809f1c4: feat: add multiple new components to design system

## 0.1.0

### Minor Changes

- 4be38b3: add money field component
