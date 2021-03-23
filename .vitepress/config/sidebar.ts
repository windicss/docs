import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/utilities': [
    {
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
    },
  ],
  '/plugins': [
    {
      text: 'Plugins',
      children: [
        { text: 'Aspect Ratio', link: '/plugins/aspect-ratio' },
        { text: 'Forms', link: '/plugins/forms' },
        { text: 'Filters', link: '/plugins/filters' },
        { text: 'Line Clamp', link: '/plugins/line-clamp' },
        { text: 'Scroll Snap', link: '/plugins/scroll-snap' },
        { text: 'Typography', link: '/plugins/typography' },
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
        { text: 'Variant Auto-infer', link: '/guide/features/variant-auto-infer' },
        { text: 'Variant Groups', link: '/guide/features/variant-groups' },
        { text: 'Shortcuts', link: '/guide/features/shortcuts' },
        { text: 'Responsive Design', link: '/guide/features/responsive-design' },
        { text: 'Dark Mode', link: '/guide/features/dark-mode' },
        { text: 'Directives', link: '/guide/features/directives' },
        { text: 'Nesting CSS', link: '/guide/features/nesting' },
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
        { text: 'API', link: '/guide/api' },
        { text: 'Modes', link: '/guide/modes' },
        { text: 'Plugin', link: '/guide/plugin' },
        { text: 'The Story', link: '/guide/story' },
      ],
    },
  ],
}
