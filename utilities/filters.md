# Filters

## Filter

Utilities for enabling and disabling filters on an element.

| Class | Properties |
| :---- | :--------- |
| filter | filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow); |
| filter-none	 | filter: none; |

### Blur

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| blur | --tw-blur: blur(8px); |
| blur-0 | --tw-blur: blur(0); |
| blur-sm | --tw-blur: blur(4px); |
| blur-md | --tw-blur: blur(12px); |
| blur-lg | --tw-blur: blur(16px); |
| blur-xl | --tw-blur: blur(24px); |
| blur-2xl | --tw-blur: blur(40px); |
| blur-3xl | --tw-blur: blur(64px); |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `blur-${int}` | --tw-blur: `blur(${int}px);` |
| `blur-${size}` | --tw-blur: `blur(${size});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    blur: {
      '4xl': '72px',
      '5xl': '96px',
      '6xl': '128px',
    },
  },
}
```

</Customizing>

### Brightness

| Class | Properties |
| :---- | :--------- |
| `brightness-${int}` | --tw-brightness: `brightness(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    brightness: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

### Contrast

| Class | Properties |
| :---- | :--------- |
| `contrast-${int}` | --tw-contrast: `contrast(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    contrast: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

### Drop Shadow

| Class | Properties |
| :---- | :--------- |
| drop-shadow | --tw-drop-shadow: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06)); |
| drop-shadow-sm | --tw-drop-shadow: drop-shadow(0 1px 1px rgba(0,0,0,0.05)); |
| drop-shadow-md | --tw-drop-shadow: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06)); |
| drop-shadow-lg | --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1)); |
| drop-shadow-xl | --tw-drop-shadow: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08)); |
| drop-shadow-2xl |--tw-drop-shadow: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)); |
| drop-shadow-none | --tw-drop-shadow: drop-shadow(0 0 #0000); |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    dropShadow: {
      '3xl': 'drop-shadow(0 30px 30px rgba(0, 0, 0, 0.2))',
      '4xl': 'drop-shadow(0 40px 40px rgba(0, 0, 0, 0.3))',
    },
  },
}
```

</Customizing>

### Grayscale

| Class | Properties |
| :---- | :--------- |
| grayscale | --tw-grayscale: grayscale(1); |
| grayscale-0 | --tw-grayscale: grayscale(0); |
| `grayscale-${int}` | --tw-grayscale: `grayscale(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    grayscale: {
      50: '0.5',
      80: '0.8',
    },
  },
}
```

</Customizing>

### Hue Rotate

| Class | Properties |
| :---- | :--------- |
| `hue-rotate-${int<=180>}` | --tw-hue-rotate: `hue-rotate(${int}deg)`; |
| `-hue-rotate-${int<=180>}` | --tw-hue-rotate: `hue-rotate(-${int}deg)`; |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    hueRotate: {
      sm: '60',
      lg: '90',
      xl: '180',
    },
  },
}
```

</Customizing>

### Invert

| Class | Properties |
| :---- | :--------- |
| invert | --tw-invert: invert(1); |
| invert-0 | --tw-invert: invert(0); |
| `invert-${int}` | --tw-invert: `invert(${int/100})`; |


<Customizing>

```js
// windi.config.js
export default {
  theme: {
    invert: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

### Saturate

| Class | Properties |
| :---- | :--------- |
| `saturate-${int}` | --tw-saturate: `saturate(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    saturate: {
      sm: '0.5',
      md: '1',
      lg: '1.5',
    },
  },
}
```

</Customizing>

### Sepia

| Class | Properties |
| :---- | :--------- |
| sepia | --tw-sepia: sepia(1); |
| sepia-0 | --tw-sepia: sepia(0); |
| `sepia-${int}` | --tw-sepia: `sepia(${int/100})`; |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    sepia: {
      sm: '0.5',
      md: '0.8',
    },
  },
}
```

</Customizing>

## Backdrop Filter

