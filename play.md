---
---

# Windi CSS Playground (WIP)

## Rounded

<PlaygroundWithBox
  variant='3xl'
  :variants="['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '1/2', 'full']"
  prefix='rounded'
  fixed='bg-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all duration-300'
/>

## Border

<PlaygroundWithBox
  mode='edges'
  variant=''
  :variants="['', '0', 1, 2, 3, 4, 5]"
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent'
/>

<!-- 
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
/> -->
