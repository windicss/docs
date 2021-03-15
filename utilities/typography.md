# Typography

## Font Family

Utilities for controlling the font family of an element.

| Class | Properties |
| :---- | :--------- |
| font-sans | font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; |
| font-serif | font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; |
| font-mono | font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; |

### Customizing

```json5
{
  'fontFamily': {
    'sans': ['ui-sans-serif', 'system-ui', /* ... */],
    'serif': ['ui-serif', 'Georgia', /* ... */],
    'mono': ['ui-monospace', 'SFMono-Regular', /* ... */],
    'display': ['Oswald', /* ... */],
    'body': ['Open Sans', /* ... */],
  }
}
```

Font families can be specified as an array or as a simple comma-delimited string:

```json5
{
  // Array format:
  'sans': ['Helvetica', 'Arial', 'sans-serif'],

  // Comma-delimited format:
  'sans': 'Helvetica, Arial, sans-serif',
}
```

Note that Tailwind does not automatically escape font names for you. If you're using a font that contains an invalid identifier, wrap it in quotes or escape the invalid characters.

```json5
{
  // Won't work:
  'sans': ['Exo 2', /* ... */],

  // Add quotes:
  'sans': ['"Exo 2"', /* ... */],

  // ...or escape the space:
  'sans': ['Exo\\ 2', /* ... */],
}
```

## Font Size

Utilities for controlling the font size of an element.

| Class | Properties |
| :---- | :--------- |
| text-xs | font-size: 0.75rem;<br>line-height: 1rem; |
| text-sm | font-size: 0.875rem;<br>line-height: 1.25rem; |
| text-base | font-size: 1rem;<br>line-height: 1.5rem; |
| text-lg | font-size: 1.125rem;<br>line-height: 1.75rem; |
| text-xl | font-size: 1.25rem;<br>line-height: 1.75rem; |
| text-2xl | font-size: 1.5rem;<br>line-height: 2rem; |
| text-3xl | font-size: 1.875rem;<br>line-height: 2.25rem; |
| text-4xl | font-size: 2.25rem;<br>line-height: 2.5rem; |
| text-5xl | font-size: 3rem;<br>line-height: 1; |
| text-6xl | font-size: 3.75rem;<br>line-height: 1; |
| text-7xl | font-size: 4.5rem;<br>line-height: 1; |
| text-8xl | font-size: 6rem;<br>line-height: 1; |
| text-9xl | font-size: 8rem;<br>line-height: 1; |
| `text-${int}xl` | font-size: `${int}rem;`<br>line-height: 1; |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
}
```

You can provide a default line-height for each of your font-sizes using a tuple of the form [fontSize, lineHeight] in your windi.config.js file.

```js
// windi.config.js
module.exports = {
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
  },
}
```

If you also want to provide a default letter-spacing value for a font size, you can do so using a tuple of the form [fontSize, { letterSpacing, lineHeight }] in your windi.config.js file.

```js
// windi.config.js
module.exports = {
  theme: {
    fontSize: {
      '2xl': ['24px', {
        letterSpacing: '-0.01em',
      }],
      // Or with a default line-height as well
      '3xl': ['32px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
    },
  },
}
```

## Font Smoothing

Utilities for controlling the font smoothing of an element.

| Class | Properties |
| :---- | :--------- |
| antialiased | -webkit-font-smoothing: antialiased;<br>-moz-osx-font-smoothing: grayscale; |
| subpixel-antialiased | -webkit-font-smoothing: auto;<br>-moz-osx-font-smoothing: auto; |

## Font Style

Utilities for controlling the style of text.

| Class | Properties |
| :---- | :--------- |
| italic | font-style: italic; |
| not-italic | font-style: normal; |

## Font Weight

Utilities for controlling the font weight of an element.

| Class | Properties |
| :---- | :--------- |
| font-thin | font-weight: 100; |
| font-extralight | font-weight: 200; |
| font-light | font-weight: 300; |
| font-normal | font-weight: 400; |
| font-medium | font-weight: 500; |
| font-semibold | font-weight: 600; |
| font-bold | font-weight: 700; |
| font-extrabold | font-weight: 800; |
| font-black | font-weight: 900; |
| `font-${int}` | font-weight: `${int};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'extra-bold': 800,
      'black': 900,
    },
  },
}
```

## Font Variant Numeric

Utilities for controlling the variant of numbers.

| Class | Properties |
| :---- | :--------- |
| normal-nums | font-variant-numeric: normal; |
| ordinal | font-variant-numeric: ordinal; |
| slashed-zero | font-variant-numeric: slashed-zero; |
| lining-nums | font-variant-numeric: lining-nums; |
| oldstyle-nums | font-variant-numeric: oldstyle-nums; |
| proportional-nums | font-variant-numeric: proportional-nums; |
| tabular-nums | font-variant-numeric: tabular-nums; |
| diagonal-fractions | font-variant-numeric: diagonal-fractions; |
| stacked-fractions | font-variant-numeric: stacked-fractions; |

## Letter Spacing

Utilities for controlling the tracking (letter spacing) of an element.

| Class | Properties |
| :---- | :--------- |
| tracking-tighter | letter-spacing: -0.05em; |
| tracking-tight | letter-spacing: -0.025em; |
| tracking-normal | letter-spacing: 0em; |
| tracking-wide | letter-spacing: 0.025em; |
| tracking-wider | letter-spacing: 0.05em; |
| tracking-widest | letter-spacing: 0.1em; |
| `tracking-${size}` | letter-spacing: `${size};` |
| `-tracking-${size}` | letter-spacing: `-${size};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
  },
}
```

## Line Height

Utilities for controlling the leading (line height) of an element.

| Class | Properties |
| :---- | :--------- |
| leading-none | line-height: 1; |
| leading-tight | line-height: 1.25; |
| leading-snug | line-height: 1.375; |
| leading-normal | line-height: 1.5; |
| leading-relaxed | line-height: 1.625; |
| leading-loose | line-height: 2; |
| `leading-${int}` | line-height: `${int/4}rem;` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },
}
```

