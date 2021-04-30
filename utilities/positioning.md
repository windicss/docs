# Positioning

## Order

Utilities for controlling the order of flex and grid items.

### Static Utilities

| Class | Properties |
| :---- | :--------- |
| order-first | order: -9999; |
| order-last | order: 9999; |
| order-none | order: 0; |

### Dynamic Utilities

| Class | Properties |
| :---- | :--------- |
| `order-${int}` | order: `${int};` |
| `-order-${int}` | order: `-${int};` |

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      normal: '0',
    },
  },
}
```

</Customizing>

## Justify Content

Utilities for controlling how flex and grid items are positioned along a container's main axis.

| Class | Properties |
| :---- | :--------- |
| justify-start | justify-content: flex-start; |
| justify-end | justify-content: flex-end; |
| justify-center | justify-content: center; |
| justify-between | justify-content: space-between; |
| justify-around | justify-content: space-around; |
| justify-evenly | justify-content: space-evenly; |

## Justify Items

Utilities for controlling how grid items are aligned along their inline axis.

| Class | Properties |
| :---- | :--------- |
| justify-items-auto | justify-items: auto; |
| justify-items-start | justify-items: start; |
| justify-items-end | justify-items: end; |
| justify-items-center | justify-items: center; |
| justify-items-stretch | justify-items: stretch; |

## Justify Self

Utilities for controlling how an individual grid item is aligned along its inline axis.

| Class | Properties |
| :---- | :--------- |
| justify-self-auto | justify-self: auto; |
| justify-self-start | justify-self: start; |
| justify-self-end | justify-self: end; |
| justify-self-center | justify-self: center; |
| justify-self-stretch | justify-self: stretch; |

## Align Content

Utilities for controlling how rows are positioned in multi-row flex and grid containers.

| Class | Properties |
| :---- | :--------- |
| content-center | align-content: center; |
| content-start | align-content: flex-start; |
| content-end | align-content: flex-end; |
| content-between | align-content: space-between; |
| content-around | align-content: space-around; |
| content-evenly | align-content: space-evenly; |

## Align Items

Utilities for controlling how flex and grid items are positioned along a container's cross axis.

| Class | Properties |
| :---- | :--------- |
| items-start | align-items: flex-start; |
| items-end | align-items: flex-end; |
| items-center | align-items: center; |
| items-baseline | align-items: baseline; |
| items-stretch | align-items: stretch; |

## Align Self

Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

| Class | Properties |
| :---- | :--------- |
| self-auto | align-self: auto; |
| self-start | align-self: flex-start; |
| self-end | align-self: flex-end; |
| self-center | align-self: center; |
| self-stretch | align-self: stretch; |

## Place Content

Utilities for controlling how content is justified and aligned at the same time.

| Class | Properties |
| :---- | :--------- |
| place-content-center | place-content: center; |
| place-content-start | place-content: start; |
| place-content-end | place-content: end; |
| place-content-between | place-content: space-between; |
| place-content-around | place-content: space-around; |
| place-content-evenly | place-content: space-evenly; |
| place-content-stretch | place-content: stretch; |

## Place Items

Utilities for controlling how items are justified and aligned at the same time.

| Class | Properties |
| :---- | :--------- |
| place-items-auto | place-items: auto; |
| place-items-start | place-items: start; |
| place-items-end | place-items: end; |
| place-items-center | place-items: center; |
| place-items-stretch | place-items: stretch; |

## Place Self

Utilities for controlling how an individual item is justified and aligned at the same time.

| Class | Properties |
| :---- | :--------- |
| place-self-auto | place-self: auto; |
| place-self-start | place-self: start; |
| place-self-end | place-self: end; |
| place-self-center | place-self: center; |
| place-self-stretch | place-self: stretch; |

## Position

Utilities for controlling how an element is positioned in the DOM.

| Class | Properties |
| :---- | :--------- |
| static | position: static; |
| fixed | position: fixed; |
| absolute | position: absolute; |
| relative | position: relative; |
| sticky | position: sticky; |

## Top / Right / Bottom / Left

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

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    inset: {
      sm: '1rem',
      lg: '4rem',
    },
  },
}
```

</Customizing>

## Floats

Utilities for controlling the wrapping of content around an element.

| Class  | Properties |
| :----- | :--------- |
| float-right | float: right; |
| float-left | float: left; |
| float-none | float: none; |

## Clear

Utilities for controlling the wrapping of content around an element.

| Class  | Properties |
| :----- | :--------- |
| clear-left | clear: left; |
| clear-right | clear: right; |
| clear-both | clear: both; |
| clear-none | clear: none; |

## Isolation

Utilities for controlling whether an element should explicitly create a new stacking context.

| Class  | Properties |
| :----- | :--------- |
| isolate | isolation: isolate; |
| isolation-auto | isolation: auto; |

## Object Fit

Utilities for controlling how a replaced element's content should be resized.

| Class | Properties |
| :---- | :--------- |
| object-contain | object-fit: contain; |
| object-cover | object-fit: cover; |
| object-fill | object-fit: fill; |
| object-none | object-fit: none; |
| object-scale-down | object-fit: scale-down; |

## Object Position

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

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    objectPosition: {
      'bottom': 'bottom',
      'center': 'center',
      'left': 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'right': 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'top': 'top',
      'center-bottom': 'center bottom',
      'center-top': 'center top',
    },
  },
}
```

</Customizing>

## Z-Index

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

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    zIndex: {
      first: 10,
      seconde: 20,
    },
  },
}
```

</Customizing>
