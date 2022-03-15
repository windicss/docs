# Attributify Mode

> See [attributify](/features/attributify.md) for setup instructions.

## Syntax

```html
(variant[:-]{1})*key? = "((variant:)*value)*"
```

### Examples

```html
sm = "bg-blue-200 hover:bg-blue-300"
sm:hover = "bg-blue-200 dark:bg-blue-300"
sm-hover = "bg-blue-200 dark:bg-blue-300"

p = "x-4 y-2 md:y-3"
md:bg = "blue-300 dark:blue-400"
md-bg = "blue-300 dark:blue-400"
```

## Utilities

### Font

`font = "sans italic leading-3"`

| values                                                       | property             |
| :----------------------------------------------------------- | :------------------- |
| sans, serif, mono                                            | font-family          |
| italic, not-italic                                           | font-style           |
| thin, extralight, light, normal, medium, semibold, bold, extrabold, black | font-weight          |
| antialiased, subpixel-antialiased                            | font-smoothing       |
| normal-nums, ordinal, slashed-zero, lining-nums, oldstyle-nums, proportional-nums... | font-variant-numeric |
| tracking-tighter,tracking-tight, tracking-normal, ..., tracking-widest | letter-spacing       |
| leading-none, leading-tight, leading-normal, ..., 0, 1, 2, 3, ... | line-height          |

### Text

`text = "sm gray-900 underline truncate"`

| values                                                       | property            |
| :----------------------------------------------------------- | :------------------ |
| xs, sm, ..., lg                                              | font-size           |
| left, center, right, justify                                 | text-align          |
| baseline, top, middle, bottom, text-top, text-bottom         | vertical-align      |
| blue-500, gray-700, ...                                      | color               |
| opacity-40, ... opacity-90                                   | opacity             |
| underline, line-through, no-underline                        | text-decoration     |
| underline-green-500, underline-opacity-50, underline-auto, underline-2, underline-offset-auto | text-decoration |
| tab, tab-0, tab-2, tab-4                                     | tab-size            |
| indent, indent-xs, indent-sm, indent-md                      | text-indent         |
| uppercase, lowercase, capitalize, normal-case                | text-transform      |
| stroke, stroke-none, stroke-sm, ...                          | text-stroke-width   |
| stroke-transparent, stroke-blue-500, stroke-gray-500, ...    | text-stroke-color   |
| shadow, shadow-sm, shadow-md, shadow-lg, ...                 | text-stroke-shadow  |
| truncate, overflow-ellipsis, overflow-clip                   | text-overflow       |
| space-normal, space-nowrap, space-pre, space-pre-line, space-pre-wrap | white-space|
| break-normal, break-words, break-all                         | word-break          |
| write-normal, write-vertical-right, write-vertical-left      | writing-mode        |
| write-orient-mixed, write-orient-upright, write-orient-sideways| writing-orientation |
| hyphens-none, hyphens-manual, hyphens-auto                   | hyphens             |
| placeholder-blue-500, placeholder-gray-700, ...              | placeholder-color   |
| placeholder-opacity-50, placeholder-opacity-90, ...          | placeholder-opacity |

`You can also use `placeholder = "blue-500 opacity-50"`, but usually it conflicts with the `placeholder attribute of input element, so it is better to put it in text, and it's also makes sense.

### Underline

`underline = "~ green-500 opacity-50 2 offset-2"`

| values              | property            |
| :------------------ | :------------------ |
| ~ line-through none | text-decoration     |
| green-500, current ...     | text-decoration-color |
| opacity-50, opacity-60 ... | text-decoration-opacity |
| auto, 0, 1, 2, 3, 4 ...  | text-decoration-thickness |
| offset-auto, offset-1, offset-2, ...  | text-decoration-offset |

### List

`list = "disc inside"`

| values              | property            |
| :------------------ | :------------------ |
| none, disc, decimal | list-style-type     |
| inside, outside     | list-style-position |

---

### Background

`bg = "gray-100 opacity-90"`

