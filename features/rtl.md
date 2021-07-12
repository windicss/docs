# RTL

Windi CSS has out-of-box RTL support with zero configuration from `v2.5.4`.

By prefixing the `rtl:` variant to the utilities, they will only apply when RTL is enabled. With the following example, the `Preview` text will be `text-right` and `text-red-400` on the RTL. Try play with it:

<InlinePlayground :input="'text-green-400 rtl:(text-right text-red-400)'" :showCSS="true" :showPreview="true" />

It's easy to enable RTL, you just need to apply `dir="rtl"` on the `html` element to make it affects.

```html
<html>
<body>
  <!-- RTL disabled -->
</body>
</html>

<html dir="rtl">
<body>
  <!-- RTL enabled -->
</body>
</html>
```
