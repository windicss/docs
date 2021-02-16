# Flexbox

## [Flex Direction](https://tailwindcss.com/docs/flex-direction)

Utilities for controlling the direction of flex items.

| Class | Properties |
| :---- | :--------- |
| flex-row | flex-direction: row; |
| flex-row-reverse | flex-direction: row-reverse; |
| flex-col | flex-direction: column; |
| flex-col-reverse | flex-direction: column-reverse; |

## [Flex Wrap](https://tailwindcss.com/docs/flex-wrap)

Utilities for controlling how flex items wrap.

| Class | Properties |
| :---- | :--------- |
| flex-wrap | flex-wrap: wrap; |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap | flex-wrap: nowrap; |

## [Flex](https://tailwindcss.com/docs/flex)

Utilities for controlling how flex items both grow and shrink.

| Class | Properties |
| :---- | :--------- |
| flex-1 | flex: 1 1 0%; |
| flex-auto | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none | flex: none; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      '2': '2 2 0%',
    }
  }
}
```

## [Flex Grow](https://tailwindcss.com/docs/flex-grow)

Utilities for controlling how flex items grow.

| Class | Properties |
| :---- | :--------- |
| flex-grow-0 | flex-grow: 0; |
| flex-grow | flex-grow: 1; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    flexGrow: {
      '0': 0,
      DEFAULT: 2,
      '1': 1,
    }
  }
}
```

## [Flex Shrink](https://tailwindcss.com/docs/flex-shrink)

Utilities for controlling how flex items shrink.

| Class | Properties |
| :---- | :--------- |
| flex-shrink-0 | flex-shrink: 0; |
| flex-shrink | flex-shrink: 1; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    flexShrink: {
      '0': 0,
      DEFAULT: 2,
      '1': 1,
    }
  }
}
```

## [Order](https://tailwindcss.com/docs/order) ⭐️

Utilities for controlling the order of flex and grid items.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| order-first | order: -9999; |
| order-last | order: 9999; |
| order-none | order: 0; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `order-${int}` | order: `${int};` |
| `-order-${int}` | order: `-${int};` |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      normal: '0',
    }
  }
}
```
