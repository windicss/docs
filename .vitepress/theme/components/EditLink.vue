<template>
  <div class="edit-link">
    <a
      v-if="url"
      class="link"
      :href="url"
      target="_blank"
      rel="noopener noreferrer"
    >
      <carbon:pen class="inline-block mr-1.5 text-sm leading-6 opacity-75" />{{ text }}
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
    text-$c-text-light opacity-50
    hover:(no-underline text-primary opacity-100);
}
</style>
