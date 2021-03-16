import { defineConfig } from 'vite'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'

export default defineConfig({
  plugins: [
    Components({
      dirs: [
        '.vitepress/theme/components',
      ],
      customLoaderMatcher: id => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),
    Icons({
      defaultStyle: 'vertical-align: middle;',
    }),
    WindiCSS({
      scan: {
        dirs: ['.vitepress'],
        include: ['index.md'],
        fileExtensions: ['vue', 'ts'],
      },
    }),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'json5',
      '@vueuse/core',
      'windicss',
      'windicss/utils/style',
      'windicss/utils/parser',
      'prismjs',
      'prismjs/components/prism-css',
      'codemirror',
      'codemirror/mode/css/css',
      'codemirror/mode/javascript/javascript',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
