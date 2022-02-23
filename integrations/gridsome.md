<Logo name="gridsome" class="logo-float-xl"/>

# Integration for [Gridsome](https://gridsome.org/)

<PackageInfo name="gridsome-plugin-windicss" author="harlan-zw" />

## Install

```bash
yarn add gridsome-plugin-windicss -D
# npm i gridsome-plugin-windicss -D
```

:warning: This module is a pre-release, please report any [issues](https://github.com/windicss/gridsome-plugin-windicss/issues) you find.

## Usage

Within your `gridsome.config.js` add the following.

```js gridsome.config.js
export default {
  // ...
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      },
    },
  ],
}
```

This module won't work with `gridsome-plugin-tailwindcss`, you will need to remove it.

```diff
 plugins: [
    {
-      use: 'gridsome-plugin-tailwindcss',
-      options: {
-        // ...
-      }
    },
  ],
```

If you have a `tailwind.config.js`, please rename it to `windi.config.js` or `windi.config.ts`.

See [here](https://windicss.netlify.app/guide/configuration.html) for configuration details.


## Migrating

If you were previously using `gridsome-plugin-tailwindcss`, please consult the [documentation](https://windicss.netlify.app/guide/migration.html) on migrating.

## Configuration

- Default:
```js
export default {
  scan: {
    dirs: ['./'],
    exclude: [
      'node_modules',
      '.git',
      'dist',
      '.cache',
      '*.template.html',
      'app.html',
    ],
    include: [],
  },
  transformCSS: 'pre',
  preflight: {
    alias: {
      // add gridsome aliases
      'g-link': 'a',
      'g-image': 'img',
    },
  },
}
```

- See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

### Examples

#### Disable Preflight

_gridsome.config.js_
```js
export default {
  // ...
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        preflight: false,
      },
    },
  ],
}
```

## Caveats

### Scoped Style

`@media` directive with scoped style can **only work** with `css` `postcss` `scss` but not `sass`, `less` nor `stylus`
