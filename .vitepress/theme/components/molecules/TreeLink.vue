<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vitepress'

import type { DefaultTheme } from '@/config'
import type { PropType } from 'vue'

defineProps({
  item: {
    type: Object as PropType<DefaultTheme.NavItemWithChildren>,
    required: true,
  },
})

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

<template>
  <div class="flex flex-col">
    <button class="p-2 flex items-center font-medium" :aria-label="item.ariaLabel" @click="toggle">
      <uil:angle-right class="mr-1 transform transition-transform" :class="{ 'rotate-90': open}" />
      {{ item.text }}
    </button>
    <transition name="collapse">
      <ul
        v-if="open"
        class="px-4"
      >
        <li v-for="nav in item.items" :key="nav.text">
          <div v-if="nav.text === 'separator'" class="border-b border-$windi-bc my-1 mx-3" />
          <NavLink v-else :item="nav" class="whitespace-nowrap font-base hover:bg-gray-100  dark:hover:bg-dark-300 rounded w-full text-sm" />
        </li>
      </ul>
    </transition>
  </div>
</template>
