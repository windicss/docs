# Utilities added in v3.0

We have added more utilities in 3.0, and all utilities have a good inline playground, try it out and have fun.

> 1. [Backface Visibility](/utilities/layout/display#backface-visibility)
> 1. [Isolation](/utilities/layout/positioning#isolation)
> 1. [Mix Blend Mode](/utilities/effects/mix-blend-mode)
> 1. [Shadow Color](/utilities/effects/box-shadow)
> 1. [Background Blend Mode](/utilities/backgrounds/background-blend-mode)
> 1. [Background Origin](/utilities/backgrounds/background#background-origin)
> 1. [Box Decoration Break](/utilities/behaviors/box-decoration-break)
> 1. [Caret Color](/utilities/interactivity/caret#caret-color)
> 1. [Caret Opacity](/utilities/interactivity/caret#caret-opacity)
> 1. [Image Rendering](/utilities/behaviors/image-rendering)
> 1. [List Style Type](/utilities/behaviors/listings#list-style-type)
> 1. [Stroke DashArray](/utilities/general/svg#stroke-dasharray)
> 1. [Stroke DashOffset](/utilities/general/svg#stroke-dashoffset)
> 1. [Stroke LineCap](/utilities/general/svg#stroke-linecap)
> 1. [Stroke LineJoin](/utilities/general/svg#stroke-linejoin)
> 1. [Hyphens](/utilities/general/typography#hyphens)
> 1. [Tab Size](/utilities/general/typography#tab-size)
> 1. [Text Decoration Color](/utilities/general/typography#text-decoration-color)
> 1. [Text Decoration Opacity](/utilities/general/typography#text-decoration-opacity)
> 1. [Text Decoration Length](/utilities/general/typography#text-decoration-length)
> 1. [Text Decoration Offset](/utilities/general/typography#text-decoration-offset)
> 1. [Text Indent](/utilities/general/typography#text-indent)
> 1. [Text Stroke Width](/utilities/general/typography#text-stroke-width)
> 1. [Text Stroke Color](/utilities/general/typography#text-stroke-color)
> 1. [Text Shadow](/utilities/general/typography#text-shadow)
> 1. [Writing Mode](/utilities/general/typography#writing-mode)
> 1. [Writing Orientation](/utilities/general/typography#writing-orientation)
> 1. [Table Empty Cells](/utilities/layout/tables#table-empty-cells)
> 1. [Table Caption Side](/utilities/layout/tables#table-caption-side)
> 1. [Transform Style](/utilities/animations/transforms#transform-style)
> 1. [Rotate X](/utilities/animations/transforms#rotate-x)
> 1. [Rotate Y](/utilities/animations/transforms#rotate-y)
> 1. [Rotate Z](/utilities/animations/transforms#rotate-z)
> 1. [Scale Z](/utilities/animations/transforms#scale-z)
> 1. [Translate Z](/utilities/animations/transforms#translate-z)
> 1. [Perspective](/utilities/animations/transforms#perspective)
> 1. [Perspective Origin](/utilities/animations/transforms#perspective-origin)
> 1. [Filter](/utilities/filters/filter)
> 1. [Backdrop Filter](/utilities/filters/backdrop-filter)

## Backface Visibility

The `backface` utility sets whether the back face of an element is visible when turned towards the user.

<PlaygroundWithVariants
  variant='hidden'
  :variants="['visible', 'hidden']"
  prefix='backface'
  nested=true
  fixed='!block'
  appended='w-34 h-42 transform hover:rotate-y-180 rotate-y-180 relative preserve-3d transition-all duration-500 absolute z-1 z-2 rounded-lg'
  html='&lt;div class="transform hover:rotate-y-180 relative preserve-3d transition-all duration-500"&gt;
    &lt;img src="/assets/card-front.jpg" class="rounded-lg w-34 h-42 absolute {class} z-1" alt="Card Front" /&gt;            
    &lt;img src="/assets/card-back.jpg" class="rounded-lg w-34 h-42 absolute {class} z-2 transform rotate-y-180" alt="Card Back" /&gt;
&lt;/div&gt;'
/>

## Isolation

Utilities for controlling whether an element should explicitly create a new stacking context. These utilities are especially helpful when used in conjunction with [mix-blend-mode](/utilities/effects/mix-blend-mode) and [z-index](#z-index).

<PlaygroundWithVariants
  variant='isolate'
  :variants="['isolate', 'isolation-auto']"
  fixed='dark:text-white opacity-85 overflow-hidden h-full'
  appended='w-full h-32 bg-green-400 w-16 h-16 mix-blend-difference border-2 border-black'
  nested=true
  html='&lt;div class="w-full h-32 bg-green-400"&gt;
  &lt;div class="{class}"&gt;
    &lt;div class="bg-green-400 w-16 h-16 mix-blend-difference border-2 border-black"&gt;auto&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
/>

## Mix Blend Mode

Utilities for controlling how an element should blend with the background.

<PlaygroundWithVariants
  variant='multiply'
  :variants="['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']"
  prefix='mix-blend'
  fixed='dark:text-white opacity-85 overflow-hidden h-full'
  appended='flex justify-center items-center bg-teal-300 bg-yellow-300 w-36 h-36 w-24 h-24 rounded-md'
  nested=true
  html='&lt;div class=&quot;flex justify-center&quot;&gt;
    &lt;div class=&quot;flex items-center justify-center rounded-md bg-teal-300 h-24 w-36&quot;&gt;
      &lt;div class=&quot;{class} rounded-md h-36 w-24 bg-yellow-300&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

### Box Shadow Color

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='bg-teal-400 w-full h-32 rounded-md shadow-2xl'
  nested=true
  html='&lt;div class=&quot;bg-teal-400 w-full h-32 rounded-md shadow-2xl {class}&quot;&gt;&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    boxShadowColor: {
      gray: '#1c1c1e',
    },
  },
}
```

</Customizing>

## Background Blend Mode

Utilities for controlling how an element's background image should blend with its background color.

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']"
  prefix='bg-blend'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='w-full h-36 bg-no-repeat bg-contain bg-center bg-green-300 rounded-md'
  html="&lt;div class=&quot;w-full h-36 bg-no-repeat bg-green-300 rounded-md bg-contain bg-center {class}&quot; style=&quot;background-image:url(&#39;/assets/bg-blue.svg&#39;);&quot;&gt;
  &lt;/div&gt;"
/>

## Background Origin

Utilities for controlling the background origin of an element's background image.

<PlaygroundWithVariants
  variant='border'
  :variants="['border', 'padding', 'content']"
  prefix='bg-origin'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='p-6 rounded-md border-4 border-blue-400 border-dashed font-extrabold text-white flex justify-center items-center bg-no-repeat'
  html='&lt;div class="{class} bg-no-repeat p-6 rounded-md border-4 border-blue-400 border-dashed font-extrabold text-white flex justify-center items-center" style="background-image: url(/assets/bg-shop.jpg);"&gt;
      &lt;span&gt;Hello World&lt;/span&gt;
    &lt;/div&gt;'
/>

## Box Decoration Break

Utilities for controlling how element fragments should be rendered across multiple lines, columns, or pages.

<PlaygroundWithVariants
  variant='slice'
  :variants="['slice', 'clone']"
  prefix='decoration'
  fixed='dark:text-white opacity-85 overflow-hidden p-2 h-full'
  nested=true
  appended='text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 rounded-16px px-4 text-sm text-white'
  html="
&lt;div&gt;
  &lt;span class=&quot;{class} bg-gradient-to-r px-4 from-green-400 to-blue-500 text-sm text-white rounded-16px&quot;&gt;The&lt;br&gt;quick&lt;br&gt;brown fox&lt;br&gt;over the lazy dog&lt;/span&gt;
&lt;/div&gt;"
/>

## Caret Color

Utilities for controlling the color of insertion text.

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='caret'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400'
  html="&lt;input class='{class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Focus Me'&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    caretColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Caret Opacity

Utilities for controlling the opacity of an element's caret color.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='caret-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400 caret-blue-500'
  html="&lt;input class='caret-blue-500 {class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Focus Me'&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      caretOpacity: {
        light: '0.1',
      },
    },
  },
}
```

</Customizing>

## Image Rendering

The `image-render` utility defines how the browser should render an image if it is scaled up or down from its original dimensions. By default, each browser will attempt to apply aliasing to this scaled image in order to prevent distortion, but this can sometimes be a problem if we want the image to preserve its original pixelated form.

<PlaygroundWithVariants
  variant='pixel'
  :variants="['auto', 'pixel', 'edge']"
  prefix='image-render'
  fixed='p-2 dark:text-white opacity-85'
  appended='w-full h-32'
  nested=true
  html="&lt;img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACdJREFUCB1j9Pf3/88ABMmMjCCKgQlMIhGMu3btAquY9mMDWBhDBQAutwfDrUlKzQAAAABJRU5ErkJggg==' class='{class} w-full h-32'&gt;"
/>

## List Style Type

Utilities for controlling the bullet/number style of a list.

<PlaygroundWithVariants
  variant='disc'
  :variants="['none', 'disc', 'circle', 'square', 'decimal', 'zero-decimal', 'greek', 'roman', 'upper-roman', 'alpha', 'upper-alpha']"
  prefix='list'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  html="&lt;ul class='{class}'&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
&lt;/ul&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
  },
}
```

</Customizing>

## Stroke DashArray

The `stroke-dash` utility is a presentation utility defining the pattern of dashes and gaps used to paint the outline of the shape;

<PlaygroundWithVariants
  variant='2'
  :variants="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '100' ]"
  prefix='stroke-dash'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600 fill-transparent stroke-6'
  html='&lt;svg class="fill-transparent stroke-6 stroke-blue-600 {class}" version="1.1" xmlns="http://www.w3.org/2000/svg"&gt;
    &lt;circle cx="60" cy="60" r="50"&gt;&lt;/circle&gt;
  &lt;/svg&gt;'
/>

## Stroke DashOffset

The `stroke-offset` utility is a presentation utility defining an offset on the rendering of the associated dash array.

<PlaygroundWithVariants
  variant='2'
  :variants="['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '50', '60', '70', '80', '90', '100']"
  prefix='stroke-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600 fill-transparent stroke-6 stroke-dash-50'
  html='&lt;svg class="fill-transparent stroke-6 stroke-blue-600 stroke-dash-50 {class}" version="1.1" xmlns="http://www.w3.org/2000/svg"&gt;
    &lt;circle cx="60" cy="60" r="50"&gt;&lt;/circle&gt;
  &lt;/svg&gt;'
/>

## Stroke LineCap

The `stroke-cap` utility is a presentation utility defining the shape to be used at the end of open subpaths when they are stroked.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'square', 'round']"
  prefix='stroke-cap'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600'
  html='&lt;svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"&gt;
     &lt;g&gt;
        &lt;path class="stroke-blue-600 {class}" id="svg_arcs" d="M46.39845375127366,241.5329820183668 L194.23880503787478,39.2996083282315 C194.93585864152854,40.62325596571734 152.99423462673445,215.53287338109538 289.2000307318228,267.53302990999157" opacity="1" stroke-width="30" fill="#fff"&gt;&lt;/path&gt;
     &lt;/g&gt;
    &lt;/svg&gt;'
/>

## Stroke LineJoin

The `stroke-join` utility is a presentation utility defining the shape to be used at the corners of paths when they are stroked.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'bevel', 'round']"
  prefix='stroke-join'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='stroke-blue-600'
  html='&lt;svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg"&gt;
     &lt;g&gt;
        &lt;path class="stroke-blue-600 {class}" id="svg_arcs" d="M46.39845375127366,241.5329820183668 L194.23880503787478,39.2996083282315 C194.93585864152854,40.62325596571734 152.99423462673445,215.53287338109538 289.2000307318228,267.53302990999157" opacity="1" stroke-width="30" fill="#fff"&gt;&lt;/path&gt;
     &lt;/g&gt;
    &lt;/svg&gt;'
/>

## Hyphens

The hyphens utilities specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

<PlaygroundWithVariants
  variant='auto'
  :variants="['none', 'manual', 'auto']"
  prefix='hyphens'
  fixed='dark:text-white opacity-85 overflow-hidden'
  appended='border border-blue-300 border-dashed p-2'
  nested=true
  html="&lt;p class='{class} border p-2 border-blue-300 border-dashed'&gt;An extra&shy;ordinarily long English word!&lt;/&gt;"
/>

## Tab Size

The tab-size utilities are used to customize the width of tab characters (U+0009).

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '2', '4', '8', '7.5px', '2rem']"
  fixed='dark:text-white opacity-85 overflow-scroll font-mono text-xs'
  prefix='tab'
  nested=true
  appended='w-full whitespace-pre-wrap'
  html="&lt;p class='w-full whitespace-pre-wrap {class}'&gt;without tab
	with 1 tab
		with 2 tabs
  &lt;/&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    tabSize: {
      sm: '2',
      md: '4',
      lg: '8',
    },
  },
}
```

</Customizing>

## Text Decoration

Utilities for controlling the decoration of text.

### Text Decoration Type

Utilities for controlling the type of text decoration.

<PlaygroundWithVariants
  variant='underline'
  :variants="['underline', 'line-through', 'no-underline']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

### Text Decoration Color

Utilities for controlling the color of text decoration.

<PlaygroundWithVariants
  variant='green-500'
  type='color'
  prefix='underline'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden underline underline-2'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    textDecorationColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

### Text Decoration Opacity

Utilities for controlling the opacity of an element's decoration color.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='underline-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='text-black underline underline-teal-600 underline-2'
  nested=true
  html="&lt;p class='text-black underline underline-2 underline-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      textDecorationOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
    },
  },
}
```

</Customizing>

### Text Decoration Length

Utilities for controlling the length of text decoration.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '0.1rem', '3px', '0.3em']"
  prefix='underline'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='text-black underline underline-teal-600'
  nested=true
  html="&lt;p class='text-black underline underline-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      textDecorationLength: {
        sm: '1px',
        md: '2px',
        lg: '4px',
      },
    },
  },
}
```

</Customizing>

### Text Decoration Offset

Utilities for controlling the offset of text decoration.

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '1', '2', '3', '4', '5', '6', '7', '8', '0.6rem', '8.5px', '0.5em']"
  prefix='underline-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden underline underline-2'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    textDecorationOffset: {
      sm: '1px',
      md: '2px',
      lg: '4px',
    },
  },
}
```

</Customizing>

## Text Indent

Utilities for controlling the indentation of text.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '1.8rem', '2em', '1/2', '-xs', '-1em']"
  prefix='indent'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      textIndent: {
        '4xl': '5rem',
        '5xl': '6rem',
      },
    },
  },
}
```

</Customizing>

## Text Stroke

Utilities for controlling the stroke of a text element.

### Text Stroke Width

Utilities for controlling the width of text stroke.

<PlaygroundWithVariants
  variant='md'
  :variants="['', 'none', 'sm', 'md', 'lg', '0', '1', '2', '3', '4', '5', '6', '7', '8', '0.1rem', '3px', '0.3em']"
  prefix='text-stroke'
  fixed='p-2 text-transparent opacity-85 overflow-hidden text-stroke-teal-500 text-4xl'
  html="Hello World"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      textStrokeWidth: {
        'xl': '6',
        '2xl': '8',
      },
    },
  },
}
```

</Customizing>

### Text Stroke Color

Utilities for controlling the color of text stroke.

<PlaygroundWithVariants
  variant='blue-500'
  type='color'
  prefix='text-stroke'
  fixed='p-2 text-transparent opacity-85 overflow-hidden text-4xl text-stroke'
  html="Hello World"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    textStrokeColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Text Shadow

Utilities for controlling the shadow of a text element.

<PlaygroundWithVariants
  variant='lg'
  :variants="['', 'sm', 'md', 'lg', 'xl', 'none']"
  prefix='text-shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  html='The quick brown fox jumps over the lazy dog'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    textShadow: {
      'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
  },
}
```

</Customizing>

## Writing Mode

The `writing-mode` utility sets whether lines of text are laid out horizontally or vertically, as well as the direction in which blocks progress. When set for an entire document, it should be set on the root element (html element for HTML documents).

<PlaygroundWithVariants
  variant='vertical-right'
  :variants="['normal', 'vertical-right', 'vertical-left']"
  prefix='write'
  fixed='p-2 dark:text-white opacity-85 w-full'
  html="The quick brown fox jumps over the lazy dog"
/>

## Writing Orientation

The `writing-orientation` utility sets the orientation of the text characters in a line. It only affects text in vertical mode (when `writing-mode` is not `horizontal-tb`). It is useful for controlling the display of languages that use vertical script, and also for making vertical table headers.

<PlaygroundWithVariants
  variant='mixed'
  :variants="['mixed', 'upright', 'sideways']"
  prefix='write-orient'
  fixed='p-2 dark:text-white opacity-85 write-vertical-right w-full'
  html="The quick brown fox jumps over the lazy dog"
/>

## Table Caption Side

The `caption` utility puts the content of a table's `<caption>` on the specified side. The values are relative to the writing-mode of the table.

<PlaygroundWithVariants
  variant='top'
  :variants="['top', 'bottom']"
  prefix='caption'
  fixed='dark:text-white opacity-85'
  nested=true
  appended='table table-caption text-center table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold'
  html='&lt;div class="table {class} text-xs"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Empty Cells

The `empty-cells` utility sets whether borders and backgrounds appear around `<table>`cells that have no visible content. A good use case for empty-cells could be a situation where you may not know whether a table will or will not contain empty data points and you decide to hide them. 

<PlaygroundWithVariants
  variant='visible'
  :variants="['visible', 'hidden']"
  prefix='empty-cells'
  fixed='dark:text-white opacity-85 text-xs'
  nested=true
  appended='border-separate text-emerald-600 border border-emerald-500 p-1 font-medium font-bold py-2 text-center'
  html='&lt;table class="border-separate text-emerald-600 {class}"&gt;
  &lt;caption class="text-center py-2 font-bold"&gt;Client Info&lt;/caption&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th class="border border-emerald-500 p-1 font-medium"&gt;Client Name&lt;/th&gt;
    	&lt;th class="border border-emerald-500 p-1 font-medium"&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    	&lt;td class="border border-emerald-500 p-1"&gt;&lt;/td&gt;
    	&lt;td class="border border-emerald-500 p-1"&gt;25&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;Louise Q.&lt;/td&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;Owen B.&lt;/td&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;'
/>

## Transform Type

Utilities for controlling transform behaviour.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'gpu', 'none']"
  prefix='transform'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='!rotate-180 w-24 h-24'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 {class} !rotate-180"&gt;'
/>

## Transform Style

The transform-style utility sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

<PlaygroundWithVariants
  variant='3d'
  :variants="['flat', '3d']"
  prefix='preserve'
  fixed='pl-6 pt-6'
  nested=true
  appended='w-full h-32 text-white text-4xl text-center w-full h-full backface-visible perspect-650 perspect-origin-[150%_150%] absolute flex items-center justify-center w-24 h-24 transform translate-z-12 rotate-y-180 rotate-y-90 -rotate-y-90 rotate-x-90 -rotate-x-90 bg-opacity-30 bg-opacity-70 bg-black bg-green-500 bg-red-500 bg-blue-500 bg-yellow-500 bg-pink-500'
  html='&lt;div class="w-full h-32 text-white text-4xl text-center perspect-650 perspect-origin-[150%_150%]"&gt;
  &lt;div class="w-full h-full backface-visible {class}"&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-black bg-opacity-30 transform translate-z-12"&gt;1&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-green-500 bg-opacity-70 transform rotate-y-180 translate-z-12"&gt;2&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-red-500 bg-opacity-70 transform rotate-y-90 translate-z-12"&gt;3&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-blue-500 bg-opacity-70 transform -rotate-y-90 translate-z-12"&gt;4&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-yellow-500 bg-opacity-70 transform rotate-x-90 translate-z-12"&gt;5&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-pink-500 bg-opacity-70 transform -rotate-x-90 translate-z-12"&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
/>

## Rotate X

<PlaygroundWithVariants
  variant='30'
  :variants="['0', '6', '12', '30', '45', '72.5', '90', '180', '-180', '-90', '-72.5', '-45', '-12', '-6']"
  prefix='rotate-x'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

## Rotate Y

<PlaygroundWithVariants
  variant='45'
  :variants="['0', '6', '12', '30', '45', '72.5', '90', '180', '-180', '-90', '-72.5', '-45', '-12', '-6']"
  prefix='rotate-y'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

## Rotate Z

<PlaygroundWithVariants
  variant='12'
  :variants="['0', '6', '12', '30', '45', '72.5', '90', '180', '-180', '-90', '-72.5', '-45', '-12', '-6']"
  prefix='rotate-z'
  fixed='pl-6 pt-6'
  nested=true
  appended='w-full h-32 text-white text-4xl text-center w-full h-full backface-visible preserve-3d perspect-650 perspect-origin-[150%_150%] absolute flex items-center justify-center w-24 h-24 transform translate-z-12 rotate-y-180 rotate-y-90 -rotate-y-90 rotate-x-90 -rotate-x-90 bg-opacity-30 bg-opacity-70 bg-black bg-green-500 bg-red-500 bg-blue-500 bg-yellow-500 bg-pink-500'
  html='&lt;div class="w-full h-32 text-white text-4xl text-center perspect-650 perspect-origin-[150%_150%]"&gt;
  &lt;div class="w-full h-full backface-visible preserve-3d transform {class}"&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-black bg-opacity-30 transform translate-z-12"&gt;1&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-green-500 bg-opacity-70 transform rotate-y-180 translate-z-12"&gt;2&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-red-500 bg-opacity-70 transform rotate-y-90 translate-z-12"&gt;3&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-blue-500 bg-opacity-70 transform -rotate-y-90 translate-z-12"&gt;4&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-yellow-500 bg-opacity-70 transform rotate-x-90 translate-z-12"&gt;5&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-pink-500 bg-opacity-70 transform -rotate-x-90 translate-z-12"&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
/>

## Scale Z

<PlaygroundWithVariants
  variant='90'
  :variants="['0', '25', '50', '75', '90', '95', '100', '105', '110', '125', '150']"
  prefix='scale-z'
  fixed='pl-6 pt-6'
  nested=true
  appended='w-full h-32 text-white text-4xl text-center w-full h-full backface-visible preserve-3d perspect-650 perspect-origin-[150%_150%] absolute flex items-center justify-center w-24 h-24 transform translate-z-12 rotate-y-180 rotate-y-90 -rotate-y-90 rotate-x-90 -rotate-x-90 bg-opacity-30 bg-opacity-70 bg-black bg-green-500 bg-red-500 bg-blue-500 bg-yellow-500 bg-pink-500'
  html='&lt;div class="w-full h-32 text-white text-4xl text-center perspect-650 perspect-origin-[150%_150%]"&gt;
  &lt;div class="w-full h-full backface-visible preserve-3d transform {class}"&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-black bg-opacity-30 transform translate-z-12"&gt;1&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-green-500 bg-opacity-70 transform rotate-y-180 translate-z-12"&gt;2&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-red-500 bg-opacity-70 transform rotate-y-90 translate-z-12"&gt;3&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-blue-500 bg-opacity-70 transform -rotate-y-90 translate-z-12"&gt;4&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-yellow-500 bg-opacity-70 transform rotate-x-90 translate-z-12"&gt;5&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-pink-500 bg-opacity-70 transform -rotate-x-90 translate-z-12"&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    scale: {
      half: '.5',
      full: '1',
    },
  },
}
```

</Customizing>

## Translate Z

<PlaygroundWithVariants
  variant='0'
  :variants="['0', 'px', 'full', '6', '12', '7.5', '1/2', '2/3', '3/4', '3/5', '3.5rem', '42px', '6em', '-px', '-full', '-6', '-12', '-7.5', '-1/2', '-2/3', '-3/4', '-3/5', '-3.5rem', '-42px']"
  prefix='translate-z'
  fixed='pl-6 pt-6'
  nested=true
  appended='w-full h-32 text-white text-4xl text-center w-full h-full backface-visible preserve-3d perspect-650 perspect-origin-[150%_150%] absolute flex items-center justify-center w-24 h-24 transform translate-z-12 rotate-y-180 rotate-y-90 -rotate-y-90 rotate-x-90 -rotate-x-90 bg-opacity-30 bg-opacity-70 bg-black bg-green-500 bg-red-500 bg-blue-500 bg-yellow-500 bg-pink-500'
  html='&lt;div class="w-full h-32 text-white text-4xl text-center perspect-650 perspect-origin-[150%_150%]"&gt;
  &lt;div class="w-full h-full backface-visible preserve-3d transform {class}"&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-black bg-opacity-30 transform translate-z-12"&gt;1&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-green-500 bg-opacity-70 transform rotate-y-180 translate-z-12"&gt;2&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-red-500 bg-opacity-70 transform rotate-y-90 translate-z-12"&gt;3&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-blue-500 bg-opacity-70 transform -rotate-y-90 translate-z-12"&gt;4&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-yellow-500 bg-opacity-70 transform rotate-x-90 translate-z-12"&gt;5&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-pink-500 bg-opacity-70 transform -rotate-x-90 translate-z-12"&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

You can customize the global spacing scale in the theme.spacing or theme.extend.spacing sections of your windi.config.js file:

```js windi.config.js
export default {
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
}
```

To customize the translate scale separately, use the theme.translate section of your windi.config.js file.

```js windi.config.js
export default {
  theme: {
    extend: {
      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
}
```

</Customizing>

## Perspective

The `perspect` utility determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective.

<PlaygroundWithVariants
  variant='lg'
  :variants="['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '100', '200', '300', '400', '500', '600', '700', '800px', '23rem']"
  prefix='perspect'
  fixed='pl-6 pt-6'
  nested=true
  appended='w-full h-32 text-white text-4xl text-center w-full h-full backface-visible preserve-3d perspect-650 perspect-origin-[150%_150%] absolute flex items-center justify-center w-24 h-24 transform translate-z-12 rotate-y-180 rotate-y-90 -rotate-y-90 rotate-x-90 -rotate-x-90 bg-opacity-30 bg-opacity-70 bg-black bg-green-500 bg-red-500 bg-blue-500 bg-yellow-500 bg-pink-500'
  html='&lt;div class="w-full h-32 text-white text-4xl text-center {class} perspect-origin-[150%_150%]"&gt;
  &lt;div class="w-full h-full backface-visible preserve-3d"&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-black bg-opacity-30 transform translate-z-12"&gt;1&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-green-500 bg-opacity-70 transform rotate-y-180 translate-z-12"&gt;2&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-red-500 bg-opacity-70 transform rotate-y-90 translate-z-12"&gt;3&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-blue-500 bg-opacity-70 transform -rotate-y-90 translate-z-12"&gt;4&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-yellow-500 bg-opacity-70 transform rotate-x-90 translate-z-12"&gt;5&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-pink-500 bg-opacity-70 transform -rotate-x-90 translate-z-12"&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      perspective: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
    },
  },
}
```

</Customizing>


## Perspective Origin

The `perspect-origin` utility determines the position at which the viewer is looking. It is used as the vanishing point by the [perspect](#perspective) utility.

<PlaygroundWithVariants
   variant='center'
  :variants="['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', '[150%]', '[-150%]', '[150%_150%]']"
  prefix='perspect-origin'
  fixed='pl-6 pt-6'
  nested=true
  appended='w-full h-32 text-white text-4xl text-center w-full h-full backface-visible preserve-3d perspect-650 absolute flex items-center justify-center w-24 h-24 transform translate-z-12 rotate-y-180 rotate-y-90 -rotate-y-90 rotate-x-90 -rotate-x-90 bg-opacity-30 bg-opacity-70 bg-black bg-green-500 bg-red-500 bg-blue-500 bg-yellow-500 bg-pink-500'
  html='&lt;div class="w-full h-32 text-white text-4xl text-center perspect-650 {class}"&gt;
  &lt;div class="w-full h-full backface-visible preserve-3d"&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-black bg-opacity-30 transform translate-z-12"&gt;1&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-green-500 bg-opacity-70 transform rotate-y-180 translate-z-12"&gt;2&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-red-500 bg-opacity-70 transform rotate-y-90 translate-z-12"&gt;3&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-blue-500 bg-opacity-70 transform -rotate-y-90 translate-z-12"&gt;4&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-yellow-500 bg-opacity-70 transform rotate-x-90 translate-z-12"&gt;5&lt;/div&gt;
    &lt;div class="absolute flex items-center justify-center w-24 h-24 bg-pink-500 bg-opacity-70 transform -rotate-x-90 translate-z-12"&gt;6&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      perspectiveOrigin: {
        tb150: '150% 150%',
        tb200: '200% 200%',
      },
    },
  },
}
```

</Customizing>

## Filter

Utilities for enabling and disabling filters on an element.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'none']"
  prefix='filter'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='!hue-rotate-30 w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 {class} !hue-rotate-30"&gt;'
/>

## Filter Blur

<PlaygroundWithVariants
  variant='sm'
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '0', '1', '2', '3', '9', '12', '24px', '2rem']"
  prefix='blur'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    blur: {
      '4xl': '72px',
      '5xl': '96px',
      '6xl': '128px',
    },
  },
}
```

</Customizing>

## Filter Brightness

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='brightness'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    brightness: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

## Filter Contrast

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='contrast'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    contrast: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

## Filter Drop Shadow

<PlaygroundWithVariants
  variant='md'
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', 'none']"
  prefix='drop-shadow'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    dropShadow: {
      '3xl': 'drop-shadow(0 30px 30px rgba(0, 0, 0, 0.2))',
      '4xl': 'drop-shadow(0 40px 40px rgba(0, 0, 0, 0.3))',
    },
  },
}
```

</Customizing>

## Filter Grayscale

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='grayscale'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    grayscale: {
      50: '0.5',
      80: '0.8',
    },
  },
}
```

</Customizing>

## Filter Hue Rotate

<PlaygroundWithVariants
  variant='45'
  :variants="['0', '15', '30', '45', '60', '90', '120', '180', '-120', '-90', '-60', '-45', '-30', '-15']"
  prefix='hue-rotate'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 filter'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    hueRotate: {
      sm: '60',
      lg: '90',
      xl: '180',
    },
  },
}
```

</Customizing>

## Filter Invert

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='invert'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    invert: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

## Filter Saturate

<PlaygroundWithVariants
  variant='0'
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='saturate'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    saturate: {
      sm: '0.5',
      md: '1',
      lg: '1.5',
    },
  },
}
```

</Customizing>

## Filter Sepia

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='sepia'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='filter w-24 h-24'
  html='&lt;img src="/assets/logo.png" class="w-24 h-24 filter {class}"&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    sepia: {
      sm: '0.5',
      md: '0.8',
    },
  },
}
```

</Customizing>

## Backdrop Filter

Utilities for enabling and disabling backdrop filters on an element.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'none']"
  prefix='backdrop-filter'
  fixed='dark:text-white opacity-85 h-full overflow-hidden'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover !backdrop-blur-md rounded-md text-sm bg-white bg-opacity-30 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="{class} !backdrop-blur-md rounded-md text-sm bg-white bg-opacity-30 text-center p-4"&gt;
      &lt;p&gt;backdrop-blur&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>



## Backdrop Blur

<PlaygroundWithVariants
  variant='sm'
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '0', '1', '2', '3', '9', '12', '24px', '2rem']"
  prefix='backdrop-blur'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-30 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-30 text-center p-4"&gt;
      &lt;p&gt;backdrop-blur&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropBlur: {
      '4xl': '72px',
      '5xl': '96px',
      '6xl': '128px',
    },
  },
}
```

</Customizing>

## Backdrop Brightness

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='backdrop-brightness'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-brightness&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropBrightness: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

## Backdrop Contrast

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='backdrop-contrast'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-contrast&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropContrast: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

## Backdrop Grayscale

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-grayscale'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-grayscale&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropGrayscale: {
      50: '0.5',
      80: '0.8',
    },
  },
}
```

</Customizing>

## Backdrop Hue Rotate

<PlaygroundWithVariants
  variant='45'
  :variants="['0', '15', '30', '45', '60', '90', '120', '180', '-120', '-90', '-60', '-45', '-30', '-15']"
  prefix='backdrop-hue-rotate'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-hue-rotate&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropHueRotate: {
      sm: '60',
      lg: '90',
      xl: '180',
    },
  },
}
```

</Customizing>

## Backdrop Invert

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-invert'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-invert&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropInvert: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

## Backdrop Opacity

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='backdrop-opacity'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm text-center p-2 p-4 flex flex-col justify-center overflow-hidden border-2'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm text-center p-4 border-2"&gt;
      &lt;p&gt;backdrop-opacity&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>


<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropOpacity: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

## Backdrop Saturate

<PlaygroundWithVariants
  variant='0'
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-saturate'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-saturate&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropSaturate: {
      sm: '0.5',
      md: '1',
      lg: '1.5',
    },
  },
}
```

</Customizing>

## Backdrop Sepia

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-sepia'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  nested=true
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-sepia&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropSepia: {
      sm: '0.5',
      md: '0.8',
    },
  },
}
```
</Customizing>
