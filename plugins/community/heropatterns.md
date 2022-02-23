# @windicss/plugin-heropatterns

Streamlined integration between windicss and heropatterns. This plugin is modified based on [tailwind-heropatterns](https://github.com/AndreaMinato/tailwind-heropatterns) to adapt to Windi CSS.

## Installation

Add this plugin to your project:

```bash
npm install --save-dev @windicss/plugin-heropatterns
```

## Usage

The heropatterns plugin exposes some options to configure the generated classes. Here is the example for adding it to your project plugins

```js
require('@windicss/plugin-heropatterns')({
  // the list of patterns you want to generate a class for
  // the names must be in kebab-case
  // an empty array will generate all 87 patterns
  patterns: ['polka-dots', 'signal'],

  // The foreground colors of the pattern
  colors: {
    'default': '#9C92AC',
    'blue-dark': '#000044', // also works with rgb(0,0,205)
  },

  // The foreground opacity
  opacity: {
    default: '0.4',
    100: '1.0',
  },
})
```

This configuration would create the following classes:

```css
.bg-hero-polka-dots-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='1.0' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%239C92AC' fill-opacity='1.0' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.bg-hero-polka-dots-blue-dark-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000044' fill-opacity='1.0' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal-blue-dark-100 {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%23000044' fill-opacity='1.0' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.bg-hero-polka-dots {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.bg-hero-polka-dots-blue-dark {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000044' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-hero-signal-blue-dark {
  background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='...' fill='%23000044' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
}
```

As you can see when you use the `default` key for colors or opacity it is omitted in the class name.

So the following configuration:

```js
require('@windicss/plugin-heropatterns')({
  patterns: ['polka-dots', 'signal'],
  colors: {
    default: '#9C92AC',
  },
  opacity: {
    default: '0.4',
  },
})
```

Will generate only the following classes

```css
.bg-hero-polka-dots {
  /**/
}
.bg-hero-signal {
  /**/
}
```

## Defaults

The default configuration is the following.
And it will generate all the patterns with the default color of [heropatterns.com](https://www.heropatterns.com/)

```js
config = {
  patterns: [],
  colors: {
    default: '#9C92AC',
  },
  opacity: {
    default: 0.4,
  },
}
```

## Pattern names list

1. anchors-away
1. architect
1. autumn
1. aztec
1. bamboo
1. bank-note
1. bathroom-floor
1. bevel-circle
1. boxes
1. brick-wall
1. bubbles
1. cage
1. charlie-brown
1. church-on-sunday
1. circles-squares
1. circuit-board
1. connections
1. cork-screw
1. current
1. curtain
1. cutout
1. death-star
1. diagonal-lines
1. diagonal-stripes
1. dominos
1. endless-clouds
1. eyes
1. falling-triangles
1. fancy-rectangles
1. flipped-diamonds
1. floating-cogs
1. floor-tile
1. formal-invitation
1. four-point-stars
1. glamorous
1. graph-paper
1. groovy
1. happy-intersection
1. heavy-rain
1. hexagons
1. hideout
1. houndstooth
1. i-like-food
1. intersecting-circles
1. jigsaw
1. jupiter
1. kiwi
1. leaf
1. lines-in-motion
1. lips
1. lisbon
1. melt
1. moroccan
1. morphing-diamonds
1. overcast
1. overlapping-circles
1. overlapping-diamonds
1. overlapping-hexagons
1. parkay-floor
1. piano-man
1. pie-factory
1. pixel-dots
1. plus
1. polka-dots
1. rails
1. rain
1. random-shapes
1. rounded-plus-connected
1. signal
1. skulls
1. slanted-stars
1. squares
1. squares-in-squares
1. stamp-collection
1. steel-beams
1. stripes
1. temple
1. texture
1. tic-tac-toe
1. tiny-checkers
1. topography
1. volcano-lamp
1. wallpaper
1. wiggle
1. x-equals
1. yyy
1. zig-zag