## List Style Type

Utilities for controlling the bullet/number style of a list.

| Class | Properties |
| :---- | :--------- |
| list-none | list-style-type: none; |
| list-disc | list-style-type: disc; |
| list-decimal | list-style-type: decimal; |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
  },
}
```

## List Style Position

Utilities for controlling the position of bullets/numbers in lists.

| Class | Properties |
| :---- | :--------- |
| list-inside | list-style-position: inside; |
| list-outside | list-style-position: outside; |

## Placeholder Color

Utilities for controlling the color of placeholder text.

| Class | Properties |
| :---- | :--------- |
| placeholder-transparent | color: transparent; |
| placeholder-current | color: currentColor; |
| `placeholder-${color}` | --tw-placeholder-opacity: 1;<br>color: `rgba(R, G, B, var(--tw-placeholder-opacity));` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    placeholderColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

## Placeholder Opacity

Utilities for controlling the opacity of an element's placeholder color.

| Class | Properties |
| :---- | :--------- |
| `placeholder-opacity-${int<=100}` | --tw-placeholder-opacity: `${int/100};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      placeholderOpacity: {
        light: '0.1',
      },
    },
  },
}
```

## Text Alignment

Utilities for controlling the alignment of text.

| Class | Properties |
| :---- | :--------- |
| text-left | text-align: left; |
| text-center | text-align: center; |
| text-right | text-align: right; |
| text-justify | text-align: justify; |

## Text Color

Utilities for controlling the text color of an element.

| Class | Properties |
| :---- | :--------- |
| text-transparent | color: transparent; |
| text-current | color: currentColor; |
| `text-${color}` | --tw-text-opacity: 1;<br>color: `rgba(R, G, B, var(--tw-text-opacity));` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    textColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

## Text Opacity

Utilities for controlling the opacity of an element's text color.

| Class | Properties |
| :---- | :--------- |
| `text-opacity-${int<=100}` | --tw-text-opacity: `${int/100};` |

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      textOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
    },
  },
}
```

## Text Decoration

Utilities for controlling the decoration of text.

| Class | Properties |
| :---- | :--------- |
| underline | text-decoration: underline; |
| line-through | text-decoration: line-through; |
| no-underline | text-decoration: none; |

## Text Transform

Utilities for controlling the transformation of text.

| Class | Properties |
| :---- | :--------- |
| uppercase | text-transform: uppercase; |
| lowercase | text-transform: lowercase; |
| capitalize | text-transform: capitalize; |
| normal-case | text-transform: none; |

## Text Overflow

Utilities for controlling text overflow in an element.

| Class | Properties |
| :---- | :--------- |
| truncate | overflow: hidden;<br>text-overflow: ellipsis;<br>white-space: nowrap; |
| overflow-ellipsis | text-overflow: ellipsis; |
| overflow-clip | text-overflow: clip; |

## Vertical Alignment

Utilities for controlling the vertical alignment of an inline or table-cell box.

| Class | Properties |
| :---- | :--------- |
| align-baseline | vertical-align: baseline; |
| align-top | vertical-align: top; |
| align-middle | vertical-align: middle; |
| align-bottom | vertical-align: bottom; |
| align-text-top | vertical-align: text-top; |
| align-text-bottom | vertical-align: text-bottom; |

## Whitespace

Utilities for controlling an element's white-space property.

| Class | Properties |
| :---- | :--------- |
| whitespace-normal | white-space: normal; |
| whitespace-nowrap | white-space: nowrap; |
| whitespace-pre | white-space: pre; |
| whitespace-pre-line | white-space: pre-line; |
| whitespace-pre-wrap | white-space: pre-wrap; |

## Word Break

Utilities for controlling word breaks in an element.

| Class | Properties |
| :---- | :--------- |
| break-normal | overflow-wrap: normal;<br>word-break: normal; |
| break-words | overflow-wrap: break-word; |
| break-all | word-break: break-all; |
