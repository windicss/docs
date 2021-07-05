<Logo name="vue" class="logo-float-xl"/>

# Integration for [Vue CLI](https://cli.vuejs.org)

<PackageInfo name="vue-cli-plugin-windicss" author="harlan-zw" />

## Features

- ⚡️ **It's FAST** - 20~100x times faster than [vue-cli-plugin-tailwind](https://github.com/forsartis/vue-cli-plugin-tailwind)
- 🧩 On-demand CSS utilities (Compatible with Tailwind CSS v2) and native elements style resetting
- 🍃 Load configurations from `tailwind.config.js`
- 📄 CSS `@apply` / `@screen` directives transforms
- 🎳 Support Utility Groups - e.g. `bg-gray-200 hover:(bg-gray-100 text-red-300)`

## Setup

Install using Vue CLI. (Vue CLI 4+ is recommended)

```bash
vue add windicss
```

:warning: This module is a pre-release, please report any [issues](https://github.com/windicss/vue-cli-plugin-windicss/issues) you find.

## Configuration

You can change the behaviour of the plugin by modifying the options in `./vue.config.js`.

```js vue.config.js
module.exports = {
  pluginOptions: {
    windicss: {
      // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
}
```

If you have a `tailwind.config.js`, please rename it to `windi.config.js` or `windi.config.ts`.

See [here](https://windicss.netlify.app/guide/configuration.html) for configuration details.


## Migrating

If you were previously using `vue-cli-plugin-tailwind`, please consult the [documentation](https://windicss.netlify.app/guide/migration.html) on migrating.

```bash
yarn remove vue-cli-plugin-tailwind
```

## Configuration

- Default:

```js
export default {
  scan: {
    dirs: ['src'],
    exclude: [
      'node_modules',
      '.git',
      'public/**/*',
      '*.template.html',
      'index.html',
    ],
    include: [],
  },
  transformCSS: 'pre',
}
```  

- See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

### Examples

#### Disable Preflight

_ngridsome.config.js_

```js
module.exports = {
  // ...
  pluginOptions: {
    windicss: {
      preflight: false,
    },
  },
}
```

## Caveats

### Scoped Style

`@media` directive with scoped style can **only work** with `css` `postcss` `scss` but not `sass`, `less` nor `stylus`
