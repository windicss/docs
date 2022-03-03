<template>
  <div v-if="hasLinks">
    <div class="flex border-t border-$windi-bc pt-6 justify-between items-center">
      <div class="max-w-1/2 flex items-center">
        <a v-if="prev" class="nav-link" :href="withBase(prev.link)">
          <carbon-arrow-left class="mr-3" />
          <span class="text-sm md:text-base">{{ prev.text }}</span>
        </a>
      </div>
      <div class="max-w-1/2 flex items-center">
        <a v-if="next" class="nav-link text-right justify-end" :href="withBase(next.link)">
          <span class="text-sm md:text-base">{{ next.text }}</span>
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
  @apply inline-flex items-center px-1 md:px-3
    font-semibold
    text-gray-500 dark:text-gray-400
    hover:(text-gray-800 dark:text-white);
}
</style>
