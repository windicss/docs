# Directives

You can use a combination of directives and CSS to take advantage of the available utilities.

## @apply

Use `@apply` to inline any existing utility classes into your style block.

This is useful when you find a common utility pattern in your HTML that you'd like to extract to a new component.

<DirectivesPlayground 
:input='`
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}`.trim()'
/>

If you'd like to `@apply` an existing class and make it `!important`, simply add `!important` to the end of the declaration:

<DirectivesPlayground 
:input='`
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}`.trim()'
/>

## @variants

You can generate [screen variants, state variants, theme variants](/utilities/variants) of your own utilities by wrapping their definitions in the `@variants` directive.

<DirectivesPlayground 
:input='`
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
}`.trim()'
/>


## @screen

The `@screen` directive allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.


<DirectivesPlayground 
:input='`
@screen sm {
  .custom {
    @apply text-lg;
  }
}`.trim()'
/>

## @layer

The `@layer` directive sets the order of how each class is applied. Valid layers are `base`, `components`, and `utilities`.

<DirectivesPlayground 
:input='`
@layer components {
  .components {
    @apply bg-red-500;
  }
}
@layer utilities {
  .utilities {
    max-width: 768px;
  }
}
@layer base {
  base {
    margin-left: auto;
  }
}
.normal {
  margin-right: auto; /* components by default */
}`.trim()'
/>

## theme()

The `theme()` function allows you to access your config values using dot notation.

<DirectivesPlayground 
:input='`
.btn-blue {
  background-color: theme("colors.blue.500");
}`.trim()'
/>
