import type { DefaultTheme } from '@/config'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Guide',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Configuration', link: '/guide/configuration' },
      { text: 'Migration', link: '/guide/migration' },
      { text: 'Features', link: '/features/' },
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

      { text: 'Container', link: '/utilities/container' },
      { text: 'Columns', link: '/utilities/columns' },
      { text: 'Spacing', link: '/utilities/spacing' },
      { text: 'Sizing', link: '/utilities/sizing' },
      { text: 'Display', link: '/utilities/display' },
      { text: 'Flexbox', link: '/utilities/flexbox' },
      { text: 'Grid', link: '/utilities/grid' },
      { text: 'Tables', link: '/utilities/tables' },
      { text: 'Positioning', link: '/utilities/positioning' },

      { text: 'separator', link: 'separator' },

      { text: 'Filters', link: '/utilities/filters' },
      { text: 'Effects', link: '/utilities/effects' },
      { text: 'Behaviors', link: '/utilities/behaviors' },
      { text: 'Transitions', link: '/utilities/transitions' },
      { text: 'Transforms', link: '/utilities/transforms' },
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
    text: 'Posts',
    items: [
      // { text: 'API', link: '/posts/api' },
      { text: 'The Story of WindiCSS', link: '/posts/story' },
      { text: 'WindiCSS v2.2 is here', link: '/posts/v22' },
      { text: 'From v2.2 to v2.4', link: '/posts/v24' },
      { text: 'WindiCSS v3.0 now in Beta', link: '/posts/v30' },
      { text: 'Recent changes (v30-v35)', link: '/posts/v30-5' },
      { text: 'What\'s new in extension?', link: '/posts/extension-updates' },
      { text: 'New Features In v3.1', link: '/posts/v31' },

      { text: 'separator', link: 'separator' },

      { text: 'Create Your Plugin', link: '/posts/plugin' },
      { text: 'Interpret vs Compile', link: '/posts/modes' },
      { text: 'Attributify Mode', link: '/posts/attributify' },
      { text: 'Windi Lang Draft', link: '/posts/language' },
      { text: 'Utilities added in v3.0', link: '/posts/v30-utilities' },
    ],
  },
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
