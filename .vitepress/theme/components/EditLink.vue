<template>
  <div class="edit-link">
    <a
      v-if="url"
      class="link"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ text }} <uil-external-link-alt class="ml-1 text-xs" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { useEditLink } from '../composables/editLink'

const { url, text } = useEditLink()
</script>

<style scoped lang="postcss">
.link {
  @apply inline-flex
    items-center
    text-base font-medium
    text-$c-text-light
    hover:(no-underline text-$c-brand);
}
</style>
