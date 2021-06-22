<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <aside>
    <div class="sticky top-$header-height h-$full-header overflow-auto">
      <SidebarNav />
    </div>
  </aside>
</template>
