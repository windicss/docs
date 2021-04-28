import type { DefaultTheme } from '../theme/config'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Guide',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Features', link: '/guide/features/' },
      { text: 'Configuration', link: '/guide/configuration' },
      { text: 'Migration', link: '/guide/migration' },
      { text: 'Posts', link: '/guide/posts/attributify' },
    ],
  },
  {
    text: 'Utilities',
    items: [
      { text: 'Colors', link: '/utilities/colors' },
      { text: 'Variants', link: '/utilities/variants' },
      // { text: 'Variables', link: '/utilities/variables' },

      { text: 'separator', link: 'separator' },

      { text: 'Typography', link: '/utilities/typography' },
      { text: 'Backgrounds', link: '/utilities/backgrounds' },
      { text: 'Borders', link: '/utilities/borders' },
      { text: 'SVG', link: '/utilities/svg' },

      { text: 'separator', link: 'separator' },

      { text: 'Layout', link: '/utilities/layout' },
      { text: 'Spacing', link: '/utilities/spacing' },
      { text: 'Sizing', link: '/utilities/sizing' },
      { text: 'Flexbox', link: '/utilities/flexbox' },
      { text: 'Grid', link: '/utilities/grid' },
      { text: 'Box Alignment', link: '/utilities/box-alignment' },
      { text: 'Tables', link: '/utilities/tables' },

      { text: 'separator', link: 'separator' },

      { text: 'Effects', link: '/utilities/effects' },
      { text: 'Transitions', link: '/utilities/transitions' },
      { text: 'Transforms', link: '/utilities/transforms' },
      { text: 'Interactivity', link: '/utilities/interactivity' },
      { text: 'Accessibility', link: '/utilities/accessibility' },
    ],
  },
  {
    text: 'Plugins',
    items: [
      { text: 'Plugin Interfaces', link: '/plugins/interfaces' },
      { text: 'Transform API', link: '/plugins/transform' },

      { text: 'separator', link: 'separator' },

      { text: 'Aspect Ratio', link: '/plugins/official/aspect-ratio' },
      { text: 'Forms', link: '/plugins/official/forms' },
      { text: 'Filters', link: '/plugins/official/filters' },
      { text: 'Line Clamp', link: '/plugins/official/line-clamp' },
      { text: 'Scroll Snap', link: '/plugins/official/scroll-snap' },
      { text: 'Typography', link: '/plugins/official/typography' },

      { text: 'separator', link: 'separator' },

      { text: 'Animations', link: '/plugins/community/animations' },
      { text: 'Scrollbar', link: '/plugins/community/scrollbar' },
      { text: 'Question Mark', link: '/plugins/community/question-mark' },
      { text: 'Hero Patterns', link: '/plugins/community/heropatterns' },
      { text: 'Interaction Variants', link: '/plugins/community/interaction-variants' },
    ],
  },
  // {
  //   text: 'Translations',
  //   items: [
  //     { text: 'English', link: '/plugins/aspect-ratio' },
  //     { text: '中文', link: '/plugins/forms' },
  //     { text: '日本語', link: '/plugins/filters' },
  //     { text: 'Français', link: '/plugins/line-clamp' },
  //   ],
  // },
  {
    text: 'Community',
    items: [
      { text: 'Discord', link: 'https://chat.windicss.org' },
      { text: 'GitHub', link: 'https://github.com/windicss/windicss' },
      { text: 'Discussions', link: 'https://github.com/windicss/windicss/discussions' },
      { text: 'Twitter', link: 'https://twitter.com/windi_css' },
      { text: 'Team', link: 'https://github.com/orgs/windicss/people' },
    ],
  },
  { text: 'Play', link: '/play' },
]
