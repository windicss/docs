import type { DefaultTheme } from '../theme/config'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/utilities': [
    {
      text: 'General',
      children: [
        { text: 'Colors', link: '/utilities/colors' },
        { text: 'Variants', link: '/utilities/variants' },
        // { text: 'Variables', link: '/utilities/variables' },
      ],
    },
    {
      text: 'Basic',
      children: [
        { text: 'Typography', link: '/utilities/typography' },
        { text: 'Backgrounds', link: '/utilities/backgrounds' },
        { text: 'Borders', link: '/utilities/borders' },
        { text: 'SVG', link: '/utilities/svg' },
      ],
    },
    {
      text: 'Layout',
      children: [
        { text: 'Container', link: '/utilities/container' },
        { text: 'Spacing', link: '/utilities/spacing' },
        { text: 'Sizing', link: '/utilities/sizing' },
        { text: 'Display', link: '/utilities/display' },
        { text: 'Flexbox', link: '/utilities/flexbox' },
        { text: 'Grid', link: '/utilities/grid' },
        { text: 'Tables', link: '/utilities/tables' },
        { text: 'Positioning', link: '/utilities/positioning' },
      ],
    },
    {
      text: 'Enhancement',
      children: [
        { text: 'Filters', link: '/utilities/filters' },
        { text: 'Effects', link: '/utilities/effects' },
        { text: 'Behaviors', link: '/utilities/behaviors' },
        { text: 'Transitions', link: '/utilities/transitions' },
        { text: 'Transforms', link: '/utilities/transforms' },
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
      ],
    },
    {
      text: 'Articles',
      children: [
        { text: 'Create Your Plugin', link: '/posts/plugin' },
        { text: 'Interpret vs Compile', link: '/posts/modes' },
        { text: 'Attributify Mode', link: '/posts/attributify' },
        { text: 'Windi Lang Draft', link: '/posts/language' },
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
        { text: 'Important Prefix', link: '/features/important-prefix' },
        { text: 'Directives', link: '/features/directives' },
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
        { text: 'CLI', link: '/integrations/cli' },
        { text: 'PostCSS', link: '/integrations/postcss' },
        { text: 'VS Code', link: '/editors/vscode' },
        { text: 'WebStorm', link: '/editors/webstorm' },
      ],
    },
  ],
}
