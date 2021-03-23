## Line Clamp

### Utilities

| Class | Properties |
| :---- | :--------- |
| `line-clamp-${int}` | overflow: hidden;<br>display: -webkit-box;<br>-webkit-box-orient: vertical;<br>-webkit-line-clamp: `${int};` |
| `line-clamp-none` | -webkit-line-clamp: unset; |

### Usage

```js
// windi.config.js
module.exports = {
  extend: {
    lineClamp: {
      sm: '3',
      lg: '10',
    },
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    // ...
  ],
}
```