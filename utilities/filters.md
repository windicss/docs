# Filters

## Filter

Utilities for enabling and disabling filters on an element.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'none']"
  prefix='filter'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='!hue-rotate-30 w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 {class} !hue-rotate-30"&gt;'
/>

### Blur

<PlaygroundWithVariants
  variant='sm'
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '0', '1', '2', '3', '9', '12', '24px', '2rem']"
  prefix='blur'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='brightness'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='contrast'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant='md'
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', 'none']"
  prefix='drop-shadow'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='grayscale'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant='45'
  :variants="['0', '15', '30', '45', '60', '90', '120', '180', '-120', '-90', '-60', '-45', '-30', '-15']"
  prefix='hue-rotate'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 filter'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='invert'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant='0'
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='saturate'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='sepia'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

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