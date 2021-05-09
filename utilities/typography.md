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

<PlaygroundWithVariants
  variant='disc'
  :variants="['none', 'disc', 'decimal']"
  prefix='list'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  html="&lt;ul class='{class}'&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
&lt;/ul&gt;"
/>

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

<PlaygroundWithVariants
  variant='inside'
  :variants="['inside', 'outside']"
  prefix='list'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='bg-blue-200 bg-blue-300'
  html="&lt;ul class='{class} bg-blue-300'&gt;
  &lt;li class='bg-blue-200'&gt;One&lt;/li&gt;
  &lt;li class='bg-blue-200'&gt;Two&lt;/li&gt;
  &lt;li class='bg-blue-200'&gt;Three&lt;/li&gt;
&lt;/ul&gt;"
/>

## Placeholder Color

Utilities for controlling the color of placeholder text.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='placeholder'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400'
  html="&lt;input class='{class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Placeholder'&gt;"
/>

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

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='placeholder-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400 placeholder-black'
  html="&lt;input class='placeholder-black {class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Placeholder'&gt;"
/>

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

## Caret Color

Utilities for controlling the color of insertion text.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='caret'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400'
  html="&lt;input class='{class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Focus Me'&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    caretColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Caret Opacity

Utilities for controlling the opacity of an element's caret color.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='caret-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400 caret-blue-500'
  html="&lt;input class='caret-blue-500 {class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Focus Me'&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      caretOpacity: {
        light: '0.1',
      },
    },
  },
}
```

</Customizing>

## Text Alignment

Utilities for controlling the alignment of text.

<PlaygroundWithVariants
  variant='left'
  :variants="['left', 'center', 'right', 'justify']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  prefix='text'
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

## Text Color

Utilities for controlling the text color of an element.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='text'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

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

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='text-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='text-black'
  nested=true
  html="&lt;p class='text-black {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

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
  variant='underline'
  :variants="['underline', 'line-through', 'no-underline']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## Text Decoration Color

Utilities for controlling the color of text decoration.

<PlaygroundWithVariants
  variant='green-500'
  type='color'
  prefix='underline'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden underline underline-2'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    textDecorationColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Text Decoration Opacity

Utilities for controlling the opacity of an element's decoration color.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='underline-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='text-black underline underline-teal-600 underline-2'
  nested=true
  html="&lt;p class='text-black underline underline-2 underline-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

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

## Text Decoration Length

Utilities for controlling the length of text decoration.


## Text Decoration Offset

Utilities for controlling the offset of text decoration.


## Text Transform

Utilities for controlling the transformation of text.

<PlaygroundWithVariants
  variant='uppercase'
  :variants="['uppercase', 'lowercase', 'capitalize', 'normal-case']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## Text Overflow

Utilities for controlling text overflow in an element.

<PlaygroundWithVariants
  variant='truncate'
  :variants="['truncate', 'overflow-ellipsis', 'overflow-clip']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

## Vertical Alignment

Utilities for controlling the vertical alignment of an inline or table-cell box.

<PlaygroundWithVariants
  variant='baseline'
  :variants="['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom']"
  fixed='p-2 dark:text-white opacity-85'
  prefix='align'
  nested=true
  appended='leading-none relative inline-block w-0 h-8 absolute top-0 border-blue-300 border-t border-b border-dashed w-full h-4 relative z-10 text-blue-500 font-medium'
  html='&lt;div class="leading-none relative"&gt;
    &lt;span class="w-0 h-8 inline-block {class}"&gt;
      &lt;span class="absolute top-0 border-blue-300 border-t border-b border-dashed w-full h-8"&gt;&lt;/span&gt;
      &lt;span class="absolute top-0 border-blue-300 border-t border-b border-dashed w-full h-4"&gt;&lt;/span&gt;
    &lt;/span&gt;
    &lt;span class="relative z-10 text-blue-500 font-medium"&gt;Hello WindiCSS&lt;/span&gt;
  &lt;/div&gt;'
/>

## Whitespace

Utilities for controlling an element's white-space property.

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']"
  fixed='p-2 dark:text-white opacity-85 overflow-scroll'
  prefix='whitespace'
  nested=true
  appended='w-full'
  html="&lt;p class='w-full {class}'&gt;First Line
      Second Line
      Third Line
  Last Line&lt;/&gt;"
/>

## Word Break

Utilities for controlling word breaks in an element.

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'words', 'all']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  prefix='break'
  appended='w-4/5 mx-auto bg-blue-200'
  nested=true
  html="&lt;div class='w-4/5 mx-auto bg-blue-200'&gt;&lt;p class='w-full {class}'&gt;The quick brown fox jumps over the lazy dog
  abcdefghijklmnopqrstuvw&lt;/&gt;&lt;/div&gt;"
/>
