<Logo name="windi" class="logo-float-xl"/>

# Windi CSS CLI

> TODO: rewrite

You can install the CLI by running:

```bash
npm i -g windicss
```

- Learn how to use it
```bash
windicss --help
```
- Initialize a simple html project
```bash
windicss --init <project>
windicss --init <project> --compile
```
- Compile to CSS
```bash
windicss './**/*.html' -to windi.css
windicss './**/*.html' -mto windi.min.css
```
- Transform CSS to normal css file
```bash
windicss './**/*.html' -cto windi.css
windicss './**/*.html' -ts
windicss './**/*.html' -cts
```