| values                                         | property              |
| :--------------------------------------------- | :-------------------- |
| fixed, local, scroll                           | background-attachment |
| bottom, center, left, bottom, ...              | background-position   |
| black, white, ...                              | background-color      |
| opacity-50, ...                                | background-opacity    |
| repeat, no-repeat, repeat-x, ...               | background-repeat     |
| auto, cover, contain                           | background-size       |
| clip-border, clip-padding, clip-content, ...   | background-clip       |
| origin-border, origin-padding, origin-content  | background-origin     |
| blend-normal, blend-overlay, blend-darken, ... | background-blend-mode |
| none                                           | background-image      |

### Gradient

`gradient = "to-r from-yellow-400 via-red-500 to-pink-500"`

| values                       | property         |
| :--------------------------- | :--------------- |
| none, to-t, to-r, to-br, ... | background-image |
| from-yellow-400, ...         | from-color       |
| via-red-500, ...             | via-color        |
| to-pink-500, ...             | to-color         |

### Border

`border = "~ rounded dashed gray-400 opacity-80"`
>
`~ represent border itself, means border-DEFAULT`

| values                                      | property                              |
| :------------------------------------------ | :------------------------------------ |
| ~, 1, 2, t-0, ...                           | border(-top/left/bottom/right)?-width |
| rounded-none, rounded-sm, rounded-b-sm, ... | border-radius                         |
| solid, dashed, dotted, double, none         | border-style                          |
| collapse, separate                          | border-collapse                       |
| gray-500, ...                               | border-color                          |
| opacity-50, ...                             | border-opacity                        |

### Divide

`divide = "y dashed gray-800 opacity-90"`

| values                               | property       |
| :----------------------------------- | :------------- |
| y, x, y-reverse, x-reverse, y-2, ... | divide-width   |
| solid, dashed, dotted, double, none  | divide-style   |
| gray-500, ...                        | divide-color   |
| opacity-90, ...                      | divide-opacity |

### Ring

`ring = "2 gray-200 opacity-50 offset-1 offset-gray-400"`

| values                 | property          |
| :--------------------- | :---------------- |
| ~, inset, 0, 1, 2, ... | ring-width        |
| gray-200, ...          | ring-color        |
| opacity-50, ...        | ring-opacity      |
| offset-4, ...          | ring-offset-width |
| offset-gray-200, ...   | ring-offset-color |

### Icon

`icon = "fill-gray-200 stroke-blue-400 stroke-2"`

| values                               | property     |
| :----------------------------------- | :----------- |
| fill-current, fill-gray-200, ...     | fill         |
| stroke-current, stroke-gray-400, ... | stroke       |
| stroke-2, stroke-4, ...              | stroke-width |
| stroke-dash-2 , stroke-dash-4, ...   | stroke-dasharray |
| stroke-offset-2, stroke-offset-4, ...| stroke-dashoffset |
| stroke-cap-auto , stroke-cap-square..| stroke-line-cap |
| stroke-join-auto, stroke-join-auto...| stroke-line-join |

`You can also use `stroke = "2 gray-400"` or `fill=gray-200`, but usually it conflicts with the `fill/stroke attribute of svg element, so it is better to put it in svg.

---

### Container

`container = "~"`
>
`container just a single utility, you can also write it in the class attr.`

| values | property        |
| :----- | :-------------- |
| ~      | width/max-width |

### Padding

`p = "x-2 y-4 md:4"`

| values                      | property                    |
| :-------------------------- | :-------------------------- |
| 0, px, 1, 2, 4...           | padding                     |
| y-0, y-px, y-1, y-2, y-4... | padding-top, padding-bottom |
| x-0, x-px, x-1, x-2, x-4... | padding-left, padding-right |
| t-0, t-px, t-1, t-2, t-4... | padding-top                 |
| l-0, l-px, l-1, l-2, l-4... | padding-left                |
| b-0, b-px, b-1, b-2, b-4... | padding-bottom              |
| r-0, r-px, r-1, r-2, r-4... | padding-right               |

### Margin

`m = "x-2 y-4 md:4"`

