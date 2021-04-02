<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  author: { type: String, default: null },
})
</script>

<template>
  <div class="custom-block tip">
    <p class="mb-0">
      <slot />
    </p>
    <span v-if="author" class="text-right block text-sm font-semibold mb-3">
      —{{ author }}
    </span>
  </div>
</template>
