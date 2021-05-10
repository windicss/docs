import { defineConfig } from 'windicss/helpers'
import filterPlugin from 'windicss/plugin/filters'
/* eslint quote-props: ["error", "consistent"] */

export default defineConfig({
  darkMode: 'class',
  extract: {
    include: [
      'index.md',
      '.vitepress/**/*.{vue,ts}',
    ],
    exclude: [
      '**/*.md',
      '**/examples/**/*',
    ],
  },
  safelist: [
    'pb-5',
    'bc',
    'logo-float-xl',
    'dark:text-white',
    'opacity-85',
  ],
  shortcuts: {
    'bc': 'border-cool-gray-200 dark:border-dark-300',
    'logo-float-xl': 'text-6xl m-2 float-right',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-family-base)',
        mono: 'var(--font-family-mono)',
      },
      screens: {
        xs: '420px',
        md: '720px',
      },
      colors: {
        primary: '#3892ff',
        brand: {
          '50': '#f3f8f9',
          '100': '#ecf7fe',
          '200': '#afe0f5',
          '300': '#7cc1e5',
          '400': '#48b0f1',
          '500': '#3892ff',
          '600': '#2d63a7',
          '700': '#264a85',
          '800': '#121e35',
          '850': '#0f1624',
          '900': '#090d15',
        },
        bg: 'var(--c-bg)',
        dark: {
          '100': '#4A4A4A',
          '200': '#323232',
          '300': '#2D2D2D',
          '400': '#222222',
          '500': '#1F1F1F',
          '600': '#1C1C1E',
          '700': '#1B1B1B',
          '800': '#181818',
          '900': '#000000',
          'DEFAULT': '#000000',
        },
      },
      boxShadow: {
        box: '0px 5px 15px 0px rgba(0, 0, 0, 0.35)',
      },
    },
    filter: {
      'brightness': 'brightness(0)',
      'invert': 'invert(1)',
    },
  },
  plugins: [
    filterPlugin,
  ],
})
