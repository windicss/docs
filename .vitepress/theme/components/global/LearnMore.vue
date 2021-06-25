<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  to: string
}>()
</script>

<template>
  <div class="mt-4">
    <a :href="to" class="text-primary border-b border-transparent !hover:(no-underline border-current)">
      Learn more <carbon:arrow-right class="inline" />
    </a>
  </div>
</template>
