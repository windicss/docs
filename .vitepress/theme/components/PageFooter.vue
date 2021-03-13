<template>
  <footer class="page-footer">
    <EditLink />
    <LastUpdated />
  </footer>
</template>

<script setup lang="ts">
import EditLink from './EditLink.vue'
import LastUpdated from './LastUpdated.vue'
</script>

<style scoped lang="postcss">
.page-footer {
  @apply
    py-4 overflow-auto space-y-1
    lg:(flex space-between align-center space-y-0);
}
</style>
