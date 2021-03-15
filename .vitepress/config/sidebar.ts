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
        { text: 'Directives', link: '/guide/features/directives' },
        { text: 'Dark Mode', link: '/guide/features/dark-mode' },
        { text: 'Variant Groups', link: '/guide/features/variant-groups' },
        { text: 'Shortcuts', link: '/guide/features/shortcuts' },
        { text: 'Variant Auto-infer', link: '/guide/features/variant-auto-infer' },
      ],
    },
    {
      text: 'Integrations',
      children: [
        { text: 'Vite', link: '/guide/integrations/vite' },
        { text: 'Webpack', link: '/guide/integrations/webpack' },
        { text: 'Nuxt', link: '/guide/integrations/nuxt' },
        { text: 'Vue CLI', link: '/guide/integrations/vue-cli' },
        { text: 'SvelteKit', link: '/guide/integrations/svelte-kit' },
        { text: 'Sapper', link: '/guide/integrations/svelte-sapper' },
        { text: 'CLI', link: '/guide/integrations/cli' },
      ],
    },

    {
      text: 'Advanced',
      children: [
        { text: 'Modes', link: '/guide/modes' },
        { text: 'The Story', link: '/guide/story' },
      ],
    },
  ],
}
