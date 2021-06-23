<script setup lang="ts">
import { useRepo } from '@/logics/repo'
const repo = useRepo()
</script>

<template>
  <header class="d-header">
    <div class="flex flex-none h-full w-full px-3 md:px-6">
      <div class="flex items-center flex-1">
        <AppLogo />
        <span class="hidden md:block text-sm ml-2 mt-1 text-cool-gray-400 dark:text-cool-gray-500">
          play v1.0.0
        </span>
      </div>
      <div class="flex items-center md:space-x-3">
        <PlaygroundActionButtons />
        <IconButton class="hidden lg:inline-flex" :href="repo?.link">
          <carbon-logo-github />
        </IconButton>
        <ToggleDark />
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.d-header {
  @apply
    fixed top-0 inset-x-0 z-50
    bg-light-100 dark:bg-dark-800
    flex items-center
    border-b border-gray-200 dark:border-dark-200;
  height: var(--header-height);
}
</style>
