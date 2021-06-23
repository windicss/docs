
<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref } from 'vue'
import { useToggle } from '@vueuse/core'
// @ts-ignore
import { layout } from '@/logics/playgroundLayout'

defineProps({})

const show = ref(false)

const toggleShow = useToggle(show)
const close = () => show.value = false
onMounted(() => {
  document.addEventListener('click', close)
})
onUnmounted(() => {
  document.removeEventListener('click', close)
})
</script>

<template>
  <div class="relative hidden md:block" @click.stop="toggleShow">
    <button class="focus:outline-none">
      <uil:angle-down class="bg-blue-gray-100 hover:bg-blue-gray-200 rounded w-6 h-6 text-gray-700 dark:bg-dark-300 dark:text-gray-100 dark:hover:bg-dark-800" />
    </button>
    <div v-if="show" class="dropdown-model">
      <span>Components</span>
      <div class="flex space-x-2">
        <IconButton>
          <logos:vue />
        </IconButton>
        <IconButton>
          <logos:react />
        </IconButton>
        <IconButton>
          <logos:svelte-icon />
        </IconButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropdown-model {
  @apply
  grid gap-2 p-1.5 px-2
  absolute top-8 right-0
  bg-white dark:bg-dark-700
  rounded-lg border border-blue-gray-200 dark:border-dark-300;
}
</style>
