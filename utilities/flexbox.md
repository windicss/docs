# Flexbox

## Flex Direction

Utilities for controlling the direction of flex items.

| Class | Properties |
| :---- | :--------- |
| flex-row | flex-direction: row; |
| flex-row-reverse | flex-direction: row-reverse; |
| flex-col | flex-direction: column; |
| flex-col-reverse | flex-direction: column-reverse; |

## Flex Wrap

Utilities for controlling how flex items wrap.

| Class | Properties |
| :---- | :--------- |
| flex-wrap | flex-wrap: wrap; |
| flex-wrap-reverse | flex-wrap: wrap-reverse; |
| flex-nowrap | flex-wrap: nowrap; |

## Flex

Utilities for controlling how flex items both grow and shrink.

| Class | Properties |
| :---- | :--------- |
| flex-1 | flex: 1 1 0%; |
| flex-auto | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none | flex: none; |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
    },
  },
}
```

## Flex Grow

Utilities for controlling how flex items grow.

| Class | Properties |
| :---- | :--------- |
| flex-grow-0 | flex-grow: 0; |
| flex-grow | flex-grow: 1; |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    flexGrow: {
      0: 0,
      DEFAULT: 2,
      1: 1,
    },
  },
}
```

## Flex Shrink

Utilities for controlling how flex items shrink.

| Class | Properties |
| :---- | :--------- |
| flex-shrink-0 | flex-shrink: 0; |
| flex-shrink | flex-shrink: 1; |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    flexShrink: {
      0: 0,
      DEFAULT: 2,
      1: 1,
    },
  },
}
```

## Order

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
// windi.config.js
export default {
  theme: {
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      normal: '0',
    },
  },
}
```
