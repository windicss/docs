<script setup lang="ts">
import { computed, defineProps, defineEmit } from 'vue'
import { useVModels } from '@vueuse/core'

const emit = defineEmit()
const props = defineProps({
  variant: {
    default: '',
  },
  variants: {
    default: () => ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '1/2', 'full'],
  },
  prefix: {
    default: 'rounded',
  },
  fixed: {
    default: '',
  },
  html: {
    default: undefined,
  },
})

const {
  variant,
  prefix,
} = useVModels(props, emit, { passive: true })

const classes = computed(() => {
  let strs = [prefix.value]

  if (variant.value)
    strs = strs.map(i => `${i}-${variant.value}`)

  return strs.join(' ')
})
</script>

<template>
  <SelectorVariants
    v-model="variant"
    :variants="variants"
  />
  <div class="mt-4" />
  <InlinePlayground
    :input="classes"
    :fixed="fixed"
    :html="html"
  />
</template>
