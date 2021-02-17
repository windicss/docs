# Plugins

Windi CSS provides official plugins which you can add in your configuration file.

They are similar to the ones from Tailwind CSS, but adapted to the interface of Windi CSS to add improvements like auto-inferred utilities.

## [Typography](https://github.com/tailwindlabs/tailwindcss-typography)

### Utilities

| Class       |  Body font size |
| ----------- | --------------: |
| `prose-sm`  | 0.875rem (14px) |
| `prose`     |     1rem (16px) |
| `prose-lg`  | 1.125rem (18px) |
| `prose-xl`  |  1.25rem (20px) |
| `prose-2xl` |   1.5rem (24px) |

| Class          | Link color   |
| -------------- | ------------ |
| `prose-red`    | `red.600`    |
| `prose-yellow` | `yellow.600` |
| `prose-green`  | `green.600`  |
| `prose-blue`   | `blue.600`   |
| `prose-indigo` | `indigo.600` |
| `prose-purple` | `purple.600` |
| `prose-pink`   | `pink.600`   |

### Basic Usage

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
}
```

### Disabling size modifiers

```js
// tailwind.config.js
module.exports = {
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

### Customization

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      }
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
}
```

## [Forms](https://github.com/tailwindlabs/tailwindcss-forms)

### Base Styles

- `input[type='text']`
- `input[type='password']`
- `input[type='email']`
- `input[type='number']`
- `input[type='url']`
- `input[type='date']`
- `input[type='datetime-local']`
- `input[type='month']`
- `input[type='week']`
- `input[type='time']`
- `input[type='search']`
- `input[type='tel']`
- `input[type='checkbox']`
- `input[type='radio']`
- `select`
- `select[multiple]`
- `textarea`

### Usage

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('windicss/plugin/forms'),
    // ...
  ],
}
```

## [Aspect Ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### Utilities

| Class | Properties |
| :---- | :--------- |
| `aspect-none` | position: 'static';<br>paddingBottom: '0';<br>'> *': {<br>&emsp;position: 'static';<br>&emsp;height: 'auto';<br>&emsp;width: 'auto';<br>&emsp;top: 'auto';<br>&emsp;right: 'auto';<br>&emsp;bottom: 'auto';<br>&emsp;left: 'auto';<br>} |
| `aspect-w-${float}` | --tw-aspect-w: `${float};` |
| `aspect-h-${float}` | --tw-aspect-h: `${float};` |
| `aspect-${fraction}` | position: 'relative';<br>paddingBottom: `${percent};`<br>'> *': {<br>&emsp;position: 'absolute';<br>&emsp;height: '100%';<br>&emsp;width: '100%';<br>&emsp;top: '0';<br>&emsp;right: '0';<br>&emsp;bottom: '0';<br>&emsp;left: '0';<br>} |


***

`aspect-w-${float}` will add the following base styles:

```css
.aspect-w-${float} {
  position: 'relative';
  padding-bottom: 'calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%)';
}

.aspect-w-${float} > * {
  position: 'absolute';
  height: '100%';
  width: '100%';
  top: '0';
  right: '0';
  bottom: '0';
  left: '0';
}
```

### Usage

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('windicss/plugin/aspect-ratio'),
    // ...
  ],
}
```

## [Line Clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)

### Utilities

| Class | Properties |
| :---- | :--------- |
| `line-clamp-${int}` | overflow: hidden;<br>display: -webkit-box;<br>-webkit-box-orient: vertical;<br>-webkit-line-clamp: `${int};` |
| `line-clamp-none` | -webkit-line-clamp: unset; |

### Usage

```js
// tailwind.config.js
module.exports = {
  extend: {
    lineClamp: {
      sm: '3',
      lg: '10',
    }
  }
  plugins: [
    require('windicss/plugin/line-clamp'),
    // ...
  ],
}
```

## [Filters](https://github.com/benface/tailwindcss-filters)

### Utilities

| Class | Properties |
| :---- | :--------- |
| `filter-${key}` | filter: `${value};` |
| `backdrop-${key}` | backdrop-filter: `${value};` |

### Usage

```js
// tailwind.config.js
module.exports = {
  theme: {
    filter: {
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
  plugins: [
    require('windicss/plugin/filters'),
  ],
};
```

## Scroll Snap

inspired by [tailwindcss-scroll-snap](https://github.com/innocenzi/tailwindcss-scroll-snap)


### Utilities

| Class | Properties | Description |
| :---- | :--------- | :---------- |
| `snap` | scroll-snap-type: <br> var(--scroll-snap-axis, both) <br> var(--scroll-snap-strictness, mandatory) | main snap class |
| __Strictness__ | | |
| `snap-none` | --scroll-snap-strictness: none | |
| `snap-mandatory` | --scroll-snap-strictness: mandatory | |
| `snap-proximity` | --scroll-snap-strictness: proximity | |
| __Axis__ | | |
| `snap-x` | --scroll-snap-axis: x | |
| `snap-y` | --scroll-snap-axis: y | |
| `snap-block` | --scroll-snap-axis: block | |
| `snap-inline` | --scroll-snap-axis: inline | |
| `snap-both` | --scroll-snap-axis: both | |
| __Align__ | | |
| `snap-start` | scroll-snap-align: start | |
| `snap-end` | scroll-snap-align: end | |
| `snap-center` | scroll-snap-align: center | |
| __Stop__ | | |
| `snap-normal` | scroll-snap-stop: normal | |
| `snap-always` | scroll-snap-stop: always | |
| __Margin__ | | |
| `snap-m${direction}-${value}` | scroll-snap-margin`${direction}`: `${value}` | same [Margin Utilities](/utilities/spacing.html#margin-%E2%AD%90%EF%B8%8F) |
| __Padding__ | | |
| `snap-p${direction}-${value}` | scroll-snap-padding`${direction}`: `${value}` | same [Padding Utilities](/utilities/spacing.html#padding-%E2%AD%90%EF%B8%8F) |
| __Other__ | | |
| `scrollbar-hide` | scrollbar-width: none<br>::-webkit-scrollbar: {<br>&nbsp;&nbsp;display: none<br>} | visual hide scrollbar |


### Usage

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('windicss/plugin/scroll-snap'),
    // ...
  ],
}
```