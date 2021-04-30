# Grid

## Display Grid

Utilities for controlling the display grid type of an element.

| Class | Properties |
| :---- | :--------- |
| grid	| display: grid; |
| inline-grid	| display: inline-grid; |

## Grid Template Columns / Rows

Utilities for specifying the columns / rows in a grid layout.

<PlaygroundWithVariants
  variant='none'
  :variants="['none','1','2','3', '[1fr,2fr]', '[100px,1fr,min-content]']"
  prefix='grid-cols'
  :showPreview='false'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridTemplateColumns: {
        nt: 'repeat(16, minmax(0, 1fr))',
        footer: '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        layout: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
}
```

</Customizing>

## Grid Column Start / End

Utilities for controlling how elements are sized and placed across grid columns.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| col-auto | grid-column: auto; |
| col-span-full | grid-column: 1 / -1; |
| col-start-auto | grid-column-start: auto; |
| col-end-auto | grid-column-end: auto; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `col-span-${int}` | grid-column: `span ${int} / span ${int};` |
| `col-start-${int}` | grid-column-start: `${int};` |
| `col-end-${int}` | grid-column-end: `${int};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        first: '1',
      },
      gridColumnEnd: {
        last: '20',
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
      gridRowStart: {
        first: '1',
      },
      gridRowEnd: {
        last: '20',
      },
    },
  },
}
```

</Customizing>

## Grid Auto Flow

Utilities for controlling how elements in a grid are auto-placed.

| Class | Properties |
| :---- | :--------- |
| grid-flow-row | grid-auto-flow: row; |
| grid-flow-col | grid-auto-flow: column; |
| grid-flow-row-dense | grid-auto-flow: row dense; |
| grid-flow-col-dense | grid-auto-flow: column dense; |

## Grid Auto Columns

Utilities for controlling the size of implicitly-created grid columns.

| Class | Properties |
| :---- | :--------- |
| auto-cols-auto | grid-auto-columns: auto; |
| auto-cols-min | grid-auto-columns: min-content; |
| auto-cols-max | grid-auto-columns: max-content; |
| auto-cols-fr | grid-auto-columns: minmax(0, 1fr); |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },
}
```

</Customizing>

## Grid Auto Rows

Utilities for controlling the size of implicitly-created grid rows.

| Class | Properties |
| :---- | :--------- |
| auto-rows-auto | grid-auto-rows: auto; |
| auto-rows-min | grid-auto-rows: min-content; |
| auto-rows-max | grid-auto-rows: max-content; |
| auto-rows-fr | grid-auto-rows: minmax(0, 1fr); |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },
}
```

</Customizing>

## Gap

Utilities for controlling gutters between grid rows and columns.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| gap-0 | gap: 0px; |
| gap-x-0 | column-gap: 0px; |
| gap-y-0 | row-gap: 0px; |
| gap-px | gap: 1px; |
| gap-x-px | column-gap: 1px; |
| gap-y-px | row-gap: 1px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `gap-${float}` | gap: `${float/4}rem;` |
| `gap-x-${float}` | column-gap: `${float/4}rem;` |
| `gap-y-${float}` | row-gap: `${float/4}rem;` |

<Customizing>

You can customize the global spacing scale in the theme.spacing or theme.extend.spacing sections of your windi.config.js file:

```js
// windi.config.js
export default {
  theme: {
    extend: {
      spacing: {
        lg: '18rem',
      },
    },
  },
}
```

To customize the gap scale separately, use the gap section of your Tailwind theme config.

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gap: {
        sm: '2.75rem',
      },
    },
  },
}
```

</Customizing>
