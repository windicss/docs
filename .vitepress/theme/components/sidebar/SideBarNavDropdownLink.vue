<template>
  <div class="nav-dropdown-link" :class="{ open }">
    <button class="button" :aria-label="item.ariaLabel" @click="toggle">
      <span class="button-text">{{ item.text }}</span>
      <uil:angle-down class="w-4 h-4 text-gray-500 dark:text-gray-400 ml-1 transition-all" :class="{ ' transform rotate-180': open }" />
    </button>

    <div class="dialog">
      <div v-for="item in item.items" :key="item.text">
        <SideBarNavDropdownLinkItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import type { DefaultTheme } from '../../config'
defineProps<{
  item: DefaultTheme.NavItemWithChildren
}>()
const route = useRoute()
const open = ref(false)
watch(
  () => route.path,
  () => {
    open.value = false
  },
)
function toggle() {
  open.value = !open.value
}
</script>

<style scoped lang="postcss">
/* .nav-dropdown-link {
  pointer-events: none
} */

.nav-dropdown-link.open .dialog {
  display: flex;
}

.button {
  @apply
    block border-0 px-3 py-2 w-full flex flex-row items-center
    text-left font-$font-family-base font-semibold text-$c-text whitespace-nowrap bg-transparent cursor-pointer
    lg:(px-0 py-5 font-normal text-0.9rem)
    focus:outline-none;
}

.dialog {
  @apply
    hidden flex-col py-1.5
    /* bg-white dark:bg-dark-700 */
    /* rounded-md border border-blue-gray-200 dark:border-dark-300 */
    list-none;
}
</style>
