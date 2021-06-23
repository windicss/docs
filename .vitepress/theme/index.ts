import type { Theme } from 'vitepress'

import 'virtual:windi.css'

import './style/vars.css'
import './style/all.css'
import './style/markdown.css'
import './style/codemirror-prism-vars.css'

import Layout from './Layout.vue'

export default <Theme> {
  Layout,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
  },
}
