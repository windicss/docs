# Directives

You can use a combination of directives and CSS to take advantage of the available utilities.

## [@apply](https://tailwindcss.com/docs/functions-and-directives#apply)

Use `@apply` to inline any existing utility classes into your style block.

This is useful when you find a common utility pattern in your HTML that you'd like to extract to a new component.

```css
/* Input */
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}

/* Output */
.btn {
  font-weight: 700;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: .25rem
}

.btn-blue {
  --tw-bg-opacity: 1;
  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  padding-top: 1rem;
}

.btn-blue:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(29, 78, 216, var(--tw-bg-opacity));
}
```

If you'd like to `@apply` an existing class and make it `!important`, simply add `!important` to the end of the declaration:

```css
/* Input */
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}

/* Output */
.btn {
  font-weight: 700 !important;
  padding-top: .5rem !important;
  padding-bottom: .5rem !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
  border-radius: .25rem !important;
}
```

## [@variants](https://tailwindcss.com/docs/functions-and-directives#variants)

You can generate [screen variants, state variants, theme variants](Variants) of your own utilities by wrapping their definitions in the `@variants` directive.

```css
/* Input */
@variants focus, hover {
  .rotate-0 {
    transform: rotate(0deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
}

@variants dark {
  .bg-color {
    background-color: #1c1c1e;
  }
}

/* Output */
.rotate-0 {
  transform: rotate(0deg);
}
.rotate-90 {
  transform: rotate(90deg);
}

.focus\:rotate-0:focus {
  transform: rotate(0deg);
}
.focus\:rotate-90:focus {
  transform: rotate(90deg);
}

.hover\:rotate-0:hover {
  transform: rotate(0deg);
}
.hover\:rotate-90:hover {
  transform: rotate(90deg);
}

.dark .bg-color {
  background-color: #1c1c1e;
}
```

## [@screen](https://tailwindcss.com/docs/functions-and-directives#screen)

The `@screen` directive allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.

```css
/* Input */
@screen sm {
  /* ... */
}

/* Output */
@media (min-width: 640px) {
  /* ... */
}
```

## Develop progress

| Directive |	Status |
| :-------- | :----- |
| [@apply](https://tailwindcss.com/docs/functions-and-directives#apply) | ✅ &ensp;Supported |
| [@variants](https://tailwindcss.com/docs/functions-and-directives#variants) | ✅ &ensp;Supported |
| [@screen](https://tailwindcss.com/docs/functions-and-directives#screen) | ✅ &ensp;Supported |
| [@layer](https://tailwindcss.com/docs/functions-and-directives#layer) | ❗️&ensp;In development |
| [theme()](https://tailwindcss.com/docs/functions-and-directives#theme) | ❗️&ensp;In development |
| [@tailwind](https://tailwindcss.com/docs/functions-and-directives#tailwind) | ❌ &ensp;Adandoned |
| [@responsive](https://tailwindcss.com/docs/functions-and-directives#responsive) | ❌ &ensp;Adandoned |\
