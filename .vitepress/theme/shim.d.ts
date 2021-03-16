declare global {
  interface Window {
    $frontmatter: any
    $withBase: any
  }
}

declare module '/@vite-icons/*' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}
