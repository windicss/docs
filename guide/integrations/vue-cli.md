[migration]: /guide/migration
[vue-windicss-preprocess]: https://github.com/windicss/vue-windicss-preprocess

# Integration for Vue (Webpack)

> TODO: rewrite, depreacted?

> If you are using Vite.js, check [this page instead](/guide/integrations/vite).
> If you are using Nuxt.js, check [this page instead](/guide/integrations/nuxt).

<kbd>[vue-windicss-preprocess]</kbd> is a Vue loader for Windi CSS.

## Installation

Install the package:

```bash
npm install vue-windicss-preprocess --save-dev
```

> If your are migrating from Tailwind CSS, also check out the [_Migration_ guide][migration]

## Configuration 

### Vue CLI

Add the loader to your Webpack configuration:

```js
// vue.config.js
module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.vue$/,
      use: [{
        loader: 'vue-windicss-preprocess',
        options: {
          config: 'windi.config.js', // windi config file path (optional)
          compile: false, // false: interpretation mode; true: compilation mode
          globalPreflight: true, // set preflight style is global or scoped
          globalUtility: true, // set utility style is global or scoped
          prefix: 'windi-', // set compilation mode style prefix
        },
      }],
    })
  },
}
```

### Vanilla Webpack

Add the loader to your Webpack configuration:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      // ... other rules omitted
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-windicss-preprocess',
          options: {
            config: 'windi.config.js', // windi config file path (optional)
            compile: false, // false: interpretation mode; true: compilation mode
            globalPreflight: true, // set preflight style is global or scoped
            globalUtility: true, // set utility style is global or scoped
            prefix: 'windi-', // set compilation mode style prefix
          },
        }],
      },
    ],
  },
  // plugin omitted
}
```

### Vetur in VSCode

Add `"vetur.validation.style": false` to your configuration file.

Hit `ctrl-shift-p` or `cmd-shift-p` on mac, type open settings, and select `Preferences: Open Settings (JSON)`. Add `"vetur.validation.style": false` to `settings.json` then save it.
