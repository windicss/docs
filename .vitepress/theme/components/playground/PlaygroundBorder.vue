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
  <SelectorSize
    v-model="size" 
    :sizes="['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '1/2', 'full']"
  />
  <div class="mt-4" />
  <InlinePlayground 
    :input="classes" 
    fixed="bg-teal-400 m-4 w-30 h-30 text-transparent transition-all duration-300" 
  />
</template>
