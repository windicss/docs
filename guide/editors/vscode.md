# Windi CSS Intellisense for VS Code

[windicss-intellisense](https://github.com/windicss/windicss-intellisense)

Windi CSS IntelliSense enhances the Windi development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, code folding, and building.

## Installation

**[Install via the Visual Studio Code Marketplace →](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense)**

**[Install via the Open VSX Registry →](https://open-vsx.org/extension/voorjaar/windicss-intellisense)**

This plugin packs a windicss compiler, so you can use it without installing windicss, and it also supports the configuration file `(tailwind|windi).config.(js|cjs|ts)`.

## Features

### Autocomplete

Intelligent suggestions for utilities and variants.

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/completion.png" alt="Auto Complete"/>

### Hover Preview

See the complete CSS for a class name by hovering over it.

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/hover.png" alt="Hover Preview"/>

### Syntax Highlighting

Highlight utilities, variants and importants.

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/highlight.png" alt="Syntax Highlighting"/>

### Color Preview

Preview color and spectrum.

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/color.png" alt="Color Preview"/>

### Code Folding

Fold overly long classes to increase readability.

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/highlight.png" alt="Code Folding"/>

### Compile Commands

Built-in commands, one-key operation.

<img src="https://raw.githubusercontent.com/windicss/windicss-intellisense/main/screenshots/commands.png" alt="Compile Commands"/>

## Extension Settings

| Settings                           | type    | default  | description                                                  |
| :--------------------------------- | :------ | :------- | :----------------------------------------------------------- |
| `windicss.enableColorDecorators`   | boolean | true     | Enable Color Decorators.                                     |
| `windicss.enableHoverPreview`      | boolean | true     | Enable hover className to show preview of CSS.               |
| `windicss.enableCodeCompletion`    | boolean | true     | Enable/Disable all code completions.                         |
| `windicss.enableUtilityCompletion` | boolean | true     | Enable Utility Completion.                                   |
| `windicss.enableVariantCompletion` | boolean | true     | Enable Variant Completion.                                   |
| `windicss.enableDynamicCompletion` | boolean | true     | Enable Dynamic Utilities Completion like p-${int}.           |
| `windicss.enableRemToPxPreview`    | boolean | true     | Enable Rem to Px Preview.                                    |
| `windicss.enableCodeFolding`       | boolean | true     | Enable ClassNames Code Folding.                              |
| `windicss.foldByLength`            | boolean | false    | Folding code by length. Default option is false, will fold by utility count. |
| `windicss.foldCount`               | number  | 3        | Used by foldByCount.                                         |
| `windicss.foldLength`              | number  | 25       | Used by foldByLength                                         |
| `windicss.hiddenText`              | string  | ` ...`   | Placeholder used when folding code.                          |
| `windicss.hiddenTextColor`         | string  | \#AED0A4 | Placeholder Color.                                           |
| `windicss.sortOnSave`              | boolean | false    | Runs class sorting on file save.                             |

## For more information

* [Windi CSS](https://github.com/windicss/windicss)
* [Documentation](https://windicss.org)
* [Discussions](https://github.com/windicss/windicss/discussions)
* [Issues](https://github.com/windicss/windicss-intellisense/issues)
