<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref<'export' | 'layout' | null>(null)

const handleToggle = (v: 'export' | 'layout') => {
  if (!show.value || show.value !== v)
    show.value = v
  else
    show.value = null
}
const close = () => show.value = null
onMounted(() => {
  document.addEventListener('click', close)
})
onUnmounted(() => {
  document.removeEventListener('click', close)
})
</script>

<template>
  <ShareButton />
  <LayoutSwitch :open="show === 'layout'" @toggle="handleToggle('layout')" />
  <ExportButton :open="show === 'export'" class="!hidden !md:inline-flex" @toggle="handleToggle('export')" />
</template>
