# Extractions

Windi CSS relies on **static scanning and extractions** on your source files to find your utility usages and generate the equivalent CSS on-demand. Similar to [Tailwind's Purge limitation](https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html), you will need to use the static full names of utilities for Windi CSS to detect them correctly. For instance,

String concatenations CANNOT be extracted statically:

```html
<div class="text-${ active ? 'green' : 'orange' }-400"></div>
```

Use the full names of utilities instead:

```html
<div class="${ active ? 'text-green-400' : 'text-orange-400' }"></div>
```

## Safelist

Sometimes you'll have to use dynamic concatenations:

```html
<div class="p-${size}"></div>
```

For that, you will need to specify the possible combinations in the `safelist` option of `windi.config.js`.

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

Or to be more flexible:

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  safelist: [
    range(3).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
  ],
})
```

## Scanning

When the dev-server/build process starts, Windi CSS will scan your source code and extract utility usages. 
By default, it will scan files under `src/` with extensions `vue, html, mdx, pug, jsx, tsx`.

If you want to enable/disable scanning for other file-types or locations, you can configure it using `include` and `exclude` options:

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
})
```

### Preflight

Preflight (style resetting) is also enabled on-demand with scanning.

You can disable it completely in the configuration:

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
})
```

Or explicitly enable it with safelisting:

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: {
    safelist: 'h1 h2 h3 p img',
  },
})
```

