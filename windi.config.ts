import { defineConfig } from 'windicss/helpers'

/* eslint quote-props: ["error", "consistent"] */

export default defineConfig({
  darkMode: 'class',
  shortcuts: {
    bc: 'border-cool-gray-200 dark:border-dark-300',
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
  },
})
