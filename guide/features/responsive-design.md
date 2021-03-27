# Responsive Design


### Mobile First

| Variant | Min-Width |
| :------ | :--- | 
| sm | `640px` |
| md | `768px` |
| lg | `1024px` |
| xl | `1280px` |
| 2xl | `1536px` |

### Desktop First

| Variant | Max-Width | 
| :------ | :--- |
| -sm | `640px` |
| -md | `768px` |
| -lg | `1024px` | 
| -xl | `1280px` | 
| -2xl  | `1536px` | 

### Only Screen

| Variant | Min-Width | Max-Width |
| :------ | :--- | :---------- |
| +sm | `640px` |  `768px` |
| +md | `768px` |  `1024px` |
| +lg | `1024px` |  `1280px` |
| +xl | `1280px` |  `1536px` |
| +2xl | `1536px` | - | 

You can use `+` for __Only Screen__ and `-` for __Desktop First__ in screen utilities, for example:

<InlinePlayground :input="'sm:p-1\n+sm:p-2\n-sm:p-3'" :showCSS="true" :showPreview="false"/>

See [screen variants](/utilities/variants.html#screen-variants) for more details.
