<template>
  <div class="sidebar-button -ml-2 text-xl" :class="{ '!hidden': enablePlayground }" @click="emit('toggle')">
    <ri-menu-4-fill />
  </div>
</template>

<script setup lang="ts">
import { defineEmit, computed } from 'vue'
import { useRoute } from 'vitepress'

const emit = defineEmit(['toggle'])
const route = useRoute()

const enablePlayground = computed(() => !!route.data.frontmatter.playground)
</script>

<style>
.sidebar-button {
  @apply cursor-pointer h-full inline-flex px-2 items-center lg:hidden;
}
</style>
