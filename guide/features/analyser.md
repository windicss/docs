# Visual Analyser

<PackageInfo name="windicss-analysis" author="antfu" />

An visual analyser tool for [Windi CSS](https://github.com/windicss/windicss). Browse your utilities usages, have an overview of your design system, identify "bad practices", and more!

<img src="https://user-images.githubusercontent.com/11247099/113150805-0c43f880-9267-11eb-85a6-ec1a2f1eed37.png" />

## Get Started

Run the following command under your project root

```bash
npx windicss-analysis
```

The analysis report will be available at http://localhost:8113/

### NPM

Or you can install locally to reuse the same version of your local `windicss` module

```bash
npm i -D windicss-analysis
```

```jsonc
// package.json
{
  "scripts": {
    "analysis": "windicss-analysis"
  }
}
```

### VS Code Extension

From v0.8.0 of [Windi CSS Intellisense](https://github.com/windicss/windicss-intellisense), it has this analyser built-in.

- Open a project using Windi CSS in VS Code
- Open the Command Palette (⇧⌘P / Ctrl+Shift+P)
- Run command: `Windi CSS: Run & Open Analysis`
- See Analyser in the second editor column

### Online Preview

You can have a preview the analysing report of the analyser itself

[analysis-demo.windicss.org](http://analysis-demo.windicss.org)

You can genreate your own report and host it statically by running the following command

```bash
npx windicss-analysis --html dist
```

## FAQ

### It does not detecting my files

You will need to configure the `extract.include` options in `windi.config.js` instead of your framework's configurations file so it can be understood by the analyzer so as other intergations support. For example

```ts
// windi.config.js
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{vue,jsx,tsx,svelte}',
      'shared/**/*.{vue,ts}',
    ],
  },
})
```

### Can I use the report for other tools?

Yes. You can get the raw json file via the CLI

```bash
npx windicss-analysis --json report.json
```

and process it as you need.

You can also have type support for it via:

```ts
import type { AnalysisReport } from 'windicss-analysis'
import rawReport from './report.json'

const report = rawReport as AnalysisReport
```

### Programmatic Use?

Yes. Just like a normal Node package:

```ts
import { startServer } from 'windicss-analysis'

startServer({ /* ... */ })
```

Check out the type decrations for more APIs avaliable.
