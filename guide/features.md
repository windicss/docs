[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[svelte]: /guide/svelte.html#additional-features-in-svelte-⚡%EF%B8%8F

# Core Features

[Windi CSS] is fully compatible with [Tailwind CSS] v2. In top of that, we have a number of additional features that boost your work further and open up much more possibility.

## Utility Groups

You can apply several utilities for the same variant by grouping them with parenthesis.

```html
<div class="bg-white font-light dark:hover:(bg-gray-800 font-medium)"/>
```

<InlinePlayground 
  :input="'bg-blue-200 font-light p-2\ndark:hover:(bg-gray-800 font-medium)'"
  :showCSS="true"
  :showMode="true"
  :showTabs="true"
/>

## Screen Utilities

You can use `+` for __Only Screen__ and `-` for __Desktop First__ in screen utilities, for example:

<InlinePlayground :input="'sm:p-1\n+sm:p-2\n-sm:p-3'" :showCSS="true" :showPreview="false"/>

See [screen variants](http://localhost:4002/utilities/variants.html#screen-variants) for more details.

## Important Utility

You can prefix any utility classes with `!` to make them as `!important`. This could be very useful when you want to override previous styling rules for that specific property.

```css
!text-green-300
```

<InlinePlayground :input="'text-blue-200\n!text-green-300'" :showCSS="true" :showPreview="false"/>

## Shortcuts

We have also added a shortcuts config to help you quickly add utilities. With this feature, you can even share inline components.

```js
// tailwind.config.js
module.exports = {
  theme: {
    /* ... */
  },
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

<InlinePlayground 
  :input="'btn btn-green'" 
  :config="{ shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  }}"
  :showCSS="true"
  :showMode="false"
  :showTabs="true"
  :showConfig="true"
  :enableConfig="true"
/>

css-in-js syntax is also supported for complex utility

```js
// tailwind.config.js
module.exports = {
  theme: {
    /* ... */
  },
  shortcuts: {
    btn: {
      color: 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        color: 'black',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```


<InlinePlayground 
  :input="'btn btn-green'" 
  :config="{ shortcuts: {
    btn: {
      color: 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        color: 'black',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  }}"
  :showCSS="false"
  :showMode="false"
  :showTabs="true"
  :showConfig="true"
  :enableConfig="true"
/>


The utility added by this configuration can also be directly wrapped with variant, such as sm:btn. The function of this feature is similar to @apply, it will merge all utilities into one style.

<!-- 
## More States and Light/Dark theme support

[Windi CSS] supports all CSS [pseudo elements and pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

Also, it adds `@dark` and `@light` classes based on `prefers-color-scheme`. -->

## Auto-Inferred Variants and Variables

Since [Windi CSS] will only generate the CSS utilities you use, it's no longer necessary to configure custom variables like numbers, sizes, scores, and colors. It can detect utilities automatically, and generate CSS based on the appropriate semantics.

### Numbers

```less
p-{float} -> padding: {float/4}rem;
```

<InlinePlayground :input="'p-2.5\np-3.2'" :showCSS="true" :showPreview="false"/>

### Sizes

```less
// {size} should be end with rem|em|px|vh|vw|ch|ex
p-{size} -> padding: {size};
```

<InlinePlayground :input="'p-3px\np-4rem'" :showCSS="true" :showPreview="false"/>


### Fractions

```less
w-{fraction} -> width: {fraction -> precent};
```

<InlinePlayground :input="'w-9/12'" :showCSS="true" :showPreview="false"/>


### Colors

```css
text-{color} -> color: rgba(...);

border-hex-{hex} -> background-color: rgba(...);
```

<InlinePlayground 
  :input="'text-cyan-400\nborder-hex-6dd1c7'" 
  :showCSS="true" 
  :showPreview="false"
  fixed="border border-2 px-4 py-2 rounded"
/>

### Variables

You can even pass variable names, which is very useful in combination with css variables.

```css
bg-${variableName}
```

<InlinePlayground 
  :input="'bg-$test-variable'" 
  :showCSS="true" 
  :showPreview="false"
/>
