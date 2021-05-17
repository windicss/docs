# Create Your Plugin

You can easily create a plugin through the interface of windicss. Windicss is built based on TypeScript, so we highly recommend that you use Typescript to build plugins, it will give you good type support and completion tips, of course, if you want to use JavaScript, it is also supported.

## Add Static Utilities

### Basic Usage

```js
plugin(({ addUtilities }) => {
  addUtilities({
    '.aspect-none': {
      'position': 'static',
      'paddingBottom': '0',
      '> *': {
        position: 'static',
        height: 'auto',
        width: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
    },
  })
})
```

## Add Dynamic Utilities

### Basic Usage

```js
addDynamic('filter', ({ Utility, Style }) => {
  return Utility.handler
    .handleStatic(Style('filter'))
    .createProperty(['-webkit-filter', 'filter'])
})
```

## Add Components

```js
plugin(({ addComponents }) => {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
    '.btn-blue': {
      'backgroundColor': '#3490dc',
      'color': '#fff',
      '&:hover': {
        backgroundColor: '#2779bd',
      },
    },
  })
})
```

## Add Variants

### Modify Selectors

```js
plugin(addVariant('pointer-group-hover', ({ modifySelectors }) => {
  return modifySelectors(({ className }) => {
    return `.no-touch .group:hover .${className}`
  })
}))
```

## Add Base Styles

```js
plugin(({ addBase, theme }) => {
  addBase({
    h1: { fontSize: theme('fontSize.2xl') },
    h2: { fontSize: theme('fontSize.xl') },
    h3: { fontSize: theme('fontSize.lg') },
  })
})
```

## Other Tools

### CSS Escape

`e()`

### Manual Prefix

`prefix()`

### Get User Variants

`variants()`

### Get User Theme

`theme()`

### Get User Configuration

`config()`

<!-- 
## Debug

### Using loadPlugin interface

```js
import { Processor } from 'windicss/lib'
import aspectRatio from 'windicss/plugin/aspect-ratio'

describe('Aspect Ratio Plugin', () => {
  it('should generate correct css', () => {
    const processor = new Processor()
    processor.loadPlugin(aspectRatio)
    const result = processor.interpret('aspect-none aspect-w-16 aspect-h-9 aspect-9/16')
    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toEqual('...')
  })
})
```

### Using configuration

```js
import { Processor } from 'windicss/lib'
import aspectRatio from 'windicss/plugin/aspect-ratio'

describe('Aspect Ratio Plugin', () => {
  it('should generate correct css', () => {
    const processor = new Processor({
      plugins: [
        aspectRatio(),
      ],
    })
    const result = processor.interpret('aspect-none aspect-w-16 aspect-h-9 aspect-9/16')
    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toEqual('...')
  })
})
``` -->
