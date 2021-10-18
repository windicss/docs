
# Attributify Mode

:warning: Attributify is not available with [svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess).

With this feature, you can write windi classes in html attributes.

> Regarding the issue of css size, the css size may be slightly increased, but under gzip compression, the impact is minimal.

Attributify is opt-in by default, start by enabling it in your windi config.

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
})
```

And use them as you would like:

```html
<button 
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```

## Syntax

```
(variant[:-]{1})*key? = "((variant:)*value)*"
```

### Examples

```
sm = "bg-blue-200 hover:bg-blue-300"
sm:hover = "bg-blue-200 dark:bg-blue-300"
sm-hover = "bg-blue-200 dark:bg-blue-300"

p = "x-4 y-2 md:y-3"
md:bg = "blue-300 dark:blue-400"
md-bg = "blue-300 dark:blue-400"
```

## Prefix

If you are concerned about naming confliction, you can add custom prefix to attributify mode by:

```js windi.config.js
export default {
  attributify: {
    prefix: 'w:',
  },
}
```

```html
<button 
  w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  w:text="sm white"
  w:font="mono light"
  w:p="y-2 x-4"
  w:border="2 rounded blue-200"
>
  Button
</button>
```

## Normalization

You actually have two **programming paradigms** to choose from:

1. Grouping based on **utilities**

   ```html
   class=...
   bg=...
   text=...
   border=...
   ```

2. Grouping based on **variants**

   ```html
   class=...
   sm=...
   md=...
   dark=...
   ```

> And of course, you can also **mix them**, but I personally **don't recommend**. Just choosing one and stick to it. You will find your code becomes clearer.

## Utilities

Reference: [Attributify Utilities](/posts/attributify.html#utilities)
