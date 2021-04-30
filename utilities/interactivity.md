# Interactivity

## Appearance

Utilities for suppressing native form control styling.

<PlaygroundWithVariants
  variant='none'
  :variants="['none']"
  prefix='appearance'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden flex flex-col justify-center space-y-5 h-screen bg-blue-100 rounded-md'
  appended='w-12'
  nested=true
  html='
  &lt;select class="w-12"&gt;
  &lt;option&gt;Yes&lt;/option&gt;
  &lt;option&gt;No&lt;/option&gt;
&lt;/select&gt;
  &lt;select class="{class} w-12"&gt;
  &lt;option&gt;Yes&lt;/option&gt;
  &lt;option&gt;No&lt;/option&gt;
&lt;/select&gt;'
/>

## Cursor

Utilities for controlling the cursor style when hovering over an element.

<PlaygroundWithVariants
  variant='pointer'
  :variants="['auto', 'default', 'pointer', 'wait', 'text', 'move', 'not-allowed']"
  prefix='cursor'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-blue-500 ring-4 ring-opacity-50'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 {class}&quot;&gt;
    Hover me
  &lt;/button&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
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

</Customizing>

## Outline

Utilities for controlling an element's outline.

<PlaygroundWithVariants
  variant='gray-500'
  :variants="['none', 'white', 'black', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='outline'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

#### Outline Solid

<PlaygroundWithVariants
  variant='gray-500'
  :variants="['none', 'white', 'black', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='outline-solid'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

#### Outline Dotted

<PlaygroundWithVariants
  variant='gray-500'
  :variants="['none', 'white', 'black', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='outline-dotted'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
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
// windi.config.js
export default {
  theme: {
    extend: {
      outline: {
        blue: ['2px solid #0000ff', '1px'],
      },
    },
  },
}
```

</Customizing>

## Pointer Events

Utilities for controlling whether an element responds to pointer events.

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'auto']"
  prefix='pointer-events'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='underline text-blue-500'
  nested=true
  html='&lt;a href="/" class="underline text-blue-500 {class}"&gt;
    Click this link to return to the homepage
  &lt;/a&gt;'
/>

## Resize

Utilities for controlling how an element can be resized.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'y', 'x', 'none']"
  prefix='resize'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none border rounded-md m-0 w-30 h-30 bg-blue-300'
  nested=true
  html='&lt;textarea class=&quot;{class} focus:outline-none border rounded-md m-0 w-30 h-30 bg-blue-300&quot;&gt;&lt;/textarea&gt;'
/>

## User Select

Utilities for controlling whether the user can select text in an element.

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'text', 'all', 'auto']"
  prefix='select'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## Box Sizing

Utilities for controlling how the browser should calculate an element's total size.

| Class       | Properties                |
| :---------- | :------------------------ |
| box-border  | box-sizing: border-box;   |
| box-content | box-sizing: content-box;  |

## Box Decoration Break

Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.

| Class       | Properties                |
| :---------- | :------------------------ |
| decoration-slice | box-decoration-break: slice;   |
| decoration-clone | box-decoration-break: clone;  |

## Overflow

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

## Overscroll Behavior

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


