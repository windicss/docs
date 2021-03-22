<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  html: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="block-bg m-4 overflow-hidden">
    <div class="block-title">
      Preview
    </div>
    <div class="p-4 h-full">
      <ClientOnly>
        <PlaygroundIframe class="w-full h-full" :html="html" :css="css"></PlaygroundIframe>
      </ClientOnly>
    </div>
  </div>
</template>
