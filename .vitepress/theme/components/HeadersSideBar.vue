<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})
</script>

<template>
  <aside class="hidden lg:block h-full" :class="{ open }">
    <div v-if="$page?.headers?.length" class="headers-sidebar">
      <div class="text-base font-bold mb-2 py-1">
        Sections
      </div>
      <ul class="sidebar-links space-y-1.5">
        <li v-for="item of $page.headers" :key="item.text" class="sidebar-link">
          <a class="sidebar-link-item" :href="`#${item.slug}`">{{ item.title }}</a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped lang="postcss">
.headers-sidebar {
  height: calc(100vh - var(--header-height));
  @apply sticky top-$header-height py-7 px-6 overflow-y-auto;
}
</style>
