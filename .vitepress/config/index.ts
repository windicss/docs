import { UserConfig } from 'vitepress'
import { Config as ThemeConfig } from '../theme/config'
import { metaData } from './constants'
import head from './head'
import themeConfig from './theme'


const config: UserConfig<ThemeConfig> = {
  title: 'Windi CSS',
  description: metaData.description,
  head,
  themeConfig,
}

export default config
