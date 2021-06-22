<script setup lang="ts">
import { useEditLink } from '@/logics/editLink'

const { url, text } = useEditLink()
</script>

<template>
  <div>
    <a
      v-if="url"
      class="text-sm text-gray-400 hover:text-primary"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <carbon:pen class="inline-block mr-1.5 text-xs" />{{ text }}
    </a>
  </div>
</template>