| values                      | property                  |
| :-------------------------- | :------------------------ |
| 0, px, 1, 2, 4...           | margin                    |
| y-0, y-px, y-1, y-2, y-4... | margin-top, margin-bottom |
| x-0, x-px, x-1, x-2, x-4... | margin-left, margin-right |
| t-0, t-px, t-1, t-2, t-4... | margin-top                |
| l-0, l-px, l-1, l-2, l-4... | margin-left               |
| b-0, b-px, b-1, b-2, b-4... | margin-bottom             |
| r-0, r-px, r-1, r-2, r-4... | margin-right              |

### Space

`space = "x-2 -y-4 y-reverse"`

| values         | property        |
| :------------- | :-------------- |
| x-4, -x-4, ... | space-x         |
| x-reverse      | space-x-reverse |
| y-2, -y-2, ... | space-y         |
| y-reverse      | space-y-reverse |

### Width

`w = "2xl md:screen"`

| values                                    | property |
| :---------------------------------------- | :------- |
| 0, auto, px, full, sm, md, screen-sm, ... | width    |

### Min-Width

`min-w = "2xl md:screen"`

| values                              | property  |
| :---------------------------------- | :-------- |
| 0, px, full, sm, md, screen-sm, ... | min-width |

### Max-Width

`max-w = "2xl md:screen"`

| values                              | property  |
| :---------------------------------- | :-------- |
| 0, px, full, sm, md, screen-sm, ... | max-width |

### Height

`h = "screen"`

| values                                    | property |
| :---------------------------------------- | :------- |
| 0, auto, px, full, sm, md, screen-sm, ... | height   |

### Min-Height

`min-h = "screen"`

| values                              | property   |
| :---------------------------------- | :--------- |
| 0, px, full, sm, md, screen-sm, ... | min-height |

### Max-Height

`max-h = "screen"`

| values                              | property   |
| :---------------------------------- | :--------- |
| 0, px, full, sm, md, screen-sm, ... | max-height |

### Flex

`flex = "md:~ col wrap"`

| values                             | property       |
| :--------------------------------- | :------------- |
| ~, inline                          | display        |
| row, row-reverse, col, col-reverse | flex-direction |
| wrap, wrap-reverse, nowrap         | flex-wrap      |
| 1, auto, initial, none             | flex           |
| grow, grow-0                       | flex-grow      |
| shrink, shrink-0                   | flex-shrink    |

### Grid

`grid = "~ cols-1 lg:cols-3 gap-4"`

| values                                             | property               |
| :------------------------------------------------- | :--------------------- |
| ~, inline                                          | display                |
| cols-1, cols-3, cols-none, ...                     | grid-template-columns  |
| col-auto, col-span2, ...                           | grid-column            |
| rows-1, rows-3, rows-none, ...                     | grid-template-rows     |
| flow-row, flow-col, flow-row-dense, flow-col-dense | grid-auto-flow         |
| auto-cols-auto, auto-cols-min, auto-cols-max, ...  | grid-auto-columns      |
| auto-rows-auto, auto-rows-min, auto-rows-max, ...  | gird-auto-rows         |
| gap-2, gap-x-4, gap-y-2, ...                       | gap/column-gap/row-gap |

### Table

`table = "inline column"`

| values                                                       | property     |
| :----------------------------------------------------------- | :----------- |
| ~, inline, caption, cell, column, column-group, footer-group, header-group, row-group, row | display      |
| auto, fixed                                                  | table-layout |
| caption-top, caption-bottom                                  | caption-side |
| empty-cells-visible, empty-cells-hidden                      | empty-cells  |

### Order

`order = "first lg:last"`

| values                 | property |
| :--------------------- | :------- |
| 1, 2, first, last, ... | order    |

### Align

`align = "start md:end"`

| values                                                       | property      |
| :----------------------------------------------------------- | :------------ |
| (content-)center, (content-)start, (content-)end, (content-)between, (content-)around, (content-)evenly | align-content |
| items-start, items-end, items-center, items-baseline, items-stretch | align-items   |
| self-auto, self-start, self-end, self-center, self-stretch   | align-self    |

### Justify

`justify = "start md:between"`

