# Variant Groups

You can apply several utilities for the same variant by grouping them with parenthesis.

```html
<div class="hover:(bg-gray-400 font-medium) bg-white font-light"/>
```

<InlinePlayground 
  :input="'bg-blue-200 font-light p-2\nhover:(bg-gray-400 font-medium)'"
  :showCSS="true"
  :showMode="true"
/>
