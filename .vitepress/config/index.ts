import { UserConfig } from 'vitepress'
import { DefaultTheme } from '../theme/config'
import { metaData } from './constants'
import head from './head'
import themeConfig from './theme'

const config: UserConfig<DefaultTheme.Config> = {
  title: 'Windi CSS',
  description: metaData.description,
  head,
  themeConfig,
}

export default config
