# Variant Groups

You can apply several utilities for the same variant by grouping them with parenthesis.

```html
<div class="bg-white font-light dark:hover:(bg-gray-800 font-medium)"/>
```

<InlinePlayground 
  :input="'bg-blue-200 font-light p-2\ndark:hover:(bg-gray-800 font-medium)'"
  :showCSS="true"
  :showMode="true"
  :showTabs="true"
/>
