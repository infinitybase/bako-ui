---
"bako-ui": minor
---

Add ScrollArea component

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
import { ScrollArea } from 'bako-ui';

<ScrollArea.Root maxW="400px" maxH="300px">
  <ScrollArea.Viewport>
    {/* Your content */}
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar orientation="vertical">
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
</ScrollArea.Root>
```
