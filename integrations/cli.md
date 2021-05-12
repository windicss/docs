<Logo name="windi" class="logo-float-xl"/>

# Windi CSS CLI

<PackageInfo name="windicss" author="voorjaar" />

## Install

Add the package:

```bash
npm i -g windicss
```

## Usage

#### Print Help Message

```bash
windicss --help  // windicss -h
```

should print the help message like bellow.

```bash
Generate css from text files that containing windi classes.
By default, it will use interpretation mode to generate a single css file.

Usage:
  windicss [filenames]
  windicss [filenames] -c -m
  windicss [filenames] -c -s -m
  windicss [filenames] [-c | -i] [-a] [-b | -s] [-m] [-p <prefix:string>] [-o <path:string>] [--args arguments]

Options:
  -h, --help            Print this help message and exit.
  -v, --version         Print windicss current version and exit.

  -i, --interpret       Interpretation mode, generate class selectors. This is the default behavior.
  -c, --compile         Compilation mode, combine the class name in each row into a single class.
  -a, --attributify     Attributify mode, generate attribute selectors. Attributify mode can be mixed with the other two modes.
  -t, --preflight       Add preflights, default is false.

  -b, --combine         Combine all css into one single file. This is the default behavior.
  -s, --separate        Generate a separate css file for each input file.

  -m, --minify          Generate minimized css file.
  -p, --prefix PREFIX   Set the css class name prefix, only valid in compilation mode. The default prefix is 'windi-'.
  -o, --output PATH     Set output css file path.
  -f, --config PATH     Set config file path.

  --init PATH           Start a new project on the path.
```

#### Initial A Test Project

```bash
windicss --init <project>  // windicss --init .
windicss --init <project> --compile  // windicss --init hello_world --compile
```

#### Compile CSS File

1. generate normal css

```bash
windicss './**/*.html'
windicss './**/*.html' -to windi.css
windicss './test.html' -to windi.css
windicss './test.html' --preflight --output windi.css

```

2. minimize build

```bash
windicss './**/*.html' -mto windi.min.css
windicss './**/*.html' -to windi.css --minify
```

3. using compiliation mode

```bash
windicss './**/*.html' -cto windi.css
windicss './**/*.html' -ctom windi.min.css
windicss './**/*.html' -cto windi.css --minify
windicss './test.html' --compile --preflight --output windi.css
```

4. using attributify mode

You can combine attributify mode with interpretation mode or compilation mode. 

```bash
windicss './**/*.html' -ato windi.css
windicss './**/*.html' -atom windi.min.css
windicss './**/*.html' -ato windi.css --minify
windicss './test.html' --attributify --preflight --output windi.css
windicss './test.html' --attributify --compile --preflight --output windi.css
```

5. pass a config file

```bash
windicss './**/*.html' -to windi.css --config windi.config.js
```
