# Variant Auto-infer

Since Windi CSS will only generate the CSS utilities you use, it's no longer necessary to configure custom variables like numbers, sizes, scores, and colors. It can detect utilities automatically, and generate CSS based on the appropriate semantics.

## Numbers

```less
p-{float} -> padding: {float/4}rem;
```

<InlinePlayground :input="'p-2.5\np-3.2'" :showCSS="true" :showPreview="false"/>

## Sizes

```less
// {size} should be end with rem|em|px|vh|vw|ch|ex
p-{size} -> padding: {size};
```

<InlinePlayground :input="'p-3px\np-4rem'" :showCSS="true" :showPreview="false"/>


## Fractions

```less
w-{fraction} -> width: {fraction -> precent};
```

<InlinePlayground :input="'w-9/12'" :showCSS="true" :showPreview="false"/>


## Colors

```css
text-{color} -> color: rgba(...);

border-hex-{hex} -> background-color: rgba(...);
```

<InlinePlayground 
  :input="'text-cyan-400\nborder-hex-6dd1c7'" 
  :showCSS="true" 
  :showPreview="false"
  fixed="border border-2 px-4 py-2 rounded"
/>

## Variables

You can even pass variable names, which is very useful in combination with css variables.

```css
bg-${variableName}
```

<InlinePlayground 
  :input="'bg-$test-variable'" 
  :showCSS="true" 
  :showPreview="false"
/>
