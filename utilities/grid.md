# Grid

## Grid

Use `grid` to create a grid container.

| Class | Properties |
| :---- | :--------- |
| grid	| display: grid; |

## Inline Grid

Use `inline-grid` to create an inline grid container.

| Class | Properties |
| :---- | :--------- |
| inline-grid	| display: inline-grid; |

## Grid Template Columns

Utilities for specifying the columns in a grid layout.

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
    },
  },
}
```

</Customizing>

## Grid Template Rows

Utilities for specifying the rows in a grid layout.

<PlaygroundWithVariants
  variant='none'
  :variants="['none','1','2','3', '[1fr,2fr]', '[100px,1fr,min-content]']"
  prefix='grid-rows'
  :showPreview='false'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
}
```

</Customizing>

## Grid Column Span

Utilities for controlling how elements are sized across grid columns.

| Class | Properties |
| :---- | :--------- |
| col-auto | grid-column: auto; |
| col-span-full | grid-column: 1 / -1; |
| `col-span-${int}` | grid-column: `span ${int} / span ${int};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
    },
  },
}
```

</Customizing>

## Grid Row Span

Utilities for controlling how elements are sized across grid rows.

| Class | Properties |
| :---- | :--------- |
| row-auto | grid-row: auto; |
| row-span-full | grid-row: 1 / -1; |
| `row-span-${int}` | grid-row: `span ${int} / span ${int};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
    },
  },
}
```

</Customizing>

## Grid Column Start

Utilities for controlling how elements are placed across grid columns.

| Class | Properties |
| :---- | :--------- |
| col-start-auto | grid-column-start: auto; |
| `col-start-${int}` | grid-column-start: `${int};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridColumnStart: {
        first: '1',
      },
    },
  },
}
```

</Customizing>


## Grid Column End

Utilities for controlling how elements are placed across grid columns.

| Class | Properties |
| :---- | :--------- |
| col-end-auto | grid-column-end: auto; |
| `col-end-${int}` | grid-column-end: `${int};` |


<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridColumnEnd: {
        last: '20',
      },
    },
  },
}
```

</Customizing>

## Grid Row Start

Utilities for controlling how elements are placed across grid rows.

| Class | Properties |
| :---- | :--------- |
| row-start-auto | grid-row-start: auto; |
| `row-start-${int}` | grid-row-start: `${int};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      gridRowStart: {
        first: '1',
      },
    },
  },
}
```

</Customizing>


## Grid Row End

Utilities for controlling how elements are placed across grid rows.

| Class | Properties |
| :---- | :--------- |
| row-end-auto | grid-row-end: auto; |
| `row-end-${int}` | grid-row-end: `${int};` |


<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
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
