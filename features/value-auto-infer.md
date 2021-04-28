# Value Auto-infer

Since Windi CSS will only generate the CSS utilities you use, it enables the possibility to use arbitrary value in your classes and generate coresponding styles based on the appropriate semantics.

```html
<!-- sizes and positions -->
<div class="p-5px mt-[0.3px]"></div>

<!-- colors -->
<button class="bg-hex-b2a8bb"></button>
<button class="bg-[#b2a8bb]"></button>
<button class="bg-[hsl(211.7,81.9%,69.6%)]"></button>

<!-- gird template -->
<div class="grid-cols-[auto,1fr,30px]"></div>
```

This is useful when you want to opt-out your design system and have some fine-grain controls over some specific components. Both direct `p-5px` and explicitly escaping `p-[5px]` are supported.

We also provided [an visual analyser](/features/analyzer) to give you an overview of all the utilities usages in your project and spot unwanted value escaping of your design system with ease. 

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

## Grid Templates

```css
grid-cols-[auto,1fr,30px]
```

<InlinePlayground 
  :input="'grid-cols-[auto,1fr,30px]'" 
  :showCSS="true" 
  :showPreview="false"
/>
