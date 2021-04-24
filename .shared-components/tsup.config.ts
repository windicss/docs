import fs from 'fs'
import path from 'path'
import { defineConfig } from 'tsup'
import { Plugin } from 'esbuild'

function rawPlugin(): Plugin {
  return {
    name: 'raw',
    setup(build) {
      build.onResolve({ filter: /\?raw$/ }, (args) => {
        return {
          path: path.isAbsolute(args.path) ? args.path : path.join(args.resolveDir, args.path),
          namespace: 'raw-loader',
        }
      })
      build.onLoad({ filter: /\?raw$/, namespace: 'raw-loader' }, async(args) => {
        return {
          contents: await fs.promises.readFile(args.path.replace(/\?raw$/, '')),
          loader: 'text',
        }
      })
    },
  }
}

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  esbuildPlugins: [rawPlugin()],
  clean: true,
})
