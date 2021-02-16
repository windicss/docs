### Command Line Interface ⌨️

You can install the CLI by running:

```
npm i -g windicss
```

- Learn how to use it
```
windicss --help
```
- Initialize a simple html project
```
windicss --init <project>
windicss --init <project> --compile
```
- Compile to Tailwind CSS
```
windicss './**/*.html' -to tailwind.css
windicss './**/*.html' -mto tailwind.min.css
```
- Transform Tailwind CSS to normal css file
```
windicss './**/*.html' -cto windi.css
windicss './**/*.html' -ts
windicss './**/*.html' -cts
```
