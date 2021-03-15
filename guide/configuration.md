[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[extend]: https://tailwindcss.com/docs/theme#extending-the-default-theme
[auto]: /guide/features/variant-auto-infer

# Configuring Windi CSS

Configuration in [Windi CSS] is very similar to what you would expect in [Tailwind CSS].

There are a few differences that we believe make it easier to configure:

## No need to configure variants

Windi CSS [enables][auto] all variants for all utilities by default.

When you input the corresponding class, such as `hover:bg-red-500`, the corresponding variant CSS will be [automatically inferred and generated][auto].

Variant configuration is thus no longer necesary, and will be ignored if provided.

## No need to clear defaults

Any configuration options you provide will [extend] the default options.

If you don't use a certain utility the corresponding CSS will not be generated, so there is no need to clear the defaults.

## Example Configuration

```js
// Example `tailwind.config.js` file
const colors = require('windicss/colors')
const plugin = require('windicss/plugin')

module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
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
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
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
      addDynamic('skew', ({ Utility, theme }) => {
        return Utility.handler
          .handleStatic(theme('skew'))
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
}
```
