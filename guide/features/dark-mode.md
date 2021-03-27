# Dark Mode

Windi has built-in support for Dark Mode.

By prefixing the `dark:` variant to the utilities, they will only apply when dark mode is enabled. At the following example, the `Preview` text will be red on light mode and green on dark mode. Try play with it: 

<DarkModeSwitch />

<InlinePlayground :input="'text-red-400 dark:text-green-400'" :showCSS="true" :showPreview="true"/>

We have two modes for enabling dark mode, [class mode](#class-mode) and [media query mode](#media-query-mode). By default, `class` mode is enable by default.

## Class mode

Class mode gives you better controls over when should the dark mode enables.

```js
// windi.config.js
export default {
  darkMode: 'class',
  // ...
}
```

It detects parent element's `class="dark"`, and normally you can apply it on the `html` element to make it affects globally.

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

You can use the following snippet to make the color scheme matches with users' system preference, or write your own logic to manage it.

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

In media query mode, it uses the built-in `@media (prefers-color-scheme: dark)` query from the browser that always matches with the users' system preference. 

```js
// windi.config.js
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

