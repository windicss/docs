# Dark Mode

Windi CSS has out-of-box Dark Mode support.

By prefixing the `dark:` variant to utilities, they will only apply when dark mode is enabled. With the following example, the `Preview` text will be red on the light mode, and green on the dark mode. Try to play with it:

<ToggleDark />

<InlinePlayground :input="'text-red-400 dark:text-green-400'" :showCSS="true" :showPreview="true"/>

We have two modes for enabling dark mode, [class mode](#class-mode) and [media query mode](#media-query-mode). By default, `class` mode is enabled.

## Class mode

Class mode gives you better control over when dark mode should enable.

```js windi.config.js
export default {
  darkMode: 'class',
  // ...
}
```

It detects the parent element's `class="dark"`, and usually you can apply it on the `html` element to make it work globally.

```html
<html>
<body>
  <!-- Dark mode disabled -->
</body>
</html>

<html class="dark">
<body>
  <!-- Dark mode enabled -->
</body>
</html>
```

You can use the following snippet to make the color scheme match with the user's system preference, or write your own logic to manage it.

```js
if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.add('dark')
else
  document.documentElement.classList.add('light')
```

<InlinePlayground
  :input="'text-white dark:text-white'"
  :config="{ darkMode: 'class' }"
  :showCSS="true"
  :showPreview="false"
  :showMode="false"
  :showTabs="false"
  :showConfig="true"
  :enableConfig="true"
/>

## Media query mode

In media query mode, it uses the built-in `@media (prefers-color-scheme: dark)` query from the browser that always matches with the user's system preference.

```js windi.config.js
export default {
  darkMode: 'media',
  // ...
}
```

<InlinePlayground
  :input="'text-white dark:text-white'"
  :config="{ darkMode: 'media' }"
  :showCSS="true"
  :showPreview="false"
  :showMode="false"
  :showTabs="false"
  :showConfig="true"
  :enableConfig="true"
/>

