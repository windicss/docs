<script setup lang="ts">
import { ref, computed, defineProps, defineEmit } from 'vue'
import { useVModels } from '@vueuse/core'

const emit = defineEmit()
const props = defineProps({
  directions: {
    default: () => ['ALL']
  },
  size: {
    default: ''
  },
  sizes: {
    default: () => ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '1/2', 'full']
  },
  prefix: {
    default: 'rounded'
  },
  mode: {
    default: 'all'
  },
  fixed: {
    default: 'bg-teal-500 m-4 w-30 h-30 text-transparent transition-all duration-300'
  }
})

const {
  directions,
  size,
  prefix
} = useVModels(props, emit, { passive: true })

const classes = computed(() => {
  let strs = []
  if (directions.value.includes('ALL'))
    strs = [prefix.value]
  else
    strs = directions.value.map(i => `${prefix.value}-${i}`)

  if (size.value)
    strs = strs.map(i => `${i}-${size.value}`)

  return strs.join(' ')
})
</script>

<template>
  <SelectorBox v-model="directions" :mode="mode"/>
  <div class="mt-1" />
  <SelectorSize
    v-model="size" 
    :sizes="sizes"
  />
  <div class="mt-4" />
  <InlinePlayground 
    :input="classes" 
    :fixed="fixed"
    :showMode="true"
  />
</template>
