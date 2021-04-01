<Logo name="postcss" class="logo-float-xl"/>

# Integration for [PostCSS](https://postcss.org/)

<PackageInfo name="postcss-windicss" author="antfu" />

> 🧪 Expiremental.

> ⚠️ Using this package is **discouraged** as there are some limitations of PostCSS's API. Use our [first-class integrations](https://next.windicss.org/guide/installation.html) for each dedicated framework/build tool to get **the best develop experience and performance**. This plugin should be your last option to integrate Windi CSS.

## Install

Install `postcss-windicss` from NPM

```bash
npm i -D postcss-windicss
```

Create `postcss.config.js` under your project root

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-windicss': { /* ... */ },
  },
}
```

Add `@windicss` to your main css entry:

```css
/* main.css */
@windicss;
```

Create `windi.config.js` / `windi.config.ts` under your project root with this configurations

```js
// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['scr/**/*.{html,vue,jsx,tsx,svelte}'],
  },
  /* ... */
})
```

And enjoy!
