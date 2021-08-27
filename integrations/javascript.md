<Logo name="javascript" class="logo-float-xl"/>

# Windi CSS JavaScript API

<PackageInfo name="windicss" author="voorjaar" />

## About

If using the CLI does not fit your workflow, you could directly use the Windi CSS API.

## Install

Add the package:

```bash
npm i -D windicss
```

## Usage

### Setup with interpret mode

```js
const { Processor } = require('windicss/lib')
const { HTMLParser } = require('windicss/utils/parser')

export function generateStyles(html) {
  // Get windi processor
  const processor = new Processor()

  // Parse all classes and put into one line to simplify operations
  const htmlClasses = new HTMLParser(html)
    .parseClasses()
    .map(i => i.result)
    .join(' ')

  // Generate preflight based on the html we input
  const preflightSheet = processor.preflight(html)

  // Process the html classes to an interpreted style sheet
  const interpretedSheet = processor.interpret(htmlClasses).styleSheet

  // Build styles
  const APPEND = false
  const MINIFY = false
  const styles = interpretedSheet.extend(preflightSheet, APPEND).build(MINIFY)

  return styles
}
```

### Setup with compile mode

Compile mode requires a bit more leg work to swap out the compiled classnames for the current ones.

Read more about compile mode [here](/posts/modes.html).

```js
const { Processor } = require('windicss/lib')
const { HTMLParser } = require('windicss/utils/parser')

export function generateStyles(html) {
  // Get windi processor
  const processor = new Processor()

  // Parse html to get array of class matches with location
  const parser = new HTMLParser(html)

  // Generate preflight based on the html we input
  const preflightSheet = processor.preflight(html)

  const PREFIX = 'windi-'
  const outputCSS = []
  let outputHTML = ''
  let indexStart = 0

  parser.parseClasses().forEach((p) => {
    // add HTML substring from index to match start
    outputHTML += html.substring(indexStart, p.start)

    // generate stylesheet
    const style = processor.compile(p.result, PREFIX)

    // add the styleSheet to the styles stack
    outputCSS.push(style.styleSheet)

    // append ignored classes and push to output
    outputHTML += [style.className, ...style.ignored].join(' ')

    // mark the end as our new start for next itteration
    indexStart = p.end
  })

  // append the remainder of html
  outputHTML += html.substring(indexStart)

  // Build styles
  const MINIFY = false
  const styles = outputCSS
    // extend the preflight sheet with each sheet from the stack
    .reduce((acc, curr) => acc.extend(curr), preflightSheet)
    .build(MINIFY)

  return {
    styles,
    outputHTML,
  }
}
```

### Setup with attributify mode

Attributify mode requires a bit more leg work to parse each individual attribute.

Read more about attributify mode [here](/posts/v30.html#attributify-mode)
And you can find the syntax [here](/posts/attributify.html)

```js
const { Processor } = require('windicss/lib')
const { HTMLParser } = require('windicss/utils/parser')

export function generateStyles(html) {
  // Get windi processor
  const processor = new Processor()

  // Parse html to get array of class matches with location
  const parser = new HTMLParser(html)

  // Generate preflight based on the html we input
  const preflightSheet = processor.preflight(html)

  // Always returns array
  const castArray = val => (Array.isArray(val) ? val : [val])

  const attrs = parser.parseAttrs().reduceRight((acc, curr) => {
    // get current match key
    const attrKey = curr.key

    // ignore class or className attributes
    if (attrKey === 'class' || attrKey === 'className') return acc

    // get current match value as array
    const attrValue = castArray(curr.value)

    // if current match key is already in accumulator
    if (attrKey in acc) {
      // get current attr key value as array
      const attrKeyValue = castArray(acc[attrKey])

      // append current value to accumulator value
      acc[attrKey] = [...attrKeyValue, ...attrValue]
    } else {
      // else add atrribute value array to accumulator
      acc[attrKey] = attrValue
    }

    return acc
  }, {})

  // Build styles
  const MINIFY = false
  const styles = processor
    .attributify(attrs)
    .styleSheet.extend(preflightSheet)
    .build(MINIFY)

  return styles
}
```
