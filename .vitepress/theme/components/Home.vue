<template>
  <main class="pt-$header-height" aria-labelledby="main-title">
    <HomeHero />
    <slot name="hero" />
    <!-- <HomeFeatures /> -->

    <div class="home-content">
      <Content />
    </div>
    <slot name="features" />
    <HomeFooter />
    <slot name="footer" />
  </main>
</template>

<script setup lang="ts">
import HomeHero from './HomeHero.vue'
import HomeFooter from './HomeFooter.vue'
</script>

<style scoped lang="postcss">
.home-content {
  @apply max-w-62rem mx-auto py-6 md:(p-0);
}
</style>
