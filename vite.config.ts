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
        'shard-components/src/components',
      ],
      extensions: ['vue', 'ts'],
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
    WindiCSS(),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'mitt',
      'json5',
      'lz-string',
      '@vueuse/core',
      'windicss',
      'windicss/colors',
      'windicss/utils/style',
      'windicss/utils/parser',
      'prismjs',
      'prismjs/components/prism-css',
      'change-case',
      'codemirror',
      'codemirror/mode/css/css',
      'codemirror/mode/javascript/javascript',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
