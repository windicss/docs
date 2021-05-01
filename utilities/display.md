# Display

## Block

The `block` utility generates a block element box, generating line breaks both before and after the element when in the normal flow.

| Class | Properties |
| :---- | :--------- |
| block	| display: block; |

## Inline Block

The `inline-block` utility generates a block element box that will be flowed with surrounding content as if it were a single inline box (behaving much like a replaced element would).

| Class | Properties |
| :---- | :--------- |
| inline-block | display: inline-block; |

## Inline

The `inline` utility generates one or more inline element boxes that do not generate line breaks before or after themselves. In normal flow, the next element will be on the same line if there is space

| Class | Properties |
| :---- | :--------- |
| inline	| display: inline; |

## Flow Root

The `flow-root` utility generates a block element box that establishes a new [block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context), defining where the formatting root lies.

| Class | Properties |
| :---- | :--------- |
| flow-root	| display: flow-root; |

## Contents

The `contents` utilities don't produce a specific box by themselves. They are replaced by their pseudo-box and their child boxes.

| Class | Properties |
| :---- | :--------- |
| contents	| display: contents; |

## List Item

The `list-item` utility generates a `::marker` pseudo-element with the content specified by its `list-style` properties (for example a bullet point) together with a principal box of the specified type for its own contents.

| Class | Properties |
| :---- | :--------- |
| list-item	| display: list-item; |

## Hidden

Turns off the `display` of an element so that it has no effect on layout (the document is rendered as though the element did not exist). All descendant elements also have their display turned off. To have an element take up the space that it would normally take, but without actually rendering anything, use the [visibility](#visibility) property instead.

| Class | Properties |
| :---- | :--------- |
| hidden	| display: none; |

## Visibility

Utilities for controlling the visibility of an element. The `visibility` CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a `<table>`.

<PlaygroundWithVariants
  variant='visible'
  :variants="['visible', 'invisible']"
  fixed='p-2 dark:text-white opacity-85 w-full h-screen flex items-center space-x-2'
  nested=true
  appended='rounded-md bg-teal-500 w-10 h-10'
  html='&lt;div class="rounded-md bg-teal-500 w-10 h-10"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-teal-500 w-10 h-10"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-10 h-10"&gt;&lt;/div&gt;'
/>