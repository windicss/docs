<Logo name="webpack" class="logo-float-xl"/>

# Integration for [webpack](https://webpack.js.org/)

<PackageInfo name="windicss-webpack-plugin" author="harlan-zw" />

## Should I use this?

Windi CSS Webpack Plugin is a language and framework agnostic way to implement Windi CSS.

You should use this plugin if you're using webpack and your framework is **not** below.

| Language / Framework |   Example |
| :-------- | :----- |
| <Logo name="vue" class="inline"/> Vue CLI | [✅ Plugin](/integrations/vue-cli.html) |
| <Logo name="nuxt" class="inline"/> Nuxt.js | [✅ Plugin](/integrations/nuxt.html) |
| <Logo name="gridsome" class="inline"/> Gridsome | [✅ Plugin](/integrations/gridsome.html) |
| <Logo name="svelte" class="inline"/> Svelte | [✅ Plugin](/integrations/svelte.html) |
| Umi.js | [✅ Config Example](https://github.com/windicss/windicss-webpack-plugin/tree/master/example/umijs) |
| Next.js - webpack 4 | ✅ [Config Example](https://github.com/windicss/windicss-webpack-plugin/blob/master/example/next/next.config.js) |
| Next.js - webpack 5 | ❌ HMR not supported (help needed) |
| Angular | ❌ Not supported (help needed) |

## Install

```bash
yarn add windicss-webpack-plugin -D 
# npm i windicss-webpack-plugin -D
```

If you were previously using Tailwind, please see the [migration guide](/guide/migration.html).

### Add the plugin

You will need to add the plugin to your webpack configuration. If you have access to modify the webpack.config.js directly, then you can do the following.

```js
// webpack.config.js
import WindiCSS from 'windicss-webpack-plugin'

export default {
  // ...
  plugins: [
    new WindiCSS(),
  ],
}
```

Within an entry point file or something only loaded once, add the import of `windi.css`. 

:warn: For this, to work you need to be using a [style-loader](https://webpack.js.org/loaders/style-loader/#modules) with
modules off.

```ts
// main.js
import 'windi.css'
```

## Supports

### TypeScript

Enable TypeScript for your `windi.config.js`? Sure, why not?

Rename it to `windi.config.ts` and things just work!

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],
})
```

## Configuration

### Preflight (style resetting)

Preflight is enabled on-demanded. If you'd like to completely disable it, you can configure it as below

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
})
```

### Safelist

By default, we scan your source code statically and find all the usages of the utilities then generated corresponding CSS on-demand. However, there is some limitation that utilities that decided in the runtime can not be matched efficiently, for example

```html
<!-- will not be detected -->
<div className={`p-${size}`}>
```

For that, you will need to specify the possible combinations in the `safelist` options of `webpack.config.js`.

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

Or you can do it this way

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  safelist: [
    range(30).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
  ],
})
```

### Scanning

On server start, `windicss-webpack-plugin` will scan your source code and extract the utility usages. By default, only files under `src/` with extensions `vue, html, mdx, pug, jsx, tsx` will be included. If you want to enable scanning for other file types of locations, you can configure it via:

```ts
// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
```

Or in plugin options:

```ts
// webpack.config.js
import WindiCSS from 'windicss-webpack-plugin'

export default {
  // ...
  plugins: [
    new WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
  ],
}
```

### Layers Ordering

> Supported from v1.1.x

By default, importing `windi.css` or `virtual:windi.css` will import all the three layers with the order `base - components - utilities`. If you want to have better controls over the orders, you can separate them by:

```diff
- import 'virtual:windi.css'
+ import 'virtual:windi-base.css'
+ import 'virtual:windi-components.css'
+ import 'virtual:windi-utilities.css'
```

You can also make your custom css be able to be overridden by certain layers:

```diff
  import 'virtual:windi-base.css'
  import 'virtual:windi-components.css'
+ import './my-style.css'
  import 'virtual:windi-utilities.css'
```

## Configuration

See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

## Examples

See [examples](https://github.com/windicss/windicss-webpack-plugin/tree/master/example) for sample projects.
