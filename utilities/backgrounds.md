# Backgrounds

## [Background Attachment](https://tailwindcss.com/docs/background-attachment)

Utilities for controlling how a background image behaves when scrolling.

| Class | Properties |
| :---- | :--------- |
| bg-fixed | background-attachment: fixed; |
| bg-local | background-attachment: local; |
| bg-scroll | background-attachment: scroll; |

## [Background Clip](https://tailwindcss.com/docs/background-clip)

Utilities for controlling the bounding box of an element's background.

| Class | Properties |
| :---- | :--------- |
| bg-clip-border | background-clip: border-box; |
| bg-clip-padding | background-clip: padding-box; |
| bg-clip-content | background-clip: content-box; |
| bg-clip-text | background-clip: text; |

## [Background Color](https://tailwindcss.com/docs/background-color) ⭐️

Utilities for controlling an element's background color.

| Class | Properties |
| :---- | :--------- |
| bg-transparent | background-color: transparent; |
| bg-current | background-color: currentColor; |
| `bg-${color}` | --tw-bg-opacity: 1;<br>background-color: `rgba(R, G, B, var(--tw-bg-opacity));` |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
}
```

## [Background Opacity](https://tailwindcss.com/docs/background-opacity) ⭐️

Utilities for controlling the opacity of an element's background color.

| Class | Properties |
| :---- | :--------- |
| `bg-opacity-${int<=100}` | --tw-bg-opacity: `${int/100};` |

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      opacity: {
        light: '0.15',
      },
    },
  },
}
```

## [Background Position](https://tailwindcss.com/docs/background-position)

Utilities for controlling the position of an element's background image.

| Class | Properties |
| :---- | :--------- |
| bg-bottom | background-position: bottom; |
| bg-center | background-position: center; |
| bg-left | background-position: left; |
| bg-left-bottom | background-position: left bottom; |
| bg-left-top | background-position: left top; |
| bg-right | background-position: right; |
| bg-right-bottom | background-position: right bottom; |
| bg-right-top | background-position: right top; |
| bg-top | background-position: top; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
    },
  },
}
```

## [Background Repeat](https://tailwindcss.com/docs/background-repeat)

Utilities for controlling the repetition of an element's background image.

| Class | Properties |
| :---- | :--------- |
| bg-repeat | background-repeat: repeat; |
| bg-no-repeat | background-repeat: no-repeat; |
| bg-repeat-x | background-repeat: repeat-x; |
| bg-repeat-y | background-repeat: repeat-y; |
| bg-repeat-round | background-repeat: round; |
| bg-repeat-space | background-repeat: space; |

## [Background Size](https://tailwindcss.com/docs/background-size)

Utilities for controlling the background size of an element's background image.

| Class | Properties |
| :---- | :--------- |
| bg-auto | background-size: auto; |
| bg-cover | background-size: cover; |
| bg-contain | background-size: contain; |

### Customizing

```js
module.exports = {
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '50%': '50%',
      16: '4rem',
    },
  },
}
```

## [Background Image](https://tailwindcss.com/docs/background-image)

Utilities for controlling an element's background image.

| Class | Properties |
| :---- | :--------- |
| bg-none | background-image: none; |
| bg-gradient-to-t | background-image: linear-gradient(to top, var(--tw-gradient-stops)); |
| bg-gradient-to-tr | background-image: linear-gradient(to top right, var(--tw-gradient-stops)); |
| bg-gradient-to-r | background-image: linear-gradient(to right, var(--tw-gradient-stops)); |
| bg-gradient-to-br | background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); |
| bg-gradient-to-b | background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); |
| bg-gradient-to-bl | background-image: linear-gradient(to bottom left, var(--tw-gradient-stops)); |
| bg-gradient-to-l | background-image: linear-gradient(to left, var(--tw-gradient-stops)); |
| bg-gradient-to-tl | background-image: linear-gradient(to top left, var(--tw-gradient-stops)); |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url(\'/img/hero-pattern.svg\')',
        'footer-texture': 'url(\'/img/footer-texture.png\')',
      }),
    },
  },
}
```

## [Gradient Color Stops](https://tailwindcss.com/docs/gradient-color-stops) ⭐️

Utilities for controlling the color stops in background gradients.

| Class | Properties |
| :---- | :--------- |
| from-transparent | --tw-gradient-from: transparent;<br>--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0)); |
| from-current | --tw-gradient-from: currentColor;<br>--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 255, 255, 0)); |
| `from-${color}` | --tw-gradient-from: `${hex};`<br>--tw-gradient-stops: `var(--tw-gradient-from), var(--tw-gradient-to, rgba(R, G, B, 0));` |
