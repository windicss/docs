# Shortcuts

It's quite common to get repetitive when you work on similar utility sets. We provide this "shortcuts" feature allowing you to give the combinations of utility names which you can reuse everywhere inside your app without needing to repeat yourself.

Simply add the `shortcuts` field to your configuration:

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

<InlinePlayground
  :input="'btn btn-green'"
  :config="{ shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  }}"
  :showCSS="true"
  :showMode="false"
  :showTabs="true"
  :showConfig="true"
  :enableConfig="true"
/>

CSS-in-JS syntax is also supported for complex utilities:

```js windi.config.js
export default {
  theme: {
    /* ... */
  },
  shortcuts: {
    'btn': {
      'color': 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        'color': 'black',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
}
```

<InlinePlayground
  :input="'btn btn-green'"
  :config="{ shortcuts: {
    btn: {
      color: 'white',
      '@apply': 'py-2 px-4 font-semibold rounded-lg',
      '&:hover': {
        '@apply': 'bg-green-700',
        color: 'black',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  }}"
  :showCSS="false"
  :showMode="false"
  :showTabs="true"
  :showConfig="true"
  :enableConfig="true"
/>


The utility added by this configuration can also be directly wrapped in variants, such as sm:btn. The purpose of this feature is similar to the `@apply` directive, it will merge all utilities into one style.
