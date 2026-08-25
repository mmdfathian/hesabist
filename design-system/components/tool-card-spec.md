# Tool Card — Component Spec

## States

| State | Visual | Accessibility |
|-------|--------|---------------|
| **Rest** | White card, 1.5px border, shadow-sm | Visible to screen readers |
| **Hover** | translateY(-3px), shadow-md, primary border, gradient bar appears | None — decorative |
| **Active** | scale(0.97) | aria-pressed feedback |
| **Focus-visible** | 3px blue outline, 2px offset | WCAG 2.4.7 Focus Visible |
| **Category variant** | Top gradient bar color from category token | -- |

## Token Mapping

```
card background  → --color-bg-elevated
card border      → --card-border (1px solid --color-border)
card shadow      → --shadow-sm → --shadow-md on hover
card radius      → --radius-xl (1.5rem)
card padding     → --space-5 vertical, --space-3 horizontal
icon size        → 2.4rem
title size       → --text-sm / --font-bold
gradient bar     → --card-gradient (per-category)
```

## Accessibility

- `role="button"` + `tabindex="0"` on cards
- `aria-label="{tool title}"` for screen readers
- Keyboard: Enter/Space to activate
- Focus-visible ring via `:focus-visible` outline
- Color not sole indicator — gradient bar + text remain readable

## Responsive

| Breakpoint | Columns | Card Max |
|-----------|---------|----------|
| < 360px | 1 | 100% |
| 360-767px | 2 | 50% |
| 768-1023px | 3 | 33% |
| ≥ 1024px | 4 | 25% |

## HTML Pattern

```html
<article class="tool-card" data-cat="math" data-tool="math" 
         role="button" tabindex="0" aria-label="درصدگیری">
  <span class="icon" aria-hidden="true">🧮</span>
  <h3>درصدگیری</h3>
</article>
```