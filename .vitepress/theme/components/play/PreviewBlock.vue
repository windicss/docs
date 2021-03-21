<script setup lang="ts">
import { defineProps, watch } from 'vue'

const props = defineProps({
  html: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
})

watch(() => props.html, v => console.log(v))
</script>

<template>
  <div class="block-bg overflow-hidden">
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
