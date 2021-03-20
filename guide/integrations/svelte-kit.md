# Integration for Svelte Kit



## Preprocessor Way

```js
// svelte.config.js
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: '@sveltejs/adapter-node',

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
  preprocess: [
    require('svelte-windicss-preprocess').preprocess({
      config: 'windi.config.js', // windi config file path (optional)
      compile: true, // false: interpretation mode; true: compilation mode (optional)
      prefix: 'windi-', // set compilation mode style prefix
      safeList: ['bg-gray-600', 'text-white'], // (optional)
    }),
  ],
}

```

## Vite Plugin Way

> TODO: