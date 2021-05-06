# Behaviors

## Animation

Utilities for animating elements with CSS animations.

<PlaygroundWithVariants
  variant='bounce'
  :variants="['none', 'spin', 'ping', 'pulse', 'bounce']"
  prefix='animate'
  fixed='p-2 dark:text-white opacity-85 h-screen flex flex-col justify-center'
  nested=true
  appended='transition ease-in-out focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1'
  html='&lt;button tabindex="-1"; class="transition {class} ease-in-out focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1"&gt;
    Click me
  &lt;/button&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
```

To add new animation @keyframes, use the keyframes section of your theme configuration:

```js
// windi.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
}
```

</Customizing>

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
  :variants="['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed']"
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

## Overflow

Utilities for controlling how an element handles content that is too large for the container.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'hidden', 'visible', 'scroll', 'x-auto', 'x-hidden', 'x-visible', 'x-scroll', 'y-auto', 'y-hidden', 'y-visible', 'y-scroll']"
  prefix='overflow'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-blue-100 p-2 rounded-md text-xs'
  html='&lt;div class="bg-blue-100 p-2 rounded-md text-xs {class}"&gt;
The value of Pi is
          3.1415926535897932384626433832795029. The value of e is
          2.7182818284590452353602874713526625.
        Michaelmas term lately over, and the Lord Chancellor sitting in Lincolns Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth.
&lt;/div&gt;'
/>

## Overscroll Behavior

Utilities for controlling how the browser behaves when reaching the boundary of a scrolling area.

- Use `auto` to make it possible for the user to continue scrolling a parent scroll area when they reach the boundary of the primary scroll area.

- Use `none` to prevent scrolling in the target area from triggering scrolling in the parent element, and also prevent "bounce" effects when scrolling past the end of the container.

- Use `contain` to prevent scrolling in the target area from triggering scrolling in the parent element, but preserve "bounce" effects when scrolling past the end of the container in operating systems that support it.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'none', 'contain', 'x-auto', 'x-none', 'x-contain', 'y-auto', 'y-none', 'y-contain']"
  prefix='overscroll'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-blue-100 p-2 rounded-md text-xs overflow-auto'
  html='&lt;div class="bg-blue-100 p-2 rounded-md text-xs overflow-auto {class}"&gt;
The value of Pi is
          3.1415926535897932384626433832795029. The value of e is
          2.7182818284590452353602874713526625.
        Michaelmas term lately over, and the Lord Chancellor sitting in Lincolns Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth.
&lt;/div&gt;'
/>

## Box Decoration Break

Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.

<PlaygroundWithVariants
  variant='slice'
  :variants="['slice', 'clone']"
  prefix='decoration'
  fixed='dark:text-white opacity-85 overflow-hidden p-2 h-screen'
  nested=true
  appended='text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 rounded-16px px-4 text-sm text-white'
  html="
&lt;div&gt;
  &lt;span class=&quot;{class} bg-gradient-to-r px-4 from-green-400 to-blue-500 text-sm text-white rounded-16px&quot;&gt;The&lt;br&gt;quick&lt;br&gt;brown fox&lt;br&gt;over the lazy dog&lt;/span&gt;
&lt;/div&gt;"
/>

## Screen Readers Access

Utilities for improving accessibility with screen readers.

| Class | Properties |
| :---- | :--------- |
| sr-only | position: absolute;<br>width: 1px;<br>height: 1px;<br>padding: 0;<br>margin: -1px;<br>overflow: hidden;<br>clip: rect(0, 0, 0, 0);<br>white-space: nowrap;<br>border-width: 0; |
| not-sr-only | position: static;<br>width: auto;<br>height: auto;<br>padding: 0;<br>margin: 0;<br>overflow: visible;<br>clip: auto;<br>white-space: normal; |

### Usage

Use sr-only to hide an element visually without hiding it from screen readers:

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only">Settings</span>
</a>
```

Use not-sr-only to undo sr-only, making an element visible to sighted users as well as screen readers. This can be useful when you want to visually hide something on small screens but show it on larger screens for example:

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only sm:not-sr-only">Settings</span>
</a>
```

By default, responsive and focus variants are generated for these utilities. You can use focus:not-sr-only to make an element visually hidden by default but visible when the user tabs to it — useful for "skip to content" links:

```html
<a href="#" class="sr-only focus:not-sr-only">
  Skip to content
</a>
```

