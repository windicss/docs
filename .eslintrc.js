module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@antfu/eslint-config', 'plugin:jsonc/recommended-with-json5'],
  plugins: ['markdown'],
  rules: {
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  },
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/*.md/*.{js,ts,json,json5}'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'jsonc/quotes': ['error', 'single'],
        'jsonc/no-dupe-keys': 'off',
      },
    },
  ],
}
