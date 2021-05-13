[utility groups]: /features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[vite]: /integrations/vite
[vite sveltekit guide]: /integrations/vite#sveltekit-as-of-1-0-0-next-100
[migration]: /guide/migration

<Logo name="svelte" class="logo-float-xl"/>

# Integration for [Svelte](https://svelte.dev/)

<PackageInfo name="svelte-windicss-preprocess" author="alexanderniebuhr" />



Our Svelte integration uses the Svelte Preprocessor API, therefore runs before compilation step. This brings some limitations for dynamic changed classes.

## Documentation

### Options

```js
import { windi } from 'svelte-windicss-preprocess'
// ...
windi({
  silent?: boolean, // default: false
  mode?: 'development' | 'production', // default: process.env.NODE_ENV
  configPath?: string, // no default
  disableFormat?: boolean, // default: false
  useDevTools?: {
    enabled?: boolean, // default: false
  },
})
```

### Setup VS Code Extension

If you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) you need to adapt your config.

Add `"svelte.plugin.css.diagnostics.enable": false` to your VS Code configuration file.

## Setup Guides

Here are two guides for Svelte and Sveltekit using the template provided by them.

### Svelte

get started template and install package from npm
```sh
npx degit sveltejs/template svelte-project
npm i -D svelte-windicss-preprocess
```

remove not needed global css file to prevent style breaks
```diff
- ./public/global.css
```

remove styleheet link in `index.html`
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

add [svelte-windicss-preprocess] config to `rollup.config.js`
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

update `App.svelte`
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

### Sveltekit

> Sveltekit uses [vite] as an bundler, there is an suggested alternative integration using our [vite sveltekit guide]

get started template and install package from npm
```sh
npm init svelte@next sveltekit-project
npm i -D svelte-windicss-preprocess
```
add [svelte-windicss-preprocess] config to `svelte.config.js`
```diff
+ import { windi } from "svelte-windicss-preprocess";
  /** @type {import('@sveltejs/kit').Config} */
  const config = {
+	preprocess: [
+		windi({})
+	],
    kit: {
      // hydrate the <div id="svelte"> element in src/app.html
      target: '#svelte'
    }
  };

export default config;
```
add layout file
```diff
+ ./src/routes/__layout.svelte
```
```diff
+ <nav>
+   <a href=".">Home</a>
+   <a href="about">About</a>
+   <a href="settings">Settings</a>
+ </nav>

+ <slot></slot>
+ <style windi:preflights:global windi:safelist:gobal>
+ </style>
```
