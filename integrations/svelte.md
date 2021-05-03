[utility groups]: /features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[migration]: /guide/migration

<Logo name="svelte" class="logo-float-xl"/>

# Integration for [Svelte](https://svelte.dev/)

<PackageInfo name="svelte-windicss-preprocess" author="alexanderniebuhr" />

## Installation

Add the package:

```bash
npm i -D svelte-windicss-preprocess
```

> If migrating from Tailwind CSS, also check out the [_Migration_ section][migration]

### Setup VS Code Extension

If you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) you need to adapt your condfig.

Add `"svelte.plugin.css.diagnostics.enable": false` to your VS Code configuration file.

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
          safeList: ['bg-gray-600', 'text-white'], // (optional)
        }),
      ],
    }),
  ],
  // ...
}
```

### Snowpack Svelte

```js
// svelte.config.js
export default {
  preprocess: [
    require('svelte-windicss-preprocess').preprocess({
      config: 'windi.config.js', // windi config file path (optional)
      compile: true, // false: interpretation mode; true: compilation mode (optional)
      prefix: 'windi-', // set compilation mode style prefix
      safeList: ['bg-gray-600', 'text-white'], // (optional)
    }),
  ],
}
```

### Vite Svelte

::: tip Vite
For Vite setups, we do suggest to use [Vite plugin](/integrations/vite). However, if you need any special features or your setup requires windicss to run as a preprocessor, you can setup it as below.
:::

```sh
# vite project installation & setup
npm init @vitejs/app --template svelte vite-svelte-windicss-app
cd vite-svelte-windicss-app
npm i -D svelte-windicss-preprocess
```

```js
// vite.config.js
export default defineConfig(({ command, mode }) => {
  const production = mode === 'production'
  return {
    plugins: [
      svelte({
        preprocess: [
          require('svelte-windicss-preprocess').preprocess({
            compile: false, // false: interpretation mode; true: compilation mode (optional)
            prefix: 'windi-', // set compilation mode style prefix
            mode: production ? 'prod' : 'dev',
            // config: "windi.config.js", // (optional)
            // safeList: ['bg-gray-600', 'text-white'], // (optional)
          }),
        ],
        emitCss: true,
        hot: !production,
      }),
    ],
  }
})
```

## Additional Features in Svelte  ⚡️

<kbd>[svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess)</kbd> also supports the following features:

### Variant Attributes
> gets replaced with **v4** release of svelte-windicss-preprocess

You can apply several utilities for the same variant by using HTML attributes.

```html
<div w:sm="bg-white font-bold" w:hover="bg-gray-200" w:dark="bg-gray-900"/>
```

::: tip Mixed Variants
Variants, such as `sm:hover`, are not supported inside attributes. Use [utility groups] instead.
:::
