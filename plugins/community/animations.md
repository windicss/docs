# @windicss/plugin-animations

Add [Animate CSS](https://github.com/animate-css/animate.css) as [Windi CSS](https://github.com/windicss/windicss) plugin to your project. This plugin is modified based on [tailwind-animate.css](https://github.com/bentzibentz/tailwindcss-animate.css) to adapt to Windi CSS.

## Installation

```bash
npm install --save-dev @windicss/plugin-animations
```

## Usage

```js windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    // Other plugins
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
}
```

### Available Animate CSS classes

* .animate-animated
* .animate-infinite
* .animate-delay
* .animate-delay-1s
* .animate-delay-2s
* .animate-delay-3s
* .animate-delay-4s
* .animate-delay-5s
* .animate-fast
* .animate-faster
* .animate-slow
* .animate-slower
* .animate-bounce
* .animate-flash
* .animate-pulse
* .animate-rubberBand
* .animate-shakeY
* .animate-shakeX
* .animate-headShake
* .animate-swing
* .animate-tada
* .animate-wobble
* .animate-jello
* .animate-heartBeat
* .animate-hinge
* .animate-jackInTheBox
* .animate-lightSpeedIn
* .animate-lightSpeedOut
* .animate-flip
* .animate-flipInX
* .animate-flipInY
* .animate-flipOutX
* .animate-flipOutY
* .animate-rotateIn
* .animate-rotateInDownLeft
* .animate-rotateInDownRight
* .animate-rotateInUpLeft
* .animate-rotateInUpRight
* .animate-rotateOut
* .animate-rotateOutDownLeft
* .animate-rotateOutDownRight
* .animate-rotateOutUpLeft
* .animate-rotateOutUpRight
* .animate-rollIn
* .animate-rollOut
* .animate-zoomIn
* .animate-zoomInUp
* .animate-zoomInDown
* .animate-zoomInLeft
* .animate-zoomInRight
* .animate-bounceIn
* .animate-bounceInDown
* .animate-bounceInUp
* .animate-bounceInLeft
* .animate-bounceInRight
* .animate-bounceOut
* .animate-bounceOutDown
* .animate-bounceOutUp
* .animate-bounceOutLeft
* .animate-bounceOutRight
* .animate-slideInDown
* .animate-slideInLeft
* .animate-slideInRight
* .animate-slideInUp
* .animate-slideOutDown
* .animate-slideOutLeft
* .animate-slideOutRight
* .animate-slideOutUp
* .animate-fadeIn
* .animate-fadeInDown
* .animate-fadeInDownBig
* .animate-fadeInLeft
* .animate-fadeInLeftBig
* .animate-fadeInRight
* .animate-fadeInRightBig
* .animate-fadeInUp
* .animate-fadeInUpBig
* .animate-fadeInTopLeft
* .animate-fadeInTopRight
* .animate-fadeInBottomLeft
* .animate-fadeInBottomRight
* .animate-fadeOut
* .animate-fadeOutDown
* .animate-fadeOutDownBig
* .animate-fadeOutLeft
* .animate-fadeOutLeftBig
* .animate-fadeOutRight
* .animate-fadeOutRightBig
* .animate-fadeOutUp
* .animate-fadeOutUpBig
* .animate-fadeOutTopLeft
* .animate-fadeOutTopRight
* .animate-fadeOutBottomLeft
* .animate-fadeOutBottomRight
* .animate-zoomOutDown
* .animate-zoomOutLeft
* .animate-zoomOutRight
* .animate-zoomOut
* .animate-zoomOutUp
* .animate-lightSpeedInRight
* .animate-lightSpeedInLeft
* .animate-lightSpeedOutRight
* .animate-lightSpeedOutLeft
* .animate-backInDown
* .animate-backInUp
* .animate-backInLeft
* .animate-backInRight
* .animate-backOutDown
* .animate-backOutUp
* .animate-backOutLeft
* .animate-backOutRight

## Credits

This package is based on awesome [Animate.css](https://github.com/animate-css/animate.css).
