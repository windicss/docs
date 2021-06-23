<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <aside class="hidden lg:block">
    <div class="sticky top-$header-height h-$full-header overflow-auto">
      <TableOfContent />
    </div>
  </aside>
</template>
