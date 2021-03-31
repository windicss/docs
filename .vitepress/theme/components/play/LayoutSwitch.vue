<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref } from 'vue'
import { useToggle } from '@vueuse/core'
// @ts-ignore
import { layout } from '../../composables/playgroundLayout'

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
    <NavBarIcon>
      <carbon:open-panel-right />
    </NavBarIcon>
    <div v-if="show" class="dropdown-model">
      <NavBarIcon v-if="layout !== 'left'" @click="layout = 'left'">
        <carbon:open-panel-left />
      </NavBarIcon>
      <NavBarIcon v-if="layout !== 'bottom'" @click="layout = 'bottom'">
        <carbon:open-panel-bottom />
      </NavBarIcon>
      <NavBarIcon v-if="layout !== 'right'" @click="layout = 'right'">
        <carbon:open-panel-right />
      </NavBarIcon>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.dropdown-model {
  @apply
  grid gap-2 p-1.5
  absolute top-11 -left-2
  bg-white dark:bg-dark-700
  rounded-lg border border-blue-gray-200 dark:border-dark-300;
}
</style>
