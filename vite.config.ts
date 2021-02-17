import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [
    ...WindiCSS({
      scan: {
        dirs: ['.vitepress'],
        include: ['index.md'],
      },
      preflight: false,
    }),
  ],
})
