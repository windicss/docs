<template>
  <main class="px-4 md:px-8 pb-16 pt-1 container !max-w-780px mx-auto">
    <slot name="top" />

    <div class="content">
      <Content />
    </div>

    <PageFooter />

    <NextAndPrevLinks />

    <slot name="bottom" />
  </main>
</template>

<script setup lang="ts">
import PageFooter from './PageFooter.vue'
import NextAndPrevLinks from './NextAndPrevLinks.vue'
</script>

<style scoped>
.content {
  padding-bottom: 1.5rem;
}

/* Utility classes should not wrap */
.content tbody tr td:nth-child(1) {
  white-space: nowrap;
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}
</style>
