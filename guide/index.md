[tailwind css]: https://tailwindcss.com/docs
[tailwind css v2]: https://blog.tailwindcss.com/tailwindcss-v2
[discussions]: https://github.com/windicss/windicss/discussions
[GitHub Issues]: https://github.com/windicss/windicss/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[GitHub Discussions]: https://github.com/windicss/windicss/discussions
[autoprefixer]: https://autoprefixer.github.io/
[utilities reference]: /utilities/
[utilities]: /utilities/
[directives]: /features/directives

[video comparison]: https://twitter.com/antfu7/status/1361398324587163648
[options]: /guide/configuration
[features]: /features/

# Getting Started

**Windi CSS** is a next-generation utility-first CSS framework.

If you are already familiar with [Tailwind CSS], think about Windi CSS as an **on-demand** alternative to Tailwind, which provides faster load times, **full compatibility with Tailwind v2.0**, and a bunch of additional cool features.

## Why Windi CSS?

A quote from the author should illustrate his motivation to create Windi CSS:

> When my project became larger and there were about dozens of components, the initial compilation time reached 3s, and hot updates took more than 1s with Tailwind CSS.
> \- [@voorjaar](https://github.com/voorjaar)

By scanning your HTML and CSS and generating utilities on-demand, Windi CSS is able to provide [faster load times][video comparison] and a speedy HMR in development, and does not require purging in production.

## Basic Usage

All [utilities] of [Tailwind CSS] are supported in Windi CSS without any extra configuration.

You can use utility classes in your components and stylesheets as usual:

```html
<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:(py-4 flex items-center space-y-0 space-x-6)">
  <img class="block mx-auto h-24 rounded-full sm:(mx-0 flex-shrink-0)" src="/img/erin-lindford.jpg" alt="Woman's Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">Erin Lindford</p>
      <p class="text-gray-500 font-medium">Product Engineer</p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:(text-white bg-purple-600 border-transparent) focus:(outline-none ring-2 ring-purple-600 ring-offset-2)">
      Message
    </button>
  </div>
</div>
```

**Only the utilities you use will generate the corresponding CSS.**

## Integrations

We provide **first-class integrations** for your favorite tools with the best developer experience on each one of them. See the [integration guides](/guide/installation) to get started!

## Features

Windi CSS offers some great features in addition to everything that's included in [Tailwind CSS v2][tailwind css v2]. Refer to the [next chapter][features] for more details.
