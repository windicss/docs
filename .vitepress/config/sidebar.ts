import type { DefaultTheme } from '../theme/config'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/utilities': [
    {
      text: 'General',
      children: [
        { text: 'Colors', link: '/utilities/colors' },
        { text: 'Variants', link: '/utilities/variants' },
        { text: 'Variables', link: '/utilities/variables' },
      ],
    },
    {
      text: 'Content',
      children: [
        { text: 'Typography', link: '/utilities/typography' },
        { text: 'Backgrounds', link: '/utilities/backgrounds' },
        { text: 'Borders', link: '/utilities/borders' },
        { text: 'SVG', link: '/utilities/svg' },
      ],
    },
    {
      text: 'Position',
      children: [
        { text: 'Layout', link: '/utilities/layout' },
        { text: 'Spacing', link: '/utilities/spacing' },
        { text: 'Sizing', link: '/utilities/sizing' },
        { text: 'Flexbox', link: '/utilities/flexbox' },
        { text: 'Grid', link: '/utilities/grid' },
        { text: 'Box Alignment', link: '/utilities/box-alignment' },
        { text: 'Tables', link: '/utilities/tables' },
      ],
    },
    {
      text: 'Enhancement',
      children: [
        { text: 'Effects', link: '/utilities/effects' },
        { text: 'Transitions', link: '/utilities/transitions' },
        { text: 'Transforms', link: '/utilities/transforms' },
        { text: 'Interactivity', link: '/utilities/interactivity' },
        { text: 'Accessibility', link: '/utilities/accessibility' },
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
        { text: 'Migration from Tailwind', link: '/guide/migration' },
      ],
    },
    {
      text: 'Features',
      children: [
        { text: 'Overview', link: '/guide/features/' },
        { text: 'Value Auto-infer', link: '/guide/features/value-auto-infer' },
        { text: 'Variant Groups', link: '/guide/features/variant-groups' },
        { text: 'Shortcuts', link: '/guide/features/shortcuts' },
        { text: 'Responsive Design', link: '/guide/features/responsive-design' },
        { text: 'Dark Mode', link: '/guide/features/dark-mode' },
        { text: 'Important Prefix', link: '/guide/features/important-prefix' },
        { text: 'Directives', link: '/guide/features/directives' },
        // { text: 'Nesting CSS', link: '/guide/features/nesting' },
      ],
    },
    {
      text: 'Integrations',
      children: [
        { text: 'Vite', link: '/guide/integrations/vite' },
        { text: 'Webpack', link: '/guide/integrations/webpack' },
        { text: 'Rollup', link: '/guide/integrations/rollup' },
        { text: 'Nuxt', link: '/guide/integrations/nuxt' },
        { text: 'Vue CLI', link: '/guide/integrations/vue-cli' },
        { text: 'Gridsome', link: '/guide/integrations/gridsome' },
        { text: 'Next.js', link: '/guide/integrations/nextjs' },
        { text: 'Svelte', link: '/guide/integrations/svelte' },
        { text: 'CLI', link: '/guide/integrations/cli' },
        { text: 'VS Code', link: '/guide/editors/vscode' },
        { text: 'WebStorm', link: '/guide/editors/webstorm' },
      ],
    },

    {
      text: 'Advanced',
      children: [
        { text: 'API', link: '/guide/advanced/api' },
        { text: 'Modes', link: '/guide/advanced/modes' },
        { text: 'Plugin', link: '/guide/advanced/plugin' },
        { text: 'The Story', link: '/guide/advanced/story' },
      ],
    },
  ],
}
