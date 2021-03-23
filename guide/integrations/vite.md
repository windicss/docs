[speed comparison]: https://twitter.com/antfu7/status/1361398324587163648
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[CSS directives]: /guide/features/directives
[classes utilities]: /guide/features/utilities
[migration]: /guide/migration

# Integration for Vite

[vite-plugin-windicss]

## Features

- ⚡️ **It's FAST** - 20~100x times faster than Tailwind on Vite
- 🧩 On-demand CSS utilities
- 📦 On-demand native elements style reseting
- 🔥 Hot module replacement (HMR)
- 🍃 Load configurations from `tailwind.config.js`
- 🤝 Framework-agnostic - Vue, React, Svelte and vanilla!
- 📄 CSS `@apply` / `@screen` directives transforms (also works for Vue SFC's `<style>`)
- 🎳 Support Utility Groups - e.g. `bg-gray-200 hover:(bg-gray-100 text-red-300)`

> Check out the [speed comparison] between Windi CSS and Tailwind CSS on Vite.

## Installation

Add the package:

```bash
npm install vite-plugin-windicss --save-dev
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

## Example

See [`Vitesse`](https://github.com/antfu/vitesse) for an example.
