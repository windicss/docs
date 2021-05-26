[utility groups]: /features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[vite]: /integrations/vite
[Vite SvelteKit guide]: /integrations/vite#sveltekit-as-of-1-0-0-next-100
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

### Custom pre-processing information

With v4 we introduced a new feature set of custom attributes for svelte style tags, to make integration regardless the setup easy and straight forward.
Non scoped styles will be handled in svelte according to their docs with `:global()` for classes and `-global-` for keyframes.

### Preflights

Svelte nature is to scope CSS style and remove unused styles, this can lead to issues if you add preflights into the layout wrapper and want that styles to be available on all other `.svelte` files as well. On the other hand, if you compile to custom-elements you cannot use `:global()` styles.
To allow the user to decide where to put the preflights as well deciding if they should be global or scoped, we have following syntax:

```html
<!-- Layout.svelte -->
<script>
</script>

<slot />

<!-- use this for scoped preflights -->
<style windi:preflights>
</style>

<!-- use this for global preflights -->
<style windi:preflights:global>
</style>
```

### Safe list

Sometimes you want to have dynamic classes based on some logic in script tags. Since [svelte-windicss-preprocess] runs before the svelte compile step, there is no way it could know this dynamic values. There are many approaches to this, either use windi at runtime or using a bundler setup instead this preprocessor one, or if you know all possible classes in the beginning add them to a safe list.

Similar to preflights, this safe list need to be available anywhere you want it, and also scoped and global.

```html
<!-- Layout.svelte -->
<script>
  let shade = 100;
</script>

<div class="bg-red-{shade}">
  I am dynamic!
</div>

<!-- use this for scoped safelist classes -->
<style windi:safelist>
</style>

<!-- use this for global safelist classes -->
<style windi:safelist:global>
</style>
```
### Windi CSS classes

By default, all inline used classes of Windi CSS will be scoped with native svelte logic. This has its advantages (you can find many discussions online).
However, using a utility based CSS framework there is not much need to make sure classes do not override, since e.g. `bg-gray-600` will always have the same CSS code behind it, regardless which `.svelte` file it is used.
You might want to safe more file size and using Windi CSS classes not scoped, but might want to choose this file by file.

To make all Windi CSS classes in one `.svelte` global, with help of `:global()` you can modify / add the following style tag.

```html
<style windi:global>
</style>
```

### Custom styles

You may have the need in your project to define custom CSS classes, and want to decide seperate to Windi CSS if they are scoped or global. You can with the following syntax:

```html
  <!-- all styles with :global() -->
  <style global>
    .btn {
      background: green;
    }
  </style>

  <!-- selective or all scoped -->
  <style>
    :global(.btn) {
      background: green;
    }
    .btnTwo {
      background: red;
    }
  </style>
```

You can combine any of this attributes, so full style tag can look like:
```html
  <style global windi:global windi:preflights:global windi:safelist:global>
    .custom{
      background: black;
    }
  </style>
```

### VS Code Extension
Using special CSS tag syntax as well as the attributes above, will break the CSS diagnostics of VS Code. Please make sure to disable them.
If you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode), add this setting to your VS Code configuration file.

```json
{
  "svelte.plugin.css.diagnostics.enable": false
}
```

## Setup Guides

Here are two guides for Svelte and SvelteKit using their starter template.

### Svelte

get started template and install package from NPM

```bash
npx degit sveltejs/template svelte-project
npm i -D svelte-windicss-preprocess
```

remove not needed global CSS files to prevent style breaks

```diff
- ./public/global.css
```

remove stylesheet link in `index.html`

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

### SvelteKit

> If you are using [Vite] as an bundler, check out [Vite SvelteKit guide]

get started template and install package from npm

```bash
npm init svelte@next sveltekit-project
npm i -D svelte-windicss-preprocess
```

add [svelte-windicss-preprocess] config to `svelte.config.js`

```diff
+ import { windi } from "svelte-windicss-preprocess";
  /** @type {import('@sveltejs/kit').Config} */
  const config = {
+   preprocess: [
+     windi({})
+   ],
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
+ <style windi:preflights:global windi:safelist:global>
+ </style>
```
