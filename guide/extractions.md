# Extractions

Windi CSS relying on **statical scanning and extractions** to your source files and find your utilities usages and generate them for you on-demand. Similar to [Tailwind's Purge limitation](https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html), you will need to use statical full names of utilities for Windi CSS to detect and generate correctly. For example:

String concatenations can NOT be extracted statically

```html
<div class="text-${ active ? 'green' : 'orange' }-400"></div>
```

Use the full names of utilities instead

```html
<div class="${ active ? 'text-green-400' : 'text-orange-400' }"></div>
```

## Safelist

When you have to use dynamic concatenations, like:

```html
<div class="p-${size}"></div>
```

For that, you will need to specify the possible combinations in the `safelist` options of `windi.config.js`.

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

Or to be more fixable:

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

On dev server/build process started, Windi CSS will scan your source code and extract the utilities usages. 
By default, it will scan for files under `src/` with extensions `vue, html, mdx, pug, jsx, tsx`.

If you want to enable scaning for other file type of locations, you can configure it via:

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

Preflight (style reseting) is also enables on-demanded along with the scanning.

To completely disable it, you can change the configurations as below

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
})
```

Or explicitly enables with safelisting

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: {
    safelist: 'h1 h2 h3 p img',
  },
})
```

