import fs from 'fs'
import { defineConfig } from 'tsup'

const html = fs.readFileSync('src/srcdoc.html', 'utf-8')

export default defineConfig({
  define: {
    __INJECT_HTML__: JSON.stringify(html),
  },
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
})