Utilities for enabling and disabling backdrop filters on an element.

| Class | Properties |
| :---- | :--------- |
| backdrop-filter | backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia); |
| backdrop-filter-none | backdrop-filter: none; |

### Backdrop Blur

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| backdrop-blur | --tw-backdrop-blur: blur(8px); |
| backdrop-blur-0 | --tw-backdrop-blur: blur(0); |
| backdrop-blur-sm | --tw-backdrop-blur: blur(4px); |
| backdrop-blur-md | --tw-backdrop-blur: blur(12px); |
| backdrop-blur-lg | --tw-backdrop-blur: blur(16px); |
| backdrop-blur-xl | --tw-backdrop-blur: blur(24px); |
| backdrop-blur-2xl | --tw-backdrop-blur: blur(40px); |
| backdrop-blur-3xl | --tw-backdrop-blur: blur(64px); |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `backdrop-blur-${int}` | --tw-backdrop-blur: `blur(${int}px);` |
| `backdrop-blur-${size}` | --tw-backdrop-blur: `blur(${size});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropBlur: {
      '4xl': '72px',
      '5xl': '96px',
      '6xl': '128px',
    },
  },
}
```

</Customizing>

### Backdrop Brightness

| Class | Properties |
| :---- | :--------- |
| `backdrop-brightness-${int}` | --tw-backdrop-brightness: `brightness(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropBrightness: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

### Backdrop Contrast

| Class | Properties |
| :---- | :--------- |
| `backdrop-contrast-${int}` | --tw-backdrop-contrast: `contrast(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropContrast: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

### Backdrop Grayscale

| Class | Properties |
| :---- | :--------- |
| backdrop-grayscale | --tw-backdrop-grayscale: grayscale(1); |
| backdrop-grayscale-0 | --tw-backdrop-grayscale: grayscale(0); |
| `backdrop-grayscale-${int}` | --tw-backdrop-grayscale: `grayscale(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropGrayscale: {
      50: '0.5',
      80: '0.8',
    },
  },
}
```

</Customizing>

### Backdrop Hue Rotate

| Class | Properties |
| :---- | :--------- |
| `backdrop-hue-rotate-${int<=180>}` | --tw-backdrop-hue-rotate: `hue-rotate(${int}deg)`; |
| `-backdrop-hue-rotate-${int<=180>}` | --tw-backdrop-hue-rotate: `hue-rotate(-${int}deg)`; |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropHueRotate: {
      sm: '60',
      lg: '90',
      xl: '180',
    },
  },
}
```

</Customizing>

### Backdrop Invert

| Class | Properties |
| :---- | :--------- |
| backdrop-invert | --tw-backdrop-invert: invert(1); |
| backdrop-invert-0 | --tw-backdrop-invert: invert(0); |
| `backdrop-invert-${int}` | --tw-backdrop-invert: `invert(${int/100})`; |


<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropInvert: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

### Backdrop Opacity

| Class | Properties |
| :---- | :--------- |
| `backdrop-opacity-${int<=100}` | --tw-backdrop-opacity: `opacity(${int/100})`; |


<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropOpacity: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

### Backdrop Saturate

| Class | Properties |
| :---- | :--------- |
| `backdrop-saturate-${int}` | --tw-backdrop-saturate: `saturate(${int/100});` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropSaturate: {
      sm: '0.5',
      md: '1',
      lg: '1.5',
    },
  },
}
```

</Customizing>

### Backdrop Sepia

| Class | Properties |
| :---- | :--------- |
| backdrop-sepia-0 | --tw-backdrop-sepia: sepia(0); |
| backdrop-sepia | --tw-backdrop-sepia: sepia(1); |
| `backdrop-sepia-${int}` | --tw-backdrop-sepia: `sepia(${int/100})`; |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    backdropSepia: {
      sm: '0.5',
      md: '0.8',
    },
  },
}
```
</Customizing>