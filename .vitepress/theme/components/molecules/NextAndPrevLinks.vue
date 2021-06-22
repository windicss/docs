<template>
  <div v-if="hasLinks">
    <div class="flex border-t border-dark-300 pt-6 justify-between text-gray-400 font-semibold">
      <div class="max-w-1/2">
        <a v-if="prev" class="inline-flex items-center px-3 hover:text-white" :href="withBase(prev.link)">
          <carbon-arrow-left class="mr-3" />
          <span>{{ prev.text }}</span>
        </a>
      </div>
      <div class="max-w-1/2 text-right">
        <a v-if="next" class="inline-flex items-center px-3 hover:text-white" :href="withBase(next.link)">
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
