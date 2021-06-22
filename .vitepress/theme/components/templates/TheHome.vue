<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <TheHeader />
  <div class="content">
    <div class="grid">
      <HomeHero />
      <div class="prose py-12 min-w-0 px-4">
        <Content />
      </div>
    </div>
  </div>
  <HomeFooter />
</template>

<style scoped lang="postcss">
.content {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 0px 12px;
  @apply container !max-w-screen-2xl px-6 mx-auto pt-$header-height;
}
</style>
