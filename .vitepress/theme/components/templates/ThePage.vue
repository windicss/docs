<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <TheHeader />
  <div class="content">
    <TheSidebar />
    <div class="grid py-12 px-4">
      <HomeHero />
      <div class="prose min-w-0">
        <Content />
      </div>
      <PageFooter />
      <NextAndPrevLinks />
    </div>
    <TheRightSidebar />
  </div>
</template>

<style scoped lang="postcss">
.content {
  display: grid;
  grid-template-columns: 250px 1fr 250px;
  grid-template-rows: 1fr;
  gap: 0px 12px;
  @apply container !max-w-screen-2xl px-6 mx-auto pt-$header-height;
}
</style>
