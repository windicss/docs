import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: 'Overview',
    items: [
      { text: 'Getting Started', link: '/guide/' },
      { text: 'Installation', link: '/guide/installation' },
      { text: 'Configuration', link: '/guide/configuration' },
      { text: 'Extractions', link: '/guide/extractions' },
      { text: 'Migration', link: '/guide/migration' },

      { text: 'Features', link: 'separator' },

      { text: 'Overview', link: '/features/' },
      { text: 'Value Auto-infer', link: '/features/value-auto-infer' },
      { text: 'Variant Groups', link: '/features/variant-groups' },
      { text: 'Shortcuts', link: '/features/shortcuts' },
      { text: 'Responsive Design', link: '/features/responsive-design' },
      { text: 'Dark Mode', link: '/features/dark-mode' },
      { text: 'RTL', link: '/features/rtl' },
      { text: 'Important Prefix', link: '/features/important-prefix' },
      { text: 'Directives', link: '/features/directives' },
      { text: 'Attributify Mode', link: '/features/attributify' },
      { text: 'Visual Analyzer', link: '/features/analyzer' },

      { text: 'Integrations', link: 'separator' },

      { text: 'Vite', link: '/integrations/vite' },
      { text: 'Webpack', link: '/integrations/webpack' },
      { text: 'Rollup', link: '/integrations/rollup' },
      { text: 'Nuxt', link: '/integrations/nuxt' },
      { text: 'Vue CLI', link: '/integrations/vue-cli' },
      { text: 'Gridsome', link: '/integrations/gridsome' },
      { text: 'Svelte', link: '/integrations/svelte' },
      { text: 'PostCSS', link: '/integrations/postcss' },
      { text: 'CLI', link: '/integrations/cli' },
      { text: 'JavaScript API', link: '/integrations/javascript' },
      { text: 'VS Code', link: '/editors/vscode' },
      { text: 'WebStorm', link: '/editors/webstorm' },
    ],
  },
  {
    text: 'Utilities',
    items: [
      // General
      { text: 'Colors', link: '/utilities/general/colors' },
      { text: 'Typography', link: '/utilities/general/typography' },
      { text: 'SVG', link: '/utilities/general/svg' },
      { text: 'Variants', link: '/utilities/general/variants' },
      // { text: 'Variables', link: '/utilities/variables' },

      { text: 'Accessibility', link: 'separator' },

      // Accessibility
      { text: 'Screen Readers', link: '/utilities/accessibility/screen-readers' },

      { text: 'Animations', link: 'separator' },

      // Animations
      { text: 'Animation', link: '/utilities/animations/animation' },
      { text: 'Transforms', link: '/utilities/animations/transforms' },
      { text: 'Transitions', link: '/utilities/animations/transitions' },

      { text: 'Backgrounds', link: 'separator' },

      // Backrounds
      { text: 'Background', link: '/utilities/backgrounds/background' },
      { text: 'Gradients', link: '/utilities/backgrounds/gradients' },
      { text: 'Background Blend Mode', link: '/utilities/backgrounds/background-blend-mode' },

      { text: 'Behaviors', link: 'separator' },

      // Behaviors
      { text: 'Box Decoration Break', link: '/utilities/behaviors/box-decoration-break' },
      { text: 'Image Rendering', link: '/utilities/behaviors/image-rendering' },
      { text: 'Listings', link: '/utilities/behaviors/listings' },
      { text: 'Overflow', link: '/utilities/behaviors/overflow' },
      { text: 'Overscroll Behavior', link: '/utilities/behaviors/overscroll-behavior' },
      { text: 'Placeholder', link: '/utilities/behaviors/placeholder' },

      { text: 'Borders', link: 'separator' },

      // Borders
      { text: 'Border', link: '/utilities/borders/border' },
      { text: 'Divider', link: '/utilities/borders/divider' },
      { text: 'Outline', link: '/utilities/borders/outline' },
      { text: 'Ring', link: '/utilities/borders/ring' },

      { text: 'Effects', link: 'separator' },

      // Effects
      { text: 'Box Shadow', link: '/utilities/effects/box-shadow' },
      { text: 'Opacity', link: '/utilities/effects/opacity' },
      { text: 'Mix Blend Mode', link: '/utilities/effects/mix-blend-mode' },

      { text: 'Filters', link: 'separator' },

      // Filters
      { text: 'Filter', link: '/utilities/filters/filter' },
      { text: 'Backdrop Filter', link: '/utilities/filters/backdrop-filter' },

      { text: 'Interactivity', link: 'separator' },

      // Interactivity
      { text: 'Accent Color', link: '/utilities/interactivity/accent-color' },
      { text: 'Appearance', link: '/utilities/interactivity/appearance' },
      { text: 'Cursor', link: '/utilities/interactivity/cursor' },
      { text: 'Caret', link: '/utilities/interactivity/caret' },
      { text: 'Pointer Events', link: '/utilities/interactivity/pointer-events' },
      { text: 'Resize', link: '/utilities/interactivity/resize' },
      { text: 'Scroll Behavior', link: '/utilities/interactivity/scroll-behavior' },
      // { text: 'Scroll Snap', link: '/utilities/interactivity/scroll-snap' },
      { text: 'Touch Action', link: '/utilities/interactivity/touch-action' },
      { text: 'User Select', link: '/utilities/interactivity/user-select' },
      { text: 'Will Change', link: '/utilities/interactivity/will-change' },

      { text: 'Layout', link: 'separator' },

      // Layout
      // { text: 'Aspect Ratio', link: '/utilities/layout/aspect-ratio' },
      { text: 'Columns', link: '/utilities/layout/columns' },
      { text: 'Container', link: '/utilities/layout/container' },
      { text: 'Display', link: '/utilities/layout/display' },
      { text: 'Flexbox', link: '/utilities/layout/flexbox' },
      { text: 'Grid', link: '/utilities/layout/grid' },
      { text: 'Positioning', link: '/utilities/layout/positioning' },
      { text: 'Sizing', link: '/utilities/layout/sizing' },
      { text: 'Spacing', link: '/utilities/layout/spacing' },
      { text: 'Tables', link: '/utilities/layout/tables' },
    ],
  },
  {
    text: 'Plugins',
    items: [
      { text: 'Plugin Interfaces', link: '/plugins/interfaces' },
      { text: 'Transform API', link: '/plugins/transform' },

      { text: 'Official', link: 'separator' },

      { text: 'Aspect Ratio', link: '/plugins/official/aspect-ratio' },
      { text: 'Forms', link: '/plugins/official/forms' },
      { text: 'Filters', link: '/plugins/official/filters' },
      { text: 'Line Clamp', link: '/plugins/official/line-clamp' },
      { text: 'Scroll Snap', link: '/plugins/official/scroll-snap' },
      { text: 'Typography', link: '/plugins/official/typography' },

      { text: 'Community', link: 'separator' },

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
      { text: 'New Features In v3.4', link: '/posts/v34' },

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
