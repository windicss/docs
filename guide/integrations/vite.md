[video comparison]: https://twitter.com/antfu7/status/1361398324587163648
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[migration]: /guide/migration

# Vite Integration

<kbd>[vite-plugin-windicss]</kbd> provides simple integration for Windi CSS in Vite.

Check this [video comparison] with the PostCSS plugin for Tailwind CSS.

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

And finally, import `windi.css` in your Vite entries:

```js
// main.js
import 'virtual:windi.css'
```

That's it! Build your app as you would do with Tailwind CSS, but with a faster dev experience! ⚡️

::: tip Migrating
If migrating from Tailwind CSS, also check out the [_Migration_ section][migration]
:::

## Configuration

Check [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/src/box/options.ts#L9-L103) for configuration reference specific to <kbd>[vite-plugin-windicss]</kbd>.

See [./example](./example) or [`Vitesse`](https://github.com/antfu/vitesse/tree/feat/windicss) for an example.
