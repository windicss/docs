<template>
  <main aria-labelledby="main-title">
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
// import { onMounted, onUnmounted } from 'vue'
// let emitted = false
// function scrollDown() {
//   if (!emitted) {
//     window.scrollTo({ top: 10000, behavior: 'smooth' })
//     emitted = true
//   }
//   if (window.scrollY === 0)
//     emitted = false
// }
// onMounted(() => {
//   document.addEventListener('scroll', scrollDown)
// })

// onUnmounted(() => {
//   document.removeEventListener('scroll', scrollDown)
// })
</script>

<style scoped lang="postcss">
.home-content {
  @apply max-w-62rem mx-auto py-6 md:(p-0);
}
</style>
