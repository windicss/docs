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
    WindiCSS({
      scan: {
        dirs: ['.vitepress'],
        include: ['index.md'],
        exclude: ['**/examples/**/*'],
        fileExtensions: ['vue', 'ts'],
      },
    }),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': ['monaco-editor'],
        },
      },
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'json5',
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
      'monaco-editor',
      'monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
