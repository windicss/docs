[utility groups]: /guide/features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[migration]: /guide/migration

# Integration for Svelte

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
module.exports = {
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

```bash
# vite project installation & setup
npm init @vitejs/app --template svelte vite-svelte-windicss-app
cd vite-svelte-windicss-app
npm i -D svelte-windicss-preprocess
```

```ts
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

### Rollup Sapper (prefer [SvelteKit](https://next.windicss.org/guide/integrations/svelte-kit.html) once released)

```js
// rollup.config.js
export default {
  client: {
    // ...
    plugins: [
      // ...
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
      // ...
    ],
  },

  server: {
    // ...
    plugins: [
      // ...
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
      // ...
    ],
  },
}
```

### Webpack Sapper (prefer [SvelteKit](https://next.windicss.org/guide/integrations/svelte-kit.html) once released)

```js
// webpack.config.js
module.exports = {
  client: {
    // ...
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              // ...
              preprocess: [
                require('svelte-windicss-preprocess').preprocess({
                  config: 'windi.config.js', // windi config file path (optional)
                  compile: true, // false: interpretation mode; true: compilation mode (optional)
                  prefix: 'windi-', // set compilation mode style prefix
                  safeList: ['bg-gray-600', 'text-white'], // (optional)
                }),
              ],
            },
          },
        },
        // ...
      ],
    },
    // ...
  },

  server: {
    // ...
    module: {
      rules: [
        {
          test: /\.(svelte|html)$/,
          use: {
            loader: 'svelte-loader',
            options: {
              // ...
              preprocess: [
                require('svelte-windicss-preprocess').preprocess({
                  config: 'windi.config.js', // windi config file path (optional)
                  compile: true, // false: interpretation mode; true: compilation mode (optional)
                  prefix: 'windi-', // set compilation mode style prefix
                  safeList: ['bg-gray-600', 'text-white'], // (optional)
                }),
              ],
            },
          },
        },
      // ...
      ],
    },
    // ...
  },
}

```

### Setup VS Code Extension

If you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) you need to adapt your condfig.
Add `"svelte.plugin.css.diagnostics.enable": false` to your VS Code configuration file.

## Additional Features in Svelte  ⚡️

<kbd>[svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess)</kbd> also supports the following features:

### Variant Attributes

You can apply several utilities for the same variant by using HTML attributes.

```html
<div w:sm="bg-white font-bold" w:hover="bg-gray-200" w:dark="bg-gray-900"/>
```

::: tip Mixed Variants
Variants, such as `sm:hover`, are not supported inside attributes. Use [utility groups] instead.
:::
