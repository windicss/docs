<template>
  <main class="pt-$header-height" aria-labelledby="main-title">
    <HomeHero />
    <slot name="hero" />
    <HomeFeatures />
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
import HomeFeatures from './HomeFeatures.vue'
import HomeFooter from './HomeFooter.vue'
</script>

<style scoped lang="postcss">
.home-content {
  @apply max-w-960px mx-auto py-6;
}

@media (max-width: 720px) {
  .home-content {
    @apply max-w-392px p-0;
  }
}
</style>
