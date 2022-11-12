# Windi Lang Draft

## **Variables**

```css
@var width = 1px;
@var baseColor = #c6538c;
@var borderDark = rgba(base-color, 0.88);
@var borderWidth = width + 1px;
@var prop = 'color';

.alert {
  border: ${borderWidth + 4px} solid ${borderDark};
  ${prop}: red;
}
```

> In draft v1, we thought about using $ similar to sass. such as `$width: 1px;`, But sass still has a very inelegant `#{}` operator, and when change variable, still need to call with `$` symbol. So finally we decided to enable the above version, inspired by JavaScript template strings.

## **Alias**

```css
*btn: py-2 px-4 font-semibold rounded-lg;
*btn-green: text-white bg-green-500 hover:bg-green-700;

/* Alias is different from shortcuts in that it will not be compiled into any css, alias only defines text replacement based on the current scope. */

.button {
  @apply *btn *btn-green border-gray-200 !important;
}
```

## **Shortcuts**

```css
.btn: py-2 px-4 font-semibold rounded-lg;
.btn-green: btn text-white bg-green-500 hover:bg-green-700;
```

## **Apply**

```css
/* support omit @apply, when only using utilities */
.btn { p-4 rounded bg-green-500 hover:(bg-green-600) }
.container { max-w-60em py-8 }

@apply bg-white; /* global apply, generate .bg-white... */

.mixed {
  @apply max-w-60em py-8;
  border-radius: 50%;
}
```

## **Attributify**

```css
.btn {
  @attr[bg] red-500 opacity-30 lg:red-600;
}

@attr[bg] red-500 opacity-30 lg:red-600; /* global attributify */
```

## **Comments**

```css
support // this is a single line comment
and /* this is multi line comment */
```

## **Nesting**

```css
@screen sm {
  .clearfix {
    display: block;
    zoom: 1;
    &:after {
      content: " ";
      display: block;
      font-size: 0;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}
```

## **AutoEscape**

```css
/* input */
.sm:hover:bg-red-500 {

}
/* output */
.sm\:hover\:bg-red-500 {

}
```

## **Configuration**

```css
/* only works in the scope */
@config local {
  colors: {
    ...
  }
}

/* set global config */
@config global {
  colors: {
    ...
  }
}
```

## **Layer**

```css
@layer base {

}
@layer components {

}
@layer utilities {

}
```

## **Important**

```css
/* input */
@important {
  .clearfix {
    display: block;
    zoom: 1;
  }
}
/* output */
.clearfix {
  display: block !important;
  zoom: 1 !important;
}
```

## **Data Types**

### **boolean**

```css
@var open = True;
@var close = False;
@var none = None;
```

> Refer to python, the initial capital letters are easier to identify.

### **string**

```css
@var color = 'blue';
@var color = "blue";
@var borderValue = `${borderWidth} solid ${borderDark}`; /* template string */
```

### **sizes**

```css
@var size = 1rem;
@var size = 1em;
@var size = 1px;
...
```

### **colors**

```css
@var color = #f2ece4; // #f2ece4
@var color = #b37399aa; // rgba(179, 115, 153, 67%)
@var color = midnightblue; // #191970
@var color = rgb(204, 102, 153); // #c69
@var color = rgba(107, 113, 127, 0.8); // rgba(107, 113, 127, 0.8)
@var color = hsl(228, 7%, 86%); // #dadbdf
@var color = hsla(20, 20%, 85%, 0.7); // rgb(225, 215, 210, 0.7)
```

### **number**

```css
@var width = 2;
@var height = 3.2;
```

### **dictionary**

```css
@var colors = {
  'primary': blue;
  'secondary': green;
}
/* set value */
colors['primary'] = red;
/* get value */
colors['primary'];
```

### **array**

```css
@var colors = [blue, gray, gray-200, 'test,comma'];

/* set value */
colors[2] = red;
colors.push(yellow);
colors.pop(yellow);
```

## **Operators**

