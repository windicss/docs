[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[svelte]: /guide/svelte.html#additional-features-in-svelte-⚡%EF%B8%8F

# Features

[Windi CSS] is fully compatible with [Tailwind CSS] v2. On top of that, we have many additional features that boost your workflow further and open up much more possibilities.

### Value Auto-infer

Use arbitrary values in your classes and generate corresponding styles.

```html
<!-- sizes and positions -->
<div class="p-5px mt-[0.3px]"></div>

<!-- colors -->
<button class="bg-hex-b2a8bb"></button>
<button class="bg-[hsl(211.7,81.9%,69.6%)]"></button>

<!-- gird template -->
<div class="grid-cols-[auto,1fr,30px]"></div>
```

<LearnMore to="/guide/features/value-auto-infer" />

### Variant Groups

Apply utilities for the same variant by grouping them with parenthesis.

```html
<div class="bg-white dark:hover:(bg-gray-800 font-medium text-white)"/>
```

```html
<div class="bg-white dark:hover:bg-gray-800 dark:hover:font-medium dark:hover:text-white"/>
```

<LearnMore to="/guide/features/variant-groups" />

### Responsive Design

Extended responsive breakpoints control.

```html
<div class="p-1 md:p-2 <lg:p-3"></div>
```

<LearnMore to="/guide/features/responsive-design" />

### Important Prefix

Prefix any utility classes with `!` to make them as `!important`.

```html
<div class="text-red-400 !text-green-300">Green</div>
```

<LearnMore to="/guide/features/important-prefix" />

### Shortcuts

Create components and utilities quickly and reusable.

```js
// windi.config.js
export default {
  theme: {
    /* ... */
  },
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

```html
<div class="btn hover:btn-green"></div>
```

<LearnMore to="/guide/features/shortcuts" />


### Dark Mode

```html
<div class="text-black dark:text-white"></div>
```

<LearnMore to="/guide/features/dark-mode" />

### Directives

Tailwind-liked `@apply`, `@screen` directives are fully supported.

```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}
```

<LearnMore to="/guide/features/directive" />

### Visual Analyzer

We provided a visual analyzer for you to have an overview of your utility usage and design system.

<LearnMore to="/guide/features/analyzer" />
