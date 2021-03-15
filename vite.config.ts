import { resolve, posix } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import { defineConfig, Plugin } from 'vite'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'

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
        fileExtensions: ['vue'],
      },
    }),
    ((): Plugin => {
      const dir = posix.resolve(__dirname, '.vitepress/config')
      return {
        name: 'watch:config',
        handleHotUpdate(ctx) {
          if (ctx.file.startsWith(dir)) {
            // hack to force the server restart
            const v = readFileSync('vite.config.ts', 'utf-8')
            writeFileSync('vite.config.ts', v, 'utf-8')
            console.log('Bingo!')
          }
        },
      }
    })(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'json5',
      '@vueuse/core',
      'windicss',
      'windicss/utils/style',
      'prismjs',
      'prismjs/components/prism-css',
      'codemirror',
      'codemirror/mode/javascript/javascript',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
