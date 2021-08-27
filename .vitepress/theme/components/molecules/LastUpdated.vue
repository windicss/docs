<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { page, site } = useData()

const hasLastUpdated = computed(() => {
  const lu = site.value.themeConfig.lastUpdated

  return lu !== undefined && lu !== false
})

const prefix = computed(() => {
  const p = site.value.themeConfig.lastUpdated
  return p === true ? 'Last Updated' : p
})

const datetime = ref('')
onMounted(() => {
  // locale string might be different based on end user
  // and will lead to potential hydration mismatch if calculated at build time
  datetime.value = new Date(page.value.lastUpdated).toLocaleString('en-US')
})
</script>

<template>
  <p v-if="hasLastUpdated" class="inline-block">
    <span class="inline-block font-medium">{{ prefix }}:</span>
    <span class="inline-block ml-1.5 font-normal">{{ datetime }}</span>
  </p>
</template>
