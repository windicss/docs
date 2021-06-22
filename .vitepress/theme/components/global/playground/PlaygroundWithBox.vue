<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'
import { useVModels } from '@vueuse/core'

const emit = defineEmit()
const props = defineProps({
  directions: {
    default: () => ['ALL'],
  },
  variant: {
    default: '',
  },
  variants: {
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
  variant,
  prefix,
} = useVModels(props, emit, { passive: true })

const classes = computed(() => {
  let strs = []
  if (directions.value.includes('ALL'))
    strs = [prefix.value]
  else
    strs = directions.value.map(i => `${prefix.value}-${i}`)

  if (variant.value)
    strs = strs.map(i => `${i}-${variant.value}`)

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
    <SelectorVariants
      v-model="variant"
      class="max-w-20em mt-auto"
      :variants="variants"
    />
  </div>
  <div class="mt-4" />
  <InlinePlayground
    :input="classes"
    :fixed="fixed"
    :show-mode="true"
  />
</template>
