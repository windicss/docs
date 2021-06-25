import type { Theme } from 'vitepress'

import 'virtual:windi.css'

import './style/vars.css'
import './style/all.css'
import './style/markdown.css'
import './style/codemirror-prism-vars.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

export default <Theme> {
  Layout,
  NotFound,
}
