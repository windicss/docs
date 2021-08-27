declare module '@docsearch/js' {
  import type { DocSearchProps as DocSearchComponentProps } from '@docsearch/react'
  interface DocSearchProps extends DocSearchComponentProps {
    container: string | HTMLElement
    environment?: typeof window
  }
  export default function docsearch(props: DocSearchProps): void
}

declare module 'splitpanes' {
  // eslint-disable-next-line import/no-duplicates
  import type { ComponentOptions } from 'vue'
  const Splitpanes: ComponentOptions
  const Pane: ComponentOptions
  export { Splitpanes, Pane }
}
