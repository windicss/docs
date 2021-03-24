<template>
  <aside class="sidebar" :class="{ 'open': openSideBar }">
    <div class="sticky bg-$c-bg top-0 flex items-center justify-between p-4 pt-15px -mx-4 z-51">
      <NavBarTitle class="px-2" />
      <ToggleSideBarButton @toggle="toggleSidebar" />
    </div>
    <SideBarNavLinks class="nav" />

    <slot name="sidebar-top" />

    <SideBarLinks />

    <slot name="sidebar-bottom" />
  </aside>
</template>

<script setup lang="ts">
import { openSideBar, toggleSidebar } from '../../composables/sideBar'
</script>

<style scoped lang="postcss">

.sidebar {
  background-color: var(--c-bg);
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.25s ease;
  @apply relative h-screen fixed lg:left-0 -lg:right-0 top-0 z-50 border-r-1px border-$c-divider px-4 pb-4 w-full md:w-$sidebar-width;
}

@screen lg {
  .sidebar {
    transform: translateX(0);
  }
}

.sidebar.open {
  transform: translateX(0);
}

.nav {
  @apply block !lg:hidden;
}
</style>
