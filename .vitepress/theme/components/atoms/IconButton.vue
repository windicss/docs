<script setup lang="ts">
import { defineProps } from 'vue'
import type { PropType } from 'vue'

defineProps({
  to: {
    type: [String, Object] as PropType<string | object | null>,
    default: null,
  },
  href: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener"
    class="inline-flex text-xl p-2"
  >
    <slot></slot>
  </a>
  <button v-else class="inline-flex text-xl p-2">
    <slot></slot>
  </button>
</template>
