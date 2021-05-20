<Logo name="windi" class="logo-float-xl"/>

# Windi CSS CLI

<PackageInfo name="windicss" author="voorjaar" />

## Install

Add the package:

```bash
npm i -g windicss
```

## Usage

### Print Help Message

```bash
windicss --help  // windicss -h
```

should print the help message like bellow.

```bash
Generate css from text files that containing windi classes.
By default, it will use interpretation mode to generate a single css file.

Usage:
  windicss [filenames]
  windicss [filenames] -c -m -d
  windicss [filenames] -c -s -m -d
  windicss [filenames] [-c | -i] [-a] [-b | -s] [-m] [-d] [-p <prefix:string>] [-o <path:string>] [--args arguments]

Options:
  -h, --help            Print this help message and exit.
  -v, --version         Print windicss current version and exit.

  -i, --interpret       Interpretation mode, generate class selectors. This is the default behavior.
  -c, --compile         Compilation mode, combine the class name in each row into a single class.
  -a, --attributify     Attributify mode, generate attribute selectors. Attributify mode can be mixed with the other two modes.
  -t, --preflight       Add preflights, default is false.

  -b, --combine         Combine all css into one single file. This is the default behavior.
  -s, --separate        Generate a separate css file for each input file.

  -d, --dev             Enable hot reload and watch mode.
  -m, --minify          Generate minimized css file.
  -z, --fuzzy           Enable fuzzy match, only works in interpration mode.
  -p, --prefix PREFIX   Set the css class name prefix, only valid in compilation mode. The default prefix is 'windi-'.
  -o, --output PATH     Set output css file path.
  -f, --config PATH     Set config file path.

  --style               Parse and transform windi style block.
  --init PATH           Start a new project on the path.
```

### Initial Test Project

```bash
windicss --init <project>  // windicss --init .
windicss --init <project> --compile  // windicss --init hello_world --compile
```

### File Names

The `[filenames]` parameter can include filepaths and glob patterns(powerd by [node-glob](https://github.com/isaacs/node-glob)).

```base
windicss './hello.html' './world.html'
windicss './**/*.html'
windicss './src/**/*.html'
windicss './hello.html' './world.html', './src/**/*.svelte'
...
```

### Compile CSS File

#### Generate normal css

Use the `-o` parameter to specify the name of the generated css file, and the `-t` parameter to specify whether to add preflight (basestyles).

```bash
windicss './**/*.html'
windicss './**/*.html' -to windi.css
windicss './test.html' -to windi.css
windicss './test.html' --preflight --output windi.css

```

#### Minimize build

Use `-m` or `--minify` to generate minimized css file. This parameter is mostly used for build time.

```bash
windicss './**/*.html' -mto windi.min.css
windicss './**/*.html' -to windi.css --minify
```

#### Using compiliation mode

Compiliation mode will combine all windi utilities into a new class, which you can specify with `-p` or `--prefix`

```bash
windicss './**/*.html' -cto windi.css
windicss './**/*.html' -ctom windi.min.css
windicss './**/*.html' -cto windi.css --minify
windicss './**/*.html' -cto windi.css --minify --prefix 'tw-'
windicss './test.html' --compile --preflight --output windi.css
```

Give an example

```html
<div class="windi-15wa4me">
  <img class="windi-1q7lotv" src="/img/erin-lindford.jpg" alt="Woman's Face">
  <div class="windi-7831z4">
    <div class="windi-x3f008">
      <p class="windi-2lluw6">
        Erin Lindford
      </p>
      <p class="windi-1caa1b7">
        Product Engineer
      </p>
    </div>
    <button class="windi-d2pog2">Message</button>
  </div>
</div>
```

#### Using attributify mode

You can combine attributify mode with interpretation mode or compilation mode. 

```bash
windicss './**/*.html' -ato windi.css
windicss './**/*.html' -atom windi.min.css
windicss './**/*.html' -ato windi.css --minify
windicss './test.html' --attributify --preflight --output windi.css
windicss './test.html' --attributify --compile --preflight --output windi.css
```

Give an example

```html
<button 
	bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```

#### Pass a config file

Pass a configuration file with the `-f` or `--config` parameter, currently only js configuration files are supported.

```bash
windicss './**/*.html' -to windi.css --config windi.config.js
```

Give an example

```js
// windi.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: '#1c1c1e',
      },
      // ...
    },
  },
}
```

#### Dev mode

Development mode will turn on hot reloading and will watch your file changes to update your css file in real time.

```bash
windicss './**/*.html' -to windi.css --dev
```

> Note: For better hotloading experience (~5ms) we don't remove built css at development time, so you are expected to rebuild it once at release time using the minimize command to get the best experience for both development and build. Such as `windicss './**/*.html' -mto windi.css`

#### Fuzzy mode

By default windi matches class/className='...' in the incoming files, if your file type doesn't match, you can turn this option on. It will match all possible windi utilities contained in the file

```bash
windicss './**/*.html' -to windi.css --dev --fuzzy
```

You can also configure `extractors` for specific file types

```js
// windi.config.js
module.exports = {
  // ...
  extract: {
    extractors: [
      {
        extractor: (content) => {
          return { classes: content.match(/(?<=class:)[!@\w-]+/g) ?? [] }
        },
        extensions: ['svelte'],
      },
    ],
  },
  // ...
}
```

#### Style block

To enable style block, you need to use `--style` arg.

```bash
windicss './**/*.html' -to windi.css --dev --style
```

Define style block like this: 

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cli</title>
  <link rel="stylesheet" href="windi.css">
  <style lang='windi'>
    .btn-blue {
      @apply bg-blue-500 hover:bg-blue-700 text-white;
      padding-top: 1rem;
    }
  </style>
</head>
```