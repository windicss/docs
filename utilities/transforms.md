# Transforms

## Transform

Utilities for controlling transform behaviour.

| Class | Properties |
| :---- | :--------- |
| transform | --tw-translate-x: 0;<br>--tw-translate-y: 0;<br>--tw-rotate: 0;<br>--tw-skew-x: 0;<br>--tw-skew-y: 0;<br>--tw-scale-x: 1;<br>--tw-scale-y: 1;<br>transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); |
| transform-gpu | --tw-translate-x: 0;<br>--tw-translate-y: 0;<br>--tw-rotate: 0;<br>--tw-skew-x: 0;<br>--tw-skew-y: 0;<br>--tw-scale-x: 1;<br>--tw-scale-y: 1;<br>transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)); |
| transform-none | transform: none; |

## Transform Origin

Utilities for specifying the origin for an element's transformations.

| Class | Properties |
| :---- | :--------- |
| origin-center | transform-origin: center; |
| origin-top | transform-origin: top; |
| origin-top-right | transform-origin: top right; |
| origin-right | transform-origin: right; |
| origin-bottom-right | transform-origin: bottom right; |
| origin-bottom | transform-origin: bottom; |
| origin-bottom-left | transform-origin: bottom left; |
| origin-left | transform-origin: left; |
| origin-top-left | transform-origin: top left; |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      transformOrigin: {
        24: '6rem',
        full: '100%',
      },
    },
  },
}
```

## Scale

Utilities for scaling elements with transform.

| Class | Properties |
| :---- | :--------- |
| `scale-${int}` | --tw-scale-x: `${int/100};`<br>--tw-scale-y: `${int/100};` |
| `scale-x-${int}` | --tw-scale-x: `${int/100};` |
| `scale-y-${int}` | --tw-scale-y: `${int/100};` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    scale: {
      half: '.5',
      full: '1',
    },
  },
}
```

## Rotate

Utilities for rotating elements with transform.

| Class | Properties |
| :---- | :--------- |
| `rotate-${float}` | --tw-rotate: `${float}deg;` |
| `-rotate-${float}` | --tw-rotate: `-${float}deg;` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    rotate: {
      sq: '90deg',
    },
  },
}
```

## Translate

Utilities for translating elements with transform.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| translate-x-0 | --tw-translate-x: 0px; |
| translate-x-px | --tw-translate-x: 1px; |
| translate-x-full | --tw-translate-x: 100%; |
| translate-y-0 | --tw-translate-y: 0px; |
| translate-y-px | --tw-translate-y: 1px; |
| translate-y-full | --tw-translate-y: 100%; |
| -translate-x-0 | --tw-translate-x: 0px; |
| -translate-x-px | --tw-translate-x: -1px; |
| -translate-x-full | --tw-translate-x: -100%; |
| -translate-y-0 | --tw-translate-y: 0px; |
| -translate-y-px | --tw-translate-y: -1px; |
| -translate-y-full | --tw-translate-y: -100%; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `translate-x-${number}` | --tw-translate-x: `${number/4}rem;` |
| `translate-x-${fraction}` | --tw-translate-x: `${percent};` |
| `translate-x-${size}` | --tw-translate-x: `${size};` |
| `translate-y-${number}` | --tw-translate-y: `${number/4}rem;` |
| `translate-y-${fraction}` | --tw-translate-y: `${percent};` |
| `translate-y-${size}` | --tw-translate-y: `${size};` |
| `-translate-x-${number}` | --tw-translate-x: `-${number/4}rem;` |
| `-translate-x-${fraction}` | --tw-translate-x: `-${percent};` |
| `-translate-x-${size}` | --tw-translate-x: `-${size};` |
| `-translate-y-${number}` | --tw-translate-y: `-${number/4}rem;` |
| `-translate-y-${fraction}` | --tw-translate-y: `-${percent};` |
| `-translate-y-${size}` | --tw-translate-y: `-${size};` |

### Customizing

You can customize the global spacing scale in the theme.spacing or theme.extend.spacing sections of your windi.config.js file:

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
}
```

To customize the translate scale separately, use the theme.translate section of your windi.config.js file.

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
}
```

## Skew

Utilities for skewing elements with transform.

| Class | Properties |
| :---- | :--------- |
| `skew-x-${float}` | --tw-skew-x: `${float}deg;` |
| `skew-y-${float}` | --tw-skew-y: `${float}deg;` |
| `-skew-x-${float}` | --tw-skew-x: `-${float}deg;` |
| `-skew-y-${float}` | --tw-skew-y: `-${float}deg;` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      skew: {
        sq: '90deg',
      },
    },
  },
}
```
