[auto]: /features/value-auto-infer
[design]: /posts/story

# Migrate from Tailwind CSS

## Packages 

Some of your dependencies are no longer required. You can remove them from your `package.json` if they were only needed for Tailwind CSS.

```diff package.json
- "tailwindcss": "*",
- "postcss": "*",
- "autoprefixer": "*",
+ "windicss": "*"
```

## Base Styles

You can now remove the Tailwind CSS imports from your CSS entry.

```diff
- @import 'tailwindcss/base';
- @import 'tailwindcss/components';
- @import 'tailwindcss/utilities';
```

(Optional) Based on the integration tools you are using, you might need to import the `virtual:windi.css` entry explicitly. Please check the docs of the tools for more details.

```js main.js
import 'virtual:windi.css'
```

## Configurations

Since all variants are [automatically enabled][auto], `variant` and `purge` fields are no longer needed.

`colors` and `plugins` need to be imported from `windicss` instead.

We are compatible with both `windi.config.js` and `tailwind.config.js`.

```diff windi.config.js
-const colors = require('tailwindcss/colors')
+const colors = require('windicss/colors')
-const typography = require('@tailwindcss/typography')
+const typography = require('windicss/plugin/typography')

export default {
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
+ extract: {
+   include: ['./**/*.html'],
+ },
+ safelist: ['prose', 'prose-sm', 'm-auto'],
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

## Cleanup (optional)

The following files can be removed if you don't use their other features.

```diff
- postcss.config.js
```
