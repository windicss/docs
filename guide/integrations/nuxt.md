# Integration for Nuxt.js

[nuxt-windicss-module](https://github.com/windicss/nuxt-windicss-module)

## Installation

Add the package:

```bash
yarn add nuxt-windicss -D
# npm i nuxt-windicss -D
```

Then within your `nuxt.config.js` add the following:

```js
// nuxt.config.js
export default {
  // ...
  buildModules: [
    'nuxt-windicss',
  ],
}
```

⚠️ This module won't work with `@nuxtjs/tailwindcss`, you will need to remove it.

```diff
buildModules: [
-  '@nuxtjs/tailwindcss',
],
```

This module will read from your root `tailwind.config.js` or `windi.config.js` config if present. See [here](https://windicss.netlify.app/guide/configuration.html) for details.


## Migrating

If you were previously using `@nuxtjs/tailwindcss`, please consult the [documentation](https://windicss.netlify.app/guide/migration.html) on migrating.

## Configuration

- Default:
```js
export default {
  // ...
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        '.nuxt/**/*',
        '*.template.html',
        // Any classes added in app.html (that have not previously been referenced) will need to be added to the safelist
        'app.html',
      ],
    },
    transformCSS: 'pre',
    preflight: {
      alias: {
        // add nuxt aliases
        'nuxt-link': 'a',
      },
    },
  },
}
```  

- See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

The nuxt module provides the same configuration API as the vite plugin.

### Examples

#### Disable Preflight

_nuxt.config.js_
```js
export default {
  // ...
  windicss: {
    preflight: false,
  },
}
```

## Hooks

You can use the following nuxt hooks to modify the behaviour of the code.

`windicss:config`
- Arguments: options

Modify the windicss configuration before it is passed to the webpack plugin.
