# ds3-preview

React preview app for Sellsuki Design System 3.0.
Stack: React 18, TypeScript, Tailwind CSS, Vite.

## Font Size Rules (STRICT — no exceptions)

| Rule | Detail |
|------|--------|
| **Minimum 18px** | `var(--font-size-caption, 18px)` is the absolute minimum |
| **Token-only** | Always `var(--font-size-*)` — never hardcode px values |
| **No Tailwind size** | `text-xs` (12px), `text-sm` (14px) are **FORBIDDEN** for content text |
| **No inline px** | Never `fontSize: "11px"` or `fontSize: "13px"` or any value below 18 |

```tsx
// CORRECT
style={{ fontSize: "var(--font-size-caption, 18px)" }}   // minimum
style={{ fontSize: "var(--font-size-p, 20px)" }}          // body
style={fontBody}                                           // from _showcase-factory
style={fontLabel}                                          // from _showcase-factory

// FORBIDDEN
style={{ fontSize: "11px" }}    // too small
style={{ fontSize: "13px" }}    // too small
className="text-xs"             // Tailwind 12px
className="text-sm"             // Tailwind 14px
```

> Exception: UI chrome (shadcn components in `src/app/components/ui/`) may use smaller sizes.
> Content pages in `src/app/pages/` MUST follow the 18px minimum.

## Token usage

Always use CSS custom properties from DS 3.0:

```tsx
// Color
style={{ color: "var(--text-primary)" }}
style={{ background: "var(--bg-primary)" }}

// Font
style={{ fontFamily: "var(--font-p)" }}
style={{ fontSize: "var(--font-size-p, 20px)" }}

// Spacing / Radius
style={{ borderRadius: "var(--radius-md)" }}
```

## Shared style helpers (`_showcase-factory.tsx`)

| Export | Use for |
|--------|---------|
| `fontBody` | Body / paragraph text |
| `fontLabel` | Section labels, card titles |
| `fontLabelBold` | Bold labels |

## Key files

| File | Purpose |
|------|---------|
| `src/app/App.tsx` | Router + sidebar nav |
| `src/app/pages/ds3/` | DS 3.0 showcase pages |
| `src/app/pages/_showcase-factory.tsx` | Shared style helpers |
| `src/styles/index.css` | Global CSS (includes font reset for code/pre) |
| `src/styles/theme.css` | Design token CSS variables |
