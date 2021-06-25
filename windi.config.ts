import { defineConfig } from 'vite-plugin-windicss'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  extract: {
    include: [
      '.vitepress/theme/**/*.{ts,vue}',
    ],
  },
  safelist: [
    'pb-5',
    'logo-float-xl',
    'dark:text-white',
    'opacity-85',
  ],
  shortcuts: {
    'logo-float-xl': 'text-6xl m-2 mr-6 float-right',
  },
  theme: {
    extend: {
      screens: {
        '2xl': '1400px',
      },
      colors: {
        primary: {
          DEFAULT: '#48B0F1',
          50: '#7ae2ff',
          100: '#70d8ff',
          200: '#66ceff',
          300: '#5cc4ff',
          400: '#52bafb',
          500: '#48b0f1',
          600: '#3ea6e7',
          700: '#349cdd',
          800: '#2a92d3',
          900: '#2088c9',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: '#48B0F1',
              textDecoration: 'none',
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
            pre: { color: 'inherit', fontSize: '.9rem' },
            thead: { color: 'inherit' },
            blockquote: { color: 'inherit' },
            table: {
              borderCollapse: 'collapse',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography(),
  ],
})
