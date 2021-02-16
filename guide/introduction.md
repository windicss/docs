[windicss]: https://github.com/windicss/windicss
[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[autoprefixer]: https://autoprefixer.github.io/
[video comparison]: https://twitter.com/antfu7/status/1361398324587163648
[svelte]: /guide/svelte.html#additional-features-in-svelte-⚡%EF%B8%8F
[options]: /guide/configuration
[directives]: /guide/directives
[utilities]: /utilities/
[features]: /guide/features

# Introduction

[__Windi CSS__][windicss] is a next generation compiler for [Tailwind CSS].

If you are already familiar with [Tailwind CSS], think about [Windi CSS] as an alternative to Tailwind, which provides faster load times, and supports all the features in Tailwind v2.0 and more.

If you are not familiar with [Tailwind CSS], you can think of [Windi CSS] as a utility-first CSS library.

## Features ⚡️

Everything you know and love about [Tailwind CSS], plus:

#### ⚡️ Speed

It detects utilities and directives in your CSS, and process them on demand, which [greatly improves][video comparison] the compilation speed. Windi only loads the CSS you use, no purging required!

#### 🔌 Compatibility

Windi CSS supports [Tailwind CSS] configuration [options], [directives], and [utilities].

#### 😎 Auto-Inferred Variables and Variants

No need to configure custom variables like numbers, sizes, scores, and colors. Windi CSS will [automatically](/guide/features) generate them based on the class semantics.

For example, if you use `p-3.2`, it will become available and work as you would expect.

#### ✅ Native Cross-Browser Support

The generated CSS for all utilities is already cross-browser compatible, so there is no need to use [autoprefixer] unless you want to.

### And more!

[Continue reading][features] about the [features] in [Windi CSS].
