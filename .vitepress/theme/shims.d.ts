declare module '@docsearch/js' {
  import { DocSearchProps as DocSearchComponentProps } from '@docsearch/react'
  interface DocSearchProps extends DocSearchComponentProps {
    container: string | HTMLElement
    environment?: typeof window
  }
  export default function docsearch(props: DocSearchProps): void
}

declare module 'splitpanes' {
  // eslint-disable-next-line import/no-duplicates
  import { ComponentOptions } from 'vue'
  const Splitpanes: ComponentOptions
  const Pane: ComponentOptions
  export { Splitpanes, Pane }
}
