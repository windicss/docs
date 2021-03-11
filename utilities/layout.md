# Layout

## [Container](https://tailwindcss.com/docs/container)

A component for fixing an element's width to the current breakpoint.

| Class     | Breakpoint     | Properties         |
| :----     | :------------- | :----------------- |
| container | *None*         | width: 100%;       |
|           | sm *(640px)*   | max-width: 640px;  |
|           | md *(768px)*   | max-width: 768px;  |
|           | lg *(1024px)*  | max-width: 1024px; |
|           | xl *(1280px)*  | max-width: 1280px; |
|           | 2xl *(1536px)* | max-width: 1536px; |

### Usage

To center a container, use the mx-auto utility:

```html
<div class="container mx-auto">
  <!-- ... -->
</div>
```

To add horizontal padding, use the `px-{size}` utilities:

```html
<div class="container mx-auto px-4">
  <!-- ... -->
</div>
```

To use a container at only a certain breakpoint and up:

```html
<!-- Full-width fluid until the `lg` breakpoint, then lock to container -->
<div class="md:container md:mx-auto">
  <!-- ... -->
</div>
```

### Customizing

#### Centering by default

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
}
```

#### Horizontal padding

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      padding: '2rem',
    },
  },
}
```

Specify a different padding amount for each breakpoint

```js
// tailwind.config.js
module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
}
```

***

## [Box Sizing](https://tailwindcss.com/docs/box-sizing)

Utilities for controlling how the browser should calculate an element's total size.

| Class       | Properties                |
| :---------- | :------------------------ |
| box-border  | box-sizing: border-box;   |
| box-content | box-sizing: content-box;  |

## [Display](https://tailwindcss.com/docs/display)

Utilities for controlling the display box type of an element.

| Class  | Properties |
| :----- | :--------- |
| block	| display: block; |
| inline-block | display: inline-block; |
| inline	| display: inline; |
| flex	| display: flex; |
| inline-flex	| display: inline-flex; |
| table	| display: table; |
| table-caption	| display: table-caption; |
| table-cell	| display: table-cell; |
| table-column	| display: table-column; |
| table-column-group	| display: table-column-group; |
| table-footer-group	| display: table-footer-group; |
| table-header-group	| display: table-header-group; |
| table-row-group	| display: table-row-group; |
| table-row	| display: table-row; |
| flow-root	| display: flow-root; |
| grid	| display: grid; |
| inline-grid	| display: inline-grid; |
| contents	| display: contents; |
| hidden	| display: none; |

## [Floats](https://tailwindcss.com/docs/float)

Utilities for controlling the wrapping of content around an element.

| Class  | Properties |
| :----- | :--------- |
| float-right | float: right; |
| float-left | float: left; |
| float-none | float: none; |

## [Clear](https://tailwindcss.com/docs/clear)

Utilities for controlling the wrapping of content around an element.

| Class  | Properties |
| :----- | :--------- |
| clear-left | clear: left; |
| clear-right | clear: right; |
| clear-both | clear: both; |
| clear-none | clear: none; |

## [Object Fit](https://tailwindcss.com/docs/object-fit)

Utilities for controlling how a replaced element's content should be resized.

| Class | Properties |
| :---- | :--------- |
| object-contain | object-fit: contain; |
| object-cover | object-fit: cover; |
| object-fill | object-fit: fill; |
| object-none | object-fit: none; |
| object-scale-down | object-fit: scale-down; |

## [Object Position](https://tailwindcss.com/docs/object-position)

Utilities for controlling how a replaced element's content should be positioned within its container.

