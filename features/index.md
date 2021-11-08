[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[svelte]: /guide/svelte.html#additional-features-in-svelte-⚡%EF%B8%8F

# Features

[Windi CSS] is fully compatible with [Tailwind CSS] v2. On top of that, we have many additional features that boost your workflow further and open up many more possibilities.

## Value Auto-infer

Use arbitrary values in your classes and generate corresponding styles.

```html
<!-- sizes and positions -->
<div class="p-5px mt-[0.3px]"></div>

<!-- colors -->
<button class="bg-hex-b2a8bb"></button>
<button class="bg-[hsl(211.7,81.9%,69.6%)]"></button>

<!-- grid template -->
<div class="grid-cols-[auto,1fr,30px]"></div>
```

<LearnMore to="/features/value-auto-infer" />

## Variant Groups

Apply utilities tp the same variant by grouping them with parentheses.

```html
<div class="bg-white dark:hover:(bg-gray-800 font-medium text-white)"/>
```

```html
<div class="bg-white dark:hover:bg-gray-800 dark:hover:font-medium dark:hover:text-white"/>
```

<LearnMore to="/features/variant-groups" />

## Responsive Design

Extended responsive breakpoint control.

```html
<div class="p-1 md:p-2 <lg:p-3"></div>
```

<LearnMore to="/features/responsive-design" />

## Important Prefix

Prefix any utility classes with `!` to set them as `!important`.

```html
<div class="text-red-400 !text-green-300">Green</div>
```

<LearnMore to="/features/important-prefix" />

## Shortcuts

Quickly combine utilities to create reusable components.

```js windi.config.js
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

<LearnMore to="/features/shortcuts" />

## Dark Mode

```html
<div class="text-black dark:text-white"></div>
```

<LearnMore to="/features/dark-mode" />

## RTL

```html
<div class="text-green-400 rtl:(text-red-400 text-right)"></div>
```

<LearnMore to="/features/rtl" />

## Directives

Tailwind-like `@apply`, `@screen` directives are fully supported.

```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}
```

<LearnMore to="/features/directives" />

## Visual Analyzer

We provided a visual analyzer for you to have an overview of your utility usage and design system.

<LearnMore to="/features/analyzer" />
