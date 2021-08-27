import 'virtual:windi.css'

import './style/vars.css'
import './style/all.css'
import './style/scrollbar.css'
import './style/markdown.css'
import './style/codemirror-prism-vars.css'

import Layout from './Layout.vue'
import NotFound from './NotFound.vue'

import type { Theme } from 'vitepress'

export default <Theme> {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.config.compilerOptions.isCustomElement = tag => tag === 'preview-box'
  },
}
