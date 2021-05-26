import { dirname, resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'
import { sync } from 'resolve'

export function resolveImportPath(importName: string) {
  return sync(importName, {
    preserveSymlinks: false,
  })
}

const themeRoot = dirname(resolveImportPath('@windicss/vitepress-theme/package.json'))

export default defineConfig({
  plugins: [
    Components({
      dirs: [
        '.vitepress/theme/components',
        `${themeRoot}/components`,
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
      configFiles: [
        resolve(themeRoot, 'windi.config.ts'),
      ],
    }),
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
      'splitpanes',
      '@vueuse/core',
      '@vueuse/integrations',
      'windicss',
      'windicss/colors',
      'windicss/utils/style',
      'windicss/utils/parser',
      'prismjs',
      'prismjs/components/prism-css',
      'codemirror',
      'codemirror/mode/css/css',
      'codemirror/mode/javascript/javascript',
    ],
    exclude: [
      '@windicss/shared-components',
    ],
  },
})
