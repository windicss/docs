<template>
  <div class="sidebar-button -ml-2 text-2xl" @click="$emit('toggle')">
    <ion:menu />
  </div>
</template>

<script lang="ts">
export default {
  emits: ['toggle'],
}
</script>

<style>
.sidebar-button {
  display: block;
  padding: 0.6rem;
  cursor: pointer;
  @apply cursor-pointer hidden h-full inline-flex px-2 items-center lg:hidden;
}
</style>
