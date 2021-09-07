import { UserConfig } from 'vitepress'
import { DefaultTheme } from '@/config'
import { metaData } from './constants'
import { mdRenderFilename } from './markdown'
import head from './head'
import themeConfig from './theme'

const config: UserConfig<DefaultTheme.Config> = {
  title: 'Windi CSS',
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
}

export default config
