# Modes

Windi CSS has two operating modes, one is called **Interpretation Mode** and the other is called **Compilation Mode**.

Take the following HTML as an example:

```html
<div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/erin-lindford.jpg" alt="Woman's Face">
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p class="text-gray-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>
```

## Interpretation Mode

When set to Interpret Mode, Windi CSS will scan the input HTML file, and then generate the appropriate CSS rules for the found utility classes and directives.

```css
/* preflight... */

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.block {
  display: block;
}

/* ... */

@media (min-width: 640px) {
  .sm\:flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
  }
  .sm\:flex-shrink-0 {
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
  }
  /* ... */
}
```

## Compilation Mode

> Not all the integrations plugins support Compilation Mode, please check their docs for more details. We are working on it to bring this feature as wide as possible, please stay tuned.

The Compilation Mode synthesizes all the CSS attributes corresponding to the utilities defined in the class attribute, which brings us back to the traditional css writing method, and includes all the great features of tailwindcss. This mode is conducive to JavaScript Frameworks based on SFC templates like [vuejs](https://github.com/vuejs/vue) and [sveltejs](https://github.com/sveltejs/svelte). All we need is a preprocessor.

```html
<div class="windi-15wa4me">
  <img class="windi-1q7lotv" src="/img/erin-lindford.jpg" alt="Woman's Face">
  <div class="windi-7831z4">
    <div class="windi-x3f008">
      <p class="windi-2lluw6">
        Erin Lindford
      </p>
      <p class="windi-1caa1b7">
        Product Engineer
      </p>
    </div>
    <button class="windi-d2pog2">Message</button>
  </div>
</div>
```

```css
/* preflight... */

.windi-15wa4me {
  --tw-bg-opacity: 1; /* bg-white */
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); /* shadow-md */
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity)); /* bg-white */
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); /* shadow-md */
  margin-left: auto; /* mx-auto */
  margin-right: auto; /* mx-auto */
  max-width: 24rem; /* max-w-sm */
  padding-left: 2rem; /* px-8 */
  padding-right: 2rem; /* px-8 */
  padding-top: 2rem; /* py-8 */
  padding-bottom: 2rem; /* py-8 */
}

/* ... */

@media (min-width: 640px) {
  .windi-15wa4me {
    -ms-flex-align: center; /* items-center */
    -webkit-align-items: center; /* items-center */
    -webkit-box-align: center; /* items-center */
    align-items: center; /* items-center */
    display: -ms-flexbox; /* flex */
    display: -webkit-box; /* flex */
    display: -webkit-flex; /* flex */
    display: flex; /* flex */
    padding-top: 1rem; /* py-4 */
    padding-bottom: 1rem; /* py-4 */
  }

  /* ... */
}
```
