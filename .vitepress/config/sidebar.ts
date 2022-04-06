import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/utilities': [
    {
      text: 'General',
      children: [
        { text: 'Colors', link: '/utilities/general/colors' },
        { text: 'Typography', link: '/utilities/general/typography' },
        { text: 'SVG', link: '/utilities/general/svg' },
        { text: 'Variants', link: '/utilities/general/variants' },
        // { text: 'Variables', link: '/utilities/general/variables' },
      ],
    },
    {
      text: 'Accessibility',
      children: [
        { text: 'Screen Readers', link: '/utilities/accessibility/screen-readers' },
      ],
    },
    {
      text: 'Animations',
      children: [
        { text: 'Animation', link: '/utilities/animations/animation' },
        { text: 'Transforms', link: '/utilities/animations/transforms' },
        { text: 'Transitions', link: '/utilities/animations/transitions' },
      ],
    },
    {
      text: 'Backgrounds',
      children: [
        { text: 'Background', link: '/utilities/backgrounds/background' },
        { text: 'Gradients', link: '/utilities/backgrounds/gradients' },
        { text: 'Background Blend Mode', link: '/utilities/backgrounds/background-blend-mode' },
      ],
    },
    {
      text: 'Behaviors',
      children: [
        { text: 'Box Decoration Break', link: '/utilities/behaviors/box-decoration-break' },
        { text: 'Image Rendering', link: '/utilities/behaviors/image-rendering' },
        { text: 'Listings', link: '/utilities/behaviors/listings' },
        { text: 'Overflow', link: '/utilities/behaviors/overflow' },
        { text: 'Overscroll Behavior', link: '/utilities/behaviors/overscroll-behavior' },
        { text: 'Placeholder', link: '/utilities/behaviors/placeholder' },
      ],
    },
    {
      text: 'Borders',
      children: [
        { text: 'Border', link: '/utilities/borders/border' },
        { text: 'Divider', link: '/utilities/borders/divider' },
        { text: 'Outline', link: '/utilities/borders/outline' },
        { text: 'Ring', link: '/utilities/borders/ring' },
      ],
    },
    {
      text: 'Effects',
      children: [
        { text: 'Box Shadow', link: '/utilities/effects/box-shadow' },
        { text: 'Opacity', link: '/utilities/effects/opacity' },
        { text: 'Mix Blend Mode', link: '/utilities/effects/mix-blend-mode' },
      ],
    },
    {
      text: 'Filters',
      children: [
        { text: 'Filter', link: '/utilities/filters/filter' },
        { text: 'Backdrop Filter', link: '/utilities/filters/backdrop-filter' },
      ],
    },
    {
      text: 'Interactivity',
      children: [
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
      ],
    },
    {
      text: 'Layout',
      children: [
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
  ],
  '/plugins': [
    {
      text: 'Base',
      children: [
        { text: 'Plugin Interfaces', link: '/plugins/interfaces' },
        { text: 'Transform API', link: '/plugins/transform' },
      ],
    },
    {
      text: 'Official',
      children: [
        { text: 'Aspect Ratio', link: '/plugins/official/aspect-ratio' },
        { text: 'Forms', link: '/plugins/official/forms' },
        { text: 'Filters', link: '/plugins/official/filters' },
        { text: 'Line Clamp', link: '/plugins/official/line-clamp' },
        { text: 'Scroll Snap', link: '/plugins/official/scroll-snap' },
        { text: 'Typography', link: '/plugins/official/typography' },
      ],
    },
    {
      text: 'Community',
      children: [
        { text: 'Animations', link: '/plugins/community/animations' },
        { text: 'Scrollbar', link: '/plugins/community/scrollbar' },
        { text: 'Question Mark', link: '/plugins/community/question-mark' },
        { text: 'Hero Patterns', link: '/plugins/community/heropatterns' },
        { text: 'Interaction Variants', link: '/plugins/community/interaction-variants' },
      ],
    },
  ],
  '/posts': [
    {
      text: 'Releases',
      children: [
        // { text: 'API', link: '/posts/api' },
        { text: 'The Story of WindiCSS', link: '/posts/story' },
        { text: 'Windi CSS v2.2 is here', link: '/posts/v22' },
        { text: 'From v2.2 to v2.4', link: '/posts/v24' },
        { text: 'WindiCSS v3 now in beta', link: '/posts/v30' },
        { text: 'Recent changes (v30-v35)', link: '/posts/v30-5' },
        { text: 'What\'s new in extension?', link: '/posts/extension-updates' },
        { text: 'New Features In v3.1', link: '/posts/v31' },
        { text: 'New Features In v3.4', link: '/posts/v34' },
      ],
    },
    {
      text: 'Articles',
      children: [
        { text: 'Create Your Plugin', link: '/posts/plugin' },
        { text: 'Interpret vs Compile', link: '/posts/modes' },
        { text: 'Attributify Mode', link: '/posts/attributify' },
        { text: 'Windi Lang Draft', link: '/posts/language' },
        { text: 'Utilities added in v3.0', link: '/posts/v30-utilities' },
      ],
    },
  ],
  '/configs': [
    {
      text: 'Configurations',
      children: [
        { text: 'Overview', link: '/configs/' },
      ],
    },
    {
      text: 'Plugins',
      children: [
        { text: 'Overview', link: '/configs/plugins/' },
      ],
    },
  ],
  '/': [
    {
      text: 'Guide',
      children: [
        { text: 'Getting Started', link: '/guide/' },
        { text: 'Installation', link: '/guide/installation' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Extractions', link: '/guide/extractions' },
        { text: 'Migration from Tailwind', link: '/guide/migration' },
      ],
    },
    {
      text: 'Features',
      children: [
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
        // { text: 'Nesting CSS', link: '/features/nesting' },
      ],
    },
    {
      text: 'Integrations',
      children: [
        { text: 'Vite', link: '/integrations/vite' },
        { text: 'Webpack', link: '/integrations/webpack' },
        { text: 'Rollup', link: '/integrations/rollup' },
        { text: 'Nuxt', link: '/integrations/nuxt' },
        { text: 'Vue CLI', link: '/integrations/vue-cli' },
        { text: 'Gridsome', link: '/integrations/gridsome' },
        // { text: 'Next.js', link: '/integrations/nextjs' },
        { text: 'Svelte', link: '/integrations/svelte' },
        { text: 'PostCSS', link: '/integrations/postcss' },
        { text: 'CLI', link: '/integrations/cli' },
        { text: 'JavaScript API', link: '/integrations/javascript' },
        { text: 'VS Code', link: '/editors/vscode' },
        { text: 'WebStorm', link: '/editors/webstorm' },
      ],
    },
  ],
}
