<script setup lang="ts">
import { ref, computed } from 'vue'

const directions = ref<string[]>(['br'])
const size = ref('2xl')

const classes = computed(() => {
  let strs = []
  if (directions.value.includes('ALL'))
    strs = ['rounded']
  else
    strs = directions.value.map(i => `rounded-${i}`)

  if (size.value)
    strs = strs.map(i => `${i}-${size.value}`)

  return strs.join(' ')
})
</script>

<template>
  <SelectorBox v-model="directions" />
  <div class="mt-1" />
  <SelectorSize v-model="size" :sizes="['none', 'sm', '', 'lg', 'xl', '2xl', '3xl', 'full']" />
  <div class="mt-4" />
  <InlinePlayground :input="classes" fixed="bg-teal-400 p-2 m-2 w-35 h-35 text-transparent" />
</template>
