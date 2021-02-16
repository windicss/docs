// @ts-check

const isProd = process.env.NODE_ENV === 'production'

const title = 'Windi CSS 🌬'
const description = 'Next generation Tailwind CSS compiler.'
const site = isProd ? 'https://windicss.netlify.app' : 'http://localhost:3000'
const image = `${site}/assets/banner.png`

const head = [
  ['style', {}, 'img { border-radius: 10px }' + 'h1.title { margin-left: 0.5em }'],
  ['meta', { name: 'author', content: 'Windi CSS Team' }],
  ['meta', { name: 'keywords', content: 'windi, tailwind, tailwindcss, vitejs, svelte, vue' }],

  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/logo.svg' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#cc0000' }],

  ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ['meta', { name: 'twitter:site', content: site }],
  ['meta', { name: 'twitter:title', value: title }],
  ['meta', { name: 'twitter:description', value: description }],
  ['meta', { name: 'twitter:image', content: image }],

  ['meta', { property: 'og:type', content: 'website' }],
  ['meta', { property: 'og:locale', content: 'en_US' }],
  ['meta', { property: 'og:site', content: site }],
  ['meta', { property: 'og:site_name', content: title }],
  ['meta', { property: 'og:title', content: title }],
  ['meta', { property: 'og:image', content: image }],
  ['meta', { property: 'og:description', content: description }],
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Windi CSS',
  description,
  head,
  themeConfig: {
    // algolia: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: 'windicss',
    // },
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
      {
        text: 'Tailwind CSS',
        link: 'https://tailwindcss.com/docs',
      },
      // {
      //   text: 'Changelog',
      //   link: 'https://github.com/windicss/windicss/blob/main/CHANGELOG.md',
      // },
    ],

    sidebar: {
      '/utilities': [{
        text: 'Utilities',
        children: [
          { text: 'Accessibility', link: '/utilities/accessibility' },
          { text: 'Auto', link: '/utilities/auto' },
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
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/' },
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
          ],
        },
        {
          text: 'Advanced',
          children: [
            { text: 'CLI', link: '/guide/cli' },
            { text: 'Modes', link: '/guide/modes' },
            { text: 'The Story', link: '/guide/story' },
          ],
        },
      ],
    },
  },
}
