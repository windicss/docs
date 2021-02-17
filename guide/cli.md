# Command Line Interface ⌨️

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
- Compile to Tailwind CSS
```bash
windicss './**/*.html' -to tailwind.css
windicss './**/*.html' -mto tailwind.min.css
```
- Transform Tailwind CSS to normal css file
```bash
windicss './**/*.html' -cto windi.css
windicss './**/*.html' -ts
windicss './**/*.html' -cts
```
