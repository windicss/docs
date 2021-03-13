<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'
import { useVModels } from '@vueuse/core'

const emit = defineEmit()
const props = defineProps({
  directions: {
    default: () => ['ALL'],
  },
  size: {
    default: '',
  },
  sizes: {
    default: () => ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '1/2', 'full'],
  },
  prefix: {
    default: 'rounded',
  },
  mode: {
    default: 'all',
  },
  fixed: {
    default: '',
  },
})

const {
  directions,
  size,
  prefix,
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
  <div class="flex gap-4">
    <SelectorBox
      v-model="directions"
      class="flex-none"
      :mode="mode"
    />
    <SelectorSize
      v-model="size"
      class="max-w-20em mt-auto"
      :sizes="sizes"
    />
  </div>
  <div class="mt-4" />
  <InlinePlayground
    :input="classes"
    :fixed="fixed"
    :show-mode="true"
  />
</template>
