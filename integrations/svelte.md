[utility groups]: /features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[vite]: /integrations/vite
[migration]: /guide/migration

<Logo name="svelte" class="logo-float-xl"/>

# Integration for [Svelte](https://svelte.dev/)

<PackageInfo name="svelte-windicss-preprocess" author="alexanderniebuhr" />

## Setup

> If migrating from Tailwind CSS, also check out the [_Migration_ section][migration]

### Svelte

```sh
npx degit sveltejs/template svelte-project
```
```sh
npm i -D svelte-windicss-preprocess
```

```diff
  import svelte from 'rollup-plugin-svelte';
  import commonjs from '@rollup/plugin-commonjs';
  import resolve from '@rollup/plugin-node-resolve';
  import livereload from 'rollup-plugin-livereload';
  import { terser } from 'rollup-plugin-terser';
  import css from 'rollup-plugin-css-only';
+ import { windi } from 'svelte-windicss-preprocess';

  const production = !process.env.ROLLUP_WATCH;

  function serve() {
    let server;

    function toExit() {
      if (server) server.kill(0);
    }

    return {
      writeBundle() {
        if (server) return;
        server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });

        process.on('SIGTERM', toExit);
        process.on('exit', toExit);
      }
    };
  }

  export default {
    input: 'src/main.js',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js'
    },
    plugins: [
      svelte({
+       preprocess: [
+         windi({}),
+       ],
        compilerOptions: {
          // enable run-time checks when not in production
          dev: !production
        }
      }),
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css({ output: 'bundle.css' }),

      // If you have external dependencies installed from
      // npm, you'll most likely need these plugins. In
      // some cases you'll need additional configuration -
      // consult the documentation for details:
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),

      // In dev mode, call `npm run start` once
      // the bundle has been generated
      !production && serve(),

      // Watch the `public` directory and refresh the
      // browser on changes when not in production
      !production && livereload('public'),

      // If we're building for production (npm run build
      // instead of npm run dev), minify
      production && terser()
    ],
    watch: {
      clearScreen: false
    }
  };
```
```diff
- ./public/global.css
```
```diff
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width,initial-scale=1'>

    <title>Svelte app</title>

    <link rel='icon' type='image/png' href='/favicon.png'>
-   <link rel='stylesheet' href='/global.css'>
    <link rel='stylesheet' href='/build/bundle.css'>

    <script defer src='/build/bundle.js'></script>
  </head>

  <body>
  </body>

  </html>
```
```diff
  <script>
    export let name;
  </script>

  <main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </main>

+ <style windi:preflights:global windi:safelist:global>
+ </style>
- <style>
-   main {
-     text-align: center;
-     padding: 1em;
-     max-width: 240px;
-     margin: 0 auto;
-   }
-
-   h1 {
-     color: #ff3e00;
-     text-transform: uppercase;
-     font-size: 4em;
-     font-weight: 100;
-   }
-
-   @media (min-width: 640px) {
-    main {
-       max-width: none;
-     }
-   }
- </style>
```

### SvelteKit (as of 1.0.0-next.100)

SvelteKit uses vite as a bundler, therefore we suggest to use our vite plugin (no need to install `svelte-windicss-preprocess`).

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

### Setup VS Code Extension

If you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) you need to adapt your config.

Add `"svelte.plugin.css.diagnostics.enable": false` to your VS Code configuration file.

## Additional Features in Svelte  ⚡️

<kbd>[svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess)</kbd> also supports the following features:

### Variant Attributes
> gets replaced with **v4** release of svelte-windicss-preprocess

You can apply several utilities for the same variant by using HTML attributes.

```html
<div w:sm="bg-white font-bold" w:hover="bg-gray-200" w:dark="bg-gray-900"/>
```

::: tip Mixed Variants
Variants, such as `sm:hover`, are not supported inside attributes. Use [utility groups] instead.
:::