| Class | Properties |
| :---- | :--------- |
| object-bottom | object-position: bottom; |
| object-center | object-position: center; |
| object-left | object-position: left; |
| object-left-bottom | object-position: left bottom; |
| object-left-top | object-position: left top; |
| object-right | object-position: right; |
| object-right-bottom | object-position: right bottom; |
| object-right-top | object-position: right top; |
| object-top | object-position: top; |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'center-bottom': 'center bottom',
      'center-top': 'center top',
    },
  },
}
```

## [Overflow](https://tailwindcss.com/docs/overflow)

Utilities for controlling how an element handles content that is too large for the container.

| Class | Properties |
| :---- | :--------- |
| overflow-auto | overflow: auto; |
| overflow-hidden | overflow: hidden; |
| overflow-visible | overflow: visible; |
| overflow-scroll | overflow: scroll; |
| overflow-x-auto | overflow-x: auto; |
| overflow-y-auto | overflow-y: auto; |
| overflow-x-hidden | overflow-x: hidden; |
| overflow-y-hidden | overflow-y: hidden; |
| overflow-x-visible | overflow-x: visible; |
| overflow-y-visible | overflow-y: visible; |
| overflow-x-scroll | overflow-x: scroll; |
| overflow-y-scroll | overflow-y: scroll; |

## [Overscroll Behavior](https://tailwindcss.com/docs/overscroll-behavior)

Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.

| Class | Properties |
| :---- | :--------- |
| overscroll-auto | overscroll-behavior: auto; |
| overscroll-contain | overscroll-behavior: contain; |
| overscroll-none | overscroll-behavior: none; |
| overscroll-y-auto | overscroll-behavior-y: auto; |
| overscroll-y-contain | overscroll-behavior-y: contain; |
| overscroll-y-none | overscroll-behavior-y: none; |
| overscroll-x-auto | overscroll-behavior-x: auto; |
| overscroll-x-contain | overscroll-behavior-x: contain; |
| overscroll-x-none | overscroll-behavior-x: none; |

## [Position](https://tailwindcss.com/docs/position)

Utilities for controlling how an element is positioned in the DOM.

| Class | Properties |
| :---- | :--------- |
| static | position: static; |
| fixed | position: fixed; |
| absolute | position: absolute; |
| relative | position: relative; |
| sticky | position: sticky; |

## [Top / Right / Bottom / Left](https://tailwindcss.com/docs/top-right-bottom-left) ⭐️

Utilities for controlling the placement of positioned elements.

### Inset

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| inset-0 | top: 0px;<br>right: 0px;<br>bottom: 0px;<br>left: 0px; |
| inset-auto | top: auto;<br>right: auto;<br>bottom: auto;<br>left: auto; |
| inset-px | top: 1px;<br>right: 1px;<br>bottom: 1px;<br>left: 1px; |
| inset-full | top: 100%;<br>right: 100%;<br>bottom: 100%;<br>left: 100%; |
| -inset-0 | top: 0px;<br>right: 0px;<br>bottom: 0px;<br>left: 0px; |
| -inset-px | top: -1px;<br>right: -1px;<br>bottom: -1px;<br>left: -1px; |
| -inset-full | top: -100%;<br>right: -100%;<br>bottom: -100%;<br>left: -100%; |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `inset-${float}` | top: `${float/4}rem;`<br>right: `${float/4}rem;`<br>bottom: `${float/4}rem;`<br>left: `${float/4}rem;` |
| `inset-${fraction}` | top: `${percent};`<br>right: `${percent};`<br>bottom: `${percent};`<br>left: `${percent};` |
| `inset-${size}` | top: `${size};`<br>right: `${size};`<br>bottom: `${size};`<br>left: `${size};` |
| `-inset-${float}` | top: `-${float/4}rem;`<br>right: `-${float/4}rem;`<br>bottom: `-${float/4}rem;`<br>left: `-${float/4}rem;` |
| `-inset-${fraction}` | top: `-${percent};`<br>right: `-${percent};`<br>bottom: `-${percent};`<br>left: `-${percent};` |
| `-inset-${size}` | top: `-${size};`<br>right: `-${size};`<br>bottom: `-${size};`<br>left: `-${size};` |

### Inset Y

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| inset-y-0 | top: 0px;<br>bottom: 0px; |
| inset-y-auto | top: auto;<br>bottom: auto; |
| inset-y-px | top: 1px;<br>bottom: 1px; |
| inset-y-full | top: 100%;<br>bottom: 100%; |
| -inset-y-0 | top: 0px;<br>bottom: 0px; |
| -inset-y-px | top: -1px;<br>bottom: -1px; |
| -inset-y-full | top: -100%;<br>bottom: -100%; |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `inset-y-${float}` | top: `${float/4}rem;`<br>bottom: `${float/4}rem;` |
| `inset-y-${fraction}` | top: `${percent};`<br>bottom: `${percent};` |
| `inset-y-${size}` | top: `${size};`<br>bottom: `${size};` |
| `-inset-y-${float}` | top: `-${float/4}rem;`<br>bottom: `-${float/4}rem;` |
| `-inset-y-${fraction}` | top: `-${percent};`<br>bottom: `-${percent};` |
| `-inset-y-${size}` | top: `-${size};`<br>bottom: `-${size};` |


### Inset X

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| inset-x-0 | right: 0px;<br>left: 0px; |
| inset-x-auto | right: auto;<br>left: auto; |
| inset-x-px | right: 1px;<br>left: 1px; |
| inset-x-full | right: 100%;<br>left: 100%; |
| -inset-x-0 | right: 0px;<br>left: 0px; |
| -inset-x-px | right: -1px;<br>left: -1px; |
| -inset-x-full | right: -100%;<br>left: -100%; |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `inset-x-${float}` | right: `${float/4}rem;`<br>left: `${float/4}rem;` |
| `inset-x-${fraction}` | right: `${percent};`<br>left: `${percent};` |
| `inset-x-${size}` | right: `${size};`<br>left: `${size};` |
| `-inset-x-${float}` | right: `-${float/4}rem;`<br>left: `-${float/4}rem;` |
| `-inset-x-${fraction}` | right: `-${percent};`<br>left: `-${percent};` |
| `-inset-x-${size}` | right: `-${size};`<br>left: `-${size};` |

### Top

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| top-0 | top: 0px; |
| top-auto | top: auto; |
| top-px | top: 1px; |
| top-full | top: 100%; |
| -top-0 | top: 0px; |
| -top-px | top: -1px; |
| -top-full | top: -100%; |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `top-${float}` | top: `${float/4}rem;` |
| `top-${fraction}` | top: `${percent};` |
| `top-${size}` | top: `${size};` |
| `-top-${float}` | top: `-${float/4}rem;` |
| `-top-${fraction}` | top: `-${percent};` |
| `-top-${size}` | top: `-${size};` |

### Right

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| right-0 | right: 0px; |
| right-auto | right: auto; |
| right-px | right: 1px; |
| right-full | right: 100%; |
| -right-0 | right: 0px; |
| -right-px | right: -1px; |
| -right-full | right: -100%; |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `right-${float}` | right: `${float/4}rem;` |
| `right-${fraction}` | right: `${percent};` |
| `right-${size}` | right: `${size};` |
| `-right-${float}` | right: `-${float/4}rem;` |
| `-right-${fraction}` | right: `-${percent};` |
| `-right-${size}` | right: `-${size};` |

### Bottom

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| bottom-0 | bottom: 0px; |
| bottom-auto | bottom: auto; |
| bottom-px | bottom: 1px; |
| bottom-full | bottom: 100%; |
| -bottom-0 | bottom: 0px; |
| -bottom-px | bottom: -1px; |
| -bottom-full | bottom: -100%; |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `bottom-${float}` | bottom: `${float/4}rem;` |
| `bottom-${fraction}` | bottom: `${percent};` |
| `bottom-${size}` | bottom: `${size};` |
| `-bottom-${float}` | bottom: `-${float/4}rem;` |
| `-bottom-${fraction}` | bottom: `-${percent};` |
| `-bottom-${size}` | bottom: `-${size};` |

### Left

#### Static Utilities

| Class | Properties |
| :---- | :--------- |
| left-0 | left: 0px; |
| left-auto | left: auto; |
| left-px | left: 1px; |
| left-full | left: 100%; |
| -left-0 | left: 0px; |
| -left-px | left: -1px; |
| -left-full | left: -100%; |

#### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `left-${float}` | left: `${float/4}rem;` |
| `left-${fraction}` | left: `${percent};` |
| `left-${size}` | left: `${size};` |
| `-left-${float}` | left: `-${float/4}rem;` |
| `-left-${fraction}` | left: `-${percent};` |
| `-left-${size}` | left: `-${size};` |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    inset: {
      sm: '1rem',
      lg: '4rem',
    },
  },
}
```

## [Visibility](https://tailwindcss.com/docs/visibility)

Utilities for controlling the visibility of an element.

| Class | Properties |
| :---- | :--------- |
| visible | visibility: visible; |
| invisible | visibility: hidden; |

## [Z-Index](https://tailwindcss.com/docs/z-index) ⭐️

Utilities for controlling the stack order of an element.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| z-auto | z-index: auto; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `z-${int}` | z-index: `${int};` |
| `-z-${int}` | z-index: `-${int};` |

### Customizing

```js
// tailwind.config.js
module.exports = {
  theme: {
    zIndex: {
      first: 10,
      seconde: 20,
    },
  },
}
```
