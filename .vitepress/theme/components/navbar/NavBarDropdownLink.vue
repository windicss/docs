<template>
  <div class="nav-dropdown-link">
    <button class="button" :aria-label="item.ariaLabel">
      <span class="button-text">{{ item.text }}</span>
      <uil:angle-down class="w-4 h-4 text-gray-500 ml-1" />
    </button>

    <div class="dialog">
      <div v-for="item in item.items" :key="item.text" class="dialog-item">
        <NavBarDropdownLinkItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { DefaultTheme } from '../../config'

defineProps<{
  item: DefaultTheme.NavItemWithChildren
}>()
</script>

<style scoped lang="postcss">
.nav-dropdown-link {
  @apply relative overflow-visible cursor-pointer;
}

.nav-dropdown-link:hover .dialog {
  display: flex;
}

.button {
  @apply
    block border-0 px-3 py-2 w-full flex flex-row items-center
    text-left font-$font-family-base font-semibold text-$c-text whitespace-nowrap bg-transparent cursor-pointer
    lg:(px-0 py-5 font-normal text-0.9rem)
    focus:outline-none;
}

.dialog-item:hover {
  @apply bg-blue-gray-100 dark:bg-dark-300;
}

.dialog {
  @apply
    hidden flex-col py-1.5
    absolute top-12 left-0 min-w-36 transform -translate-x-4
    bg-white dark:bg-dark-700
    rounded-md border border-blue-gray-200 dark:border-dark-300
    list-none;
}
</style>
