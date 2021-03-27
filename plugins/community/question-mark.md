# @windicss/plugin-question-mark

A plugin that provides a helpful `?` dev time utility. This plugin is modified based on [tailwindcss-question-mark](https://github.com/GavinJoyce/tailwindcss-question-mark) to adapt to Windi CSS.

**Demo**: https://play.tailwindcss.com/5a9dYkfqd4

![example](https://user-images.githubusercontent.com/2526/100670452-ca598300-3356-11eb-8743-5d4d3c7b740f.gif)

## Installation

Install the plugin from npm:

```bash
npm install --save-dev @windicss/plugin-question-mark
```

Then add the plugin to your `tailwind.config.js` file:

```js
// windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('@windicss/plugin-question-mark'),
    // ...
  ],
}
```

## Usage

Simply add the `?` utility class to any element that you'd like to highlight.

**Demo**: https://play.tailwindcss.com/5a9dYkfqd4
