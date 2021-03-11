[windi css]: https://github.com/windicss/windicss
[tailwind css]: https://tailwindcss.com/docs
[svelte]: /guide/svelte.html#additional-features-in-svelte-⚡%EF%B8%8F

# New in Windi CSS

Discover new features in [Windi CSS], in addition to all the great utilities in [Tailwind CSS].

## 🎳 Utility Groups

You can apply several utilities for the same variant by grouping them with parenthesis.

```html
<div class="bg-white font-light sm:hover:(bg-gray-100 font-medium)"/>
```

## 🖥 Screen Utilities

You can use `+` and `-` screen utilities, even for your custom screen sizes.

```css
sm: @media (min-width:640px);
+sm: @media (min-width:640px) and (max-width:768px);
-sm: @media (max-width:640px);
```

## 🌓 More States and Light/Dark theme support

[Windi CSS] supports all CSS [pseudo elements and pseudo classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

Also, it adds `@dark` and `@light` classes based on `prefers-color-scheme`.

## 🤖 Auto-Inferred Variables and Variants

Since [Windi CSS] will only generate the CSS utilities you use, it's no longer necessary to configure custom variables like numbers, sizes, scores, and colors.

[Windi CSS] will automatically detect utilities, and generate them based on the appropriate semantics.

You can even pass in variable names, which is very useful in combination with css variables.

### Numbers

```css
p-${float[0,...infinite]} -> padding: ${float/4}rem;

p-2.5 -> padding: 0.625rem;
p-3.2 -> padding: 0.8rem;
```

### Sizes

```css
// ${size} must end up with rem|em|px|vh|vw|ch|ex
p-${size} -> padding: ${size};

p-3px -> padding: 3px;
p-4rem -> padding: 4rem;
```

### Fractions

```css
w-${fraction} -> width: ${fraction -> precent};

w-9/12 -> width: 75%;
```

### Colors

```css
bg-${color} -> background-color: rgba(...);

bg-gray-300 -> background-color: rgba(209, 213, 219, var(--tw-bg-opacity);

bg-hex-${hex} -> background-color: rgba(...);

bg-hex-1c1c1e -> background-color: rgba(28, 28, 30, var(--tw-bg-opacity));
```

### Variables

```css
bg-$${variableName}

.bg-$test-variable {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--test-variable), var(--tw-bg-opacity));
}
```

::: tip How does it work? 🤔
Learn more about what makes this possible in the [Modes page](/guide/modes)
:::

## And more!

<kbd>[svelte-windicss-preprocess][svelte]</kbd> adds [additional features][svelte].
