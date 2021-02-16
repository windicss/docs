[windicss]: https://github.com/windicss/windicss
[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[autoprefixer]: https://autoprefixer.github.io/
[additional features]: /guide/svelte
[video comparison]: https://twitter.com/antfu7/status/1361398324587163648

# Introduction

[__Windi CSS__][windicss] is a next generation compiler for [Tailwind CSS].

If you are already familiar with [Tailwind CSS], think about [Windi CSS] as an alternative to Tailwind, which provides faster load times, and supports all the features in Tailwind v2.0 and more.

If you are not familiar with [Tailwind CSS], you can think of [Windi CSS] as a utility-first CSS library.

## Features ⚡️

Everything you know and love about [Tailwind CSS], plus:

#### ⚡️ Speed

It detects utilities and directives in your CSS, and process them on demand, which [greatly improves][video comparison] the compilation speed. Windi only loads the CSS you use, no purging required!

#### 🔌 Compatibility

Windi CSS supports Tailwind CSS configuration options, directives, and utilities.

#### 😎 Auto-Inferred Variables and Variants

No need to configure custom variables like numbers, sizes, scores, and colors. Windi CSS will [automatically](/utilities/auto) generate them based on the class semantics.

For example, if you use `p-3.2`, it will become available and work as you would expect.

#### ✅ Native Cross-Browser Support

The generated CSS for all utilities is already cross-browser compatible, so there is no need to use [autoprefixer] unless you want to.

#### 🌓 More States and Light/Dark theme support

Support all css [pseudo elements and pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

Also, adds `@dark` and `@light` classes based on `prefers-color-scheme`.

#### 🎳 Utility Groups

You can apply several utilities for the same variant by grouping them with parenthesis.

```html
<div class="bg-white font-light sm:hover:(bg-gray-100 font-medium)"/>
```

#### 🖥 More Screen Utilities

Automatically generates `-` and `+` classes, even for your custom screens.

```css
sm: @media (min-width:640px);
+sm: @media (min-width:640px) and (max-width:768px);
-sm: @media (max-width:640px);
```

### And more!

<kbd>[svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess)</kbd> adds [additional features].
