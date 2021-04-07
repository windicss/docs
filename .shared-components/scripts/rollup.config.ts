import fs from 'fs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import copy from 'rollup-plugin-copy'
import replace from '@rollup/plugin-replace'
// @ts-ignore
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import { RollupOptions } from 'rollup'

const html = fs.readFileSync('src/srcdoc.html', 'utf-8')
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

const external: string[] = [...Object.keys(pkg.peerDependencies)]

const configs: RollupOptions[] = []

configs.push({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    replace({
      preventAssignment: true,
      __INJECT_HTML__: JSON.stringify(html),
    }),
    nodeResolve(),
    typescript({
      declaration: false,
    }),
    commonjs(),
    copy({
      targets: [
        { src: 'src/index.css', dest: 'dist' },
      ],
    }),
  ],
  external,
})

configs.push({
  input: 'src/index.ts',
  output: {
    file: 'dist/index.d.ts',
    format: 'es',
  },
  plugins: [
    dts(),
  ],
  external,
})

export default configs
