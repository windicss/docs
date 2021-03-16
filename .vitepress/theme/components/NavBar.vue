<template>
  <header class="nav-bar">
    <ToggleSideBarButton @toggle="$emit('toggle')" />

    <NavBarTitle />

    <div class="flex-grow" />

    <slot name="search" />

    <div class="hidden md:flex px-3">
      <NavLinks />
    </div>

    <div class="nav-icons space-x-3">
      <a v-if="repo" class="icon-button" :href="repo.link" target="_blank">
        <carbon-logo-github />
      </a>
      <dark-mode-switch />
    </div>
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
    py-0.7rem pr-6 pl-16
    h-$header-height bg-$c-bg
    md:(px-6);
}

.nav-bar.root {
  @apply border-transparent bg-$c-bg-semi;
}

.nav-icons {
  @apply flex pt-2px items-center border-b-0 ml-3;
}
</style>
