<template>
  <p v-if="hasLastUpdated" class="last-updated">
    <span class="inline-block font-medium">{{ prefix }}:</span>
    <span class="inline-block ml-1.5 font-normal">{{ datetime }}</span>
  </p>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useSiteDataByRoute, usePageData } from 'vitepress'

const site = useSiteDataByRoute()
const page = usePageData()

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

<style scoped lang="postcss">
.last-updated {
  @apply inline-block m-0 text-0.9rem leading-1.4rem text-$c-text-light lg:(text-base leading-1.4rem);
}
</style>
