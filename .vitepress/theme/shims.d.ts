declare module '@docsearch/js' {
  import { DocSearchProps as DocSearchComponentProps } from '@docsearch/react'
  interface DocSearchProps extends DocSearchComponentProps {
    container: string | HTMLElement
    environment?: typeof window
  }
  export default function docsearch(props: DocSearchProps): void
}
