[auto]: /utilities/auto

# Migrating to Windi CSS

If you are already using Tailwind CSS for your Vite app, you can follow these instructions to migrate your installation.

## `package.json`

Some of your dependencies are no longer required, you can remove them if they were only needed for Tailwind CSS.

```diff
- "tailwindccs": "*",
- "postcss": "*",
- "autoprefixer": "*",
+ "windicss": "*"
```

## Base Styles

You can now remove the Tailwind CSS imports from your css entry.

```diff
- @import 'tailwindcss/base';
- @import 'tailwindcss/components';
- @import 'tailwindcss/utilities';
```

These are now handled automatically by Windi CSS.

## `tailwind.config.js`

Since all variants are [automatically enabled][auto], `purge` is no longer needed.

`colors` and `plugins` imports need to be renamed to `windicss` instead.

```diff
-const colors = require('tailwindcss/colors')
+const colors = require('windicss/colors')
-const typography = require('@tailwindcss/typography')
+const typography = require('windicss/plugin/typography')

module.exports = {
- purge: {
-   content: [
-     './**/*.html',
-   ],
-   options: {
-     safelist: ['prose', 'prose-sm', 'm-auto'],
-   },
- },
- variants: {
-   extend: {
-     cursor: ['disabled'],
-   }
- },
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    }
  },
}
```

## `vite.config.js`

Add this plugin into your configuration.

```ts
// vite.config.js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    /* ... */
    ...WindiCSS({
      safelist: 'prose prose-sm m-auto'
    })
  ],
};
```

## Cleanup (optional)

The following files can be removed if you don't use their other features.

```diff
- postcss.config.js
```