| values                                                       | property        |
| :----------------------------------------------------------- | :-------------- |
| (content-)center, (content-)start, (content-)end, (content-)between, (content-)around, (content-)evenly | justify-content |
| items-start, items-end, items-center, items-baseline, items-stretch | justify-items   |
| self-auto, self-start, self-end, self-center, self-stretch   | justify-self    |

### Place

`place = "start md:center"`

| values                                                       | property      |
| :----------------------------------------------------------- | :------------ |
| (content-)center, (content-)start, (content-)end, (content-)between, (content-)around, (content-)evenly, (content-)stretch | place-content |
| items-start, items-end, items-center, items-stretch          | place-items   |
| self-auto, self-start, self-end, self-center, self-stretch   | place-self    |

### Display

`display = "block md:hidden"`

| values                                                       | property   |
| :----------------------------------------------------------- | :--------- |
| inline, flow-root, contents, list-item, hidden, block, inline-block | display    |
| visible, invisible                                           | visibility |
| backface-visible, backface-hidden                   | backface-visibility |

### Position

`pos = "fixed top-0 left-4"`

| values                                                  | property              |
| :------------------------------------------------------ | :-------------------- |
| static, fixed, absolute, relative, sticky               | position              |
| inset-1, -inset-1, -inset-x-1, -inset-y-2, inset-y-auto | inset                 |
| top-0, left-0, bottom-0, right-0, ...                   | top/right/bottom/left |
| float-right, float-left, float-none                     | float                 |
| clear-left, clear-right, clear-both, clear-none         | clear                 |
| isolate, isolation-auto                                 | isolation             |

### Box

`box = "decoration-slice content"`

| values                             | property             |
| :--------------------------------- | :------------------- |
| decoration-slice, decoration-clone | box-decoration-break |
| border, content                    | box-sizing           |

### Caret

`caret = "gray-500 opacity-50"`

| values                             | property             |
| :--------------------------------- | :------------------- |
| gray-500 transparent ...           | caret-color          |
| opacity-0, opacity-50, ...         | caret-opacity        |

### Isolation

`isolation = "isolate md:auto"`

| values        | property  |
| :------------ | :-------- |
| isolate, auto | isolation |

### Object

`object = "none center"`

| values                                                  | property        |
| :------------------------------------------------------ | :-------------- |
| contain, cover, fill, none, scale-down                  | object-fit      |
| bottom, center, left, left-bottom, left-top, right, ... | object-position |

### Overflow

`overflow = "auto md:scroll"`

| values                                | property   |
| :------------------------------------ | :--------- |
| auto, hidden, visible, scroll         | overflow   |
| x-auto, x-hidden, x-visible, x-scroll | overflow-x |
| y-auto, y-hidden, y-visible, y-scroll | overflow-y |

### OverScroll

`overscroll = "auto md:contain"`

| values                    | property              |
| :------------------------ | :-------------------- |
| auto, contain, none       | overscroll-behavior   |
| x-auto, x-contain, x-none | overscroll-behavior-x |
| y-auto, y-contain, y-none | overscroll-behavior-y |

### ZIndex

`z = "0 md:50"`

| values                   | property |
| :----------------------- | :------- |
| auto, 0, 10, 20, 50, ... | z-index  |

---

### Shadow

`shadow = "md gray-200"`

| values                              | property     |
| :---------------------------------- | :----------- |
| sm, ~, md, lg, xl, 2xl, inner, none | box-shadow   |
| gray-200, ...                       | shadow-color |

### Opacity

`opacity = "100 md:50"`

| values            | property |
| :---------------- | :------- |
| 0, 5, 10, 20, ... | opacity  |

### Blend

`blend = "darken md:hard-light"`

| values                                         | property       |
| :--------------------------------------------- | :------------- |
| normal, multiply, screen, overlay, darken, ... | mix-blend-mode |

### Filter

`filter = "~ blur-sm brightness-125"`

