# Transforms

## Transform Type

Utilities for controlling transform behaviour.

<PlaygroundWithVariants
  variant=''
  :variants="['', 'gpu', 'none']"
  prefix='transform'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='!rotate-180 w-24 h-24'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 {class} !rotate-180"&gt;'
/>

## Transform Origin

Utilities for specifying the origin for an element's transformations.

<PlaygroundWithVariants
  variant='center'
  :variants="['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left']"
  prefix='origin'
  fixed='p-2 dark:text-white opacity-85 w-full h-screen'
  nested=true
  appended='mx-auto transform rotate-90 w-16 h-16 bg-teal-300 rounded-full'
  html='&lt;div class="mx-auto w-16 h-16 bg-teal-300 rounded-full"&gt;
      &lt;img class="h-16 w-16 {class} transform rotate-90" src="/assets/logo.svg"&gt;
    &lt;/div&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      transformOrigin: {
        24: '6rem',
        full: '100%',
      },
    },
  },
}
```

</Customizing>

## Transform Scale

Utilities for scaling elements with transform.

<PlaygroundWithVariants
  variant='90'
  :variants="['0', '25', '50', '75', '90', '95', '100', '105', '110', '125', '150']"
  prefix='scale'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

#### Scale X

<PlaygroundWithVariants
  variant='90'
  :variants="['0', '25', '50', '75', '90', '95', '100', '105', '110', '125', '150']"
  prefix='scale-x'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

#### Scale Y

<PlaygroundWithVariants
  variant='90'
  :variants="['0', '25', '50', '75', '90', '95', '100', '105', '110', '125', '150']"
  prefix='scale-y'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    scale: {
      half: '.5',
      full: '1',
    },
  },
}
```

</Customizing>

## Transform Rotate

Utilities for rotating elements with transform.

<PlaygroundWithVariants
  variant='90'
  :variants="['0', '6', '12', '45', '72.5', '90', '180', '-180', '-90', '-72.5', '-45', '-12', '-6']"
  prefix='rotate'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    rotate: {
      sq: '90deg',
    },
  },
}
```

</Customizing>

## Transform Translate

Utilities for translating elements with transform.

### Translate X

<PlaygroundWithVariants
  variant='0'
  :variants="['0', 'px', 'full', '6', '12', '7.5', '1/2', '2/3', '3/4', '3/5', '3.5rem', '42px', '6em', '-px', '-full', '-6', '-12', '-7.5', '-1/2', '-2/3', '-3/4', '-3/5', '-3.5rem', '-42px']"
  prefix='translate-x'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

### Translate Y

<PlaygroundWithVariants
  variant='0'
  :variants="['0', 'px', 'full', '6', '12', '7.5', '1/2', '2/3', '3/4', '3/5', '3.5rem', '42px', '6em', '-px', '-full', '-6', '-12', '-7.5', '-1/2', '-2/3', '-3/4', '-3/5', '-3.5rem', '-42px']"
  prefix='translate-y'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

<Customizing>

You can customize the global spacing scale in the theme.spacing or theme.extend.spacing sections of your windi.config.js file:

```js
// windi.config.js
export default {
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
    },
  },
}
```

To customize the translate scale separately, use the theme.translate section of your windi.config.js file.

```js
// windi.config.js
export default {
  theme: {
    extend: {
      translate: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
}
```

</Customizing>

## Transform Skew

Utilities for skewing elements with transform.

### Skew X

<PlaygroundWithVariants
  variant='45'
  :variants="['0', '6', '12', '45', '72.5', '90', '180', '-180', '-90', '-72.5', '-45', '-12', '-6']"
  prefix='skew-x'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

### Skew Y

<PlaygroundWithVariants
  variant='45'
  :variants="['0', '6', '12', '45', '72.5', '90', '180', '-180', '-90', '-72.5', '-45', '-12', '-6']"
  prefix='skew-y'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='w-24 h-24 transform'
  html='&lt;img src="/assets/logo.svg" class="w-24 h-24 transform {class}"&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      skew: {
        sq: '90deg',
      },
    },
  },
}
```

</Customizing>
