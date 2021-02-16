[auto]: /guide/features.html#🤖-auto-inferred-variables-and-variants
[design]: /guide/modes

# Migrating to Windi CSS

While Windi CSS aims to be compatible with Tailwind CSS, there are some slight differences in configuration.

Some options are no longer necessary, because of its [design].

## From Tailwind CSS

If you are using Tailwind CSS with the PostCSS plugin, you can follow these instructions to migrate your installation.

### `package.json`

Some of your dependencies are no longer required, you can remove them if they were only needed for Tailwind CSS.

```diff
- "tailwindcss": "*",
- "postcss": "*",
- "autoprefixer": "*",
+ "windicss": "*"
```

### Base Styles

You can now remove the Tailwind CSS imports from your css entry.

```diff
- @import 'tailwindcss/base';
- @import 'tailwindcss/components';
- @import 'tailwindcss/utilities';
```

These are now handled automatically by Windi CSS.

### `tailwind.config.js`

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

### Cleanup (optional)

The following files can be removed if you don't use their other features.

```diff
- postcss.config.js
```
