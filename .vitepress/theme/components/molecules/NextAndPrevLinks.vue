<template>
  <div v-if="hasLinks">
    <div class="flex border-t dark:border-dark-300 pt-6 justify-between">
      <div class="max-w-1/2">
        <a v-if="prev" class="nav-link" :href="withBase(prev.link)">
          <carbon-arrow-left class="mr-3" />
          <span>{{ prev.text }}</span>
        </a>
      </div>
      <div class="max-w-1/2 text-right">
        <a v-if="next" class="nav-link" :href="withBase(next.link)">
          <span>{{ next.text }}</span>
          <carbon-arrow-right class="ml-3" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
import { useNextAndPrevLinks } from '@/logics/nextAndPrevLinks'

const { hasLinks, prev, next } = useNextAndPrevLinks()
</script>

<style scoped lang="postcss">
.nav-link {
  @apply
    inline-flex items-center px-3
    font-semibold text-sm md:text-base
    text-cool-gray-500 dark:text-gray-400
    hover:(text-gray-800 dark:text-white);
}
</style>
