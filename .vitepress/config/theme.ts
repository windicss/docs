import type { DefaultTheme } from '@windicss/vitepress-theme/config'
import { sidebar } from './sidebar'
import { nav } from './nav'

const themeConfig: DefaultTheme.Config = {
  algolia: {
    appId: 'RYAT0G9BU3',
    apiKey: 'c0dfcf1e50c42717f0d536ac6fd11d78',
    indexName: 'windicss-next',
  },
  repo: 'windicss/windicss',
  logo: '/assets/logo.svg',
  docsDir: '.',
  docsBranch: 'main',
  docsRepo: 'windicss/docs',
  editLinks: true,
  editLinkText: 'Suggest changes to this page',
  nav,
  sidebar,
}

export default themeConfig
