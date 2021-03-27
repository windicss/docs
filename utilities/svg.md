# SVG

## Fill

Utilities for styling the fill of SVG elements.

| Class | Properties |
| :---- | :--------- |
| fill-current | fill: currentColor; |
| fill-transparent | fill: transparent; |
| `fill-${color}` | fill: `${color};` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    fill: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
  },
}
```

## Stroke

Utilities for styling the stroke of SVG elements.

| Class | Properties |
| :---- | :--------- |
| stroke-current | stroke: currentColor; |
| stroke-transparent | stroke: transparent; |
| `stroke-${color}` | stroke: `${color};` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    stroke: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
  },
}
```

## Stroke Width

Utilities for styling the stroke width of SVG elements.

| Class | Properties |
| :---- | :--------- |
| `stroke-${int}` | stroke-width: `${int};` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    extend: {
      strokeWidth: {
        sm: '4',
        lg: '8',
      },
    },
  },
}
```
