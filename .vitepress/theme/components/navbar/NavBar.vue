<template>
  <header class="nav-bar" :class="{'lg:ml-$sidebar-width': sidebarState}">
    <NavBarTitle :class="{'!lg:hidden': sidebarState}" />
    <div class="hidden lg:flex px-3">
      <NavBarLinks />
    </div>

    <div class="flex-grow" />

    <NavBarIconButtons>
      <slot name="icons" />
      <template v-if="bpmd" #search>
        <slot name="search" />
      </template>
    </NavBarIconButtons>
    <ToggleSideBarButton @toggle="toggleSidebar" />
  </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { toggleSidebar } from '../../composables/sideBar'
const bps = useBreakpoints(breakpointsTailwind)
const bpmd = bps.greater('md')

defineProps({
  sidebarState: Boolean,
})
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
