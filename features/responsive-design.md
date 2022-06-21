# Responsive Design

Doing [Responsive Design](https://en.wikipedia.org/wiki/Responsive_web_design) in Windi CSS is effortless. By simply adding variant prefixes like `md:` or `lg:` to the utility you want to use, the corresponding media query will be generated automatically. Try it yourself using the playground below:

<InlinePlayground :input="'p-1 lg:p-2'" :showCSS="true" :showPreview="false"/>

When you want to apply a breakpoint variant to multiple utilities, in Windi CSS you can do that without repeating yourself by using the [Variant Groups](/features/variant-groups.html) feature.

<InlinePlayground :input="'p-1 lg:(p-2 m-2 text-red-400)'" :showCSS="true" :showPreview="false"/>

## Custom Range

By default, Windi CSS's breakpoints are designed as Mobile First.

This means unprefixed utilities (like `p-1`) take effect on all screen sizes, while prefixed utilities (like `md:p-2`) only take effect at the **specified breakpoint and above**.

We also provided the ability to have more control over the query range by adding the `<` and `@` prefixes:

```bash
lg  => equalt to and greater than this breakpoint
<lg => smaller than this breakpoint
@lg => exactly this breakpoint range
```

<InlinePlayground :input="'lg:p-1\n<lg:p-2\n@lg:p-3'" :showCSS="true" :showPreview="false"/>

## Breakpoints

|  | Default | `<` prefixed | `@` prefixed |
| :------ | :--- | :--- | :--- |
| sm | (min-width: 640px) | (max-width: 639.9px) | (min-width: 640px) and <br>(max-width: 767.9px) |
| md | (min-width: 768px) | (max-width: 767.9px) | (min-width: 768px) and <br>(max-width: 1023.9px) |
| lg | (min-width: 1024px) | (max-width: 1023.9px) | (min-width: 1024px) and <br>(max-width: 1279.9px) |
| xl | (min-width: 1280px) | (max-width: 1279.9px) | (min-width: 1280px) and <br>(max-width: 1535.9px) |
| 2xl | (min-width: 1536px) | (max-width: 1535.9px) | (min-width: 1536px) |

## Customization

You can customize your breakpoints in your `windi.config.js`

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
})
```
