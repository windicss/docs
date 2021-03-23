# @windicss/plugin-interaction-variants

Add some missing interaction state variants. This plugin is modified based on [tailwindcss-interaction-variants](https://github.com/benface/tailwindcss-interaction-variants) to adapt to Windi CSS.

## Installation

```bash
npm install --save-dev @windicss/plugin-interaction-variants
```

## Usage

```js
// windi.config.js
module.exports = {
  theme: {
    backgroundColor: {
      black: 'black',
    },
  },
  variants: {
    backgroundColor: ['group-focus-within', 'group-focus-visible', 'group-active', 'group-visited', 'group-disabled', 'hocus', 'group-hocus', 'can-hover', 'no-hover'],
  },
  plugins: [
    require('@windicss/plugin-interaction-variants'),
  ],
}
```

The above configuration would generate the following CSS:

```css
.bg-black {
  background-color: black;
}

.group:focus-within .group-focus-within\:bg-black {
  background-color: black;
}

.group:focus-visible .group-focus-visible\:bg-black {
  background-color: black;
}

.group:active .group-active\:bg-black {
  background-color: black;
}

.group:visited .group-visited\:bg-black {
  background-color: black;
}

.group:disabled .group-disabled\:bg-black {
  background-color: black;
}

.hocus\:bg-black:hover, .hocus\:bg-black:focus {
  background-color: black;
}

.group:hover .group-hocus\:bg-black, .group:focus .group-hocus\:bg-black {
  background-color: black;
}

@media (hover: hover) {
  .can-hover\:bg-black {
    background-color: black;
  }
}

@media (hover: none) {
  .no-hover\:bg-black {
    background-color: black;
  }
}
```