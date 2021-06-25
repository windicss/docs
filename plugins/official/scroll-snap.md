## Scroll Snap

inspired by [tailwindcss-scroll-snap](https://github.com/innocenzi/tailwindcss-scroll-snap)


### Utilities

| Class                         | Properties                                                                                         | Description                                                                  |
| :---------------------------- | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
| `snap`                        | scroll-snap-type: <br> var(--scroll-snap-axis, both) <br> var(--scroll-snap-strictness, mandatory) | main snap class                                                              |
| __Strictness__                |                                                                                                    |                                                                              |
| `snap-none`                   | --scroll-snap-strictness: none                                                                     |                                                                              |
| `snap-mandatory`              | --scroll-snap-strictness: mandatory                                                                |                                                                              |
| `snap-proximity`              | --scroll-snap-strictness: proximity                                                                |                                                                              |
| __Axis__                      |                                                                                                    |                                                                              |
| `snap-x`                      | --scroll-snap-axis: x                                                                              |                                                                              |
| `snap-y`                      | --scroll-snap-axis: y                                                                              |                                                                              |
| `snap-block`                  | --scroll-snap-axis: block                                                                          |                                                                              |
| `snap-inline`                 | --scroll-snap-axis: inline                                                                         |                                                                              |
| `snap-both`                   | --scroll-snap-axis: both                                                                           |                                                                              |
| __Align__                     |                                                                                                    |                                                                              |
| `snap-start`                  | scroll-snap-align: start                                                                           |                                                                              |
| `snap-end`                    | scroll-snap-align: end                                                                             |                                                                              |
| `snap-center`                 | scroll-snap-align: center                                                                          |                                                                              |
| __Stop__                      |                                                                                                    |                                                                              |
| `snap-normal`                 | scroll-snap-stop: normal                                                                           |                                                                              |
| `snap-always`                 | scroll-snap-stop: always                                                                           |                                                                              |
| __Margin__                    |                                                                                                    |                                                                              |
| `snap-m${direction}-${value}` | scroll-snap-margin`${direction}`: `${value}`                                                       | same [Margin Utilities](/utilities/spacing.html#margin-%E2%AD%90%EF%B8%8F)   |
| __Padding__                   |                                                                                                    |                                                                              |
| `snap-p${direction}-${value}` | scroll-snap-padding`${direction}`: `${value}`                                                      | same [Padding Utilities](/utilities/spacing.html#padding-%E2%AD%90%EF%B8%8F) |
| __Other__                     |                                                                                                    |                                                                              |
| `scrollbar-hide`              | scrollbar-width: none<br>::-webkit-scrollbar: {<br>&nbsp;&nbsp;display: none<br>}                  | visual hide scrollbar                                                        |


### Usage

```js windi.config.js
export default {
  plugins: [
    require('windicss/plugin/scroll-snap'),
    // ...
  ],
}
```

with TypeScript:

```ts
// windi.config.ts
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'

export default defineConfig({
  plugins: [
    scrollSnapPlugin,
    // ...
  ],
})
```