`+` `-` `*` `/` `**` `==` `!=` `!` `>` `<` `>=` `<=` `and` `or` `not` `=>` `new` `as` `in` `not in` `.`

```css
// numbers are converted into the same units
@var conversion-1 = 5cm + 10mm; // result is 6cm
@var conversion-2 = 2 - 3cm - 5mm; // result is -1.5cm

// conversion is impossible
@var incompatibleUnits = 2 + 5px - 3cm; // result is 4px

// example with variables
@var base = 5%;
@var filler = base * 2; // result is 10%
@var other = base + filler; // result is 15%
```

Multiplication and division do not convert numbers. It would not be meaningful in most cases - a length multiplied by a length gives an area and css does not support specifying areas. Less will operate on numbers as they are and assign explicitly stated unit type to the result.

```css
@var base = 2cm * 3mm; // result is 6cm
```

You can also do arithmetic on colors:

```css
@var color = #224488 / 2; //results in #112244
@var bg = #112244 + #111; // result is #223355
```

## **Functions**

config()

theme()

range()

...

### **Statements**

Every statement in windi lang begins with `@`.

#### Function

```css
@func pow(base, exponent) {
  @var result = base ** exponent;
  @return result;
}
```

#### Loading

import javascript module

```css
@load 'module1', 'module2', 'module3';
@load { export1 } from "module-name";
@load { export1 , export2 } from "module-name";
@load { export1 , export2 as alias2 , export3 as alias3 } from "module-name";
@load * from "module";
@load * as name from "module";
@load defaultExport from "module";
@load defaultExport, { export1, export2 } from "module-name";
@load defaultExport, * as name from 'module-name';
```

#### Importing

import css files

```css
@import "typo.css";
@import "typo.windi";
@import "src/corners" as c;
@import "src/corners.windi" as c;
```

#### Console

```css
@log 4rem + 3px;
@warn 'warn something';
@error 3rem * 2;
@assert 4 in [1, 2, 4];
```

#### Logic

##### If Statement

```css
@var color = 'blue';

@if color == 'red' {
  .button {
    @apply btn btn-red border-gray-200 !important;
  }
} @elif color == 'green' {
  .button {
    @apply btn btn-green border-gray-200 !important;
  }
} @else {
  .button {
    @apply btn btn-blue border-gray-200 !important;
  }
}
```

##### For Statement

```css
@for color in [red, blue, yellow] {
  .button-${color} {
    background: ${color};
  }
}

@for count, enum_days in enumerate(days, 5) {
  @log count, enum_days;
}
```

##### While Statement

```css
@var i = 3;

@while i > 0 {
  @log i;
  i = i - 1;
} @else {
  @log i;
}
```

#### With

```css
@with add(1,2) as c {
  c = c + 3;
  @log c;
}
```

#### Try

```css
@var result;

@try {
  result = 10 / x;
} @except TypeError as error1 {
  @log \`Type Error \${error1.message}\`;
}

@try {
  result = 10 / x;
} @except Exception as error {
  @log 'Exceptions';
}
```

#### JS

```css
@js {
  import { eval, rgba, get, set } from 'windi/lang';

  const a = get('width');
  set('width', eval('4px'));
  const width = eval('3px');
  export function add(a, b) {
    return a + b;
  }
}

@var c = add(1, 2);
```

#### Others

```css
@break;
@continue;
@yield 123;
@return 'hello world';
@raise Error('msg);
@del a['key'];
```

## **Implementation**

We currently compile windi lang into JavaScript and run it, just like TypeScript. Later we will also have an interpreter to make it an independent language. In any case, our hope is to have a programming language that **interacts well with JavaScript and windi**. All package dependencies of windi will be built using TypeScript, which means you can call JavaScript/TypeScript functions or classes directly.

In addition, regarding the construction of CSS, we have our own CSS build engine since the windi v1 version, and then we have also implemented nested CSS, so I won't go into details here. In short, I believe that with the above grammar, windi will become more perfect.

For now, we are still in the draft stage, so **any suggestions are welcome**. You can start a discussion in github discussions, and we will reply to you as soon as possible.
