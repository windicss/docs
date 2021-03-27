# Spacing

## Padding

Utilities for controlling an element's padding.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| p-0 | padding: 0px; |
| p-px | padding: 1px; |
| py-0 | padding-top: 0px;<br>padding-bottom: 0px; |
| py-px | padding-top: 1px;<br>padding-bottom: 1px; |
| px-0 | padding-left: 0px;<br>padding-right: 0px; |
| px-px | padding-left: 1px;<br>padding-right: 1px; |
| pt-0 | padding-top: 0px; |
| pt-px | padding-top: 1px; |
| pr-0 | padding-right: 0px; |
| pr-px | padding-right: 1px; |
| pb-0 | padding-bottom: 0px; |
| pb-px | padding-bottom: 1px; |
| pl-0 | padding-left: 0px; |
| pl-px | padding-left: 1px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `p-${float}` | padding: `${float/4}rem;` |
| `py-${float}` | padding-top: `${float/4}rem;`<br>padding-bottom: `${float/4}rem;` |
| `px-${float}` | padding-left: `${float/4}rem;`<br>padding-right: `${float/4}rem;` |
| `pt-${float}` | padding-top: `${float/4}rem;` |
| `pr-${float}` | padding-right: `${float/4}rem;` |
| `pb-${float}` | padding-bottom: `${float/4}rem;` |
| `pl-${float}` | padding-left: `${float/4}rem;` |
| `p-${size}` | padding: `${size};` |
| `py-${size}` | padding-top: `${size};`<br>padding-bottom: `${size};` |
| `px-${size}` | padding-left: `${size};`<br>padding-right: `${size};` |
| `pt-${size}` | padding-top: `${size};` |
| `pr-${size}` | padding-right: `${size};` |
| `pb-${size}` | padding-bottom: `${size};` |
| `pl-${size}` | padding-left: `${size};` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    padding: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

## Margin

Utilities for controlling an element's margin.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| m-0 | margin: 0px; |
| m-px | margin: 1px; |
| m-auto | margin: auto; |
| my-0 | margin-top: 0px;<br>margin-bottom: 0px; |
| my-px | margin-top: 1px;<br>margin-bottom: 1px; |
| my-auto | margin-top: auto;<br>margin-bottom: auto; |
| mx-0 | margin-left: 0px;<br>margin-right: 0px; |
| mx-px | margin-left: 1px;<br>margin-right: 1px; |
| mx-auto | margin-left: auto;<br>margin-right: auto; |
| mt-0 | margin-top: 0px; |
| mt-px | margin-top: 1px; |
| mt-auto | margin-top: auto; |
| mr-0 | margin-right: 0px; |
| mr-px | margin-right: 1px; |
| mr-auto | margin-right: auto; |
| mb-0 | margin-bottom: 0px; |
| mb-px | margin-bottom: 1px; |
| mb-auto | margin-bottom: auto; |
| ml-0 | margin-left: 0px; |
| ml-px | margin-left: 1px; |
| ml-auto | margin-left: auto; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `m-${float}` | margin: `${float/4}rem;` |
| `my-${float}` | margin-top: `${float/4}rem;`<br>margin-bottom: `${float/4}rem;` |
| `mx-${float}` | margin-left: `${float/4}rem;`<br>margin-right: `${float/4}rem;` |
| `mt-${float}` | margin-top: `${float/4}rem;` |
| `mr-${float}` | margin-right: `${float/4}rem;` |
| `mb-${float}` | margin-bottom: `${float/4}rem;` |
| `ml-${float}` | margin-left: `${float/4}rem;` |
| `m-${size}` | margin: `${size};` |
| `my-${size}` | margin-top: `${size};`<br>margin-bottom: `${size};` |
| `mx-${size}` | margin-left: `${size};`<br>margin-right: `${size};` |
| `mt-${size}` | margin-top: `${size};` |
| `mr-${size}` | margin-right: `${size};` |
| `mb-${size}` | margin-bottom: `${size};` |
| `ml-${size}` | margin-left: `${size};` |
| `-m-${float}` | margin: `-${float/4}rem;` |
| `-my-${float}` | margin-top: `-${float/4}rem;`<br>margin-bottom: `-${float/4}rem;` |
| `-mx-${float}` | margin-left: `-${float/4}rem;`<br>margin-right: `-${float/4}rem;` |
| `-mt-${float}` | margin-top: `-${float/4}rem;` |
| `-mr-${float}` | margin-right: `-${float/4}rem;` |
| `-mb-${float}` | margin-bottom: `-${float/4}rem;` |
| `-ml-${float}` | margin-left: `-${float/4}rem;` |
| `-m-${size}` | margin: `-${size};` |
| `-my-${size}` | margin-top: `-${size};`<br>margin-bottom: `-${size};` |
| `-mx-${size}` | margin-left: `-${size};`<br>margin-right: `-${size};` |
| `-mt-${size}` | margin-top: `-${size};` |
| `-mr-${size}` | margin-right: `-${size};` |
| `-mb-${size}` | margin-bottom: `-${size};` |
| `-ml-${size}` | margin-left: `-${size};` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    margin: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

