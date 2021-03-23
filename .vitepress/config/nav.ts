import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Guide',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Migration', link: '/guide/migration' },
      { text: 'Features', link: '/guide/features/' },
      { text: 'Configuration', link: '/guide/configuration/' },
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
    text: 'Plugins',
    items: [
      { text: 'Aspect Ratio', link: '/plugins/aspect-ratio' },
      { text: 'Forms', link: '/plugins/forms' },
      { text: 'Filters', link: '/plugins/filters' },
      { text: 'Line Clamp', link: '/plugins/line-clamp' },
      { text: 'Scroll Snap', link: '/plugins/scroll-snap' },
      { text: 'Typography', link: '/plugins/typography' },
    ],
  },
  {
    text: 'Translations',
    items: [
      { text: 'English', link: '/plugins/aspect-ratio' },
      { text: '中文', link: '/plugins/forms' },
      { text: '日本語', link: '/plugins/filters' },
      { text: 'Français', link: '/plugins/line-clamp' },
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
  { text: 'Play', link: '/play' },
]
