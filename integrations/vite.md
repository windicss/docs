[speed comparison]: https://twitter.com/antfu7/status/1361398324587163648
[CSS directives]: /features/directives
[classes utilities]: /utilities/
[migration]: /guide/migration

<Logo name="vite" class="logo-float-xl"/>

# Integration for [Vite](https://vitejs.dev)

<PackageInfo name="vite-plugin-windicss" author="antfu" />

## Features

- ⚡️ **It's FAST** - 20~100x times faster than Tailwind on Vite
- 🧩 On-demand CSS utilities (Fully compatible with Tailwind CSS v2)
- 📦 On-demand native elements style resetting (preflight)
- 🔥 Hot module replacement (HMR)
- 🍃 Load configurations from `tailwind.config.js`
- 🤝 Framework-agnostic - Vue, React, Svelte and vanilla!
- 📄 CSS `@apply` / `@screen` directives transforms (also works for Vue SFC's `<style>`)
- 🎳 Support Variant Groups - e.g. `bg-gray-200 hover:(bg-gray-100 text-red-300)`
- 😎 ["Design in Devtools"](#design-in-devtools) - if you work this way in the traditional Tailwind, no reason we can't!

> Check out the [speed comparison] between Windi CSS and Tailwind CSS on Vite.

## Install

Install the package:

```bash
npm i -D vite-plugin-windicss windicss
```

Then, install the plugin in your Vite configuration:

```ts
// vite.config.js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

And finally, import `virtual:windi.css` in your Vite entries:

```js
// main.js
import 'virtual:windi.css'
```

That's it! Starting using [classes utilities] or [CSS directives] in your app, and enjoy the speed! ⚡️

> If you are migrating from Tailwind CSS, also check out the [_Migration_ section][migration]

## Supports

### TypeScript

Enable TypeScript for your `tailwind.config.js`? Sure, why not?

Rename it to `tailwind.config.ts` and things just work!

```ts
// tailwind.config.ts
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

### Pug Support

It will automatically enable Pug support for `.pug` and Vue SFC when dependency `pug` is found in the workspace.

### "Design in DevTools"

It might be a common practice when you use the purge-based Tailwind where you have all the classes in your browser and you can try how things work by directly changing the classes in DevTools. While you might think this is some kind of limitation of "on-demand" where the DevTools don't know those you haven't used in your source code yet.

But unfortunately, **we are here to BREAK the limitation** 😎 See the [video demo](https://twitter.com/antfu7/status/1372244287975387145).

Just add the following line to your main entry

```js
import 'virtual:windi-devtools'
```

It will be enabled automatically for you, have fun!

Oh, and don't worry about the final bundle, in production build `virtual:windi-devtools` will be an empty module and you don't have to do anything about it :)

> ⚠️ Please use it with caution, under the hood we use [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) to detect the class changes. Which means not only your manual changes but also the changes made by your scripts will be detected and included in the stylesheet. This could cause some misalignment between dev and the production build when **using dynamically constructed classes** (false-positive). We recommended adding your dynamic parts to the `safelist` or setup UI regression tests for your production build if possible.

## Configuration

### Preflight (style reseting)

Preflight is enabled on-demanded. If you'd like to completely disable it, you can configure it as below

```ts
// windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

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

For that, you will need to specify the possible combinations in the `safelist` options of `vite.config.js`.

```ts
// windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

Or you can do it this way

```ts
// windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

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

On server start, `vite-plugin-windicss` will scan your source code and extract the utility usages. By default,
only files under `src/` with extensions `vue, html, mdx, pug, jsx, tsx` will be included. If you want to enable scanning for other file types of locations, you can configure it via:

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
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
  ],
})
```

### Layers Ordering

> Supported from v0.14.x

By default, importing `virtual:windi.css` will import all the three layers with the order `base - components - utilities`. If you want to have better controls over the orders, you can separate them by:

```diff
- import 'virtual:windi.css'
+ import 'virtual:windi-base.css'
+ import 'virtual:windi-components.css'
+ import 'virtual:windi-utilities.css'
```

You can also make your custom css been able to be overridden by certain layers:

```diff
  import 'virtual:windi-base.css'
  import 'virtual:windi-components.css'
+ import './my-style.css'
  import 'virtual:windi-utilities.css'
```

### More

See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for more configuration reference.

## Caveats

### Scoped Style

You will need to **set `transformCSS: 'pre'` to get Scoped Style work**.

`@media` directive with scoped style can **only works** with `css` `postcss` `scss` but not `sass`, `less` nor `stylus`

## Example

See [examples](https://github.com/windicss/vite-plugin-windicss/blob/main/examples) for *react*, *vue* and *vue with pug* sample projects, or [`Vitesse`](https://github.com/antfu/vitesse)

---

## SvelteKit (as of 1.0.0-next.100)

Install plugin with `npm i -D vite-plugin-windicss` and adapt the svelte config:

```js
// svelte.config.js
import preprocess from 'svelte-preprocess'
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    target: '#svelte',
    vite: () => ({
      plugins: [
        WindiCSS.default(),
      ],
    }),
  },
}
export default config
```

Add `import "virtual:windi.css"` to the top of your $layout.svelte file:

```html
<!-- $layout.svelte -->
<script>
  import "virtual:windi.css"

  // if you want to enable windi devtools
  import { browser } from "$app/env";
  if (browser) import("virtual:windi-devtools")
  // ...
</script>
<!-- ...rest of $layout.svelte -->
```
