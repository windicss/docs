<Logo name="nuxt" class="logo-float-xl"/>

# Integration for [Nuxt.js](https://nuxtjs.org)

<PackageInfo name="nuxt-windicss" author="harlan-zw" />

## Install

```bash
yarn add nuxt-windicss -D
# npm i nuxt-windicss -D
```

## Usage

Within your `nuxt.config.js` add the following.

```js nuxt.config.js
export default {
  buildModules: [
    'nuxt-windicss',
  ],
}
```

### Nuxt 3

```js nuxt.config.js
import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
  ],
})
```

## Migrating from tailwind

This module won't work with `@nuxtjs/tailwindcss`, you will need to remove it.

```diff
buildModules: [
-  '@nuxtjs/tailwindcss',
],
```

If you have a `tailwind.config.js`, please rename it to `windi.config.js` or `windi.config.ts`.

Follow the [migration guide](https://windicss.org/guide/migration.html) for other change details.


## Configuration

### Preflight (style resetting)

Preflight is enabled on-demanded. If you'd like to completely disable it, you can configure it as below

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
})
```

### Safelist

By default, we scan your source code statically and find all the usages of the utilities then generate corresponding CSS on-demand. However, there is some limitation that utilities that decided in the runtime can not be matched efficiently, for example

```vue
<!-- will not be detected -->
<div :class="{ ['p-'+size]: true}">
```

For that, you will need to specify the possible combinations in the `safelist` options of `windi.config.js`.

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

Or you can do it this way

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  safelist: [
    range(30).map(i => `p-${i}`), // p-1 to p-30
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
  ],
})
```

### Scanning

On server start, `nuxt-windicss` will scan your source code and extract the utility usages. By default,
only files within your root with extensions `vue, html, md, mdx, pug, jsx, tsx` will be included. If you want to enable scanning for other file types of locations, you can configure it via:

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
```

Or in nuxt config:

```js nuxt.config.js
export default {
  // ...
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        'dist',
      ],
    },
  },
}
```

### Other Options

These are the default options for the nuxt module.

```js nuxt.config.js
export default {
  // ...
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        'dist',
        '.git',
        '.github',
        '.nuxt',
        // testing files & folders
        'coverage',
        '**/__snapshots__',
        '*.test.js',
      ],
    },
    preflight: {
      alias: {
        // add nuxt aliases
        'nuxt-link': 'a',
        // @nuxt/image module
        'nuxt-img': 'img',
      },
    },
  },
}
```

- See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

The nuxt module provides the same configuration API as the vite plugin.

### Examples

#### Scan classes from a node_modules package

Out-of-the-box this module ignores any files in node_modules, this is to simplify
the scanning for most users.

To opt-in to this scanning you will need to set the scan options yourself.

````js nuxt.config.js
export default {
  // ...
  hooks: {
    windicss: {
      options(options) {
        options.scanOptions.exclude = ['.git', '.github', '.nuxt/**/*']
        options.scanOptions.dirs = [
          './node_modules/vue-tailwind-color-picker/src',
          './components',
          './pages',
          './layouts',
        ]
        return options
      },
    },
  },
}
````

#### Transform @apply's from a node_modules package

If you need to load in a CSS file from a node_module folder and have the @apply's transformed,
then you will need to use the `extraTransformTargets` option.

```js nuxt.config.js
export default {
  // ...
  hooks: {
    windicss: {
      options(options) {
        const transformFiles = await fg(
          '**/*.{vue,css}',
          {
            cwd: join(options.rootDir, '/node_modules/some-vendor/dist'),
            onlyFiles: true,
            absolute: true,
          },
        )
        // make sure file @apply's get transformed
        windiOptions.scanOptions.extraTransformTargets = {
          css: transformFiles.filter((f: string) => f.endsWith('.css')),
          detect: transformFiles.filter((f: string) => f.endsWith('.vue')),
        }

        return options
      },
    },
  },
}
```

## Hooks

You can use the following nuxt hooks to modify the behavior of the code.

`windicss:config`
- Arguments: FullConfig

Modify the Windi CSS configuration before it is passed to the webpack plugin.

Useful for making runtime style changes.

`windicss:options`
- Arguments: options

Modify the Windi CSS options before they are passed to the webpack plugin.

Useful for adding runtime directories to the scan path.

`windicss:utils`
- Arguments: Windi CSS utils

Exposes the Windi CSS utils as an object. Use this to implement your own custom utilities without
creating duplicate util instances.
