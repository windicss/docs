<script setup lang="ts">
defineProps<{
  items: {link: string; logo: string; title: string; wip?: boolean }[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <a
      v-for="item of items"
      :key="item.link"
      class="
        relative
        no-underline
        border rounded-lg
        h-30 w-30 p-4
        text-$c-fg text-center
        transition-all duration-500
        border-$windi-bc
        hover:(shadow-lg)
        dark:hover:(bg-gray-400 bg-opacity-10)
      "
      :href="item.link"
    >
      <Logo :name="item.logo" class="!m-auto text-5xl block" />
      <div class="pb-3 right-0 bottom-0 left-0 absolute no-underline">{{ item.title }}</div>
      <div v-if="item.wip" class="text-xs opacity-50 transform right-2 bottom-7 scale-90 absolute italic">WIP</div>
    </a>
  </div>
</template>
