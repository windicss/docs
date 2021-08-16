[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[migration guide]: /guide/migration

# Configuring Windi CSS

Configuration in [Windi CSS] is similar to what you would expect in [Tailwind CSS] but with additional enhancements and features.

If you are migrating from Tailwind, check out the [migration guide] first.

## Config File

By default, Windi CSS will search for the configuration file under your project's root. Valid filenames are:

- `windi.config.ts`
- `windi.config.js`
- `tailwind.config.ts`
- `tailwind.config.js`

**Native ES module and TypeScript are supported out-of-box**, powered by [sucrase](https://github.com/alangpierce/sucrase).

To get typecheck for your configurations, you can import the `defineConfig` function from `windicss/helpers`. For example,

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
})
```

```js
// windi.config.js
// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
})
```

`defineConfig` is a bypass function with type hints, which means you can also omit it if you don't need the autocompletion/typecheck.

```js
// windi.config.js

export default {
  /* configurations... */
}
```

You can use the autocompletion from your editor to see possible configuration fields. Customization for features will be described in the corresponding pages. 

## Example Configuration

```js
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      addUtilities(newUtilities)
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          'backgroundColor': '#3490dc',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          'backgroundColor': '#e3342f',
          'color': '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      }
      addComponents(buttons)
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic('skew', ({ Utility, Style }) => {
        return Utility.handler
          .handleStatic(Style('skew'))
          .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
          .createProperty('transform')
      }, variants('skew'))
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
})
```
