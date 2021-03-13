---
sidebar: false
---

## Windi CSS Inline Playground (WIP)

<InlinePlayground 
  :input="'bg-primary font-light p-2\ndark:hover:(bg-gray-800 font-medium)'"
  :showCSS="true"
  :showMode="true"
  :showTabs="true"
  :showConfig="true"
  :enableConfig="true"
  :config="{
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9'
      }
    }
  }
}"
/>
