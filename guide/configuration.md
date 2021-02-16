# Configuration

Configuration is very similar to what you would expect in Tailwind CSS.

```js
// Example `tailwind.config.js` file
const colors = require('windicss/colors');
const plugin = require('windicss/plugin');

module.exports = {
  darkMode: "class", // or 'media'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
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
    plugin(function({ addComponents }) {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      }
      addComponents(buttons)
    }),
    plugin(function({ addDynamic, variants }) {
      addDynamic("skew", ({ Utility, theme }) => {
        return Utility.handler
          .handleStatic(theme("skew"))
          .handleNumber(0, 360, "int", (number) => `skewY(-${number}deg)`)
          .createProperty('transform');
        }, variants('skew'));
    }),
    require('windicss/plugin/filters'),
    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography')({
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ]
}
```

::: tip No need to clear
All configuration will perform like extend, you can not clear (and don't need to) clear the defaults because if you don't use the configuration, the corresponding CSS will not be generated, so there is no need to remove it.
:::

::: tip No need for variants
**Variant configuration will not be used**. Windi CSS enables all variants for all utilities by default. When you input the corresponding class, such as hover:bg-red-500, the corresponding variant css will be generated.
:::
