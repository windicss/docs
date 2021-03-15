import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Guide',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Features', link: '/guide/features/' },
      { text: 'Migration', link: '/guide/migration' },
    ],
  },
  {
    text: 'Utilities',
    items: [
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
  },
  {
    text: 'Config',
    items: [
      { text: 'Configurations', link: '/configs/' },
      { text: 'Plugins', link: '/configs/plugins/' },
    ],
  },
  {
    text: 'Community',
    items: [
      { text: 'Discord', link: 'https://chat.windicss.org' },
      { text: 'GitHub', link: 'https://github.com/windicss/windicss' },
      { text: 'Discussions', link: 'https://github.com/windicss/windicss/discussions' },
      { text: 'Team', link: 'https://github.com/orgs/windicss/people' },
    ],
  },
  // { text: 'Releases', link: 'https://github.com/windicss/windicss/releases' },
]
