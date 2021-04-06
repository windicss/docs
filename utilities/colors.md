# Colors

The color palette is ported from [Tailwind v2](https://tailwindcss.com/docs/customizing-colors), all credit goes to their hard work.

<ColorsPalette />

## Customization 

```ts
// windi.config.js
export default {
  theme: {
    colors: {
      // Configure your color palette here
    },
  },
}
```

### Reuse Colors

All the colors from the palette are enabled by default. If you want to set alias or reuse some colors from the palette, you can import them from `windicss/colors` module.

```ts
import colors from 'windicss/colors'

// windi.config.js
export default {
  theme: {
    colors: {
      grey: colors.gray,
    },
  },
}
```
