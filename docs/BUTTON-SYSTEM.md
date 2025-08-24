# Button System Documentation

## Overview

The TIS Risk Management platform now features a comprehensive, standardized button system that ensures consistent behavior, hover effects, and styling across all components. This system replaces the previous inconsistent button implementations with a unified approach.

## Button Variants

### Primary Button (`variant="primary"`)
- **Use case**: Main actions, primary CTAs, form submissions
- **Default styling**: Blue background with white text
- **Hover effect**: Lifts up 2px with shadow, darkens background
- **Example**: "Submit", "Save", "Continue"

### Secondary Button (`variant="secondary"`)
- **Use case**: Secondary actions, alternative options
- **Default styling**: Gray background with white text
- **Hover effect**: Lifts up 2px with shadow, darkens background
- **Example**: "Cancel", "Back", "Skip"

### Outline Button (`variant="outline"`)
- **Use case**: Secondary actions, less prominent CTAs
- **Default styling**: Transparent background with blue border and text
- **Hover effect**: Lifts up 2px with shadow, light blue background
- **Example**: "Learn More", "View Details", "Secondary Action"

### Ghost Button (`variant="ghost"`)
- **Use case**: Subtle actions, navigation elements
- **Default styling**: Transparent background with blue text
- **Hover effect**: Lifts up 1px, light blue background
- **Example**: "Close", "Skip", "Navigation"

### Danger Button (`variant="danger"`)
- **Use case**: Destructive actions, warnings
- **Default styling**: Red background with white text
- **Hover effect**: Lifts up 2px with shadow, darkens background
- **Example**: "Delete", "Remove", "Cancel Subscription"

### Success Button (`variant="success"`)
- **Use case**: Positive actions, confirmations
- **Default styling**: Green background with white text
- **Hover effect**: Lifts up 2px with shadow, darkens background
- **Example**: "Confirm", "Approve", "Activate"

## Button Sizes

### Extra Small (`size="xs"`)
- Height: 24px
- Font size: xs
- Padding: 2px horizontal, 1px vertical

### Small (`size="sm"`)
- Height: 32px
- Font size: sm
- Padding: 3px horizontal, 1px vertical

### Medium (`size="md"`) - Default
- Height: 40px
- Font size: md
- Padding: 4px horizontal, 2px vertical

### Large (`size="lg"`)
- Height: 48px
- Font size: lg
- Padding: 6px horizontal, 3px vertical

### Extra Large (`size="xl"`)
- Height: 56px
- Font size: xl
- Padding: 8px horizontal, 4px vertical

## Consistent Hover Effects

All buttons now feature standardized hover animations:

### Transform Effects
- **Primary/Secondary/Danger/Success**: `translateY(-2px)` lift effect
- **Outline**: `translateY(-2px)` lift effect
- **Ghost**: `translateY(-1px)` subtle lift effect

### Shadow Effects
- **Primary/Secondary/Danger/Success**: `boxShadow: 'lg'` on hover
- **Outline**: `boxShadow: 'md'` on hover
- **Ghost**: No shadow (subtle effect)

### Background Changes
- **Primary**: `blue.500` → `blue.600`
- **Secondary**: `gray.500` → `gray.600`
- **Outline**: `transparent` → `blue.50`
- **Ghost**: `transparent` → `blue.50`
- **Danger**: `red.500` → `red.600`
- **Success**: `green.500` → `green.600`

## Special Cases

### Footer Links
Footer buttons use the `data-footer="true"` attribute for special styling:
- White text color
- Hover: Blue text with horizontal slide effect (`translateX(4px)`)

### Disabled State
All buttons support disabled state with consistent styling:
- Gray background and text
- No hover effects
- Cursor: not-allowed

### Loading State
All buttons support loading state with spinner animation:
- Maintains button dimensions
- Shows loading spinner
- Disables interaction

## Usage Examples

### Basic Button
```tsx
import Button from '@/components/ui/button';

<Button variant="primary" size="md">
  Click Me
</Button>
```

### Button with Icons
```tsx
<Button 
  variant="outline" 
  size="lg"
  leftIcon={<BsDownload />}
  rightIcon={<BsArrowRight />}
>
  Download & Continue
</Button>
```

### Button with Loading State
```tsx
<Button 
  variant="primary" 
  size="md"
  isLoading
>
  Saving...
</Button>
```

### Button with Custom Width
```tsx
<Button 
  variant="primary" 
  size="md"
  width="full"
>
  Full Width Button
</Button>
```

## Migration Guide

### Old Button Usage
```tsx
// ❌ Old inconsistent approach
<Button 
  variant="solid" 
  colorScheme="blue"
  _hover={{
    transform: 'translateY(-2px)',
    boxShadow: 'lg',
  }}
>
  Old Button
</Button>
```

### New Button Usage
```tsx
// ✅ New standardized approach
<Button variant="primary">
  New Button
</Button>
```

### Common Migrations
- `variant="solid" colorScheme="blue"` → `variant="primary"`
- `variant="solid" colorScheme="green"` → `variant="success"`
- `variant="solid" colorScheme="red"` → `variant="danger"`
- `variant="outline"` → `variant="outline"` (same)
- `variant="ghost"` → `variant="ghost"` (same)

## Testing

Use the `ButtonShowcase` component to test all button variants:

```tsx
import { ButtonShowcase } from '@/components';

// Add to any page for testing
<ButtonShowcase />
```

## Benefits

1. **Consistency**: All buttons behave the same way across the platform
2. **Maintainability**: Single source of truth for button styles
3. **Accessibility**: Consistent focus states and hover effects
4. **Performance**: Optimized animations and transitions
5. **Developer Experience**: Simple, intuitive API
6. **Design System**: Unified visual language

## Future Enhancements

- Dark mode support
- Custom color schemes
- Animation customization
- Advanced interaction states
- Micro-interactions
