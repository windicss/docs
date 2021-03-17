import * as vue from '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $frontmatter: any
    $withBase: any
    $site: any
    $localePath: any
    $themeConfig: any
    $siteByRoute: any
  }
}
