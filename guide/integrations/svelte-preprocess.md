[utility groups]: /guide/features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[migration]: /guide/migration

# Integration for Svelte (preprocessor)

<kbd>[svelte-windicss-preprocess]</kbd> provides simple integration for Windi CSS using [svelte.preprocess](https://svelte.dev/docs#svelte_preprocess) API.

## Installation

Add the package:

```bash
npm i -D svelte-windicss-preprocess
```

> If migrating from Tailwind CSS, also check out the [_Migration_ section][migration]

## Configuration

Add <kbd>[svelte-windicss-preprocess]</kbd> to your bundler configuration.

### Vanilla Svelte



### Setup VSCode Extension

If you are using `Svelte for VS Code` vscode extension, I believe most people are using it. You will need to add `"vetur.validation.style": false` to your configuration file.

Hit `ctrl-shift-p` or `cmd-shift-p` on mac, type open settings, and select `Preferences: Open Settings (JSON)`. Add `"vetur.validation.style": false` to `settings.json` then save it.

Then you will need to tell svelte-vscode to **restart the svelte language server** in order to pick up a new configuration.

Hit `ctrl-shift-p` or `cmd-shift-p` on mac, type svelte restart, and select `Svelte: Restart Language Server`. Any errors you were seeing should now go away and you're now all set up!


## Additional Features in Svelte  ⚡️

<kbd>[svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess)</kbd> also supports the following features:

### Variant Attributes

You can apply several utilities for the same variant by using HTML attributes.

```html
<div sm="bg-white font-bold" hover="bg-gray-200" dark="bg-gray-900"/>
```

::: tip Mixed Variants
Variants, such as `sm:hover`, are not supported inside attributes. Use [utility groups] instead.
:::
