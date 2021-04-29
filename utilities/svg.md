# SVG

## Fill

Utilities for styling the fill of SVG elements.

<PlaygroundWithVariants
  variant='current'
  type='color'
  prefix='fill'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  html="&lt;svg class=&quot;{class}&quot; width=&quot;128&quot; height=&quot;128&quot; version=&quot;1.1&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z&quot;/&gt;&lt;/svg&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    fill: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
  },
}
```

</Customizing>

## Stroke

Utilities for styling the stroke of SVG elements.

<PlaygroundWithVariants
  variant='current'
  type='color'
  prefix='stroke'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='fill-blue-600'
  html="&lt;svg class=&quot;fill-blue-600 {class}&quot; width=&quot;128&quot; height=&quot;128&quot; version=&quot;1.1&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z&quot;/&gt;&lt;/svg&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    stroke: theme => ({
      red: theme('colors.red.500'),
      green: theme('colors.green.500'),
      blue: theme('colors.blue.500'),
    }),
  },
}
```

</Customizing>

## Stroke Width

Utilities for styling the stroke width of SVG elements.

<PlaygroundWithVariants
  variant='1'
  :variants="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']"
  prefix='stroke'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='fill-blue-600 stroke-black dark:stroke-blue-100'
  html="&lt;svg class=&quot;fill-blue-600 stroke-black dark:stroke-blue-100 {class}&quot; width=&quot;128&quot; height=&quot;128&quot; version=&quot;1.1&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z&quot;/&gt;&lt;/svg&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      strokeWidth: {
        sm: '4',
        lg: '8',
      },
    },
  },
}
```

</Customizing>
