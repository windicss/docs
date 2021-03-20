<template>
  <header class="nav-bar">
    <ToggleSideBarButton @toggle="$emit('toggle')" />

    <NavBarTitle />

    <div class="hidden lg:flex px-3 ml-4 lg:ml-10">
      <NavLinks />
    </div>

    <div class="flex-grow" />

    <NavBarIconButtons />

    <div class="hidden lg:block w-1px h-auto my-2 bg-gray-200 dark:bg-gray-700"></div>
    <slot name="search" />
  </header>
</template>

<script setup lang="ts">
import { defineEmit } from 'vue'

defineEmit(['toggle'])
</script>

<style scoped lang="postcss">
.nav-bar {
  @apply
    fixed top-0 inset-x-0 z-$z-index-navbar
    flex space-between align-center select-none
    border-b-1px border-$c-divider
    py-0.7rem px-4
    h-$header-height bg-$c-bg
    md:px-5 lg:px-6;
}

.nav-bar.root {
  @apply border-transparent bg-$c-bg-semi;
}
</style>
