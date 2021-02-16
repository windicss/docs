# Auto-Inferred Variables and Variants

No need to configure custom variables like numbers, sizes, scores, and colors.

Windi CSS will automatically generate them based on the class semantics.

You can even pass in variable names, which is very useful in combination with css variables.

## Numbers

```js
p-${float[0,...infinite]} -> padding: ${float/4}rem

p-2.5 -> padding: 0.625rem;
p-3.2 -> padding: 0.8rem;
```

## Sizes

```js
// ${size} must end up with rem|em|px|vh|vw|ch|ex
p-${size} -> padding: ${size}

p-3px -> padding: 3px;
p-4rem -> padding: 4rem;
```

## Fractions
```js
w-${fraction} -> width: ${fraction -> precent}

w-9/12 -> width: 75%;
```

## Colors
```js
bg-${color} -> background-color: rgba(...)

bg-gray-300 -> background-color: rgba(209, 213, 219, var(--tw-bg-opacity);

bg-hex-${hex} -> background-color: rgba(...)

bg-hex-1c1c1e -> background-color: rgba(28, 28, 30, var(--tw-bg-opacity));
```

## Variables
```js
bg-$${variableName}

.bg-$test-variable {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--test-variable), var(--tw-bg-opacity));
}
```
