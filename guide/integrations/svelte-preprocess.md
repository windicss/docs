[utility groups]: /guide/features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[migration]: /guide/migration

# Integration for Svelte (preprocessor)

<kbd>[svelte-windicss-preprocess]</kbd> provides simple integration for Windi CSS using [svelte.preprocess](https://svelte.dev/docs#svelte_preprocess) API.

## Installation

Add the package:

```bash
npm i -D svelte-windicss-preprocess
```

> If migrating from Tailwind CSS, also check out the [_Migration_ section][migration]

## Configuration

Add <kbd>[svelte-windicss-preprocess]</kbd> to your bundler configuration.

### Vanilla Svelte

```js
// rollup.config.js
export default {
  // ...
  plugins: [
    svelte({
      // ...
      preprocess: [
        require('svelte-windicss-preprocess').preprocess({
          config: 'windi.config.js', // windi config file path (optional)
          compile: true, // false: interpretation mode; true: compilation mode (optional)
          prefix: 'windi-', // set compilation mode style prefix
          safeList: ["bg-gray-600", "text-white"] // (optional)
        })
      ],
    }),
  ],
  // ...
};
```

### Snowpack Svelte

```js
// svelte.config.js
module.exports = {
  preprocess: [
    require('svelte-windicss-preprocess').preprocess({
      config: 'windi.config.js', // windi config file path (optional)
      compile: true, // false: interpretation mode; true: compilation mode (optional)
      prefix: 'windi-', // set compilation mode style prefix
      safeList: ["bg-gray-600", "text-white"] // (optional)
    })
  ],
};
```

### Setup VS Code Extension

If you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) you need to adapt your condfig.
Add `"svelte.plugin.css.diagnostics.enable": false` to your VS Code configuration file.

## Additional Features in Svelte  ⚡️

<kbd>[svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess)</kbd> also supports the following features:

### Variant Attributes

You can apply several utilities for the same variant by using HTML attributes.

```html
<div sm="bg-white font-bold" hover="bg-gray-200" dark="bg-gray-900"/>
```

::: tip Mixed Variants
Variants, such as `sm:hover`, are not supported inside attributes. Use [utility groups] instead.
:::
