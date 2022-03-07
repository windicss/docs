import { defineConfigWithTheme } from 'vitepress'
import { metaData } from './config/constants'
import { mdRenderFilename } from './config/markdown'
import head from './config/head'
import themeConfig from './config/theme'
import type { DefaultTheme } from '@/config'

export default defineConfigWithTheme<DefaultTheme.Config>({
  title: metaData.title,
  description: metaData.description,
  head,
  themeConfig,
  srcExclude: ['README.md'],
  markdown: {
    config(md) {
      md.use(mdRenderFilename)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag === 'preview-box',
      },
    },
  },
})
