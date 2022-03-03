# Visual Analyzer

<PackageInfo name="windicss-analysis" author="antfu" />

A visual analyser tool for [Windi CSS](https://github.com/windicss/windicss). Browse your utility usages, get an overview of your design system, identify "bad practices", and more!

<img src="https://user-images.githubusercontent.com/11247099/113150805-0c43f880-9267-11eb-85a6-ec1a2f1eed37.png" />

## Get Started

Run the following command in your project root

```bash
npx windicss-analysis
```

The analysis report will be available at `http://localhost:8113/`

### NPM

Or you can install it locally to use the same version as your local `windicss` module

```bash
npm i -D windicss-analysis
```

```json5 package.json
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

You can preview the report of the analyser itself at
[analysis-demo.windicss.org](http://analysis-demo.windicss.org)

You can generate your own report and host it statically by running the following command:

```bash
npx windicss-analysis --html dist
```

## FAQ

### It does not detect my files

You will need to explicitly configure the `extract.include` option in `windi.config.js` instead of your framework's configuration file so it can be understood by the analyzer. For example:

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

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

Yes. You can get the raw JSON file via the CLI

```bash
npx windicss-analysis --json report.json
```

and process it as you need.

You can also have type support for it via:

```ts
import rawReport from './report.json'
import type { AnalysisReport } from 'windicss-analysis'

const report = rawReport as AnalysisReport
```

### Can I use Windi CSS programmatically?

Yes, just like a normal Node package:

```ts
import { startServer } from 'windicss-analysis'

startServer({ /* ... */ })
```

Check out the type declarations to see available APIs.
