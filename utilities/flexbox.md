# Flexbox

## Flex

Use `flex` to create a block-level flex container.

| Class | Properties |
| :---- | :--------- |
| flex	| display: flex; |

## Inline Flex

Use `inline-flex` to create an inline flex container.

| Class | Properties |
| :---- | :--------- |
| inline-flex	| display: inline-flex; |

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

## Flex Stretch

Utilities for controlling how flex items both grow and shrink.

| Class | Properties |
| :---- | :--------- |
| flex-1 | flex: 1 1 0%; |
| flex-auto | flex: 1 1 auto; |
| flex-initial | flex: 0 1 auto; |
| flex-none | flex: none; |

<Customizing>

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

</Customizing>

## Flex Grow

Utilities for controlling how flex items grow.

| Class | Properties |
| :---- | :--------- |
| flex-grow-0 | flex-grow: 0; |
| flex-grow | flex-grow: 1; |

<Customizing>

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

</Customizing>

## Flex Shrink

Utilities for controlling how flex items shrink.

| Class | Properties |
| :---- | :--------- |
| flex-shrink-0 | flex-shrink: 0; |
| flex-shrink | flex-shrink: 1; |

<Customizing>

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

</Customizing>