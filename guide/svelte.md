[utility groups]: /guide/features.html#🎳-utility-groups
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[migration]: /guide/migration

# Using Windi CSS in Svelte

<kbd>[svelte-windicss-preprocess]</kbd> provides simple integration for Windi CSS in Svelte and Sapper.

> Now we have a great playground, you can [try it online](https://windicss.github.io/svelte-windicss-preprocess/) before installing it.

## Installation 💿

Add the package:

```sh
npm install svelte-windicss-preprocess --save-dev
```

::: tip Migrating
If migrating from Tailwind CSS, also check out the [_Migration_ section][migration]
:::

## Configuration ⚙️

Add <kbd>[svelte-windicss-preprocess]</kbd> to your Rollup or Webpack configuration.

If using:

### Vanilla Svelte

Add <kbd>[svelte-windicss-preprocess]</kbd> to your `rollup.config.js`.

> Typescript is **optional**. Include `sveltePreprocess.typescript()` into `preprocess` if you are using typescript in your Svelte component.

```js
// rollup.config.js
import sveltePreprocess from "svelte-preprocess";
// ...
export default {
  // ...
  plugins: [
    svelte({
      // svelte-windicss-preprocess
      preprocess: [
        sveltePreprocess.typescript(), // to support typescript (optional)
        require('svelte-windicss-preprocess').preprocess({
          config: 'tailwind.config.js', // tailwind config file path (optional)
          compile: true, // false: interpretation mode; true: compilation mode
          prefix: 'windi-', // set compilation mode style prefix
          globalPreflight: true, // set preflight style is global or scoped
          globalUtility: true, // set utility style is global or scoped
        })
      ],
      // ...
    }),
  ],
  // ...
};
```

### Sveltekit

Add the <kbd>[vite-plugin-windicss]</kbd> package:

```
npm install vite-plugin-windicss --save-dev
```

Then, add the plugin to your Vite configuration in `svelte.config.cjs`:

```js
// svelte.config.cjs
const node = require('@sveltejs/adapter-node');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    adapter: node(),

    target: '#svelte',

    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      },
      plugins: [
        require('vite-plugin-windicss').default()
      ]
    }
  }
};
```

And finally, import `windi.css` in your main layout:

```svelte
// src/routes/$layout.svelte
<script>
  import 'virtual:windi.css'
</script>

<slot></slot>
```

### Sapper(rollup)

Add <kbd>[svelte-windicss-preprocess]</kbd> to your `rollup.config.js`.

```js
// rollup.config.js
// ...
export default {
  // ...
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      // ...
      svelte({
        // svelte-windicss-preprocess
        preprocess: require('svelte-windicss-preprocess').preprocess({
          config: 'tailwind.config.js',     // tailwind config file path
          compile: true,                    // false: interpretation mode; true: compilation mode
          prefix: 'windi-',                 // set compilation mode style prefix
          globalPreflight: true,            // set preflight style is global or scoped
          globalUtility: true,              // set utility style is global or scoped
        }),
        compilerOptions: {
          // ...
        }
      }),
      // ...
    ]
  // ...
  }
  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      // ...
      svelte({
        // svelte-windicss-preprocess
        preprocess: require('svelte-windicss-preprocess').preprocess({
          config: 'tailwind.config.js',      // tailwind config file path
          compile: true,                     // false: interpretation mode; true: compilation mode
          prefix: 'windi-',                  // set compilation mode style prefix
          globalPreflight: true,             // set preflight style is global or scoped
          globalUtility: true,               // set utility style is global or scoped
        }),
        compilerOptions: {
          // ...
        },
      }),
      // ...
    ]
  }
  // ...
}
```

### Sapper(webpack)

Add <kbd>[svelte-windicss-preprocess]</kbd> to your `webpack.config.js`.

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
              // ... other options
              // svelte-windicss-preprocess
              preprocess: require('svelte-windicss-preprocess').preprocess({
                config: 'tailwind.config.js',    // tailwind config file path
                compile: true,                   // false: interpretation mode; true: compilation mode
                prefix: 'windi-',                // set compilation mode style prefix
                globalPreflight: true,           // set preflight style is global or scoped
                globalUtility: true,             // set utility style is global or scoped
              })
            }
          }
        },
        // ...
      ]
    },
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
              // ... other options
              // svelte-windicss-preprocess
              preprocess: require('svelte-windicss-preprocess').preprocess({
                config: 'tailwind.config.js',     // tailwind config file path
                compile: true,                    // false: interpretation mode; true: compilation mode
                prefix: 'windi-',                 // set compilation mode style prefix
                globalPreflight: true,            // set preflight style is global or scoped
                globalUtility: true,              // set utility style is global or scoped
              })
            }
          }
        },
        // ...
      ]
    },
  }
}
```

### Setup VSCode Extension

If you are using `Svelte for VS Code` vscode extension, I believe most people are using it. You will need to add `"vetur.validation.style": false` to your configuration file.

Hit `ctrl-shift-p` or `cmd-shift-p` on mac, type open settings, and select `Preferences: Open Settings (JSON)`. Add `"vetur.validation.style": false` to `settings.json` then save it.

Then you will need to tell svelte-vscode to **restart the svelte language server** in order to pick up a new configuration.

Hit `ctrl-shift-p` or `cmd-shift-p` on mac, type svelte restart, and select `Svelte: Restart Language Server`. Any errors you were seeing should now go away and you're now all set up!


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
