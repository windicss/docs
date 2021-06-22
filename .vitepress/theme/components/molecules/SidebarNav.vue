<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})

</script>

<template>
  <nav
    class="
        flex flex-col
        justify-between
        lg:justify-start
        overflow-y-auto
        h-$full-header
      "
  >
    <SidebarLinks />
  </nav>
</template>
