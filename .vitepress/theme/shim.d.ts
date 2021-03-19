
// declare global {
//   import type { Environment } from 'monaco-editor'
//   interface Window {
//     MonacoEnvironment?: Environment
//   }
// }

declare module '*.vue' {
  // eslint-disable-next-line import/no-duplicates
  import { ComponentOptions } from 'vue'
  const comp: ComponentOptions
  export default comp
}

declare module '@siteData' {
  const data: string
  export default data
}
declare module '@docsearch/js' {
  import { DocSearchProps as DocSearchComponentProps } from '@docsearch/react'
  interface DocSearchProps extends DocSearchComponentProps {
    container: string | HTMLElement
    environment?: typeof window
  }
  export default function docsearch(props: DocSearchProps): void
}

declare module '@docsearch/css' {
  const css: string
  export default css
}

declare module '/@vite-icons/*' {
  // eslint-disable-next-line import/no-duplicates
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