## Space Between

Utilities for controlling the space between child elements.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| space-y-0 | --tw-space-y-reverse: 0;<br>margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));<br>margin-bottom: calc(0px * var(--tw-space-y-reverse)); |
| space-y-px | --tw-space-y-reverse: 0;<br>margin-top: calc(1px * calc(1 - var(--tw-space-y-reverse)));<br>margin-bottom: calc(1px * var(--tw-space-y-reverse)); |
| space-y-reverse | --tw-space-y-reverse: 1; |
| space-x-0 | --tw-space-x-reverse: 0;<br>margin-right: calc(0px * var(--tw-space-x-reverse));<br>margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)); |
| space-x-px | --tw-space-x-reverse: 0;<br>margin-right: calc(1px * var(--tw-space-x-reverse));<br>margin-left: calc(1px * calc(1 - var(--tw-space-x-reverse)); |
| space-x-reverse | --tw-space-x-reverse: 1; |
| -space-y-0 | --tw-space-y-reverse: 0;<br>margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));<br>margin-bottom: calc(0px * var(--tw-space-y-reverse)); |
| -space-y-px | --tw-space-y-reverse: 0;<br>margin-top: calc(-1px * calc(1 - var(--tw-space-y-reverse)));<br>margin-bottom: calc(-1px * var(--tw-space-y-reverse)); |
| -space-x-0 | --tw-space-x-reverse: 0;<br>margin-right: calc(0px * var(--tw-space-x-reverse));<br>margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)); |
| -space-x-px | --tw-space-x-reverse: 0;<br>margin-right: calc(-1px * var(--tw-space-x-reverse));<br>margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)); |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `space-y-${float}` | --tw-space-y-reverse: 0;<br>margin-top: `calc(${float/4}rem * calc(1 - var(--tw-space-y-reverse)));`<br>margin-bottom: `calc(${float/4}rem * var(--tw-space-y-reverse));` |
| `space-x-${float}` | --tw-space-x-reverse: 0;<br>margin-right: `calc(${float/4}rem * var(--tw-space-x-reverse));`<br>margin-left: `calc(${float/4}rem * calc(1 - var(--tw-space-x-reverse));` |
| `-space-y-${float}` | --tw-space-y-reverse: 0;<br>margin-top: `calc(-${float/4}rem * calc(1 - var(--tw-space-y-reverse)));`<br>margin-bottom: `calc(-${float/4}rem * var(--tw-space-y-reverse));` |
| `-space-y-${float}` | --tw-space-y-reverse: 0;<br>margin-top: `calc(-${float/4}rem * calc(1 - var(--tw-space-y-reverse)));`<br>margin-bottom: `calc(-${float/4}rem * var(--tw-space-y-reverse));` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    space: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```
