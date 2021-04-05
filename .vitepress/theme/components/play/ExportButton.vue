
<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref } from 'vue'
import { useToggle, useClipboard } from '@vueuse/core'

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
function copyVueComponent() {
  const { copy } = useClipboard({
    source: 'script setup',
  })
  copy()
}
</script>

<template>
  <div class="relative hidden md:block" @click.stop="toggleShow">
    <NavBarIcon>
      <carbon:export />
    </NavBarIcon>
    <div v-if="show" class="dropdown-model">
      <span>Components</span>
      <div class="flex space-x-2">
        <NavBarIcon @click="copyVueComponent">
          <logos:vue />
        </NavBarIcon>
        <NavBarIcon>
          <logos:react />
        </NavBarIcon>
        <NavBarIcon>
          <logos:svelte-icon />
        </NavBarIcon>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropdown-model {
  @apply
  grid gap-2 p-1.5 px-2
  absolute top-11 -right-2
  bg-white dark:bg-dark-700
  rounded-lg border border-blue-gray-200 dark:border-dark-300;
}
</style>
