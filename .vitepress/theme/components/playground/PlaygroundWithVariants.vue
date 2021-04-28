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
    default: '',
  },
  fixed: {
    default: '',
  },
  appended: {
    default: '',
  },
  nested: {
    default: false,
  },
  html: {
    default: undefined,
  },
  showPreview: {
    default: true,
  },
})

const {
  variant,
  prefix,
} = useVModels(props, emit, { passive: true })

const classes = computed(() => {
  if (!prefix.value)
    return variant.value

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
    :nested="nested"
    :appended="appended"
    :html="html"
    :showPreview="showPreview"
  />
</template>
