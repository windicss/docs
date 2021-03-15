# Transitions and Animations

## Transition Property

Utilities for controlling which CSS properties transition.

| Class | Properties |
| :---- | :--------- |
| transition-none | transition-property: none; |
| transition-all | transition-property: all;<br>transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);<br>transition-duration: 150ms; |
| transition | transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;<br>transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);<br>transition-duration: 150ms; |
| transition-colors | transition-property: background-color, border-color, color, fill, stroke;<br>transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);<br>transition-duration: 150ms; |
| transition-opacity | transition-property: opacity;<br>transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);<br>transition-duration: 150ms; |
| transition-shadow | transition-property: box-shadow;<br>transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);<br>transition-duration: 150ms; |
| transition-transform | transition-property: transform;<br>transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);<br>transition-duration: 150ms; |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
}
```

## Transition Duration

Utilities for controlling the duration of CSS transitions.

| Class | Properties |
| :---- | :--------- |
| `duration-${int}` | transition-duration: `${int}ms;` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      transitionDuration: {
        zero: '0ms',
        long: '2000ms',
      },
    },
  },
}
```

## Transition Timing Function

Utilities for controlling the easing of CSS transitions.

| Class | Properties |
| :---- | :--------- |
| ease-linear | transition-timing-function: linear; |
| ease-in | transition-timing-function: cubic-bezier(0.4, 0, 1, 1); |
| ease-out | transition-timing-function: cubic-bezier(0, 0, 0.2, 1); |
| ease-in-out | transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
}
```

## Transition Delay

Utilities for controlling the delay of CSS transitions.

| Class | Properties |
| :---- | :--------- |
| `delay-${int}` | transition-delay: `${int}ms;` |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      transitionDelay: {
        zero: '0ms',
        long: '2000ms',
      },
    },
  },
}
```

## Animation

Utilities for animating elements with CSS animations.

| Class | Properties |
| :---- | :--------- |
| .animate-none | animation: none; |
| .animate-spin | animation: spin 1s linear infinite;<br><br>@keyframes spin {<br>  from {<br>    transform: rotate(0deg);<br>  }<br>  to {<br>    transform: rotate(360deg);<br>  }<br>} |
| .animate-ping | animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;<br><br>@keyframes ping {<br>  75%, 100% {<br>    transform: scale(2);<br>    opacity: 0;<br>  }<br>} |
| .animate-pulse | animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;<br><br>@keyframes pulse {<br>  0%, 100% {<br>    opacity: 1;<br>  }<br>  50% {<br>    opacity: .5;<br>  }<br>} |
| .animate-bounce | animation: bounce 1s infinite;<br><br>@keyframes bounce {<br>  0%, 100% {<br>    transform: translateY(-25%);<br>    animationTimingFunction: cubic-bezier(0.8, 0, 1, 1);<br>  }<br>  50% {<br>    transform: translateY(0);<br>    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);<br>  }<br>} |

### Customizing

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
```

To add new animation @keyframes, use the keyframes section of your theme configuration:

```js
// windi.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
}
```
