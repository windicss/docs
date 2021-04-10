const vue = `
<template>
  {{ HTML }}
</template>

<style>
{{ CSS }}
</style>
`.trim()

const svelte = `
<style>
{{ CSS }}
</style>

{{ HTML }}
`.trim()

export function getTemplateComponent(type: string, html: string, css: string) {
  switch (type) {
    case 'vue':
      return vue
        .replace('{{ HTML }}', html)
        .replace('{{ CSS }}', css)
    case 'svelte':
      return svelte
        .replace('{{ HTML }}', html)
        .replace('{{ CSS }}', css)
    default:
      console.error('Components template not found')
  }
}
