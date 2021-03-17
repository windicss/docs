<template>
  <header class="nav-bar">
    <ToggleSideBarButton @toggle="$emit('toggle')" />

    <NavBarTitle />

    <div class="hidden md:flex px-3 ml-10">
      <NavLinks />
    </div>

    <div class="flex-grow" />
    <div class="nav-icons space-x-4 mx-4">
      <a v-if="repo" class="icon-button" :href="repo.link" target="_blank">
        <carbon-logo-github />
      </a>
      <dark-mode-switch />
    </div>
    <div class="hidden md:block w-1px h-auto my-2 bg-gray-200 dark:bg-gray-700"></div>
    <slot name="search" />
  </header>
</template>

<script setup lang="ts">
import { defineEmit } from 'vue'
import { useRepo } from '../composables/repo'
import NavBarTitle from './NavBarTitle.vue'
import NavLinks from './NavLinks.vue'
import ToggleSideBarButton from './ToggleSideBarButton.vue'

const repo = useRepo()

defineEmit(['toggle'])
</script>

<style scoped lang="postcss">
.nav-bar {
  @apply
    fixed top-0 inset-x-0 z-$z-index-navbar
    flex space-between align-center
    border-b-1px border-$c-divider
    py-0.7rem pr-4 pl-16
    h-$header-height bg-$c-bg
    md:(px-6);
}

.nav-bar.root {
  @apply border-transparent bg-$c-bg-semi;
}

.nav-icons {
  @apply flex items-center border-b-0 ml-3;
}
.icon-button {
  @apply rounded-lg p-2 bg-gray-200
  bg-opacity-50 hover:bg-opacity-60
  dark:(bg-gray-700 bg-opacity-60 hover:bg-opacity-70);
}
</style>
