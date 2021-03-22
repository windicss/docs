<template>
  <div class="nav-dropdown-link" :class="{ open }">
    <button class="button" :aria-label="item.ariaLabel" @click="toggle">
      <span class="button-text">{{ item.text }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-cool-gray-500 ml-2" version="1.1" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
      <!-- <span class="button-arrow" :class="open ? 'down' : 'right'" /> -->
    </button>

    <ul class="dialog">
      <li v-for="item in item.items" :key="item.text" class="dialog-item">
        <NavDropdownLinkItem :item="item" />
      </li>
    </ul>
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
.nav-dropdown-link {
  @apply
    relative h-36px overflow-hidden cursor-pointer
    lg:(h-auto overflow-visible);
}

@screen lg {
  .nav-dropdown-link:hover .dialog {
    display: block;
  }
}

.nav-dropdown-link.open {
  height: auto;
}

.button {
  @apply
    block border-0 px-3 py-1.5 w-full flex flex-row items-center
    text-left font-$font-family-base font-semibold text-$c-text whitespace-nowrap bg-transparent cursor-pointer
    lg:(border-b-2px border-transparent px-0 py-5 font-normal text-0.9rem);
}

.button:focus {
  outline: 0;
}

.button-arrow {
  display: inline-block;
  margin-top: -1px;
  margin-left: 0.6rem;
  margin-right: 0.4rem;
  border-top: 6px solid #ccc;
  border-right: 4px solid transparent;
  border-bottom: 0;
  border-left: 4px solid transparent;
  vertical-align: middle;
}

.button-arrow.right {
  transform: rotate(-90deg);
}

.dialog-item:hover {
  @apply bg-blue-gray-100 dark:bg-dark-300;
}

@screen lg {
  .button-arrow.right {
    transform: rotate(0);
  }
}

.dialog {
  @apply m-0 p-0 mb-2 list-none border border-blue-gray-200 dark:border-dark-300;
}

@screen lg {
  .dialog {
    @apply hidden absolute top-12 left-0 rounded-md py-1.5 min-w-36 bg-white dark:bg-dark-700;
  }
}
</style>
