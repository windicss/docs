<template>
  <aside class="sidebar" :class="{ 'open': openSideBar }">
    <div class="sticky bg-$c-bg top-0 flex items-center justify-between p-4 pt-15px -mx-4 z-51">
      <NavBarTitle class="px-2" />
      <div class="flex-grow" />
      <slot name="search" />
      <ToggleSideBarButton @toggle="toggleSidebar(false)">
        <ri:close-fill />
      </ToggleSideBarButton>
    </div>
    <SideBarNavLinks class="nav" />

    <slot name="sidebar-top" />

    <SideBarLinks />

    <slot name="sidebar-bottom" />
  </aside>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { openSideBar, toggleSidebar } from '../../composables/sideBar'
watch(openSideBar, (v) => {
  v
    ? document.documentElement.classList.add('overflow-hidden')
    : document.documentElement.classList.remove('overflow-hidden')
})
</script>

<style scoped lang="postcss">

.sidebar {
  @apply
    relative h-screen overflow-y-auto bg-$c-bg
    fixed lg:left-0 -lg:right-0 top-0 z-50
    border-r-1px border-$c-divider
    px-4 pb-4 w-full md:w-$sidebar-width
    transition-transform duration-250
    transform -md:-translate-y-full md:translate-x-full lg:translate-x-0;
  &.open {
    @apply translate-y-0 md:translate-x-0
  }
}

.nav {
  @apply block !lg:hidden;
}
</style>
