[windi css]: https://github.com/windicss/windicss
[windicss]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[discussions]: https://github.com/windicss/windicss/discussions
[GitHub Issues]: https://github.com/windicss/windicss/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc
[GitHub Discussions]: https://github.com/windicss/windicss/discussions
[autoprefixer]: https://autoprefixer.github.io/
[utilities reference]: /utilities/
[utilities]: /utilities/
[directives]: /guide/directives

[video comparison]: https://twitter.com/antfu7/status/1361398324587163648
[options]: /guide/configuration
[features]: /guide/features

# Getting Started

[__Windi CSS__][windicss] is a next generation compiler for [Tailwind CSS].

If you are already familiar with [Tailwind CSS], think about [Windi CSS] as an alternative to Tailwind, which provides faster load times, and supports all the features in Tailwind v2.0 and more.

If you are not familiar with [Tailwind CSS], you can think of [Windi CSS] as a utility-first CSS library.

## Why Windi CSS? 🤔

A quote from the author should illustrate his motivation to create [Windi CSS]:

<Quote author="@voorjar">When my project became larger and there were about dozens of components, the initial compilation time reached 3s, and hot updates took more than 1s.</Quote>

By scanning your HTML and CSS and generating utilities on demand, [Windi CSS] is able to provide [faster load times][video comparison] and a speedy HMR in development, and does not require purging in production.

## Integrations

| Frameworks | Package | Version |
| --- | --- | --- |
| CLI | [Built-in](https://windicss.org/guide/cli) | ![](https://img.shields.io/npm/v/windicss?label=&color=0EA5E9) |
| VSCode Extension | [windicss-intellisense](https://github.com/windicss/windicss-intellisense) | ![](https://img.shields.io/visual-studio-marketplace/v/voorjaar.windicss-intellisense.svg?label=&color=1388bd) |
| Vite | [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss) | ![](https://img.shields.io/npm/v/vite-plugin-windicss?label=&color=0EA5E9) |
| Rollup | [rollup-plugin-windicss](https://github.com/windicss/vite-plugin-windicss/tree/main/packages/rollup-plugin-windicss) | ![](https://img.shields.io/npm/v/rollup-plugin-windicss?label=&color=1388bd) |
| Webpack | [windicss-webpack-plugin](https://github.com/windicss/windicss-webpack-plugin) | ![](https://img.shields.io/npm/v/windicss-webpack-plugin?label=&color=1388bd) |
| Vue (Webpack) | [vue-windicss-preprocess](https://github.com/windicss/vue-windicss-preprocess) | ![](https://img.shields.io/npm/v/vue-windicss-preprocess?label=&color=0EA5E9) |
| Nuxt | [nuxt-windicss-module](https://github.com/windicss/nuxt-windicss-module) | ![](https://img.shields.io/npm/v/nuxt-windicss-module?label=&color=1388bd) |
| Svelte | [svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess) | ![](https://img.shields.io/npm/v/svelte-windicss-preprocess?label=&color=1388bd) |

## Usage

Windi CSS provides all [utilities] in [Tailwind CSS], so usage is very [similar][tailwind css].

You can use utility classes in your components and stylesheets as usual:

```html
<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">Erin Lindford</p>
      <p class="text-gray-500 font-medium">Product Engineer</p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
      Message
    </button>
  </div>
</div>
```

[Directives] are also supported:

```css
.btn {
  @apply font-bold py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}
```

## Additional Features

In addition of Tailwind CSS v2, we also have some great features that only possible for Windi CSS. Refer to the [next chapter](./features) for more details.
