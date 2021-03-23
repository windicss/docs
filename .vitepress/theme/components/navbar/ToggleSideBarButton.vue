<template>
  <div class="sidebar-button -mr-2 ml-2 text-xl" @click="emit('toggle')">
    <ri-menu-4-fill />
  </div>
</template>

<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['toggle'])
</script>

<style>
.sidebar-button {
  @apply cursor-pointer h-full inline-flex px-2 items-center lg:hidden;
}
</style>
