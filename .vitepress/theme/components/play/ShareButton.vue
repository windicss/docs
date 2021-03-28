<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { emitShare } from '../../composables/useShare'

defineProps({})
const toggle = ref(false)

const { start } = useTimeoutFn(() => toggle.value = false, 4000)

function handleShare() {
  emitShare()
  toggle.value = true
  start()
}
</script>

<template>
  <NavBarIcon class="!hidden !md:inline-flex" @click="handleShare()">
    <bx:bx-check-circle v-if="toggle" />
    <bx:bx-clipboard v-else />
  </NavBarIcon>
</template>
