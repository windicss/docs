# Typography

## Font Family

Utilities for controlling the font family of an element.

<PlaygroundWithVariants
  variant='sans'
  :variants="['sans', 'serif', 'mono']"
  prefix='font'
  fixed='text-lg p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Oswald'],
        body: ['Open Sans'],
      },
    },
  },
}
```

Font families can be specified as an array or as a simple comma-delimited string:

```json5
{
  // Array format:
  "sans": ["Helvetica", "Arial", "sans-serif"],
  // Comma-delimited format:
  "sans": "Helvetica, Arial, sans-serif",
}
```

Note that Windi CSS does not automatically escape font names for you. If you're using a font that contains an invalid identifier, wrap it in quotes or escape the invalid characters.

```json5
{
  // Won't work:
  "sans": ["Exo 2", /* ... */],
  // Add quotes:
  "sans": ["\"Exo 2\"", /* ... */],
}
```

</Customizing>

## Font Size

Utilities for controlling the font size of an element.

<PlaygroundWithVariants
  variant='base'
  :variants="['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl']"
  prefix='text'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
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
export default {
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

If you also want to provide a default letter-spacing value for a font size, you can do so using a tuple of the form `[fontSize, { letterSpacing, lineHeight }]` in your windi.config.js file.

```js
// windi.config.js
export default {
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

</Customizing>

## Font Smoothing

Utilities for controlling the font smoothing of an element.

<PlaygroundWithVariants
  variant='antialiased'
  :variants="['antialiased', 'subpixel-antialiased']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## Font Style

Utilities for controlling the style of text.

<PlaygroundWithVariants
  variant='italic'
  :variants="['italic', 'not-italic']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## Font Weight

Utilities for controlling the font weight of an element.

<PlaygroundWithVariants
  variant='normal'
  :variants="['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', '400', '600']"
  prefix='font'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
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

</Customizing>

## Font Variant Numeric

Utilities for controlling the variant of numbers.

<PlaygroundWithVariants
  variant='ordinal'
  :variants="['normal-nums','ordinal','slashed-zero','lining-nums','oldstyle-nums','proportional-nums','tabular-nums','diagonal-fractions','stacked-fractions']"
  prefix=''
  fixed='p-2 dark:text-white opacity-85 text-xl'
  html="0123456789&lt;br&gt;1/2 3/4&lt;br&gt;1st 2nd"
/>

## Letter Spacing

Utilities for controlling the tracking (letter spacing) of an element.

<PlaygroundWithVariants
  variant='normal'
  :variants="['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', '0px', '2px', '0.5em']"
  prefix='tracking'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
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

</Customizing>

## Line Height

Utilities for controlling the leading (line height) of an element.

<PlaygroundWithVariants
  variant='normal'
  :variants="['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '0', 1, 2, 3, 4, 5, 6]"
  prefix='leading'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },
}
```

</Customizing>

## List Style Type

Utilities for controlling the bullet/number style of a list.

| Class | Properties |
| :---- | :--------- |
| list-none | list-style-type: none; |
| list-disc | list-style-type: disc; |
| list-decimal | list-style-type: decimal; |

<Customizing>

```js
// windi.config.js
export default {
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

</Customizing>

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

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    placeholderColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Placeholder Opacity

Utilities for controlling the opacity of an element's placeholder color.

| Class | Properties |
| :---- | :--------- |
| `placeholder-opacity-${int<=100}` | --tw-placeholder-opacity: `${int/100};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      placeholderOpacity: {
        light: '0.1',
      },
    },
  },
}
```

</Customizing>

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

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    textColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Text Opacity

Utilities for controlling the opacity of an element's text color.

| Class | Properties |
| :---- | :--------- |
| `text-opacity-${int<=100}` | --tw-text-opacity: `${int/100};` |

<Customizing>

```js
// windi.config.js
export default {
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

</Customizing>

## Text Decoration

Utilities for controlling the decoration of text.

<PlaygroundWithVariants
  variant='no-underline'
  :variants="['underline', 'line-through', 'no-underline']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

| Class | Properties |
| :---- | :--------- |
| underline | text-decoration: underline; |
| line-through | text-decoration: line-through; |
| no-underline | text-decoration: none; |

## Text Transform

Utilities for controlling the transformation of text.

<PlaygroundWithVariants
  variant='normal-case'
  :variants="['uppercase', 'lowercase', 'capitalize', 'normal-case']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## Text Overflow

Utilities for controlling text overflow in an element.

<PlaygroundWithVariants
  variant='truncate'
  :variants="['truncate', 'overflow-ellipsis', 'overflow-clip']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

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
