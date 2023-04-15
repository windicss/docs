<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useLocalStorage } from '@vueuse/core'
import { useRoute } from 'vitepress'

const clicked = useLocalStorage('sunsetting-note-clicked', false)

const route = useRoute()

const showNote = computed(() => {
  if (route.path === '/posts/sunsetting')
    return false
  if (route.path === '/')
    return true
  return !clicked.value
})
</script>

<template>
  <div class="fixed left-0 right-0 bottom-0 bg-$windi-bg" v-if="showNote">
    <a
      class="
        bg-orange-600 bg-opacity-5
        flex rounded items-center gap-4
        text-orange-500
        hover:bg-opacity-10
        p-4 md:px-6
        text-sm lg:text-base"
      @click="clicked = true"
      href="/posts/sunsetting"
    >
      <CarbonSunset class="text-2xl flex-none" />
      <div class="flex flex-col">
        <span class="font-bold flex gap-2"> Windi CSS is Sunsetting</span>
        We recommend new projects to consider alternatives. Click for more information.
      </div>
    </a>
  </div>
</template>
