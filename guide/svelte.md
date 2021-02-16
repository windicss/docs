[utility groups]: /guide/introduction.html#🎳-utility-groups

# Additional Features in Svelte  ⚡️

<kbd>[svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess)</kbd> also supports the following features:

## Variant Attributes

You can apply several utilities for the same variant by using HTML attributes.

```html
<div sm="bg-white font-bold" hover="bg-gray-200" dark="bg-gray-900"/>
```

::: tip Mixed Variants
Variants, such as `sm:hover`, are not supported inside attributes. Use [utility groups] instead.
:::
