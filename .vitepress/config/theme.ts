import type { DefaultTheme } from 'vitepress'

const themeConfig: DefaultTheme.Config = {
  algolia: {
    appId: 'RYAT0G9BU3',
    apiKey: 'c0dfcf1e50c42717f0d536ac6fd11d78',
    indexName: 'windicss',
  },
  repo: 'windicss/windicss',
  logo: '/assets/logo.svg',
  docsDir: '.',
  docsBranch: 'main',
  docsRepo: 'windicss/docs',
  editLinks: true,
  editLinkText: 'Suggest changes to this page',

  nav: [
    { text: 'Guide', link: '/guide/' },
    { text: 'Utilities', link: '/utilities/' },
    // { text: 'Tailwind CSS', link: 'https://tailwindcss.com/docs' },
    {
      text: 'Community',
      items: [
        { text: 'Discord', link: 'https://discord.com/invite/aRYWm8r8Eq' },
        { text: 'GitHub', link: 'https://github.com/windicss/windicss' },
        { text: 'Discussions', link: 'https://github.com/windicss/windicss/discussions' },
        { text: 'Team', link: 'https://github.com/orgs/windicss/people' },
      ],
    },
    { text: 'Releases', link: 'https://github.com/windicss/windicss/releases' },
  ],

  sidebar: {
    '/utilities': [{
      text: 'Utilities',
      children: [
        { text: 'Accessibility', link: '/utilities/accessibility' },
        { text: 'Backgrounds', link: '/utilities/backgrounds' },
        { text: 'Borders', link: '/utilities/borders' },
        { text: 'Box Alignment', link: '/utilities/box-alignment' },
        { text: 'Colors', link: '/utilities/colors' },
        { text: 'Effects', link: '/utilities/effects' },
        { text: 'Flexbox', link: '/utilities/flexbox' },
        { text: 'Grid', link: '/utilities/grid' },
        { text: 'Interactivity', link: '/utilities/interactivity' },
        { text: 'Layout', link: '/utilities/layout' },
        { text: 'Sizing', link: '/utilities/sizing' },
        { text: 'Spacing', link: '/utilities/spacing' },
        { text: 'SVG', link: '/utilities/svg' },
        { text: 'Tables', link: '/utilities/tables' },
        { text: 'Transforms', link: '/utilities/transforms' },
        { text: 'Transitions', link: '/utilities/transitions' },
        { text: 'Typography', link: '/utilities/typography' },
        { text: 'Variants', link: '/utilities/variants' },
      ],
    }],
    '/': [
      {
        text: 'Guide',
        children: [
          // { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Features', link: '/guide/features' },
          { text: 'Configuration', link: '/guide/configuration' },
          { text: 'Directives', link: '/guide/directives' },
          { text: 'Plugins', link: '/guide/plugins' },
        ],
      },
      {
        text: 'Installation',
        children: [
          { text: 'Migration', link: '/guide/migration' },
          { text: 'Svelte', link: '/guide/svelte' },
          { text: 'Vite', link: '/guide/vite' },
          { text: 'Vue', link: '/guide/vue' },
          { text: 'CLI', link: '/guide/cli' },
        ],
      },
      {
        text: 'Advanced',
        children: [
          { text: 'Modes', link: '/guide/modes' },
          { text: 'The Story', link: '/guide/story' },
        ],
      },
    ],
  },
}

export default themeConfig
