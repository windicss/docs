# Borders

## Border Radius

Utilities for controlling the border radius of an element.

<PlaygroundWithBox
  variant='3xl'
  :variants="['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '1/2', 'full']"
  prefix='rounded'
  fixed='bg-teal-500 w-full h-full text-transparent transition-all duration-300'
/>

<Customizing>

```js windi.config.js
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

</Customizing>

## Border Width

Utilities for controlling the width of an element's borders.

<PlaygroundWithBox
  mode='edges'
  variant=''
  :variants="['', '0', 1, 2, 3, 4, 5]"
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-teal-500 w-full h-full text-transparent transition-all'
/>

<Customizing>

```js windi.config.js
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

</Customizing>

## Border Color

Utilities for controlling the color of an element's borders.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-3 border-teal-500 w-full h-full text-transparent transition-all'
/>

<Customizing>

You can customize your color palette by editing the `theme.colors` section of your `windi.config.js` file, or customize just your border colors using the theme.borderColor section.

```js windi.config.js
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

</Customizing>

## Border Opacity

Utilities for controlling the opacity of an element's border color.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='border-opacity'
  fixed='bg-gray-500 bg-opacity-5 border-3 border-teal-500 w-full h-full text-transparent transition-all'
/>

<Customizing>

```js windi.config.js
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

</Customizing>

## Border Style

Utilities for controlling the style of an element's borders.

<PlaygroundWithVariants
  variant='solid'
  :variants="['solid', 'dashed', 'dotted', 'double', 'none']"
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-3 border-teal-500 w-full h-full text-transparent transition-all'
/>

## Divide Width

Utilities for controlling the border width between elements.

#### Divide Y

<PlaygroundWithVariants
  variant=''
  :variants="['', 'reverse', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']"
  prefix='divide-y'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y divide-teal-500'
  nested=true
  html='&lt;div class=&quot;w-full divide-y divide-teal-500 {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

#### Divide X

<PlaygroundWithVariants
  variant=''
  :variants="['', 'reverse', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']"
  prefix='divide-x'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full px-4 text-center divide-x divide-teal-500 flex items-center'
  nested=true
  html='&lt;div class=&quot;w-full divide-x divide-teal-500 flex items-center {class}&quot;&gt;
  &lt;div class="text-center px-4"&gt;1&lt;/div&gt;
  &lt;div class="text-center px-4"&gt;2&lt;/div&gt;
  &lt;div class="text-center px-4"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

The divide width scale inherits its values from the `borderWidth` scale by default, so if you'd like to customize your values for both border width and divide width together, use the `theme.borderWidth` section of your `windi.config.js` file.

```js windi.config.js
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

```js windi.config.js
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

</Customizing>

## Divide Color

Utilities for controlling the border color between elements.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='divide'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y'
  nested=true
  html='&lt;div class=&quot;w-full divide-y {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
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

</Customizing>

## Divide Opacity

Utilities for controlling the opacity borders between elements.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='divide-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y divide-blue-500'
  nested=true
  html='&lt;div class=&quot;w-full divide-y divide-blue-500 {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>


<Customizing>

```js windi.config.js
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

</Customizing>

## Divide Style

Utilities for controlling the border style between elements.

<PlaygroundWithVariants
  variant='dashed'
  :variants="['solid', 'dashed', 'dotted', 'double', 'none']"
  prefix='divide'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y divide-blue-500'
  nested=true
  html='&lt;div class=&quot;w-full divide-y divide-blue-500 {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

## Ring Width

Utilities for creating outline rings with box-shadows.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'inset', '0', '1', '2', '4', '6', '8']"
  prefix='ring'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-blue-500'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 {class} ring-blue-500&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
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

</Customizing>

## Ring Color

Utilities for setting the color of outline rings.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='ring'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
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

</Customizing>

## Ring Opacity

Utilities for setting the opacity of outline rings.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='ring-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-blue-500 ring-4'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
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

</Customizing>

## Ring Offset Width

Utilities for simulating an offset when adding outline rings.

<PlaygroundWithVariants
  variant='2'
  :variants="['0', '1', '2', '4', '6', '8', '10', '12', '14', '16', '20']"
  prefix='ring-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 ring-offset-green-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 {class} ring-offset-green-400&quot;&gt;
    Button
  &lt;/button&gt;'
/>


<Customizing>

```js windi.config.js
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

</Customizing>

## Ring Offset Color

Utilities for setting the color of outline ring offsets.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='ring-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 ring-offset-4'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 ring-offset-4 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
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

</Customizing>
