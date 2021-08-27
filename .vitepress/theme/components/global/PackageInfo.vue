<script setup lang="ts">
defineProps<{
  name: string
  repo?: string
  author?: string
  hideNpm?: boolean
}>()

function encode(str: string) {
  return encodeURIComponent(str).replace(/-/g, '--')
}
</script>

<template>
  <p class="space-x-2">
    <a :href="`https://github.com/windicss/${repo || name}`" target="_blank" class="inline-block">
      <img class="!m-0" :src="`https://img.shields.io/badge/a-${encode(name)}-gray?logo=github&label=`">
    </a>
    <a
      v-if="!hideNpm"
      :href="`https://www.npmjs.com/package/${name}`"
      target="_blank"
      class="inline-block"
    >
      <img class="!m-0" :src="`https://img.shields.io/npm/v/${name}?color=cb0200&label=%20&logo=npm`">
    </a>
    <a
      v-if="author"
      :href="`https://github.com/${author}`"
      target="_blank"
      class="inline-block"
    >
      <img class="!m-0" :src="`https://img.shields.io/badge/a-${encode('@'+author)}-48B0F1?label=`">
    </a>
    <slot />
  </p>
</template>
