# Positioning

## Order

Utilities for controlling the order of flex and grid items.

<PlaygroundWithVariants
  variant='5'
  :variants="['first', 'last', 'none', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9', '-10', '-11', '-12', '-13', '-14', '-6666']"
  prefix='order'
  nested=true
  fixed='!block'
  appended='order-1 order-2 order-3 order-4 order-5 order-6 order-7 order-8 order-9 order-10 order-11 rounded-md grid bg-teal-500 bg-yellow-400 bg-teal-100 p-2 w-6 h-6 gap-2 grid-cols-3 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid gap-2 grid-cols-3 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="order-1 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="order-2 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="order-3 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="order-4 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="order-5 {class} rounded-md bg-yellow-400 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="order-5 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="order-6 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="order-7 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="order-8 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="order-9 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="order-10 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="order-11 rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

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

<PlaygroundWithVariants
  variant='start'
  :variants="['start', 'end', 'center', 'between', 'around', 'evenly']"
  prefix='justify'
  nested=true
  fixed='!block pt-20'
  appended='flex rounded-md bg-teal-500 bg-teal-100 p-2 space-x-2 w-6 h-6'
  html='&lt;div class="flex {class} bg-teal-100 rounded-md p-2 space-x-2"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Justify Items

Utilities for controlling how grid items are aligned along their inline axis.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'start', 'end', 'center', 'stretch']"
  prefix='justify-items'
  nested=true
  fixed='!block'
  appended='grid rounded-md bg-teal-500 bg-teal-100 p-2 min-w-6 h-6 gap-2 grid-cols-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid {class} gap-2 grid-cols-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;/div&gt;'
/>

## Justify Self

Utilities for controlling how an individual grid item is aligned along its inline axis.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'start', 'end', 'center', 'stretch']"
  prefix='justify-self'
  nested=true
  fixed='!block'
  appended='grid rounded-md bg-teal-500 bg-yellow-400 bg-teal-100 p-2 min-w-6 h-6 gap-2 grid-cols-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid gap-2 grid-cols-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="{class} bg-yellow-400 rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;/div&gt;'
/>

## Align Content

Utilities for controlling how rows are positioned in multi-row flex and grid containers.

<PlaygroundWithVariants
  variant='center'
  :variants="['center', 'start', 'end', 'between', 'around', 'evenly']"
  prefix='content'
  nested=true
  fixed='!block'
  appended='grid rounded-md bg-teal-500 bg-teal-100 p-2 min-w-6 h-6 gap-2 grid-cols-2 text-xs text-white text-center flex flex-col justify-center h-48'
  html='&lt;div class="grid {class} gap-2 grid-cols-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center h-48"&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;/div&gt;'
/>

## Align Items

Utilities for controlling how flex and grid items are positioned along a container's cross axis.

<PlaygroundWithVariants
  variant='start'
  :variants="['start', 'end', 'center', 'baseline', 'stretch']"
  prefix='items'
  nested=true
  fixed='!block pt-10'
  appended='flex justify-center rounded-md bg-teal-500 bg-teal-100 p-2 space-x-2 w-6 min-h-6 h-32'
  html='&lt;div class="flex {class} justify-center bg-teal-100 rounded-md p-2 space-x-2 h-32"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 min-h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 min-h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 min-h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Align Self

Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.

<PlaygroundWithVariants
  variant='center'
  :variants="['auto', 'start', 'end', 'center', 'stretch']"
  prefix='self'
  nested=true
  fixed='!block pt-10'
  appended='flex justify-center rounded-md bg-teal-500 bg-yellow-400 bg-teal-100 p-2 space-x-2 w-6 min-h-6 h-32'
  html='&lt;div class="flex justify-center bg-teal-100 rounded-md p-2 space-x-2 h-32"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 min-h-6"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-yellow-400 w-6 min-h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 min-h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Place Content

Utilities for controlling how content is justified and aligned at the same time.

<PlaygroundWithVariants
  variant='center'
  :variants="['center', 'start', 'end', 'between', 'around', 'evenly', 'stretch']"
  prefix='place-content'
  nested=true
  fixed='!block'
  appended='grid rounded-md bg-teal-500 bg-teal-100 p-2 h-6 gap-2 grid-cols-2 text-xs text-white text-center flex flex-col justify-center h-38'
  html='&lt;div class="grid {class} gap-2 grid-cols-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center h-38"&gt;
&lt;div class="rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;/div&gt;'
/>

## Place Items

Utilities for controlling how items are justified and aligned at the same time.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'start', 'end', 'center', 'stretch']"
  prefix='place-items'
  nested=true
  fixed='!block'
  appended='grid rounded-md bg-teal-500 bg-teal-100 p-2 min-w-6 h-6 gap-2 grid-cols-2 text-xs text-white text-center flex flex-col justify-center h-38'
  html='&lt;div class="grid {class} gap-2 grid-cols-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center h-38"&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;/div&gt;'
/>

## Place Self

Utilities for controlling how an individual item is justified and aligned at the same time.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'start', 'end', 'center', 'stretch']"
  prefix='place-self'
  nested=true
  fixed='!block'
  appended='grid rounded-md bg-teal-500 bg-yellow-400 bg-teal-100 p-2 min-w-6 h-6 gap-2 grid-cols-2 text-xs text-white text-center flex flex-col justify-center h-38'
  html='&lt;div class="grid gap-2 grid-cols-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center h-38"&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="{class} rounded-md bg-yellow-400 min-w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 min-w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;/div&gt;'
/>

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
