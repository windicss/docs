# Integration for webpack

Plugin Source: [windicss-webpack-plugin](https://github.com/windicss/windicss-webpack-plugin)

## About

The webpack plugin aims to be a language and framework agnostic solution to implement Windi CSS.

⚠️ While it should work for most setups, some setups do have issues and more have not been tested. Caution should be used if you aren't using one of the passing solutions below.

| Language / Framework |   Example |
| :-------- | :----- |
| Vue 2 - Vue CLI | ✅ [vue.config.js](https://github.com/windicss/windicss-webpack-plugin/blob/master/example/vue2/vue.config.js) |
| Vue 2 - Nuxt | ⚠️ Use [Nuxt.js Module](https://github.com/windicss/nuxt-windicss-module) |
| Vue 3 - Vue CLI | ✅ [vue.config.js](https://github.com/windicss/windicss-webpack-plugin/blob/master/example/vue3/vue.config.js) |
| React - Next | ✅ [next.config.js](https://github.com/windicss/windicss-webpack-plugin/blob/master/example/next/next.config.js) |
| Svelte | ⚠️ Use [svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess) |
| Angular | ❌ style-loader misconfiguration |

## Installation

Add the package:

```bash
yarn add -D windicss-webpack-plugin 
# npm i -D windicss-webpack-plugin 
```

Then, if you have access to modify the webpack.config.js directly, then you would do the following.

```ts
// webpack.config.js
import WebpackWindiCSSPlugin from 'windicss-webpack-plugin'

export default {
  // ...
  plugins: [
    new WindiCSSWebpackPlugin([
      // options
    ]),
  ],
}
```

Within an entry point file or something only loaded once, add the import of `windi.css`. For this, to work you need to be using a [style-loader](https://webpack.js.org/loaders/style-loader/#modules) with
modules off.

```ts
// main.js
import 'windi.css'
```

## Configuration

The webpack plugin provides the same configuration API as the vite plugin.

See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.
