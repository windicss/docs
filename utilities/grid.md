# Grid

## [Grid Template Columns](https://tailwindcss.com/docs/grid-template-columns) ⭐️

Utilities for specifying the columns in a grid layout.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| grid-cols-none | grid-template-columns: none; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `grid-cols-${int}` | grid-template-columns: `repeat(${int}, minmax(0, 1fr));` |

### Customizing

```js
// tailwind.config.js
module.exports = {
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

## [Grid Column Start / End](https://tailwindcss.com/docs/grid-column) ⭐️

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

### Customizing

```js
// tailwind.config.js
module.exports = {
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
    },
  },
}
```

## [Grid Template Rows](https://tailwindcss.com/docs/grid-template-rows) ⭐️

Utilities for specifying the rows in a grid layout.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| grid-rows-none | grid-template-rows: none; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `grid-rows-${int}` | grid-template-rows: `repeat(${int}, minmax(0, 1fr))`; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
}
```

## [Grid Row Start / End](https://tailwindcss.com/docs/grid-row) ⭐️

Utilities for controlling how elements are sized and placed across grid rows.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| row-auto | grid-row: auto; |
| row-span-full | grid-row: 1 / -1; |
| row-start-auto | grid-row-start: auto; |
| row-end-auto | grid-row-end: auto; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `row-span-${int}` | grid-row: `span ${int} / span ${int};` |
| `row-start-${int}` | grid-row-start: `${int};` |
| `row-end-${int}` | grid-row-end: `${int};` |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
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

## [Grid Auto Flow](https://tailwindcss.com/docs/grid-auto-flow)

Utilities for controlling how elements in a grid are auto-placed.

| Class | Properties |
| :---- | :--------- |
| grid-flow-row | grid-auto-flow: row; |
| grid-flow-col | grid-auto-flow: column; |
| grid-flow-row-dense | grid-auto-flow: row dense; |
| grid-flow-col-dense | grid-auto-flow: column dense; |

## [Grid Auto Columns](https://tailwindcss.com/docs/grid-auto-columns)

Utilities for controlling the size of implicitly-created grid columns.

| Class | Properties |
| :---- | :--------- |
| auto-cols-auto | grid-auto-columns: auto; |
| auto-cols-min | grid-auto-columns: min-content; |
| auto-cols-max | grid-auto-columns: max-content; |
| auto-cols-fr | grid-auto-columns: minmax(0, 1fr); |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },
}
```

## [Grid Auto Rows](https://tailwindcss.com/docs/grid-auto-rows)

Utilities for controlling the size of implicitly-created grid rows.

| Class | Properties |
| :---- | :--------- |
| auto-rows-auto | grid-auto-rows: auto; |
| auto-rows-min | grid-auto-rows: min-content; |
| auto-rows-max | grid-auto-rows: max-content; |
| auto-rows-fr | grid-auto-rows: minmax(0, 1fr); |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },
}
```

## [Gap](https://tailwindcss.com/docs/gap) ⭐️

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

### Customizing

You can customize the global spacing scale in the theme.spacing or theme.extend.spacing sections of your tailwind.config.js file:

```js
// tailwind.config.js
module.exports = {
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
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      gap: {
        sm: '2.75rem',
      },
    },
  },
}
```
