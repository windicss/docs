import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'

import 'windi.css'
import '../styles/styles.css'

import { Theme } from 'vitepress'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import Quote from '../components/Quote.vue'

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp ({ app }) {
    app.component('Quote', Quote)
  },
}

export default theme
