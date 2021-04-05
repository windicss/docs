import { UserConfigFn } from 'vite'
import vue from '@vitejs/plugin-vue'
import ts from 'rollup-plugin-typescript2'

// https://vitejs.dev/config/
const config: UserConfigFn = ({ command }) => ({
  build: {
    lib: {
      name: 'index',
      entry: 'index.ts',
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
      ...ts({
        useTsconfigDeclarationDir: true,
      }),
    },
  ],
  esbuild: command === 'serve' ? undefined : false,
})

export default config
