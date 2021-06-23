<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useTimeoutFn } from '@vueuse/core'
import { emitShare } from '@/logics/useShare'

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
  <IconButton title="Copy link" alt="Copy link" @click="handleShare()">
    <bx:bx-check-circle v-if="toggle" />
    <bx:bx-clipboard v-else />
  </IconButton>
</template>
