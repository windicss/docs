<script setup lang="ts">
import { useRepo } from '../../composables/repo'

const repo = useRepo()
</script>

<template>
  <div class="flex items-center border-b-0 ml-3 space-x-4 ml-4">
    <a v-if="repo" class="icon-button" :href="repo.link" target="_blank">
      <carbon-logo-github />
    </a>
    <DarkModeSwitch />
  </div>
</template>

<style scoped lang="postcss">
.icon-button {
  @apply flex rounded-lg p-2
  text-$c-text text-1.05rem cursor-pointer
  focus:outline-none
  bg-gray-100 hover:bg-gray-200
  dark:(bg-dark-200 hover:bg-dark-100);
}
</style>