| values                                                       | property    |
| :----------------------------------------------------------- | :---------- |
| ~, none                                                      | filter      |
| blur-0, blur-sm, blur, blur-md, ...                          | blur        |
| brightness-0, brightness-50, brightness-75, ...              | brightness  |
| contrast-0, contrast-50, contrast-75, ...                    | contrast    |
| drop-shadow-sm, drop-shadow, drop-shadow-md, ...             | drop-shadow |
| grayscale-0, grayscale                                       | grayscale   |
| -hue-rotate-180, -hue-rotate-90, ..., hue-rotate-90, hue-rotate-180 | hue-rotate  |
| invert-0, invert                                             | invert      |
| saturate-0, saturate-50, saturate-100, ...                   | saturate    |
| sepia-0, sepia                                               | sepia       |

### Backdrop Filter

`backdrop = "~ blur-sm brightness-125"`

| values                                                       | property        |
| :----------------------------------------------------------- | :-------------- |
| ~, none                                                      | backdrop-filter |
| blur-0, blur-sm, blur, blur-md, ...                          | blur            |
| brightness-0, brightness-50, brightness-75, ...              | brightness      |
| contrast-0, contrast-50, contrast-75, ...                    | contrast        |
| grayscale-0, grayscale                                       | grayscale       |
| -hue-rotate-180, -hue-rotate-90, ..., hue-rotate-90, hue-rotate-180 | hue-rotate      |
| invert-0, invert                                             | invert          |
| opacity-0, opacity-5, ... opacity-95                         | opacity         |
| saturate-0, saturate-50, saturate-100, ...                   | saturate        |
| sepia-0, sepia                                               | sepia           |

### Transition

`transition = "~ duration-500 ease-in-out"`

| values                                           | property                   |
| :----------------------------------------------- | :------------------------- |
| ~, none, all, colors, opacity, shadow, transform | transition-property        |
| duration-75, duration-100, duration-150, ...     | transition-duration        |
| ease-linear, ease-in, ease-out, ease-in-out      | transition-timing-function |
| delay-75, delay-100, delay-150, ...              | transition-delay           |

### Animate

`animate = "spin"`

| values                          | property  |
| :------------------------------ | :-------- |
| none, spin, ping, pulse, bounce | animation |

### Transform

`transform = "~ rotate-45 lg:none"`

| values                                                       | property                |
| :----------------------------------------------------------- | :---------------------- |
| ~, gpu, none                                                 | transform               |
| preserve-flat, preserve-3d                                   | transform-style         |
| perspect-lg, perspect-none, ...                              | perspective             |
| perspect-origin-center, perspect-origin-top                  | perspective-origin      |
| origin-center, origin-top, origin-top-right, ...             | transform-origin        |
| scale-0, scale-50, scale-75, ...                             | scale                   |
| scale-x-60, scale-y-30, scale-z-45                           | scale-x/y/z             |
| rotate-50, -rotate-50, ...                                   | rotate                  |
| rotate-x-30, rotate-y-45, rotate-z-90                        | rotate-x/y/z            |
| translate-x-2, -translate-x-4, translate-y-40, -translate-y-40, translate-z-12 | translate-x/y/z |
| skew-x-2, -skew-x-4, skew-y-2, -skew-y-2                     | skew-x/skew-y           |

---

### Appearance

`appearance = "none"`

| values | property   |
| :----- | :--------- |
| none   | appearance |

### Cursor

`cursor = "pointer"`

| values                                                      | property |
| :---------------------------------------------------------- | :------- |
| auto, default, pointer, wait, text, move, help, not-allowed | cursor   |

### Outline

`outline = "none"`

| values             | property |
| :----------------- | :------- |
| none, white, black | outline  |

### Pointer Events

`pointer = "none"`

| values     | property       |
| :--------- | :------------- |
| none, auto | pointer-events |

### Resize

`resize = "~"`

| values        | property |
| :------------ | :------- |
| ~, x, y, none | resize   |

### User Select

`select = "none"`

| values                | property    |
| :-------------------- | :---------- |
| none, text, all, auto | user-select |

### Screen Reader

`sr = "only"`

| values         | property      |
| :------------- | :------------ |
| only, not-only | screen-reader |

## Special cases

`grid table flex ring shadow border filter backdrop transition transform resize`, These classes are special cases, **you cannot write empty attribute values** (`flex=""`). You can write `default` or `~` instead(`flex="~"` or `flex="default"`).
