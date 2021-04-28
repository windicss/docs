# Important Prefix

You can prefix any utility classes with `!` to make them as `!important`. This could be very useful when you want to override previous styling rules for that specific property.

```css
!text-green-300
```

<InlinePlayground :input="'text-blue-200\n!text-green-300'" :showCSS="true" :showPreview="false"/>
