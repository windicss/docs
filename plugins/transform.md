# Transform API

For tailwind plugins, we generally use Transform API to support them. You can import them to your config like below:

```js windi.config.js
const { transform } = require('windicss/helpers')

export default {
  theme: {
    // ...
  },
  plugins: [
    transform('plugin-name'), // replace require with transform
  ],
}
```

https://github.com/windicss/plugins
