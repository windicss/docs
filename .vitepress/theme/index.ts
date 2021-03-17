import 'windi.css'

import './styles/vars.css'
import './styles/layout.postcss'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.postcss'

import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {},
}

export default theme
