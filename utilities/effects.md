# Effects

## Box Shadow

Utilities for controlling the box shadow of an element.

| Class | Properties |
| :---- | :--------- |
| * | --tw-shadow: 0 0 #0000; |
| shadow-sm | --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |
| shadow | --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |
| shadow-md | --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |
| shadow-lg | --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |
| shadow-xl | --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |
| shadow-2xl | --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |
| shadow-inner | --tw-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |
| shadow-none | --tw-shadow: 0 0 #0000;<br>box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    boxShadow: {
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'none': 'none',
    },
  },
}
```

</Customizing>

## Opacity

Utilities for controlling the opacity of an element.

| Class | Properties |
| :---- | :--------- |
| `opacity-${int<=100}` | opacity: `${int/100};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    opacity: {
      light: '0.25',
      full: '1',
    },
  },
}
```

</Customizing>

## Mix Blend Mode

Utilities for controlling how an element should blend with the background.

| Class                 | Properties                   |
| :-------------------- | :--------------------------- |
| mix-blend-normal      | mix-blend-mode: normal;      |
| mix-blend-multiply    | mix-blend-mode: multiply;    |
| mix-blend-screen      | mix-blend-mode: screen;      |
| mix-blend-overlay     | mix-blend-mode: overlay;     |
| mix-blend-darken      | mix-blend-mode: darken;      |
| mix-blend-lighten     | mix-blend-mode: lighten;     |
| mix-blend-color-dodge | mix-blend-mode: color-dodge; |
| mix-blend-color-burn  | mix-blend-mode: color-burn;  |
| mix-blend-hard-light  | mix-blend-mode: hard-light;  |
| mix-blend-soft-light  | mix-blend-mode: soft-light;  |
| mix-blend-difference  | mix-blend-mode: difference;  |
| mix-blend-exclusion   | mix-blend-mode: exclusion;   |
| mix-blend-hue         | mix-blend-mode: hue;         |
| mix-blend-saturation  | mix-blend-mode: saturation;  |
| mix-blend-color       | mix-blend-mode: color;       |
| mix-blend-luminosity  | mix-blend-mode: luminosity;  |