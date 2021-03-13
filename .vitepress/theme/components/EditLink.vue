<template>
  <div class="edit-link">
    <a
      v-if="url"
      class="link"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ text }}<carbon:launch class="inline-block ml-1.5 text-xs leading-6 opacity-50" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { useEditLink } from '../composables/editLink'

const { url, text } = useEditLink()
</script>

<style scoped lang="postcss">
.link {
  @apply
    text-base font-medium
    text-$c-text-light
    hover:(no-underline text-$c-brand);
}
</style>
