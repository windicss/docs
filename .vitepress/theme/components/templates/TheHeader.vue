<script setup lang="ts">
import { useData } from 'vitepress'
import { useRepo } from '@/logics/repo'

const { theme } = useData()
const repo = useRepo()
</script>

<template>
  <header class="d-header">
    <div class="flex flex-none h-full container !max-w-screen-2xl mx-auto px-2 md:px-6">
      <div class="flex items-center lg:hidden">
        <ToggleSidebar />
      </div>
      <div class="flex items-center flex-1 lg:flex-none">
        <AppLogo />
      </div>
      <div class="flex items-center order-last ml-2 lg:(order-none flex-1 ml-4) xl:ml-10">
        <AlgoliaSearchBox :options="theme.algolia" />
      </div>
      <div class="hidden lg:flex items-center flex-1">
        <DropdownMenu />
      </div>
      <div class="flex items-center lg:space-x-3 lg:pl-3 xl:pl-6">
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
    border-b border-$windi-bc;
  height: var(--header-height);
}
</style>
