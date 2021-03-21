<template>
  <aside class="h-full">
    <div class="sidebar" :class="{ open }">
      <div class="px-2 -mt-1px w-56">
        <NavBarTitle />
      </div>
      <NavLinks class="nav" />

      <slot name="sidebar-top" />

      <SideBarLinks />

      <slot name="sidebar-bottom" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import NavBarTitle from './navbar/NavBarTitle.vue'
import NavLinks from './navbar/NavLinks.vue'
import SideBarLinks from './SideBarLinks.vue'

defineProps({
  open: { type: Boolean, required: true },
})
</script>

<style scoped lang="postcss">

.sidebar {
  background-color: var(--c-bg);
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.25s ease;
  @apply h-screen fixed left-0 top-0 z-50 border-r-1px border-$c-divider py-4;
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
  display: block;
}

@screen lg {
  .nav {
    display: none;
  }
}
</style>
