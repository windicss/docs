<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  items: {link: string; logo: string; title: string}[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <a
      v-for="item of props.items"
      :key="item.link"
      class="
        border bc rounded-lg p-4 text-$c-fg text-center relative
        no-underline transition-all duration-500 w-30 h-30 hover:(shadow-xl) dark:hover:(bg-gray-400 bg-opacity-10)
      "
      :href="item.link"
    >
      <Logo :name="item.logo" class="text-5xl m-auto block" />
      <div class="absolute bottom-0 left-0 right-0 no-underline pb-3">{{ item.title }}</div>
    </a>
  </div>
</template>
