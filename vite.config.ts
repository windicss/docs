import { resolve } from 'path'
import { defineConfig } from 'vite'
import Components from 'vite-plugin-components'
import Icons, { ViteIconsResolver } from 'vite-plugin-icons'
import WindiCSS from 'vite-plugin-windicss'
import ViteRestart from 'vite-plugin-restart'
import axios from 'axios'

const sponsorUrl = 'https://opencollective.com/windicss/members.json'

export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, '.vitepress/theme')}/`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ['windicss'],
        },
      },
    },
  },
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
      globalComponentsDeclaration: true,
    }),
    Icons(),
    WindiCSS(),
    ViteRestart({
      restart: '.vitepress/config/*.*',
    }),
    {
      name: 'sponsor',
      resolveId(id) {
        return id === 'virtual:sponsor' ? id : null
      },
      async load(id) {
        if (id !== 'virtual:sponsor')
          return
        const { data } = await axios.get(sponsorUrl)
        return `export default ${JSON.stringify(data)}`
      },
    },
  ],
})
