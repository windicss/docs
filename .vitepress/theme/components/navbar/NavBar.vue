<template>
  <header class="nav-bar">
    <slot>
      <ToggleSideBarButton @toggle="$emit('toggle')" />

      <NavBarTitle />

      <div class="hidden lg:flex px-3 ml-4 xl:ml-6" :class="{'!xl:ml-28': sidebarState}">
        <NavLinks />
      </div>

      <div class="flex-grow" />

      <NavBarIconButtons>
        <slot name="icons" />
        <template #search>
          <slot name="search" />
        </template>
      </NavBarIconButtons>
    </slot>
  </header>
</template>

<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

defineProps({
  sidebarState: Boolean,
})

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
