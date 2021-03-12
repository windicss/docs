import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  shortcuts: {
    bc: 'border-gray-300 dark:border-true-gray-600',
  },
  theme: {
    extend: {
      screens: {
        xs: '420px',
        md: '720px',
      },
      colors: {
        bg: 'var(--c-bg)',
      },
    },
  },
})
