# @windicss/plugin-scrollbar

Adds styling utilities for scrollbars in Firefox and webkit-based browsers. This plugin is modified based on [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar) to adapt to Windi CSS.

## Installation

```bash
npm install --save-dev @windicss/plugin-scrollbar
```

Add it to the plugins array of your Config File.

```js windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('@windicss/plugin-scrollbar'),
    // ...
  ],
}
```

## Usage

**NB:** This plugin *styles* scrollbars; it does not force them to appear. Use typical CSS techniques to force content to overflow and trigger a scrollbar.

For every element that you want to style, add either the `.scrollbar` or `.scrollbar-thin` class. You may then add any `scrollbar-track-{color}`, `scrollbar-thumb-{color}` or `hover:scrollbar-thumb-{color}` classes you like. (Note that `hover:scrollbar-thumb-{color}` classes only have effects in webkit-based browsers.)

Here's a minimal example (keeping in mind that the `h-32` and `h-64` classes are just there to force the scrollbar to appear):

```html
<div class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
    <div class="h-64"></div>
</div>
```

A live version of this demo [can be found here](https://tailwind-scrollbar-example.adoxography.repl.co/).

This plugin also capable of adding utilties for creating rounded scrollbars (by referencing your configured [border radius](https://tailwindcss.com/docs/border-radius#customizing) settings). However, as they are only supported in Webkit-based browsers, their usage is inadvisable in cross-browser applications. To enable rounded scrollbar utilities, add `'rounded'` to the list of scrollbar variants in your config file. This will add utilities such as `scrollbar-thumb-rounded` or `scrollbar-thumb-rounded-md`.
