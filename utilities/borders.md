# Borders

## Border Radius

Utilities for controlling the border radius of an element.

<PlaygroundWithBox
  variant='3xl'
  :variants="['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '1/2', 'full']"
  prefix='rounded'
  fixed='bg-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all duration-300'
/>

### Customizing

```js
// windi.config.js
export default {
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
    },
  },
}
```

## Border Width

Utilities for controlling the width of an element's borders.

<PlaygroundWithBox
  mode='edges'
  variant=''
  :variants="['', '0', 1, 2, 3, 4, 5]"
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all'
/>

### Customizing

```js
// windi.config.js
export default {
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      none: '0',
      sm: '2px',
    },
  },
}
```

## Border Color

Utilities for controlling the color of an element's borders.

| Class | Properties |
| :---- | :--------- |
| border-transparent | border-color: transparent; |
| border-current | border-color: currentColor; |
| `border-${color}` | --tw-border-opacity: 1;<br>border-color: `rgba(R, G, B, var(--tw-border-opacity))` |

### Customizing

You can customize your color palette by editing the `theme.colors` section of your `windi.config.js` file, or customize just your border colors using the theme.borderColor section.

```js
// windi.config.js
export default {
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
}
```

## Border Opacity

Utilities for controlling the opacity of an element's border color.

| Class | Properties |
| :---- | :--------- |
| `border-opacity-${int<=100}` | --tw-border-opacity: `${int/100};` |

```js
// windi.config.js
export default {
  theme: {
    extend: {
      borderOpacity: {
        light: '0.1',
      },
    },
  },
}
```

## Border Style

Utilities for controlling the style of an element's borders.

<PlaygroundWithVariants
  variant='solid'
  :variants="['solid', 'dashed', 'dotted', 'double', 'none']"
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-3 border-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all'
/>

## Divide Width

Utilities for controlling the border width between elements.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| divide-y | --tw-divide-y-reverse: 0;<br>border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));<br>border-bottom-width: calc(1px * var(--tw-divide-y-reverse)); |
| divide-x | --tw-divide-x-reverse: 0;<br>border-right-width: calc(1px * var(--tw-divide-x-reverse));<br>border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse))); |
| divide-y-reverse | --tw-divide-y-reverse: 1; |
| divide-x-reverse | --tw-divide-x-reverse: 1; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `divide-y-${int}` | --tw-divide-y-reverse: 0;<br>border-top-width: calc(`${int}px` * calc(1 - var(--tw-divide-y-reverse)));<br>border-bottom-width: calc(`${int}px` * var(--tw-divide-y-reverse)); |
| `divide-x-${int}` | --tw-divide-x-reverse: 0;<br>border-right-width: calc(`${int}px` * var(--tw-divide-x-reverse));<br>border-left-width: calc(`${int}px` * calc(1 - var(--tw-divide-x-reverse))); |

### Customizing

The divide width scale inherits its values from the `borderWidth` scale by default, so if you'd like to customize your values for both border width and divide width together, use the `theme.borderWidth` section of your `windi.config.js` file.

```js
// windi.config.js
export default {
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
}
```

To customize only the divide width values, use the theme.divideWidth section of your windi.config.js file.

```js
// windi.config.js
export default {
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
}
```

## Divide Color

Utilities for controlling the border color between elements.

| Class | Properties |
| :---- | :--------- |
| divide-transparent | border-color: transparent; |
| divide-current | border-color: currentColor; |
| `divide-${color}` | --tw-divide-opacity: 1;<br>border-color: `rgba(R, G, B, var(--tw-divide-opacity));` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    divideColor: theme => ({
      ...theme('borderColors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
}
```

## Divide Opacity

Utilities for controlling the opacity borders between elements.

| Class | Properties |
| :---- | :--------- |
| `border-opacity-${int<=100}` | --tw-border-opacity: `${int/100};` |


### Customizing

```js
// windi.config.js
export default {
  theme: {
    extend: {
      divideOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
    },
  },
}
```

## Divide Style

Utilities for controlling the border style between elements.

| Class | Properties |
| :---- | :--------- |
| divide-solid | border-style: solid; |
| divide-dashed | border-style: dashed; |
| divide-dotted | border-style: dotted; |
| divide-double | border-style: double; |
| divide-none | border-style: none; |

## Ring Width

Utilities for creating outline rings with box-shadows.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| * | --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);<br>--tw-ring-offset-width: theme('ringOffsetWidth.DEFAULT', '0px');<br>--tw-ring-offset-color: theme('ringOffsetColor.DEFAULT', '#fff');<br>--tw-ring-color: `rgba(${hex2RGB(theme('ringColor.DEFAULT', '#93C5FD'))?.join(', ')}, ${theme('ringOpacity.DEFAULT', '0.5'))`;<br>--tw-ring-offset-shadow': '0 0 #0000';<br>--tw-ring-shadow: 0 0 #0000; |
| ring | --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);<br>--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);<br>box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); |
| ring-inset | --tw-ring-inset: inset; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `ring-${int}` | --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);<br>--tw-ring-shadow: `var(--tw-ring-inset) 0 0 0 calc(${int}+ var(--tw-ring-offset-width)) var(--tw-ring-color);`<br>box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000); |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: '2px',
        6: '6px',
        10: '10px',
      },
    },
  },
}
```

## Ring Color

Utilities for setting the color of outline rings.

| Class | Properties |
| :---- | :--------- |
| ring-transparent | --tw-ring-color: transparent; |
| ring-current | --tw-ring-color: currentColor; |
| `ring-${color}` | --tw-ring-color: `rgba(R, G, B, var(--tw-ring-opacity));` |

### Customizing

```js
// windi.config.js
const colors = require('windicss/colors')

export default {
  theme: {
    ringColor: {
      white: colors.white,
      pink: colors.fuchsia,
    },
  },
}
```

## Ring Opacity

Utilities for setting the opacity of outline rings.

| Class | Properties |
| :---- | :--------- |
| `ring-opacity-${int<=100}` | --tw-ring-opacity: `${int/100};` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    extend: {
      ringOpacity: {
        15: '0.15',
        35: '0.35',
        65: '0.65',
      },
    },
  },
}
```

## Ring Offset Width

Utilities for simulating an offset when adding outline rings.

| Class | Properties |
| :---- | :--------- |
| `ring-offset-${int}` | --tw-ring-offset-width: `${int}px;` |

### Customizing

```js
// windi.config.js
export default {
  theme: {
    extend: {
      ringOffsetWidth: {
        3: '3px',
        6: '6px',
        10: '10px',
      },
    },
  },
}
```

## Ring Offset Color

Utilities for setting the color of outline ring offsets.

| Class | Properties |
| :---- | :--------- |
| ring-offset-transparent | --tw-ring-offset-color: transparent; |
| ring-offset-current | --tw-ring-offset-color: currentColor; |
| `ring-offset-${color}` | --tw-ring-offset-color: `${hex};` |

### Customizing

```js
// windi.config.js
const colors = require('windicss/colors')

export default {
  theme: {
    ringOffsetColor: {
      white: colors.white,
      pink: colors.fuchsia,
    },
  },
}
```
