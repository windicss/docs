# Typography

## Utilities

| Class       | Body font size  |
| :---------- | :-------------- |
| `prose-sm`  | 0.875rem (14px) |
| `prose`     | 1rem (16px)     |
| `prose-lg`  | 1.125rem (18px) |
| `prose-xl`  | 1.25rem (20px)  |
| `prose-2xl` | 1.5rem (24px)   |

| Class          | Link color   |
| :------------- | :----------- |
| `prose-red`    | `red.600`    |
| `prose-yellow` | `yellow.600` |
| `prose-green`  | `green.600`  |
| `prose-blue`   | `blue.600`   |
| `prose-indigo` | `indigo.600` |
| `prose-purple` | `purple.600` |
| `prose-pink`   | `pink.600`   |

## Basic Usage

```js windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
}
```

## Disabling size modifiers

```js windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('windicss/plugin/typography')({
      modifiers: ['sm', 'lg'],
    }),
    // ...
  ],
}
```

## Customization

```js windi.config.js
export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              'color': '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
}
```
