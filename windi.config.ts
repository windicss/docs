import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  shortcuts: {
    bc: 'border-gray-300 dark:border-true-gray-600',
  },
  theme: {
    extend: {
      colors: {
        bg: 'var(--c-bg)',
      },
    },
  },
})
