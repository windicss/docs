import { UserConfigFn } from 'vite'
import vue from '@vitejs/plugin-vue'
import ts from '@wessberg/rollup-plugin-ts'

// https://vitejs.dev/config/
const config: UserConfigFn = ({ command }) => ({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'main',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    {
      apply: 'build',
      ...ts(),
    },
  ],
  esbuild: command === 'serve' ? undefined : false,
})

export default config
