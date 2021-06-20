<Logo name="rollup" class="logo-float-xl"/>

# Integration for [Rollup](https://rollupjs.org)

<PackageInfo
  name="rollup-plugin-windicss"
  repo="vite-plugin-windicss/tree/main/packages/rollup-plugin-windicss"
  author="antfu"
/>

## Installations

```bash
npm i rollup-plugin-windicss -D # yarn add rollup-plugin-windicss -D
```

```ts
// rollup.config.js
import WindiCSS from 'rollup-plugin-windicss'

export default {
  plugins: [
    ...WindiCSS(),
  ],
}
```

```ts
// your code entry
import 'virtual:windi.css'
```

That's all.


## Configuration

### Preflight (style reseting)

Preflight is enables on demanded, if you'd like to completely disable it, you can configure it as below

```js
// rollup.config.js
export default {
  plugins: [
    WindiCSS({
      preflight: false,
    }),
  ],
}
```

### Safelist

By default, we scan your source code statically and find all the usages of the utilities then generated corresponding CSS on-demand. However, there is some limitation that utilities that decided in the runtime can not be matched efficiently, for example

```html
<!-- will not be detected -->
<div className={`p-${size}`}>
```

For that, you will need to specify the possible combinations in the `safelist` options of `vite.config.js`.

```js
// rollup.config.js
export default {
  plugins: [
    WindiCSS({
      safelist: 'p-1 p-2 p-3 p-4',
    }),
  ],
}
```

Or you can do it this way

```js
function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

// rollup.config.js
export default {
  plugins: [
    WindiCSS({
      safelist: [
        range(30).map(i => `p-${i}`), // p-1 to p-3
        range(10).map(i => `mt-${i}`), // mt-1 to mt-10
      ],
    }),
  ],
}
```

### Scanning

On server start, `vite-plugin-windicss` will scan your source code and extract the utilities usages. By default, only files under `src/` with extensions `vue, html, mdx, pug, jsx, tsx` will be included. If you want to enable scaning for other file type of locations, you can configure it via:

```js
// rollup.config.js
export default {
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
  ],
}
```

### More

See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for more configuration reference.
