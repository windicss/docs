# Interactivity

## [Appearance](https://tailwindcss.com/docs/appearance)

Utilities for suppressing native form control styling.

| Class | Properties |
| :---- | :--------- |
| appearance-none | appearance: none; |

## [Cursor](https://tailwindcss.com/docs/cursor)

Utilities for controlling the cursor style when hovering over an element.

| Class | Properties |
| :---- | :--------- |
| cursor-auto | cursor: auto; |
| cursor-default | cursor: default; |
| cursor-pointer | cursor: pointer; |
| cursor-wait | cursor: wait; |
| cursor-text | cursor: text; |
| cursor-move | cursor: move; |
| cursor-not-allowed | cursor: not-allowed; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    cursor: {
      'auto': 'auto',
      'default': 'default',
      'pointer': 'pointer',
      'wait': 'wait',
      'text': 'text',
      'move': 'move',
      'not-allowed': 'not-allowed',
      'crosshair': 'crosshair',
      'zoom-in': 'zoom-in',
    },
  },
}
```

## [Outline](https://tailwindcss.com/docs/outline) ⭐️

Utilities for controlling an element's outline.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| outline-none | outline: 2px solid transparent;<br>outline-offset: 2px; |
| outline-white | outline: 2px dotted white;<br>outline-offset: 2px; |
| outline-black | outline: 2px dotted black;<br>outline-offset: 2px; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `outline-${color}` | outline: `2px solid ${hex};`<br>outline-offset: 2px; |
| `outline-solid-${color}` | outline: `2px solid ${hex};`<br>outline-offset: 2px; |
| `outline-dotted-${color}` | outline: `2px dotted ${hex};`<br>outline-offset: 2px; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      outline: {
        blue: '2px solid #0000ff',
      },
    },
  },
}
```

You can also provide an outline-offset value for any custom outline utilities using a tuple of the form [outline, outlineOffset]:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      outline: {
        blue: ['2px solid #0000ff', '1px'],
      },
    },
  },
}
```

## [Pointer Events](https://tailwindcss.com/docs/pointer-events)

Utilities for controlling whether an element responds to pointer events.

| Class | Properties |
| :---- | :--------- |
| pointer-events-none | pointer-events: none; |
| pointer-events-auto | pointer-events: auto; |

## [Resize](https://tailwindcss.com/docs/resize)

Utilities for controlling how an element can be resized.

| Class | Properties |
| :---- | :--------- |
| resize-none | resize: none; |
| resize-y | resize: vertical; |
| resize-x | resize: horizontal; |
| resize | resize: both; |

## [User Select](https://tailwindcss.com/docs/user-select)

Utilities for controlling whether the user can select text in an element.

| Class | Properties |
| :---- | :--------- |
| select-none | user-select: none; |
| select-text | user-select: text; |
| select-all | user-select: all; |
| select-auto | user-select: auto; |
