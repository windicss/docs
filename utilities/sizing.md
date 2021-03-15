# Sizing

## Width

Utilities for setting the width of an element

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| w-0 | width: 0px; |
| w-auto | width: auto; |
| w-px | width: 1px; |
| w-full | width: 100%; |
| w-screen | width: 100vw; |
| w-min | width: min-content; |
| w-max | width: max-content; |
| w-prose | width: 65ch; |
| w-xs | width: 20rem; |
| w-sm | width: 24rem; |
| w-md | width: 28rem; |
| w-lg | width: 32rem; |
| w-xl | width: 36rem; |
| w-2xl | width: 42rem; |
| w-3xl | width: 48rem; |
| w-screen-sm | width: 640px; |
| w-screen-md | width: 768px; |
| w-screen-lg | width: 1024px; |
| w-screen-xl | width: 1280px; |
| w-screen-2xl | width: 1536px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `w-${float}` | width: `${float/4}rem;` |
| `w-${fraction}` | width: `${percent};` |
| `w-${int}xl` | width: `${(number - 3) * 8 + 48}rem;` |
| `w-${size}` | width: `${size};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      width: {
        half: '50%',
      },
    },
  },
}
```

## Min-Width

Utilities for setting the minimum width of an element

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| min-w-0 | min-width: 0px; |
| min-w-px | min-width: 1px; |
| min-w-none | min-width: none; |
| min-w-full | min-width: 100%; |
| min-w-prose | min-width: 65ch; |
| min-w-screen | min-width: 100vw; |
| min-w-min | min-width: min-content; |
| min-w-max | min-width: max-content; |
| min-w-xs | min-width: 20rem; |
| min-w-sm | min-width: 24rem; |
| min-w-md | min-width: 28rem; |
| min-w-lg | min-width: 32rem; |
| min-w-xl | min-width: 36rem; |
| min-w-2xl | min-width: 42rem; |
| min-w-3xl | min-width: 48rem; |
| min-w-screen-sm | min-width: 640px; |
| min-w-screen-md | min-width: 768px; |
| min-w-screen-lg | min-width: 1024px; |
| min-w-screen-xl | min-width: 1280px; |
| min-w-screen-2xl | min-width: 1536px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `min-w-${float}` | min-width: `${float/4}rem;` |
| `min-w-${fraction}` | min-width: `${percent};` |
| `min-w-${int}xl` | min-width: `${(number - 3) * 8 + 48}rem;` |
| `min-w-${size}` | min-width: `${size};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    minWidth: {
      half: '50%',
      full: '100%',
    },
  },
}
```

## Max-Width

Utilities for setting the maximum width of an element

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| max-w-0 | max-width: 0px; |
| max-w-px | max-width: 1px; |
| max-w-none | max-width: none; |
| max-w-full | max-width: 100%; |
| max-w-prose | max-width: 65ch; |
| max-w-screen | max-width: 100vw; |
| max-w-min | max-width: min-content; |
| max-w-max | max-width: max-content; |
| max-w-xs | max-width: 20rem; |
| max-w-sm | max-width: 24rem; |
| max-w-md | max-width: 28rem; |
| max-w-lg | max-width: 32rem; |
| max-w-xl | max-width: 36rem; |
| max-w-2xl | max-width: 42rem; |
| max-w-3xl | max-width: 48rem; |
| max-w-screen-sm | max-width: 640px; |
| max-w-screen-md | max-width: 768px; |
| max-w-screen-lg | max-width: 1024px; |
| max-w-screen-xl | max-width: 1280px; |
| max-w-screen-2xl | max-width: 1536px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `max-w-${float}` | max-width: `${float/4}rem;` |
| `max-w-${fraction}` | max-width: `${percent};` |
| `max-w-${int}xl` | max-width: `${(number - 3) * 8 + 48}rem;` |
| `max-w-${size}` | max-width: `${size};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
  },
}
```

## Height

Utilities for setting the height of an element

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| h-0 | height: 0px; |
| h-auto | height: auto; |
| h-px | height: 1px; |
| h-full | height: 100%; |
| h-screen | height: 100vh; |
| h-min | height: min-content; |
| h-max | height: max-content; |
| h-prose | height: 65ch; |
| h-xs | height: 20rem; |
| h-sm | height: 24rem; |
| h-md | height: 28rem; |
| h-lg | height: 32rem; |
| h-xl | height: 36rem; |
| h-2xl | height: 42rem; |
| h-3xl | height: 48rem; |
| h-screen-sm | height: 640px; |
| h-screen-md | height: 768px; |
| h-screen-lg | height: 1024px; |
| h-screen-xl | height: 1280px; |
| h-screen-2xl | height: 1536px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `h-${float}` | height: `${float/4}rem;` |
| `h-${fraction}` | height: `${percent};` |
| `h-${int}xl` | height: `${(number - 3) * 8 + 48}rem;` |
| `h-${size}` | height: `${size};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

## Min-Height

Utilities for setting the minimum height of an element

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| min-h-0 | min-height: 0px; |
| min-h-px | min-height: 1px; |
| min-h-none | min-height: none; |
| min-h-full | min-height: 100%; |
| min-h-prose | min-height: 65ch; |
| min-h-screen | min-height: 100vh; |
| min-h-min | min-height: min-content; |
| min-h-max | min-height: max-content; |
| min-h-xs | min-height: 20rem; |
| min-h-sm | min-height: 24rem; |
| min-h-md | min-height: 28rem; |
| min-h-lg | min-height: 32rem; |
| min-h-xl | min-height: 36rem; |
| min-h-2xl | min-height: 42rem; |
| min-h-3xl | min-height: 48rem; |
| min-h-screen-sm | min-height: 640px; |
| min-h-screen-md | min-height: 768px; |
| min-h-screen-lg | min-height: 1024px; |
| min-h-screen-xl | min-height: 1280px; |
| min-h-screen-2xl | min-height: 1536px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `min-h-${float}` | min-height: `${float/4}rem;` |
| `min-h-${fraction}` | min-height: `${percent};` |
| `min-h-${int}xl` | min-height: `${(number - 3) * 8 + 48}rem;` |
| `min-h-${size}` | min-height: `${size};` |


### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
  },
}
```

## Max-Height

Utilities for setting the maximum height of an element

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| max-h-0 | max-height: 0px; |
| max-h-px | max-height: 1px; |
| max-h-none | max-height: none; |
| max-h-full | max-height: 100%; |
| max-h-prose | max-height: 65ch; |
| max-h-screen | max-height: 100vh; |
| max-h-min | max-height: min-content; |
| max-h-max | max-height: max-content; |
| max-h-xs | max-height: 20rem; |
| max-h-sm | max-height: 24rem; |
| max-h-md | max-height: 28rem; |
| max-h-lg | max-height: 32rem; |
| max-h-xl | max-height: 36rem; |
| max-h-2xl | max-height: 42rem; |
| max-h-3xl | max-height: 48rem; |
| max-h-screen-sm | max-height: 640px; |
| max-h-screen-md | max-height: 768px; |
| max-h-screen-lg | max-height: 1024px; |
| max-h-screen-xl | max-height: 1280px; |
| max-h-screen-2xl | max-height: 1536px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `max-h-${float}` | max-height: `${float/4}rem;` |
| `max-h-${fraction}` | max-height: `${percent};` |
| `max-h-${int}xl` | max-height: `${(number - 3) * 8 + 48}rem;` |
| `max-h-${size}` | max-height: `${size};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
  },
}
```
